import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { UR_META, urduMetadata } from './urMetadata';
import { UR_PATHS, INDEXABLE_UR_PATHS, PENDING_UR_INDEX_PATHS, hreflangLanguages, isIndexableUrEnPath } from './i18nRoutes';
import { absoluteUrl } from './siteRoutes';

/**
 * Every public /ur route must stay self-canonical, Urdu, and uniquely titled.
 * Indexing is gated by INDEXABLE_UR_PATHS: allow-listed pages are index, follow,
 * in the sitemap, and in the EN/FR/AR/UR hreflang set. Every other /ur page
 * stays noindex (layout metadata + X-Robots-Tag in middleware).
 */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const ROUTES = Object.keys(UR_PATHS);
const URDU = /[؀-ۿ]/;

describe('technical readiness of every public Urdu route', () => {
  it('there is a public Urdu route for each mapped path, each with an Urdu title and description', () => {
    expect(ROUTES.length).toBe(Object.keys(UR_PATHS).length);
    expect(ROUTES.length).toBe(18);
    expect(Object.keys(UR_META).sort()).toEqual([...ROUTES].sort());
    for (const p of ROUTES) { expect(UR_META[p].title.ur).toMatch(URDU); expect(UR_META[p].description.ur).toMatch(URDU); }
  });

  it('every route is self-canonical on the canonical host, allow-listed pages have hreflang alternates, and og:locale is Urdu', () => {
    for (const p of ROUTES) {
      const m = urduMetadata(p);
      expect(m.alternates?.canonical, p).toBe(absoluteUrl(UR_PATHS[p]));
      const langs = (m.alternates as { languages?: Record<string, string> }).languages;
      if (isIndexableUrEnPath(p)) expect(langs, p).toEqual(hreflangLanguages(p));
      else expect(langs, p).toBeUndefined();
      expect((m.openGraph as { locale?: string }).locale, p).toBe('ur_PK');
      expect(String(m.description).length, p).toBeGreaterThan(40);
    }
  });

  it('titles are unique across the Urdu pages (no duplicate titles)', () => {
    const titles = ROUTES.map((p) => String((urduMetadata(p).title as { absolute: string }).absolute));
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe('indexing controls: only allow-listed /ur pages are indexable', () => {
  it('the allow-list is the reviewed public Urdu routes (and only paths that have a /ur page)', () => {
    expect(INDEXABLE_UR_PATHS).toEqual([
      '/',
      '/abjad',
      '/name-and-mother-burj',
      '/compatibility',
      '/planetary-hours',
      '/planet-of-the-day',
      '/ikhtiyarat',
      '/about',
      '/methodology',
      '/sadaqa',
      '/sadaqa-of-the-day',
      '/99-names-of-allah',
      '/manazil',
      '/best-day-for',
      '/best-day-for/marriage',
      '/best-day-for/travel',
      '/best-day-for/moving-home',
      '/best-day-for/business',
    ]);
    for (const p of INDEXABLE_UR_PATHS) expect(p in UR_PATHS, p).toBe(true);
    expect([...PENDING_UR_INDEX_PATHS]).toEqual([]);
    for (const p of INDEXABLE_UR_PATHS) expect(isIndexableUrEnPath(p), p).toBe(true);
  });

  it('allow-listed routes are index, follow in metadata; every other route is noindex; the layout default and the middleware header stay noindex', () => {
    for (const p of ROUTES) expect(urduMetadata(p).robots, p).toEqual({ index: isIndexableUrEnPath(p), follow: true });
    expect(read('app/(ur)/ur/layout.tsx')).toMatch(/robots: \{ index: false, follow: true \}/);
    expect(read('middleware.ts')).toMatch(/isUrPath\(pathname\) && !isIndexableUrPath\(pathname\)\) response\.headers\.set\('X-Robots-Tag', 'noindex, follow'\)/);
  });

  it('only allow-listed paths list Urdu in their hreflang set; the sitemap adds Urdu only through the allow-list', () => {
    expect(read('app/sitemap.ts')).not.toMatch(/\bUR_PATHS\b/);
    expect(read('app/sitemap.ts')).toMatch(/indexableUrduUrl/);
    for (const p of ROUTES) {
      if (isIndexableUrEnPath(p)) expect(hreflangLanguages(p).ur, p).toBe(absoluteUrl(UR_PATHS[p]));
      else expect(Object.keys(hreflangLanguages(p)), p).not.toContain('ur');
    }
    expect(hreflangLanguages('/sadaqa').ur).toBe(absoluteUrl(UR_PATHS['/sadaqa']));
    expect(hreflangLanguages('/manazil').ur).toBe(absoluteUrl(UR_PATHS['/manazil']));
    expect(Object.keys(hreflangLanguages('/planet-transit'))).not.toContain('ur');
  });

  it('the Urdu routes are the mapped route files and none is a private, shared-result or user-specific page', () => {
    const files = [
      'page.tsx',
      'abjad/page.tsx',
      'compatibility/page.tsx',
      'ikhtiyarat/page.tsx',
      'name-and-mother-burj/page.tsx',
      'planet-of-the-day/page.tsx',
      'planetary-hours/page.tsx',
      'about/page.tsx',
      'methodology/page.tsx',
      'sadaqa/page.tsx',
      'sadaqa-of-the-day/page.tsx',
      '99-names-of-allah/page.tsx',
      'manazil/page.tsx',
      'best-day-for/page.tsx',
      'best-day-for/[purpose]/page.tsx',
    ];
    for (const f of files) expect(() => read(`app/(ur)/ur/${f}`), f).not.toThrow();
    for (const f of files) expect(read(`app/(ur)/ur/${f}`)).toMatch(/urduMetadata\(/);
  });
});
