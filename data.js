/* ============================================================
   AGORA — Données de révision (programme de philosophie, Tle)
   ============================================================ */

/* Date de l'épreuve de philosophie (bac général 2026 : lundi 15 juin au matin) */
const BAC_DATE = "2026-06-15";
const DAILY_GOAL = 30; // objectif de questions par jour

const NOTIONS = [
  "L'art", "Le bonheur", "La conscience", "Le devoir", "L'État",
  "L'inconscient", "La justice", "Le langage", "La liberté", "La nature",
  "La raison", "La religion", "La science", "La technique", "Le temps",
  "Le travail", "La vérité"
];

/* ---------- JEU 01 · QUI A DIT ÇA ? ---------- */
const QUOTES = [
  { q: "Je pense, donc je suis.", a: "Descartes", src: "Discours de la méthode (1637)" },
  { q: "L'homme est condamné à être libre.", a: "Sartre", src: "L'existentialisme est un humanisme (1946)" },
  { q: "L'homme est un loup pour l'homme.", a: "Hobbes", src: "Le Citoyen (1642)" },
  { q: "L'homme est né libre, et partout il est dans les fers.", a: "Rousseau", src: "Du contrat social (1762)" },
  { q: "Le cœur a ses raisons que la raison ne connaît point.", a: "Pascal", src: "Pensées (1670)" },
  { q: "L'homme est un animal politique.", a: "Aristote", src: "Les Politiques" },
  { q: "La religion est l'opium du peuple.", a: "Marx", src: "Critique de la philosophie du droit de Hegel (1843)" },
  { q: "On ne naît pas femme : on le devient.", a: "Simone de Beauvoir", src: "Le Deuxième Sexe (1949)" },
  { q: "Que sais-je ?", a: "Montaigne", src: "Essais (1580)" },
  { q: "Penser, c'est dire non.", a: "Alain", src: "Propos sur la religion (1938)" },
  { q: "La mort n'est rien pour nous.", a: "Épicure", src: "Lettre à Ménécée" },
  { q: "Les limites de mon langage signifient les limites de mon propre monde.", a: "Wittgenstein", src: "Tractatus logico-philosophicus (1921)" },
  { q: "Dieu est mort.", a: "Nietzsche", src: "Le Gai Savoir (1882)" },
  { q: "Connais-toi toi-même.", a: "Socrate", src: "Devise delphique reprise par Socrate" },
  { q: "Le moi n'est pas maître dans sa propre maison.", a: "Freud", src: "Une difficulté de la psychanalyse (1917)" },
  { q: "Le ciel étoilé au-dessus de moi et la loi morale en moi.", a: "Kant", src: "Critique de la raison pratique (1788)" },
  { q: "Il faut imaginer Sisyphe heureux.", a: "Camus", src: "Le Mythe de Sisyphe (1942)" },
  { q: "L'enfer, c'est les autres.", a: "Sartre", src: "Huis clos (1944)" },
  { q: "Le désir est l'essence même de l'homme.", a: "Spinoza", src: "Éthique (1677)" },
  { q: "Science sans conscience n'est que ruine de l'âme.", a: "Rabelais", src: "Pantagruel (1532)" },
  { q: "Le temps est l'image mobile de l'éternité.", a: "Platon", src: "Timée" },
  { q: "On ne se baigne jamais deux fois dans le même fleuve.", a: "Héraclite", src: "Fragments" },
  { q: "L'État est le plus froid de tous les monstres froids.", a: "Nietzsche", src: "Ainsi parlait Zarathoustra (1883)" },
  { q: "Nul n'est méchant volontairement.", a: "Socrate", src: "Rapporté par Platon, Protagoras" },
  { q: "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.", a: "Voltaire", src: "Candide (1759)" },
  { q: "Sapere aude ! Aie le courage de te servir de ton propre entendement.", a: "Kant", src: "Qu'est-ce que les Lumières ? (1784)" },
  { q: "La durée est le progrès continu du passé qui ronge l'avenir.", a: "Bergson", src: "L'Évolution créatrice (1907)" },
  { q: "Agis de telle sorte que tu traites l'humanité toujours en même temps comme une fin, et jamais simplement comme un moyen.", a: "Kant", src: "Fondements de la métaphysique des mœurs (1785)" }
];

const AUTHORS = [...new Set(QUOTES.map(x => x.a))].concat([
  "Hegel", "Hume", "Leibniz", "Schopenhauer", "Comte", "Bachelard", "Arendt", "Machiavel", "Diderot", "Kierkegaard"
]);

