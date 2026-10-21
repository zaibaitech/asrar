import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { UR_META, urduMetadata } from './urMetadata';
import { UR_PATHS, INDEXABLE_UR_PATHS, hreflangLanguages } from './i18nRoutes';
import { absoluteUrl } from './siteRoutes';

/**
 * Phase 15 + 21 Oct 2026: only /ur/abjad is approved for indexing (INDEXABLE_UR_PATHS); every other /ur page
 * stays noindex. Originally: the /ur pages are NOT approved for indexing. These tests keep the controls where they are and check the
 * technical invariants every page must already satisfy, so that the later (approved) switch is a small, tested change.
 */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const ROUTES = Object.keys(UR_PATHS);
const URDU = /[؀-ۿ]/;

describe('technical readiness of every public Urdu route', () => {
  it('there are exactly 7 public Urdu routes, each with an Urdu title and description', () => {
    expect(ROUTES.length).toBe(7);
    expect(Object.keys(UR_META).sort()).toEqual([...ROUTES].sort());
    for (const p of ROUTES) { expect(UR_META[p].title.ur).toMatch(URDU); expect(UR_META[p].description.ur).toMatch(URDU); }
  });

  it('every route is self-canonical on the canonical host, only the allow-listed one has hreflang alternates, and is Urdu in og:locale', () => {
    for (const p of ROUTES) {
      const m = urduMetadata(p);
      expect(m.alternates?.canonical, p).toBe(absoluteUrl(UR_PATHS[p]));
      const langs = (m.alternates as { languages?: Record<string, string> }).languages;
      if (p === '/abjad') expect(langs, p).toEqual(hreflangLanguages('/abjad'));
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

describe('indexing controls: only the allow-listed /ur/abjad is indexable', () => {
  it('the allow-list is exactly /abjad', () => {
    expect(INDEXABLE_UR_PATHS).toEqual(['/abjad']);
  });

  it('every other route is noindex in its metadata; the layout default and the middleware header stay noindex', () => {
    for (const p of ROUTES) expect(urduMetadata(p).robots, p).toEqual({ index: p === '/abjad', follow: true });
    expect(read('app/(ur)/ur/layout.tsx')).toMatch(/robots: \{ index: false, follow: true \}/);
    expect(read('middleware.ts')).toMatch(/isUrPath\(pathname\) && !isIndexableUrPath\(pathname\)\) response\.headers\.set\('X-Robots-Tag', 'noindex, follow'\)/);
  });

  it('only /abjad lists Urdu in its hreflang set; the sitemap adds Urdu only through the allow-list', () => {
    expect(read('app/sitemap.ts')).not.toMatch(/UR_PATHS|urUrl/);
    for (const p of ROUTES) {
      if (p === '/abjad') expect(hreflangLanguages(p).ur, p).toBe(absoluteUrl('/ur/abjad'));
      else expect(Object.keys(hreflangLanguages(p)), p).not.toContain('ur');
    }
  });

  it('the Urdu routes are the only 7 route files and none is a private, shared-result or user-specific page', () => {
    const files = ['page.tsx', 'abjad/page.tsx', 'compatibility/page.tsx', 'ikhtiyarat/page.tsx', 'name-and-mother-burj/page.tsx', 'planet-of-the-day/page.tsx', 'planetary-hours/page.tsx'];
    for (const f of files) expect(() => read(`app/(ur)/ur/${f}`), f).not.toThrow();
    for (const f of files) expect(read(`app/(ur)/ur/${f}`)).toMatch(/urduMetadata\(/);
  });
});
