# Berlioz Conseil — Corrections de l’audit du 15 octobre 2026

## Résultat et périmètre

Lot implémenté sur la branche `codex/berlioz-audit-corrections`, depuis `d1cc3e131b2ff7c1af7db39f220776f901fcaf1b`. À la livraison locale initiale, aucun commit, push, publication ni soumission réelle au cabinet n’avait été effectué. Le 16 octobre 2026, après validation du rendu et de la taille du logo, l’utilisateur autorise la fusion sur `main` et la publication GitHub Pages qui en découle. Les décisions métier existantes sont conservées ; aucune certification, référence client, photo, rémunération ou promesse financière ajoutée.

L’objectif est de corriger les défauts établis, puis de vérifier le rendu et les parcours sur le site généré. Cette livraison est une validation locale du lot technique et visuel. Elle ne constitue pas une validation réglementaire, une recette sur appareils physiques ou une preuve de réception d’email.

## Corrections reliées aux constats

Complément après revue utilisateur : sur l’entrée, le titre visible « Berlioz Conseil » a été retiré car le logo contient déjà ce nom. Un H1 masqué visuellement conserve l’identification accessible ; le logo n’est pas annoncé une seconde fois. Les captures après correction de l’entrée sont actualisées avec cette version.

Ajustement du 16 octobre 2026 : logo d’entrée légèrement agrandi, de 160 à 184 px sur mobile et de 192 à 224 px sur desktop. Rendu contrôlé à 390×844 et 1440×900, sans débordement et avec les deux actions visibles. Build et contrôles du site généré réussis ; captures actualisées.

| Constat | Correction réalisée | Preuve |
|---|---|---|
| F00 — Halo clair et effet de disque sur le logo d’entrée | Masque CSS limité à la frange opaque du bitmap officiel ; mélange `lighten`, suppression de l’ombre et des calques décoratifs concurrents. Le fichier officiel reste intact. Même contour corrigé dans les autres usages ; fusion du fond de la carte À propos. | Captures avant/après ci-dessous ; `LOGO_USAGE.md`. |
| F01 — Hero trop grand | H1 accueil 32 / 48 / 56 px, interligne 1,15 ; marges et paragraphes redimensionnés. CTA principal raccourci à « Demander un premier échange ». | CTA entièrement visible à 360×800, 390×844 et 1366×768. |
| F02 — Marges répétées | Sections 48 px par côté sur mobile, 64 px sur desktop ; PageHero 48 / 64 px. | Mesures et captures complètes. |
| F03 — Cartes et méthode étroite | Padding des cartes 20 / 24 px, grilles 16 / 24 px. Méthode en une, deux ou trois colonnes, sans ligne décorative devenue incohérente. | Accueil complet mobile et desktop. |
| F04 — Formulaire trop bas | Formulaire en premier dans le DOM et sur mobile ; coordonnées dans la colonne gauche sur desktop. Introduction raccourcie et avertissement près des champs. | Premier champ visible au premier écran. |
| F05 — Header débordant à 768 px | Navigation complète à partir de 1280 px, menu compact en dessous ; suppression des temporisations concurrentes, Échap, focus, fermeture extérieure et au redimensionnement. | Menu visible et cliquable à 768 px ; navigation réelle vers Expertises ; séquences répétées et redimensionnement vérifiés. |
| F06 — Largeurs locales ignorées | Largeur de Container définie dans la couche CSS `components`, sans `max-w-6xl` concurrent. Les classes utilitaires locales priment. | Contact 1024 px, lecture légale et CTA 768 px, À propos 896 / 1024 px. |
| F07 — Pages secondaires monumentales | Typographie et hauteur de À propos réduites ; carte d’accès client et pied de page compacts, navigation/légal en deux colonnes sur mobile. | Captures des pages complètes, accès client au premier écran mobile. |

Autres corrections nécessaires au parcours : email/téléphone cliquables, lien vers la confidentialité depuis le consentement, listes déroulantes avec indication native, autocomplétion, message limité à 2000 caractères, téléphone obligatoire si cette préférence est choisie avec JavaScript.

Le formulaire affiche l’envoi, bloque le bouton, conserve les saisies et rend le focus au message en cas de refus ou de délai dépassé. Une réponse HTTP positive autorise la confirmation. `/merci` reste neutre en accès direct ou après rechargement ; sans stockage navigateur, le succès reste affiché sur le formulaire. Sans JavaScript, le POST HTML natif mène à la confirmation de Formspree. Le champ `_next` a été retiré.