/* ---------- JEU 02 · LE GRAND QCM ---------- */
const QUIZ = [
  {
    q: "Selon Platon, le monde sensible est…",
    opts: ["une copie imparfaite du monde des Idées", "la seule réalité véritable", "une création de l'esprit humain", "le monde des mathématiques"],
    ok: 0,
    why: "Pour Platon (allégorie de la caverne), les choses sensibles ne sont que des reflets des Idées, seules réellement réelles et connaissables."
  },
  {
    q: "L'impératif catégorique de Kant commande :",
    opts: ["d'agir selon une maxime universalisable", "de rechercher son bonheur", "d'obéir aux lois de son pays", "de suivre ses sentiments moraux"],
    ok: 0,
    why: "« Agis uniquement d'après la maxime qui fait que tu puisses vouloir en même temps qu'elle devienne une loi universelle. »"
  },
  {
    q: "Chez Descartes, le doute est…",
    opts: ["méthodique : un instrument pour atteindre la vérité", "sceptique : la preuve qu'on ne peut rien savoir", "une maladie de l'esprit", "réservé aux questions religieuses"],
    ok: 0,
    why: "Descartes doute volontairement de tout pour trouver une certitude indubitable : le cogito. Le doute est un moyen, pas une fin."
  },
  {
    q: "La distinction « en fait / en droit » oppose…",
    opts: ["ce qui est constaté et ce qui est légitime", "le réel et l'imaginaire", "la loi et la coutume", "le passé et le présent"],
    ok: 0,
    why: "« En fait » décrit ce qui est (constat) ; « en droit » renvoie à ce qui doit être, à la légitimité. Un pouvoir peut exister en fait sans être fondé en droit."
  },
  {
    q: "Pour quel philosophe l'État naît-il d'un contrat pour sortir de la « guerre de tous contre tous » ?",
    opts: ["Hobbes", "Aristote", "Marx", "Montesquieu"],
    ok: 0,
    why: "Dans le Léviathan (1651), Hobbes décrit un état de nature invivable : les hommes remettent leur puissance à un souverain absolu pour obtenir la paix."
  },
  {
    q: "Pour Freud, un lapsus est…",
    opts: ["une manifestation de l'inconscient", "une simple erreur de fatigue", "un trouble du langage neurologique", "un mensonge volontaire"],
    ok: 0,
    why: "Lapsus, rêves et actes manqués sont des « formations de l'inconscient » : un désir refoulé s'y exprime de façon déguisée."
  },
  {
    q: "L'ataraxie, idéal d'Épicure, désigne…",
    opts: ["l'absence de troubles de l'âme", "l'accumulation des plaisirs", "le refus de toute société", "l'extase religieuse"],
    ok: 0,
    why: "Le bonheur épicurien est négatif : absence de douleur du corps (aponie) et de trouble de l'âme (ataraxie), par la satisfaction des seuls désirs naturels et nécessaires."
  },
  {
    q: "Pour Marx, le travail aliéné signifie que…",
    opts: ["l'ouvrier est dépossédé du produit et du sens de son travail", "le travail rend forcément heureux", "seuls les intellectuels travaillent vraiment", "le travail est une invention moderne"],
    ok: 0,
    why: "Dans les Manuscrits de 1844 : le travailleur devient étranger à son produit, à son activité et à lui-même — le travail, qui devrait humaniser, déshumanise."
  },
  {
    q: "Persuader et convaincre, quelle différence ?",
    opts: ["Persuader joue sur les affects, convaincre s'adresse à la raison", "Ce sont deux synonymes exacts", "Convaincre est toujours malhonnête", "Persuader exige des preuves logiques"],
    ok: 0,
    why: "Convaincre = obtenir l'assentiment par arguments et preuves. Persuader = emporter l'adhésion par les émotions, le charisme, la rhétorique."
  },
  {
    q: "Pour Bergson, le temps réellement vécu par la conscience est…",
    opts: ["la durée, qualitative et continue", "le temps des horloges, divisible", "une illusion totale", "identique au temps de la physique"],
    ok: 0,
    why: "Bergson oppose le temps spatialisé de la science (mesurable, homogène) à la durée : un flux vécu, qualitatif, où les moments s'interpénètrent."
  },
  {
    q: "La maïeutique de Socrate est…",
    opts: ["l'art de faire accoucher les esprits de leurs vérités", "une technique de mémorisation", "un discours pour persuader les foules", "une méthode de méditation"],
    ok: 0,
    why: "Fils de sage-femme, Socrate interroge ses interlocuteurs pour leur faire découvrir par eux-mêmes les vérités qu'ils portent sans le savoir."
  },
  {
    q: "Pour Rousseau, l'homme à l'état de nature est…",
    opts: ["naturellement bon, c'est la société qui le corrompt", "un loup pour l'homme", "déjà un être politique accompli", "incapable de pitié"],
    ok: 0,
    why: "Contre Hobbes, Rousseau (Discours sur l'origine de l'inégalité, 1755) décrit un homme naturel paisible, mû par l'amour de soi et la pitié."
  },
  {
    q: "« L'existence précède l'essence » signifie que…",
    opts: ["l'homme se définit par ses actes, sans nature préalable", "Dieu a créé l'homme selon un plan", "notre caractère est fixé à la naissance", "l'essence des choses est éternelle"],
    ok: 0,
    why: "Pour Sartre, l'homme surgit d'abord dans le monde, puis se définit par ses choix. Il est entièrement responsable de ce qu'il fait de lui-même."
  },
  {
    q: "Une loi peut être légale sans être légitime quand…",
    opts: ["elle est en vigueur mais contraire à la justice", "elle n'a pas encore été votée", "elle est trop ancienne", "personne ne la connaît"],
    ok: 0,
    why: "Légal = conforme au droit positif en vigueur. Légitime = fondé en justice ou en raison. Les lois racistes de Vichy étaient légales mais illégitimes."
  },
  {
    q: "Pour Aristote, la vertu morale est…",
    opts: ["un juste milieu entre deux excès", "l'obéissance aux dieux", "le rejet de tous les plaisirs", "un don de naissance"],
    ok: 0,
    why: "Le courage est la médiété entre lâcheté et témérité. La vertu s'acquiert par l'habitude et vise l'excellence de l'action (Éthique à Nicomaque)."
  },
  {
    q: "Pour Nietzsche, la morale traditionnelle est…",
    opts: ["une morale d'esclaves née du ressentiment", "la plus haute création humaine", "fondée sur la science", "indépassable"],
    ok: 0,
    why: "Dans la Généalogie de la morale, les « faibles » auraient inversé les valeurs : humilité et pitié contre force et affirmation de la vie."
  },
  {
    q: "La liberté selon Spinoza, c'est…",
    opts: ["comprendre la nécessité qui nous détermine", "le pouvoir absolu de choisir sans cause", "faire tout ce qui nous plaît", "échapper aux lois de la nature"],
    ok: 0,
    why: "Le libre arbitre est une illusion (on ignore les causes qui nous poussent). Être libre = agir selon sa propre nature, comprise par la raison."
  },
  {
    q: "Pour Hume, la relation de cause à effet est…",
    opts: ["une croyance née de l'habitude", "démontrable par la logique pure", "inscrite dans les choses elles-mêmes", "une vérité mathématique"],
    ok: 0,
    why: "Nous ne percevons jamais la causalité, seulement des successions répétées. C'est l'habitude qui nous fait attendre l'effet après la cause."
  },
  {
    q: "Le pari de Pascal porte sur…",
    opts: ["l'intérêt à parier que Dieu existe", "l'existence du monde extérieur", "la fiabilité des sens", "l'avenir de la science"],
    ok: 0,
    why: "Si Dieu existe et qu'on a parié sur lui : gain infini. S'il n'existe pas : perte finie. La raison calculatrice elle-même conseille de croire."
  },
  {
    q: "Pour Platon, l'art (peinture, poésie) est critiquable parce qu'il est…",
    opts: ["une imitation d'imitation, éloignée du vrai", "trop cher à produire", "réservé aux aristocrates", "contraire aux lois de la cité"],
    ok: 0,
    why: "Le lit peint imite le lit du menuisier, qui imite l'Idée de lit : l'art est à deux degrés du réel et flatte les passions (République, livre X)."
  }
];

