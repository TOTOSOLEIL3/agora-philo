/* ============================================================
   AGORA — moteur de jeu
   ============================================================ */

/* ---------- utilitaires ---------- */
const $ = sel => document.querySelector(sel);

/* RNG seedable : un même seed rejoue exactement les mêmes questions (défis) */
let rand = Math.random;
const mulberry32 = a => () => {
  a |= 0; a = a + 0x6D2B79F5 | 0;
  let t = Math.imul(a ^ a >>> 15, 1 | a);
  t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
  return ((t ^ t >>> 14) >>> 0) / 4294967296;
};

const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = (arr, n) => shuffle(arr).slice(0, n);

const escapeHtml = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- saisie libre d'un nom d'auteur, tolérante aux fautes ---------- */
const normalize = s => String(s).toLowerCase()
  .normalize("NFD").replace(/[̀-ͯ]/g, "")  // épicure → epicure
  .replace(/[^a-z ]/g, " ").replace(/\s+/g, " ").trim();

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (!m) return n;
  if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

// Formes acceptées : nom complet, nom de famille seul (« beauvoir » pour Simone de Beauvoir)
function authorForms(author) {
  const n = normalize(author);
  const words = n.split(" ");
  const forms = new Set([n]);
  if (words.length > 1) {
    forms.add(words[words.length - 1]);
    forms.add(words.slice(-2).join(" "));
  }
  return [...forms];
}

const typoTolerance = len => len <= 4 ? 0 : len <= 7 ? 1 : len <= 10 ? 2 : 3;

// → { ok, exact } : exact = orthographe parfaite, ok = accepté avec tolérance
function checkAuthor(input, author) {
  const inp = normalize(input);
  if (!inp) return { ok: false, exact: false };
  let ok = false, exact = false;
  for (const f of authorForms(author)) {
    if (inp === f) { ok = true; exact = true; break; }
    if (levenshtein(inp, f) <= typoTolerance(f.length)) ok = true;
  }
  return { ok, exact };
}

