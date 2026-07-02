import type { APIRoute } from 'astro';

import { withBase } from '../lib/paths';

const fallbackSite = 'https://www.berliozconseil.fr';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(withBase('/sitemap-index.xml'), site ?? fallbackSite).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  });
};