/* ---------- JEU 03 · VRAI OU FAUX ---------- */
const TRUEFALSE = [
  { s: "Pour Kant, mentir pour sauver un ami traqué peut être moralement justifié.", v: false,
    why: "Non : le devoir de vérité est inconditionnel chez Kant. Mentir, même par bienveillance, détruit le fondement de tout contrat entre les hommes." },
  { s: "Épicure recommande de poursuivre tous les plaisirs sans distinction.", v: false,
    why: "Contresens classique ! Épicure trie les désirs : seuls les désirs naturels et nécessaires (boire, manger, amitié) mènent à l'ataraxie." },
  { s: "Le cogito de Descartes résiste même à l'hypothèse du malin génie.", v: true,
    why: "Même si un génie trompeur falsifie tout, il faut bien que j'existe pour être trompé : « je pense, donc je suis » est indubitable." },
  { s: "Pour Sartre, invoquer sa « nature » pour excuser ses actes est de la mauvaise foi.", v: true,
    why: "Se dire « je suis comme ça » revient à nier sa liberté. Pour Sartre, nous choisissons ce que nous sommes et en portons l'entière responsabilité." },
  { s: "Pour Platon, l'art nous rapproche de la vérité des Idées.", v: false,
    why: "Au contraire : l'art est imitation d'imitation, à deux degrés du réel. (Hegel, lui, fera de l'art une manifestation sensible de l'esprit.)" },
  { s: "Rousseau identifie la volonté générale à la somme des volontés particulières.", v: false,
    why: "La volonté générale vise l'intérêt commun ; la « volonté de tous » n'est que l'addition des intérêts privés. La distinction est cruciale dans Du contrat social." },
  { s: "Pour Aristote, vivre en société est naturel à l'homme.", v: true,
    why: "L'homme est un « animal politique » : seul un dieu ou une bête peut vivre hors de la cité. Le langage prouve cette destination communautaire." },
  { s: "Le stoïcisme d'Épictète invite à ne se soucier que de ce qui dépend de nous.", v: true,
    why: "Nos jugements, désirs et actions dépendent de nous ; le corps, la réputation, la mort, non. La sagesse : vouloir ce qui arrive." },
  { s: "Pour Descartes, les animaux sont des machines sans pensée.", v: true,
    why: "C'est la théorie des animaux-machines : leurs comportements s'expliquent mécaniquement, sans âme pensante — thèse très contestée depuis." },
  { s: "Quand Nietzsche écrit « Dieu est mort », il célèbre simplement la victoire de l'athéisme.", v: false,
    why: "C'est un constat vertigineux : l'effondrement du fondement de toutes nos valeurs. Le danger est le nihilisme, qu'il faut surmonter en créant de nouvelles valeurs." },
  { s: "La « servitude volontaire » est un concept de La Boétie.", v: true,
    why: "Dans son Discours (1576), La Boétie s'étonne que les peuples obéissent à un seul : la tyrannie repose sur le consentement des dominés." },
  { s: "Pour Kant, nous pouvons connaître les choses telles qu'elles sont en soi.", v: false,
    why: "Nous ne connaissons que les phénomènes, structurés par notre sensibilité (espace, temps) et notre entendement. La chose en soi reste inaccessible." },
  { s: "Pour Bergson, le rire a une fonction sociale.", v: true,
    why: "Le rire sanctionne « du mécanique plaqué sur du vivant » : il corrige les raideurs et rappelle à la souplesse qu'exige la vie sociale (Le Rire, 1900)." },
  { s: "Pour Hobbes, l'état de nature est un état de paix et d'harmonie.", v: false,
    why: "C'est « la guerre de tous contre tous » : sans pouvoir commun, la vie est « solitaire, misérable, dangereuse, animale et brève »." },
  { s: "Une démonstration mathématique relève de l'ordre de la conviction, pas de la persuasion.", v: true,
    why: "Elle contraint l'assentiment par la seule rigueur logique, sans jouer sur les émotions : elle convainc universellement." },
  { s: "Pour Spinoza, le sentiment d'être libre vient de l'ignorance des causes qui nous déterminent.", v: true,
    why: "« Les hommes se croient libres parce qu'ils sont conscients de leurs actions et ignorants des causes qui les déterminent » (Éthique)." },
  { s: "Pour Platon, apprendre, c'est se ressouvenir.", v: true,
    why: "C'est la réminiscence : l'âme a contemplé les Idées avant de s'incarner ; connaître, c'est retrouver ce savoir oublié (Ménon, l'esclave et le carré)." },
  { s: "Face à l'absurde, Camus conclut que le suicide est la seule réponse cohérente.", v: false,
    why: "Tout l'inverse : la réponse est la révolte — vivre lucidement, sans espoir illusoire. « Il faut imaginer Sisyphe heureux. »" },
  { s: "Pour Freud, l'inconscient ne se manifeste que dans les rêves.", v: false,
    why: "Il s'exprime aussi dans les lapsus, actes manqués, symptômes névrotiques, mots d'esprit… Le rêve n'est que la « voie royale » vers l'inconscient." },
  { s: "Pour Marx, l'histoire des sociétés est l'histoire de la lutte des classes.", v: true,
    why: "Première phrase (ou presque) du Manifeste du parti communiste (1848) : hommes libres et esclaves, seigneurs et serfs, bourgeois et prolétaires…" }
];

