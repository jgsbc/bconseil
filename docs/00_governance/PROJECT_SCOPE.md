# Project Scope — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 0

---

## Identité du projet

| Champ | Valeur |
|---|---|
| Nom du projet | Berlioz Conseil — Site vitrine premium |
| Client | Berlioz Conseil |
| Forme juridique | EURL |
| Dirigeant | Aurélien Picard |
| Adresse | 6 rue de la Pelonnière, 69660 Collonges-au-Mont-d'Or |
| SIRET | 85068322800025 |
| ORIAS | 19004281 |
| Association professionnelle | CNCGP |
| Autorités de contrôle | ACPR, AMF |
| Nom de domaine | www.berliozconseil.fr |
| Email principal | contact@berliozconseil.fr |
| Email formulaire (questionnaire) | contact@berliozconseil.com |
| Zone d'intervention | France entière |
| LinkedIn dirigeant | https://fr.linkedin.com/in/aur%C3%A9lien-picard-08230986 |

---

## Point à clarifier — Email

Deux adresses email ont été mentionnées :

- `contact@berliozconseil.fr` — email principal
- `contact@berliozconseil.com` — indiqué dans le questionnaire pour le formulaire

**[À VALIDER]** Quelle adresse doit recevoir les demandes de contact ?  
**Recommandation V1 :** utiliser `contact@berliozconseil.fr` si le domaine principal est `berliozconseil.fr`.

---

## Description de l'activité

Berlioz Conseil intervient dans le conseil patrimonial global, le courtage en assurance, la prévoyance, la retraite, l'épargne, l'investissement financier, la transmission, la protection du dirigeant, l'immobilier et l'accompagnement des dirigeants, familles, indépendants et professions libérales.

**[À VALIDER]** Formulation exacte à valider par Berlioz Conseil avant publication.

---

## Statuts réglementaires déclarés

Les statuts suivants ont été mentionnés dans le questionnaire :

- Courtier en assurance
- Mandataire d'assurance
- CIF — Conseiller en investissements financiers
- IOBSP — Intermédiaire en opérations de banque et services de paiement
- Agent immobilier / Carte T
- Démarchage bancaire ou financier

**[À VALIDER]** Liste exacte et libellés exacts à confirmer par Berlioz Conseil.  
**Règle absolue :** aucun statut ne doit être publié sans validation.

---

## Informations manquantes

| Information | Statut |
|---|---|
| Médiateur officiel | [À FOURNIR] |
| Adresse et modalités du médiateur | [À FOURNIR] |
| Certifications exactes d'Aurélien Picard | [À FOURNIR] |
| Texte de présentation validé | [À FOURNIR] |
| Photo professionnelle ou décision sans photo | [À FOURNIR] |
| Références clients affichables | [À FOURNIR] |
| Téléphone professionnel | [À FOURNIR] |
| Hébergeur retenu | [À FOURNIR] |
| URL exacte espace client O2S / MoneyPitch | [À FOURNIR] |
| Contraintes CNCGP sur la communication | [À VALIDER] |
| Termes autorisés / interdits par la réglementation | [À VALIDER] |
| Email de réception des formulaires | [À VALIDER] |

---

## Positionnement souhaité

Le site doit être :

- premium ;
- confidentiel ;
- intimiste ;
- patrimonial ;
- technique ;
- sélectif ;
- sobre ;
- rassurant.

### Ambiance visuelle

- Sombre, confidentielle
- Illustrations abstraites
- Typographie élégante
- Aucun visuel générique de banque d'images

---

## Objectif principal de la V1

Créer une présence web professionnelle, crédible et haut de gamme permettant :

- de présenter Berlioz Conseil et Aurélien Picard ;
- d'expliquer les domaines d'accompagnement ;
- de rassurer sur le cadre réglementaire ;
- de qualifier les demandes entrantes ;
- d'orienter les clients existants vers leur espace O2S / MoneyPitch ;
- de ne pas manipuler directement de données patrimoniales sensibles.

---

## Pages prévues V1

| Route | Contenu |
|---|---|
| `/` | Accueil — hero, positionnement, piliers, CTA |
| `/expertises` | Domaines d'accompagnement |
| `/a-propos` | Parcours, certifications, posture |
| `/cadre-reglementaire` | ORIAS, CNCGP, ACPR, AMF, médiateur |
| `/acces-client` | Redirection externe O2S / MoneyPitch |
| `/contact` | Formulaire qualifié |
| `/mentions-legales` | Mentions légales obligatoires |
| `/confidentialite` | Politique de confidentialité RGPD |

---

## Stack technique retenue

- Astro
- TypeScript
- Tailwind CSS
- Site statique ou semi-statique
- Aucun back-office en V1
- Aucun stockage de données propre en V1

---

## Contraintes absolues V1

> **La V1 est un site vitrine. Il n'y a aucune API, aucun SSO, aucun espace client maison.**

- L'accès client V1 se fait uniquement par redirection externe vers O2S / MoneyPitch.
- Le site ne doit pas collecter de données patrimoniales détaillées.
- Les identifiants, documents confidentiels et données Harvest sont hors périmètre.
- Aucune intégration Harvest, O2S ou MoneyPitch n'est autorisée en V1.
- Aucun contenu réglementaire ne peut être publié sans validation explicite de Berlioz Conseil.
