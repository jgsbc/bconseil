# Design Tokens — Berlioz Conseil

**Dernière mise à jour :** 2026-10-15

**Lot de référence :** Corrections audit responsive

---

## 1. Palette de Couleurs

L'interface repose sur un fond sombre (Dark Mode natif) avec des accents chauds.

| Token | Valeur Hexa | Usage | Tailwind V4 Class |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `#091B33` | Fond principal du site (body). Noir profond bleuté. | `bg-bc-bg-primary` |
| `bg-secondary` | `#0B213B` | Fond secondaire, sections alternées, pieds de page. | `bg-bc-bg-secondary` |
| `surface` | `#0E2948` | Fond des cartes, éléments surélevés. | `bg-bc-surface` |
| `text-primary` | `#F5F2EA` | Titres, texte très mis en avant. Blanc cassé chaud. | `text-bc-text-primary` |
| `text-secondary` | `#D9D0BF` | Corps de texte principal. Gris chaud lisible. | `text-bc-text-secondary` |
| `text-muted` | `#AFA594` | Légendes, placeholders, textes secondaires. | `text-bc-text-muted` |
| `accent-champagne` | `#D3A253` | Boutons principaux, liens au survol, éléments distinctifs. | `text-bc-accent-champagne`, `bg-bc-accent-champagne` |
| `accent-bronze` | `#A97836` | États actifs, bordures d'accentuation, éléments secondaires. | `text-bc-accent-bronze`, `bg-bc-accent-bronze` |
| `border-soft` | `rgba(211, 162, 83, 0.22)` | Lignes de séparation, bordures de cartes. | `border-bc-border` |

## 2. Typographie (Stack)

- **Sans-serif (Base) :** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
- **Serif (Titres) :** `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif` (utilisé par le token `@theme` si configuré, pour l'instant intégré via `font-serif` standard).

## 3. Espacements (Spacing)

Les valeurs par défaut sont définies dans la couche CSS `components`, afin que les classes utilitaires locales puissent les remplacer sans conflit de cascade.
- Sections : 48 px par côté sur mobile, 64 px à partir de 768 px.
- Cartes : 20 px sur mobile, 24 px à partir de 768 px.
- Grilles principales : 16 px sur mobile, 24 px sur desktop.
- Container : largeur maximale de 1 152 px par défaut ; les `max-w-*` locaux priment.
- H1 accueil : 32 px sur mobile, 48 px sur tablette, 56 px sur desktop ; interligne 1,15.
- Navigation complète à partir de 1 280 px ; menu compact en dessous.

## 4. Implémentation technique

Ces tokens sont injectés via la directive `@theme` dans le fichier `src/styles/global.css` pour une utilisation directe avec Tailwind CSS V4.
