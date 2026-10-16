# Berlioz Conseil — Checklist de validation finale

## Mode d’emploi v2

Cette checklist sert à la validation finale avant publication. Certains points sont déjà tranchés par les sources et ne doivent plus être redemandés à Aurélien. Pour distinguer les points déjà résolus des vrais points ouverts, consulter :

- `docs/06_delivery/CLIENT_RESOLVED_POINTS.md` ;
- `docs/06_delivery/CLIENT_OPEN_POINTS.md`.

Les cases ci-dessous restent utiles comme contrôle final de publication, pas comme liste de questions client.


## Identité

- [ ] Nom commercial validé : Berlioz Conseil
- [ ] Forme juridique validée : SARL
- [ ] Capital validé : 1 500 €
- [ ] Dirigeant validé : Aurélien PICARD
- [ ] Adresse validée
- [ ] Orthographe exacte de la rue validée : Pelonniere / Pelonnière / Pellonnière
- [ ] Téléphone validé : 06 03 07 10 11
- [ ] Email public validé : contact@berliozconseil.fr
- [ ] Décision prise sur l’affichage de aurelien.picard@berliozconseil.fr
- [ ] Domaine validé : berliozconseil.fr
- [ ] Hébergement final validé

## Réglementaire

- [ ] SIREN validé : 850 683 228 RCS Lyon
- [ ] SIRET validé : 850 683 228 00025
- [ ] TVA validée : FR 66 850683228
- [ ] RC Pro MMA Entreprise n°112786342/231538 validée
- [ ] ORIAS n°19004281 validé
- [ ] CNCGP validé
- [ ] Carte CPI 6901 2019 000 041 348 validée
- [ ] Décision prise sur l’affichage de l’activité transaction immobilière
- [ ] Absence de réception de fonds, effets ou valeurs validée
- [ ] Médiateur AMF pour CIF validé
- [ ] Médiateur CMAP pour autres activités validé
- [ ] Autorités AMF / ACPR validées
- [ ] Formulation “CIF non-indépendant” / absence de “CIF indépendant” validée
- [ ] Mentions légales finales relues par Aurélien
- [ ] Cadre réglementaire final relu par Aurélien

## RGPD

- [ ] Politique de confidentialité existante récupérée
- [ ] Distinction prospects / clients validée
- [ ] Durée prospect 3 ans validée
- [ ] Durée client relation contractuelle + archivage 5 ans validée
- [ ] Contact RGPD validé
- [ ] Mention CNIL validée
- [ ] Mention Formspree validée
- [ ] Aucun champ patrimonial sensible dans le formulaire V1

## Positionnement

- [ ] Cible validée : particuliers, dirigeants, professions libérales, familles, retraités, cadres supérieurs, entrepreneurs
- [ ] Formulation “enjeux patrimoniaux significatifs” validée
- [ ] Mise en avant épargne validée
- [ ] Mise en avant gestion de patrimoine validée
- [ ] Mise en avant conseil patrimonial validée
- [ ] Mise en avant investissements financiers validée
- [ ] Assurance formulée comme assurance de personnes / prévoyance
- [ ] Fiscalité formulée prudemment
- [ ] Intitulé exact de la formation finance durable confirmé avant affichage public
- [ ] Aucune promesse de rendement
- [ ] Aucune promesse de protection totale
- [ ] Aucune promesse d’optimisation fiscale garantie

## Pages

- [ ] Landing validée
- [ ] Accueil validé
- [ ] Expertises validées
- [ ] À propos validé
- [ ] Contact validé
- [ ] Accès client validé
- [ ] Cadre réglementaire validé
- [ ] Mentions légales validées
- [ ] Confidentialité validée
- [ ] Merci validée
- [ ] 404 validée

## Design

- [ ] Univers sombre/confidentiel validé
- [ ] Usage du bleu nuit / or validé
- [ ] Backgrounds visibles sur GitHub Pages
- [ ] Profondeur visuelle validée sans surcharge
- [ ] Textures légères visibles mais discrètes
- [ ] Lignes patrimoniales abstraites validées
- [ ] Relief des cartes validé
- [ ] CTA final moins plat mais non agressif
- [ ] Aucune photo stock ou image finance cliché ajoutée
- [ ] Aucun pictogramme générique ajouté
- [ ] Performance visuelle validée sans ressource externe
- [ ] Lisibilité mobile validée
- [ ] Header validé
- [ ] Footer validé
- [ ] Aucun logo institutionnel non autorisé

