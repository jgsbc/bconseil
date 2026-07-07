# Berlioz Conseil — Points résolus par les sources client

Date de mise à jour : 2026-07-02

## Rôle

Ce document regroupe les points qui ne doivent plus être traités comme des questions ouvertes, car ils sont tranchés par :

1. la réponse récente au questionnaire de cadrage ;
2. le document d’entrée en relation ;
3. les arbitrages de conformité nécessaires lorsque les deux sources se contredisent.

---

## 1. Identité et coordonnées

| Élément | Valeur retenue | Source | Décision d’usage web |
|---|---|---|---|
| Nom commercial | Berlioz Conseil | Questionnaire récent + DER | Afficher tel quel |
| Forme juridique | SARL | Questionnaire récent + DER | Corriger partout si une ancienne forme juridique apparaît |
| Capital | 1 500 € | DER | Mentions légales / cadre réglementaire |
| Adresse | 6 rue de la Pelonniere, 69660 Collonges-au-Mont-d’Or | Questionnaire récent + DER | Contact + mentions légales |
| Téléphone | 06 03 07 10 11 | Questionnaire récent + DER | Contact + mentions légales |
| Email public | contact@berliozconseil.fr | Questionnaire récent | Email public principal confirmé pour le site, le contact, le formulaire et le RGPD |
| Email DER | aurelien.picard@berliozconseil.fr | DER | Source documentaire uniquement ; ne pas afficher comme email public principal |
| SIREN | 850 683 228 RCS Lyon | DER | Mentions légales |
| SIRET | 850 683 228 00025 | Questionnaire récent | Mentions légales |
| TVA | FR 66 850683228 | DER | Mentions légales |
| Domaine | berliozconseil.fr | Questionnaire récent | SEO / canonical final |
| Zone d’intervention SEO | Rhône-Alpes | Questionnaire récent | Accueil / SEO local |

---

## 2. Positionnement et cible

| Élément | Valeur retenue | Source | Décision d’usage web |
|---|---|---|---|
| Description cabinet | Accompagnement des particuliers, dirigeants et professions libérales dans l’organisation, le développement et la transmission du patrimoine | Questionnaire récent | Base éditoriale Accueil / À propos |
| Vision métier | Approche globale des sujets financiers, fiscaux, juridiques et successoraux | Questionnaire récent | À reformuler avec prudence |
| Cible | Particuliers, dirigeants, professions libérales, familles, retraités, cadres supérieurs, entrepreneurs | Questionnaire récent | Accueil / Expertises |
| Client idéal | Revenus élevés, patrimoine significatif financier/immobilier | Questionnaire récent | Ne pas écrire brutalement ; utiliser “enjeux patrimoniaux significatifs” |
| Ton | Premium, confidentiel, sobre, intimiste, moderne, patrimonial, familial, technique | Questionnaire récent | Direction éditoriale |
| Ambiance visuelle | Sombre / confidentiel | Questionnaire récent | Direction design déjà cohérente |
| Présentation personnelle | Courte et sobre | Questionnaire récent | Page À propos concise, sans transformation en CV |

---

## 3. Services et formulations

| Sujet | Valeur retenue | Source | Décision d’usage web |
|---|---|---|---|
| Services prioritaires | Épargne, gestion de patrimoine, conseil patrimonial, investissement financier | Questionnaire récent | À mettre au cœur de l’Accueil et Expertises |
| Services larges | Assurance, prévoyance, retraite, épargne, gestion de patrimoine, conseil patrimonial, investissements financiers, immobilier, transmission, protection dirigeant/famille, fiscalité | Questionnaire récent | À structurer par situations, pas en catalogue brut |
| Assurance | Assurance de personnes uniquement, pas assurance de biens | Questionnaire récent | Écrire “assurance de personnes”, “prévoyance”, “protection familiale/dirigeant” |
| Fiscalité | Fiscalité patrimoniale / réduire pression fiscale | Questionnaire récent | Formuler prudemment ; pas de promesse d’économie garantie |
| Investissement | Arbitrages immobilier, placements financiers, holding, assurance-vie, private equity selon objectifs | Questionnaire récent | Prudent, pédagogique, sans promesse de rendement |
| Méthode | Premier rendez-vous, audit, diagnostic/stratégie, mise en place, suivi annuel | Questionnaire récent | Section centrale à intégrer |

---

## 4. Formulaire et conversion

