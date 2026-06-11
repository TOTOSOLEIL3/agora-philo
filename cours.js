/* ============================================================
   AGORA — Le cours : 17 fiches de notions + méthodologie
   Fiches originales, couvrant le programme de Terminale.
   ============================================================ */

const COURS = [
  {
    id: "art",
    title: "L'art",
    tag: "Esthétique",
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
    piege: "« Des goûts et des couleurs, on ne discute pas » : c'est précisément ce que Kant conteste. Il distingue l'agréable (purement privé : le goût du chocolat) du beau, qui prétend à l'assentiment de tous. Confondre les deux, c'est rater l'essentiel du problème esthétique."
  },

  {
    id: "bonheur",
    title: "Le bonheur",
    tag: "Morale",
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
    piege: "Confondre épicurisme et hédonisme débridé. Dans le langage courant, « épicurien » désigne le bon vivant ; chez Épicure, c'est presque l'inverse : une ascèse du désir, du pain, de l'eau et des amis. Le contresens coûte cher en dissertation."
  },

  {
    id: "conscience",
    title: "La conscience",
    tag: "Métaphysique · Le sujet",
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
    piege: "Ne pas confondre conscience psychologique (présence à soi et au monde) et conscience morale (capacité de juger le bien et le mal). Un sujet sur « la bonne conscience » porte sur la seconde — y répondre par Descartes seul serait à côté."
  },

  {
    id: "devoir",
    title: "Le devoir",
    tag: "Morale",
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
    piege: "Chez Kant, une action simplement conforme au devoir n'a pas de valeur morale : l'épicier honnête par calcul (pour garder ses clients) agit bien, mais pas moralement. Seule compte l'action faite par devoir. Cette distinction conforme/par devoir est une machine à points en dissertation."
  },

  {
    id: "etat",
    title: "L'État",
    tag: "Philosophie politique",
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
    piege: "Confondre État, société et gouvernement. La société existe sans État (sociétés « sans État » étudiées par les anthropologues) ; le gouvernement n'est que l'organe qui exerce le pouvoir, pas l'institution elle-même. Un sujet sur l'État n'est pas un sujet sur « la politique » en général."
  },

  {
    id: "inconscient",
    title: "L'inconscient",
    tag: "Métaphysique · Le sujet",
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
    piege: "Trois « inconscients » à ne pas confondre : l'inconscience (état : être évanoui, étourdi), l'inconscient physiologique (la digestion, les réflexes) et l'inconscient psychique freudien (des représentations refoulées qui font sens). Seul le troisième fait débat philosophique."
  },

  {
    id: "justice",
    title: "La justice",
    tag: "Philosophie politique & morale",
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
    piege: "Vengeance ≠ punition. La vengeance est privée, passionnelle, sans mesure ni tiers ; la punition est publique, proportionnée, prononcée par un tiers impartial selon une règle. L'institution judiciaire naît précisément pour arracher la justice au cycle de la vengeance."
  },

  {
    id: "langage",
    title: "Le langage",
    tag: "La culture",
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
    piege: "Communication animale ≠ langage. Les abeilles de von Frisch transmettent une information (direction, distance du nectar), mais leur danse est un code fixe : pas de dialogue, pas de réponse, pas de message sur le message. Benveniste y voit un signal, non un signe — différence de nature, pas de degré."
  },

  {
    id: "liberte",
    title: "La liberté",
    tag: "Métaphysique & morale",
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
    piege: "Réduire la liberté à l'absence de contraintes (liberté « négative »). Pour Rousseau ou Kant, c'est un contresens : la règle n'est pas l'ennemie de la liberté mais sa condition — sans loi commune, c'est la loi du plus fort, donc la servitude de tous."
  },

  {
    id: "nature",
    title: "La nature",
    tag: "La culture & le monde",
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
    piege: "Le mot « nature » a (au moins) deux sens qu'un bon devoir distingue d'emblée : la nature-monde (l'ensemble des phénomènes physiques et vivants) et la nature-essence (ce qui définit une chose). « La nature humaine » ne parle pas d'écologie."
  },

  {
    id: "raison",
    title: "La raison",
    tag: "La connaissance",
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
    piege: "Rationnel ≠ raisonnable. Est rationnel ce qui est conforme à la logique et au calcul (un plan criminel peut l'être) ; est raisonnable ce qui est conforme à la sagesse pratique et à la mesure. L'écart entre les deux fait des sujets entiers."
  },

  {
    id: "religion",
    title: "La religion",
    tag: "La culture",
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
    piege: "Croire et savoir ne s'opposent pas terme à terme : il y a des croyances rationnelles (j'ai de bonnes raisons sans preuve) et la science elle-même repose sur des principes non démontrés. Et attention : expliquer l'origine psychologique ou sociale d'une croyance ne prouve pas qu'elle soit fausse (ce serait le « sophisme génétique »)."
  },

  {
    id: "science",
    title: "La science",
    tag: "La connaissance",
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
    piege: "Croire qu'une expérience « prouve » une théorie. Chez Popper, mille corbeaux noirs ne prouvent pas que tous les corbeaux sont noirs ; un seul corbeau blanc suffit à réfuter. La science est l'art d'énoncer des hypothèses audacieuses et de tout faire pour les démolir."
  },

  {
    id: "technique",
    title: "La technique",
    tag: "La culture",
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
    piege: "« La technique est neutre, tout dépend de l'usage » : c'est précisément la thèse que Heidegger et Jonas contestent. Une technique n'est jamais un simple instrument : elle transforme nos manières de voir, de vouloir et de vivre (le smartphone n'est pas un téléphone amélioré). En faire une évidence, c'est éviter le problème."
  },

  {
    id: "temps",
    title: "Le temps",
    tag: "Métaphysique",
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
    piege: "Confondre le temps objectif (celui de la physique et des horloges, mesurable) et le temps vécu (la durée bergsonienne, qualitative). Les deux sont vrais, mais pas du même point de vue — un devoir qui n'articule pas les deux reste à la surface du problème."
  },

  {
    id: "travail",
    title: "Le travail",
    tag: "La culture",
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
    piege: "Réduire le travail à l'emploi salarié. Le travail domestique, l'étude, la création non rémunérée sont du travail — et Arendt rappelle qu'entre l'ouvrier à la chaîne et l'artisan qui œuvre, la différence est philosophique, pas seulement économique."
  },

  {
    id: "verite",
    title: "La vérité",
    tag: "La connaissance",
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
