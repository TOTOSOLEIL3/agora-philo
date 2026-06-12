/* ============================================================
   AGORA — générateur de pages statiques SEO
   Usage : node tools/build-seo.js  (depuis la racine du projet)
   Produit : notions/<id>.html ×17, methode/<id>.html ×2, sitemap.xml
   ============================================================ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const SITE = "https://agora-philo.fr";
const V = (fs.readFileSync(path.join(ROOT, "sw.js"), "utf8").match(/const V = (\d+)/) || [, "1"])[1];
const TODAY = new Date().toISOString().slice(0, 10);

// Charge data.js + cours.js dans un même scope et récupère les constantes
const src = fs.readFileSync(path.join(ROOT, "data.js"), "utf8")
  + "\n" + fs.readFileSync(path.join(ROOT, "cours.js"), "utf8")
  + "\n;({ COURS, METHODO, ANNALES })";
const { COURS, METHODO, ANNALES } = vm.runInNewContext(src, {});

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const desc = s => esc(s.replace(/\s+/g, " ").trim().slice(0, 155).replace(/\s\S*$/, "") + "…");

function page({ url, title, description, h1, tag, lead, body, jsonld, etym }) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(title)}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${SITE}${url}">
  <meta property="og:title" content="${esc(title)}">
  <meta property="og:description" content="${description}">
  <meta property="og:type" content="article">
  <meta property="og:url" content="${SITE}${url}">
  <meta property="og:image" content="${SITE}/og-image.png">
  <meta property="og:locale" content="fr_FR">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🦉</text></svg>">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Gloock&family=Karla:ital,wght@0,400;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/styles.css?v=${V}">
  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>
</head>
<body>
  <header class="site-header">
    <a class="logo" href="/" style="text-decoration:none"><span class="owl">🦉</span> AGORA</a>
    <div class="hud"><a class="btn primary" href="/" style="text-decoration:none">🎮 Réviser en jouant</a></div>
  </header>
  <main class="fiche-shell">
    <header class="fiche-head">
      <span class="tag">${esc(tag)}</span>
      <h1>${esc(h1)}</h1>
      ${etym ? `<p class="etym-line"><span class="etym-label">Étymologie</span> ${esc(etym)}</p>` : ""}
      <p class="lead">${esc(lead)}</p>
      <div class="fiche-cta">
        <a class="btn primary" href="/" style="text-decoration:none">⚔ Réviser cette fiche en jouant sur AGORA</a>
        <span class="mono">Quiz, examen blanc, défis entre potes — gratuit</span>
      </div>
    </header>
    ${body}
    <nav class="fiche-nav">
      <a class="btn primary" href="/" style="text-decoration:none">🦉 Toutes les fiches et les jeux — AGORA</a>
    </nav>
  </main>
  <footer>
    <p class="quote">« Une vie sans examen ne vaut pas la peine d'être vécue. »</p>
    <p class="who">Socrate</p>
    <p class="madeby">AGORA · <a href="/">agora-philo.fr</a> · révision du bac de philosophie, gratuit et sans pub</p>
  </footer>
</body>
</html>`;
}

const sec = (title, inner) => `
    <section class="fiche-sec">
      <div class="sec-title">${esc(title)}</div>
      ${inner}
    </section>`;

/* ---------- pages de notions ---------- */
fs.mkdirSync(path.join(ROOT, "notions"), { recursive: true });
const urls = [{ loc: "/", priority: "1.0" }];