Le pied de page et l’entrée donnent accès aux pages légales. La confidentialité ne prétend plus empêcher techniquement la saisie de données sensibles dans un champ libre ni limiter Formspree au seul routage. L’hébergement de prévisualisation est identifié séparément du domaine définitif. Les liens ORIAS et de médiation sont utilisables. La relecture et la validation du responsable de traitement restent nécessaires.

Les métadonnées de partage utilisent une image existante ; 404 et Merci sont exclues du sitemap et portent `noindex`. La canonique 404 pointe vers le fichier généré. Le README n’annonce plus une vérification TypeScript inexistante. Les contrôles du build sont ajoutés au workflow existant, sans modification du déclenchement du déploiement.

## Validation exécutée

- `npm run build`, puis `npm test`, à la racine : succès, 11 pages et 443 références internes vérifiées.
- Même séquence avec `GITHUB_ACTIONS=true` : succès sous `/bconseil/`. Les références comprennent routes, ressources HTML, images de fond, manifest et icônes. Le script vérifie également consentement, destination du formulaire, confirmation et sitemap.
- Node local 24.14.0 ; workflow GitHub existant en Node 22. Aucun nouveau run distant déclenché.
- 110 combinaisons : 11 pages × 10 viewports, 360×800, 390×844, 430×932, 768×1024, 820×1024, 1024×768, 1280×800, 1366×768, 1440×900 et 1920×1080. Aucun débordement horizontal détecté.
- Inspection de captures complètes des pages principales, utilitaires et réglementaires, sur mobile et desktop ; parcours des sections avant capture pour laisser apparaître leur contenu.
- Navigation : ouverture visible, clic vers Expertises, cinq ouvertures/fermetures successives, Échap et retour du focus, fermeture lors du passage à 1280 px ; retour à l’accueil depuis 404.
- Formulaire : champs requis, préférence téléphone, réponse 422, réponse positive différée, délai supérieur à 20 secondes, stockage navigateur refusé, accès direct à Merci et rechargement. Les réponses sont **simulées localement**, aucune soumission transmise à Formspree.
- Aucune erreur console relevée sur l’onglet du build statique pendant les contrôles.
- `git diff --check` : succès. Les avertissements LF/CRLF viennent de la configuration Windows ; aucune modification de cette configuration effectuée.

| Critère au premier écran | Position approximative après correction | Résultat |
|---|---:|---|
| CTA accueil — 360×800 | 598–642 px | Entièrement visible |
| CTA accueil — 390×844 | 598–642 px | Entièrement visible |
| CTA accueil — 1366×768 | 560–606 px | Entièrement visible |
| Premier champ Contact — 360×800 | 588–638 px | Entièrement visible |
| Premier champ Contact — 390×844 | 588–638 px | Entièrement visible |
| Premier champ Contact — 1366×768 | 521–571 px | Entièrement visible |

Comparaison indicative des hauteurs de page mesurées, en pixels :

| Page | 390×844 avant → après | 1440×900 avant → après |
|---|---:|---:|
| Accueil | 8398 → environ 6500 | 4977 → environ 3800 |
| Expertises | 4711 → environ 3500 | 2838 → environ 2180 |
| À propos | 3263 → environ 2460 | 2389 → environ 1750 |
| Contact | 3966 → environ 2970 | 2400 → environ 1860 |

Les captures, les animations et la présence d’une barre de défilement peuvent faire varier légèrement ces mesures. Leur intérêt est de qualifier les proportions et l’accès aux actions ; elles ne mesurent pas la conversion. L’accueil reste une page longue : ses 18 cartes et son contenu métier sont conservés. Une nouvelle réduction importante supposerait un arbitrage éditorial distinct.

## Preuves consultables

Les fichiers du dossier `preuves-audit-2026-10-15` sont des preuves de recette ; ils ne sont pas servis par le site Astro.

| Surface | Avant | Après |
|---|---|---|
| Entrée desktop | [Capture](preuves-audit-2026-10-15/avant-entree-desktop.jpg) | [Capture](preuves-audit-2026-10-15/apres-entree-desktop.jpg) |
| Entrée mobile | [Capture](preuves-audit-2026-10-15/avant-entree-mobile.jpg) | [Capture](preuves-audit-2026-10-15/apres-entree-mobile.jpg) |
| Accueil mobile | [Capture](preuves-audit-2026-10-15/avant-accueil-mobile.jpg) | [Capture](preuves-audit-2026-10-15/apres-accueil-mobile.jpg) |

