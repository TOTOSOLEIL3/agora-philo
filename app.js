/* ============================================================
   AGORA — moteur de jeu
   ============================================================ */

/* ---------- utilitaires ---------- */
const $ = sel => document.querySelector(sel);
const shuffle = arr => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const pick = (arr, n) => shuffle(arr).slice(0, n);

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
  return levelFor(store.xp).name !== before; // niveau franchi ?
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

function refreshErrorBadges() {
  const el = $("#errors-count");
  if (!el) return;
  const n = errStore.count();
  el.textContent = n === 0 ? "Aucune erreur enregistrée 😇" : `${n} question${n > 1 ? "s" : ""} à corriger`;
}

/* ---------- partage de score ---------- */
async function shareScore(text) {
  const full = text + "\nhttps://agora-philo.fr";
  try {
    if (navigator.share) { await navigator.share({ text: full }); return; }
  } catch (e) { if (e && e.name === "AbortError") return; }
  try { await navigator.clipboard.writeText(full); toast("Copié ! Colle-le à tes potes 📋"); }
  catch { prompt("Copie ce texte :", full); }
}

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
  marathon: { title: "Le Marathon", start: startMarathon },
  examen: { title: "L'Examen Blanc", start: startExamen },
  errors: { title: "Mes erreurs", start: startErrors }
};

function show(viewId) {
  document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
  $("#" + viewId).classList.add("active");
  window.scrollTo({ top: 0 });
}

function nav(target) {
  if (target === "home") {
    refreshBests();
    show("view-home");
    return;
  }
  const game = GAMES[target];
  if (!game) return;
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
    const truth = Math.random() < 0.5;
    const wrongPool = names.filter(n => n !== nm);
    const shown = truth ? nm : wrongPool[Math.floor(Math.random() * wrongPool.length)];
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
  const c = COURS[i];
  const prev = COURS[(i - 1 + COURS.length) % COURS.length];
  const next = COURS[(i + 1) % COURS.length];

  $("#fiche-stage").innerHTML = `
    <div class="fiche-back"><button class="btn ghost" data-jump="cours">← Toutes les notions</button></div>
    <header class="fiche-head">
      <span class="tag">${c.tag} · Notion ${String(i + 1).padStart(2, "0")}/${COURS.length}</span>
      <h1>${c.title}</h1>
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
      <div class="sec-title">Citations à caser</div>
      ${c.citations.map(q => `
        <div class="cite-block">
          <p class="txt">${q.q} »</p>
          <p class="who">${q.a}</p>
        </div>`).join("")}
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Repères liés</div>
      <div class="repere-chips">${c.reperes.map(r => `<span>${r}</span>`).join("")}</div>
    </section>

    <section class="fiche-sec">
      <div class="sec-title">Sujets de bac possibles</div>
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

function endScreen({ score, total, xp, bestLine, replay, extra, share }) {
  const [mention, comment] = mentionFor(score, total);
  const lvlUp = gainXp(xp);
  const errN = errStore.count();
  stage().innerHTML = `
    <div class="endscreen">
      <span class="xp-gain">+${xp} XP${lvlUp ? " · NIVEAU SUPÉRIEUR : " + levelFor(store.xp).name + " !" : ""}</span>
      <div class="big-score">${score}/${total}</div>
      <div class="mention">${mention}</div>
      <p class="comment">${comment}</p>
      ${bestLine ? `<p class="mono" style="margin-bottom:1.4rem">${bestLine}</p>` : ""}
      <div class="actions">
        <button class="btn primary" id="btn-replay">Rejouer</button>
        <button class="btn" id="btn-share">Partager 📤</button>
        ${extra ? `<button class="btn" data-nav="${extra.nav}">${extra.label}</button>` : ""}
        ${errN ? `<button class="btn danger" data-nav="errors">Mes erreurs (${errN})</button>` : ""}
        <button class="btn" data-nav="home">Retour à l'arène</button>
      </div>
    </div>`;
  $("#btn-replay").addEventListener("click", replay);
  $("#btn-share").addEventListener("click", () =>
    shareScore(share || `🦉 ${score}/${total} en révision de philo sur AGORA. Tu fais mieux ?`));
  if (bestLine && bestLine.includes("★")) confetti();
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
  const rounds = pick(QUIZ, 10);
  let i = 0, score = 0, streak = 0;

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
        recordError({ kind: "qcm", label: "QCM", q: cur.q, opts: [...cur.opts], answer: cur.opts[cur.ok], why: cur.why });
      }
      bumpDaily();
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
      replay: startQuiz
    });
  }

  round();
}

/* ============================================================
   JEU 03 · VRAI OU FAUX
   ============================================================ */
function startVF() {
  const rounds = pick(TRUEFALSE, 10);
  let i = 0, score = 0, streak = 0;

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
        recordError({ kind: "vf", label: "Vrai ou faux ?", q: cur.s, v: cur.v, why: cur.why });
      }
      bumpDaily();
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
      replay: startVF
    });
  }

  round();
}

/* ============================================================
   JEU 04 · LES REPÈRES (flashcards)
   ============================================================ */
function startCards() {
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
  const pairs = pick(PAIRS, 8);
  const tiles = shuffle([
    ...pairs.map((p, id) => ({ id, text: p.a, kind: "philo" })),
    ...pairs.map((p, id) => ({ id, text: p.b, kind: "concept" }))
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
    $("#btn-replay").addEventListener("click", startMatch);
  }
}

/* ============================================================
   MES ERREURS — re-réviser les questions ratées
   ============================================================ */
function startErrors() {
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
      $("#feedback").innerHTML = explainBlock(good, good ? "+1 point" : "Zéro pointé sur celle-là", cur.why);
      $("#next-zone").innerHTML = `<button class="btn primary" id="btn-next">${i + 1 < rounds.length ? "Question suivante →" : "Voir ma copie"}</button>`;
      $("#btn-next").addEventListener("click", () => { i++; i < rounds.length ? round() : finish(); });
    }
  }

  function finish() {
    setProgress(1);
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
          <button class="btn" id="btn-share">Partager 📤</button>
          ${errStore.count() ? `<button class="btn danger" data-nav="errors">Mes erreurs (${errStore.count()})</button>` : ""}
          <button class="btn" data-nav="home">Retour à l'arène</button>
        </div>
      </div>`;
    $("#btn-replay").addEventListener("click", startExamen);
    $("#btn-share").addEventListener("click", () =>
      shareScore(`🎓 J'ai eu ${score}/20 à l'examen blanc de philo sur AGORA (${mention}). Viens me battre !`));
  }

  round();
}

