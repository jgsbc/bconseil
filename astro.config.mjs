// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

// https://astro.build/config
export default defineConfig({
  site: isGitHubActions ? 'https://jgsbc.github.io' : 'https://www.berliozconseil.fr',
  base: isGitHubActions ? '/bconseil' : '/',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});