// "Kant (formule attribuée)" → "Kant", "d'après Hegel" → "Hegel"
const cleanName = s => s.replace(/^d'après /i, "").split(" (")[0].trim();

// Première phrase d'une thèse (gère les citations « … » internes)
const firstSentence = t => {
  const m = t.match(/^.*?[.!?…](\s*»)?(?=\s|$)/);
  return m ? m[0] : t.slice(0, 160) + "…";
};

/* ---------- état persistant ---------- */
const store = {
  get xp() { return Number(localStorage.getItem("agora_xp") || 0); },
  set xp(v) { localStorage.setItem("agora_xp", v); },
  best(game) { return localStorage.getItem("agora_best_" + game); },
  setBest(game, v) { localStorage.setItem("agora_best_" + game, v); }
};

function levelFor(xp) {
  let lvl = LEVELS[0];
  for (const l of LEVELS) if (xp >= l.xp) lvl = l;
  return lvl;
}

function refreshHud() {
  $("#hud-xp").textContent = store.xp;
  $("#hud-level").textContent = levelFor(store.xp).name;
}

function refreshBests() {
  document.querySelectorAll("[data-best]").forEach(el => {
    const g = el.dataset.best;
    const b = store.best(g);
    if (b === null) return;
    if (g === "match") el.textContent = `Record : ${b} coups`;
    else if (g === "cards") el.textContent = `Maîtrisés : ${b}/${FLASHCARDS.length}`;
    else if (g === "marathon") el.textContent = `Record : série de ${b}`;
    else el.textContent = `Record : ${b}/10`;
  });
  renderNotionGrid();
  refreshErrorBadges();
}

function renderNotionGrid() {
  const grid = $("#notion-grid");
  if (!grid) return;
  grid.innerHTML = COURS.map((c, i) => {
    const best = store.best("notion_" + c.id);
    return `
    <button class="notion-chip" data-nav="fiche:${c.id}">
      <span class="n">N° ${String(i + 1).padStart(2, "0")}${best !== null ? ` · ★ ${best}/10` : ""}</span>
      <span class="t">${c.title}</span>
      <span class="c">${c.tag}</span>
    </button>`;
  }).join("");
}

function gainXp(amount) {
  const before = levelFor(store.xp).name;
  store.xp = store.xp + amount;
  refreshHud();
  if (window.lbSync) try { window.lbSync(); } catch (e) {}
  return levelFor(store.xp).name !== before; // niveau franchi ?
}

/* ============================================================
   DÉFIS ENTRE POTES — un lien rejoue les mêmes questions
   ============================================================ */
let currentRun = null;        // { game, seed } de la partie en cours
let challengeCtx = null;      // { score, total, pseudo } si on joue un défi
let pendingChallenge = null;  // défi reçu via l'URL, pas encore accepté

const CHALLENGEABLE = key => /^(quotes|quiz|vf|examen|sansfilet|drill:)/.test(key || "");

function beginRun(key) {
  if (pendingBattle && pendingBattle.game === key) {
    currentRun = { game: key, seed: pendingBattle.seed };
    challengeCtx = null;
    pendingBattle = null;
    rand = mulberry32(currentRun.seed);
    return;
  }
  if (pendingChallenge && pendingChallenge.game === key) {
    currentRun = { game: key, seed: pendingChallenge.seed };
    challengeCtx = { score: pendingChallenge.score, total: pendingChallenge.total, pseudo: pendingChallenge.pseudo };
    pendingChallenge = null;
  } else {
    currentRun = { game: key, seed: Math.floor(Math.random() * 2147483647) };
    challengeCtx = null;
  }
  rand = mulberry32(currentRun.seed);
}

function gameTitleFor(key) {
  if (key.startsWith("drill:")) {
    const c = COURS.find(x => x.id === key.slice(6));
    return c ? "Révision · " + c.title : "Révision ciblée";
  }
  return (GAMES[key] || {}).title || key;
}

function challengeLink(score, total) {
  const p = encodeURIComponent((localStorage.getItem("agora_pseudo") || "Un·e pote").slice(0, 16));
  return `https://agora-philo.fr/#defi=${currentRun.game}_${currentRun.seed.toString(36)}_${score}_${total}_${p}`;
}

function parseChallenge() {
  const m = location.hash.match(/^#defi=([a-z:]+)_([0-9a-z]+)_(\d+)_(\d+)_(.+)$/i);
  if (!m) return;
  pendingChallenge = {
    game: m[1], seed: parseInt(m[2], 36),
    score: Number(m[3]), total: Number(m[4]),
    pseudo: decodeURIComponent(m[5]).slice(0, 16)
  };
  history.replaceState(null, "", location.pathname + location.search);
  track("defi-recu");
  renderDefiBanner();
}

function renderDefiBanner() {
  const el = $("#defi-banner");
  if (!el || !pendingChallenge) return;
  const c = pendingChallenge;
  el.innerHTML = `
    <span class="defi-txt">⚔️ <strong>${escapeHtml(c.pseudo)}</strong> te défie sur <strong>${gameTitleFor(c.game)}</strong> — son score : <strong>${c.score}/${c.total}</strong>. Mêmes questions, à toi de faire mieux.</span>
    <button class="btn danger" id="defi-go">Relever le défi ⚔️</button>`;
  el.style.display = "flex";
  $("#defi-go").addEventListener("click", () => {
    el.style.display = "none";
    track("defi-accepte");
    const key = pendingChallenge.game;
    if (key.startsWith("drill:")) startNotionDrill(key.slice(6));
    else nav(key);
  });
}

function duelBlock(score, total) {
  if (!challengeCtx) return "";
  const c = challengeCtx;
  const win = score > c.score, tie = score === c.score;
  return `
    <div class="duel-result ${win ? "win" : tie ? "tie" : "lose"}">
      <span class="vs">⚔️ RÉSULTAT DU DUEL</span>
      <span class="scores">${escapeHtml(c.pseudo)} : <strong>${c.score}/${c.total}</strong> — Toi : <strong>${score}/${total}</strong></span>
      <span class="verdict">${win ? "VICTOIRE ! 🏆" : tie ? "Égalité parfaite — l'agora retient son souffle" : "Défaite… vengeance immédiate ?"}</span>
    </div>`;
}

/* ============================================================
   BATTLE EN DIRECT — code d'invitation, scores en temps réel
   ============================================================ */
let battleCtx = null;      // { code } pendant une partie en battle
let pendingBattle = null;  // { game, seed } à consommer par beginRun
let battlePlayers = [];    // dernier état des joueurs (snapshot live)

const BATTLE_GAMES = [
  ["quiz", "🏛️ Le Grand QCM"],
  ["quotes", "🗣️ Qui a dit ça ?"],
  ["vf", "⚖️ Vrai ou Faux"],
  ["sansfilet", "🖋️ Sans filet"]
];

function battleCleanup() {
  if (window.battle) try { window.battle.unwatch(); } catch (e) {}
  battleCtx = null;
  pendingBattle = null;
  battlePlayers = [];
  const live = $("#battle-live");
  if (live) { live.innerHTML = ""; live.style.display = "none"; }
}

function ensurePseudoField() {
  const p = localStorage.getItem("agora_pseudo") || "";
  return `<div class="type-zone" style="margin-bottom:1rem">
    <input id="battle-pseudo" maxlength="16" placeholder="Ton pseudo (2–16 caractères)" value="${escapeHtml(p)}" autocomplete="off">
  </div>`;
}

function readPseudo() {
  const v = ($("#battle-pseudo")?.value || localStorage.getItem("agora_pseudo") || "").trim();
  if (v.length < 2) return null;
  localStorage.setItem("agora_pseudo", v);
  if (window.lbSync) try { window.lbSync(); } catch (e) {}
  return v;
}

function startBattleSetup(prefillCode) {
  battleCleanup();
  $("#game-title").textContent = "Battle en direct";
  setMeta("", "");
  setProgress(0);
  show("view-game");

  if (!window.battle || !window.battle.ready()) {
    stage().innerHTML = `<div class="q-card"><div class="label">Connexion…</div>
      <div class="question" style="font-size:1.1rem;font-family:var(--font-body)">Connexion au serveur de battle… si rien ne se passe en quelques secondes, vérifie ta connexion (ou ton bloqueur de pub).</div></div>
      <div class="next-zone"><button class="btn" id="battle-retry">Réessayer</button></div>`;
    $("#battle-retry").addEventListener("click", () => startBattleSetup(prefillCode));
    return;
  }

  stage().innerHTML = `
    <div class="q-card">
      <div class="label">⚡ Battle en direct</div>
      <div class="question" style="font-size:1.1rem;font-family:var(--font-body)">Mêmes questions, en même temps, sur chaque téléphone — scores en direct. Crée une salle ou rejoins avec un code.</div>
    </div>
    ${ensurePseudoField()}
    <div class="fiche-sec">
      <div class="sec-title">Créer une battle</div>
      <div class="options">
        ${BATTLE_GAMES.map(([k, label], i) => `<button class="opt" data-bgame="${k}"><span class="key">${String.fromCharCode(65 + i)}</span><span>${label}</span></button>`).join("")}
      </div>
    </div>
    <div class="fiche-sec">
      <div class="sec-title">Rejoindre avec un code</div>
      <div class="type-zone">
        <input id="battle-code" maxlength="4" placeholder="CODE" value="${escapeHtml(prefillCode || "")}" autocomplete="off" autocapitalize="characters" style="text-transform:uppercase;letter-spacing:0.3em;font-family:var(--font-mono)">
        <button class="btn primary" id="battle-join">Rejoindre ⚡</button>
      </div>
      <p class="mono" id="battle-error" style="color:var(--red);margin-top:0.6rem"></p>
    </div>`;

  document.querySelectorAll("[data-bgame]").forEach(b => b.addEventListener("click", async () => {
    if (!readPseudo()) { $("#battle-pseudo").focus(); return; }
    b.disabled = true;
    try {
      const seed = Math.floor(Math.random() * 2147483647);
      const code = await window.battle.create(b.dataset.bgame, seed);
      track("battle-creee");
      battleLobby(code, true);
    } catch (e) { $("#battle-error").textContent = "Création impossible — réessaie."; b.disabled = false; }
  }));

  const join = async () => {
    if (!readPseudo()) { $("#battle-pseudo").focus(); return; }
    const code = ($("#battle-code").value || "").trim().toUpperCase();
    if (code.length !== 4) { $("#battle-error").textContent = "Le code fait 4 caractères."; return; }
    try {
      const b = await window.battle.get(code);
      if (!b) { $("#battle-error").textContent = "Aucune battle avec ce code."; return; }
      if (b.status !== "waiting") { $("#battle-error").textContent = "Cette battle a déjà commencé."; return; }
      await window.battle.enter(code);
      track("battle-rejointe");
      battleLobby(code, false);
    } catch (e) { $("#battle-error").textContent = "Connexion impossible — réessaie."; }
  };
  $("#battle-join").addEventListener("click", join);
  $("#battle-code").addEventListener("keydown", e => { if (e.key === "Enter") join(); });
}

function battleLobby(code, isHost) {
  $("#game-title").textContent = "Battle · salle " + code;
  let launched = false;

  stage().innerHTML = `
    <div class="battle-code-box">
      <span class="mono">Code de la salle</span>
      <div class="battle-code">${code}</div>
      <button class="btn" id="battle-share">Inviter les potes 📤</button>
    </div>
    <div class="fiche-sec">
      <div class="sec-title">Dans la salle</div>
      <ul class="battle-players" id="battle-players"><li class="mono">connexion…</li></ul>
    </div>
    <div class="next-zone" id="battle-action">
      ${isHost
        ? `<button class="btn danger" id="battle-go" disabled>Lancer la battle ⚡</button>`
        : `<p class="mono">En attente du lancement par l'hôte…</p>`}
    </div>`;

  $("#battle-share").addEventListener("click", () =>
    shareScore(`⚡ Battle de philo EN DIRECT sur AGORA ! Code : ${code} — rejoins avant le coup d'envoi :`, `https://agora-philo.fr/#battle=${code}`));

  window.battle.watch(code,
    b => {
      if (b.status === "playing" && !launched) {
        launched = true;
        battleCountdown(code, b);
      }
    },
    ps => {
      battlePlayers = ps;
      const ul = $("#battle-players");
      if (ul) ul.innerHTML = ps.map(p => `<li>🦉 <strong>${escapeHtml(p.pseudo || "…")}</strong></li>`).join("");
      const go = $("#battle-go");
      if (go) go.disabled = ps.length < 2;
      renderBattleLive();
      renderBattleRank();
    });

  const go = $("#battle-go");
  if (go) go.addEventListener("click", () => { go.disabled = true; track("battle-lancee"); window.battle.start(code); });
}

function battleCountdown(code, b) {
  battleCtx = { code };
  let n = 3;
  const tick = () => {
    if (n > 0) {
      stage().innerHTML = `<div class="endscreen"><div class="big-score countdown">${n}</div><div class="mention">Prépare-toi…</div></div>`;
      n--;
      setTimeout(tick, 900);
    } else {
      pendingBattle = { game: b.game, seed: b.seed };
      if (b.game.startsWith("drill:")) startNotionDrill(b.game.slice(6));
      else nav(b.game);
      const live = $("#battle-live");
      if (live) live.style.display = "flex";
    }
  };
  tick();
}

function renderBattleLive() {
  const el = $("#battle-live");
  if (!el || !battleCtx) return;
  const myUid = window.battle ? window.battle.myUid() : null;
  const others = battlePlayers.filter(p => p.id !== myUid);
  el.innerHTML = others.map(p =>
    `<span class="blive ${p.done ? "bdone" : ""}">⚡ ${escapeHtml(p.pseudo || "…")} · ${p.score}/${p.progress}${p.done ? " ✓" : ""}</span>`).join("");
}

function renderBattleRank() {
  const el = $("#battle-rank");
  if (!el) return;
  const myUid = window.battle ? window.battle.myUid() : null;
  const sorted = [...battlePlayers].sort((a, b) => b.score - a.score || (b.done ? 1 : 0) - (a.done ? 1 : 0));
  const medals = ["🥇", "🥈", "🥉"];
  el.innerHTML = `<div class="recap-title">⚡ Classement de la battle</div>` + sorted.map((p, i) => `
    <div class="recap-row ${p.id === myUid ? "me-row" : ""}">
      <span>${medals[i] || i + 1}</span>
      <span class="recap-notion">${escapeHtml(p.pseudo || "…")}</span>
      <span class="recap-score">${p.score}/${p.progress}${p.done ? "" : " · en cours…"}</span>
    </div>`).join("");
  if (sorted.length > 1 && sorted.every(p => p.done) && sorted[0].id === myUid && !el.dataset.celebrated) {
    el.dataset.celebrated = "1";
    confetti();
  }
}

/* ---- bandeau « rejoindre une battle » (discret, sur l'accueil) ---- */
let openBattle = null;

function renderBattleBanner() {
  const el = $("#battle-open-banner");
  if (!el) return;
  const homeActive = $("#view-home").classList.contains("active");
  const mine = openBattle && window.battle && openBattle.host === window.battle.myUid();
  const dismissed = localStorage.getItem("agora_dismiss_battle");
  if (!openBattle || !homeActive || battleCtx || mine || dismissed === openBattle.code) {
    el.style.display = "none";
    return;
  }
  const label = (BATTLE_GAMES.find(g => g[0] === openBattle.game) || [, "une battle"])[1];
  el.innerHTML = `
    <span class="bo-txt">⚡ Une battle <strong>${escapeHtml(label)}</strong> attend des joueurs — code <strong>${escapeHtml(openBattle.code)}</strong></span>
    <span class="bo-actions">
      <button class="btn" id="bo-join">Rejoindre ⚡</button>
      <button class="bo-x" id="bo-dismiss" aria-label="Masquer">✕</button>
    </span>`;
  el.style.display = "flex";
  $("#bo-join").addEventListener("click", () => joinBattleFromBanner(openBattle.code));
  $("#bo-dismiss").addEventListener("click", () => {
    localStorage.setItem("agora_dismiss_battle", openBattle.code);
    el.style.display = "none";
  });
}

async function joinBattleFromBanner(code) {
  if (!window.battle || !window.battle.ready() || !localStorage.getItem("agora_pseudo")) {
    startBattleSetup(code);
    return;
  }
  try {
    const b = await window.battle.get(code);
    if (!b || b.status !== "waiting") { toast("Cette battle a déjà commencé ou n'existe plus."); openBattle = null; renderBattleBanner(); return; }
    track("battle-rejointe");
    await window.battle.enter(code);
    battleLobby(code, false);
  } catch (e) { startBattleSetup(code); }
}

function watchOpenBattles() {
  let tries = 0;
  const t = setInterval(() => {
    if (window.battle && window.battle.ready()) {
      clearInterval(t);
      window.battle.watchOpen(b => { openBattle = b; renderBattleBanner(); });
    } else if (++tries > 30) clearInterval(t);
  }, 500);
}

function parseBattleHash() {
  const m = location.hash.match(/^#battle=([A-Z0-9]{4})$/i);
  if (!m) return;
  history.replaceState(null, "", location.pathname + location.search);
  // petite attente que Firebase soit prêt
  let tries = 0;
  const t = setInterval(() => {
    tries++;
    if ((window.battle && window.battle.ready()) || tries > 20) {
      clearInterval(t);
      startBattleSetup(m[1].toUpperCase());
    }
  }, 400);
}

/* ---------- mes erreurs : les questions ratées, à re-réviser ---------- */
const errStore = {
  all() { return JSON.parse(localStorage.getItem("agora_errors") || "[]"); },
  save(list) { localStorage.setItem("agora_errors", JSON.stringify(list.slice(-120))); },
  add(item) {
    const list = this.all();
    const key = (item.q || "").slice(0, 80);
    const existing = list.find(e => e.key === key);
    if (existing) existing.fails = (existing.fails || 1) + 1;
    else list.push({ ...item, key, fails: 1 });
    this.save(list);
    refreshErrorBadges();
  },
  remove(key) { this.save(this.all().filter(e => e.key !== key)); refreshErrorBadges(); },
  count() { return this.all().length; }
};

function recordError(item) { errStore.add(item); }

/* ---------- compétences par notion : repérer les lacunes ---------- */
const skillStore = {
  all() { return JSON.parse(localStorage.getItem("agora_skills") || "{}"); },
  record(notion, good) {
    if (!notion || !COURS.some(c => c.id === notion)) return;
    const s = this.all();
    const e = s[notion] || { ok: 0, total: 0 };
    e.total++; if (good) e.ok++;
    s[notion] = e;
    localStorage.setItem("agora_skills", JSON.stringify(s));
  },
  // notions travaillées, triées de la plus fragile à la plus solide (min N réponses)
  ranked(minTotal = 1) {
    const s = this.all();
    return Object.entries(s)
      .filter(([, e]) => e.total >= minTotal)
      .map(([id, e]) => ({ id, ok: e.ok, total: e.total, rate: e.ok / e.total }))
      .sort((a, b) => a.rate - b.rate || b.total - a.total);
  }
};

// notion la plus ratée d'une session → { id, title } ou null
function recoFromMiss(miss) {
  const entries = Object.entries(miss || {});
  if (!entries.length) return null;
  entries.sort((a, b) => b[1] - a[1]);
  const c = COURS.find(x => x.id === entries[0][0]);
  return c ? { id: c.id, title: c.title } : null;
}

/* ---------- MON BILAN : diagnostic des lacunes par notion ---------- */
function startDiagnostic() {
  $("#game-title").textContent = "Mon bilan par notion";
  setMeta("", "");
  setProgress(0);
  show("view-game");
  track("diagnostic");

  const ranked = skillStore.ranked(1);
  if (!ranked.length) {
    stage().innerHTML = `
      <div class="endscreen">
        <div class="big-score">🧭</div>
        <div class="mention">Pas encore de données</div>
        <p class="comment">Fais quelques QCM, un examen blanc ou des révisions par notion : ton bilan apparaîtra ici, tes points faibles classés et de quoi les travailler.</p>
        <div class="actions">
          <button class="btn primary" data-nav="quiz">Lancer un QCM</button>
          <button class="btn" data-nav="examen">L'Examen Blanc</button>
          <button class="btn" data-nav="home">Retour</button>
        </div>
      </div>`;
    return;
  }

  const level = r => r >= 0.8 ? "solide" : r >= 0.5 ? "à consolider" : "fragile";
  const cls = r => r >= 0.8 ? "good" : r >= 0.5 ? "mid" : "bad";
  const weak = ranked.filter(x => x.rate < 0.5);
  const seen = skillStore.all();
  const untouched = COURS.filter(c => !seen[c.id]);

  stage().innerHTML = `
    <div class="q-card">
      <div class="label">Diagnostic — d'après toutes tes réponses</div>
      <div class="question" style="font-size:1.1rem;font-family:var(--font-body)">
        ${weak.length
          ? `Tes notions les plus fragiles : <strong>${weak.slice(0, 3).map(w => COURS.find(c => c.id === w.id).title).join(", ")}</strong>. À travailler en priorité avant le jour J.`
          : "Solide — aucune notion en zone rouge pour l'instant. Continue à élargir ta couverture."}
      </div>
    </div>
    <div class="diag-list">
      ${ranked.map(r => {
        const c = COURS.find(x => x.id === r.id);
        const pct = Math.round(r.rate * 100);
        return `<div class="diag-row ${cls(r.rate)}">
          <div class="diag-head">
            <span class="diag-name">${c.title}</span>
            <span class="diag-pct">${r.ok}/${r.total} · ${pct}%</span>
          </div>
          <div class="diag-track"><div class="diag-fill" style="width:${Math.max(4, pct)}%"></div></div>
          <div class="diag-actions">
            <span class="diag-tag">${level(r.rate)}</span>
            <button class="btn ghost" data-nav="fiche:${r.id}">Relire</button>
            <button class="btn ghost" data-nav="drill:${r.id}">S'entraîner</button>
          </div>
        </div>`;
      }).join("")}
    </div>
    ${untouched.length ? `<p class="mono" style="opacity:.65;margin-top:1.4rem">Pas encore testé : ${untouched.map(c => c.title).join(", ")}.</p>` : ""}
    <div class="next-zone"><button class="btn" data-nav="home">← Retour à l'arène</button></div>`;
}

function refreshErrorBadges() {
  const el = $("#errors-count");
  if (!el) return;
  const n = errStore.count();
  el.textContent = n === 0 ? "Aucune erreur enregistrée 😇" : `${n} question${n > 1 ? "s" : ""} à corriger`;
}

/* ---------- partage de score ---------- */
async function shareScore(text, url = "https://agora-philo.fr") {
  track(url.includes("#defi=") ? "defi-envoye" : url.includes("#battle=") ? "battle-invitation" : "partage");
  const full = text + "\n" + url;
  try {
    if (navigator.share) { await navigator.share({ text: full }); return; }
  } catch (e) { if (e && e.name === "AbortError") return; }
  try { await navigator.clipboard.writeText(full); toast("Copié ! Colle-le à tes potes 📋"); }
  catch { prompt("Copie ce texte :", full); }
}

/* ---------- statistiques d'usage (événements maison, dans Firestore, sans cookies) ---------- */
function track(name) {
  try { if (window.lbStat) window.lbStat(name); } catch (e) {}
}
window.track = track;

function toast(msg) {
  const t = document.createElement("div");
  t.className = "toast";
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2600);
}

/* ---------- confettis (records & sans-faute) ---------- */
function confetti() {
  const colors = ["#2230d4", "#e4502a", "#c9962e", "#2e7d4f", "#17140e"];
  for (let i = 0; i < 50; i++) {
    const s = document.createElement("span");
    s.className = "confetti";
    s.style.left = Math.random() * 100 + "vw";
    s.style.background = colors[i % colors.length];
    s.style.animationDelay = (Math.random() * 0.4) + "s";
    s.style.animationDuration = (1.6 + Math.random() * 1.2) + "s";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 3400);
  }
}

/* ---------- série quotidienne & compte à rebours ---------- */
const fmtDate = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const todayStr = () => fmtDate(new Date());
const yesterdayStr = () => { const d = new Date(); d.setDate(d.getDate() - 1); return fmtDate(d); };

// Appelée à chaque question répondue (tous jeux confondus)
function bumpDaily() {
  const t = todayStr();
  const daily = JSON.parse(localStorage.getItem("agora_daily") || "{}");
  const n = (daily.d === t ? daily.n : 0) + 1;
  localStorage.setItem("agora_daily", JSON.stringify({ d: t, n }));
  if (n === DAILY_GOAL) track("objectif-quotidien-atteint");

  const st = JSON.parse(localStorage.getItem("agora_streak") || "{}");
  if (st.last !== t) {
    const days = st.last === yesterdayStr() ? (st.days || 0) + 1 : 1;
    localStorage.setItem("agora_streak", JSON.stringify({ last: t, days }));
  }
  renderDaily();
}

function renderDaily() {
  const el = $("#daily-strip");
  if (!el) return;
  const t = todayStr();
  const daily = JSON.parse(localStorage.getItem("agora_daily") || "{}");
  const n = daily.d === t ? daily.n : 0;
  const st = JSON.parse(localStorage.getItem("agora_streak") || "{}");
  const days = (st.last === t || st.last === yesterdayStr()) ? (st.days || 0) : 0;

  const diff = Math.round((new Date(BAC_DATE) - new Date(t)) / 86400000);
  const jx = diff > 1 ? `J−${diff} avant l'épreuve`
    : diff === 1 ? "L'épreuve est DEMAIN — tu gères 💪"
    : diff === 0 ? "C'EST AUJOURD'HUI ! Merde ! 🍀"
    : "Épreuve passée — repose-toi, tu l'as mérité";

  el.innerHTML = `
    <span class="${days > 0 ? "hot" : ""}">🔥 ${days} jour${days > 1 ? "s" : ""} de série</span>
    <span class="sep">✶</span>
    <span>${n >= DAILY_GOAL ? "✓ objectif atteint : " : ""}${n}/${DAILY_GOAL} questions aujourd'hui</span>
    <span class="sep">✶</span>
    <span class="jx">📅 ${jx}</span>`;
}

/* ---------- navigation ---------- */
const GAMES = {
  quotes: { title: "Qui a dit ça ?", start: startQuotes },
  quiz: { title: "Le Grand QCM", start: startQuiz },
  vf: { title: "Vrai ou Faux", start: startVF },
  cards: { title: "Les Repères", start: startCards },
  match: { title: "Le Grand Duel", start: startMatch },
  sansfilet: { title: "Sans filet", start: startSansFilet },
  marathon: { title: "Le Marathon", start: startMarathon },
  examen: { title: "L'Examen Blanc", start: startExamen },
  errors: { title: "Mes erreurs", start: startErrors },
  battle: { title: "Battle en direct", start: startBattleSetup },
  diagnostic: { title: "Mon bilan", start: startDiagnostic }
};

function show(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  $("#" + viewId).classList.add("active");
  window.scrollTo({ top: 0 });
  if (typeof renderBattleBanner === "function") renderBattleBanner();
}

function nav(target) {
  if (target === "home") {
    battleCleanup();
    refreshBests();
    show("view-home");
    return;
  }
  const game = GAMES[target];
  if (!game) return;
  track("jeu-" + target);
  $("#game-title").textContent = game.title;
  setMeta("", "");
  setProgress(0);
  show("view-game");
  game.start();
}

document.addEventListener("click", e => {
  const jump = e.target.closest("[data-jump]");
  if (jump) {
    refreshBests();
    show("view-home");
    requestAnimationFrame(() => document.getElementById(jump.dataset.jump)?.scrollIntoView({ behavior: "smooth" }));
    return;
  }
  const btn = e.target.closest("[data-nav]");
  if (!btn) return;
  const target = btn.dataset.nav;
  if (target.startsWith("fiche:")) openFiche(target.slice(6));
  else if (target.startsWith("methodo:")) openMethodo(target.slice(8));
  else if (target.startsWith("drill:")) startNotionDrill(target.slice(6));
  else nav(target);
});

/* ============================================================
   RÉVISION PAR NOTION — questions générées depuis la fiche
   ============================================================ */
function buildDrill(c) {
  const pool = [];
  const names = [...new Set(c.auteurs.map(a => cleanName(a.name)))];
  const distractors = correct => shuffle(names.filter(n => n !== correct)).slice(0, 3);

  c.auteurs.forEach(a => {
    const nm = cleanName(a.name);
    // Thèse → auteur
    pool.push({
      kind: "qcm", label: "Qui défend cette thèse ?", q: a.these,
      answer: nm, opts: shuffle([nm, ...distractors(nm)]),
      why: `C'est la thèse de ${nm} — ${a.oeuvre}.`
    });
    // Œuvre → auteur (si l'œuvre est un vrai titre)
    if (!/rapporté|fragments|formule|attribué/i.test(a.oeuvre)) {
      pool.push({
        kind: "qcm", label: "De qui est cette œuvre ?", q: `« ${a.oeuvre} »`,
        answer: nm, opts: shuffle([nm, ...distractors(nm)]),
        why: `${a.oeuvre} : c'est ${nm}.`
      });
    }
    // Vrai/Faux : attribution correcte ou piégée
    const truth = rand() < 0.5;
    const wrongPool = names.filter(n => n !== nm);
    const shown = truth ? nm : wrongPool[Math.floor(rand() * wrongPool.length)];
    pool.push({
      kind: "vf", label: "Vrai ou faux ?",
      q: `Cette idée est défendue par ${shown} : « ${firstSentence(a.these)} »`,
      v: truth,
      why: truth ? `Oui — c'est bien ${nm} (${a.oeuvre}).` : `Non — c'est la thèse de ${nm} (${a.oeuvre}).`
    });
  });

  // Citation → auteur
  c.citations.forEach(q => {
    const nm = cleanName(q.a);
    const candidates = [...new Set([...names, ...c.citations.map(x => cleanName(x.a))])].filter(n => n !== nm);
    pool.push({
      kind: "qcm", label: "Qui a dit ça ?", q: `« ${q.q} »`,
      answer: nm, opts: shuffle([nm, ...shuffle(candidates).slice(0, 3)]),
      why: `${q.a}.`
    });
  });

  // Vocabulaire → terme
  (c.vocab || []).forEach(v => {
    const distract = shuffle(c.vocab.filter(x => x !== v)).slice(0, 3).map(x => x.m);
    if (distract.length < 3) return;
    pool.push({
      kind: "qcm", label: "Quel terme correspond à cette définition ?", q: v.d,
      answer: v.m, opts: shuffle([v.m, ...distract]),
      why: `${v.m} : ${v.d}`
    });
  });

  // Étymologie → notion
  if (c.etym) {
    const shortEtym = e => e.split(". ")[0].slice(0, 110);
    const others = shuffle(COURS.filter(x => x.id !== c.id && x.etym)).slice(0, 3).map(x => shortEtym(x.etym));
    pool.push({
      kind: "qcm", label: "Étymologie", q: `Quelle est l'étymologie de « ${c.title} » ?`,
      answer: shortEtym(c.etym), opts: shuffle([shortEtym(c.etym), ...others]),
      why: c.etym
    });
  }

  // Vrai sujet de bac → quelle notion ? (seulement les sujets qui ne contiennent pas le mot)
  if (typeof ANNALES !== "undefined") {
    const keyword = normalize(c.title).replace(/^l[ae]? ?/, "");
    const candidats = ANNALES.filter(a => a.n.includes(c.id) && !normalize(a.s).includes(keyword));
    pick(candidats, 2).forEach(a => {
      const distract = shuffle(COURS.filter(x => !a.n.includes(x.id))).slice(0, 3).map(x => x.title);
      pool.push({
        kind: "qcm", label: "Vrai sujet de bac : quelle notion ?", q: `« ${a.s} » (${a.loc}, ${a.y})`,
        answer: c.title, opts: shuffle([c.title, ...distract]),
        why: `Ce sujet (${a.loc} ${a.y}) porte sur ${a.n.map(id => (COURS.find(x => x.id === id) || {}).title || id).join(" et ")}.`
      });
    });
  }

  // Repère → définition à trous
  c.reperes.forEach(r => {
    const card = FLASHCARDS.find(f => f.front.toLowerCase() === r.toLowerCase());
    if (!card) return;
    let masked = card.back;
    card.front.split("/").map(s => s.trim()).forEach(t => {
      masked = masked.replace(new RegExp(t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), "______");
    });
    const distract = shuffle(FLASHCARDS.filter(f => f !== card)).slice(0, 3).map(f => f.front);
    pool.push({
      kind: "qcm", label: "Quel repère officiel correspond à cette définition ?", q: masked,
      answer: card.front, opts: shuffle([card.front, ...distract]),
      why: `${card.back}`
    });
  });

  return pool;
}

function startNotionDrill(id) {
  const c = COURS.find(x => x.id === id);
  if (!c) return;
  beginRun("drill:" + id);
  track("revision-" + id);
  $("#game-title").textContent = "Révision · " + c.title;
  setMeta("", "");
  setProgress(0);
  show("view-game");

  const rounds = pick(buildDrill(c), 10);
  let i = 0, score = 0, streak = 0;

  function round() {
    const cur = rounds[i];
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);

    if (cur.kind === "qcm") {
      stage().innerHTML = `
        <div class="q-card">
          <div class="label">${cur.label}</div>
          <div class="question" style="font-size:1.15rem">${cur.q}</div>
        </div>
        <div class="options">${cur.opts.map(optionButton).join("")}</div>
        <div id="feedback"></div>
        <div class="next-zone" id="next-zone"></div>`;

      document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
        const good = cur.opts[btn.dataset.idx] === cur.answer;
        document.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          if (cur.opts[b.dataset.idx] === cur.answer) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
          else b.classList.add("dimmed");
        });
        after(good);
      }));
    } else {
      stage().innerHTML = `
        <div class="q-card">
          <div class="label">${cur.label}</div>
          <div class="question" style="font-size:1.15rem">${cur.q}</div>
        </div>
        <div class="vf-buttons">
          <button class="opt" data-v="true"><span>VRAI</span></button>
          <button class="opt" data-v="false"><span>FAUX</span></button>
        </div>
        <div id="feedback"></div>
        <div class="next-zone" id="next-zone"></div>`;

      document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
        const good = (btn.dataset.v === "true") === cur.v;
        document.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          if ((b.dataset.v === "true") === cur.v) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
          else b.classList.add("dimmed");
        });
        after(good);
      }));
    }

    function after(good) {
      if (good) { score++; streak++; }
      else {
        streak = 0;
        recordError({ kind: cur.kind, label: cur.label, q: cur.q, opts: cur.opts, answer: cur.answer, v: cur.v, why: cur.why });
      }
      skillStore.record(id, good);
      bumpDaily();
      $("#feedback").innerHTML = explainBlock(good, good ? "Exact !" : "Eh non…", cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("notion_" + id, score);
    endScreen({
      score, total: rounds.length,
      xp: score * 12,
      bestLine: isRecord ? "★ Nouveau record sur cette notion !" : `Record : ${store.best("notion_" + id)}/10`,
      replay: () => startNotionDrill(id),
      extra: { nav: "fiche:" + id, label: "Relire la fiche" }
    });
  }

  round();
}

