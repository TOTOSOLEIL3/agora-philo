# 🦉 AGORA — Révise le bac philo en jouant

**En ligne : [agora-philo.fr](https://agora-philo.fr/)**

Site de révision pour l'épreuve de philosophie du bac, sous forme de mini-jeux.

## Lancer le site

Aucune installation : ouvre simplement `index.html` dans un navigateur.

Ou avec un petit serveur local :

```
python -m http.server 8123
```

puis va sur http://localhost:8123

## Les 6 jeux

| Jeu | Principe | Contenu |
|---|---|---|
| 🗣️ Qui a dit ça ? | Attribuer une citation à son auteur (4 choix) | 28 citations sourcées |
| 🏛️ Le Grand QCM | 10 questions sur les doctrines et distinctions | 20 questions expliquées |
| ⚖️ Vrai ou Faux | Démonter les contresens classiques | 20 affirmations expliquées |
| 🃏 Les Repères | Flashcards des distinctions officielles du programme | 20 repères de Terminale |
| 🤝 Le Grand Duel | Associer chaque philosophe à son concept | 14 paires |
| 🔥 Le Marathon | Mode mort subite : tout mélangé, une erreur = fin | tout le contenu |
| 🎯 Révision ciblée | 10 questions générées automatiquement depuis la fiche d'une notion | 17 notions × ~24 questions |

## Le cours

- **17 fiches de notions** (l'art → la vérité), chacune avec : le paradoxe de la notion,
  les problématiques, 6 auteurs incontournables et leurs thèses, des citations à caser,
  les repères liés, des sujets de bac types et le piège classique à éviter.
- Chaque fiche a son bouton **« ⚔ Réviser cette notion »** : 10 questions générées
  automatiquement depuis son contenu (thèse → auteur, œuvre → auteur, citation → auteur,
  vrai/faux d'attribution piégés, repères en « texte à trous »). Record sauvegardé par
  notion, affiché sur la fiche et sur la grille de l'accueil (★ x/10).
- **2 fiches de méthode** : la dissertation et l'explication de texte
  (étapes chronométrées, erreurs qui coûtent cher, astuce du correcteur).
- Couverture du programme inspirée de philolingo.com ; fiches rédigées pour AGORA.

## Progression

- Chaque bonne réponse rapporte de l'XP (sauvegardée dans le navigateur).
- 7 niveaux, d'« Apprenti sophiste » à « Sage absolu — 20/20 au bac ».
- Records par jeu affichés sur les cartes de l'accueil.

## Structure

- `index.html` — structure de la page (accueil, coquille de jeu, fiches)
- `styles.css` — design « éditorial néo-brutaliste » (papier, encre, bleu Klein)
- `data.js` — contenu des jeux (citations, QCM, repères…)
- `cours.js` — les 17 fiches de notions + les 2 fiches de méthode
- `app.js` — moteur des 6 jeux, rendu des fiches, XP, records

Pour ajouter du contenu, il suffit d'enrichir les tableaux de `data.js` :
les jeux piochent dedans automatiquement.
