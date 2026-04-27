# Data Protection Boundaries — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 4A

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
| Objet de la demande | Liste | Oui |
| Message libre | Textarea | Non |
| Préférence de contact (email / téléphone) | Radio | Non |
| Créneau préféré | Texte | Non |
| Consentement RGPD | Case à cocher | Oui |

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

## Flux des données en V1 (Prévu Lot 4B)

```
Visiteur → Formulaire HTML → Endpoint Formspree sécurisé → Email vers contact@berliozconseil.fr
                         → Aucun stockage local de base de données
                         → Aucune transmission à Harvest / O2S / MoneyPitch
```

---

## Durée de conservation

**Recommandation V1 :** Les données des prospects non transformés seront conservées pour une durée de **3 ans maximum** à compter du dernier contact émanant du prospect. [À VALIDER]

---

## Responsabilités & Sous-traitants

| Rôle | Entité |
|---|---|
| Responsable du traitement | Berlioz Conseil (EURL) — Aurélien Picard |
| Sous-traitant formulaire | Formspree |
| Hébergement | OVH SAS (offre exacte à fournir) |
| Sous-traitant analytics | Aucun en V1 |

---

## Règle de validation

> Aucune évolution du formulaire, aucun ajout de champ et aucun changement d'outil de traitement ne peut être effectué sans mise à jour de ce document et validation par Berlioz Conseil.