/* ============================================================
   LE COURS — fiches de notions
   ============================================================ */
function openFiche(id) {
  const i = COURS.findIndex(c => c.id === id);
  if (i === -1) return;
  track("fiche-" + id);
  const c = COURS[i];
  const prev = COURS[(i - 1 + COURS.length) % COURS.length];
  const next = COURS[(i + 1) % COURS.length];

  $("#fiche-stage").innerHTML = `
    <div class="fiche-back"><button class="btn ghost" data-jump="cours">← Toutes les notions</button></div>
    <header class="fiche-head">
      <span class="tag">${c.tag} · Notion ${String(i + 1).padStart(2, "0")}/${COURS.length}</span>
      <h1>${c.title}</h1>
      ${c.etym ? `<p class="etym-line"><span class="etym-label">Étymologie</span> ${c.etym}</p>` : ""}
      <p class="lead">${c.intro}</p>
      <div class="fiche-cta">
        <button class="btn primary" data-nav="drill:${c.id}">⚔ Réviser cette notion · 10 questions</button>
        <span class="mono">${store.best("notion_" + c.id) !== null ? "Record : " + store.best("notion_" + c.id) + "/10" : "Questions générées depuis cette fiche"}</span>
      </div>
    </header>

    <section class="fiche-sec">
      <div class="sec-title">Les problématiques</div>
      <ul class="prob-list">${c.problematiques.map(p => `<li>${p}</li>`).join("")}</ul>
    </section>

    ${c.cours ? `
    <section class="fiche-sec">
      <div class="sec-title">L'essentiel du cours</div>
      ${c.cours.map(p => `
        <article class="cours-part">
          <h3>${p.t}</h3>
          <p>${p.d}</p>
        </article>`).join("")}
    </section>` : ""}

    ${c.vocab ? `
    <section class="fiche-sec">
      <div class="sec-title">Le vocabulaire à maîtriser</div>
      <dl class="vocab-list">
        ${c.vocab.map(v => `
        <div class="vocab-row">
          <dt>${v.m}</dt>
          <dd>${v.d}</dd>
        </div>`).join("")}
      </dl>
    </section>` : ""}

    <section class="fiche-sec">
      <div class="sec-title">Les auteurs incontournables</div>
      ${c.auteurs.map(a => `
        <article class="auteur-card">
          <div class="who"><span class="name">${a.name}</span><span class="oeuvre">${a.oeuvre}</span></div>
          <p class="these">${a.these}</p>
        </article>`).join("")}
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Citations à caser — et à expliquer</div>
      ${c.citations.map(q => `
        <div class="cite-block">
          <p class="txt">« ${q.q} »</p>
          <p class="who">${q.a}</p>
          ${q.exp ? `<details class="cite-exp"><summary>Comment l'expliquer ?</summary><p>${q.exp}</p></details>` : ""}
        </div>`).join("")}
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Repères liés</div>
      <div class="repere-chips">${c.reperes.map(r => `<span>${r}</span>`).join("")}</div>
    </section>

    ${(() => {
      const ann = (typeof ANNALES !== "undefined" ? ANNALES.filter(a => a.n.includes(c.id)) : []).sort((a, b) => b.y - a.y);
      return ann.length ? `
    <section class="fiche-sec">
      <div class="sec-title">Tombé au bac — les vrais sujets</div>
      <ul class="annales-list">
        ${ann.map(a => `<li><span class="an-year">${a.y}</span><span class="an-sub">${a.s}</span><span class="an-loc">${a.loc}</span></li>`).join("")}
      </ul>
    </section>` : "";
    })()}

    <section class="fiche-sec">
      <div class="sec-title">Sujets d'entraînement possibles</div>
      <ul class="sujet-list">${c.sujets.map(s => `<li>${s}</li>`).join("")}</ul>
    </section>

    <section class="fiche-sec">
      <div class="piege-box">
        <div class="ttl">⚠ Le piège à éviter</div>
        <p>${c.piege}</p>
      </div>
    </section>

    <nav class="fiche-nav">
      <button class="btn" data-nav="fiche:${prev.id}">← ${prev.title}</button>
      <button class="btn danger" data-nav="drill:${c.id}">⚔ Réviser</button>
      <button class="btn primary" data-nav="fiche:${next.id}">${next.title} →</button>
    </nav>`;

  show("view-fiche");
}