## Logo

- [ ] Logo rond officiel validé
- [ ] Usage landing validé
- [ ] Usage header validé ou écarté
- [ ] Version favicon simplifiée validée
- [ ] Favicon SVG / ICO vérifié
- [ ] Favicons PNG 16 px et 32 px vérifiés
- [ ] Apple touch icon vérifié
- [ ] Manifest PWA vérifié
- [ ] Icônes PWA validées
- [ ] Icônes maskable 192 px et 512 px vérifiées
- [ ] Contraste palette logo vérifié
- [ ] Palette finale `#091B33` / `#D3A253` validée
- [ ] Logo fondu dans le décor, sans effet sticker
- [ ] Overlays basés sur `rgba(9, 27, 51, ...)`
- [ ] Absence d'overlay noir dominant validée
- [ ] Landing logo plus grand mais non envahissant
- [ ] Landing logo sans contour parasite
- [ ] Landing logo fondu dans le fond
- [ ] Header logo mobile OK
- [ ] Footer logo non envahissant
- [ ] À propos logo subtil
- [ ] Overlays allégés avec textures visibles
- [ ] Lisibilité hero OK
- [ ] Pas de rupture bleu logo / fond
- [ ] Pas de 404 assets logo
- [ ] Logo SVG ou PNG final décidé

## Technique

- [ ] GitHub Pages Source = GitHub Actions
- [ ] Pas de Jekyll
- [ ] Build Astro OK
- [ ] `/bconseil/` OK en preview
- [ ] Pas de `/bconseilaccueil`
- [ ] Pas de `/bconseilassets`
- [ ] Backgrounds sous `/bconseil/assets/backgrounds`
- [ ] CSS chargé sans 404
- [ ] Manifest chargé sans 404
- [ ] Icons chargées sans 404
- [ ] robots.txt correct
- [ ] sitemap correct

## Formulaire

- [ ] Endpoint Formspree validé
- [ ] Email destinataire validé
- [ ] Confirmation après réponse positive, navigation vers `/merci` compatible GitHub Pages ; fallback natif Formspree sans JavaScript
- [ ] Mention “Aucun conseil personnalisé via le formulaire” validée
- [ ] Consentement RGPD validé
- [ ] Notification automatique validée

## Accès client

- [ ] URL V1 retenue `https://connect.harvest.fr/accueil` validée
- [ ] Redirection externe validée
- [ ] Pas d’API
- [ ] Pas de SSO
- [ ] Pas d’iframe
- [ ] Texte d’avertissement environnement externe validé

## SEO

- [ ] Title accueil validé
- [ ] Meta description accueil validée
- [ ] H1 accueil validé
- [ ] Expertises structurées par situations
- [ ] Lyon / Rhône-Alpes / Collonges intégrés naturellement
- [ ] Pas de bourrage de mots-clés
- [ ] Pas de pages locales artificielles en V1
- [ ] llms.txt vérifié si présent

## Livraison

- [ ] Repo propre
- [ ] Build OK
- [ ] Preview GitHub Pages OK
- [ ] Tests mobile OK
- [ ] Tests desktop OK
- [ ] Relecture finale Aurélien
- [ ] Validation écrite avant mise en ligne domaine final

## Recette locale — 15 octobre 2026

Le lot `codex/berlioz-audit-corrections` a été compilé et contrôlé à la racine et sous `/bconseil/`. Les contrôles du build, les mesures responsive et les scénarios UI simulés sont consignés dans [le rapport de corrections](AUDIT_CORRECTIONS_2026-10-15.md), avec captures avant/après.

Les cases de validation client et de publication ci-dessus ne sont pas cochées par assimilation à ces contrôles locaux. La réception réelle d’email, le compte Formspree, les garanties contractuelles RGPD, les appareils physiques et le domaine définitif restent distincts.