| Élément | Valeur retenue | Source | Décision d’usage web |
|---|---|---|---|
| Objectif formulaire | Demande d’audit patrimonial | Questionnaire récent | CTA recommandé : “Demander un premier échange patrimonial” |
| Champs | Nom, prénom, email, téléphone, ville, situation professionnelle, objet, message, préférence de contact, créneau, RGPD | Questionnaire récent | Garder champs actuels si équivalents |
| Email de réception | contact@berliozconseil.fr | Questionnaire récent | Formspree vers cet email côté outil |
| Notification | Oui | Questionnaire récent | À configurer dans Formspree, pas dans le code |
| Types de demandes | Non précisé dans réponse récente | Questionnaire récent | Ne pas sur-filtrer en V1 |
| Demandes à éviter | Non précisé dans réponse récente | Questionnaire récent | Ne pas afficher de phrase disqualifiante |

---

## 5. Accès client et outils

| Élément | Valeur retenue | Source | Décision d’usage web |
|---|---|---|---|
| Outils | O2S, MoneyPitch, Big Expert, Fidroit | Questionnaire récent | Documenter en interne ; ne pas les mettre en avant publiquement |
| Bouton accès client | Oui | Questionnaire récent | Conserver `/acces-client` |
| URL accès client | https://connect.harvest.fr/accueil | Client access spec + réponse client | URL V1 retenue pour une redirection externe simple |
| API / SSO / iframe | Non en V1 | Questionnaire récent + arbitrage technique | Pas d’API, pas de SSO, pas d’iframe |

---

## 6. Réglementaire

| Élément | Valeur retenue | Source | Décision d’usage web |
|---|---|---|---|
| ORIAS | 19004281 | Questionnaire récent + DER | Afficher et permettre vérification |
| CNCGP | Oui | Questionnaire récent + DER | Mention texte, pas logo |
| Autorités | ACPR et AMF | Questionnaire récent + DER | Cadre réglementaire |
| AMF Finance Durable | Certification confirmée | Réponse client récente | Affichage public non prioritaire en V1 ; ne pas afficher dans ce lot |
| CIF | Oui | DER | Cadre réglementaire |
| Courtier en assurance | Oui | DER | Cadre réglementaire |
| IOBSP courtier | Oui | DER | Cadre réglementaire |
| Mandataire non exclusif OBSP | Oui | DER | Cadre réglementaire |
| Démarchage bancaire et financier | Oui | DER | Cadre réglementaire |
| Transaction immeubles/fonds de commerce | Oui | DER | Mention réglementaire, pas axe marketing prioritaire |
| Carte CPI | CPI 6901 2019 000 041 348 | DER | Mentions légales / cadre réglementaire |
| Garantie financière | MMA IARD / MMA IARD Assurances Mutuelles | DER | Cadre réglementaire |
| Réception de fonds | Ne peut recevoir aucun fonds, effet ou valeur | DER | Mention réglementaire importante |
| Conseil CIF | Non-indépendant, analyse restreinte, rémunération honoraires ou commissions | DER | Interdit d’écrire “CIF indépendant” |
| Médiation CIF | Médiateur de l’AMF | DER | Cadre réglementaire |
| Médiation autres activités | CMAP | DER | Cadre réglementaire |

---

## 7. Documents publics et identité visuelle

| Sujet | Valeur retenue | Source | Décision d’usage web |
|---|---|---|---|
| Politique de confidentialité website existante | Non fournie | Réponse client récente | Garder et adapter la version actuelle du site |
| Mentions légales website existantes | Non fournies | Réponse client récente | Garder et adapter depuis le document d’entrée en relation |
| Photo professionnelle | Pas de photo | Réponse client récente | Ne pas afficher de photo sur la page À propos en V1 |
| Relecture conformité externe | Non demandée à ce stade | Réponse client récente | Maintenir une rédaction prudente et vérifiable |
| Header | Approche typographique sobre | Réponse client récente | Conserver le header texte |
| Favicon futur | Extraire uniquement la bulle avec le chat issue du logo | Réponse client récente | À traiter dans un lot logo / PWA dédié |

---

## 8. À ne pas publier / ne pas créer

| Sujet | Décision | Source |
|---|---|---|
| Cas clients | Ne pas afficher | Questionnaire récent |
| Références / partenaires / compagnies | Ne pas afficher | Questionnaire récent |
| Logos AMF / ACPR / ORIAS / CNCGP / Harvest | Ne pas utiliser | Arbitrage conformité |
| “CIF indépendant” | Ne pas écrire | DER |
| Promesses de rendement | Ne pas écrire | Arbitrage conformité |
| Optimisation fiscale garantie | Ne pas écrire | Arbitrage conformité |
| Protection totale / sécurité totale | Ne pas écrire | Arbitrage conformité |
| API / SSO / iframe | Ne pas créer en V1 | Questionnaire récent + arbitrage technique |