/* ============================================================
   MÉTHODOLOGIE
   ============================================================ */
function openMethodo(id) {
  const m = METHODO.find(x => x.id === id) || METHODO[0];
  track("methodo-" + m.id);

  $("#methodo-stage").innerHTML = `
    <div class="fiche-back"><button class="btn ghost" data-nav="home">← Retour à l'arène</button></div>
    <div class="methodo-tabs">
      ${METHODO.map(x => `<button data-nav="methodo:${x.id}" class="${x.id === m.id ? "on" : ""}">${x.title}</button>`).join("")}
    </div>
    <header class="fiche-head">
      <span class="tag">Méthode · ${m.sub}</span>
      <h1>${m.title}</h1>
      <p class="lead">${m.intro}</p>
    </header>

    <section class="fiche-sec">
      <div class="sec-title">La méthode, étape par étape</div>
      ${m.etapes.map(e => `
        <article class="etape-card">
          <div>
            <div class="step-t">${e.t}</div>
            <p class="step-d">${e.d}</p>
          </div>
        </article>`).join("")}
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Les erreurs qui coûtent cher</div>
      ${m.erreurs.map(e => `
        <div class="erreur-card">
          <div class="err-t">${e.t}</div>
          <p class="err-d">${e.d}</p>
        </div>`).join("")}
    </section>

    <section class="fiche-sec">
      <div class="astuce-box">
        <div class="ttl">★ L'astuce du correcteur</div>
        <p>${m.astuce}</p>
      </div>
    </section>`;

  show("view-methodo");
}