/* ============================================================
   BONUS · LE MARATHON (mort subite)
   ============================================================ */
function startMarathon() {
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
        { kind: "qcm", label: "QCM", q: cur.q, opts: [...cur.opts], answer: cur.opts[cur.ok], why: cur.why });
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
        { kind: "vf", label: "Vrai ou faux ?", q: cur.s, v: cur.v, why: cur.why });
    }
  }

  // goodMask[i] = true si l'option i est la bonne
  function wire(goodMask, why, errItem) {
    document.querySelectorAll(".opt").forEach(btn => btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.idx);
      const good = goodMask[idx];
      if (!good && errItem) recordError(errItem);
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
function initHome() {
  const items = NOTIONS.map(n => `<span>${n}<i> ✶ </i></span>`).join("");
  $("#marquee-track").innerHTML = items + items; // boucle continue

  renderNotionGrid();

  // Citation du jour (déterministe : même citation pour tout le monde, change chaque jour)
  const dayIdx = Math.floor(Date.now() / 86400000) % QUOTES.length;
  const qd = QUOTES[dayIdx];
  $("#qday-txt").textContent = `« ${qd.q} »`;
  $("#qday-who").textContent = `${qd.a} — ${qd.src}`;

  const fq = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  $("#footer-quote").textContent = `« ${fq.q} »`;
  $("#footer-who").textContent = `${fq.a} — ${fq.src}`;

  refreshHud();
  refreshBests();
  renderDaily();
}

initHome();

/* ---------- PWA : installable + hors ligne ---------- */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));
}
