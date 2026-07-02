# Pack documentaire — Berlioz Conseil

Date de génération : 2026-07-02

Ce pack est destiné à être intégré dans le repo `bconseil`, principalement sous le dossier `docs/`.

## Objectif

Figer une source de vérité claire avant modification visible du site Berlioz Conseil.

Ce pack sert à éviter :
- les corrections éditoriales au doigt mouillé ;
- les incohérences entre questionnaire, document d’entrée en relation et discussions ;
- les formulations réglementaires risquées ;
- les modifications techniques qui exposeraient des documents source ou casseraient GitHub Pages.

## Sources exploitées

1. Questionnaire Google Forms exporté en Excel, avec deux réponses :
   - réponse ancienne du 27/04/2026 ;
   - réponse récente du 11/05/2026, retenue comme source principale pour le positionnement.
2. Document d’entrée en relation — Aurélien Picard, retenu comme source prioritaire pour le réglementaire.
3. Logo rond Berlioz Conseil fourni en PNG, 1024 × 1024 px, RGBA.
4. Discussions de cadrage précédentes, utilisées comme contexte secondaire.

## Important

Ne pas mettre les documents source confidentiels dans `public/`.
Le document d’entrée en relation, le questionnaire et les pièces réglementaires ne doivent pas être exposés dans le site publié sans décision explicite.

## Ordre d’intégration recommandé

1. Copier le dossier `docs/` du pack dans le repo.
2. Relire `docs/06_delivery/CLIENT_OPEN_POINTS.md`.
3. Lire `docs/06_delivery/CLIENT_RESOLVED_POINTS.md` pour les points déjà tranchés.
4. Lire `docs/06_delivery/CLIENT_OPEN_POINTS.md` pour les vrais points encore ouverts.
5. Lancer ensuite le lot 14C : corrections réglementaires visibles.
6. Lancer ensuite le lot 14D : réécriture éditoriale et SEO.
7. Lancer ensuite le lot 14E : logo, favicon, PWA.


## Mise à jour v2

Le fichier `CLIENT_OPEN_POINTS.md` a été resserré : les questions déjà répondues par la réponse récente au questionnaire ou par le document d’entrée en relation ont été sorties des points ouverts. Elles sont désormais consolidées dans `CLIENT_RESOLVED_POINTS.md`.