/* ---------- helpers d'interface ---------- */
const stage = () => $("#game-stage");

function setMeta(counter, streak) {
  $("#game-counter").textContent = counter;
  $("#game-streak").textContent = streak;
}

function setProgress(ratio) {
  $("#game-progress").style.width = Math.min(100, ratio * 100) + "%";
}

function optionButton(label, idx) {
  return `<button class="opt" data-idx="${idx}">
    <span class="key">${String.fromCharCode(65 + idx)}</span><span>${label}</span>
  </button>`;
}

function explainBlock(good, verdict, text) {
  return `<div class="explain">
    <span class="verdict ${good ? "good" : "bad"}">${verdict}</span>
    ${text}
  </div>`;
}

function mentionFor(score, total) {
  const r = score / total;
  if (r === 1) return ["20/20 — copie parfaite", "Le correcteur a versé une larme. Descartes aussi."];
  if (r >= 0.8) return ["Mention Très Bien", "L'examinateur hoche la tête avec respect."];
  if (r >= 0.7) return ["Mention Bien", "Solide. Encore un effort et c'est l'agrégation."];
  if (r >= 0.6) return ["Mention Assez Bien", "Le socle est là, il reste à polir le marbre."];
  if (r >= 0.5) return ["Admis·e de justesse", "Ça passe… comme Diogène : sans confort, mais ça passe."];
  return ["Rattrapage en vue", "Socrate disait « je sais que je ne sais rien ». Toi aussi, visiblement. Rejoue !"];
}

function recoBlock(reco) {
  if (!reco) return "";
  return `<div class="exam-recap reco-box">
    <div class="recap-title">🎯 Notion à retravailler en priorité</div>
    <div class="recap-row">
      <span class="recap-notion">${escapeHtml(reco.title)}</span>
      <button class="btn ghost" data-nav="fiche:${reco.id}">Relire la fiche</button>
      <button class="btn ghost" data-nav="drill:${reco.id}">S'entraîner</button>
    </div>
  </div>`;
}

function endScreen({ score, total, xp, bestLine, replay, extra, share, reco }) {
  track("fin-" + (currentRun && currentRun.game ? currentRun.game.split(":")[0] : "jeu"));
  const [mention, comment] = mentionFor(score, total);
  const lvlUp = gainXp(xp);
  const errN = errStore.count();
  stage().innerHTML = `
    <div class="endscreen">
      <span class="xp-gain">+${xp} XP${lvlUp ? " · NIVEAU SUPÉRIEUR : " + levelFor(store.xp).name + " !" : ""}</span>
      <div class="big-score">${score}/${total}</div>
      <div class="mention">${mention}</div>
      <p class="comment">${comment}</p>
      ${duelBlock(score, total)}
      ${battleCtx ? `<div class="exam-recap" id="battle-rank"></div>` : ""}
      ${recoBlock(reco)}
      ${bestLine ? `<p class="mono" style="margin-bottom:1.4rem">${bestLine}</p>` : ""}
      <div class="actions">
        <button class="btn primary" id="btn-replay">Rejouer</button>
        ${CHALLENGEABLE(currentRun && currentRun.game) ? `<button class="btn" id="btn-defi">⚔️ Défier un pote</button>` : ""}
        <button class="btn" id="btn-share">Partager 📤</button>
        ${extra ? `<button class="btn" data-nav="${extra.nav}">${extra.label}</button>` : ""}
        ${errN ? `<button class="btn danger" data-nav="errors">Mes erreurs (${errN})</button>` : ""}
        <button class="btn" data-nav="home">Retour à l'arène</button>
      </div>
    </div>`;
  $("#btn-replay").addEventListener("click", replay);
  $("#btn-share").addEventListener("click", () =>
    shareScore(share || `🦉 ${score}/${total} en révision de philo sur AGORA. Tu fais mieux ?`));
  const defiBtn = $("#btn-defi");
  if (defiBtn) defiBtn.addEventListener("click", () =>
    shareScore(`⚔️ Je te défie sur « ${gameTitleFor(currentRun.game)} » : j'ai fait ${score}/${total}. Mêmes questions, à toi de jouer :`, challengeLink(score, total)));
  if (challengeCtx && score > challengeCtx.score) confetti();
  else if (bestLine && bestLine.includes("★")) confetti();
  challengeCtx = null;
  if (battleCtx && window.battle) {
    window.battle.report(battleCtx.code, score, total, true);
    battleCtx = null;
    const live = $("#battle-live");
    if (live) { live.innerHTML = ""; live.style.display = "none"; }
    renderBattleRank();
  }
}

function updateBest(game, value, lowerIsBetter = false) {
  const prev = store.best(game);
  const isRecord = prev === null || (lowerIsBetter ? value < Number(prev) : value > Number(prev));
  if (isRecord) store.setBest(game, value);
  return isRecord;
}

/* ============================================================
   JEU 01 · QUI A DIT ÇA ?
   ============================================================ */
function startQuotes() {
  beginRun("quotes");
  const rounds = pick(QUOTES, 10);
  let i = 0, score = 0, streak = 0, maxStreak = 0;

  function round() {
    const cur = rounds[i];
    const distractors = pick(AUTHORS.filter(a => a !== cur.a), 3);
    const opts = shuffle([cur.a, ...distractors]);
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Citation à attribuer</div>
        <div class="question is-quote">« ${cur.q} »</div>
      </div>
      <div class="options">${opts.map(optionButton).join("")}</div>
      <div id="feedback"></div>
      <div class="next-zone" id="next-zone"></div>`;

    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const choice = opts[btn.dataset.idx];
      const good = choice === cur.a;
      document.querySelectorAll(".opt").forEach(b => {
        b.disabled = true;
        const v = opts[b.dataset.idx];
        if (v === cur.a) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dimmed");
      });
      if (good) { score++; streak++; maxStreak = Math.max(maxStreak, streak); }
      else {
        streak = 0;
        recordError({ kind: "qcm", label: "Qui a dit ça ?", q: `« ${cur.q} »`, opts: [...opts], answer: cur.a, why: `${cur.a} — ${cur.src}.` });
      }
      bumpDaily();
      if (battleCtx && window.battle) window.battle.report(battleCtx.code, score, i + 1, false);
      $("#feedback").innerHTML = explainBlock(good,
        good ? "Exact !" : "Raté — c'était " + cur.a,
        `<em>${cur.src}</em>`);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("quotes", score);
    endScreen({
      score, total: rounds.length,
      xp: score * 10 + maxStreak * 5,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best("quotes")}/10`,
      replay: startQuotes
    });
  }

  round();
}

/* ============================================================
   JEU 02 · LE GRAND QCM
   ============================================================ */
