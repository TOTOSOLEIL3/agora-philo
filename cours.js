/* ============================================================
   AGORA — Le cours : 17 fiches de notions + méthodologie
   Fiches originales, couvrant le programme de Terminale.
   ============================================================ */

const COURS = [
  {
    id: "art",
    title: "L'art",
    tag: "Esthétique",
    etym: "Latin ars, artis : habileté, savoir-faire — traduction du grec tekhnè. À l'origine, l'art et la technique ne font qu'un ; leur séparation (beaux-arts vs artisanat) est moderne.",
    intro: "L'art ne sert à rien — et pourtant aucune société ne s'en est jamais passée. Voilà le scandale : une activité sans utilité apparente, qui mobilise pourtant le génie, l'argent et la mémoire des civilisations. Imitation trompeuse ou accès privilégié à la vérité ? Simple affaire de goût ou prétention à l'universel ?",
    problematiques: [
      "L'art est-il une imitation du réel ou une création véritable ?",
      "Le jugement « c'est beau » est-il purement subjectif ?",
      "L'art nous détourne-t-il de la vérité ou nous la révèle-t-il ?"
    ],
    auteurs: [
      { name: "Platon", oeuvre: "République, livre X", these: "L'art est une imitation d'imitation : le peintre copie le lit du menuisier, qui copie lui-même l'Idée de lit. À deux degrés du vrai, l'art flatte la partie irrationnelle de l'âme — d'où l'exclusion des poètes de la cité idéale." },
      { name: "Aristote", oeuvre: "Poétique", these: "Contre son maître, il réhabilite l'imitation : elle est naturelle à l'homme et source d'apprentissage. La tragédie opère une catharsis — en éprouvant terreur et pitié au théâtre, le spectateur purge ses passions au lieu de les subir." },
      { name: "Kant", oeuvre: "Critique de la faculté de juger (1790)", these: "Le beau n'est ni l'agréable (plaisir privé) ni le bien (intérêt moral) : il est « ce qui plaît universellement sans concept ». Le jugement de goût est subjectif mais prétend à l'universalité — quand je dis « c'est beau », j'attends que tous en conviennent." },
      { name: "Hegel", oeuvre: "Esthétique", these: "L'art est la manifestation sensible de l'esprit : il incarne des idées dans la matière (pierre, couleur, son). Le beau artistique est supérieur au beau naturel, car il est né de l'esprit et nous parle de nous-mêmes." },
      { name: "Nietzsche", oeuvre: "Le Gai Savoir, fragments posthumes", these: "« Nous avons l'art pour ne pas mourir de la vérité. » Loin d'être un mensonge condamnable, l'illusion artistique est un stimulant vital : elle rend l'existence supportable et affirme la vie là où la lucidité pure la nierait." },
      { name: "Bergson", oeuvre: "Le Rire (1900)", these: "Nous ne voyons pas les choses : nous lisons leurs étiquettes utiles. L'artiste, lui, perçoit ce que l'habitude et le langage voilent — l'art écarte le rideau des conventions et nous rend le réel dans sa singularité." }
    ],
    citations: [
      { q: "Est beau ce qui plaît universellement sans concept.", a: "Kant" },
      { q: "Nous avons l'art pour ne pas mourir de la vérité.", a: "Nietzsche" },
      { q: "L'art est fait pour troubler, la science rassure.", a: "Georges Braque" }
    ],
    reperes: ["Objectif / Subjectif / Intersubjectif", "Idéal / Réel", "Ressemblance / Analogie"],
    sujets: [
      "L'art nous détourne-t-il du réel ?",
      "Une œuvre d'art doit-elle être belle ?",
      "Peut-on discuter des goûts ?"
    ],
    cours: [
      { t: "1. L'art n'est pas la technique", d: "L'artisan produit un objet utile, selon des règles connues d'avance : on peut apprendre à faire une chaise. L'artiste crée une œuvre sans mode d'emploi préalable — c'est pourquoi Kant parle de génie : un talent qui donne ses règles à l'art au lieu de les suivre. L'œuvre ne vaut pas par son usage (un tableau ne « sert » à rien) mais par elle-même : elle est unique, là où le produit technique est reproductible. Première distinction à poser dans toute copie : art / artisanat / industrie." },
      { t: "2. Le beau n'est pas l'agréable", d: "« J'aime le chocolat » : plaisir privé, indiscutable. « Cette toile est belle » : je prétends que tout le monde devrait en convenir — sinon je dirais juste « elle me plaît ». C'est l'analyse de Kant : le jugement de goût est subjectif (aucun concept ne prouve la beauté) mais à prétention universelle, et désintéressé — je ne veux ni posséder ni consommer l'objet, je le contemple. Voilà pourquoi on discute du beau depuis toujours, alors qu'on ne discute pas des goûts alimentaires." },
      { t: "3. L'art dit-il le vrai ?", d: "Platon condamne l'art comme copie de copie qui flatte les passions. Mais l'objection vaut surtout pour l'art réaliste : depuis, la peinture abstraite ou la poésie ne « copient » rien. Renversement moderne : l'art révèle ce que l'habitude nous cache. Pour Bergson, nous percevons des étiquettes utiles, pas les choses — l'artiste, lui, voit et nous fait voir le singulier. Pour Hegel, l'œuvre rend l'esprit visible à lui-même. L'art n'est pas un mensonge sur le réel : un autre accès au réel que le concept." }
    ],
    vocab: [
      { m: "Esthétique", d: "Partie de la philosophie qui réfléchit sur le beau et sur l'art." },
      { m: "Mimésis", d: "Imitation de la nature ou des apparences, conçue comme principe des arts chez les Grecs." },
      { m: "Catharsis", d: "Purgation des passions opérée chez le spectateur par la représentation (théorisée par Aristote pour la tragédie)." },
      { m: "Jugement de goût", d: "Jugement par lequel on déclare une chose belle : subjectif, sans concept, mais à prétention universelle." },
      { m: "Désintéressement", d: "Caractère d'un plaisir pris sans désir de posséder, d'utiliser ni de consommer l'objet contemplé." }
    ],
    piege: "« Des goûts et des couleurs, on ne discute pas » : c'est précisément ce que Kant conteste. Il distingue l'agréable (purement privé : le goût du chocolat) du beau, qui prétend à l'assentiment de tous. Confondre les deux, c'est rater l'essentiel du problème esthétique."
  },

  {
    id: "bonheur",
    title: "Le bonheur",
    tag: "Morale",
    etym: "« Bon » + « heur », du latin augurium : le présage, la chance. Littéralement, le bonheur est une « bonne fortune » — ce qui pose d'emblée la question : dépend-il de nous ou du hasard ?",
    intro: "Tout le monde veut être heureux — c'est même, disait Aristote, le seul but qu'on ne poursuit jamais en vue d'autre chose. Mais personne ne s'accorde sur ce qu'il est : plaisir, absence de trouble, vertu, réussite ? Et s'il dépendait moins des circonstances que de nous-mêmes ?",
    problematiques: [
      "Le bonheur est-il le but de l'existence humaine ?",
      "Le bonheur dépend-il de nous ou des circonstances ?",
      "Faut-il sacrifier le bonheur au devoir, ou le devoir au bonheur ?"
    ],
    auteurs: [
      { name: "Aristote", oeuvre: "Éthique à Nicomaque", these: "Le bonheur (eudaimonia) est le souverain bien : ce qu'on recherche pour lui-même et jamais pour autre chose. Il n'est pas un état mais une activité — l'exercice excellent de ce qui fait l'homme, la raison, dans une vie complète." },
      { name: "Épicure", oeuvre: "Lettre à Ménécée", these: "Le bonheur s'obtient par un tri des désirs : satisfaire les désirs naturels et nécessaires (boire, manger, l'amitié), écarter les désirs vains (richesse, gloire, immortalité). Le but : l'ataraxie, absence de trouble de l'âme — un plaisir stable, non une accumulation de jouissances." },
      { name: "Épictète", oeuvre: "Manuel", these: "Distingue ce qui dépend de nous (jugements, désirs, actions) de ce qui n'en dépend pas (corps, réputation, mort). Le malheur naît de vouloir l'impossible ; la sagesse consiste à vouloir que les choses arrivent comme elles arrivent." },
      { name: "Kant", oeuvre: "Fondements de la métaphysique des mœurs (1785)", these: "Le bonheur est « un idéal non de la raison mais de l'imagination » : un concept si indéterminé que nul ne peut dire ce qui le rendrait vraiment heureux. La morale ne nous apprend pas à être heureux, mais à nous rendre dignes de l'être." },
      { name: "Schopenhauer", oeuvre: "Le Monde comme volonté et comme représentation (1818)", these: "Le désir est souffrance : manque tant qu'il n'est pas satisfait, ennui dès qu'il l'est. La vie oscille comme un pendule entre douleur et ennui — le bonheur n'est jamais qu'un répit négatif, la suspension momentanée d'une souffrance." },
      { name: "Alain", oeuvre: "Propos sur le bonheur (1925)", these: "Le bonheur n'est pas une loterie mais un travail : « il faut vouloir être heureux et y mettre du sien ». Le pessimisme est d'humeur, l'optimisme est de volonté — on se fait heureux comme on se fait athlète, par exercice." }
    ],
    citations: [
      { q: "Le bonheur est un idéal non de la raison, mais de l'imagination.", a: "Kant" },
      { q: "Il faut vouloir être heureux et y mettre du sien.", a: "Alain" },
      { q: "Quand on n'a pas ce que l'on aime, il faut aimer ce que l'on a.", a: "Thomas Corneille" }
    ],
    reperes: ["Absolu / Relatif", "Idéal / Réel", "Contingent / Nécessaire"],
    sujets: [
      "Faut-il vouloir être heureux ?",
      "Le bonheur dépend-il de nous ?",
      "Sommes-nous condamnés à chercher le bonheur sans jamais l'atteindre ?"
    ],
    cours: [
      { t: "1. Plaisir, joie, bonheur : trois choses", d: "Le plaisir est ponctuel et lié à la satisfaction d'un désir ou d'un besoin ; la joie est intense mais passagère ; le bonheur, lui, est un état global et durable de satisfaction — on dit d'une vie qu'elle est heureuse, pas d'une minute. D'où le premier problème : additionner des plaisirs ne fait pas un bonheur (une soirée réussie n'est pas une vie réussie), et certains plaisirs détruisent le bonheur. Hédonisme (le plaisir comme bien suprême) et eudémonisme (le bonheur comme fin) ne sont donc pas synonymes." },
      { t: "2. Les sagesses antiques : le bonheur s'apprend", d: "Point commun des écoles antiques : le bonheur ne dépend pas des biens extérieurs mais du rapport qu'on entretient avec eux. Épicure trie les désirs : satisfaire les naturels et nécessaires, congédier les vains (richesse, gloire) qui rendent l'âme insatiable. Les stoïciens tracent la frontière ailleurs : ne vouloir que ce qui dépend de nous (nos jugements), consentir au reste. Dans les deux cas, le malheur vient d'une erreur de jugement — et la philosophie est une médecine de l'âme." },
      { t: "3. Les modernes : un idéal introuvable ?", d: "Kant constate que le bonheur est un concept indéterminé : nul ne peut dire ce qui le rendrait vraiment heureux (la richesse ? les soucis qui viennent avec ?). Ce n'est donc pas sur lui qu'on peut fonder la morale — la morale rend digne du bonheur, sans le promettre. Pascal va plus loin : incapables de supporter le présent, nous fuyons dans le divertissement. Et Schopenhauer enferme le désir dans l'alternative manque/ennui. Reste la voie d'Alain : le bonheur n'est pas un état qu'on attend, c'est une pratique qu'on entretient." }
    ],
    vocab: [
      { m: "Eudémonisme", d: "Doctrine qui fait du bonheur le but de l'existence et de la morale." },
      { m: "Hédonisme", d: "Doctrine qui fait du plaisir le bien suprême." },
      { m: "Ataraxie", d: "Absence de trouble de l'âme, idéal des sagesses antiques." },
      { m: "Souverain bien", d: "Ce qui est recherché pour soi-même et jamais comme moyen en vue d'autre chose." },
      { m: "Divertissement", d: "Chez Pascal : toute occupation qui détourne l'homme de penser à sa condition mortelle." }
    ],
    piege: "Confondre épicurisme et hédonisme débridé. Dans le langage courant, « épicurien » désigne le bon vivant ; chez Épicure, c'est presque l'inverse : une ascèse du désir, du pain, de l'eau et des amis. Le contresens coûte cher en dissertation."
  },

  {
    id: "conscience",
    title: "La conscience",
    tag: "Métaphysique · Le sujet",
    etym: "Latin cum scientia : « avec savoir ». La conscience est un savoir qui accompagne — je ne fais pas que vivre, je sais que je vis. Le mot contient déjà la réflexivité.",
    intro: "Être conscient, c'est être présent à soi-même : je ne fais pas que vivre, je sais que je vis. Cette réflexivité fonde la dignité du sujet — mais elle est aussi une charge (l'angoisse, la responsabilité) et peut-être un leurre : suis-je vraiment ce que j'ai conscience d'être ?",
    problematiques: [
      "La conscience fait-elle la grandeur ou la misère de l'homme ?",
      "Suis-je ce que j'ai conscience d'être ?",
      "La conscience de soi est-elle une connaissance de soi ?"
    ],
    auteurs: [
      { name: "Descartes", oeuvre: "Méditations métaphysiques (1641)", these: "Au terme du doute hyperbolique, une certitude résiste : même trompé par un malin génie, il faut que j'existe pour être trompé. « Je pense, donc je suis » — la conscience est le fondement indubitable de toute connaissance, et je suis une chose pensante." },
      { name: "Pascal", oeuvre: "Pensées (1670)", these: "« L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant. » L'univers peut m'écraser, mais je sais que je meurs et lui ne sait rien : toute notre dignité consiste donc en la pensée." },
      { name: "Kant", oeuvre: "Anthropologie du point de vue pragmatique (1798)", these: "Posséder le « Je » dans sa représentation élève l'homme au-dessus de tous les êtres : il devient une personne, sujet moral responsable, et non une chose qu'on peut posséder ou utiliser." },
      { name: "Husserl", oeuvre: "Idées directrices pour une phénoménologie (1913)", these: "Toute conscience est conscience de quelque chose : c'est l'intentionnalité. La conscience n'est pas une boîte contenant des images du monde, mais un mouvement qui vise les choses — elle est ouverture, non intériorité close." },
      { name: "Sartre", oeuvre: "L'Être et le Néant (1943)", these: "La conscience n'est rien de figé : elle est néant, arrachement perpétuel à ce qui est. C'est pourquoi l'homme est libre — et la mauvaise foi consiste précisément à se fuir en se prétendant une chose (« je suis comme ça »)." },
      { name: "Bergson", oeuvre: "L'Énergie spirituelle (1919)", these: "La conscience signifie mémoire et anticipation : elle retient le passé et empiète sur l'avenir. Elle s'intensifie quand nous choisissons et s'endort dans l'habitude — conscience est synonyme de choix." }
    ],
    citations: [
      { q: "Je pense, donc je suis.", a: "Descartes" },
      { q: "L'homme n'est qu'un roseau, le plus faible de la nature ; mais c'est un roseau pensant.", a: "Pascal" },
      { q: "Toute conscience est conscience de quelque chose.", a: "Husserl" }
    ],
    reperes: ["Médiat / Immédiat", "Objectif / Subjectif / Intersubjectif", "En acte / En puissance"],
    sujets: [
      "La conscience fait-elle de l'homme une exception ?",
      "Puis-je me connaître moi-même ?",
      "Vaut-il mieux une conscience tranquille ou une conscience lucide ?"
    ],
    cours: [
      { t: "1. Les degrés de la conscience", d: "Conscience immédiate : être présent au monde, sentir, percevoir — l'animal en est capable. Conscience réfléchie : se prendre soi-même pour objet, savoir que l'on sait — dire « je ». Conscience morale : juger ses actes en bien ou en mal. L'enjeu de la notion tient dans le passage de l'une à l'autre : c'est la réflexion qui fait le sujet, c'est-à-dire un être qui ne se contente pas de vivre mais se rapporte à sa propre vie, peut s'en étonner, la juger, la transformer." },
      { t: "2. La conscience fonde le sujet", d: "Chez Descartes, la conscience survit au doute le plus radical : le cogito est la première certitude, le socle de tout savoir. Kant en tire la définition de la personne : parce qu'il possède le « Je » dans sa représentation, l'homme n'est pas une chose qu'on possède mais un sujet de droits, responsable de ses actes — fondement de la morale et du droit. La conscience n'est pas un simple fait psychologique : elle institue la dignité." },
      { t: "3. Conscience de soi n'est pas connaissance de soi", d: "Être sûr que j'existe ne dit pas qui je suis. L'introspection est partielle (je ne vois pas mes habitudes, mes mobiles profonds) et partiale (je suis juge et partie). Nietzsche ajoute que la conscience arrive tard : elle est la surface d'un jeu de forces qui la précède ; Husserl, qu'elle est toujours tournée vers autre chose qu'elle-même (intentionnalité). Se connaître exige donc des médiations : le regard d'autrui, ses actes, ses œuvres — on se découvre dans ce qu'on fait, pas en se contemplant." }
    ],
    vocab: [
      { m: "Conscience réfléchie", d: "Retour de la pensée sur elle-même : non seulement savoir, mais savoir que l'on sait." },
      { m: "Intentionnalité", d: "Structure de la conscience qui fait qu'elle est toujours visée de quelque chose d'autre qu'elle." },
      { m: "Introspection", d: "Observation de soi par soi-même, dont la fiabilité est contestée." },
      { m: "Sujet", d: "Être capable de dire « je », support de pensées et d'actes dont il répond." },
      { m: "Solipsisme", d: "Position selon laquelle seule l'existence de mon propre moi est certaine." }
    ],
    piege: "Ne pas confondre conscience psychologique (présence à soi et au monde) et conscience morale (capacité de juger le bien et le mal). Un sujet sur « la bonne conscience » porte sur la seconde — y répondre par Descartes seul serait à côté."
  },

  {
    id: "devoir",
    title: "Le devoir",
    tag: "Morale",
    etym: "Latin debere : « être débiteur de » (de + habere, tenir de quelqu'un). Le devoir est d'abord une dette — ce qu'on doit rendre. Toute la question : à qui, et pourquoi ?",
    intro: "« Tu dois » : la voix du devoir parle en nous avec une autorité étrange. D'où vient-elle — de Dieu, de la société, de la raison ? Et surtout : obéir au devoir, est-ce renoncer à sa liberté et à son bonheur, ou au contraire les accomplir ?",
    problematiques: [
      "Le devoir s'oppose-t-il à la liberté ?",
      "Le sentiment du devoir n'est-il qu'un dressage social ?",
      "Faut-il faire son devoir contre son bonheur ?"
    ],
    auteurs: [
      { name: "Kant", oeuvre: "Fondements de la métaphysique des mœurs (1785)", these: "Le devoir moral est un impératif catégorique : il commande sans condition (« ne mens pas »), contrairement à l'impératif hypothétique (« si tu veux réussir, travaille »). Agir moralement, c'est agir par devoir, non par intérêt ou inclination — et c'est là notre autonomie : la loi que la raison se donne." },
      { name: "Rousseau", oeuvre: "Émile (1762)", these: "La conscience morale est un « instinct divin », un sentiment immédiat du juste et de l'injuste antérieur à toute culture. Avant de raisonner, l'homme sent ce qu'il doit — la morale parle d'abord au cœur." },
      { name: "Durkheim", oeuvre: "L'Éducation morale (1925)", these: "La morale est un fait social : c'est la société qui, par l'éducation, dépose en nous ses règles et leur donne leur autorité. Le sentiment d'obligation est la voix du groupe intériorisée, non celle d'une raison pure." },
      { name: "Freud", oeuvre: "Le Moi et le Ça (1923)", these: "Le surmoi est l'héritier des interdits parentaux : la sévérité de la conscience morale provient de l'agressivité retournée contre soi. Le « devoir » qui nous tourmente est moins divin que familial et social." },
      { name: "Nietzsche", oeuvre: "Généalogie de la morale (1887)", these: "La morale du devoir a une histoire : elle est née du ressentiment des faibles, qui ont inversé les valeurs (l'humilité contre la force, le sacrifice contre l'affirmation). Faire la généalogie de la morale, c'est cesser de la croire tombée du ciel." },
      { name: "Bergson", oeuvre: "Les Deux Sources de la morale et de la religion (1932)", these: "Deux morales coexistent : la morale close, pression sociale qui maintient le groupe (l'obligation), et la morale ouverte, aspiration incarnée par les héros et les saints, qui appelle au-delà du groupe vers l'humanité." }
    ],
    citations: [
      { q: "Agis uniquement d'après la maxime qui fait que tu puisses vouloir en même temps qu'elle devienne une loi universelle.", a: "Kant" },
      { q: "Tu dois, donc tu peux.", a: "Kant (formule attribuée)" },
      { q: "Conscience ! Conscience ! instinct divin, immortelle et céleste voix.", a: "Rousseau" }
    ],
    reperes: ["Obligation / Contrainte", "Légal / Légitime", "Universel / Général / Particulier / Singulier"],
    sujets: [
      "Faut-il toujours faire son devoir ?",
      "Agir moralement, est-ce nécessairement lutter contre ses désirs ?",
      "Le devoir est-il l'ennemi du bonheur ?"
    ],
    cours: [
      { t: "1. Obligation n'est pas contrainte", d: "La contrainte est une force qui me soumet de l'extérieur : je ne peux pas faire autrement. L'obligation suppose au contraire que je puisse désobéir — on n'oblige pas une pierre à tomber. C'est pourquoi le devoir, loin de nier la liberté, la présuppose : seul un être libre peut être obligé. Toute la question devient alors : d'où cette exigence tire-t-elle son autorité ? Pourquoi « je dois » me lie-t-il, alors que rien ne m'y force physiquement ?" },
      { t: "2. Trois fondements rivaux", d: "Réponse sentimentale (Rousseau) : la conscience morale est un sentiment immédiat du juste, antérieur au raisonnement. Réponse rationaliste (Kant) : le devoir est un commandement de la raison — n'agis que selon une maxime universalisable, traite l'humanité toujours aussi comme une fin. Réponse sociologique et généalogique (Durkheim, Freud, Nietzsche) : le « devoir » est la société intériorisée, avec son histoire et ses intérêts. L'enjeu : si la morale a une origine sociale, garde-t-elle une valeur absolue ?" },
      { t: "3. Le devoir et ses conflits", d: "Le rigorisme kantien interdit le mensonge même pour sauver un ami : le devoir ne souffre aucune exception, sous peine de s'autodétruire. À l'opposé, l'utilitarisme juge les actes à leurs conséquences : est juste ce qui maximise le bien-être du plus grand nombre. Entre les deux, les cas de conscience — conflits de devoirs (vérité contre protection, loyauté contre justice) — montrent que la vie morale n'est pas l'application d'un code mais un jugement en situation. Bergson distingue d'ailleurs la morale close (pression du groupe) de la morale ouverte (appel des héros et des saints)." }
    ],
    vocab: [
      { m: "Impératif catégorique", d: "Commandement inconditionné : il oblige absolument, quelles que soient nos fins." },
      { m: "Impératif hypothétique", d: "Commandement conditionnel : il n'oblige que si l'on vise une certaine fin (« si tu veux X, fais Y »)." },
      { m: "Autonomie", d: "Capacité de se donner à soi-même sa propre loi." },
      { m: "Hétéronomie", d: "Situation d'une volonté qui reçoit sa loi d'autre chose qu'elle-même (désirs, société, autorité)." },
      { m: "Déontologie", d: "Morale qui juge les actes d'après des devoirs et des principes, indépendamment des conséquences." }
    ],
    piege: "Chez Kant, une action simplement conforme au devoir n'a pas de valeur morale : l'épicier honnête par calcul (pour garder ses clients) agit bien, mais pas moralement. Seule compte l'action faite par devoir. Cette distinction conforme/par devoir est une machine à points en dissertation."
  },

  {
    id: "etat",
    title: "L'État",
    tag: "Philosophie politique",
    etym: "Latin status : « ce qui se tient debout », la position stable. L'État est ce qui fait tenir la société dans la durée, par-delà les individus qui passent — d'où sa majuscule.",
    intro: "L'État nous précède, nous encadre et peut nous contraindre par la force — police, tribunaux, impôts. Comment une telle puissance peut-elle être légitime ? Est-elle l'ennemie de la liberté, ou au contraire sa seule garantie contre la loi du plus fort ?",
    problematiques: [
      "L'État est-il l'ennemi de la liberté ?",
      "Le pouvoir de l'État repose-t-il sur la force ou sur le droit ?",
      "Peut-on se passer de l'État ?"
    ],
    auteurs: [
      { name: "Hobbes", oeuvre: "Léviathan (1651)", these: "Sans pouvoir commun, l'état de nature est une « guerre de tous contre tous » où la vie est précaire. Par calcul, les hommes contractent : ils remettent toute leur puissance à un souverain absolu, le Léviathan, en échange de la sécurité. Mieux vaut un maître que le chaos." },
      { name: "Rousseau", oeuvre: "Du contrat social (1762)", these: "Le seul fondement légitime du pouvoir est le contrat par lequel chacun s'unit à tous : le peuple devient souverain et n'obéit qu'à la volonté générale — qui vise l'intérêt commun, et non la somme des intérêts privés. « L'obéissance à la loi qu'on s'est prescrite est liberté. »" },
      { name: "Max Weber", oeuvre: "Le Savant et le Politique (1919)", these: "L'État moderne se définit par le monopole de la violence physique légitime sur un territoire : lui seul peut légalement contraindre. Toute la question est dans le mot « légitime » — la force brute ne suffit pas, il faut que la domination soit reconnue." },
      { name: "Marx", oeuvre: "Manifeste du parti communiste (1848)", these: "L'État n'est pas neutre : il est l'instrument de la classe dominante, qui protège la propriété bourgeoise sous couvert d'intérêt général. Après la révolution et la disparition des classes, l'État est appelé à dépérir." },
      { name: "Bakounine", oeuvre: "Dieu et l'État (1882)", these: "Tout État, même « démocratique », est une machine de domination qui corrompt ceux qui le servent. L'anarchisme parie sur la libre fédération et l'autogestion : l'ordre sans le pouvoir." },
      { name: "Platon", oeuvre: "République", these: "Gouverner est un art qui exige un savoir : la cité juste doit être dirigée par ceux qui connaissent le Bien, les philosophes-rois. La démocratie, règne de l'opinion et des désirs, dégénère en tyrannie." }
    ],
    citations: [
      { q: "L'homme est né libre, et partout il est dans les fers.", a: "Rousseau" },
      { q: "L'État est le plus froid de tous les monstres froids.", a: "Nietzsche" },
      { q: "Le plus fort n'est jamais assez fort pour être toujours le maître, s'il ne transforme sa force en droit et l'obéissance en devoir.", a: "Rousseau" }
    ],
    reperes: ["Légal / Légitime", "En fait / En droit", "Obligation / Contrainte", "Public / Privé"],
    sujets: [
      "L'État limite-t-il la liberté ou la rend-il possible ?",
      "Un État peut-il être juste ?",
      "La société peut-elle exister sans État ?"
    ],
    cours: [
      { t: "1. Ce qu'est l'État (et ce qu'il n'est pas)", d: "L'État est l'institution qui détient la souveraineté : le pouvoir de décider en dernier ressort sur un territoire. Il ne se confond ni avec le gouvernement (l'équipe provisoire qui exerce le pouvoir), ni avec la société (l'ensemble des relations entre individus), ni avec la nation (communauté de culture ou d'histoire). Weber en donne le critère moderne : l'État revendique avec succès le monopole de la violence physique légitime — lui seul peut légalement punir, contraindre, lever l'impôt." },
      { t: "2. Pourquoi obéir ? Les justifications", d: "Pour les contractualistes, l'État naît d'un pacte : par peur de la mort violente (Hobbes), pour protéger ses droits naturels (Locke), pour fonder la liberté sur la loi commune (Rousseau). Contre eux, Aristote tient la cité pour naturelle : l'homme est fait pour vivre en communauté politique. La version moderne du compromis s'appelle État de droit : un État soumis lui-même aux lois, où les pouvoirs sont séparés (Montesquieu) pour que « le pouvoir arrête le pouvoir » — l'obéissance s'y échange contre des garanties." },
      { t: "3. Les critiques de l'État", d: "L'anarchisme (Bakounine) tient toute domination étatique pour une oppression à abolir : l'ordre peut naître de la libre association. Le marxisme y voit l'instrument d'une classe : derrière la neutralité affichée, l'État protège la propriété. Le libéralisme, sans vouloir le détruire, veut le minimal (sécurité, justice) contre l'État-providence qui redistribue et protège. À l'autre extrême, le totalitarisme du XXe siècle a montré ce qu'est un État qui absorbe tout : parti unique, idéologie obligatoire, terreur — la disparition même de la sphère privée." }
    ],
    vocab: [
      { m: "Souveraineté", d: "Pouvoir suprême de décider en dernier ressort, sans autorité supérieure." },
      { m: "État de droit", d: "État dont le pouvoir est lui-même soumis aux lois, avec séparation des pouvoirs et recours pour les citoyens." },
      { m: "Contractualisme", d: "Doctrine qui fonde le pouvoir politique sur une convention passée entre les hommes." },
      { m: "Société civile", d: "Sphère des relations et initiatives privées, distincte des institutions étatiques." },
      { m: "Totalitarisme", d: "Régime qui vise la domination totale de la société, jusque dans les consciences." }
    ],
    piege: "Confondre État, société et gouvernement. La société existe sans État (sociétés « sans État » étudiées par les anthropologues) ; le gouvernement n'est que l'organe qui exerce le pouvoir, pas l'institution elle-même. Un sujet sur l'État n'est pas un sujet sur « la politique » en général."
  },

  {
    id: "inconscient",
    title: "L'inconscient",
    tag: "Métaphysique · Le sujet",
    etym: "In- privatif + conscience (latin cum scientia, « avec savoir ») : ce qui échappe au savoir que j'ai de moi-même. Le mot dit la négation — reste à savoir si c'est un simple manque ou une force positive.",
    intro: "Et si une partie de ma vie psychique m'échappait par principe ? L'hypothèse freudienne de l'inconscient inflige au sujet une blessure : « le moi n'est pas maître dans sa propre maison ». Découverte scientifique majeure ou excuse commode pour fuir sa responsabilité ?",
    problematiques: [
      "L'hypothèse de l'inconscient ruine-t-elle la liberté du sujet ?",
      "L'inconscient peut-il servir d'excuse ?",
      "L'inconscient psychique est-il une hypothèse scientifique ?"
    ],
    auteurs: [
      { name: "Leibniz", oeuvre: "Nouveaux Essais sur l'entendement humain (1704)", these: "Bien avant Freud, il observe les « petites perceptions » : mille impressions trop faibles pour être remarquées (le bruit de chaque vague dans le grondement de la mer) agissent sur nous sans que nous en ayons conscience." },
      { name: "Freud", oeuvre: "Introduction à la psychanalyse (1917)", these: "Le psychisme comporte des représentations refoulées qui continuent d'agir : rêves, lapsus, actes manqués et symptômes en sont les manifestations déguisées. Le rêve est la « voie royale » vers l'inconscient ; la cure parlante vise à rendre au moi ce qui lui échappe." },
      { name: "Alain", oeuvre: "Éléments de philosophie (1941)", these: "L'inconscient freudien est une faute de méthode : on en fait « un autre moi » qui pense et veut à ma place. Il n'y a pas de pensées cachées, seulement le corps et ses mécanismes — et la pensée véritable est toujours consciente et volontaire." },
      { name: "Sartre", oeuvre: "L'Être et le Néant (1943)", these: "La censure freudienne est contradictoire : pour refouler, il faut savoir ce qu'on refoule — donc en être conscient. Ce que Freud appelle inconscient est en réalité mauvaise foi : une conscience qui se ment à elle-même pour fuir sa liberté." },
      { name: "Nietzsche", oeuvre: "Ainsi parlait Zarathoustra (1883)", these: "Derrière les pensées conscientes travaille une « grande raison » : le corps. La conscience n'est que la surface tardive d'un jeu de pulsions et de forces qui nous constitue — « il y a plus de raison dans ton corps que dans ta meilleure sagesse »." },
      { name: "Popper", oeuvre: "Conjectures et réfutations (1963)", these: "La psychanalyse explique tout — et c'est le problème : aucune observation ne peut la réfuter. Or une théorie qui n'est pas falsifiable n'est pas scientifique. L'inconscient serait une hypothèse féconde, mais pas une science." }
    ],
    citations: [
      { q: "Le moi n'est pas maître dans sa propre maison.", a: "Freud" },
      { q: "L'inconscient est le psychique lui-même et son essentielle réalité.", a: "Freud" },
      { q: "La psychanalyse est une méprise sur le corps.", a: "Alain (formule d'esprit)" }
    ],
    reperes: ["En fait / En droit", "Croire / Savoir", "Origine / Fondement"],
    sujets: [
      "L'inconscient est-il une excuse ?",
      "Sommes-nous responsables de ce que nous ignorons de nous-mêmes ?",
      "La conscience peut-elle tout connaître du sujet ?"
    ],
    cours: [
      { t: "1. De l'adjectif au substantif", d: "Dire qu'un geste est inconscient (fait sans attention) est banal ; affirmer qu'il existe en moi UN inconscient — un système de représentations refoulées qui pense, désire et agit à mon insu — est une thèse forte. C'est le pas que franchit Freud : les rêves, lapsus, actes manqués et symptômes ne sont pas des accidents mais des effets qui ont un sens. Avant lui, Leibniz (petites perceptions) et Nietzsche (le corps, les pulsions) avaient déjà fissuré l'équation cartésienne entre pensée et conscience." },
      { t: "2. Le dispositif freudien", d: "Première topique : inconscient / préconscient / conscient, séparés par la censure. Seconde topique : le ça (réservoir pulsionnel), le surmoi (interdits intériorisés) et le moi, qui négocie entre les deux et la réalité. Le refoulement rejette hors de la conscience les représentations inacceptables — qui font retour, déguisées : c'est le « retour du refoulé ». La cure psychanalytique parie qu'en parlant librement, le sujet peut réintégrer ce qui le gouverne à son insu : « là où était le ça, le moi doit advenir »." },
      { t: "3. Le débat : science ? excuse ?", d: "Trois attaques classiques. Alain : l'inconscient est une faute de méthode — on fabrique « un autre moi » commode ; il n'y a que le corps et ses mécanismes. Sartre : la censure doit savoir ce qu'elle censure, donc elle est consciente — l'inconscient est une mauvaise foi qui se fuit. Popper : la psychanalyse explique tout, donc n'interdit rien, donc n'est pas réfutable — pas une science. Réponse possible : même contestée comme science, l'hypothèse a changé la connaissance de soi — le sujet n'est plus transparent, il doit s'interpréter. Et elle n'excuse rien : elle déplace la responsabilité vers le travail qu'on fait (ou pas) sur soi." }
    ],
    vocab: [
      { m: "Refoulement", d: "Mécanisme qui rejette hors de la conscience les représentations inacceptables." },
      { m: "Ça / Moi / Surmoi", d: "Les trois instances de la seconde topique : pulsions, instance médiatrice, interdits intériorisés." },
      { m: "Acte manqué", d: "Acte raté en apparence (oubli, lapsus, maladresse) qui réalise un désir inavoué." },
      { m: "Censure", d: "Instance qui filtre ce qui peut accéder à la conscience et déguise le reste." },
      { m: "Déterminisme psychique", d: "Principe freudien selon lequel rien n'est gratuit dans la vie psychique : tout a un sens et une cause." }
    ],
    piege: "Trois « inconscients » à ne pas confondre : l'inconscience (état : être évanoui, étourdi), l'inconscient physiologique (la digestion, les réflexes) et l'inconscient psychique freudien (des représentations refoulées qui font sens). Seul le troisième fait débat philosophique."
  },

  {
    id: "justice",
    title: "La justice",
    tag: "Philosophie politique & morale",
    etym: "Latin justitia, dérivé de jus : « le droit ». Dans le mot même, la justice est liée au droit — mais l'écart entre les deux (une loi peut être injuste) fait tout le problème de la notion.",
    intro: "La justice désigne à la fois une institution (tribunaux, lois, juges) et une exigence morale (l'idée du juste). Les deux peuvent entrer en conflit : une loi peut être injuste, un acte illégal peut être juste. Que faire quand le droit et le juste divergent ?",
    problematiques: [
      "La justice se réduit-elle à l'application des lois ?",
      "Peut-on désobéir à une loi injuste ?",
      "L'égalité est-elle toujours juste ?"
    ],
    auteurs: [
      { name: "Aristote", oeuvre: "Éthique à Nicomaque, livre V", these: "Deux justices : commutative (égalité arithmétique dans les échanges — rendre l'équivalent) et distributive (égalité proportionnelle au mérite ou aux besoins). Et quand la loi, générale, bute sur un cas particulier, l'équité la corrige : elle est « la justice du cas singulier »." },
      { name: "Platon", oeuvre: "République, livre II (anneau de Gygès)", these: "Glaucon défie Socrate : avec un anneau d'invisibilité, le juste agirait comme l'injuste — on ne serait juste que par crainte du châtiment. Toute la République répond : la justice vaut pour elle-même, comme harmonie de l'âme, et l'injuste est d'abord malheureux." },
      { name: "Pascal", oeuvre: "Pensées (1670)", these: "« Vérité en deçà des Pyrénées, erreur au-delà » : la justice positive varie selon les pays et les siècles — elle repose sur la coutume, non sur une essence. Et comme on n'a pas pu rendre fort ce qui est juste, « on a fait que ce qui est fort fût juste »." },
      { name: "Rousseau", oeuvre: "Du contrat social (1762)", these: "La loi juste émane de la volonté générale : chacun, en se prononçant sur l'intérêt commun, est à la fois auteur et sujet de la loi. La justice n'est ni naturelle ni divine : elle naît de la convention qui fonde l'égalité des citoyens." },
      { name: "Rawls", oeuvre: "Théorie de la justice (1971)", these: "Imaginons choisir les règles de la société sous un « voile d'ignorance » : sans savoir si nous serons riches ou pauvres, doués ou non. Nous choisirions l'égalité des libertés, et n'accepterions d'inégalités que si elles profitent aux plus défavorisés." },
      { name: "Thoreau", oeuvre: "La Désobéissance civile (1849)", these: "Face à une loi gravement injuste (l'esclavage, en son temps), la conscience prime : refuser publiquement et pacifiquement d'obéir, et en assumer la sanction, c'est en appeler du droit réel au droit idéal. Gandhi et Martin Luther King s'en souviendront." }
    ],
    citations: [
      { q: "Vérité en deçà des Pyrénées, erreur au-delà.", a: "Pascal" },
      { q: "Ne pouvant faire que ce qui est juste fût fort, on a fait que ce qui est fort fût juste.", a: "Pascal" },
      { q: "L'équité est la justice du cas particulier.", a: "d'après Aristote" }
    ],
    reperes: ["Légal / Légitime", "En fait / En droit", "Universel / Général / Particulier / Singulier"],
    sujets: [
      "Suffit-il d'obéir aux lois pour être juste ?",
      "Peut-on être juste sans être équitable ?",
      "Se venger, est-ce se faire justice ?"
    ],
    cours: [
      { t: "1. Un mot, deux réalités", d: "La justice désigne une institution (lois, tribunaux, juges : le droit positif) et une valeur (l'idée du juste, le droit idéal ou naturel). Tant que les deux coïncident, pas de problème philosophique. Mais une loi peut être injuste (lois esclavagistes, lois de Vichy) et un acte illégal peut être juste : c'est l'écart entre légalité et légitimité qui ouvre toute la réflexion. Sans idée du juste au-dessus des lois, impossible de critiquer une loi ; mais qui définit ce juste idéal, et au nom de quoi ?" },
      { t: "2. La justice comme égalité — mais laquelle ?", d: "Aristote distingue l'égalité arithmétique (à chacun la même chose : les échanges, la réparation) et l'égalité proportionnelle (à chacun selon son mérite, ses besoins, sa contribution : la distribution). Toute la question de la justice sociale tient dans le choix du critère de proportion. Rawls propose un test : choisissez les règles sous un voile d'ignorance, sans savoir quelle place vous occuperez — vous protégerez alors les plus faibles. Et comme la loi est générale, l'équité doit la plier au cas particulier : appliquer mécaniquement la règle peut être la pire injustice." },
      { t: "3. Obéir, désobéir, punir", d: "Pourquoi obéir à la loi ? Parce qu'elle vaut mieux que la loi du plus fort, et qu'en démocratie j'en suis le coauteur (Rousseau). Mais quand la loi viole gravement le juste, la désobéissance civile devient défendable — à conditions strictes : publique, non violente, en appel à des principes supérieurs, en assumant la sanction (Thoreau, Gandhi, Martin Luther King). Quant à la punition, elle n'est pas la vengeance : un tiers impartial, une règle préalable, une proportion — et un but qui dépasse la souffrance : dissuader, réparer, réinsérer." }
    ],
    vocab: [
      { m: "Droit positif", d: "Ensemble des règles juridiques effectivement en vigueur dans un État donné." },
      { m: "Droit naturel", d: "Normes idéales que l'on suppose fondées sur la nature de l'homme, au-dessus des lois écrites." },
      { m: "Équité", d: "Ajustement de la règle générale au cas particulier." },
      { m: "Justice distributive", d: "Répartition des biens, des honneurs et des charges selon une proportion (mérite, besoins…)." },
      { m: "Désobéissance civile", d: "Refus public, non violent et assumé d'une loi jugée gravement injuste." }
    ],
    piege: "Vengeance ≠ punition. La vengeance est privée, passionnelle, sans mesure ni tiers ; la punition est publique, proportionnée, prononcée par un tiers impartial selon une règle. L'institution judiciaire naît précisément pour arracher la justice au cycle de la vengeance."
  },

  {
    id: "langage",
    title: "Le langage",
    tag: "La culture",
    etym: "Latin lingua : la langue (l'organe et l'idiome). Les Grecs disaient logos — qui signifie à la fois parole ET raison : pour eux, parler et penser sont indissociables.",
    intro: "Le langage semble n'être qu'un outil pour transmettre ce que je pense. Mais y a-t-il une pensée sans mots ? Et les mots disent-ils vraiment les choses — ou les remplacent-ils ? Entre le cri animal et la parole humaine, la différence est-elle de degré ou de nature ?",
    problematiques: [
      "Le langage est-il le propre de l'homme ?",
      "Les mots trahissent-ils la pensée ?",
      "Parler, est-ce seulement communiquer ?"
    ],
    auteurs: [
      { name: "Aristote", oeuvre: "Les Politiques", these: "Si l'homme est un animal politique, c'est qu'il est le seul à posséder le logos : non le simple cri qui exprime plaisir et douleur, mais la parole qui délibère sur l'utile et le juste. Le langage est le ciment de la cité." },
      { name: "Descartes", oeuvre: "Discours de la méthode, Ve partie (1637)", these: "Les animaux peuvent émettre des signes, jamais « arranger ensemble diverses paroles » pour répondre au sens de ce qu'on leur dit. Cette créativité du langage — produire des phrases neuves et à propos — prouve la pensée, dont les machines et les bêtes sont dépourvues." },
      { name: "Saussure", oeuvre: "Cours de linguistique générale (1916)", these: "Le signe unit un signifiant (l'image sonore) et un signifié (le concept), et leur lien est arbitraire : rien dans le son « arbre » ne ressemble à un arbre. Chaque langue découpe le réel à sa façon — parler n'est jamais simplement étiqueter." },
      { name: "Bergson", oeuvre: "Le Rire (1900)", these: "Les mots sont des généralités forgées pour l'action : ils recouvrent la singularité des choses et de nos états d'âme d'une « étiquette » commode. Le langage nous fait vivre dans une zone moyenne du réel — d'où le recours de l'artiste à ce qu'il y a sous les mots." },
      { name: "Hegel", oeuvre: "Encyclopédie des sciences philosophiques (1817)", these: "C'est dans les mots que nous pensons : vouloir une pensée trop profonde pour être dite, c'est confondre profondeur et confusion. L'ineffable n'est pas un trésor, c'est une pensée encore obscure — le langage ne trahit pas la pensée, il l'accomplit." },
      { name: "Austin", oeuvre: "Quand dire, c'est faire (1962)", these: "Certains énoncés ne décrivent rien : ils font ce qu'ils disent. « Je vous déclare unis par le mariage », « je promets », « la séance est ouverte » — ce sont des performatifs. Parler n'est pas seulement transmettre de l'information, c'est agir." }
    ],
    citations: [
      { q: "Les limites de mon langage signifient les limites de mon propre monde.", a: "Wittgenstein" },
      { q: "C'est dans les mots que nous pensons.", a: "Hegel" },
      { q: "Ce qui se conçoit bien s'énonce clairement, et les mots pour le dire arrivent aisément.", a: "Boileau" }
    ],
    reperes: ["Intuitif / Discursif", "Persuader / Convaincre", "Abstrait / Concret"],
    sujets: [
      "Le langage sert-il seulement à communiquer ?",
      "Peut-on tout dire ?",
      "Les mots nous éloignent-ils des choses ?"
    ],
    cours: [
      { t: "1. Langage, langue, parole", d: "Saussure distingue le langage (la faculté humaine universelle de symboliser), la langue (un système de signes propre à une communauté : le français, le swahili) et la parole (l'acte individuel). Le signe unit un signifiant (sons, lettres) et un signifié (concept), et ce lien est arbitraire : rien ne ressemble à un arbre dans le mot « arbre » — preuve : chaque langue dit autre chose. Conséquence énorme : chaque langue découpe le monde à sa manière ; parler n'est pas coller des étiquettes sur des choses déjà classées." },
      { t: "2. Le propre de l'homme ?", d: "Les animaux communiquent : la danse des abeilles transmet une direction et une distance. Mais c'est un code fixe : pas de dialogue, pas de réponse, pas de message sur le message (Benveniste). Le langage humain, lui, est créatif : avec un stock fini de mots, nous produisons des phrases neuves et adaptées — ce que Descartes tenait déjà pour la preuve de la pensée, et que ni la bête ni la machine de son temps ne savaient faire. La différence n'est pas de degré mais de nature : signal d'un côté, signe de l'autre." },
      { t: "3. Pouvoirs et limites des mots", d: "Le langage ne se contente pas de décrire : il agit. « Je le jure », « la séance est ouverte » — dire, c'est faire (Austin). Il peut aussi manipuler : la rhétorique persuade sans prouver, l'euphémisme maquille (« plan social » pour licenciements), nommer c'est déjà classer. Limite inverse : les mots généralisent, et le singulier leur échappe — ce que je ressens exactement, aucun mot commun ne le dit (Bergson). Réponse de Hegel : l'ineffable n'est pas un trésor trop profond, c'est une pensée encore confuse ; c'est en cherchant le mot que la pensée se précise." }
    ],
    vocab: [
      { m: "Signe linguistique", d: "Union conventionnelle et arbitraire d'un signifiant (forme sonore) et d'un signifié (concept)." },
      { m: "Signal", d: "Stimulus qui déclenche un comportement fixe, sans dialogue possible." },
      { m: "Performatif", d: "Énoncé qui accomplit l'acte qu'il énonce (« je promets », « je vous déclare mariés »)." },
      { m: "Polysémie", d: "Propriété d'un mot qui possède plusieurs sens selon le contexte." },
      { m: "Ineffable", d: "Ce qui se ressent mais ne se laisserait pas exprimer par les mots." }
    ],
    piege: "Communication animale ≠ langage. Les abeilles de von Frisch transmettent une information (direction, distance du nectar), mais leur danse est un code fixe : pas de dialogue, pas de réponse, pas de message sur le message. Benveniste y voit un signal, non un signe — différence de nature, pas de degré."
  },

  {
    id: "liberte",
    title: "La liberté",
    tag: "Métaphysique & morale",
    etym: "Latin liber : l'homme libre, par opposition à l'esclave (servus). À l'origine, la liberté est un statut social avant d'être une faculté intérieure — les deux sens traversent toute la notion.",
    intro: "Rien ne nous semble plus évident que notre liberté : je sens que je choisis. Mais ce sentiment prouve-t-il quoi que ce soit ? Le déterminisme — des causes psychologiques, sociales, neuronales — pourrait bien agir dans mon dos. Et si être libre, c'était autre chose que faire ce que l'on veut ?",
    problematiques: [
      "Le libre arbitre est-il une illusion ?",
      "La liberté consiste-t-elle à faire tout ce que l'on veut ?",
      "Les lois sont-elles l'obstacle ou la condition de la liberté ?"
    ],
    auteurs: [
      { name: "Descartes", oeuvre: "Méditations métaphysiques (1641)", these: "Le libre arbitre est si évident qu'il se connaît sans preuve : c'est en nous la chose la plus parfaite, presque infinie. Mais la liberté d'indifférence (choisir sans raison) en est le plus bas degré — la vraie liberté est éclairée par la connaissance." },
      { name: "Spinoza", oeuvre: "Éthique (1677)", these: "« Les hommes se croient libres parce qu'ils sont conscients de leurs actions et ignorants des causes qui les déterminent. » Une pierre qui roule, si elle pensait, se croirait libre de rouler. La vraie liberté n'est pas le libre arbitre : c'est comprendre la nécessité et agir selon sa propre nature." },
      { name: "Kant", oeuvre: "Critique de la raison pratique (1788)", these: "La liberté ne peut être prouvée théoriquement — mais la morale l'exige : si je dois, je peux. L'homme phénoménal est déterminé comme tout objet de la nature ; comme noumène, il est libre. Être libre, c'est l'autonomie : obéir à la loi que la raison se donne." },
      { name: "Rousseau", oeuvre: "Du contrat social (1762)", these: "« L'impulsion du seul appétit est esclavage, et l'obéissance à la loi qu'on s'est prescrite est liberté. » Suivre ses désirs, c'est être leur jouet ; la liberté civile et morale naît quand le citoyen obéit à une règle dont il est l'auteur." },
      { name: "Sartre", oeuvre: "L'existentialisme est un humanisme (1946)", these: "L'existence précède l'essence : aucun Dieu, aucune nature ne définit l'homme à l'avance. Nous sommes « condamnés à être libres » — même ne pas choisir est un choix — et entièrement responsables. Les excuses (le tempérament, les circonstances) relèvent de la mauvaise foi." },
      { name: "Épictète", oeuvre: "Manuel", these: "La liberté est intérieure : nul ne peut m'ôter mes jugements. Esclave devenu philosophe, il était plus libre que ses maîtres — vouloir ce qui dépend de nous et accepter le reste, c'est être invincible." }
    ],
    citations: [
      { q: "L'homme est condamné à être libre.", a: "Sartre" },
      { q: "Les hommes se croient libres parce qu'ils sont conscients de leurs actions et ignorants des causes qui les déterminent.", a: "Spinoza" },
      { q: "L'obéissance à la loi qu'on s'est prescrite est liberté.", a: "Rousseau" }
    ],
    reperes: ["Obligation / Contrainte", "Contingent / Nécessaire", "Légal / Légitime"],
    sujets: [
      "Sommes-nous aussi libres que nous le croyons ?",
      "La liberté est-elle absence de contraintes ?",
      "Peut-on apprendre à être libre ?"
    ],
    cours: [
      { t: "1. Trois niveaux de liberté", d: "Liberté d'action : faire ce que je veux, sans obstacle extérieur (le prisonnier en est privé). Libre arbitre : pouvoir choisir ma volonté elle-même — j'aurais pu vouloir autrement. Autonomie : me donner ma propre loi, au lieu de subir mes impulsions. Les confondre ruine les sujets : un drogué a la liberté d'action (personne ne le force) sans être libre ; un citoyen soumis à la loi commune perd en licence ce qu'il gagne en liberté civile. Liberté n'est pas absence de règle." },
      { t: "2. Le défi du déterminisme", d: "Tout phénomène a des causes — pourquoi mes choix feraient-ils exception ? Spinoza : le sentiment de liberté n'est que l'ignorance des causes qui nous poussent. Les réponses divergent : Descartes oppose l'évidence intérieure du libre arbitre ; Kant distingue l'homme-phénomène (déterminé) et l'homme-noumène (libre), la morale exigeant la liberté ; Sartre déplace le problème — même déterminée par sa situation, la conscience choisit le sens qu'elle lui donne ; Bergson réserve l'acte libre aux moments rares où le moi profond tout entier s'exprime, contre les automatismes du moi superficiel." },
      { t: "3. La liberté se conquiert", d: "Sortie du débat métaphysique : la liberté n'est pas un acquis mais un devenir. On se libère par la connaissance (comprendre ses déterminismes, c'est déjà leur échapper en partie — Spinoza), par l'éducation, par la maîtrise des désirs (stoïciens), et politiquement par la loi commune : obéir à la règle qu'on s'est prescrite, c'est la liberté du citoyen (Rousseau). La servitude volontaire (La Boétie) rappelle l'envers : on peut tenir à ses chaînes. La liberté est moins un état qu'une tâche." }
    ],
    vocab: [
      { m: "Libre arbitre", d: "Pouvoir de se déterminer soi-même, sans y être contraint par aucune cause." },
      { m: "Déterminisme", d: "Thèse selon laquelle tout phénomène résulte nécessairement de causes antérieures." },
      { m: "Fatalisme", d: "Croyance que ce qui doit arriver arrivera quoi qu'on fasse — à ne pas confondre avec le déterminisme." },
      { m: "Autonomie", d: "Fait d'obéir à la loi que l'on s'est soi-même donnée." },
      { m: "Liberté d'indifférence", d: "Choix effectué sans aucune raison de préférer un parti à l'autre — plus bas degré de la liberté selon Descartes." }
    ],
    piege: "Réduire la liberté à l'absence de contraintes (liberté « négative »). Pour Rousseau ou Kant, c'est un contresens : la règle n'est pas l'ennemie de la liberté mais sa condition — sans loi commune, c'est la loi du plus fort, donc la servitude de tous."
  },

  {
    id: "nature",
    title: "La nature",
    tag: "La culture & le monde",
    etym: "Latin natura, du verbe nasci : « naître ». La nature est ce qui naît et croît de soi-même. Le grec phusis (de phuein, pousser) dit la même chose : ce qui se développe sans intervention humaine.",
    intro: "La nature, c'est à la fois ce qui nous entoure (forêts, climat, vivant), ce qui existe sans l'homme, et l'essence d'une chose (« la nature humaine »). L'homme, être de culture, est-il encore un être naturel ? Et la nature est-elle un modèle à suivre, une matière à dominer, ou un équilibre à protéger ?",
    problematiques: [
      "L'homme peut-il sortir de la nature ?",
      "La nature est-elle un modèle moral ?",
      "Faut-il être le « maître et possesseur » de la nature ?"
    ],
    auteurs: [
      { name: "Aristote", oeuvre: "Physique, livre II", these: "Les êtres naturels ont en eux-mêmes leur principe de mouvement et de repos — le gland devient chêne de lui-même —, contrairement aux artefacts, qui tiennent leur forme d'un artisan. La nature est ordonnée par des fins : chaque être tend vers son accomplissement." },
      { name: "Descartes", oeuvre: "Discours de la méthode, VIe partie (1637)", these: "La nature n'est pas un cosmos sacré mais une machine : étendue et mouvement, sans mystère ni finalité. La connaître par la science permet de « nous rendre comme maîtres et possesseurs de la nature » — projet fondateur de la modernité technique." },
      { name: "Rousseau", oeuvre: "Discours sur l'origine de l'inégalité (1755)", these: "L'état de nature est une fiction méthodique : l'homme naturel, mû par l'amour de soi et la pitié, est bon — c'est la société qui le corrompt. Mais l'homme se distingue par sa perfectibilité : rien en lui n'est fixé, pour le meilleur et pour le pire." },
      { name: "Lévi-Strauss", oeuvre: "Les Structures élémentaires de la parenté (1949)", these: "Où finit la nature, où commence la culture ? Critère : ce qui est universel relève de la nature, ce qui obéit à une règle variable relève de la culture. La prohibition de l'inceste, universelle ET réglée, est la charnière paradoxale entre les deux." },
      { name: "Mill", oeuvre: "La Nature (1874)", these: "« Suivre la nature » est un mauvais guide moral : la nature noie, brûle, empoisonne avec une parfaite indifférence. Toute civilisation est victoire sur la nature, et la morale consiste précisément à ne pas l'imiter." },
      { name: "Hans Jonas", oeuvre: "Le Principe responsabilité (1979)", these: "La puissance technique moderne menace pour la première fois la biosphère et les générations futures : il faut un nouvel impératif — « agis de façon que les effets de ton action soient compatibles avec la permanence d'une vie authentiquement humaine sur terre »." }
    ],
    citations: [
      { q: "Nous rendre comme maîtres et possesseurs de la nature.", a: "Descartes" },
      { q: "La coutume est une seconde nature qui détruit la première.", a: "Pascal" },
      { q: "Tout est bien sortant des mains de l'Auteur des choses, tout dégénère entre les mains de l'homme.", a: "Rousseau" }
    ],
    reperes: ["Essentiel / Accidentel", "Universel / Général / Particulier / Singulier", "Origine / Fondement"],
    sujets: [
      "Y a-t-il une nature humaine ?",
      "La nature est-elle bonne ?",
      "L'homme est-il un être à part dans la nature ?"
    ],
    cours: [
      { t: "1. Démêler les sens du mot", d: "« Nature » désigne : l'ensemble de ce qui existe sans l'homme (forêts, climat, vivant) ; l'essence d'une chose (la « nature humaine ») ; le spontané par opposition à l'acquis (naturel vs culturel, artificiel). L'homme brouille toutes ces frontières : être naturel (un corps, des besoins), il ne survit que par la culture — langue, techniques, règles. Sa « nature » est peut-être de ne pas en avoir de fixe : c'est la perfectibilité de Rousseau, capacité indéfinie de se transformer, pour le meilleur et pour le pire." },
      { t: "2. Du cosmos à la machine", d: "Les Anciens voyaient la nature comme un ordre finalisé (chaque être tend vers sa fin — Aristote) qu'il s'agissait de contempler et d'imiter. La science moderne change tout : la nature devient une machine régie par des lois mathématiques, sans intention ni mystère — et donc exploitable. Le projet cartésien (s'en rendre « comme maître et possesseur ») fonde trois siècles de technique. Bacon ajoute la condition : « on ne commande à la nature qu'en lui obéissant » — la dominer suppose de connaître ses lois, pas de les ignorer." },
      { t: "3. La nature, norme ou responsabilité ?", d: "Faut-il « suivre la nature » ? Mill objecte que la nature noie, brûle et tue avec indifférence : toute civilisation est victoire sur elle, et tirer une morale de ce qui est, c'est le sophisme naturaliste (du fait au droit). Attention donc aux usages idéologiques du mot (« contre nature »). Mais la crise écologique renverse la perspective : la nature, jadis menaçante, est devenue vulnérable. Jonas propose un nouvel impératif — agir de sorte qu'une vie authentiquement humaine reste possible sur terre : non pas obéir à la nature, mais en répondre." }
    ],
    vocab: [
      { m: "Essence", d: "Ce qui fait qu'une chose est ce qu'elle est, ses caractères constitutifs." },
      { m: "Perfectibilité", d: "Capacité indéfinie de l'homme à se transformer et à progresser (ou régresser)." },
      { m: "Finalisme", d: "Explication des êtres et des phénomènes par les fins qu'ils poursuivraient." },
      { m: "Mécanisme", d: "Explication de la nature par les seules causes matérielles et lois du mouvement." },
      { m: "Sophisme naturaliste", d: "Erreur consistant à déduire ce qui doit être de ce qui est." }
    ],
    piege: "Le mot « nature » a (au moins) deux sens qu'un bon devoir distingue d'emblée : la nature-monde (l'ensemble des phénomènes physiques et vivants) et la nature-essence (ce qui définit une chose). « La nature humaine » ne parle pas d'écologie."
  },

  {
    id: "raison",
    title: "La raison",
    tag: "La connaissance",
    etym: "Latin ratio : le calcul, le compte (d'où « rationnel »). Traduit le grec logos, qui est aussi la parole : la raison compte, ordonne, et rend compte — donner ses raisons, c'est les dire.",
    intro: "La raison est la faculté de lier, calculer, juger, donner des raisons. Elle fonde la science, la morale, le droit — bref, ce que l'humanité a de plus fier. Mais peut-elle tout connaître ? Doit-elle tout gouverner ? Et que faire de ce qui lui résiste : les passions, la croyance, l'intuition ?",
    problematiques: [
      "La raison peut-elle tout expliquer ?",
      "La raison est-elle la même chez tous les hommes ?",
      "Être rationnel, est-ce être raisonnable ?"
    ],
    auteurs: [
      { name: "Descartes", oeuvre: "Discours de la méthode (1637)", these: "« Le bon sens est la chose du monde la mieux partagée » : tous les hommes ont la même raison, et l'erreur vient de son mauvais usage. D'où la méthode — évidence, analyse, ordre, dénombrement — pour conduire ses pensées." },
      { name: "Pascal", oeuvre: "Pensées (1670)", these: "« Deux excès : exclure la raison, n'admettre que la raison. » La raison a ses limites : les premiers principes se sentent, ils ne se prouvent pas — « le cœur a ses raisons que la raison ne connaît point ». La dernière démarche de la raison est de reconnaître qu'une infinité de choses la dépassent." },
      { name: "Hume", oeuvre: "Traité de la nature humaine (1739)", these: "« La raison est, et ne doit qu'être, l'esclave des passions » : elle calcule les moyens, mais ne fixe jamais les fins — aucun raisonnement ne fait désirer. Même la causalité n'est pas rationnelle : c'est une habitude née de la répétition." },
      { name: "Kant", oeuvre: "Critique de la raison pure (1781)", these: "La raison doit faire son propre tribunal : elle connaît légitimement les phénomènes (ce qui apparaît dans l'espace et le temps), mais s'égare quand elle prétend atteindre l'âme, le monde en soi ou Dieu. Critiquer la raison, c'est la sauver de ses illusions." },
      { name: "Bachelard", oeuvre: "La Formation de l'esprit scientifique (1938)", these: "La raison scientifique ne part pas de zéro : elle se construit contre les évidences premières, les images, l'opinion — autant d'« obstacles épistémologiques ». L'esprit scientifique est une conquête polémique, jamais un don." },
      { name: "Lévi-Strauss", oeuvre: "La Pensée sauvage (1962)", these: "La « pensée sauvage » des sociétés sans écriture n'est pas pré-rationnelle : c'est une logique du concret, classificatrice et rigoureuse. La raison n'est pas le privilège de l'Occident moderne." }
    ],
    citations: [
      { q: "Le bon sens est la chose du monde la mieux partagée.", a: "Descartes" },
      { q: "Le cœur a ses raisons que la raison ne connaît point.", a: "Pascal" },
      { q: "La raison est, et ne doit qu'être, l'esclave des passions.", a: "Hume" }
    ],
    reperes: ["Intuitif / Discursif", "Croire / Savoir", "Vrai / Probable / Certain"],
    sujets: [
      "La raison peut-elle tout comprendre ?",
      "Faut-il toujours être rationnel ?",
      "La passion est-elle l'ennemie de la raison ?"
    ],
    cours: [
      { t: "1. Ce qu'on appelle raison", d: "La raison est la faculté de lier, calculer, juger — de donner et demander des raisons. Elle s'appuie sur des principes : identité, non-contradiction (une chose ne peut être et ne pas être en même temps sous le même rapport), raison suffisante (rien n'est sans raison). Distinguer d'emblée rationnel (conforme à la logique et au calcul — un plan de cambriolage peut l'être) et raisonnable (conforme à la sagesse pratique et à la mesure). Tout l'enjeu de la notion circule entre ces deux pôles." },
      { t: "2. Ses pouvoirs", d: "La raison fonde la science (expliquer par des causes, démontrer), la morale universaliste (Kant : une maxime vaut si tous peuvent la vouloir) et la critique : elle examine opinions, préjugés et superstitions au lieu de les recevoir. Descartes la dit également partagée entre tous les hommes — l'erreur ne vient pas d'un manque de raison mais de son mauvais usage, d'où la nécessité d'une méthode. Conséquence politique : si tous sont doués de raison, tous peuvent discuter, juger, voter — la raison est démocratique en droit." },
      { t: "3. Ses limites", d: "Pascal : les premiers principes se sentent et ne se prouvent pas — la dernière démarche de la raison est de reconnaître ce qui la dépasse. Hume : la raison calcule les moyens mais ne fixe aucune fin ; sans désir, elle ne fait rien vouloir. Kant : elle s'égare dès qu'elle quitte l'expérience possible (l'âme, le monde en soi, Dieu). Et l'ethnologie (Lévi-Strauss) rappelle qu'il n'y a pas UNE rationalité occidentale : la « pensée sauvage » classe et raisonne autrement, mais rigoureusement. La raison qui s'absolutise — le scientisme — devient elle-même une croyance non critique." }
    ],
    vocab: [
      { m: "Rationnel", d: "Conforme à la logique, au calcul, à la cohérence." },
      { m: "Raisonnable", d: "Conforme à la sagesse pratique, au sens de la mesure et de l'à-propos." },
      { m: "Principe de non-contradiction", d: "Une chose ne peut pas être et ne pas être en même temps sous le même rapport." },
      { m: "Scientisme", d: "Croyance selon laquelle la science peut tout connaître et résoudre tous les problèmes." },
      { m: "Entendement", d: "Faculté de former des concepts et de juger, distinguée de la sensibilité." }
    ],
    piege: "Rationnel ≠ raisonnable. Est rationnel ce qui est conforme à la logique et au calcul (un plan criminel peut l'être) ; est raisonnable ce qui est conforme à la sagesse pratique et à la mesure. L'écart entre les deux fait des sujets entiers."
  },

  {
    id: "religion",
    title: "La religion",
    tag: "La culture",
    etym: "Deux étymologies latines en débat : religare, « relier » (les hommes entre eux, l'homme au divin) ou relegere, « recueillir, observer avec scrupule » (les rites). Chacune éclaire une face de la notion.",
    intro: "Aucune société connue n'a vécu sans rites, sans sacré, sans récits sur l'invisible. D'où vient cette universalité ? Réponse à une angoisse, lien social, ouverture à la transcendance ? Et la critique moderne de la religion — illusion, opium, projection — l'a-t-elle réfutée ou seulement expliquée ?",
    problematiques: [
      "La religion est-elle contraire à la raison ?",
      "Croire en Dieu, est-ce une faiblesse ?",
      "Une société peut-elle se passer de religion ?"
    ],
    auteurs: [
      { name: "Pascal", oeuvre: "Pensées (1670)", these: "La foi n'est pas démonstration : « c'est le cœur qui sent Dieu, et non la raison ». Mais au libertin calculateur, il propose le pari : si Dieu existe, croire fait tout gagner ; s'il n'existe pas, on ne perd rien de comparable. Parier sur Dieu est rationnel." },
      { name: "Feuerbach", oeuvre: "L'Essence du christianisme (1841)", these: "Ce n'est pas Dieu qui a fait l'homme à son image, c'est l'homme qui projette dans un Dieu ses propres perfections (amour, sagesse, puissance) — et s'en appauvrit. La théologie est une anthropologie qui s'ignore." },
      { name: "Marx", oeuvre: "Critique de la philosophie du droit de Hegel (1843)", these: "La religion est « le soupir de la créature opprimée » et « l'opium du peuple » : consolation illusoire ET protestation contre la misère réelle. La critique de la religion doit donc devenir critique des conditions sociales qui la rendent nécessaire." },
      { name: "Nietzsche", oeuvre: "Le Gai Savoir (1882)", these: "« Dieu est mort » : la croyance au Dieu chrétien est devenue incroyable, et avec elle s'effondre tout l'édifice des valeurs. L'événement est vertigineux — le danger est le nihilisme, et la tâche : créer de nouvelles valeurs fidèles à la terre." },
      { name: "Freud", oeuvre: "L'Avenir d'une illusion (1927)", these: "La religion est une illusion : non pas forcément fausse, mais née d'un désir — celui d'être protégé comme un enfant par un père tout-puissant face à une nature cruelle. Elle est la « névrose obsessionnelle universelle de l'humanité »." },
      { name: "Durkheim", oeuvre: "Les Formes élémentaires de la vie religieuse (1912)", these: "La religion est un fait social : un système de croyances et de pratiques relatives au sacré, qui unit les fidèles en une communauté morale. À travers le sacré, c'est la société elle-même que le groupe vénère — d'où sa présence universelle." }
    ],
    citations: [
      { q: "La religion est l'opium du peuple.", a: "Marx" },
      { q: "C'est le cœur qui sent Dieu, et non la raison.", a: "Pascal" },
      { q: "Dieu est mort ! Et c'est nous qui l'avons tué !", a: "Nietzsche" }
    ],
    reperes: ["Croire / Savoir", "Transcendant / Immanent", "Origine / Fondement"],
    sujets: [
      "La croyance religieuse est-elle incompatible avec la raison ?",
      "L'homme a-t-il besoin de religion ?",
      "Expliquer la religion, est-ce la réfuter ?"
    ],
    cours: [
      { t: "1. Définir sans trancher", d: "Deux étymologies en débat : religare (relier — les hommes entre eux, l'homme au divin) et relegere (recueillir, observer scrupuleusement les rites). Une définition neutre tient en trois éléments : des croyances relatives au sacré, des rites qui les mettent en pratique, une communauté qu'elles rassemblent. Durkheim insiste : ce qui définit la religion, c'est la séparation du sacré et du profane — pas nécessairement un dieu (le bouddhisme ancien n'en a pas). La foi, elle, est une confiance qui excède les preuves : ni un savoir, ni automatiquement une déraison." },
      { t: "2. Les fonctions, les critiques", d: "Pourquoi toutes les sociétés connues ont-elles eu du religieux ? Réponses fonctionnelles : la religion fait le lien social (Durkheim), console face à la mort et au mal, donne un sens au monde. D'où les grandes critiques du XIXe : Dieu serait la projection des perfections humaines (Feuerbach), l'opium d'un peuple souffrant (Marx), une illusion née du désir de protection (Freud). Mais attention au sophisme génétique : expliquer l'origine psychologique ou sociale d'une croyance ne démontre pas qu'elle est fausse — la critique décrit le besoin, pas l'objet." },
      { t: "3. Foi, raison, cité", d: "Foi et raison peuvent s'exclure (fidéisme : croire sans raisons ; rationalisme antireligieux : ne rien croire sans preuve) ou s'articuler — Kant limite le savoir aux phénomènes, laissant la question de Dieu hors de portée de la science, en débat. Politiquement, la laïcité ne combat pas la religion : elle neutralise l'État pour garantir à chacun la liberté de croire ou non. Reste le diagnostic de Nietzsche : « Dieu est mort » — non un triomphe, mais une crise des valeurs où le religieux se survit sous d'autres formes (idoles, idéologies, sacralisations nouvelles)." }
    ],
    vocab: [
      { m: "Sacré", d: "Ce qui est séparé du commun, inviolable, objet d'un respect absolu." },
      { m: "Profane", d: "Le domaine ordinaire de l'existence, par opposition au sacré." },
      { m: "Foi", d: "Adhésion confiante qui ne se réduit pas aux preuves dont on dispose." },
      { m: "Agnosticisme", d: "Position qui suspend le jugement sur l'existence de Dieu, jugée indécidable." },
      { m: "Laïcité", d: "Neutralité religieuse de l'État, garantissant la liberté de conscience et de culte." }
    ],
    piege: "Croire et savoir ne s'opposent pas terme à terme : il y a des croyances rationnelles (j'ai de bonnes raisons sans preuve) et la science elle-même repose sur des principes non démontrés. Et attention : expliquer l'origine psychologique ou sociale d'une croyance ne prouve pas qu'elle soit fausse (ce serait le « sophisme génétique »)."
  },

  {
    id: "science",
    title: "La science",
    tag: "La connaissance",
    etym: "Latin scientia, du verbe scire : « savoir ». La science est LE savoir par excellence — distingué de l'opinion, de la croyance et du savoir-faire. Reste à définir ce qui mérite ce titre.",
    intro: "La science passe pour le modèle du savoir : preuves, expériences, prédictions. Pourtant ses vérités sont révisables — Newton corrigé par Einstein —, et sa méthode pose question : comment fonder des lois universelles sur des observations toujours particulières ?",
    problematiques: [
      "L'expérience suffit-elle à fonder la science ?",
      "Qu'est-ce qui distingue une science d'une pseudo-science ?",
      "La science nous livre-t-elle le réel tel qu'il est ?"
    ],
    auteurs: [
      { name: "Hume", oeuvre: "Enquête sur l'entendement humain (1748)", these: "Le problème de l'induction : aucune accumulation de cas observés ne prouve une loi universelle — que le soleil se soit toujours levé ne démontre pas qu'il se lèvera demain. La nécessité causale n'est pas observée : elle est crue, par habitude." },
      { name: "Kant", oeuvre: "Critique de la raison pure (1781)", these: "La connaissance naît de deux sources : la sensibilité, qui donne les objets, et l'entendement, qui les pense. L'esprit n'est pas un miroir : il structure l'expérience (espace, temps, causalité) — nous connaissons les phénomènes, jamais les choses en soi." },
      { name: "Claude Bernard", oeuvre: "Introduction à l'étude de la médecine expérimentale (1865)", these: "La méthode expérimentale est un dialogue réglé : « le fait suggère l'idée, l'idée dirige l'expérience, l'expérience juge l'idée ». Le savant doit avoir une hypothèse — mais être prêt à l'abandonner devant le verdict des faits." },
      { name: "Bachelard", oeuvre: "La Formation de l'esprit scientifique (1938)", these: "« Rien n'est donné, tout est construit » : le fait scientifique n'est pas cueilli mais conquis contre les évidences sensibles et l'opinion. La science progresse par ruptures — l'histoire des sciences est celle de ses erreurs rectifiées." },
      { name: "Popper", oeuvre: "La Logique de la découverte scientifique (1934)", these: "Critère de démarcation : une théorie est scientifique si elle est falsifiable — si elle interdit quelque chose et peut donc être réfutée par l'expérience. La psychanalyse ou l'astrologie, qui expliquent tout, ne risquent rien : ce ne sont pas des sciences. Une théorie n'est jamais vérifiée, seulement corroborée." },
      { name: "Kuhn", oeuvre: "La Structure des révolutions scientifiques (1962)", these: "La science normale travaille dans un paradigme (cadre admis de concepts et méthodes) jusqu'à ce que les anomalies s'accumulent : alors survient une révolution scientifique qui change la grille de lecture du monde — de Ptolémée à Copernic, de Newton à Einstein." }
    ],
    citations: [
      { q: "Le fait suggère l'idée, l'idée dirige l'expérience, l'expérience juge l'idée.", a: "Claude Bernard" },
      { q: "Rien n'est donné, tout est construit.", a: "Bachelard" },
      { q: "La science ne pense pas.", a: "Heidegger (à manier avec précaution !)" }
    ],
    reperes: ["Théorie / Pratique", "Hypothèse / Conséquence / Conclusion", "Vrai / Probable / Certain", "Expliquer / Comprendre"],
    sujets: [
      "Une théorie scientifique peut-elle être définitive ?",
      "La science se limite-t-elle à constater les faits ?",
      "Peut-on tout connaître scientifiquement ?"
    ],
    cours: [
      { t: "1. Du fait à la loi : le problème de la méthode", d: "La science vise des lois universelles — mais elle n'observe jamais que des cas particuliers. Passer des uns aux autres, c'est l'induction, et Hume a montré sa fragilité : mille confirmations ne prouvent pas la millième-et-unième. De plus, l'observation n'est jamais « pure » : on observe avec une question, des instruments, une théorie en tête. D'où la méthode expérimentale (Claude Bernard) : un fait suggère une hypothèse, l'hypothèse dicte une expérience, l'expérience tranche. La science est un dialogue réglé entre la raison qui propose et le réel qui dispose." },
      { t: "2. Qu'est-ce qui est scientifique ?", d: "Popper donne le critère : une théorie est scientifique si elle est réfutable — si elle interdit des résultats possibles et accepte le risque d'être contredite. « Tous les corbeaux sont noirs » est scientifique : un corbeau blanc la tuerait. L'astrologie, qui explique tout après coup, ne risque rien : pseudo-science. Bachelard complète côté histoire : le fait scientifique est construit contre les évidences premières (le soleil « se lève ») — la science progresse en rectifiant ses erreurs. Et Kuhn décrit la dynamique : longues périodes de « science normale » dans un paradigme, puis révolutions quand les anomalies s'accumulent." },
      { t: "3. Ce que la science peut — et pas", d: "La science ne décrit pas le réel « en soi » : elle construit des modèles qui prédisent les phénomènes (Kant : nous connaissons ce qui nous apparaît, structuré par notre esprit). Ses vérités sont provisoires mais pas arbitraires : chaque correction conserve et dépasse l'acquis — c'est un progrès par erreurs rectifiées, pas un relativisme. Enfin, la science dit ce qui est, jamais ce qui doit être : aucune équation ne décide s'il faut cloner, ni qui sauver en premier. Les questions de fins restent à la philosophie, au droit, à la démocratie — le scientisme est l'oubli de cette frontière." }
    ],
    vocab: [
      { m: "Induction", d: "Passage de cas particuliers observés à une loi générale." },
      { m: "Déduction", d: "Raisonnement qui tire d'un principe général des conséquences particulières." },
      { m: "Réfutabilité", d: "Propriété d'une théorie qui peut être contredite par une expérience concevable." },
      { m: "Paradigme", d: "Cadre théorique et méthodologique partagé par une communauté de chercheurs à une époque." },
      { m: "Obstacle épistémologique", d: "Évidence familière ou image qui bloque la formation de l'esprit scientifique." }
    ],
    piege: "Croire qu'une expérience « prouve » une théorie. Chez Popper, mille corbeaux noirs ne prouvent pas que tous les corbeaux sont noirs ; un seul corbeau blanc suffit à réfuter. La science est l'art d'énoncer des hypothèses audacieuses et de tout faire pour les démolir."
  },

  {
    id: "technique",
    title: "La technique",
    tag: "La culture",
    etym: "Grec tekhnè : art, habileté, savoir-faire — la même racine que l'art (latin ars). Les Grecs ne séparaient pas l'artiste de l'artisan : tous deux possèdent un savoir-faire réglé en vue d'une fin.",
    intro: "Du silex taillé à l'intelligence artificielle, la technique prolonge le corps et décuple la puissance humaine. Elle nous a libérés de la faim, du froid, de la distance — mais nous voilà dépendants de nos machines, et capables pour la première fois de détruire nos propres conditions d'existence.",
    problematiques: [
      "La technique nous libère-t-elle de la nature ou nous en sépare-t-elle ?",
      "La technique est-elle un moyen neutre ?",
      "Le progrès technique est-il toujours un progrès humain ?"
    ],
    auteurs: [
      { name: "Platon", oeuvre: "Protagoras (mythe de Prométhée)", these: "Épiméthée distribue toutes les qualités aux animaux et oublie l'homme — nu, sans griffes ni fourrure. Prométhée vole le feu et le savoir technique pour le sauver. Mais la technique ne suffit pas : sans la politique (la justice et la honte, données à tous), les hommes s'entre-détruisent." },
      { name: "Aristote", oeuvre: "Les Parties des animaux", these: "La main n'est pas un organe parmi d'autres : elle est « l'outil des outils », l'instrument universel qui peut tous les saisir. La nature a donné la main à l'homme parce qu'il est intelligent — technique et pensée sont nées ensemble." },
      { name: "Descartes", oeuvre: "Discours de la méthode (1637)", these: "Le savoir n'est pas contemplation mais puissance : la physique doit déboucher sur une médecine, une mécanique, des arts utiles. Programme : « nous rendre comme maîtres et possesseurs de la nature » — pour le soulagement de la condition humaine." },
      { name: "Bergson", oeuvre: "L'Évolution créatrice (1907)", these: "L'intelligence humaine est d'abord pratique : « la faculté de fabriquer des objets artificiels, en particulier des outils à faire des outils ». Avant Homo sapiens, nous sommes Homo faber — l'homme se définit par la fabrication." },
      { name: "Heidegger", oeuvre: "La Question de la technique (1953)", these: "La technique moderne n'est pas un simple moyen : c'est une manière de dévoiler le monde qui « arraisonne » la nature — la met en demeure de livrer son énergie, la réduit à un stock disponible. Le Rhin n'est plus un fleuve mais un fournisseur de pression hydraulique. Le danger : que l'homme lui-même devienne ressource." },
      { name: "Hans Jonas", oeuvre: "Le Principe responsabilité (1979)", these: "Nos pouvoirs ont dépassé nos prévisions : nucléaire, génétique, climat. Il faut une « heuristique de la peur » — prêter l'oreille à la prophétie de malheur plutôt qu'à celle du bonheur — et répondre de ce qui n'existe pas encore : les générations futures." }
    ],
    citations: [
      { q: "La main est l'outil des outils.", a: "Aristote" },
      { q: "On ne commande à la nature qu'en lui obéissant.", a: "Francis Bacon" },
      { q: "Science sans conscience n'est que ruine de l'âme.", a: "Rabelais" }
    ],
    reperes: ["Théorie / Pratique", "Principe / Cause / Fin", "Idéal / Réel"],
    sujets: [
      "La technique n'est-elle qu'un moyen ?",
      "Dépendons-nous de la technique ?",
      "Faut-il avoir peur du progrès technique ?"
    ],
    cours: [
      { t: "1. Qu'est-ce que la technique ?", d: "Un ensemble de moyens et de procédés réglés en vue d'une fin : tailler, cultiver, calculer, coder. L'outil prolonge l'organe (le marteau, le poing), la machine s'en affranchit (elle a sa propre force motrice), la technologie moderne naît du mariage avec la science. L'homme est homo faber avant d'être sapiens (Bergson) : pas d'humanité sans technique — le feu, le vêtement et la parole sont déjà des techniques. Le mythe de Prométhée le disait : l'homme, animal sans qualités, survit par l'artifice." },
      { t: "2. Libération… et nouvelles dépendances", d: "La technique nous a affranchis de la faim, du froid, de la distance, des tâches épuisantes : qui voudrait revenir avant l'anesthésie ? Mais chaque pouvoir crée sa dépendance : l'outil qu'on ne sait plus ne pas utiliser, les savoir-faire perdus, l'accélération qui dévore le temps gagné. Surtout, la technique n'est pas une boîte à outils neutre : elle reconfigure nos fins elles-mêmes — le smartphone n'a pas « répondu » à un besoin, il l'a créé. Heidegger radicalise : la technique moderne est une manière de voir le monde entier comme stock disponible, y compris l'homme (« ressources humaines »)." },
      { t: "3. Réguler la puissance", d: "Nos pouvoirs (nucléaire, génétique, climat, IA) dépassent désormais nos prévisions — et leurs effets sont parfois irréversibles et globaux. Jonas en tire une éthique nouvelle : la responsabilité envers ce qui n'existe pas encore (les générations futures), guidée par une « heuristique de la peur » — prendre au sérieux le pire scénario. Traduction politique : principe de précaution, évaluation démocratique des techniques, bioéthique. Ni technophobie ni technolâtrie : la question n'est jamais « pour ou contre la technique » mais quelles techniques, pour quelles fins, décidées par qui." }
    ],
    vocab: [
      { m: "Homo faber", d: "L'homme défini par sa capacité de fabriquer des outils, avant même la pensée abstraite." },
      { m: "Technoscience", d: "Fusion moderne de la science et de la technique, chacune nourrissant l'autre." },
      { m: "Arraisonnement", d: "Chez Heidegger : mise en demeure de la nature de se livrer comme stock d'énergie disponible." },
      { m: "Principe de précaution", d: "Exigence de s'abstenir ou d'encadrer une action en cas de risque grave et incertain." },
      { m: "Ambivalence de la technique", d: "Caractère de la technique qui libère et asservit, soigne et menace, selon ses usages et ses structures." }
    ],
    piege: "« La technique est neutre, tout dépend de l'usage » : c'est précisément la thèse que Heidegger et Jonas contestent. Une technique n'est jamais un simple instrument : elle transforme nos manières de voir, de vouloir et de vivre (le smartphone n'est pas un téléphone amélioré). En faire une évidence, c'est éviter le problème."
  },

  {
    id: "temps",
    title: "Le temps",
    tag: "Métaphysique",
    etym: "Latin tempus, apparenté au grec temnein : « couper ». Le temps découpe la durée en moments. Les Grecs distinguaient chronos (le temps qui s'écoule et se mesure) et kairos (le moment opportun à saisir).",
    intro: "« Qu'est-ce donc que le temps ? Si personne ne me le demande, je le sais ; si on me le demande et que je veuille l'expliquer, je ne le sais plus » (Augustin). Le temps est l'évidence la plus familière et l'énigme la plus coriace : il passe, mais vers où ? Il détruit tout — mais sans lui, rien n'adviendrait.",
    problematiques: [
      "Le temps existe-t-il en dehors de la conscience ?",
      "Le temps est-il notre ennemi ?",
      "Faut-il vivre dans le présent ?"
    ],
    auteurs: [
      { name: "Héraclite", oeuvre: "Fragments", these: "« On ne se baigne jamais deux fois dans le même fleuve » : tout coule, tout devient. Le réel n'est pas un état mais un flux — la stabilité n'est qu'une apparence du changement." },
      { name: "Platon", oeuvre: "Timée", these: "Le temps est « l'image mobile de l'éternité » : le démiurge, façonnant le monde sur le modèle éternel des Idées, crée avec le ciel cette imitation mouvante qui se déroule selon le nombre. Le temps est un moindre être — l'éternité dégradée." },
      { name: "Augustin", oeuvre: "Confessions, livre XI (~400)", these: "Le passé n'est plus, le futur pas encore, le présent fuit : où est le temps ? Réponse : dans l'âme. Il y a un triple présent — présent du passé (la mémoire), présent du présent (l'attention), présent de l'avenir (l'attente). Le temps est une distension de l'âme." },
      { name: "Kant", oeuvre: "Critique de la raison pure (1781)", these: "Le temps n'est pas une chose ni un concept tiré de l'expérience : c'est une forme a priori de la sensibilité — le cadre dans lequel tout phénomène nous apparaît nécessairement. Nous ne percevons pas le temps : nous percevons dans le temps." },
      { name: "Bergson", oeuvre: "Essai sur les données immédiates de la conscience (1889)", these: "Le temps des horloges — divisible, homogène, spatialisé — n'est pas le temps réel. La durée vécue est qualitative : ses moments s'interpénètrent comme les notes d'une mélodie. Une minute d'attente et une minute de joie n'ont pas la même épaisseur." },
      { name: "Pascal", oeuvre: "Pensées (1670)", these: "« Nous ne vivons jamais, mais nous espérons de vivre » : le divertissement nous jette dans le souvenir ou l'attente, et le présent — seul temps qui soit nôtre — nous échappe toujours. L'homme fuit le présent parce qu'il y rencontrerait sa misère." }
    ],
    citations: [
      { q: "On ne se baigne jamais deux fois dans le même fleuve.", a: "Héraclite" },
      { q: "Le temps est l'image mobile de l'éternité.", a: "Platon" },
      { q: "Nous ne vivons jamais, mais nous espérons de vivre.", a: "Pascal" }
    ],
    reperes: ["Objectif / Subjectif / Intersubjectif", "En acte / En puissance", "Absolu / Relatif"],
    sujets: [
      "Le temps est-il ce qui nous manque le plus ?",
      "Peut-on échapper au temps ?",
      "Perdre son temps, est-ce ne rien faire ?"
    ],
    cours: [
      { t: "1. Le temps qu'on mesure", d: "Le temps objectif est celui des horloges et de la physique : homogène (toutes les secondes se valent), divisible, irréversible — la flèche du temps interdit le retour en arrière, contrairement à l'espace où l'on revient sur ses pas. Aristote le définissait déjà par le mouvement : le temps est ce qu'on compte quand quelque chose change. Paradoxe d'Augustin : le passé n'est plus, le futur pas encore, le présent fuit — où donc « est » le temps ? Sa réponse : dans l'âme, qui retient (mémoire), fait attention (présent) et attend (avenir)." },
      { t: "2. Le temps qu'on vit", d: "Une minute d'attente chez le dentiste et une minute de fou rire n'ont pas la même épaisseur : c'est la durée de Bergson, qualitative, où les moments s'interpénètrent comme les notes d'une mélodie — irréductible au temps spatialisé des horloges. Kant ajoute un niveau : le temps n'est pas une chose du monde mais la forme a priori de notre sensibilité — nous ne percevons pas le temps, nous percevons tout dans le temps. Le temps social enfin nous discipline : calendriers, horaires, urgence moderne — l'accélération est un fait de civilisation, pas de physique." },
      { t: "3. Habiter sa finitude", d: "Le temps détruit (vieillissement, oubli, mort) mais il rend tout possible : mûrir, apprendre, pardonner, créer supposent la durée. Face à la finitude, trois stratégies classiques : vivre le présent (sagesses antiques — le passé n'est plus à moi, l'avenir pas encore), se projeter (l'existence comme projet), et s'inscrire dans ce qui dure plus que soi — œuvres, institutions, transmission. Pascal pointe le piège inverse : occupés du souvenir et de l'attente, « nous ne vivons jamais, mais nous espérons de vivre ». Et Nietzsche réhabilite l'oubli : sans lui, pas d'action ni de bonheur possibles." }
    ],
    vocab: [
      { m: "Durée", d: "Le temps qualitatif tel que la conscience le vit, par opposition au temps mesuré." },
      { m: "Irréversibilité", d: "Impossibilité de revenir en arrière dans le temps, contrairement à l'espace." },
      { m: "Finitude", d: "Condition d'un être limité dans le temps, voué à la mort." },
      { m: "Instant", d: "Limite sans épaisseur entre le passé et l'avenir." },
      { m: "Éternité", d: "Ce qui est hors du temps — sans commencement, sans fin, sans changement." }
    ],
    piege: "Confondre le temps objectif (celui de la physique et des horloges, mesurable) et le temps vécu (la durée bergsonienne, qualitative). Les deux sont vrais, mais pas du même point de vue — un devoir qui n'articule pas les deux reste à la surface du problème."
  },

  {
    id: "travail",
    title: "Le travail",
    tag: "La culture",
    etym: "Latin tripalium : un instrument de torture à trois pieux. Le mot porte la peine et la contrainte — tout l'enjeu de la notion est de savoir si le travail se réduit à cette souffrance originelle.",
    intro: "Le mot vient (dit-on) de tripalium, un instrument de torture — tout un programme. Peine, contrainte, nécessité de gagner sa vie : le travail semble l'ennemi du bonheur. Et pourtant, par lui, l'homme transforme le monde et se transforme lui-même. Malédiction ou accomplissement ?",
    problematiques: [
      "Le travail n'est-il qu'une contrainte ?",
      "Le travail humanise-t-il ou aliène-t-il ?",
      "Travailler moins, est-ce vivre mieux ?"
    ],
    auteurs: [
      { name: "Platon", oeuvre: "République", these: "L'Antiquité méprise le travail manuel, réservé aux esclaves : la vie libre est celle du loisir studieux (skholè), de la politique et de la contemplation. Platon pense néanmoins la division du travail : la cité naît de ce que nul ne se suffit à lui-même." },
      { name: "Hegel", oeuvre: "Phénoménologie de l'esprit (1807) — dialectique du maître et de l'esclave", these: "Le maître jouit, l'esclave travaille — mais le retournement est là : en transformant les choses, l'esclave discipline son désir, imprime sa forme au monde et prend conscience de soi. Le maître, lui, dépend de l'esclave. C'est par le travail que la conscience se forme." },
      { name: "Marx", oeuvre: "Manuscrits de 1844 / Le Capital", these: "Le travail est l'essence de l'homme : ce qui distingue le pire architecte de la meilleure abeille, c'est qu'il construit d'abord la maison dans sa tête. Mais le salariat aliène : l'ouvrier est dépossédé du produit, du sens et de lui-même — le travail, qui devrait humaniser, mutile." },
      { name: "Adam Smith", oeuvre: "Recherches sur la richesse des nations (1776)", these: "La division du travail (la manufacture d'épingles : 18 opérations) décuple la productivité. Mais il voit aussi le revers : l'homme réduit à quelques gestes « devient aussi stupide et ignorant qu'il soit possible à une créature humaine de le devenir »." },
      { name: "Nietzsche", oeuvre: "Aurore (1881)", these: "Les louanges du travail cachent une peur de l'individu : occuper les hommes du matin au soir, c'est la meilleure des polices — elle épuise la force qui pourrait servir à penser, désirer, se révolter." },
      { name: "Hannah Arendt", oeuvre: "Condition de l'homme moderne (1958)", these: "Trois activités : le travail (cycle de la consommation, ne laisse rien), l'œuvre (fabrication d'un monde durable), l'action (parole et politique entre les hommes). Tragédie moderne : nous sommes une « société de travailleurs » au moment où le travail se raréfie." }
    ],
    citations: [
      { q: "Le travail éloigne de nous trois grands maux : l'ennui, le vice et le besoin.", a: "Voltaire" },
      { q: "C'est par le travail que la conscience vient à soi-même.", a: "d'après Hegel" },
      { q: "En un certain sens, le travail a créé l'homme lui-même.", a: "Engels" }
    ],
    reperes: ["Obligation / Contrainte", "En acte / En puissance", "Formel / Matériel"],
    sujets: [
      "Le travail n'est-il qu'un moyen de gagner sa vie ?",
      "Peut-on s'accomplir sans travailler ?",
      "Gagne-t-on sa vie en la perdant au travail ?"
    ],
    cours: [
      { t: "1. Qu'est-ce que travailler ?", d: "Le travail est l'activité par laquelle l'homme transforme la nature pour satisfaire ses besoins — et se transforme lui-même en retour. Il suppose l'effort, le temps, des règles : c'est une médiation, contrairement à la cueillette immédiate ou au jeu (qui a sa fin en lui-même). Arendt affine la carte : le travail (cycle de la consommation, rien ne reste : cuisiner, nettoyer), l'œuvre (fabriquer un monde durable : la table, le livre, le pont) et l'action (parler et agir entre les hommes : la politique). Réduire toute activité au seul travail-emploi est déjà un choix de société." },
      { t: "2. Malédiction ou accomplissement ?", d: "La tradition penche pour la peine : tripalium, « à la sueur de ton front », mépris antique du travail manuel réservé aux esclaves — la vie libre étant celle du loisir studieux (skholè). Renversement moderne : chez Hegel, c'est l'esclave qui, en travaillant, discipline son désir, forme le monde et s'y reconnaît — il devient maître de soi quand le maître oisif s'engourdit. Marx en hérite : le travail est l'essence de l'homme (l'architecte conçoit avant de bâtir, l'abeille non)… ce qui rend le salariat accablant : dépossédé du produit, du rythme et du sens, le travailleur « ne s'affirme pas, il se nie ». Le même mot couvre l'atelier de l'artisan et la chaîne." },
      { t: "3. Le travail aujourd'hui en question", d: "La division du travail (Smith) décuple la productivité au prix de la fragmentation : l'ouvrier d'une seule opération « devient aussi stupide qu'il est possible de le devenir » — Smith lui-même le redoutait. L'automation relance la vieille promesse de la fin du travail : libération ou crise du sens et du revenu ? S'y ajoutent le travail invisible (domestique, bénévole, non compté), la quête de sens des nouvelles générations, et la question politique : faut-il travailler moins (partage), autrement (autogestion), ou garantir un revenu sans emploi ? Le travail reste le lieu où se nouent économie, identité et justice." }
    ],
    vocab: [
      { m: "Aliénation", d: "Processus par lequel on devient étranger à soi-même dans sa propre activité." },
      { m: "Division du travail", d: "Répartition des tâches entre individus, métiers ou opérations, source de productivité et de dépendance mutuelle." },
      { m: "Force de travail", d: "Capacité de produire que le salarié loue contre un salaire." },
      { m: "Skholè", d: "Loisir studieux des Grecs : temps libéré de la nécessité, condition de la pensée et de la citoyenneté." },
      { m: "Œuvre", d: "Chez Arendt : production durable qui bâtit un monde stable, par opposition aux biens aussitôt consommés." }
    ],
    piege: "Réduire le travail à l'emploi salarié. Le travail domestique, l'étude, la création non rémunérée sont du travail — et Arendt rappelle qu'entre l'ouvrier à la chaîne et l'artisan qui œuvre, la différence est philosophique, pas seulement économique."
  },

  {
    id: "verite",
    title: "La vérité",
    tag: "La connaissance",
    etym: "Latin veritas (de verus, vrai). Le grec alètheia est plus parlant : a- privatif + lèthè, l'oubli, le voile — la vérité comme « dé-voilement » : ce qui est arraché à l'oubli et à la dissimulation.",
    intro: "La vérité n'est pas le réel : elle est une propriété de nos jugements sur le réel — un discours est vrai quand il dit ce qui est. Mais comment le vérifier, puisque nous n'avons jamais accès aux choses qu'à travers nos représentations ? Et la vérité vaut-elle toujours mieux que l'illusion ?",
    problematiques: [
      "Y a-t-il des vérités définitives ?",
      "La vérité est-elle relative à chacun ?",
      "Faut-il toujours préférer la vérité ?"
    ],
    auteurs: [
      { name: "Protagoras (les sophistes)", oeuvre: "rapporté par Platon, Théétète", these: "« L'homme est la mesure de toutes choses » : le vent est froid pour qui frissonne, doux pour l'autre — et nul n'a tort. Le relativisme sophistique réduit la vérité aux apparences de chacun ; ce que Socrate combat : si tout est vrai, plus rien ne l'est." },
      { name: "Platon", oeuvre: "République, livre VII (allégorie de la caverne)", these: "Les prisonniers prennent les ombres pour le réel : telle est notre condition, captifs de l'opinion (doxa). La vérité exige une conversion : se détourner du sensible vers l'intelligible, jusqu'à l'Idée du Bien. La vérité se conquiert, douloureusement." },
      { name: "Descartes", oeuvre: "Méditations métaphysiques (1641)", these: "Pour fonder la vérité, douter de tout — sens, monde, mathématiques — jusqu'au roc du cogito. Le critère : l'évidence, ce que je conçois clairement et distinctement. La vérité n'est pas reçue, elle est reconstruite ordre par ordre." },
      { name: "Spinoza", oeuvre: "Éthique (1677)", these: "« La vérité est l'indice d'elle-même et du faux » : comme la lumière se montre en montrant les ténèbres, l'idée vraie n'a pas besoin d'un signe extérieur — qui a une idée vraie sait en même temps qu'elle est vraie." },
      { name: "Nietzsche", oeuvre: "Vérité et mensonge au sens extra-moral (1873)", these: "Les vérités sont « des illusions dont on a oublié qu'elles le sont », des métaphores usées. Et derrière la « volonté de vérité », l'auteur interroge une valeur jamais questionnée : pourquoi vouloir le vrai plutôt que l'apparence, si l'illusion fait vivre ?" },
      { name: "William James", oeuvre: "Le Pragmatisme (1907)", these: "Le vrai, c'est ce qui réussit : une idée est vraie si elle « paie », si elle guide efficacement l'expérience. La vérité n'est pas une copie statique du réel mais un processus — elle arrive à une idée, par vérification." }
    ],
    citations: [
      { q: "L'homme est la mesure de toutes choses.", a: "Protagoras" },
      { q: "Les vérités sont des illusions dont on a oublié qu'elles le sont.", a: "Nietzsche" },
      { q: "Je ne cherche qu'à connaître la vérité, et à vivre selon elle.", a: "Descartes (correspondance)" }
    ],
    reperes: ["Vrai / Probable / Certain", "Croire / Savoir", "Objectif / Subjectif / Intersubjectif", "Persuader / Convaincre"],
    sujets: [
      "La vérité dépend-elle de nous ?",
      "Une illusion peut-elle être préférable à la vérité ?",
      "Toutes les opinions se valent-elles ?"
    ],
    cours: [
      { t: "1. Où loge la vérité ?", d: "La vérité n'est pas dans les choses : une pierre n'est ni vraie ni fausse, elle est. La vérité est une propriété de nos jugements : un énoncé est vrai s'il dit ce qui est. Deux grandes définitions : la correspondance (l'accord du jugement et du réel — mais comment comparer mon idée au réel, puisque je n'y accède que par mes idées ?) et la cohérence (l'accord du discours avec lui-même — mais un roman peut être cohérent et faux). D'où la quête de critères : l'évidence (Descartes), la preuve, la vérification expérimentale, l'accord des esprits compétents." },
      { t: "2. Une conquête contre l'opinion", d: "La vérité ne se ramasse pas : elle s'arrache à la doxa — l'opinion commune, mélange d'habitudes, d'on-dit et de préjugés que l'allégorie de la caverne met en scène. Les armes : le doute méthodique, qui suspend tout ce qui n'est pas certain ; la démonstration, qui contraint l'assentiment par la seule logique ; l'expérimentation, qui soumet l'hypothèse au verdict des faits ; et l'examen public — une vérité qui refuse la discussion et le contrôle ressemble fort à un dogme. La vérité est intersubjective en droit : vraie pour tous, ou pas vraie." },
      { t: "3. Relativisme, illusion, valeur du vrai", d: "« À chacun sa vérité » s'auto-réfute : si tout est relatif, cette phrase l'est aussi. Ne pas confondre la relativité des opinions (réelle) et celle de la vérité (contradictoire). Restent deux vraies questions. Le perspectivisme de Nietzsche : tout savoir part d'un point de vue — mais multiplier les perspectives n'abolit pas le vrai, cela l'affine. Et la valeur du vrai : faut-il toujours le préférer ? L'illusion console, l'art enchante, certains mensonges protègent. Vouloir la vérité est moins un instinct qu'une éthique — celle de la lucidité, qui accepte de payer le prix du réel." }
    ],
    vocab: [
      { m: "Adéquation", d: "Correspondance entre ce que le jugement affirme et ce qui est." },
      { m: "Doxa", d: "Opinion commune, reçue sans examen." },
      { m: "Évidence", d: "Ce qui s'impose immédiatement et clairement à l'esprit, sans démonstration." },
      { m: "Relativisme", d: "Thèse selon laquelle toute vérité dépend du point de vue, de la culture ou de l'individu." },
      { m: "Véracité", d: "Qualité de celui qui dit ce qu'il croit vrai — on peut être véridique et se tromper." }
    ],
    piege: "Vrai ≠ réel ≠ sincère. Le réel est (les choses), le vrai se dit (les jugements), le sincère se vit (je crois ce que je dis — mais je peux me tromper sincèrement). Un mensonge peut énoncer le vrai par accident ; une erreur n'est pas un mensonge. Ces distinctions ouvrent presque tous les sujets sur la vérité."
  }
];