/* ---------- JEU 04 · LES REPÈRES (flashcards officielles) ---------- */
const FLASHCARDS = [
  { front: "Absolu / Relatif",
    back: "Absolu : ce qui ne dépend de rien d'autre, sans condition ni comparaison. Relatif : ce qui n'existe ou ne vaut qu'en relation avec autre chose (une culture, un point de vue)." },
  { front: "Abstrait / Concret",
    back: "Abstrait : séparé par l'esprit de la réalité sensible (le concept de « liberté »). Concret : donné dans l'expérience, singulier et complet (cet acte libre précis)." },
  { front: "En acte / En puissance",
    back: "Distinction d'Aristote. En puissance : ce qui peut devenir (le gland est chêne en puissance). En acte : ce qui est pleinement réalisé (le chêne)." },
  { front: "Contingent / Nécessaire",
    back: "Contingent : ce qui peut être ou ne pas être, qui aurait pu être autrement. Nécessaire : ce qui ne peut pas ne pas être (2+2=4)." },
  { front: "Croire / Savoir",
    back: "Croire : tenir pour vrai sans preuve suffisante (opinion, foi). Savoir : tenir pour vrai de manière justifiée, fondée en raison ou vérifiée." },
  { front: "Essentiel / Accidentel",
    back: "Essentiel : ce sans quoi une chose ne serait pas ce qu'elle est (être rationnel pour l'homme). Accidentel : ce qui peut changer sans altérer la nature de la chose (être brun)." },
  { front: "Expliquer / Comprendre",
    back: "Expliquer : rendre raison par des causes (démarche des sciences de la nature). Comprendre : saisir le sens, de l'intérieur (démarche des sciences humaines)." },
  { front: "En fait / En droit",
    back: "En fait : ce qui est, le constat (de facto). En droit : ce qui est légitime, ce qui doit être (de jure). Un usage répandu en fait n'est pas pour autant fondé en droit." },
  { front: "Idéal / Réel",
    back: "Idéal : ce qui n'existe que dans la pensée comme modèle ou perfection visée. Réel : ce qui existe effectivement, indépendamment de nos représentations." },
  { front: "Intuitif / Discursif",
    back: "Intuitif : connaissance immédiate, d'un seul regard de l'esprit. Discursif : connaissance qui passe par étapes, par le raisonnement et le discours." },
  { front: "Légal / Légitime",
    back: "Légal : conforme à la loi positive en vigueur. Légitime : conforme à la justice ou à la raison. Une loi injuste est légale sans être légitime ; la désobéissance civile s'en réclame." },
  { front: "Médiat / Immédiat",
    back: "Immédiat : donné directement, sans intermédiaire (la sensation). Médiat : atteint par l'intermédiaire d'autre chose (raisonnement, instrument, signe)." },
  { front: "Objectif / Subjectif / Intersubjectif",
    back: "Objectif : indépendant du sujet, valable pour tous. Subjectif : relatif à un sujet particulier. Intersubjectif : partagé entre plusieurs sujets (un accord, un consensus)." },
  { front: "Obligation / Contrainte",
    back: "Contrainte : force extérieure qui nous soumet (physique, menace). Obligation : exigence morale librement reconnue — on s'oblige, on est contraint." },
  { front: "Origine / Fondement",
    back: "Origine : commencement dans le temps (question historique : d'où ça vient ?). Fondement : ce qui justifie en droit (question de légitimité : sur quoi ça repose ?)." },
  { front: "Persuader / Convaincre",
    back: "Convaincre : obtenir l'assentiment par preuves et arguments rationnels. Persuader : emporter l'adhésion en jouant sur les affects, le désir, la crainte." },
  { front: "Théorie / Pratique",
    back: "Théorie : connaissance contemplative, spéculative (savoir pourquoi). Pratique : ordre de l'action et de ses fins (savoir agir). Kant : ce qui vaut en théorie doit pouvoir valoir en pratique." },
  { front: "Transcendant / Immanent",
    back: "Transcendant : au-delà, extérieur et supérieur à (le Dieu créateur transcende le monde). Immanent : intérieur à, qui ne suppose rien d'extérieur (le Dieu-Nature de Spinoza est immanent)." },
  { front: "Universel / Général / Particulier / Singulier",
    back: "Universel : vaut pour tous sans exception. Général : vaut pour la plupart. Particulier : vaut pour certains. Singulier : ne vaut que pour un seul individu." },
  { front: "Vrai / Probable / Certain",
    back: "Vrai : conforme à la réalité ou cohérent (propriété du jugement). Probable : qui a des chances d'être vrai. Certain : tenu pour vrai sans doute possible (état du sujet)." },
  { front: "Analyse / Synthèse",
    back: "Analyse : décomposer un tout en ses éléments pour l'examiner. Synthèse : recomposer les éléments en un tout ordonné." },
  { front: "Concept / Image / Métaphore",
    back: "Concept : idée générale et abstraite (le triangle en général). Image : représentation sensible d'une chose. Métaphore : transfert de sens fondé sur une analogie (« la racine du mal »)." },
  { front: "Exemple / Preuve",
    back: "Exemple : cas particulier qui illustre une idée — il ne suffit jamais à la démontrer. Preuve : ce qui établit la vérité d'une affirmation de manière contraignante." },
  { front: "Genre / Espèce / Individu",
    back: "Genre : classe la plus large (l'animal). Espèce : subdivision du genre (l'homme). Individu : être singulier, indivisible, qui n'est pas une classe (Socrate)." },
  { front: "Identité / Égalité / Différence",
    back: "Identité : être le même (au sens strict, une chose n'est identique qu'à elle-même). Égalité : avoir la même valeur ou la même quantité. Différence : ce qui distingue deux choses." },
  { front: "Impossible / Possible",
    back: "Impossible : ce qui ne peut être, par contradiction logique ou par contrariété aux lois de la nature. Possible : ce qui peut être ou ne pas être, sans contradiction." },
  { front: "Ressemblance / Analogie",
    back: "Ressemblance : communauté de qualités entre deux choses (deux visages se ressemblent). Analogie : identité de rapports — A est à B ce que C est à D (les nageoires sont au poisson ce que les ailes sont à l'oiseau)." },
  { front: "Public / Privé",
    back: "Public : ce qui concerne tous, relève de l'État ou s'expose au regard commun. Privé : ce qui relève de la sphère personnelle, familiale, intime — soustraite au regard de tous." },
  { front: "Hypothèse / Conséquence / Conclusion",
    back: "Hypothèse : proposition admise provisoirement comme point de départ. Conséquence : ce qui en découle logiquement. Conclusion : ce que l'on tient pour établi au terme du raisonnement." },
  { front: "Principe / Cause / Fin",
    back: "Principe : ce qui vient en premier et fonde le reste. Cause : ce qui produit un effet. Fin : ce en vue de quoi on agit, le but." },
  { front: "Formel / Matériel",
    back: "Formel : qui concerne la forme, la structure (la validité d'un raisonnement est formelle). Matériel : qui concerne le contenu, la matière (la vérité du contenu est matérielle)." }
];