function startQuiz() {
  beginRun("quiz");
  const rounds = pick(QUIZ, 10);
  let i = 0, score = 0, streak = 0;
  const sessionMiss = {};

  function round() {
    const cur = rounds[i];
    const order = shuffle(cur.opts.map((_, k) => k));
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Question ${i + 1}</div>
        <div class="question">${cur.q}</div>
      </div>
      <div class="options">${order.map((k, idx) => optionButton(cur.opts[k], idx)).join("")}</div>
      <div id="feedback"></div>
      <div class="next-zone" id="next-zone"></div>`;

    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const chosen = order[btn.dataset.idx];
      const good = chosen === cur.ok;
      document.querySelectorAll(".opt").forEach(b => {
        b.disabled = true;
        if (order[b.dataset.idx] === cur.ok) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dimmed");
      });
      if (good) { score++; streak++; }
      else {
        streak = 0;
        if (cur.n) sessionMiss[cur.n] = (sessionMiss[cur.n] || 0) + 1;
        recordError({ kind: "qcm", label: "QCM", q: cur.q, opts: [...cur.opts], answer: cur.opts[cur.ok], why: cur.why });
      }
      skillStore.record(cur.n, good);
      bumpDaily();
      if (battleCtx && window.battle) window.battle.report(battleCtx.code, score, i + 1, false);
      $("#feedback").innerHTML = explainBlock(good, good ? "Exact !" : "Eh non…", cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("quiz", score);
    endScreen({
      score, total: rounds.length,
      xp: score * 12,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best("quiz")}/10`,
      replay: startQuiz,
      reco: recoFromMiss(sessionMiss)
    });
  }

  round();
}

/* ============================================================
   JEU 03 · VRAI OU FAUX
   ============================================================ */
