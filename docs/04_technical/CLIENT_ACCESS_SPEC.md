# Client Access Spec — Berlioz Conseil

**Dernière mise à jour :** 2026-04-27  
**Lot de référence :** LOT 0  
**Développement prévu :** LOT 5

---

## Périmètre V1

> **Rappel absolu :** La V1 ne contient aucune API, aucun SSO, aucun espace client maison, aucune iframe, aucun login, aucune authentification. L'accès client V1 se fait **uniquement par redirection externe** vers l'environnement officiel O2S / MoneyPitch.

---

## Objectif de la page `/acces-client`

Créer une page de transition premium entre le site Berlioz Conseil et l'espace client externe O2S / MoneyPitch, en donnant une impression de continuité sans créer d'intégration technique.

---

## Ce que la page inclut en V1

| Élément | Description |
|---|---|
| Texte d'introduction | Explication sobre du fonctionnement de l'espace client |
| Rappel de confidentialité | Court message rassurant sur la sécurité des données |
| Bouton principal | "Accéder à mon espace client" → lien externe |
| Mention sous le bouton | Explication de la redirection |
| Design | Aligné sur l'identité Berlioz Conseil — premium et sombre |

---

## Ce que la page n'inclut pas en V1

| Interdit | Raison |
|---|---|
| Login / mot de passe | Pas d'authentification maison |
| Iframe O2S / MoneyPitch | Pas d'intégration technique non documentée |
| Champ identifiant | Hors périmètre — données Harvest hors scope |
| API | Pas d'API en V1 |
| Reverse proxy | Risque sécurité / RGPD |
| Token ou clé secrète | Exposition côté client interdite |
| Stockage local de session | Hors périmètre V1 |
| OAuth / SSO | Reporter à un lot ultérieur |

---

## Outils client déclarés

| Outil | Statut |
|---|---|
| O2S (Harvest) | Déclaré dans le questionnaire |
| MoneyPitch (Harvest) | Déclaré dans le questionnaire |

---

## Informations manquantes

| Information | Statut |
|---|---|
| URL exacte de l'espace client O2S / MoneyPitch | ✅ `https://connect.harvest.fr/accueil` |
| Possibilité de sous-domaine dédié (espace.berliozconseil.fr) | [À VALIDER] pour un lot ultérieur |
| Possibilité de personnalisation logo / couleurs dans O2S | [À VALIDER] pour un lot ultérieur |
| Possibilité de personnalisation dans MoneyPitch | [À VALIDER] pour un lot ultérieur |
| Offre marque blanche disponible | [À VALIDER] pour un lot ultérieur |
| Documentation SSO Harvest | [À FOURNIR] si envisagé en V2 |
| Documentation API Harvest | [À FOURNIR] si envisagé en V2 |

---

## Texte recommandé pour la page V1

> **[À VALIDER]** par Berlioz Conseil avant publication.

**Titre proposé :**
> Votre espace client

**Corps proposé :**
> Votre espace client vous permet d'accéder à vos documents, à l'état de votre patrimoine et aux informations de votre accompagnement dans l'environnement sécurisé mis à disposition par Berlioz Conseil.
>
> Pour garantir la confidentialité de vos données, l'accès est opéré via une solution métier dédiée.

**Bouton :**
> Accéder à mon espace client (Lien : `https://connect.harvest.fr/accueil` cible `_blank`)

**Mention sous le bouton :**
> Vous allez être redirigé vers l'environnement sécurisé Harvest, utilisé pour l'accès aux services clients O2S / MoneyPitch. Berlioz Conseil ne vous demandera jamais de transmettre vos identifiants, documents confidentiels ou informations patrimoniales détaillées via ce site public.

---

## Flux V1

```
Visiteur → Page /acces-client → Clic bouton → Redirection externe vers https://connect.harvest.fr/accueil
```

Aucune donnée n'est échangée entre le site Berlioz Conseil et Harvest en V1. Il s'agit d'une simple redirection HTML sécurisée (`target="_blank" rel="noopener noreferrer"`).

---

## Scénarios d'évolution (post-V1)

| Scénario | Conditions | Lot prévu |
|---|---|---|
| Sous-domaine personnalisé | Documentation Harvest + accord contractuel | Lot séparé |
| Personnalisation logo / couleurs O2S | Documentation Harvest | Lot séparé |
| Marque blanche MoneyPitch | Disponibilité vérifiée | Lot séparé |
| SSO | Documentation officielle + DPA RGPD | Lot séparé — après étude |
| API Harvest | Documentation officielle + qualification des besoins | Lot séparé — après étude |

---

## Règle V1

> Toute évolution de cette page nécessitant une intégration technique avec Harvest, O2S ou MoneyPitch fera l'objet d'un lot séparé, conditionné à la réception de la documentation officielle Harvest et à une analyse RGPD préalable.