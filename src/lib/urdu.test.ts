import { describe, expect, it } from 'vitest';
import { UR_PATHS, isUrPath, stripUrPrefix, hreflangLanguages, localeAlternates } from './i18nRoutes';
import { UR_META, urduMetadata } from './urMetadata';
import { relatedToolHref } from '../components/seo/relatedTools';
import catalog from '../../public/i18n/ur-ui.json';

describe('Urdu (phase 1, noindex)', () => {
  it('maps the 7 phase-1 pages', () => {
    expect(Object.keys(UR_PATHS)).toHaveLength(7);
    expect(UR_PATHS['/abjad']).toBe('/ur/abjad');
    expect(isUrPath('/ur')).toBe(true);
    expect(isUrPath('/ur/abjad')).toBe(true);
    expect(isUrPath('/urdu')).toBe(false);
    expect(stripUrPrefix('/ur/abjad')).toBe('/abjad');
  });

  it('every Urdu page has metadata and is noindex without hreflang', () => {
    for (const enPath of Object.keys(UR_PATHS)) {
      expect(UR_META[enPath]).toBeDefined();
      const m = urduMetadata(enPath);
      expect(m.robots).toMatchObject({ index: false });
      expect(m.alternates?.languages).toBeUndefined();
    }
  });

  it('keeps /ur out of hreflang for EN pages', () => {
    const alt = JSON.stringify([hreflangLanguages('/abjad'), localeAlternates('/abjad', 'en'), localeAlternates('/abjad', 'ar')]);
    expect(alt).not.toContain('/ur');
  });

  it('links related tools to /ur only where an Urdu page exists', () => {
    expect(relatedToolHref('/abjad', 'ur')).toBe('/ur/abjad');
    expect(relatedToolHref('/manazil', 'ur')).toBe('/manazil');
  });

  it('catalog values are written in Arabic script', () => {
    for (const [k, v] of Object.entries(catalog as Record<string, string>)) {
      // Time-only patterns just bidi-isolate the captured times.
      const timeOnly = k.startsWith('re:') && /^[\u2066\u2069\s→$p\d]+$/.test(v);
      expect(timeOnly || /[\u0600-\u06FF]/.test(v), k).toBe(true);
    }
  });
});
