# SEO Brief — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 0

---

## Objectif SEO V1

Créer une base propre pour l'indexation du site Berlioz Conseil sans viser une stratégie de contenu agressive dès le lancement.

**Priorité V1 :**
1. Être trouvable par le nom "Berlioz Conseil"
2. Être trouvable par le nom "Aurélien Picard" + conseil patrimonial
3. Être trouvable pour les recherches géolocalisées (Lyon, Rhône, Collonges-au-Mont-d'Or)
4. Poser une base technique propre pour un SEO futur plus ambitieux

---

## Mots-clés cibles

> **[À VALIDER]** par Berlioz Conseil — aucun mot-clé lié à des promesses réglementaires ne peut être retenu sans validation.

### Mots-clés de marque

- Berlioz Conseil
- Aurélien Picard conseil patrimonial

### Mots-clés métier

| Mot-clé | Intention | Pertinence |
|---|---|---|
| conseil patrimonial | Informationnelle / commerciale | Forte |
| conseiller en gestion de patrimoine | Informationnelle | Forte |
| gestion de patrimoine | Générique | Moyenne |
| conseiller financier indépendant | [À VALIDER] — formulation réglementaire | À valider |
| conseil en investissement | [À VALIDER] | À valider |
| protection du dirigeant | Commerciale | Forte |
| transmission patrimoine | Informationnelle | Forte |
| prévoyance dirigeant | Commerciale | Forte |
| retraite indépendant | Commerciale | Forte |
| assurance vie patrimoine | Informationnelle | Moyenne |

### Mots-clés géographiques

| Mot-clé | Pertinence |
|---|---|
| conseil patrimonial Lyon | Forte |
| conseiller patrimonial Rhône | Forte |
| gestion de patrimoine Lyon | Forte |
| Collonges-au-Mont-d'Or conseiller | Faible (niche) |
| conseil patrimonial France entière | Moyenne |

---

## Pages SEO prioritaires

| Page | Title cible (proposition) | Priorité |
|---|---|:---:|
| `/` | Berlioz Conseil — Conseil patrimonial premium | 1 |
| `/a-propos` | Aurélien Picard — Conseiller en gestion de patrimoine | 2 |
| `/expertises` | Expertises patrimoniales — Berlioz Conseil | 2 |
| `/cadre-reglementaire` | Cadre réglementaire — ORIAS, CNCGP, ACPR, AMF | 3 |
| `/contact` | Prendre contact — Berlioz Conseil | 3 |

> **[À VALIDER]** Tous les titles et meta descriptions doivent être confirmés par Berlioz Conseil.

---

## Contraintes SEO réglementaires

Le SEO ne doit pas pousser à la surpromesse ni utiliser des termes réglementairement sensibles.

**À éviter sans validation :**

- "meilleur conseiller patrimonial" ou superlatifs non vérifiables ;
- "rendement garanti" ;
- "placement sans risque" ;
- "optimisation fiscale garantie" ;
- "performance assurée" ;
- "indépendance totale" ;
- tout terme pouvant être qualifié de publicité trompeuse.

---

## Métadonnées à prévoir — Chaque page

| Balise | Obligatoire |
|---|:---:|
| `<title>` | Oui |
| `<meta name="description">` | Oui |
| `<link rel="canonical">` | Oui |
| `<meta property="og:title">` | Oui |
| `<meta property="og:description">` | Oui |
| `<meta property="og:image">` | Recommandé |
| `<meta property="og:url">` | Oui |
| `<meta name="robots">` | Selon page |

---

## Éléments techniques SEO à prévoir

| Élément | Statut |
|---|---|
| `sitemap.xml` | À générer automatiquement via Astro |
| `robots.txt` | À créer — pages légales à indexer, pas `/acces-client` [À VALIDER] |
| Favicon | [À FOURNIR] — logotype ou initiales |
| Données structurées (`LocalBusiness`, `Person`) | À valider — contenu réglementaire |
| Performance mobile (Core Web Vitals) | À mesurer avant mise en ligne |
| Accessibilité (WCAG AA) | Cible recommandée |
| HTTPS | Obligatoire |
| URL propres (slug lisibles) | Oui — déjà définis dans PROJECT_SCOPE.md |

---

## Données structurées — Schema.org

> **[À VALIDER]** Les données structurées doivent être exactes. Ne pas renseigner de champ non vérifié.

Type `LocalBusiness` / `FinancialService` — champs à remplir :

```json
{
  "@type": "FinancialService",
  "name": "Berlioz Conseil",
  "legalName": "Berlioz Conseil EURL",
  "url": "https://www.berliozconseil.fr",
  "address": {
    "streetAddress": "6 rue de la Pelonnière",
    "addressLocality": "Collonges-au-Mont-d'Or",
    "postalCode": "69660",
    "addressCountry": "FR"
  },
  "email": "contact@berliozconseil.fr",
  "telephone": "[À FOURNIR]",
  "founder": {
    "@type": "Person",
    "name": "Aurélien Picard"
  },
  "areaServed": "France"
}
```

---

## Règle SEO générale

> Le SEO de Berlioz Conseil doit être sobre, exact et crédible. La visibilité passe par la qualité du contenu validé, pas par l'optimisation agressive.