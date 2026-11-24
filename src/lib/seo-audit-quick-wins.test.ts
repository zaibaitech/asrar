import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import sitemap from '../../app/sitemap';
import { rootMetadata } from './rootMetadata';

const read = (rel: string) => readFileSync(resolve(process.cwd(), rel), 'utf8');

describe('SEO audit quick wins', () => {
  it('keeps /ramadan on the site but out of the sitemap, and stamps lastModified', () => {
    const entries = sitemap();
    const urls = entries.map((e) => e.url);
    expect(urls.some((u) => u.includes('/ramadan'))).toBe(false);
    expect(urls).toContain('https://www.asrar.app/');
    expect(urls).toContain('https://www.asrar.app/abjad');
    expect(read('src/lib/siteRoutes.ts')).toMatch(/path: '\/ramadan'/);
    for (const e of entries) {
      expect(e.lastModified, e.url).toBeInstanceOf(Date);
    }
  });

  it('does not emit a meta keywords tag from the root metadata', () => {
    expect(rootMetadata).not.toHaveProperty('keywords');
  });

  it('puts Organization + WebSite JSON-LD on the homepage with the existing Facebook sameAs only', () => {
    const home = read('src/components/seo/HomeJsonLd.tsx');
    expect(home).toContain('https://www.facebook.com/people/Asrariya/61551898746499/');
    expect(home).toContain("'Asrār (asrar.app)'");
    expect(home).toContain('/icons/icon-512x512.png');
    expect(home).not.toContain('SearchAction');
    expect(home).not.toContain('/search?');
    expect(read('app/(site)/page.tsx')).toMatch(/<HomeJsonLd \/>/);
    expect(read('app/(ur)/ur/page.tsx')).toMatch(/<HomeJsonLd \/>/);
  });

  it('uses the calm short description for the homepage share tags', () => {
    const src = read('app/(site)/page.tsx');
    expect(src).toMatch(/description: meta\.shortDescription/);
    expect(src).not.toMatch(/description: meta\.fullDescription/);
  });

  it('lists Urdu in llms.txt', () => {
    const txt = read('public/llms.txt');
    expect(txt).toMatch(/Arabic and Urdu/);
    expect(txt).toContain('https://www.asrar.app/ur');
  });

  it('demotes the app-shell brand title off <h1>', () => {
    const src = read('asrar-everyday-app.tsx');
    expect(src).not.toMatch(/<h1[^>]*>Asrār<\/h1>/);
    expect(src).toMatch(/<p className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">Asrār<\/p>/);
    expect(src).toMatch(/<p className="text-2xl font-bold text-slate-900 dark:text-slate-100">Asrār<\/p>/);
  });
});
