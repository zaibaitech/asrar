import { describe, it, expect } from 'vitest';
import { readFileSync, readdirSync, statSync } from 'fs';
import path from 'path';
import { NextRequest } from 'next/server';
import sitemap from '../../app/sitemap';
import robots from '../../app/robots';
import { middleware } from '../../middleware';
import { LOCALIZED_PATHS, hreflangLanguages, localeAlternates, UR_PATHS, isUrPath } from './i18nRoutes';
import { PUBLIC_TOOLS } from './siteRoutes';

/**
 * Phase 5: the guarantees that keep /ur invisible to search engines until it is approved, and the RTL setup
 * of the Urdu pages. urdu.test.ts covers the per-page metadata and hreflang of the seven mapped pages;
 * root-layouts.test.ts covers lang/dir of the three root layouts. This adds the parts that were only
 * implied: the generated sitemap, robots.txt, the middleware header on every /ur URL, and that every
 * /ur page file really declares the noindex metadata.
 */
const root = path.resolve(__dirname, '../..');
const read = (rel: string) => readFileSync(path.join(root, rel), 'utf8');
function pages(dir: string, out: string[] = []): string[] {
  for (const n of readdirSync(dir)) {
    const p = path.join(dir, n);
    if (statSync(p).isDirectory()) pages(p, out);
    else if (n === 'page.tsx') out.push(p);
  }
  return out;
}

describe('/ur stays out of the sitemap, robots.txt and hreflang, except the allow-listed /ur/abjad', () => {
  it('the generated sitemap lists /ur/abjad (with alternates) and no other /ur URL', () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThan(20);
    const urUrls = entries.map((e) => e.url).filter((u) => /\/ur(\/|$)/.test(u));
    expect(urUrls).toEqual(['https://www.asrar.app/ur/abjad']);
    const abjadSet = ['https://www.asrar.app/abjad', 'https://www.asrar.app/fr/abjad', 'https://www.asrar.app/ar/abjad', 'https://www.asrar.app/ur/abjad'];
    for (const u of abjadSet) {
      const e = entries.find((x) => x.url === u)!;
      expect(e, u).toBeDefined();
      expect(e.alternates?.languages, u).toEqual({ en: abjadSet[0], fr: abjadSet[1], ar: abjadSet[2], ur: abjadSet[3], 'x-default': abjadSet[0] });
    }
    const others = entries.filter((e) => !abjadSet.includes(e.url));
    expect(JSON.stringify(others)).not.toMatch(/\/ur(\/|")|"ur"/);
  });

  it('robots.txt does not mention /ur (it stays crawlable so the noindex tag can be seen) and has no Urdu sitemap', () => {
    const r = robots();
    const text = JSON.stringify(r);
    expect(text).not.toMatch(/\/ur\b/);
    expect(JSON.stringify(r.rules)).not.toContain('"disallow":["/ur');
    expect(r.sitemap).toMatch(/sitemap\.xml$/);
  });

  it('no English/French/Arabic page lists an Urdu alternate, for any localized tool path except /abjad', () => {
    const paths = [...new Set([...LOCALIZED_PATHS, ...PUBLIC_TOOLS.map((t) => t.path), ...Object.keys(UR_PATHS)])];
    for (const p of paths) {
      const alt = JSON.stringify([hreflangLanguages(p), localeAlternates(p, 'en'), localeAlternates(p, 'fr'), localeAlternates(p, 'ar')]);
      if (p === '/abjad') {
        for (const l of ['en', 'fr', 'ar'] as const) expect(localeAlternates(p, l).languages.ur, l).toBe('https://www.asrar.app/ur/abjad');
      } else expect(alt, p).not.toMatch(/\/ur(\/|")|"ur"/);
    }
  });

  it('the English /abjad page links to /ur/abjad with a crawlable <a href hrefLang="ur">', () => {
    expect(read('app/(site)/abjad/page.tsx')).toMatch(/<a href=\{UR_PATHS\['\/abjad'\]\} hrefLang="ur"/);
  });
});

describe('/ur is noindex everywhere except /ur/abjad', () => {
  it('every page file under app/(ur)/ur declares the noindex metadata through urduMetadata()', () => {
    const files = pages(path.join(root, 'app/(ur)/ur'));
    expect(files.length).toBe(Object.keys(UR_PATHS).length); // one page file per mapped Urdu page (7)
    for (const f of files) expect(readFileSync(f, 'utf8'), path.relative(root, f)).toMatch(/urduMetadata\(|export const metadata/);
  });

  it('the /ur layout itself is noindex, follow and sets lang="ur" dir="rtl"', () => {
    const src = read('app/(ur)/ur/layout.tsx');
    expect(src).toMatch(/robots:\s*\{\s*index:\s*false,\s*follow:\s*true\s*\}/);
    expect(src).toMatch(/lang="ur"\s+dir="rtl"/);
  });

  it('the middleware sends X-Robots-Tag: noindex on /ur and /ur/<page> except /ur/abjad, and not on the English pages', async () => {
    for (const p of ['/ur/abjad', '/ur/abjad/']) {
      const res = await middleware(new NextRequest(`https://asrar.app${p}`));
      expect(res.headers.get('x-robots-tag'), p).toBeNull();
    }
    for (const p of ['/ur', '/ur/', '/ur/compatibility', '/ur/planetary-hours', '/ur/planet-of-the-day', '/ur/ikhtiyarat', '/ur/name-and-mother-burj', '/ur/abjad/x', '/ur/manazil']) {
      expect(isUrPath(p)).toBe(true);
      const res = await middleware(new NextRequest(`https://asrar.app${p}`));
      expect(res.headers.get('x-robots-tag'), p).toMatch(/noindex/);
    }
    for (const p of ['/abjad', '/ikhtiyarat', '/']) {
      const res = await middleware(new NextRequest(`https://asrar.app${p}`));
      expect(res.headers.get('x-robots-tag'), p).toBeNull();
    }
  });
});

describe('dates and numbers in Urdu mode', () => {
  it('Urdu mode formats dates with Western digits (ur-u-nu-latn), like the times next to Arabic text', () => {
    const f = new Intl.DateTimeFormat('ur-u-nu-latn', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(2026, 9, 18)));
    expect(f).toMatch(/18/);
    expect(f).toMatch(/2026/);
    expect(f).not.toMatch(/[٠-٩۰-۹]/);
  });

  it('the translator installs exactly the Arabic and Urdu date locales', () => {
    const src = read('src/components/i18n/ArabicDomTranslator.tsx');
    expect(src).toMatch(/DATE_LOCALES\s*=\s*\{\s*ar:\s*'ar-u-nu-latn',\s*ur:\s*'ur-u-nu-latn'\s*\}/);
  });
});