function startVF() {
  beginRun("vf");
  const rounds = pick(TRUEFALSE, 10);
  let i = 0, score = 0, streak = 0;
  const sessionMiss = {};

  function round() {
    const cur = rounds[i];
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Vrai ou faux ?</div>
        <div class="question">${cur.s}</div>
      </div>
      <div class="vf-buttons">
        <button class="opt" data-v="true"><span>VRAI</span></button>
        <button class="opt" data-v="false"><span>FAUX</span></button>
      </div>
      <div id="feedback"></div>
      <div class="next-zone" id="next-zone"></div>`;

    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const choice = btn.dataset.v === "true";
      const good = choice === cur.v;
      document.querySelectorAll(".opt").forEach(b => {
        b.disabled = true;
        if ((b.dataset.v === "true") === cur.v) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dimmed");
      });
      if (good) { score++; streak++; }
      else {
        streak = 0;
        if (cur.n) sessionMiss[cur.n] = (sessionMiss[cur.n] || 0) + 1;
        recordError({ kind: "vf", label: "Vrai ou faux ?", q: cur.s, v: cur.v, why: cur.why });
      }
      skillStore.record(cur.n, good);
      bumpDaily();
      if (battleCtx && window.battle) window.battle.report(battleCtx.code, score, i + 1, false);
      $("#feedback").innerHTML = explainBlock(good,
        good ? "Exact !" : `Non — c'était ${cur.v ? "VRAI" : "FAUX"}`, cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivant →" : "Voir le verdict"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }));
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("vf", score);
    endScreen({
      score, total: rounds.length,
      xp: score * 10,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best("vf")}/10`,
      replay: startVF,
      reco: recoFromMiss(sessionMiss)
    });
  }

  round();
}

/* ============================================================
   JEU 04 · LES REPÈRES (flashcards)
   ============================================================ */
function startCards() {
  beginRun("cards");
  let queue = shuffle(FLASHCARDS.map(c => ({ ...c, fresh: true })));
  const total = queue.length;
  let mastered = 0, seen = 0;

  function round() {
    const cur = queue[0];
    setMeta(`${mastered} maîtrisés / ${total}`, queue.length + " restantes");
    setProgress(mastered / total);
    stage().innerHTML = `
      <div class="flash-scene">
        <div class="flash-card" id="flash">
          <div class="flash-face front">
            <span class="hint">Repère officiel · clique pour retourner</span>
            <span class="term">${cur.front}</span>
          </div>
          <div class="flash-face back">${cur.back}</div>
        </div>
      </div>
      <div class="flash-grade" id="grade" style="visibility:hidden">
        <button class="btn danger" id="btn-again">À revoir ↺</button>
        <button class="btn primary" id="btn-known">Je savais ✓</button>
      </div>`;

    $("#flash").addEventListener("click", () => {
      $("#flash").classList.toggle("flipped");
      $("#grade").style.visibility = "visible";
    });

    $("#btn-known").addEventListener("click", () => {
      bumpDaily();
      if (cur.fresh) mastered++;
      seen++;
      queue.shift();
      queue.length ? round() : finish();
    });

    $("#btn-again").addEventListener("click", () => {
      bumpDaily();
      seen++;
      const c = queue.shift();
      c.fresh = false;
      queue.push(c);
      round();
    });
  }

  function finish() {
    setProgress(1);
    const prev = Number(store.best("cards") || 0);
    if (mastered > prev) store.setBest("cards", mastered);
    endScreen({
      score: mastered, total,
      xp: mastered * 8 + (total - mastered) * 3,
      bestLine: mastered > prev ? "★ Nouveau record de cartes maîtrisées du premier coup !" : `Record : ${Math.max(prev, mastered)}/${total}`,
      replay: startCards
    });
  }

  round();
}

/* ============================================================
   JEU 05 · LE GRAND DUEL (association)
   ============================================================ */
function startMatch() {
  beginRun("match");
  setMeta("", "");
  setProgress(0);
  stage().innerHTML = `
    <div class="q-card">
      <div class="label">Le Grand Duel · choisis ton arène</div>
      <div class="question" style="font-size:1.15rem;font-family:var(--font-body)">Associer les philosophes… à quoi ?</div>
    </div>
    <div class="options">
      <button class="opt" data-mode="concepts"><span class="key">A</span><span>🤝 Leurs concepts fétiches</span></button>
      <button class="opt" data-mode="citations"><span class="key">B</span><span>🗣️ Leurs citations cultes</span></button>
      <button class="opt" data-mode="mix"><span class="key">C</span><span>🎲 Mélange des deux</span></button>
    </div>`;
  document.querySelectorAll("[data-mode]").forEach(b =>
    b.addEventListener("click", () => runMatch(b.dataset.mode)));
}

function runMatch(mode) {
  // 8 paires selon le mode — un seul item par auteur pour éviter toute ambiguïté
  const dedup = {};
  shuffle(QUOTES.filter(q => q.q.length <= 90)).forEach(q => { if (!dedup[q.a]) dedup[q.a] = q; });
  const citPairs = Object.values(dedup).map(q => ({ a: q.a, b: `« ${q.q} »`, cit: true }));

  let pairs;
  if (mode === "citations") pairs = pick(citPairs, 8);
  else if (mode === "mix") {
    const part1 = pick(PAIRS, 4);
    const used = part1.map(p => p.a);
    pairs = [...part1, ...pick(citPairs.filter(p => !used.includes(p.a)), 4)];
  } else pairs = pick(PAIRS, 8);

  const tiles = shuffle([
    ...pairs.map((p, id) => ({ id, text: p.a, kind: "philo" })),
    ...pairs.map((p, id) => ({ id, text: p.b, kind: p.cit ? "concept cit" : "concept" }))
  ]);
  let selected = null, moves = 0, matched = 0, locked = false;

  setMeta("", "");
  stage().innerHTML = `
    <div class="q-card">
      <div class="label">Associe chaque philosophe à son concept</div>
      <div class="question" style="font-size:1.1rem;font-family:var(--font-body)">Clique un nom, puis le concept qui lui correspond. Le moins de coups possible !</div>
    </div>
    <div class="match-board" id="board">
      ${tiles.map((t, idx) => `<button class="match-tile ${t.kind}" data-tile="${idx}">${t.text}</button>`).join("")}
    </div>`;

  function refreshMeta() {
    setMeta(`${matched} / ${pairs.length} paires`, `${moves} coups`);
    setProgress(matched / pairs.length);
  }
  refreshMeta();

  $("#board").addEventListener("click", e => {
    const btn = e.target.closest(".match-tile");
    if (!btn || locked || btn.classList.contains("matched")) return;
    const idx = Number(btn.dataset.tile);

    if (selected === null) {
      selected = idx;
      btn.classList.add("selected");
      return;
    }
    if (selected === idx) {
      btn.classList.remove("selected");
      selected = null;
      return;
    }

    const a = tiles[selected], b = tiles[idx];
    const prevBtn = document.querySelector(`[data-tile="${selected}"]`);
    moves++;
    bumpDaily();

    if (a.id === b.id && a.kind !== b.kind) {
      matched++;
      prevBtn.classList.remove("selected");
      prevBtn.classList.add("matched");
      btn.classList.add("matched");
      selected = null;
      refreshMeta();
      if (matched === pairs.length) setTimeout(finish, 600);
    } else {
      locked = true;
      btn.classList.add("error");
      prevBtn.classList.remove("selected");
      prevBtn.classList.add("error");
      refreshMeta();
      setTimeout(() => {
        btn.classList.remove("error");
        prevBtn.classList.remove("error");
        selected = null;
        locked = false;
      }, 450);
    }
  });

  function finish() {
    track("fin-match");
    const perfect = pairs.length;
    const xp = Math.max(20, 120 - (moves - perfect) * 10);
    const isRecord = updateBest("match", moves, true);
    if (moves === perfect) confetti();
    stage().innerHTML = `
      <div class="endscreen">
        <span class="xp-gain">+${xp} XP${gainXp(xp) ? " · NIVEAU SUPÉRIEUR !" : ""}</span>
        <div class="big-score">${moves} coups</div>
        <div class="mention">${moves === perfect ? "Sans-faute absolu" : moves <= perfect + 3 ? "Esprit affûté" : "L'important, c'est de participer"}</div>
        <p class="comment">${moves === perfect
          ? "Huit paires, huit coups. Platon t'aurait pris comme disciple."
          : `Le minimum possible était ${perfect} coups. ${isRecord ? "Mais c'est ton meilleur score !" : "Tu peux faire mieux."}`}</p>
        ${isRecord ? `<p class="mono" style="margin-bottom:1.4rem">★ Nouveau record !</p>` : `<p class="mono" style="margin-bottom:1.4rem">Record : ${store.best("match")} coups</p>`}
        <div class="actions">
          <button class="btn primary" id="btn-replay">Rejouer</button>
          <button class="btn" data-nav="home">Retour à l'arène</button>
        </div>
      </div>`;
    $("#btn-replay").addEventListener("click", () => runMatch(mode));
  }
}

/* ============================================================
   MES ERREURS — re-réviser les questions ratées
   ============================================================ */
function startErrors() {
  beginRun("errors");
  const queue = shuffle(errStore.all());
  const total = queue.length;
  let i = 0, corrected = 0;

  if (!total) {
    setMeta("", "");
    setProgress(0);
    stage().innerHTML = `
      <div class="endscreen">
        <div class="big-score">😇</div>
        <div class="mention">Aucune erreur enregistrée</div>
        <p class="comment">Va d'abord te planter un peu dans l'arène — chaque question ratée atterrira ici, prête à être corrigée.</p>
        <div class="actions"><button class="btn primary" data-nav="home">Retour à l'arène</button></div>
      </div>`;
    return;
  }

  function round() {
    const cur = queue[i];
    setMeta(`${i + 1} / ${total}`, `ratée ${cur.fails || 1}×`);
    setProgress(i / total);

    const head = `
      <div class="q-card">
        <div class="label">${cur.label} · à corriger</div>
        <div class="question" style="font-size:1.15rem">${cur.q}</div>
      </div>`;

    if (cur.kind === "qcm") {
      const opts = shuffle(cur.opts);
      stage().innerHTML = `${head}
        <div class="options">${opts.map(optionButton).join("")}</div>
        <div id="feedback"></div><div class="next-zone" id="next-zone"></div>`;
      document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
        const good = opts[btn.dataset.idx] === cur.answer;
        document.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          if (opts[b.dataset.idx] === cur.answer) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
          else b.classList.add("dimmed");
        });
        after(good);
      }));
    } else {
      stage().innerHTML = `${head}
        <div class="vf-buttons">
          <button class="opt" data-v="true"><span>VRAI</span></button>
          <button class="opt" data-v="false"><span>FAUX</span></button>
        </div>
        <div id="feedback"></div><div class="next-zone" id="next-zone"></div>`;
      document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
        const good = (btn.dataset.v === "true") === cur.v;
        document.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          if ((b.dataset.v === "true") === cur.v) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
          else b.classList.add("dimmed");
        });
        after(good);
      }));
    }

    function after(good) {
      bumpDaily();
      if (good) { corrected++; errStore.remove(cur.key); }
      $("#feedback").innerHTML = explainBlock(good,
        good ? "Corrigée ! Elle disparaît de la liste" : "Toujours pas — elle reste dans la liste",
        cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < total ? "Suivante →" : "Voir le bilan"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < total ? round() : finish(); });
    }
  }

  function finish() {
    setProgress(1);
    track("fin-erreurs");
    const xp = corrected * 8;
    const lvlUp = xp > 0 ? gainXp(xp) : false;
    const remaining = errStore.count();
    if (corrected === total) confetti();
    stage().innerHTML = `
      <div class="endscreen">
        ${xp > 0 ? `<span class="xp-gain">+${xp} XP${lvlUp ? " · NIVEAU SUPÉRIEUR !" : ""}</span>` : ""}
        <div class="big-score">${corrected}/${total}</div>
        <div class="mention">${corrected === total ? "Table rase — plus aucune erreur !" : remaining + " question" + (remaining > 1 ? "s" : "") + " encore à corriger"}</div>
        <p class="comment">${corrected === total
          ? "Tu as transformé chaque faute en acquis. C'est exactement comme ça qu'on progresse."
          : "Celles que tu viens de rater restent dans la liste — reviens les corriger, c'est là que se gagnent les points du bac."}</p>
        <div class="actions">
          ${remaining ? `<button class="btn primary" id="btn-replay">Continuer à corriger</button>` : ""}
          <button class="btn" data-nav="home">Retour à l'arène</button>
        </div>
      </div>`;
    const r = $("#btn-replay");
    if (r) r.addEventListener("click", startErrors);
  }

  round();
}

/* ============================================================
   L'EXAMEN BLANC — 20 questions, 10 notions, note sur 20
   ============================================================ */
function bacMention(n) {
  if (n >= 18) return ["Mention Très Bien + félicitations", "Le jury s'est levé pour applaudir. Va passer l'agrég directement."];
  if (n >= 16) return ["Mention Très Bien", "Copie solide, références maîtrisées. Le 15 juin, tu déroules."];
  if (n >= 14) return ["Mention Bien", "Très bon niveau — consolide les notions ratées ci-dessous et c'est la TB."];
  if (n >= 12) return ["Mention Assez Bien", "Le socle est là. Relis les fiches faibles, ça monte vite."];
  if (n >= 10) return ["Admis·e", "Ça passe ! Mais ne t'arrête pas là, va relire ce qui a pêché."];
  if (n >= 8) return ["Rattrapage", "Pas de panique : c'est un examen BLANC. Les fiches à revoir sont juste en dessous."];
  return ["Recalé·e (heureusement, c'était pour de faux)", "Socrate aussi est parti de « je sais que je ne sais rien ». Relis, rejoue, remonte."];
}

function startExamen() {
  beginRun("examen");
  // 10 notions tirées au sort, 2 questions chacune
  const notions = pick(COURS, 10);
  const rounds = shuffle(notions.flatMap(c =>
    pick(buildDrill(c), 2).map(q => ({ ...q, nid: c.id, ntitle: c.title }))
  ));
  const parNotion = {};
  notions.forEach(c => parNotion[c.id] = { title: c.title, ok: 0, total: 0 });
  let i = 0, score = 0;

  function round() {
    const cur = rounds[i];
    setMeta(`${i + 1} / ${rounds.length}`, `note : ${score}/${i}`.replace("/0", "/—"));
    setProgress(i / rounds.length);

    const head = `
      <div class="q-card">
        <div class="label">${cur.ntitle} · ${cur.label}</div>
        <div class="question" style="font-size:1.15rem">${cur.q}</div>
      </div>`;

    if (cur.kind === "qcm") {
      stage().innerHTML = `${head}
        <div class="options">${cur.opts.map(optionButton).join("")}</div>
        <div id="feedback"></div><div class="next-zone" id="next-zone"></div>`;
      document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
        const good = cur.opts[btn.dataset.idx] === cur.answer;
        document.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          if (cur.opts[b.dataset.idx] === cur.answer) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
          else b.classList.add("dimmed");
        });
        after(good);
      }));
    } else {
      stage().innerHTML = `${head}
        <div class="vf-buttons">
          <button class="opt" data-v="true"><span>VRAI</span></button>
          <button class="opt" data-v="false"><span>FAUX</span></button>
        </div>
        <div id="feedback"></div><div class="next-zone" id="next-zone"></div>`;
      document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
        const good = (btn.dataset.v === "true") === cur.v;
        document.querySelectorAll(".opt").forEach(b => {
          b.disabled = true;
          if ((b.dataset.v === "true") === cur.v) b.classList.add("correct");
          else if (b === btn) b.classList.add("wrong");
          else b.classList.add("dimmed");
        });
        after(good);
      }));
    }

    function after(good) {
      bumpDaily();
      parNotion[cur.nid].total++;
      if (good) { score++; parNotion[cur.nid].ok++; }
      else recordError({ kind: cur.kind, label: `${cur.ntitle} · ${cur.label}`, q: cur.q, opts: cur.opts, answer: cur.answer, v: cur.v, why: cur.why });
      skillStore.record(cur.nid, good);
      $("#feedback").innerHTML = explainBlock(good, good ? "+1 point" : "Zéro pointé sur celle-là", cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Question suivante →" : "Voir ma copie"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }
  }

  function finish() {
    setProgress(1);
    track("fin-examen");
    const [mention, comment] = bacMention(score);
    const xp = score * 15;
    const isRecord = updateBest("examen", score);
    const lvlUp = gainXp(xp);
    const aRevoir = Object.entries(parNotion)
      .filter(([, v]) => v.ok < v.total)
      .sort((a, b) => a[1].ok - b[1].ok);
    if (isRecord || score >= 16) confetti();

    stage().innerHTML = `
      <div class="endscreen">
        <span class="xp-gain">+${xp} XP${lvlUp ? " · NIVEAU SUPÉRIEUR !" : ""}</span>
        <div class="big-score">${score}/20</div>
        <div class="mention">${mention}</div>
        <p class="comment">${comment}</p>
        ${duelBlock(score, 20)}
        <p class="mono" style="margin-bottom:1.4rem">${isRecord ? "★ Nouveau record !" : "Record : " + store.best("examen") + "/20"}</p>
        ${aRevoir.length ? `
        <div class="exam-recap">
          <div class="recap-title">À revoir avant le jour J</div>
          ${aRevoir.map(([id, v]) => `
            <div class="recap-row">
              <span class="recap-notion">${v.title}</span>
              <span class="recap-score">${v.ok}/${v.total}</span>
              <button class="btn ghost" data-nav="fiche:${id}">Relire</button>
              <button class="btn ghost" data-nav="drill:${id}">S'entraîner</button>
            </div>`).join("")}
        </div>` : `<p class="mono" style="margin-bottom:1.4rem">SANS-FAUTE SUR TOUTES LES NOTIONS. RESPECT ÉTERNEL.</p>`}
        <div class="actions">
          <button class="btn primary" id="btn-replay">Repasser un examen</button>
          <button class="btn" id="btn-defi-ex">⚔️ Défier un pote</button>
          <button class="btn" id="btn-share">Partager 📤</button>
          ${errStore.count() ? `<button class="btn danger" data-nav="errors">Mes erreurs (${errStore.count()})</button>` : ""}
          <button class="btn" data-nav="home">Retour à l'arène</button>
        </div>
      </div>`;
    $("#btn-replay").addEventListener("click", startExamen);
    $("#btn-share").addEventListener("click", () =>
      shareScore(`🎓 J'ai eu ${score}/20 à l'examen blanc de philo sur AGORA (${mention}). Viens me battre !`));
    $("#btn-defi-ex").addEventListener("click", () =>
      shareScore(`⚔️ Je te défie sur l'Examen Blanc de philo : j'ai eu ${score}/20. Mêmes 20 questions, à toi :`, challengeLink(score, 20)));
    if (challengeCtx && score > challengeCtx.score) confetti();
    challengeCtx = null;
  }

  round();
}

/* ============================================================
   JEU 06 · SANS FILET — la citation, ta mémoire, zéro option
   ============================================================ */
function startSansFilet() {
  beginRun("sansfilet");
  const rounds = pick(QUOTES, 10);
  let i = 0, score = 0, streak = 0;

  function round() {
    const cur = rounds[i];
    setMeta(`${i + 1} / ${rounds.length}`, streak > 1 ? `🔥 série ×${streak}` : "");
    setProgress(i / rounds.length);
    stage().innerHTML = `
      <div class="q-card">
        <div class="label">Qui a écrit ça ? Sans aide, sans choix.</div>
        <div class="question is-quote">« ${cur.q} »</div>
      </div>
      <div class="type-zone">
        <input id="type-input" maxlength="30" placeholder="Écris le nom de l'auteur…"
               autocomplete="off" autocapitalize="off" spellcheck="false">
        <button class="btn primary" id="type-go">Valider</button>
      </div>
      <div id="feedback"></div>
      <div class="next-zone" id="next-zone"></div>`;

    const input = $("#type-input");
    input.focus();

    const validate = () => {
      if (!input.value.trim()) { input.focus(); return; }
      const { ok, exact } = checkAuthor(input.value, cur.a);
      input.disabled = true;
      $("#type-go").disabled = true;
      if (ok) { score++; streak++; } else streak = 0;
      bumpDaily();
      if (!ok) {
        recordError({
          kind: "qcm", label: "Qui a dit ça ?", q: `« ${cur.q} »`,
          opts: shuffle([cur.a, ...pick(AUTHORS.filter(x => x !== cur.a), 3)]),
          answer: cur.a, why: `${cur.a} — ${cur.src}.`
        });
      }
      if (battleCtx && window.battle) window.battle.report(battleCtx.code, score, i + 1, false);
      $("#feedback").innerHTML = explainBlock(ok,
        ok ? (exact ? "Exact, orthographe parfaite !" : `Accordé ! (orthographe exacte : ${cur.a})`) : `Non — c'était ${cur.a}`,
        `<em>${cur.src}</em>`);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Suivante →" : "Voir le verdict"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    };

    $("#type-go").addEventListener("click", validate);
    input.addEventListener("keydown", e => { if (e.key === "Enter") validate(); });
  }

  function finish() {
    setProgress(1);
    const isRecord = updateBest("sansfilet", score);
    endScreen({
      score, total: rounds.length,
      xp: score * 15,
      bestLine: isRecord ? "★ Nouveau record !" : `Record : ${store.best("sansfilet")}/10`,
      replay: startSansFilet,
      share: `🖋️ ${score}/10 à « Sans filet » sur AGORA — les auteurs écrits de mémoire, sans QCM. Tu tentes ?`
    });
  }

  round();
}

