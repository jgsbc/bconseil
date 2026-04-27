# Data Protection Boundaries — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 0

---

## Principe fondamental

> **Le site V1 est un site vitrine. Il ne collecte que les données strictement nécessaires à une prise de contact qualifiée. Il ne stocke, ne traite et ne transmet aucune donnée patrimoniale détaillée.**

---

## Rappels de périmètre

- La V1 est un site vitrine sans API, sans SSO et sans espace client maison.
- L'accès client V1 se fait par redirection externe vers O2S / MoneyPitch.
- Le site ne doit pas collecter de données patrimoniales détaillées.
- Les identifiants, documents confidentiels et données Harvest sont hors périmètre.
- Aucune base de données propre au site ne sera créée en V1.

---

## Données autorisées via le formulaire de contact

Ces données peuvent être collectées via le formulaire public :

| Champ | Type | Obligatoire |
|---|---|:---:|
| Prénom | Texte | Oui |
| Nom | Texte | Oui |
| Email | Email | Oui |
| Téléphone | Texte | Non |
| Ville | Texte | Non |
| Situation professionnelle | Liste | Non |
| Objet de la demande | Liste ou texte | Oui |
| Message libre | Textarea | Non |
| Niveau d'accompagnement recherché (tranche large) | Liste optionnelle | Non |
| Préférence de contact (email / téléphone) | Radio | Non |
| Créneau préféré | Texte / Liste | Non |
| Consentement RGPD | Case à cocher | Oui |

---

## Qualification patrimoniale — Règles

Si un champ de qualification patrimoniale est utilisé, il doit respecter les règles suivantes :

- **Optionnel** — jamais obligatoire.
- **Formulé par tranche large**, pas par montant exact.
- **Accompagné d'une option** : "Je préfère l'évoquer lors du rendez-vous".
- **Validé par Berlioz Conseil** avant publication.

Exemple de formulation acceptable :

```
Patrimoine financier approximatif à accompagner (optionnel) :
○ Moins de 100 k€
○ 100 k€ à 250 k€
○ 250 k€ à 500 k€
○ 500 k€ à 1 M€
○ Plus de 1 M€
○ Je préfère l'évoquer lors du rendez-vous
```

---

## Données strictement interdites en V1

Le site ne doit jamais collecter :

- identifiants O2S / MoneyPitch / Harvest ;
- mots de passe ou codes d'accès ;
- documents confidentiels (pièces jointes interdites) ;
- avis d'imposition ;
- relevés bancaires ou de compte ;
- contrats d'assurance ;
- pièces d'identité ;
- informations patrimoniales détaillées (montants exacts, positions, etc.) ;
- données bancaires (IBAN, RIB, coordonnées de carte) ;
- données de santé ;
- données relatives à des mineurs ;
- informations fiscales détaillées ;
- données sensibles au sens de l'article 9 RGPD.

---

## Message obligatoire sur le formulaire

Le message suivant doit apparaître de façon visible sur le formulaire de contact :

> Pour votre sécurité, merci de ne pas transmettre d'identifiants, de documents confidentiels ou d'informations patrimoniales détaillées via ce formulaire.

---

## Flux des données en V1

```
Visiteur → Formulaire → Email vers contact@berliozconseil.fr [À VALIDER]
                      → Aucun stockage en base de données
                      → Aucune transmission à Harvest / O2S / MoneyPitch
```

---

## Informations à définir

| Point | Statut |
|---|---|
| Email de réception des demandes | [À VALIDER] — `.fr` ou `.com` |
| Durée de conservation des demandes de contact | [À VALIDER] |
| Outil de traitement du formulaire | [À VALIDER] — Formspree, Basin, Netlify Forms, etc. |
| Outil analytics retenu (cookies) | [À VALIDER] |
| Hébergeur | [À FOURNIR] |

---

## Responsabilités

| Rôle | Entité |
|---|---|
| Responsable du traitement | Berlioz Conseil (EURL) — Aurélien Picard |
| Sous-traitant formulaire | [À FOURNIR] selon outil retenu |
| Sous-traitant hébergement | [À FOURNIR] |
| Sous-traitant analytics | [À VALIDER] selon outil retenu |

---

## Règle de validation

> Aucune évolution du formulaire, aucun ajout de champ et aucun changement d'outil de traitement ne peut être effectué sans mise à jour de ce document et validation par Berlioz Conseil.