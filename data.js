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
  },
  {
    q: "Chez Hannah Arendt, qu'est-ce qui distingue l'œuvre du travail ?",
    opts: ["L'œuvre produit du durable, le travail est aussitôt consommé", "L'œuvre est payée, pas le travail", "Le travail est intellectuel, l'œuvre manuelle", "Il n'y a aucune différence"],
    ok: 0,
    why: "Arendt distingue le travail (cycle de la consommation : cuisiner, nettoyer — rien ne reste), l'œuvre (fabriquer un monde durable : la table, le livre) et l'action (la politique)."
  },
  {
    q: "Chez Aristote, l'équité sert à…",
    opts: ["corriger la généralité de la loi dans un cas particulier", "remplacer définitivement les lois", "punir plus sévèrement", "garantir l'égalité absolue des parts"],
    ok: 0,
    why: "La loi est générale ; appliquée mécaniquement à un cas singulier, elle peut devenir injuste. L'équité est « la justice du cas particulier »."
  },
  {
    q: "Le « voile d'ignorance » de Rawls est un dispositif pour…",
    opts: ["choisir des règles justes sans connaître sa future place dans la société", "cacher la vérité aux citoyens", "ignorer les lois injustes", "protéger la vie privée"],
    ok: 0,
    why: "Sans savoir si je serai riche ou pauvre, doué ou non, je choisis des règles qui protègent même les plus défavorisés : le test d'impartialité parfait."
  },
  {
    q: "Pour Popper, une théorie est scientifique si elle est…",
    opts: ["réfutable par une expérience concevable", "vérifiée par de nombreuses observations", "acceptée par la majorité des savants", "utile à la société"],
    ok: 0,
    why: "Une théorie qui n'interdit rien (astrologie, qui explique tout après coup) ne risque rien : elle n'est pas scientifique. La science accepte le risque d'être contredite."
  },
  {
    q: "Un « paradigme » chez Kuhn désigne…",
    opts: ["le cadre théorique partagé par une communauté scientifique", "une expérience décisive", "une erreur de raisonnement", "un instrument de mesure"],
    ok: 0,
    why: "La « science normale » travaille dans un paradigme jusqu'à ce que les anomalies s'accumulent : alors survient une révolution scientifique (Ptolémée → Copernic)."
  },
  {
    q: "L'« arraisonnement » chez Heidegger désigne…",
    opts: ["la mise en demeure de la nature de se livrer comme stock d'énergie", "l'art de bien raisonner", "l'arrestation des criminels", "le calcul des probabilités"],
    ok: 0,
    why: "La technique moderne ne contemple plus la nature : elle la somme de livrer ses ressources. Le Rhin devient fournisseur de pression hydraulique — et l'homme, « ressource humaine »."
  },
  {
    q: "Bergson distingue la morale close et la morale ouverte. La morale close est…",
    opts: ["la pression sociale qui maintient la cohésion du groupe", "la morale des grands réformateurs", "une morale secrète", "l'absence de morale"],
    ok: 0,
    why: "La morale close conserve le groupe par l'obligation ; la morale ouverte, incarnée par les héros et les saints, appelle au-delà du groupe vers l'humanité entière."
  },
  {
    q: "La justice commutative concerne…",
    opts: ["les échanges, selon une égalité arithmétique", "la distribution des honneurs selon le mérite", "le droit de vote", "les relations internationales"],
    ok: 0,
    why: "Commutative : rendre l'équivalent dans les échanges et réparations (égalité stricte). Distributive : répartir selon une proportion (mérite, besoins). Distinction d'Aristote."
  },
  {
    q: "L'intentionnalité (Husserl) signifie que…",
    opts: ["toute conscience est conscience de quelque chose", "nous agissons toujours volontairement", "nos intentions sont toujours bonnes", "la conscience peut se fermer au monde"],
    ok: 0,
    why: "La conscience n'est pas une boîte close contenant des images : elle est un mouvement qui vise les choses, une ouverture au monde."
  },
  {
    q: "Les « petites perceptions » de Leibniz prouvent que…",
    opts: ["des perceptions inconscientes agissent sur nous", "nous percevons tout ce qui nous entoure", "les sens sont toujours trompeurs", "l'âme est mortelle"],
    ok: 0,
    why: "Mille impressions trop faibles pour être remarquées (chaque vague dans le grondement de la mer) nous affectent sans que nous en ayons conscience — bien avant Freud."
  },
  {
    q: "Quelle est la différence entre contrainte et obligation ?",
    opts: ["La contrainte force de l'extérieur, l'obligation suppose la liberté", "Ce sont deux synonymes", "L'obligation est physique, la contrainte morale", "La contrainte est toujours légitime"],
    ok: 0,
    why: "On ne peut pas faire autrement face à une contrainte ; on peut désobéir à une obligation — c'est pourquoi seul un être libre peut être obligé."
  },
  {
    q: "Le fatalisme se distingue du déterminisme car il affirme que…",
    opts: ["ce qui doit arriver arrivera quoi que l'on fasse", "tout phénomène a des causes", "l'homme est entièrement libre", "la science peut tout prédire"],
    ok: 0,
    why: "Le déterminisme dit : des causes produisent des effets (agir sur les causes change les effets). Le fatalisme dit : l'issue est fixée d'avance, inutile d'agir — c'est une démission, pas une thèse scientifique."
  },
  {
    q: "Être rationnel et être raisonnable, est-ce pareil ?",
    opts: ["Non : rationnel = conforme à la logique, raisonnable = conforme à la sagesse pratique", "Oui, parfaitement synonymes", "Non : raisonnable est péjoratif", "Oui, sauf en mathématiques"],
    ok: 0,
    why: "Un plan de cambriolage peut être parfaitement rationnel (cohérent, calculé) sans être raisonnable. L'écart entre les deux fait des sujets entiers."
  },
  {
    q: "Ce qui distingue la punition de la vengeance, c'est…",
    opts: ["un tiers impartial, une règle préalable et une proportion", "la sévérité du châtiment", "le fait qu'elle soit secrète", "rien, c'est identique"],
    ok: 0,
    why: "La vengeance est privée, passionnelle, sans mesure. La punition est publique, prononcée par un tiers selon une règle proportionnée — l'institution judiciaire naît pour briser le cycle de la vengeance."
  },
  {
    q: "Le mot « travail » vient du latin tripalium, qui désignait…",
    opts: ["un instrument de torture", "un outil agricole", "un chant de labeur", "une monnaie romaine"],
    ok: 0,
    why: "Le tripalium était un instrument de torture à trois pieux. L'étymologie porte la peine et la contrainte — à interroger : le travail s'y réduit-il ?"
  },
  {
    q: "En grec, la vérité se dit alètheia, c'est-à-dire littéralement…",
    opts: ["le dévoilement (ce qui est arraché à l'oubli)", "la lumière du soleil", "la parole des dieux", "l'exactitude du calcul"],
    ok: 0,
    why: "A- privatif + lèthè (l'oubli, le voile) : la vérité comme dé-voilement, ce qui sort de la dissimulation. Une étymologie très utilisée en dissertation."
  },
  {
    q: "Les Grecs distinguaient chronos et kairos. Le kairos désigne…",
    opts: ["le moment opportun, l'occasion à saisir", "le temps qui s'écoule et se mesure", "l'éternité divine", "le passé révolu"],
    ok: 0,
    why: "Chronos est le temps quantitatif des horloges ; kairos est le moment qualitatif où il faut agir — le temps du stratège, du médecin, de l'orateur."
  },
  {
    q: "Le « sophisme naturaliste » consiste à…",
    opts: ["déduire ce qui doit être de ce qui est", "nier l'existence de la nature", "imiter les animaux", "confondre nature et culture"],
    ok: 0,
    why: "Du fait, on ne peut pas tirer le droit : que quelque chose soit « naturel » ne le rend ni bon ni obligatoire (Mill : la nature noie et brûle avec indifférence)."
  },
  {
    q: "La skholè grecque désigne…",
    opts: ["le loisir studieux, condition de la pensée", "l'école obligatoire", "l'esclavage", "le travail des champs"],
    ok: 0,
    why: "Le loisir libéré de la nécessité (d'où vient notre mot « école ») : pour les Anciens, penser et faire de la politique exigent d'être libre du travail."
  },
  {
    q: "Chez Saussure, le signe linguistique est « arbitraire » parce que…",
    opts: ["aucun lien naturel n'unit le son au concept", "chacun invente ses propres mots", "les langues n'ont pas de règles", "le sens change à chaque phrase"],
    ok: 0,
    why: "Rien dans le son « arbre » ne ressemble à un arbre — preuve : chaque langue dit autre chose (tree, Baum). Le lien signifiant-signifié est une convention sociale."
  },
  {
    q: "Un énoncé « performatif » (Austin) est un énoncé qui…",
    opts: ["accomplit l'acte qu'il énonce", "décrit très précisément la réalité", "exprime une émotion forte", "pose une question rhétorique"],
    ok: 0,
    why: "« Je le jure », « la séance est ouverte », « je vous déclare unis » : dire, c'est faire. Le langage n'est pas qu'un outil de description."
  },
  {
    q: "La « perfectibilité » chez Rousseau désigne…",
    opts: ["la capacité indéfinie de l'homme à se transformer", "le fait que l'homme soit parfait", "le progrès technique inévitable", "la perfection de la nature"],
    ok: 0,
    why: "Contrairement à l'animal, fixé par l'instinct, l'homme peut tout devenir — pour le meilleur et pour le pire. C'est ce qui le distingue, plus qu'aucune qualité fixe."
  },
  {
    q: "Pour Max Weber, l'État moderne se définit par…",
    opts: ["le monopole de la violence physique légitime", "la richesse de son territoire", "l'élection au suffrage universel", "la séparation de l'Église et de l'État"],
    ok: 0,
    why: "Lui seul peut légalement contraindre, punir, lever l'impôt — et toute la question tient dans le mot « légitime » : la force brute ne suffit pas."
  },
  {
    q: "Un « État de droit » est un État…",
    opts: ["lui-même soumis aux lois, avec des pouvoirs séparés", "qui possède simplement des lois", "dirigé par des juristes", "sans aucune police"],
    ok: 0,
    why: "Tout État a des lois ; l'État de droit est celui dont le pouvoir est limité par elles (recours possibles, séparation des pouvoirs — Montesquieu : « le pouvoir arrête le pouvoir »)."
  },
  {
    q: "La catharsis, chez Aristote, désigne…",
    opts: ["la purgation des passions par la représentation théâtrale", "la purification religieuse par l'eau", "la critique de l'art", "l'inspiration du poète"],
    ok: 0,
    why: "En éprouvant terreur et pitié au théâtre, le spectateur purge ces passions au lieu de les subir dans la vie — l'art a une fonction, contre Platon."
  },
  {
    q: "Pour Kant, le jugement « c'est beau » est…",
    opts: ["subjectif mais à prétention universelle", "purement personnel, comme un goût alimentaire", "objectif et démontrable", "réservé aux experts"],
    ok: 0,
    why: "Aucun concept ne prouve la beauté (subjectif), mais quand je dis « c'est beau », j'attends que tous en conviennent — sinon je dirais juste « ça me plaît »."
  },
  {
    q: "Le surmoi, chez Freud, est…",
    opts: ["l'intériorisation des interdits parentaux et sociaux", "la partie la plus intelligente du moi", "le réservoir des pulsions", "la conscience du monde extérieur"],
    ok: 0,
    why: "Héritier de l'autorité parentale, il juge et censure le moi — la sévérité de la conscience morale vient de là, pas du ciel. Le ça est le pôle pulsionnel, le moi l'instance médiatrice."
  },
  {
    q: "L'« heuristique de la peur » de Hans Jonas recommande de…",
    opts: ["prendre au sérieux le pire scénario pour guider nos choix techniques", "avoir peur de toute nouveauté", "interdire la recherche scientifique", "cacher les risques au public"],
    ok: 0,
    why: "Face à des techniques aux effets irréversibles et globaux (nucléaire, climat, génétique), mieux vaut écouter la prophétie de malheur que celle du bonheur : principe de responsabilité envers les générations futures."
  },
  {
    q: "Chez Spinoza, le conatus désigne…",
    opts: ["l'effort de chaque être pour persévérer dans son être", "le doute méthodique", "la peur de la mort", "le contrat social"],
    ok: 0,
    why: "Chaque chose s'efforce de persévérer dans son être : c'est l'essence même de l'individu. Chez l'homme, ce conatus conscient de lui-même s'appelle le désir."
  },
  {
    q: "Le « triple présent » d'Augustin se compose de…",
    opts: ["la mémoire, l'attention et l'attente", "hier, aujourd'hui et demain", "la naissance, la vie et la mort", "le passé, le présent et l'éternité"],
    ok: 0,
    why: "Le passé n'est plus, le futur pas encore : le temps n'existe que dans l'âme — présent du passé (mémoire), présent du présent (attention), présent de l'avenir (attente)."
  },
  {
    q: "Dans la dialectique du maître et de l'esclave (Hegel), qui se forme et s'émancipe ?",
    opts: ["L'esclave, par son travail", "Le maître, par sa domination", "Les deux également", "Aucun des deux"],
    ok: 0,
    why: "En transformant le monde, l'esclave discipline son désir et prend conscience de sa puissance ; le maître, qui ne fait que jouir, devient dépendant de celui qui travaille."
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

/* ---------- ÉTIQUETAGE PAR NOTION (pour le diagnostic des lacunes) ----------
   Ordre = ordre des questions ci-dessus. À garder synchronisé si on ajoute une question. */
const _QUIZ_N = ["verite","devoir","verite","justice","etat","inconscient","bonheur","travail","langage","temps","verite","nature","liberte","justice","devoir","devoir","liberte","science","religion","art","travail","justice","justice","science","science","technique","devoir","justice","conscience","inconscient","devoir","liberte","raison","justice","travail","verite","temps","nature","travail","langage","langage","nature","etat","etat","art","art","inconscient","technique","liberte","temps","travail"];
const _TF_N = ["devoir","bonheur","conscience","liberte","art","etat","etat","liberte","conscience","religion","etat","verite","art","etat","langage","liberte","verite","bonheur","inconscient","etat"];
QUIZ.forEach((q, i) => { if (_QUIZ_N[i]) q.n = _QUIZ_N[i]; });
TRUEFALSE.forEach((q, i) => { if (_TF_N[i]) q.n = _TF_N[i]; });

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

/* ---------- ANNALES — sujets de dissertation tombés au bac (Métropole) ---------- */
const ANNALES = [
  { y: 2026, loc: "Amérique du Nord", s: "La science doit-elle être utile ?", n: ["science", "technique"] },
  { y: 2026, loc: "Amérique du Nord", s: "L'artiste sait-il ce qu'il fait ?", n: ["art", "conscience"] },
  { y: 2025, loc: "Asie", s: "La justice a-t-elle besoin de la force ?", n: ["justice", "etat"] },
  { y: 2025, loc: "Asie", s: "La science nous éloigne-t-elle de la réalité ?", n: ["science", "verite"] },
  { y: 2025, loc: "Amérique du Nord", s: "Une œuvre d'art doit-elle toujours plaire ?", n: ["art"] },
  { y: 2025, loc: "Amérique du Nord", s: "Suffit-il de faire son devoir pour être juste ?", n: ["devoir", "justice"] },
  { y: 2025, loc: "Polynésie", s: "La fréquentation des œuvres d'art est-elle une perte de temps ?", n: ["art", "temps"] },
  { y: 2025, loc: "Polynésie", s: "Le but de l'artiste est-il de plaire au plus grand nombre ?", n: ["art"] },
  { y: 2025, loc: "Métropole", s: "Notre avenir dépend-il de la technique ?", n: ["technique"] },
  { y: 2025, loc: "Métropole", s: "La vérité est-elle toujours convaincante ?", n: ["verite", "raison"] },
  { y: 2024, loc: "Métropole", s: "La science peut-elle satisfaire notre besoin de vérité ?", n: ["science", "verite"] },
  { y: 2024, loc: "Métropole", s: "L'État nous doit-il quelque chose ?", n: ["etat", "justice"] },
  { y: 2023, loc: "Métropole", s: "Le bonheur est-il affaire de raison ?", n: ["bonheur", "raison"] },
  { y: 2023, loc: "Métropole", s: "Vouloir la paix, est-ce vouloir la justice ?", n: ["justice"] },
  { y: 2022, loc: "Métropole", s: "Les pratiques artistiques transforment-elles le monde ?", n: ["art"] },
  { y: 2022, loc: "Métropole", s: "Revient-il à l'État de décider de ce qui est juste ?", n: ["etat", "justice"] },
  { y: 2021, loc: "Métropole", s: "Discuter, est-ce renoncer à la violence ?", n: ["langage"] },
  { y: 2021, loc: "Métropole", s: "L'inconscient échappe-t-il à toute forme de connaissance ?", n: ["inconscient", "science"] },
  { y: 2021, loc: "Métropole", s: "Sommes-nous responsables de l'avenir ?", n: ["devoir", "temps"] },
  { y: 2019, loc: "Métropole · série L", s: "Est-il possible d'échapper au temps ?", n: ["temps"] },
  { y: 2019, loc: "Métropole · série L", s: "À quoi bon expliquer une œuvre d'art ?", n: ["art"] },
  { y: 2019, loc: "Métropole · série ES", s: "La morale est-elle la meilleure des politiques ?", n: ["devoir", "etat"] },
  { y: 2019, loc: "Métropole · série ES", s: "Le travail divise-t-il les hommes ?", n: ["travail"] },
  { y: 2019, loc: "Métropole · série S", s: "Reconnaître ses devoirs, est-ce renoncer à sa liberté ?", n: ["devoir", "liberte"] },
  { y: 2018, loc: "Métropole · série L", s: "Peut-on renoncer à la vérité ?", n: ["verite"] },
  { y: 2018, loc: "Métropole · série ES", s: "Toute vérité est-elle définitive ?", n: ["verite", "science"] },
  { y: 2018, loc: "Métropole · série ES", s: "Peut-on être insensible à l'art ?", n: ["art"] },
  { y: 2018, loc: "Métropole · série S", s: "Éprouver l'injustice, est-ce nécessaire pour savoir ce qui est juste ?", n: ["justice"] },
  { y: 2017, loc: "Métropole · série L", s: "Suffit-il d'observer pour connaître ?", n: ["science", "raison"] },
  { y: 2017, loc: "Métropole · série L", s: "Tout ce que j'ai le droit de faire est-il juste ?", n: ["justice"] },
  { y: 2017, loc: "Métropole · série ES", s: "La raison peut-elle rendre raison de tout ?", n: ["raison"] },
  { y: 2017, loc: "Métropole · série ES", s: "Une œuvre d'art est-elle nécessairement belle ?", n: ["art"] },
  { y: 2016, loc: "Métropole · série L", s: "Notre conscience morale n'est-elle que le fruit de l'éducation ?", n: ["conscience", "devoir"] },
  { y: 2016, loc: "Métropole · série S", s: "Travailler moins, est-ce vivre mieux ?", n: ["travail", "bonheur"] },
  { y: 2016, loc: "Métropole · série S", s: "Faut-il démontrer pour savoir ?", n: ["science", "raison"] },
  { y: 2015, loc: "Métropole · série L", s: "Respecter tout être vivant, est-ce un devoir moral ?", n: ["nature", "devoir"] },
  { y: 2015, loc: "Métropole · série L", s: "Suis-je ce que mon passé a fait de moi ?", n: ["temps", "conscience", "liberte"] },
  { y: 2015, loc: "Métropole · série S", s: "Une œuvre d'art a-t-elle toujours un sens ?", n: ["art"] },
  { y: 2015, loc: "Métropole · série S", s: "La politique échappe-t-elle à une exigence de vérité ?", n: ["etat", "verite"] },
  { y: 2015, loc: "Métropole · série ES", s: "La conscience de l'individu n'est-elle que le reflet de la société à laquelle il appartient ?", n: ["conscience"] }
];

/* ---------- DÉCODER LE SUJET : notions mobilisées + présupposé ----------
   n = notions en jeu (1 à 2) ; presup = le présupposé correct ;
   faux = 2 présupposés erronés (pièges) ; aide = ce qu'il faut retenir. */
const SUJETS = [
  { s: "Notre avenir dépend-il de la technique ?", n: ["technique", "temps"],
    presup: "Notre avenir n'est pas entièrement entre nos mains : il dépend de quelque chose — la technique étant un candidat.",
    faux: ["La technique a déjà déterminé tout notre avenir, sans qu'il nous reste la moindre marge pour le changer.", "L'avenir se réduit entièrement au progrès technique, comme s'il n'existait aucune autre dimension de notre futur."],
    aide: "« Dépendre » suppose une perte de maîtrise ; « avenir » introduit le temps. L'enjeu : la technique nous libère-t-elle ou nous asservit-elle ?" },
  { s: "La science peut-elle satisfaire notre besoin de vérité ?", n: ["science", "verite"],
    presup: "L'homme a un « besoin de vérité », et la science prétend pouvoir y répondre — reste à savoir si elle le comble vraiment.",
    faux: ["La science et la vérité sont une seule et même chose, de sorte que toute découverte scientifique serait une vérité définitive.", "Le besoin de vérité n'est qu'une illusion, et personne n'a au fond jamais réellement cherché à connaître le vrai."],
    aide: "Le mot « besoin » est le piège : il faut le questionner. La science donne-t-elle LA vérité, ou seulement des vérités provisoires ?" },
  { s: "L'État nous doit-il quelque chose ?", n: ["etat", "devoir"],
    presup: "Il existe une relation d'obligation entre l'État et les individus — reste à savoir dans quel sens elle va.",
    faux: ["L'État est un bienfaiteur naturel dont la générosité envers les citoyens va de soi et ne se discute même pas.", "Seuls les citoyens ont des devoirs, l'État n'étant qu'une abstraction incapable de la moindre obligation."],
    aide: "« Devoir » renvoie ici à la dette et au droit : que peut-on légitimement exiger de l'État ? Notions : l'État, le devoir (et la justice)." },
  { s: "Le bonheur est-il affaire de raison ?", n: ["bonheur", "raison"],
    presup: "Le bonheur pourrait relever d'autre chose que du hasard ou du sentiment — peut-être de la raison.",
    faux: ["Le bonheur se calcule entièrement par la raison, comme on résoudrait un problème de mathématiques.", "Le bonheur dépend uniquement de la chance et des circonstances, sans que nous y soyons jamais pour rien."],
    aide: "« Affaire de raison » oppose implicitement raison et sentiment/chance. Le bonheur se calcule-t-il, ou échappe-t-il à la raison ?" },
  { s: "Vouloir la paix, est-ce vouloir la justice ?", n: ["justice", "etat"],
    presup: "Paix et justice pourraient ne pas coïncider — sinon la question ne se poserait pas.",
    faux: ["La paix et la justice sont strictement identiques, de sorte que vouloir l'une reviendrait toujours à vouloir l'autre.", "La paix n'est qu'une faiblesse, et seule la guerre permettrait d'établir un ordre véritablement juste."],
    aide: "Le sujet présuppose un écart possible : une paix injuste (l'ordre des tyrans) est concevable. Notions : la justice, l'État." },
  { s: "Revient-il à l'État de décider de ce qui est juste ?", n: ["etat", "justice"],
    presup: "Il y a une différence possible entre ce que l'État décide (le légal) et ce qui est juste (le légitime).",
    faux: ["L'État crée la justice de toutes pièces, de sorte que tout ce qu'il décrète deviendrait automatiquement juste.", "La justice est une vérité éternelle inscrite dans la nature, à laquelle aucune décision humaine ne pourrait rien changer."],
    aide: "Le cœur du sujet : la distinction légal / légitime. Si l'État décidait du juste, une loi injuste serait impossible — or elle existe." },
  { s: "Discuter, est-ce renoncer à la violence ?", n: ["langage", "justice"],
    presup: "Discuter et user de violence s'opposent — on choisirait l'un OU l'autre.",
    faux: ["Toute discussion est secrètement une forme de violence, si bien qu'on ne pourrait jamais vraiment les distinguer.", "La violence serait le seul langage que comprennent les hommes, la parole n'ayant au fond jamais rien réglé."],
    aide: "Le présupposé (discussion vs violence) est précisément ce qu'il faut interroger : une discussion peut être une violence déguisée. Notions : le langage, la justice." },
  { s: "Sommes-nous responsables de l'avenir ?", n: ["devoir", "temps"],
    presup: "Nous avons un certain pouvoir sur l'avenir — sinon nous n'en serions pas responsables.",
    faux: ["L'avenir est entièrement déterminé par des causes qui nous échappent, ce qui rendrait toute responsabilité impossible.", "Seules les générations futures seront responsables de leur propre avenir, et le présent n'y jouerait aucun rôle."],
    aide: "« Responsable » suppose liberté et pouvoir d'agir ; « avenir » introduit le temps et les générations futures (Jonas). Notions : le devoir, le temps." },
  { s: "Faut-il toujours dire la vérité ?", n: ["verite", "devoir"],
    presup: "Dire la vérité est généralement un devoir — le mot « toujours » invite à en chercher les limites.",
    faux: ["Mentir est en réalité plus utile que dire la vérité, et la sincérité n'aurait jamais profité à personne.", "La vérité étant relative à chacun, dire « la » vérité n'aurait au fond tout simplement aucun sens."],
    aide: "Le « toujours » est l'opérateur clé : il oppose le devoir inconditionnel (Kant) aux cas où mentir semble juste. Notions : la vérité, le devoir." },
  { s: "Être libre, est-ce faire ce que l'on veut ?", n: ["liberte", "devoir"],
    presup: "La liberté a un rapport avec le désir et la volonté — mais peut-être pas celui que le sens commun croit.",
    faux: ["Être libre consisterait à obéir aveuglément aux lois et aux ordres, sans jamais se poser la moindre question.", "Nos désirs nous étant imposés de l'extérieur, vouloir quelque chose par soi-même serait de toute façon impossible."],
    aide: "Sujet classique : il oppose liberté-licence (faire ce qu'on veut) et liberté-autonomie (obéir à une règle qu'on se donne). Notions : la liberté, le devoir." },
  { s: "L'inconscient échappe-t-il à toute connaissance ?", n: ["inconscient", "science"],
    presup: "L'inconscient existe — et il pose un problème particulier de connaissance.",
    faux: ["Tout ce qui est psychique est par définition conscient, de sorte que parler d'un inconscient serait une contradiction.", "L'inconscient nous est parfaitement transparent, et il suffirait de s'observer un peu pour le connaître entièrement."],
    aide: "Le sujet présuppose l'existence de l'inconscient ; la question porte sur sa connaissabilité (psychanalyse science ou non ?). Notions : l'inconscient, la science." },
  { s: "Le temps n'est-il qu'une illusion ?", n: ["temps", "conscience"],
    presup: "Le temps pourrait n'être qu'une apparence subjective, sans réalité indépendante de l'esprit.",
    faux: ["Le temps serait une substance matérielle que l'on pourrait toucher, mesurer et stocker comme n'importe quel objet.", "Puisque tout change sans cesse, le passé et le futur n'auraient littéralement jamais existé d'aucune manière."],
    aide: "Le « ne… qu' » réduit le temps à une illusion : il faut opposer temps objectif (physique) et temps vécu (conscience, durée). Notions : le temps, la conscience." },
  { s: "La religion est-elle l'ennemie de la raison ?", n: ["religion", "raison"],
    presup: "Foi et raison pourraient s'opposer — au point qu'il faudrait peut-être choisir entre les deux.",
    faux: ["La foi et la raison sont exactement la même faculté, de sorte que croire et démontrer ne feraient qu'un.", "La raison ayant définitivement prouvé que Dieu n'existe pas, toute religion ne serait qu'une pure superstition."],
    aide: "« Ennemie » présuppose un conflit : à interroger, car croire et savoir ne s'excluent pas forcément (Pascal). Notions : la religion, la raison." },
  { s: "La nature est-elle un modèle pour l'homme ?", n: ["nature", "devoir"],
    presup: "La nature pourrait servir de norme à nos conduites — il y aurait un « bien » naturel à imiter.",
    faux: ["L'homme étant devenu entièrement artificiel, il n'aurait plus aucun rapport avec la nature dont il serait sorti.", "La nature serait une personne bienveillante qui nous dicte consciemment nos devoirs, comme le ferait un sage."],
    aide: "Le piège : tirer une règle morale (droit) d'un simple fait naturel — c'est le « sophisme naturaliste ». Notions : la nature, le devoir/la morale." },
  { s: "Une œuvre d'art a-t-elle toujours un sens ?", n: ["art", "langage"],
    presup: "Une œuvre d'art porterait normalement un sens à déchiffrer — le « toujours » interroge l'art abstrait ou gratuit.",
    faux: ["Une œuvre d'art se réduirait tout entière à son message, si bien que comprendre son sens dispenserait de la regarder.", "L'art n'étant qu'une décoration agréable pour les yeux, lui chercher un sens serait une pure perte de temps."],
    aide: "« Sens » rapproche l'art du langage (l'œuvre dit-elle quelque chose ?). Le « toujours » ouvre le cas de l'art sans message. Notions : l'art, le langage." }
];

/* ---------- NIVEAUX XP ---------- */
const LEVELS = [
  { xp: 0, name: "Apprenti sophiste" },
  { xp: 100, name: "Disciple de Socrate" },
  { xp: 700, name: "Stoïcien du dimanche" },
  { xp: 1300, name: "Esprit critique" },
  { xp: 2000, name: "Lumière des Lumières" },
  { xp: 2500, name: "Surhumain nietzschéen" },
  { xp: 3500, name: "Sage absolu — 20/20 au bac" }
];
