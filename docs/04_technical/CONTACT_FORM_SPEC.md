# Contact Form Spec — Berlioz Conseil

**Dernière mise à jour :** 2026-10-15

**Lot de référence :** Corrections audit du 15/10/2026

---

## Périmètre V1

> **Rappel absolu :** Le formulaire de contact V1 est un formulaire de prise de contact simple et qualifié. Il ne doit pas recevoir de données patrimoniales détaillées, ne permet pas le dépôt de documents, et ne transmet aucune donnée à Harvest, O2S ou MoneyPitch.

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
- **Endpoint Formspree configuré :** `https://formspree.io/f/xgorjwkw`
- **Hébergement :** GitHub Pages pour la prévisualisation ; offre du domaine définitif non confirmée.

---

## Champs du formulaire

| Champ | Type | Obligatoire | Notes |
|---|---|:---:|---|
| Prénom | Texte | Oui | |
| Nom | Texte | Oui | |
| Email | Email | Oui | Validation format |
| Téléphone | Texte | Si préférence téléphone (avec JavaScript) | Validation conditionnelle |
| Ville | Texte | Non | |
| Situation professionnelle | Liste | Non | Dirigeant, Indépendant, Salarié, Retraité, Autre |
| Objet de la demande | Liste | Oui | Sélection d'expertise |
| Message | Textarea | Non | Maximum 2 000 caractères, sans données sensibles |
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
| **Statut** | Adresse déclarée par le client ; réglage effectif et réception réelle à prouver sur Formspree |

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

- Les demandes transitent par Formspree, qui peut les conserver et utilise des infrastructures notamment aux États-Unis. Voir sa politique et vérifier les garanties contractuelles et les réglages de conservation.
- La politique du site distingue la conservation des prospects (3 ans après le dernier contact actif) et celle de la relation client, conformément au contenu documentaire retenu. L’application effective de ces délais chez le prestataire reste à vérifier.

---

## Confirmation après envoi

Avec JavaScript, un POST multipart est envoyé à l’endpoint existant avec `Accept: application/json`. Le bouton reste désactivé pendant la transmission et le formulaire porte `aria-busy`. Les réponses HTTP non positives, erreurs réseau et délais dépassés (20 secondes) affichent un message avec retour du focus, conservent les saisies et réactivent le bouton. Aucun renvoi automatique.

Une réponse HTTP positive autorise une confirmation. Un indicateur temporaire en `sessionStorage` est consommé sur `/merci` pour afficher le remerciement ; un accès direct ou un rechargement affiche un texte neutre. Si ce stockage est bloqué, la confirmation reste sur le formulaire et le bouton reste désactivé pour éviter un doublon.

Le champ `_next` a été retiré : la navigation vers `/merci` utilise `withBase` et ne dépend pas du forfait de redirection Formspree. Sans JavaScript, le POST HTML natif reste possible et Formspree affiche sa propre confirmation ; les validations conditionnelles nécessitant JavaScript ne s’appliquent pas.

L’acceptation technique ne prouve pas la réception d’un email au cabinet. Les scénarios UI sont testés avec des réponses locales simulées, sans soumission au prestataire. Il reste à vérifier le compte, le destinataire, les restrictions de domaine, quotas, notifications et réglages anti-spam dans une recette réelle distincte.

Références : [soumission AJAX Formspree](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax), [confidentialité Formspree](https://formspree.io/legal/privacy-policy/).