/* ============================================================
   BONUS · LE MARATHON (mort subite)
   ============================================================ */
function startMarathon() {
  beginRun("marathon");
  let streak = 0;
  let pool = buildMarathonPool();

  function buildMarathonPool() {
    return shuffle([
      ...QUOTES.map(q => ({ type: "quote", data: q })),
      ...QUIZ.map(q => ({ type: "quiz", data: q })),
      ...TRUEFALSE.map(q => ({ type: "vf", data: q }))
    ]);
  }

  function next() {
    if (!pool.length) pool = buildMarathonPool();
    const item = pool.pop();
    setMeta("Mort subite", streak > 0 ? `🔥 série de ${streak}` : "Une erreur = fin");
    setProgress(Math.min(1, streak / 20));

    if (item.type === "quote") {
      const cur = item.data;
      const opts = shuffle([cur.a, ...pick(AUTHORS.filter(x => x !== cur.a), 3)]);
      stage().innerHTML = `
        <div class="q-card">
          <div class="label">Qui a dit ça ?</div>
          <div class="question is-quote">« ${cur.q} »</div>
        </div>
        <div class="options">${opts.map(optionButton).join("")}</div>`;
      wire(opts.map(o => o === cur.a), `C'était ${cur.a} — <em>${cur.src}</em>`,
        { kind: "qcm", label: "Qui a dit ça ?", q: `« ${cur.q} »`, opts: [...opts], answer: cur.a, why: `${cur.a} — ${cur.src}.` });
    } else if (item.type === "quiz") {
      const cur = item.data;
      const order = shuffle(cur.opts.map((_, k) => k));
      stage().innerHTML = `
        <div class="q-card">
          <div class="label">QCM</div>
          <div class="question">${cur.q}</div>
        </div>
        <div class="options">${order.map((k, idx) => optionButton(cur.opts[k], idx)).join("")}</div>`;
      wire(order.map(k => k === cur.ok), cur.why,
        { kind: "qcm", label: "QCM", q: cur.q, opts: [...cur.opts], answer: cur.opts[cur.ok], why: cur.why, n: cur.n });
    } else {
      const cur = item.data;
      stage().innerHTML = `
        <div class="q-card">
          <div class="label">Vrai ou faux ?</div>
          <div class="question">${cur.s}</div>
        </div>
        <div class="vf-buttons">
          <button class="opt" data-idx="0"><span>VRAI</span></button>
          <button class="opt" data-idx="1"><span>FAUX</span></button>
        </div>`;
      wire([cur.v === true, cur.v === false], cur.why,
        { kind: "vf", label: "Vrai ou faux ?", q: cur.s, v: cur.v, why: cur.why, n: cur.n });
    }
  }

  // goodMask[i] = true si l'option i est la bonne
  function wire(goodMask, why, errItem) {
    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const good = goodMask[idx];
      if (!good && errItem) recordError(errItem);
      if (errItem && errItem.n) skillStore.record(errItem.n, good);
      bumpDaily();
      document.querySelectorAll(".opt").forEach(b => {
        b.disabled = true;
        if (goodMask[Number(b.dataset.idx)]) b.classList.add("correct");
        else if (b === btn) b.classList.add("wrong");
        else b.classList.add("dimmed");
      });
      if (good) {
        streak++;
        setTimeout(next, 650);
      } else {
        stage().insertAdjacentHTML("beforeend", explainBlock(false, "Fin de série !", why));
        setTimeout(() => finish(), 1600);
      }
    }));
  }

  function finish() {
    track("fin-marathon");
    const xp = streak * 10;
    const isRecord = updateBest("marathon", streak);
    const lvlUp = xp > 0 ? gainXp(xp) : false;
    stage().innerHTML = `
      <div class="endscreen">
        ${xp > 0 ? `<span class="xp-gain">+${xp} XP${lvlUp ? " · NIVEAU SUPÉRIEUR !" : ""}</span>` : ""}
        <div class="big-score">${streak}</div>
        <div class="mention">${streak >= 20 ? "Légende de l'agora" : streak >= 12 ? "Endurance socratique" : streak >= 6 ? "Beau souffle" : streak >= 1 ? "Échauffement" : "Faux départ"}</div>
        <p class="comment">${streak >= 12
          ? "Une série pareille, même Sisyphe applaudirait."
          : streak >= 1
            ? "Chaque marathon commence par un premier pas. Remets ça !"
            : "Tombé sur la première question : très camusien, très absurde. Rejoue !"}</p>
        <p class="mono" style="margin-bottom:1.4rem">${isRecord ? "★ Nouveau record !" : "Record : série de " + store.best("marathon")}</p>
        <div class="actions">
          <button class="btn primary" id="btn-replay">Rejouer</button>
          <button class="btn" id="btn-share">Partager 📤</button>
          ${errStore.count() ? `<button class="btn danger" data-nav="errors">Mes erreurs (${errStore.count()})</button>` : ""}
          <button class="btn" data-nav="home">Retour à l'arène</button>
        </div>
      </div>`;
    if (isRecord && streak > 0) confetti();
    $("#btn-replay").addEventListener("click", startMarathon);
    $("#btn-share").addEventListener("click", () =>
      shareScore(`🔥 Série de ${streak} au Marathon philo d'AGORA (mort subite). Tu tiens combien, toi ?`));
  }

  next();
}

/* ============================================================
   ACCUEIL : marquee + citation du pied de page
   ============================================================ */
let lastQuoteIdx = -1;
function renderQuoteDuMoment() {
  const idx = Math.floor(Date.now() / 600000) % QUOTES.length; // tranche de 10 minutes
  if (idx === lastQuoteIdx) return;
  lastQuoteIdx = idx;
  const qd = QUOTES[idx];
  const t = $("#qday-txt"), w = $("#qday-who");
  if (!t || !w) return;
  t.textContent = `« ${qd.q} »`;
  w.textContent = `${qd.a} — ${qd.src}`;
  const sec = t.closest(".quote-day");
  if (sec) { sec.classList.remove("q-fade"); void sec.offsetWidth; sec.classList.add("q-fade"); }
}

function initHome() {
  const items = NOTIONS.map(n => `<span>${n}<i> ✶ </i></span>`).join("");
  $("#marquee-track").innerHTML = items + items; // boucle continue

  renderNotionGrid();

  // Citation du moment : déterministe (même pour tous) et change toutes les 10 minutes
  renderQuoteDuMoment();
  setInterval(renderQuoteDuMoment, 20000); // re-vérifie souvent, bascule à chaque nouvelle tranche

  const fq = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  $("#footer-quote").textContent = `« ${fq.q} »`;
  $("#footer-who").textContent = `${fq.a} — ${fq.src}`;

  refreshHud();
  refreshBests();
  renderDaily();
}

initHome();
parseChallenge();
parseBattleHash();
watchOpenBattles();

/* ---------- PWA : installable + hors ligne ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
window.addEventListener("appinstalled", () => track("pwa-installee"));
