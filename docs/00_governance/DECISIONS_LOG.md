# Decisions Log — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 0

Toute décision structurante doit être enregistrée ici avec sa date, sa justification et son statut.

---

## D001 — 2026-04-27 — V1 vitrine sans API

**Décision :** La V1 du projet est un site vitrine premium sans intégration API Harvest, O2S ou MoneyPitch.

**Détail :** Le site proposera une page `/acces-client` qui redirigera vers l'espace client officiel O2S / MoneyPitch via un lien externe.

**Justification :** Cette approche préserve la sécurité, limite le périmètre RGPD, évite la gestion d'identifiants et empêche toute manipulation de données patrimoniales sensibles sur le site public.

**Statut :** ✅ Validé pour V1

---

## D002 — 2026-04-27 — Pas d'espace client maison

**Décision :** Aucun compte utilisateur, login, mot de passe ou espace client maison ne sera créé dans la V1.

**Détail :** L'authentification et les données clients restent portées exclusivement par Harvest / O2S / MoneyPitch.

**Justification :** Réduction du risque de sécurité, élimination de la responsabilité SSO, et maintien de la conformité RGPD sans gestion de base utilisateurs propre.

**Statut :** ✅ Validé pour V1

---

## D003 — 2026-04-27 — Formulaire de contact limité

**Décision :** Le formulaire de contact ne doit pas collecter de documents confidentiels, d'identifiants, ni d'informations patrimoniales détaillées.

**Détail :** Un message de sécurité obligatoire doit apparaître sur le formulaire pour rappeler aux utilisateurs de ne pas transmettre de données sensibles.

**Justification :** Réduction du risque RGPD, limitation de responsabilité, cohérence avec le positionnement premium et confidentiel du cabinet.

**Statut :** ✅ Validé pour V1

---

## D004 — 2026-04-27 — Contenu réglementaire à valider

**Décision :** Tout contenu réglementaire, statutaire, professionnel ou de conformité doit être fourni ou explicitement validé par Berlioz Conseil avant publication.

**Détail :** Les fichiers de cadrage marquent avec [À FOURNIR] les informations manquantes et avec [À VALIDER] les informations incertaines.

**Justification :** Le site concerne une activité réglementée sous contrôle ACPR et AMF. Aucune mention sensible ne doit être inventée ni publiée sans accord.

**Statut :** ✅ Validé pour V1

---

## D005 — 2026-04-27 — Pas d'intégration Harvest en V1

**Décision :** Aucune intégration API, iframe, reverse proxy ou SSO Harvest n'est autorisée en V1.

**Détail :** L'étude d'une intégration future (SSO, marque blanche, sous-domaine) est documentée dans `HARVEST_INTEGRATION_STUDY.md` et sera reprise dans un lot ultérieur après réception de la documentation officielle Harvest.

**Justification :** Absence de documentation contractuelle Harvest, risque sécurité non évalué, périmètre RGPD non borné côté Harvest.

**Statut :** ✅ Validé pour V1

---

## D006 — 2026-04-27 — Stack technique Astro

**Décision :** Le site sera développé avec Astro + TypeScript + Tailwind CSS en site statique ou semi-statique.

**Justification :** Performance optimale pour un site vitrine, SEO natif, aucun back-end requis en V1, déploiement simple.

**Statut :** ✅ Validé pour V1 — [À VALIDER] choix de l'hébergeur

---

## D007 — 2026-04-27 — Email de contact à confirmer

**Décision :** L'email de réception des demandes de contact sera `contact@berliozconseil.fr` sauf instruction contraire.

**Détail :** Le questionnaire mentionne `contact@berliozconseil.com`, mais le domaine principal est `berliozconseil.fr`. Une confirmation est nécessaire.

**Statut :** [À VALIDER] par Berlioz Conseil

---

## D008 — 2026-04-27 — Ambiance et ton éditorial

**Décision :** L'ambiance visuelle et le ton éditorial du site sont définis comme suit.

**Ton :** premium, confidentiel, intimiste, patrimonial, technique, sélectif.  
**Ambiance :** sombre, confidentielle, illustrations abstraites, typographie élégante.

**Justification :** Aligné avec le positionnement cible et les instructions du questionnaire de cadrage.

**Statut :** ✅ Validé pour V1