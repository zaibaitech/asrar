import { describe, expect, it } from 'vitest';
import { UR_PATHS, INDEXABLE_UR_PATHS, isUrPath, stripUrPrefix, hreflangLanguages, localeAlternates, isIndexableUrEnPath } from './i18nRoutes';
import { UR_META, urduMetadata } from './urMetadata';
import { relatedToolHref } from '../components/seo/relatedTools';
import catalog from '../../public/i18n/ur-ui.json';

describe('Urdu public routes and indexing allow-list', () => {
  it('maps the public Urdu pages', () => {
    expect(Object.keys(UR_PATHS)).toHaveLength(18);
    expect(UR_PATHS['/abjad']).toBe('/ur/abjad');
    expect(isUrPath('/ur')).toBe(true);
    expect(isUrPath('/ur/abjad')).toBe(true);
    expect(isUrPath('/urdu')).toBe(false);
    expect(stripUrPrefix('/ur/abjad')).toBe('/abjad');
  });

  it('every Urdu page has metadata; allow-listed pages are indexable with hreflang, others stay noindex without hreflang', () => {
    for (const enPath of Object.keys(UR_PATHS)) {
      expect(UR_META[enPath]).toBeDefined();
      const m = urduMetadata(enPath);
      if (isIndexableUrEnPath(enPath)) {
        expect(m.robots).toMatchObject({ index: true, follow: true });
        expect(m.alternates?.languages).toEqual(hreflangLanguages(enPath));
      } else {
        expect(m.robots).toMatchObject({ index: false });
        expect(m.alternates?.languages).toBeUndefined();
      }
    }
  });

  it('lists /ur in hreflang for every allow-listed path, and not for tools that have no indexable Urdu page', () => {
    expect(INDEXABLE_UR_PATHS.length).toBeGreaterThan(1);
    for (const p of INDEXABLE_UR_PATHS.filter((path) => isIndexableUrEnPath(path))) {
      for (const l of ['en', 'fr', 'ar'] as const) {
        expect(localeAlternates(p, l).languages.ur, `${p} ${l}`).toBe(`https://www.asrar.app${UR_PATHS[p]}`);
      }
    }
    for (const p of ['/sadaqa', '/sadaqa-of-the-day', '/manazil', '/99-names-of-allah']) {
      expect(hreflangLanguages(p).ur, p).toBeUndefined();
    }
  });

  it('links related tools to /ur only where an Urdu page exists', () => {
    expect(relatedToolHref('/abjad', 'ur')).toBe('/ur/abjad');
    expect(relatedToolHref('/manazil', 'ur')).toBe('/ur/manazil');
    expect(relatedToolHref('/sadaqa', 'ur')).toBe('/ur/sadaqa');
  });

  it('catalog values are written in Arabic script', () => {
    for (const [k, v] of Object.entries(catalog as Record<string, string>)) {
      // Time-only patterns just bidi-isolate the captured times.
      const timeOnly = k.startsWith('re:') && /^[\u2066\u2069\s→$p\d]+$/.test(v);
      expect(timeOnly || /[\u0600-\u06FF]/.test(v), k).toBe(true);
    }
  });
});
