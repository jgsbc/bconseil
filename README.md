# Berlioz Conseil — Site Vitrine Premium

Projet de création du site vitrine pour Berlioz Conseil.

## Stack Technique
- Astro
- TypeScript
- Tailwind CSS

## Architecture
Le projet suit une architecture Astro standard :
- `src/layouts/` : Mise en page commune
- `src/components/` : Composants UI réutilisables
- `src/pages/` : Pages du site (routage basé sur les fichiers)
- `src/styles/` : Styles globaux et variables de design

## Documentation Projet
Toute la gouvernance, le cadrage technique et les décisions de sécurité se trouvent dans le dossier `/docs`. La source de vérité est `docs/00_governance/ACTIVE_LOT.md`.

## Périmètre V1 (Strict)
- Site 100% statique (`output: 'static'`).
- Aucune API, aucune base de données locale, aucun endpoint serveur Astro.
- Aucun SSO, aucune iframe, aucun accès client maison.
- Accès client redirigé vers l'URL externe stable Harvest (`connect.harvest.fr/accueil`).
- Formulaire de contact sécurisé géré par Formspree (endpoint actif).
- **Aucun Analytics, aucun pixel marketing, aucun cookie non essentiel n'est déployé en V1.**

## Commandes
- `npm run dev` : Lancer le serveur de développement (http://localhost:4321)
- `npm run build` : Générer le site statique (dossier `/dist`)
- `npm run preview` : Prévisualiser le build localement
- `npm run check` : Lancer la vérification des types TypeScript
