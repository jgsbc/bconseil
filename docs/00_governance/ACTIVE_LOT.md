# Active Lot — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Statut :** LOT 1 — Terminé

---

## Lot courant

**LOT 1 — Bootstrap technique Astro (Terminé)**

---

## Objectif du LOT 0

Transformer les données du questionnaire de cadrage en base documentaire exploitable avant tout développement du site.

Ce lot doit permettre de clarifier :

- le périmètre exact de la V1 ;
- les informations déjà connues et intégrées ;
- les informations manquantes [À FOURNIR] ;
- les informations incertaines [À VALIDER] ;
- les risques réglementaires identifiés ;
- les limites de sécurité et de collecte de données ;
- les règles de traitement du formulaire de contact ;
- la stratégie d'accès client externe vers O2S / MoneyPitch.

---

## Périmètre V1 — Validé

La V1 est un **site vitrine premium, sobre et confidentiel** pour Berlioz Conseil.

### Inclus en V1

- page d'accueil (`/`) ;
- page expertises (`/expertises`) ;
- page à propos / parcours / certifications (`/a-propos`) ;
- page cadre réglementaire (`/cadre-reglementaire`) ;
- page accès client avec redirection externe vers O2S / MoneyPitch (`/acces-client`) ;
- page contact (`/contact`) ;
- mentions légales (`/mentions-legales`) ;
- politique de confidentialité (`/confidentialite`).

### Hors périmètre V1 — Absolu

La V1 **exclut strictement** :

- toute intégration API Harvest, O2S ou MoneyPitch ;
- tout SSO ou authentification maison ;
- toute iframe vers Harvest / O2S / MoneyPitch ;
- tout espace client maison ;
- toute authentification client sur le site ;
- tout stockage de données patrimoniales ;
- tout dépôt de documents confidentiels ;
- toute collecte d'identifiants ;
- toute collecte de données patrimoniales détaillées ;
- toute promesse commerciale ou réglementaire non validée par Berlioz Conseil.

---

## Stack technique retenue

- Astro
- TypeScript
- Tailwind CSS
- Site statique ou semi-statique
- Aucun back-office en V1
- Aucun stockage de données propre en V1

---

## Règles d'exécution absolues

- Ne rien inventer sur les statuts réglementaires.
- Ne rien inventer sur les certifications.
- Ne rien inventer sur le médiateur.
- Ne rien inventer sur les partenaires ou compagnies.
- Marquer les informations manquantes avec **[À FOURNIR]**.
- Marquer les informations incertaines avec **[À VALIDER]**.
- Ne pas développer d'API dans ce lot.
- Ne pas créer de formulaire collectant des données patrimoniales détaillées.
- Le site ne doit pas collecter de données patrimoniales détaillées.
- Les identifiants, documents confidentiels et données Harvest sont hors périmètre.
- Toute décision structurante doit être ajoutée à `DECISIONS_LOG.md`.

---

## Critères de sortie du LOT 0

Le lot est terminé lorsque :

- [ ] les documents de cadrage sont créés et à jour ;
- [ ] les informations connues sont intégrées dans chaque document ;
- [ ] les informations manquantes sont listées et marquées [À FOURNIR] ;
- [ ] les risques sont identifiés dans `RISK_REGISTER.md` ;
- [ ] le périmètre V1 est verrouillé ;
- [ ] aucune API, aucun SSO et aucun espace client maison n'ont été ajoutés ;
- [ ] Berlioz Conseil peut valider le cadrage avant le LOT 1.

---

## Lots suivants prévus

| Lot | Objet |
|---|---|
| LOT 1 | Design system, identité visuelle, ambiance |
| LOT 2 | Contenu rédactionnel et pages statiques |
| LOT 3 | Développement du site (bootstrap technique) |
| LOT 4 | Formulaire de contact |
| LOT 5 | Page accès client et redirections |
| LOT 6 | Pages légales et conformité finale |
| LOT 7 | Tests, déploiement et mise en ligne |