[Accueil desktop](preuves-audit-2026-10-15/apres-accueil-desktop.jpg) · [Accueil complet desktop](preuves-audit-2026-10-15/accueil-desktop-complet.jpg) · [Accueil complet mobile](preuves-audit-2026-10-15/accueil-mobile-complet.jpg) · [À propos](preuves-audit-2026-10-15/a-propos-desktop-complet.jpg) · [Contact mobile](preuves-audit-2026-10-15/apres-contact-mobile.jpg) · [Contact desktop](preuves-audit-2026-10-15/apres-contact-desktop.jpg) · [Menu tablette](preuves-audit-2026-10-15/menu-tablette.jpg).

[Mesures responsive](preuves-audit-2026-10-15/mesures-responsive.json) · [Premiers écrans](preuves-audit-2026-10-15/premiers-ecrans.json) · [Succès simulé](preuves-audit-2026-10-15/formulaire-succes-simule.jpg) · [Refus simulé](preuves-audit-2026-10-15/formulaire-erreur-simulee.jpg) · [Délai dépassé simulé](preuves-audit-2026-10-15/formulaire-delai-depasse-simule.jpg).

Le simulateur `preuves-audit-2026-10-15/form-fixture.mjs` permet de rejouer les réponses `error`, `slow`, `timeout` et `storage` sur un preview statique servi en port 4323, sous `/bconseil/`. Il écoute uniquement en local, port 4322, remplace l’action du formulaire par un endpoint local et ne transmet aucune soumission au prestataire. Exemple : `http://127.0.0.1:4322/bconseil/contact?mode=error`.

## Fichiers et traçabilité

- Présentation : `src/styles/global.css`, composants `Container`, `Section`, `Card`, `PageHero`, `Header`, `Footer`, `Button` ; pages `index`, `accueil`, `expertises`, `a-propos`, `acces-client`, `contact`.
- Parcours et métadonnées : `ContactForm.astro`, `merci.astro`, `404.astro`, `BaseLayout.astro`, `astro.config.mjs`.
- Informations publiques : `mentions-legales.astro`, `confidentialite.astro`, `cadre-reglementaire.astro`.
- Contrôles : `scripts/verify-build.mjs`, `package.json`, `.github/workflows/deploy.yml`, `README.md`.
- Documentation existante synchronisée : ACTIVE_LOT, décision D011, risques, tokens de design, usage du logo, spécification du formulaire et checklist. Aucun changement de dépendance ni d’actif de marque.

## Réserves et prochaine étape

1. Vérifier sur le compte Formspree le destinataire déclaré, les notifications, restrictions de domaine, quotas, anti-spam et réception effective d’un message de recette. Le site n’a pas envoyé de message au cabinet pendant ces tests.
2. Faire valider la rédaction de confidentialité, le contrat de sous-traitance, les garanties de transfert et les réglages de conservation. Identifier l’offre d’hébergement définitive avant sa publication. Ne pas assimiler la correction du texte à une certification de conformité.
3. Conserver les décisions client déjà prises : pas de photo, de références ni d’affichage public des outils métier. La documentation interne présente dans le dépôt public nécessite une décision distincte ; aucune suppression ou réécriture d’historique effectuée.
4. Compléter la recette sur Safari, Firefox et appareils physiques. Pas de test d’authentification dans l’espace client, de délivrabilité réelle, de PWA installée ou de score Lighthouse revendiqué.
5. Revue visuelle effectuée par l’utilisateur le 16 octobre 2026 ; commit, PR et fusion sur `main` autorisés. Vérifier séparément le résultat du workflow GitHub Pages et le rendu publié après fusion.

Message de commit suggéré : `fix: corriger le rendu responsive et les parcours Berlioz Conseil`.

Sources primaires consultées : [documentation AJAX Formspree](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax), [politique Formspree](https://formspree.io/legal/privacy-policy/), [GitHub — informations de confidentialité et coordonnées](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement), [CNIL — consentement](https://www.cnil.fr/fr/les-bases-legales/consentement). Les contenus et statuts métier déjà présents sont issus des sources client du dépôt ; leur validité contractuelle actuelle n’est pas certifiée dans ce lot.
