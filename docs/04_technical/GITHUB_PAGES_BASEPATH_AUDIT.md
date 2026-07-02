# Berlioz Conseil — Audit GitHub Pages / base path

## Rôle

Ce document garde la trace du lot 14A : correction de la compatibilité GitHub Pages, chemins internes, assets publics et backgrounds.

## Contexte

Le site est un projet Astro publié en prévisualisation sur :

```text
https://jgsbc.github.io/bconseil/
```

GitHub Pages sert donc le site dans un sous-dossier :

```text
/bconseil/
```

Le domaine final prévu est :

```text
https://www.berliozconseil.fr/
```

Sur domaine final, le site sera probablement servi à la racine :

```text
/
```

## Problème observé

Avant correction, certains liens ou assets pouvaient être générés sans slash intermédiaire :

```text
/bconseilaccueil
/bconseilassets/...
```

au lieu de :

```text
/bconseil/accueil
/bconseil/assets/...
```

Conséquences :

- page 404 au clic ;
- backgrounds absents ;
- favicon ou manifest introuvables ;
- PWA partiellement cassée.

## Correction

Un helper central a été créé :

```ts
export function withBase(path: string = '') {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\/+/, '')}`;
}
```

Fichier :

```text
src/lib/paths.ts
```

## Règle d’usage

Tout lien interne ou asset public doit passer par `withBase()`.

Exemples :

```astro
<a href={withBase('/accueil')}>Accueil</a>
<link rel="manifest" href={withBase('/manifest.webmanifest')} />
```

Pour les backgrounds dans le layout :

```astro
--bg-hero-landing-a: url('{withBase('/assets/backgrounds/bg-hero-landing-a.webp')}');
```

## Fichiers concernés par le lot 14A

- `src/lib/paths.ts`
- `src/pages/robots.txt.ts`
- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/ContactForm.astro`
- `src/components/CTASection.astro`
- `src/pages/index.astro`
- `src/pages/accueil.astro`
- `src/pages/404.astro`
- `src/pages/merci.astro`
- `src/styles/global.css`

Le fichier `public/robots.txt` a été supprimé au profit d’une route texte base-aware.

## Vérifications du lot 14A

Contrôles rapportés :

- `dist/index.html` présent ;
- `dist/accueil/index.html` présent ;
- `dist/acces-client/index.html` présent ;
- `dist/contact/index.html` présent ;
- `dist/.nojekyll` présent ;
- `dist/index.html` contient `/bconseil/accueil` ;
- `dist/index.html` contient `/bconseil/acces-client` ;
- `dist/index.html` contient `/bconseil/assets/backgrounds/bg-hero-landing-a.webp` ;
- `/bconseilaccueil` absent ;
- `/bconseilassets` absent ;
- `href="/accueil"` absent ;
- `href="/contact"` absent.

## Checklist navigateur

À chaque push important :

1. Ouvrir `https://jgsbc.github.io/bconseil/`.
2. Faire un hard refresh.
3. Vérifier le fond de la landing.
4. Cliquer “Découvrir le cabinet”.
5. Cliquer “Espace client”.
6. Tester le menu mobile.
7. Ouvrir DevTools > Network.
8. Vérifier absence de 404 sur :
   - CSS ;
   - backgrounds ;
   - manifest ;
   - icons ;
   - pages internes.

## GitHub Pages

Le repo doit rester configuré ainsi :

```text
Settings > Pages > Source > GitHub Actions
```

Ne pas revenir à :

```text
Deploy from branch
```

Sinon GitHub relance Jekyll et tente de lire les fichiers `.astro` comme du YAML.

## Point de vigilance futur

La logique actuelle de configuration s’appuie sur :

```text
GITHUB_ACTIONS === true
```

C’est suffisant pour la preview GitHub Pages.

Mais si le domaine final `berliozconseil.fr` est aussi déployé via GitHub Actions, cette condition restera vraie et pourrait produire à tort des URLs `/bconseil/`.

Recommandation future :
remplacer la logique par une variable explicite, par exemple :

```text
PUBLIC_SITE_URL
PUBLIC_BASE_PATH
DEPLOY_TARGET
```

ou :

```text
DEPLOY_TARGET=github-pages
DEPLOY_TARGET=production
```

## À ne pas faire

- Ne pas modifier les fichiers `.astro` pour satisfaire Jekyll.
- Ne pas supprimer les frontmatters Astro.
- Ne pas publier le repo source comme site.
- Ne pas ajouter Jekyll.
- Ne pas revenir à Deploy from branch.
