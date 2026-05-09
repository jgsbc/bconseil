# Spécification PWA (Progressive Web App)

## Objectif
Le lot 12 a pour objectif de transformer le site public de Berlioz Conseil en une PWA installable. Cela permet aux utilisateurs (et notamment aux clients) d'ajouter le site sur l'écran d'accueil de leur smartphone ou sur leur bureau d'ordinateur comme une application "native", renforçant l'aspect premium et l'accessibilité.

## Ce que la PWA fait
- **Installation :** Elle permet l'affichage d'un prompt d'installation (selon les navigateurs) et l'ajout à l'écran d'accueil.
- **Affichage "Standalone" :** Une fois installée, l'application s'ouvre sans la barre d'adresse du navigateur, offrant une expérience immersive.
- **Cohérence visuelle :** Intégration des couleurs du thème (fond sombre) pour la barre d'état système et le splash screen.
- **Icônes dédiées :** Utilisation d'icônes propres (masquables et standard) pour le lanceur d'application.

## Ce que la PWA ne fait pas
- **Pas d'application native :** Le site reste une application web.
- **Pas de Play Store / App Store :** La distribution se fait uniquement via le navigateur web.
- **Pas de stockage de données client :** Aucune donnée patrimoniale ou sensible n'est mise en cache ou stockée localement par un service worker.
- **Pas de notification push :** L'application n'envoie aucune alerte système.
- **Pas de comportement offline métier :** Sans service worker complexe, le site nécessite une connexion internet pour fonctionner correctement (et pour accéder à Formspree ou Harvest).
- **Pas de remplacement de l'espace Harvest :** L'accès client pointe toujours vers l'environnement externe et sécurisé d'Harvest.

## Procédure de test (Android / iOS)
1. **Prérequis :** Le site doit être déployé et accessible en HTTPS.
2. **Android (Chrome) :** Ouvrir le site, cliquer sur le menu (trois points) puis sur "Ajouter à l'écran d'accueil" ou "Installer l'application".
3. **iOS (Safari) :** Ouvrir le site, cliquer sur le bouton de partage, puis sur "Sur l'écran d'accueil".
4. **Desktop (Chrome/Edge) :** Cliquer sur l'icône d'installation dans la barre d'adresse.

## Points à valider avant publication
- Générer les versions finales des icônes PNG (192x192, 512x512, et masque) à partir du fichier `icon-source.svg`.
- S'assurer que le nom "Berlioz Conseil" est définitif pour le manifest.
- Vérifier que la couleur de fond `#080A0F` s'intègre bien sur les appareils cibles.
