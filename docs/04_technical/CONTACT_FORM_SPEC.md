# Contact Form Spec — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 4B  

---

## Périmètre V1

> **Rappel absolu :** Le formulaire de contact V1 est un formulaire de prise de contact simple et qualifié. Il ne collecte pas de données patrimoniales détaillées, ne permet pas le dépôt de documents, et ne transmet aucune donnée à Harvest, O2S ou MoneyPitch.

- Aucune API maison en V1.
- Aucun SSO en V1.
- Aucune pièce jointe.
- Aucun identifiant.
- Aucun stockage en base de données propre au site.

---

## Objectif du formulaire

Permettre à un prospect de formuler une demande qualifiée sans transmettre d'informations sensibles, et permettre à Berlioz Conseil de recevoir une notification automatique via un prestataire de messagerie sécurisé.

---

## Architecture technique (Active - Lot 4B)

- **Prestataire retenu :** Formspree
- **Endpoint Formspree (Actif) :** `https://formspree.io/f/xgorjwkw`
- **Hébergement :** OVH (offre exacte à fournir)

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
| Objet de la demande | Liste | Oui | Sélection d'expertise |
| Message | Textarea | Non | Limité en caractères |
| Préférence de contact | Radio | Non | Email / Téléphone / Indifférent |
| Créneau préféré | Texte | Non | Matin, après-midi... |
| Consentement RGPD | Case à cocher | Oui | Obligatoire avant envoi |

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
| Email de notification Formspree | contact@berliozconseil.fr |
| **Statut** | **[À VALIDER]** par Berlioz Conseil |

---

## Protection anti-spam

Stratégie retenue pour la V1 :
- Honeypot Formspree (champ caché `_gotcha`).
- Validation front-end stricte.
- Interdiction totale des pièces jointes.
- Cloudflare Turnstile ou équivalent seulement si le spam s'avère problématique post-déploiement.

---

## Stockage et conservation

> **Aucun stockage en base de données propre au site en V1.**

- Les demandes transitent par Formspree.
- La durée de conservation recommandée des données de prospect non transformé est fixée à 3 ans maximum [À VALIDER].

---

## Confirmation après envoi

Le formulaire redirige automatiquement vers la page statique `/merci` grâce au champ caché `_next`. Il est recommandé de configurer également la page d'atterrissage personnalisée (`/merci`) directement dans les paramètres d'interface de Formspree si cette option est nécessaire pour forcer la redirection.