/* ---------- JEU 05 · LE GRAND DUEL (associations) ---------- */
const PAIRS = [
  { a: "Platon", b: "Le monde des Idées" },
  { a: "Descartes", b: "Le cogito" },
  { a: "Kant", b: "L'impératif catégorique" },
  { a: "Nietzsche", b: "La volonté de puissance" },
  { a: "Freud", b: "Le ça, le moi, le surmoi" },
  { a: "Marx", b: "La lutte des classes" },
  { a: "Sartre", b: "La mauvaise foi" },
  { a: "Bergson", b: "La durée" },
  { a: "Spinoza", b: "Le conatus" },
  { a: "Rousseau", b: "Le contrat social" },
  { a: "Hobbes", b: "Le Léviathan" },
  { a: "Épicure", b: "L'ataraxie" },
  { a: "Épictète", b: "Ce qui dépend de nous" },
  { a: "La Boétie", b: "La servitude volontaire" }
];

/* ---------- NIVEAUX XP ---------- */
const LEVELS = [
  { xp: 0, name: "Apprenti sophiste" },
  { xp: 100, name: "Disciple de Socrate" },
  { xp: 250, name: "Stoïcien du dimanche" },
  { xp: 500, name: "Esprit critique" },
  { xp: 800, name: "Lumière des Lumières" },
  { xp: 1200, name: "Surhumain nietzschéen" },
  { xp: 2000, name: "Sage absolu — 20/20 au bac" }
];