/* ---------- MÉTHODOLOGIE ---------- */
const METHODO = [
  {
    id: "dissertation",
    title: "La dissertation",
    sub: "4 heures pour transformer une question en réflexion",
    intro: "La dissertation n'est pas une récitation de cours ni un sondage d'opinions : c'est l'examen méthodique d'un problème. Le correcteur n'attend pas LA bonne réponse — il veut voir une question prise au sérieux, des arguments, des exemples précis et une progression.",
    etapes: [
      { t: "1 · Analyser le sujet (30 min)", d: "Définis chaque terme du sujet (et leurs sens multiples), repère le présupposé de la question et ce qui fait problème. « Faut-il » n'est pas « peut-on » ; « toujours » change tout. Le hors-sujet se joue ici, pas à la rédaction." },
      { t: "2 · Problématiser (15 min)", d: "Dégage la tension : la question oppose deux réponses plausibles mais incompatibles. La problématique reformule cette tension (« Comment concilier X et Y ? », « X est-il possible si Y ? »). Pas de paradoxe = pas de dissertation." },
      { t: "3 · Construire le plan (30 min)", d: "Trois parties qui progressent : thèse (la réponse spontanée, défendue sérieusement), antithèse (ses limites, l'objection forte), dépassement (déplacer la question, distinguer des sens, changer d'échelle). Chaque partie : 2-3 arguments, chacun avec explication + exemple ou référence." },
      { t: "4 · Rédiger (2h15)", d: "Introduction entièrement rédigée au brouillon : amorce (exemple, paradoxe — pas de « de tout temps les hommes »), énoncé du sujet, analyse des termes, problématique, annonce du plan. Puis développement avec transitions, et conclusion qui RÉPOND à la question." },
      { t: "5 · Relire (15 min)", d: "Orthographe, syntaxe, citations exactes. Vérifie que chaque paragraphe sert la question — un beau passage hors sujet est un passage à supprimer." }
    ],
    erreurs: [
      { t: "Le catalogue d'auteurs", d: "« Platon dit que… Kant dit que… Sartre dit que… » sans fil directeur : les philosophes sont des arguments à ton service, pas une parade de célébrités." },
      { t: "Le café du commerce", d: "Opinions personnelles non argumentées (« je pense que chacun voit midi à sa porte »). Ton avis n'a de valeur que démontré." },
      { t: "Le plan oui/non/peut-être", d: "Si ta troisième partie dit « ça dépend », elle ne dépasse rien. Elle doit déplacer le problème : distinguer des sens, interroger le présupposé, changer de terrain." },
      { t: "La récitation du cours", d: "Le sujet « Le travail rend-il libre ? » n'appelle pas tout ton cours sur le travail, mais ce qui sert CETTE question." }
    ],
    astuce: "Le correcteur lit ton introduction en premier et ta conclusion en dernier — soigne-les comme des vitrines. Et cite peu mais juste : une citation exacte et exploitée vaut dix citations décoratives."
  },
  {
    id: "explication",
    title: "L'explication de texte",
    sub: "Faire parler un texte sans parler à sa place",
    intro: "On te donne un texte d'environ 15-20 lignes d'un philosophe : il s'agit d'en dégager le problème, la thèse et le mouvement argumentatif. Règle d'or : tout est dans le texte. Ton cours sert à éclairer le texte, jamais à le remplacer.",
    etapes: [
      { t: "1 · Lire, relire, encore (30 min)", d: "Plusieurs lectures crayon en main. Cherche : le THÈME (de quoi ça parle), la THÈSE (ce que l'auteur affirme — souvent condensée en une phrase), le PROBLÈME (à quelle question le texte répond), et contre qui l'auteur argumente (la thèse adverse, souvent implicite)." },
      { t: "2 · Découper le mouvement (20 min)", d: "Repère les étapes de l'argumentation (2-4 mouvements) en t'appuyant sur les connecteurs logiques : « or », « donc », « mais », « en effet », « cependant ». Ils sont le squelette du texte — chaque mouvement deviendra une partie de ton développement." },
      { t: "3 · Expliquer ligne à ligne (au brouillon)", d: "Pour chaque passage : que dit l'auteur (reformulation fidèle), pourquoi le dit-il (fonction dans l'argumentation), qu'est-ce qui le justifie (exemple, raison, distinction) ? Méthode CEI : Citer brièvement, Expliquer les termes, Illustrer par un exemple à toi." },
      { t: "4 · Rédiger (2h)", d: "Introduction : auteur et thème, problème du texte, thèse défendue, annonce du mouvement. Développement : explication linéaire (on suit l'ordre du texte), une partie par mouvement, transitions. Conclusion : bilan du parcours argumentatif + intérêt philosophique du texte." },
      { t: "5 · Relire (10 min)", d: "Chaque citation est-elle entre guillemets et expliquée ? As-tu rendu compte de TOUT le texte, y compris la fin ?" }
    ],
    erreurs: [
      { t: "La paraphrase", d: "Redire le texte en moins bien (« l'auteur dit que… puis il dit que… »). Expliquer, c'est montrer pourquoi l'auteur dit cela, ce qui le justifie, ce qui s'y oppose." },
      { t: "Le texte-prétexte", d: "Réciter ton cours sur l'auteur ou la notion en oubliant le texte. Si ton devoir pouvait être écrit sans le texte sous les yeux, c'est raté." },
      { t: "Le contresens sur la thèse", d: "Attention aux textes où l'auteur EXPOSE une position pour la réfuter ensuite : repère qui parle (concession, ironie, objection). Confondre la thèse adverse et celle de l'auteur coûte très cher." },
      { t: "Le plan thématique", d: "L'explication est linéaire : on suit l'ordre du texte, on ne le réorganise pas par thèmes." }
    ],
    astuce: "Les exemples du texte ne sont jamais décoratifs : demande-toi toujours ce que CET exemple prouve exactement, et pourquoi l'auteur a choisi celui-là plutôt qu'un autre. C'est souvent là que se cache la subtilité de l'argument."
  }
];