for (const c of COURS) {
  const ann = ANNALES.filter(a => a.n.includes(c.id)).sort((a, b) => b.y - a.y);
  const body = [
    sec("Les problématiques", `<ul class="prob-list">${c.problematiques.map(p => `<li>${esc(p)}</li>`).join("")}</ul>`),
    sec("L'essentiel du cours", c.cours.map(p => `<article class="cours-part"><h2 style="font-family:var(--font-display);font-weight:400;font-size:1.3rem;margin-bottom:.45rem">${esc(p.t)}</h2><p>${esc(p.d)}</p></article>`).join("")),
    sec("Le vocabulaire à maîtriser", `<dl class="vocab-list">${c.vocab.map(v => `<div class="vocab-row"><dt>${esc(v.m)}</dt><dd>${esc(v.d)}</dd></div>`).join("")}</dl>`),
    sec("Les auteurs incontournables", c.auteurs.map(a => `<article class="auteur-card"><div class="who"><span class="name">${esc(a.name)}</span><span class="oeuvre">${esc(a.oeuvre)}</span></div><p class="these">${esc(a.these)}</p></article>`).join("")),
    sec("Citations à connaître", c.citations.map(q => `<div class="cite-block"><p class="txt">« ${esc(q.q)} »</p><p class="who">${esc(q.a)}</p></div>`).join("")),
    sec("Repères du programme liés", `<div class="repere-chips">${c.reperes.map(r => `<span>${esc(r)}</span>`).join("")}</div>`),
    ann.length ? sec("Tombé au bac — les vrais sujets", `<ul class="annales-list">${ann.map(a => `<li><span class="an-year">${a.y}</span><span class="an-sub">${esc(a.s)}</span><span class="an-loc">${esc(a.loc)}</span></li>`).join("")}</ul>`) : "",
    sec("Sujets d'entraînement", `<ul class="sujet-list">${c.sujets.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`),
    sec("Le piège à éviter", `<div class="piege-box"><div class="ttl">⚠ Attention</div><p>${esc(c.piege)}</p></div>`)
  ].join("");

  const url = `/notions/${c.id}.html`;
  const html = page({
    url,
    title: `${c.title} — fiche de révision bac philo (cours, auteurs, citations) | AGORA`,
    description: desc(c.intro),
    h1: `${c.title} — fiche de révision pour le bac de philosophie`,
    tag: `${c.tag} · Programme de Terminale`,
    lead: c.intro,
    etym: c.etym,
    body,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": `${c.title} — fiche de révision bac philo`,
      "description": c.intro,
      "url": SITE + url,
      "inLanguage": "fr",
      "educationalLevel": "Terminale (baccalauréat)",
      "learningResourceType": "fiche de révision",
      "teaches": c.title,
      "isAccessibleForFree": true,
      "provider": { "@type": "Organization", "name": "AGORA", "url": SITE }
    }
  });
  fs.writeFileSync(path.join(ROOT, "notions", `${c.id}.html`), html);
  urls.push({ loc: url, priority: "0.8" });
}

/* ---------- pages de méthode ---------- */
fs.mkdirSync(path.join(ROOT, "methode"), { recursive: true });
for (const m of METHODO) {
  const body = [
    sec("La méthode, étape par étape", m.etapes.map(e => `<article class="etape-card"><div><h2 class="step-t" style="font-family:var(--font-display);font-weight:400">${esc(e.t)}</h2><p class="step-d">${esc(e.d)}</p></div></article>`).join("")),
    sec("Les erreurs qui coûtent cher", m.erreurs.map(e => `<div class="erreur-card"><div class="err-t">${esc(e.t)}</div><p class="err-d">${esc(e.d)}</p></div>`).join("")),
    sec("L'astuce du correcteur", `<div class="astuce-box"><div class="ttl">★ À retenir</div><p>${esc(m.astuce)}</p></div>`)
  ].join("");

  const url = `/methode/${m.id}.html`;
  const html = page({
    url,
    title: `${m.title} au bac de philo — méthode complète et erreurs à éviter | AGORA`,
    description: desc(m.intro),
    h1: `${m.title} — la méthode pour le bac de philosophie`,
    tag: `Méthodologie · ${m.sub}`,
    lead: m.intro,
    body,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "LearningResource",
      "name": `${m.title} — méthode bac philo`,
      "description": m.intro,
      "url": SITE + url,
      "inLanguage": "fr",
      "educationalLevel": "Terminale (baccalauréat)",
      "learningResourceType": "méthodologie",
      "isAccessibleForFree": true,
      "provider": { "@type": "Organization", "name": "AGORA", "url": SITE }
    }
  });
  fs.writeFileSync(path.join(ROOT, "methode", `${m.id}.html`), html);
  urls.push({ loc: url, priority: "0.8" });
}

/* ---------- sitemap ---------- */
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url><loc>${SITE}${u.loc}</loc><lastmod>${TODAY}</lastmod><changefreq>weekly</changefreq><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, "sitemap.xml"), sitemap);

console.log(`OK : ${COURS.length} fiches + ${METHODO.length} méthodes + sitemap (${urls.length} URLs), assets v${V}`);
