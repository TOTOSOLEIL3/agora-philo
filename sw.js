/* AGORA — service worker : hors ligne + installable
   Pour publier une mise à jour : bumper V ici ET les ?v= dans index.html */
const V = 13;
const CACHE = "agora-v" + V;
const ASSETS = [
  "./",
  "./index.html",
  `./styles.css?v=${V}`,
  `./app.js?v=${V}`,
  `./data.js?v=${V}`,
  `./cours.js?v=${V}`,
  `./leaderboard.js?v=${V}`,
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;
  if (url.hostname.includes("goatcounter") || url.hostname.includes("zgo.at")) return; // stats : réseau seul
  if (url.hostname.includes("firestore") || url.hostname.includes("identitytoolkit") || url.hostname.endsWith("firebaseapp.com")) return; // Firebase temps réel : jamais de cache

  // Navigations : réseau d'abord (site toujours frais), cache en secours (hors ligne)
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request)
        .then(r => { caches.open(CACHE).then(c => c.put("./index.html", r.clone())); return r; })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Assets (JS, CSS, polices) : cache d'abord, mise à jour en arrière-plan
  e.respondWith(
    caches.match(e.request).then(cached => {
      const fresh = fetch(e.request)
        .then(r => {
          if (r && r.status === 200) caches.open(CACHE).then(c => c.put(e.request, r.clone()));
          return r;
        })
        .catch(() => cached);
      return cached || fresh;
    })
  );
});
