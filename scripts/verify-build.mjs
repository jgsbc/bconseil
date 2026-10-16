import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

// Check generated output, including the GitHub Pages base, rather than source templates.
const root = new URL('../dist/', import.meta.url);
const files = readdirSync(root, { recursive: true }).filter(file => file.endsWith('.html'));
assert.equal(files.length, 11, 'Expected the eleven existing pages');
const home = readFileSync(new URL('index.html', root), 'utf8');
const canonical = new URL(home.match(/rel="canonical" href="([^"]+)"/)[1]);
const base = canonical.pathname.replace(/\/?$/, '/');
let references = 0;
for (const file of files) {
  const html = readFileSync(new URL(file.replaceAll('\\', '/'), root), 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${file}: one H1`);
  const referencesInPage = [
    ...[...html.matchAll(/(?:href|src)="([^"]+)"/g)].map(match => match[1]),
    ...[...html.matchAll(/url\(['"]?([^'")]+)['"]?\)/g)].map(match => match[1]),
  ];
  for (const raw of referencesInPage) {
    if (/^(?:mailto:|tel:|data:|#)/.test(raw)) continue;
    const url = new URL(raw, canonical);
    if (url.origin !== canonical.origin) continue;
    assert.ok(url.pathname.startsWith(base), `${file}: path outside ${base}: ${raw}`);
    const relative = decodeURIComponent(url.pathname.slice(base.length));
    const target = new URL(relative, root);
    assert.ok(existsSync(target) || existsSync(new URL(`${relative.replace(/\/$/, '')}/index.html`, root)), `${file}: missing ${raw}`);
    references++;
  }
}
const contact = readFileSync(new URL('contact/index.html', root), 'utf8');
assert.match(contact, /action="https:\/\/formspree\.io\/f\/xgorjwkw"/);
assert.match(contact, new RegExp(`data-success-url="${base}merci"`));
assert.match(contact, /id="rgpd"[^>]*required/);
assert.match(contact, /maxlength="2000"/);
const thanks = readFileSync(new URL('merci/index.html', root), 'utf8');
assert.match(thanks, /name="robots" content="noindex, follow"/);
assert.match(thanks, /Pour organiser un premier échange, adressez votre demande/);
const sitemap = readFileSync(new URL('sitemap-0.xml', root), 'utf8');
assert.ok(!/\/merci\/?</.test(sitemap), 'Confirmation page must not be in sitemap');
const manifest = JSON.parse(readFileSync(new URL('manifest.webmanifest', root), 'utf8'));
for (const icon of manifest.icons) assert.ok(existsSync(new URL(icon.src, root)), `Missing PWA icon ${icon.src}`);
assert.equal(manifest.start_url, '.');
console.log(`${files.length} pages, ${references} internal references, form, confirmation, sitemap and manifest verified (${base}).`);
