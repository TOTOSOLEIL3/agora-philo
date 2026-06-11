/* ============================================================
   AGORA — Le classement entre potes (Firebase Firestore)
   Auth anonyme : chacun ne peut écrire que son propre score.
   ============================================================ */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc, increment,
  collection, query, orderBy, limit, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkx0d_zKO5AJuiV5JpBKYdOAQddeZoRy4",
  authDomain: "agora-philo-bac.firebaseapp.com",
  projectId: "agora-philo-bac",
  storageBucket: "agora-philo-bac.firebasestorage.app",
  messagingSenderId: "1027507940674",
  appId: "1:1027507940674:web:0b020f3bab9946fbc46cdb"
};

let db = null;
let uid = null;
let statQueue = [];

const statDay = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

/* Compteur d'événement d'usage, agrégé par jour dans Firestore (stats/{date}) */
function recordStat(evt) {
  if (typeof evt !== "string" || !/^[a-z0-9-]{1,40}$/.test(evt)) return;
  if (!db || !uid) { if (statQueue.length < 60) statQueue.push(evt); return; }
  setDoc(doc(db, "stats", statDay()), { total: increment(1), [evt]: increment(1) }, { merge: true }).catch(() => {});
}
window.lbStat = recordStat;

function recordVisit() {
  const key = "agora_seen_" + statDay();
  if (localStorage.getItem(key)) return;
  localStorage.setItem(key, "1");
  recordStat("visite");
}

const $id = s => document.getElementById(s);
const getPseudo = () => localStorage.getItem("agora_pseudo") || "";
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- envoi de mon score (appelé par app.js à chaque gain d'XP) ---------- */
function push() {
  const pseudo = getPseudo();
  if (!db || !uid || !pseudo) return;
  const xp = Number(localStorage.getItem("agora_xp") || 0);
  const level = (window.levelFor ? window.levelFor(xp).name : "").slice(0, 48);
  setDoc(doc(db, "players", uid), { pseudo, xp, level, ts: Date.now() }).catch(() => {});
}
window.lbSync = push;

/* ---------- formulaire pseudo ---------- */
function renderJoin() {
  const zone = $id("lb-join");
  if (!zone) return;
  const pseudo = getPseudo();
  if (pseudo) {
    zone.innerHTML = `
      <p class="lb-me-line">Tu joues en tant que <strong>${esc(pseudo)}</strong>
      <button class="btn ghost" id="lb-edit">changer</button></p>`;
    $id("lb-edit").addEventListener("click", () => {
      localStorage.removeItem("agora_pseudo");
      renderJoin();
    });
  } else {
    zone.innerHTML = `
      <input id="lb-pseudo" maxlength="16" placeholder="Ton pseudo (2–16 caractères)" autocomplete="off">
      <button class="btn primary" id="lb-go">Rejoindre 🏆</button>`;
    const go = () => {
      const v = $id("lb-pseudo").value.trim();
      if (v.length < 2 || v.length > 16) { $id("lb-pseudo").focus(); return; }
      localStorage.setItem("agora_pseudo", v);
      if (window.track) window.track("classement-rejoint");
      push();
      renderJoin();
    };
    $id("lb-go").addEventListener("click", go);
    $id("lb-pseudo").addEventListener("keydown", e => { if (e.key === "Enter") go(); });
  }
}

/* ---------- affichage du top 50 en direct ---------- */
function renderList(rows) {
  const list = $id("lb-list");
  const status = $id("lb-status");
  if (!list) return;
  if (!rows.length) {
    status.textContent = "Personne au classement pour l'instant — sois le premier !";
    list.innerHTML = "";
    return;
  }
  status.textContent = "";
  const medals = ["🥇", "🥈", "🥉"];
  list.innerHTML = rows.map((r, i) => `
    <li class="lb-row ${r.id === uid ? "me" : ""}">
      <span class="rank">${medals[i] || i + 1}</span>
      <span class="who"><strong>${esc(r.pseudo)}</strong><em>${esc(r.level || "")}</em></span>
      <span class="pts">${Number(r.xp) || 0} XP</span>
    </li>`).join("");
  const meIdx = rows.findIndex(r => r.id === uid);
  $id("lb-me").textContent = getPseudo()
    ? (meIdx >= 0 ? `Ta position : ${meIdx + 1}ᵉ sur ${rows.length}` : "Joue pour apparaître au classement !")
    : "";
}

/* ---------- battles en direct (code d'invitation, scores live) ---------- */
const CODE_CHARS = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
let battleUnsubs = [];

window.battle = {
  ready: () => !!(db && uid),
  myUid: () => uid,

  async create(game, seed) {
    const code = Array.from({ length: 4 }, () => CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)]).join("");
    await setDoc(doc(db, "battles", code), { game, seed, status: "waiting", host: uid, ts: Date.now() });
    await this.enter(code);
    return code;
  },

  async get(code) {
    const s = await getDoc(doc(db, "battles", code));
    return s.exists() ? s.data() : null;
  },

  async enter(code) {
    const pseudo = (localStorage.getItem("agora_pseudo") || "").slice(0, 16);
    await setDoc(doc(db, "battles", code, "players", uid), { pseudo, score: 0, progress: 0, done: false, ts: Date.now() });
  },

  watch(code, onBattle, onPlayers) {
    this.unwatch();
    battleUnsubs.push(onSnapshot(doc(db, "battles", code), s => { if (s.exists()) onBattle(s.data()); }));
    battleUnsubs.push(onSnapshot(collection(db, "battles", code, "players"), s => {
      const ps = [];
      s.forEach(d => ps.push({ id: d.id, ...d.data() }));
      onPlayers(ps);
    }));
  },

  unwatch() { battleUnsubs.forEach(u => { try { u(); } catch (e) {} }); battleUnsubs = []; },

  start(code) { return updateDoc(doc(db, "battles", code), { status: "playing" }); },

  report(code, score, progress, done) {
    const pseudo = (localStorage.getItem("agora_pseudo") || "").slice(0, 16);
    setDoc(doc(db, "battles", code, "players", uid), { pseudo, score, progress, done, ts: Date.now() }).catch(() => {});
  }
};

/* ---------- démarrage ---------- */
async function boot() {
  renderJoin();
  try {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    db = getFirestore(app);
    await signInAnonymously(auth);
    uid = auth.currentUser.uid;
    statQueue.splice(0).forEach(recordStat);
    recordVisit();
    onSnapshot(
      query(collection(db, "players"), orderBy("xp", "desc"), limit(50)),
      snap => {
        const rows = [];
        snap.forEach(d => rows.push({ id: d.id, ...d.data() }));
        renderList(rows);
      },
      () => { $id("lb-status").textContent = "Classement momentanément indisponible."; }
    );
    if (getPseudo()) push();
  } catch (e) {
    const s = $id("lb-status");
    if (s) s.textContent = "Classement indisponible (connexion ou bloqueur de pub ?).";
  }
}

boot();
