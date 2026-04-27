# Harvest / O2S / MoneyPitch — Integration Study

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 0  
**Statut :** Étude préliminaire — Aucune intégration autorisée en V1

---

## Statut en V1

> **Aucune intégration API Harvest, O2S ou MoneyPitch n'est autorisée en V1.**
>
> Les identifiants, documents confidentiels et données Harvest sont hors périmètre du site.

---

## Outils concernés

| Outil | Éditeur | Usage déclaré |
|---|---|---|
| O2S | Harvest | Espace client, reporting patrimonial |
| MoneyPitch | Harvest | Espace client digital, interface mobile |

---

## Besoin réel identifié

Le besoin prioritaire identifié dans le questionnaire est une **continuité d'expérience** entre le site Berlioz Conseil et l'espace client externe.

Ce n'est pas, à ce stade, un besoin d'intégration API métier.

---

## Scénario V1 — Retenu

**Lien externe ou redirection officielle depuis `/acces-client`.**

- Page `/acces-client` avec texte de transition premium.
- Bouton renvoyant vers l'URL officielle O2S / MoneyPitch.
- Aucune donnée échangée entre le site et Harvest.
- L'URL OIDC dynamique transmise précédemment a été rejetée pour des raisons de sécurité et de stabilité.
- URL exacte retenue : **https://connect.harvest.fr/accueil**

---

## Scénario V1+ — Étude de personnalisation (sans intégration technique)

Si Harvest le permet sans intégration API :

| Option | Condition |
|---|---|
| Personnalisation du logo dans O2S | À vérifier auprès de Harvest |
| Personnalisation des couleurs | À vérifier auprès de Harvest |
| Sous-domaine dédié (espace.berliozconseil.fr) | À vérifier auprès de Harvest |
| URL client personnalisée | À vérifier auprès de Harvest |
| Marque blanche ou semi-marque blanche | À vérifier auprès de Harvest |

> Ces options relèvent de la configuration de la plateforme Harvest, pas du développement du site.

---

## Scénario V2 — Intégration technique (post-V1)

Toute intégration technique ne peut être envisagée qu'après :

1. Réception de la documentation officielle Harvest (SSO, API).
2. Analyse de la responsabilité RGPD et signature d'un DPA si nécessaire.
3. Évaluation de la sécurité (périmètre des données accessibles).
4. Décision formelle Berlioz Conseil dans un nouveau lot.

---

## Questions à poser à Harvest

| # | Question |
|---|---|
| 1 | MoneyPitch ou O2S permet-il une URL client personnalisée ? |
| 2 | Est-il possible d'utiliser un sous-domaine de type `espace.berliozconseil.fr` ? |
| 3 | Est-il possible de personnaliser logo et couleurs dans O2S ? |
| 4 | Est-il possible de personnaliser logo et couleurs dans MoneyPitch ? |
| 5 | Existe-t-il une offre marque blanche ? |
| 6 | Existe-t-il une documentation SSO officielle ? |
| 7 | Quel protocole d'authentification est utilisé (OAuth2, SAML…) ? |
| 8 | Existe-t-il une documentation API officielle ? |
| 9 | Un environnement de recette / sandbox est-il disponible ? |
| 10 | Quelles données seraient accessibles via API ? |
| 11 | Quelles responsabilités RGPD sont prévues contractuellement ? |
| 12 | Existe-t-il un DPA ou accord de sous-traitance à signer ? |
| 13 | Quelles sont les conditions d'usage des marques Harvest / O2S / MoneyPitch sur un site externe ? |
| 14 | Quelles sont les limites contractuelles d'intégration côté site web externe ? |
| 15 | Harvest est-il certifié ISO 27001 ou équivalent ? |

---

## Interdictions en V1

| Interdit | Raison |
|---|---|
| Iframe non documentée | Risque sécurité / RGPD non évalué |
| Reverse proxy | Masque l'origine des données — interdit |
| Récupération de données client Harvest | Hors périmètre RGPD du site |
| Affichage de données patrimoniales | Hors périmètre V1 |
| Stockage de données Harvest | Hors périmètre V1 |
| Authentification maison liée à Harvest | Risque sécurité non évalué |
| Exposition de clés API côté client | Risque critique de sécurité |
| Intégration OAuth / SSO sans documentation | Interdit sans documentation officielle |

---

## Décision actuelle

**Option retenue pour V1 :** Lien externe ou redirection officielle depuis `/acces-client`.

**Prochaine étape :** Transmettre les questions listées ci-dessus à Harvest et attendre la documentation officielle avant tout développement d'intégration.

---

## Statut global

| Étape | Statut |
|---|---|
| Besoin identifié | ✅ |
| Scénario V1 défini | ✅ |
| URL espace client stable retenue | ✅ `https://connect.harvest.fr/accueil` |
| URL OIDC dynamique (rejetée) | ❌ Non utilisée |
| Documentation Harvest reçue | ❌ Non reçue |
| Analyse RGPD / DPA | ❌ Non réalisée |
| Intégration autorisée | ❌ Hors périmètre V1 |