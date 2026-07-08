# Berlioz Conseil — Usage du logo

## Décision V1

Le site utilise l'identité officielle Berlioz Conseil sans transformer le logo en élément décoratif répété.

- Header : typographique sobre, sans logo rond complet.
- Header V1 : mark compact chat-bubble + texte, sans gros logo rond.
- Landing : logo rond complet affiché une seule fois, plus assumé, sans contour fort.
- Footer : logo rond complet en taille contenue.
- Page À propos : intégration subtile dans la carte Repères, sans assimiler le logo à une photo.
- Favicon et icônes PWA : marque simplifiée avec la bulle et le chat.
- Documents : logo rond complet autorisé lorsque le format permet une bonne lisibilité.
- Source de génération du pack 14E corrigé : `public/assets/Logo rond - Berlioz Conseil - Aurelien Picard.png`.
- Règle de génération : conserver les couleurs source, éviter les recadrages agressifs et garder une marge de sécurité sur les petites tailles.

## Fichiers installés

```text
public/logo/berlioz-logo-round.png
public/logo/berlioz-logo-round.webp
public/logo/berlioz-mark-chat-bubble.png
public/logo/berlioz-mark-chat-bubble.webp
public/favicon.svg
public/favicon.ico
public/favicon-16x16.png
public/favicon-32x32.png
public/icons/apple-touch-icon.png
public/icons/icon-192.png
public/icons/icon-512.png
public/icons/icon-maskable-192.png
public/icons/icon-maskable-512.png
public/manifest.webmanifest
```

## Couleurs de référence

- Bleu fond/logo : `#091B33`
- Bleu profond secondaire : `#0B213B`
- Surface : `#0E2948`
- Or principal : `#D3A253`
- Or bronze : `#A97836`
- Ivoire clair : `#F5F2EA`

## Intégration visuelle

Le logo ne doit pas paraître posé comme un sticker sur un décor concurrent.

Principes appliqués :

- fond principal aligné sur le bleu du logo ;
- surfaces légèrement plus claires, sans bleu électrique ;
- overlays de backgrounds basés sur `rgba(9, 27, 51, ...)` ;
- overlays allégés pour laisser réapparaître textures et profondeurs ;
- halos dorés très doux, jamais dominants ;
- or utilisé comme accent, pas comme couleur majoritaire ;
- pas d'overlay noir massif autour du logo.
- pas de contour fort, de glow appuyé ou d'effet sticker autour du logo.

## Règles d'usage

### Logo rond complet

Usage recommandé :

- landing page ;
- footer en taille contenue ;
- intégration discrète sur la page À propos ;
- documents de présentation ;
- supports grands formats où le texte reste lisible.

Usage PWA grande taille : possible uniquement sur décision ultérieure dédiée. Dans la V1, les icônes PWA installées utilisent la bulle avec le chat pour préserver la lisibilité.

Usage interdit :

- favicon ;
- petits pictogrammes ;
- répétition en motif décoratif ;
- insertion systématique dans toutes les pages.

### Bulle avec le chat

Usage recommandé :

- favicon ;
- icônes PWA ;
- petites tailles ;
- icônes maskable avec marge de sécurité.

La bulle chat ne doit pas reprendre de fragment du logo rond complet, ni l'arc extérieur du grand disque, ni le texte "Berlioz Conseil".

### Header

Le header reste typographique pour préserver la sobriété du site.

```text
mark chat-bubble + Berlioz Conseil
```

Ne pas remplacer le header par le logo rond complet sans décision de design dédiée.

## Interdits

- Ne pas déformer le logo.
- Ne pas étirer horizontalement ou verticalement.
- Ne pas utiliser le logo rond complet en favicon.
- Ne pas répéter le logo comme décor de fond.
- Ne pas placer le logo sur un fond chargé sans contraste.
- Ne pas associer le logo à des logos AMF, ACPR, ORIAS, CNCGP, Harvest ou partenaires.
- Ne pas utiliser les marques institutionnelles comme badges marketing.

## Manifest et PWA

Le manifest utilise des chemins relatifs pour rester compatible GitHub Pages sous `/bconseil/`.

```json
"src": "icons/icon-192.png"
```

Les chemins absolus du type `/icons/icon-192.png` sont à éviter dans le manifest.
