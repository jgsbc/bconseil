# Risk Register — Berlioz Conseil

**Dernière mise à jour :** 2026-10-15

**Lot de référence :** LOT 0

Légende — Niveau : **Élevé** / **Moyen** / **Faible**  
Statut : Ouvert / En cours / Fermé

---

## Tableau des risques

| ID | Catégorie | Risque | Niveau | Impact | Mesure de réduction | Statut |
|---|---|---|:---:|---|---|---|
| R01 | Réglementaire | Contenu réglementaire inexact ou inventé | Élevé | Risque juridique / réputationnel / sanction ACPR ou AMF | Tout contenu réglementaire validé par Berlioz Conseil avant publication | Ouvert |
| R02 | Réglementaire | Médiateur non renseigné de manière exhaustive | Élevé | Mentions réglementaires incomplètes — non-conformité | Confirmer les dispositifs de médiation assurance, IOBSP et immobilier | Ouvert |
| R03 | Réglementaire | Certifications non détaillées | Moyen | Site peu crédible ou informations non vérifiables | Demander la liste exacte des certifications | Ouvert |
| R04 | Réglementaire | Statuts réglementaires mal formulés | Élevé | Risque de qualification erronée de l'activité | Utiliser uniquement les libellés ORIAS officiels, validés par Berlioz Conseil | Ouvert |
| R05 | Réglementaire | Surpromesse patrimoniale ou financière | Élevé | Risque réglementaire AMF / ACPR | Bannir toute promesse de rendement, performance ou garantie | Ouvert |
| R06 | Communication | Contraintes CNCGP non vérifiées | Élevé | Non-respect du code de déontologie CNCGP | Demander à Berlioz Conseil les contraintes de communication applicables | Ouvert |
| R07 | Communication | Formulation "petits porteurs" inadaptée | Élevé | Risque réputationnel — image méprisante | Reformuler en "demandes nécessitant un accompagnement structuré" | Fermé |
| R08 | RGPD | Collecte de données patrimoniales via formulaire | Élevé | Risque RGPD — responsabilité en cas de violation | Formulaire limité + message de sécurité obligatoire + aucun champ sensible | Ouvert |
| R09 | RGPD | Absence de politique de confidentialité | Élevé | Non-conformité RGPD — obligation légale | Création de la page `/confidentialite` structurée (Lot 6A) | Fermé |
| R10 | RGPD | Absence de mentions légales | Élevé | Non-conformité web — obligation légale française | Création de la page `/mentions-legales` structurée (Lot 6A) | Fermé |
| R11 | RGPD | Durée de conservation des données non définie | Moyen | Risque RGPD — registre des traitements incomplet | Recommandation 3 ans max intégrée, en attente de validation | Ouvert |
| R12 | Sécurité | API Harvest intégrée sans documentation | Élevé | Risque sécurité / conformité / RGPD | Reporter toute intégration API à un lot séparé | Fermé |
| R13 | Sécurité | Exposition de clés API ou tokens sur le site | Élevé | Fuite de données / compromission | Aucune clé secrète en V1 — site statique sans API | Fermé |
| R14 | UX / Image | Email incohérent entre .fr et .com | Moyen | Erreur de contact / image non professionnelle | Email contact@berliozconseil.fr retenu | Fermé |
| R15 | UX / Image | Confusion entre site vitrine et espace client | Moyen | Attentes client mal gérées | Page `/acces-client` claire avec redirection externe et message explicatif | Ouvert |
| R16 | UX / Image | Site trop générique ou peu différenciant | Moyen | Faible impact — positionnement dilué | Direction premium / confidentielle / patrimoniale / sombre | Ouvert |
| R17 | Technique | Hébergement définitif non confirmé | Moyen | Mentions légales du domaine définitif incomplètes | GitHub Pages vérifié pour la prévisualisation ; offre finale à confirmer selon CLIENT_OPEN_POINTS du 07/07/2026 | Ouvert |
| R18 | Technique | URL O2S / MoneyPitch incorrecte | Faible | Page `/acces-client` renvoie une 404 | Utilisation de l'URL stable `connect.harvest.fr` — vérifier avec Berlioz | Fermé |
| R19 | Contenu | Photo professionnelle non fournie | Faible | Aucun blocage : décision de ne pas afficher de photo en V1 | Décision client du 07/07/2026, ne pas redemander | Fermé |
| R20 | Contenu | Texte "À propos" non validé | Moyen | Informations biographiques incorrectes ou non souhaitées | [À FOURNIR] texte validé par Aurélien Picard | Ouvert |

---

## Risques fermés

Les risques R07, R09, R10, R12, R13, R14, R18 et R19 sont fermés suite aux implémentations techniques et aux arbitrages de contenu de la V1.

---

## Prochaine révision

À reprendre au démarrage du LOT 1 après retour de Berlioz Conseil sur les points [À FOURNIR].
## Révision audit du 15 octobre 2026

Les anciennes lignes décrivent des risques historiques, pas toutes des demandes client encore ouvertes. `CLIENT_OPEN_POINTS.md` et `CLIENT_RESOLVED_POINTS.md` priment pour les décisions métier déjà prises. La clôture antérieure de R17 était contradictoire avec le point d’hébergement encore ouvert : elle est rectifiée ci-dessus.

| ID | Risque restant | État / preuve requise |
|---|---|---|
| R21 | Le service accepte une soumission mais la notification n’arrive pas au cabinet | États UI testés avec un simulateur local ; réception réelle et paramètres de domaine/quota/anti-spam à vérifier sur le compte Formspree. |
| R22 | Conservation et transferts chez Formspree insuffisamment qualifiés | La page de confidentialité mentionne le prestataire et ses traitements aux États-Unis. Contrat de sous-traitance, garanties de transfert et suppression effective à vérifier avec le responsable du traitement. La rédaction ne vaut pas certification RGPD. |
| R23 | Documents de stratégie et conformité consultables dans le dépôt public | Dépôt confirmé public via GitHub. Aucune suppression ni réécriture d’historique ; une décision distincte est nécessaire sur les documents à garder publics. |
| R24 | Écarts entre navigateurs / appareils | Rendu contrôlé dans le navigateur intégré sur dix viewports ; Safari, Firefox et appareils physiques non testés. |
