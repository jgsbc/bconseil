# Design Tokens — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 2

---

## 1. Palette de Couleurs

L'interface repose sur un fond sombre (Dark Mode natif) avec des accents chauds.

| Token | Valeur Hexa | Usage | Tailwind V4 Class |
| :--- | :--- | :--- | :--- |
| `bg-primary` | `#080A0F` | Fond principal du site (body). Noir profond bleuté. | `bg-bc-bg-primary` |
| `bg-secondary` | `#111827` | Fond secondaire, sections alternées, pieds de page. | `bg-bc-bg-secondary` |
| `surface` | `#151A23` | Fond des cartes, éléments surélevés. | `bg-bc-surface` |
| `text-primary` | `#F7F2E8` | Titres, texte très mis en avant. Blanc cassé chaud. | `text-bc-text-primary` |
| `text-secondary` | `#B8B2A6` | Corps de texte principal. Gris chaud lisible. | `text-bc-text-secondary` |
| `text-muted` | `#7E7A72` | Légendes, placeholders, textes secondaires. | `text-bc-text-muted` |
| `accent-champagne` | `#C8A96A` | Boutons principaux, liens au survol, éléments distinctifs. | `text-bc-accent-champagne`, `bg-bc-accent-champagne` |
| `accent-bronze` | `#8A6A3F` | États actifs, bordures d'accentuation, éléments secondaires. | `text-bc-accent-bronze`, `bg-bc-accent-bronze` |
| `border-soft` | `rgba(255, 255, 255, 0.1)` | Lignes de séparation, bordures de cartes. | `border-bc-border` |

## 2. Typographie (Stack)

- **Sans-serif (Base) :** `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif`
- **Serif (Titres) :** `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif` (utilisé par le token `@theme` si configuré, pour l'instant intégré via `font-serif` standard).

## 3. Espacements (Spacing)

L'architecture s'appuie sur l'échelle standard de Tailwind, mais on privilégie les grands espacements :
- `py-24` ou `py-32` pour les marges intérieures de sections (Section padding).
- `gap-8` ou `gap-12` pour les grilles.
- `mb-12` pour séparer les titres du contenu.

## 4. Implémentation technique

Ces tokens sont injectés via la directive `@theme` dans le fichier `src/styles/global.css` pour une utilisation directe avec Tailwind CSS V4.
