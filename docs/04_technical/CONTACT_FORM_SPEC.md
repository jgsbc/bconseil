# Contact Form Spec — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 0  
**Développement prévu :** LOT 4

---

## Périmètre V1

> **Rappel absolu :** Le formulaire de contact V1 est un formulaire de prise de contact simple et qualifié. Il ne collecte pas de données patrimoniales détaillées, ne permet pas le dépôt de documents, et ne transmet aucune donnée à Harvest, O2S ou MoneyPitch.

- Aucune API en V1.
- Aucun SSO en V1.
- Aucune pièce jointe.
- Aucun identifiant.
- Aucun stockage en base de données propre au site.

---

## Objectif du formulaire

Permettre à un prospect de formuler une demande qualifiée sans transmettre d'informations sensibles, et permettre à Berlioz Conseil de recevoir une notification automatique.

---

## Champs du formulaire

| Champ | Type | Obligatoire | Notes |
|---|---|:---:|---|
| Prénom | Texte | Oui | |
| Nom | Texte | Oui | |
| Email | Email | Oui | Validation format |
| Téléphone | Texte | Non | |
| Ville | Texte | Non | |
| Situation professionnelle | Liste | Non | Dirigeant, Indépendant, Salarié, Retraité, Autre |
| Objet de la demande | Liste | Oui | Voir options ci-dessous |
| Message | Textarea | Non | Limité en caractères |
| Niveau d'accompagnement (optionnel) | Liste | Non | Voir options ci-dessous |
| Préférence de contact | Radio | Non | Email / Téléphone / Indifférent |
| Créneau préféré | Texte / Liste | Non | |
| Consentement RGPD | Case à cocher | Oui | Obligatoire avant envoi |

### Options — Objet de la demande

- Conseil patrimonial global
- Assurance et prévoyance
- Retraite
- Épargne et investissement
- Transmission
- Protection du dirigeant
- Protection de la famille
- Immobilier
- Autre

### Options — Niveau d'accompagnement (champ optionnel)

**Option recommandée — par type de besoin :**

- Premier échange patrimonial
- Organisation / structuration globale
- Protection familiale
- Protection du dirigeant
- Retraite / transmission
- Investissement / allocation
- Je préfère l'évoquer lors du rendez-vous

**Option alternative — par tranche patrimoniale (si Berlioz Conseil insiste) :**

> Ce champ doit rester **optionnel** et **validé par Berlioz Conseil** avant publication.

- Moins de 100 k€
- 100 k€ à 250 k€
- 250 k€ à 500 k€
- 500 k€ à 1 M€
- Plus de 1 M€
- Je préfère l'évoquer lors du rendez-vous

---

## Message de sécurité obligatoire

Ce message doit apparaître de façon visible sur le formulaire, avant ou après les champs :

> Pour votre sécurité, merci de ne pas transmettre d'identifiants, de documents confidentiels ou d'informations patrimoniales détaillées via ce formulaire.

---

## Champs et données interdits

- montant exact du patrimoine ou des actifs ;
- documents confidentiels (pièces jointes interdites) ;
- identifiants O2S / MoneyPitch / Harvest ;
- informations fiscales détaillées ;
- coordonnées bancaires ;
- données de santé ;
- pièces d'identité.

---

## Adresse de réception

| Source | Adresse |
|---|---|
| Email principal | contact@berliozconseil.fr |
| Email formulaire (questionnaire) | contact@berliozconseil.com |
| **Statut** | **[À VALIDER]** par Berlioz Conseil |

---

## Notification automatique

Le questionnaire indique que Berlioz Conseil souhaite recevoir une notification automatique à chaque demande.

> L'outil de traitement du formulaire doit donc envoyer un email de notification à l'adresse validée [À VALIDER].

---

## Protection anti-spam

| Mesure | Statut |
|---|---|
| Honeypot (champ caché) | À implémenter |
| CAPTCHA (Turnstile Cloudflare ou équivalent) | Si nécessaire selon volume de spam |
| Validation email côté client | À implémenter |
| Limitation des caractères | À implémenter |
| Aucune pièce jointe | ✅ Confirmé |
| Rate limiting | Selon outil retenu |

---

## Stockage

> **Aucun stockage en base de données propre au site en V1.**

Les demandes transitent par l'outil de formulaire vers l'email de Berlioz Conseil uniquement.

---

## Outils envisageables

| Outil | Type | Notes |
|---|---|---|
| Formspree | SaaS | Simple, fiable, sans back-end |
| Basin | SaaS | Alternatif à Formspree |
| Netlify Forms | Infra | Si hébergement Netlify retenu |
| Endpoint serveur Astro | Maison | Si hébergement compatible SSR |

> **[À VALIDER]** Choix final à décider au LOT 4 selon l'hébergeur retenu.

---

## Confirmation après envoi

Un message de confirmation sobre doit s'afficher après l'envoi :

> Votre demande a bien été transmise. Berlioz Conseil vous répondra dans les meilleurs délais.

**[À VALIDER]** Formulation exacte à confirmer par Berlioz Conseil.