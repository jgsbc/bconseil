# Components Directory — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 2

---

Liste des composants réutilisables du Design System V1.

## Layout & Structure
- **`Container.astro`** : Centre le contenu avec une largeur maximale (`max-w-6xl`) et un padding latéral.
- **`Section.astro`** : Définit une zone sémantique `<section>` avec un padding vertical homogène (`py-24` md:`py-32`).

## Typographie & En-têtes
- **`Eyebrow.astro`** : Petit surtitre en majuscules, espacé, couleur muted. Utilisé au-dessus des titres de section.
- **`PageHero.astro`** : En-tête générique pour les pages de second niveau (ex: À propos, Contact), incluant titre et texte descriptif.

## Blocs de contenu
- **`Card.astro`** : Conteneur générique avec fond `surface` et bordure `border-soft`.
- **`ExpertiseCard.astro`** : Carte spécifique pour présenter un domaine d'expertise.
- **`ClientAccessCard.astro`** : Carte spécifique pour la page d'accès client (bouton désactivé en V1, explications).
- **`LegalNoticeBlock.astro`** : Bloc d'affichage d'une mention légale ou réglementaire.

## Interactions
- **`Button.astro`** : Bouton stylisé. Supporte plusieurs variantes (primaire, secondaire) tout en restant sobre.
- **`CTASection.astro`** : Section pré-construite pour inviter l'utilisateur à contacter le cabinet.

> Note : Aucun composant ne contient de logique côté client complexe. Tout est rendu statiquement.
