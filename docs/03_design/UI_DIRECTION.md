# UI Direction — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 2

---

## 1. Concept Visuel
Le design du site Berlioz Conseil s'articule autour de l'idée d'un "cabinet privé". Il doit évoquer le silence, la rigueur, l'excellence et la pérennité.

- **Minimalisme assumé :** L'espace vide (whitespace) n'est pas du vide, c'est ce qui donne de la valeur au contenu.
- **Sobriété chromatique :** Dominante de tons très sombres et froids (noirs, anthracites) contrastés par des accents chauds et précieux (champagne, bronze).
- **Lisibilité avant tout :** Contrastes étudiés pour ne fatiguer ni l'œil ni l'esprit.

## 2. Ce qu'il ne faut PAS faire
- **Pas de style "Startup" :** Éviter les couleurs vives (bleu électrique, violet fluo), les bordures très arrondies (`rounded-3xl`), les ombres portées douces (`shadow-xl` claires).
- **Pas de style "Fintech" :** Éviter les dégradés complexes multicolores, les interfaces surchargées de données, les animations rapides.
- **Pas d'animations inutiles :** Les transitions doivent être limitées au survol (hover) ou à des apparitions très douces (fade-in), sans mouvement agressif.

## 3. Typographie
- **Typographie principale (Sans-serif) :** Lignes épurées, géométriques mais lisibles. Utilisée pour le corps de texte, les boutons, les surtitres.
- **Typographie secondaire (Serif - optionnelle) :** Utilisée par touches (titres principaux, citations) pour ancrer l'aspect patrimonial et "tradition". *Note : En V1 Bootstrap, on s'appuie sur des stacks système premium avant d'intégrer des polices externes si validé.*

## 4. Composants et Formes
- **Bordures :** Fines (`1px`), de couleur très discrète (blanc à 10% d'opacité).
- **Coins (Radius) :** Légers (`rounded-sm` ou `rounded-md`, soit 2px à 6px) pour garder un aspect sérieux, ou complètement angulaires (`rounded-none`).
- **Cartes (Cards) :** Différenciation par une couleur de surface légèrement plus claire que le fond (`#151A23`) plutôt que par des ombres portées, qui fonctionnent mal sur fond très sombre.
