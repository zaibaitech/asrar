import { describe, expect, it } from 'vitest';
import {
  AR_PATHS,
  LOCALIZED_PATHS,
  arabicUrl,
  frPath,
  hreflangLanguages,
  isLocalizedPath,
  localeAlternates,
  localizeHref,
  stripFrPrefix,
} from './i18nRoutes';

describe('i18nRoutes', () => {
  it('maps EN paths to their /fr mirror and back', () => {
    expect(frPath('/')).toBe('/fr');
    expect(frPath('/best-day-for/travel')).toBe('/fr/best-day-for/travel');
    expect(stripFrPrefix('/fr')).toBe('/');
    expect(stripFrPrefix('/fr/')).toBe('/');
    expect(stripFrPrefix('/fr/abjad')).toBe('/abjad');
    expect(stripFrPrefix('/abjad')).toBeNull();
    expect(stripFrPrefix('/franchise')).toBeNull();
  });

  it('only mirrors the listed SEO pages', () => {
    expect(isLocalizedPath('/ikhtiyarat')).toBe(true);
    expect(isLocalizedPath('/planet-transit')).toBe(false);
    expect(isLocalizedPath('/ikhtiyarat/r/2026-10-05')).toBe(false);
  });

  it('localizes internal links on French pages only', () => {
    expect(localizeHref('/sadaqa#by-burj', 'fr')).toBe('/fr/sadaqa#by-burj');
    expect(localizeHref('/ikhtiyarat?election=travel', 'fr')).toBe('/fr/ikhtiyarat?election=travel');
    expect(localizeHref('/', 'fr')).toBe('/fr');
    expect(localizeHref('/planet-transit', 'fr')).toBe('/planet-transit');
    expect(localizeHref('/sadaqa', 'en')).toBe('/sadaqa');
    expect(localizeHref('https://example.com/x', 'fr')).toBe('https://example.com/x');
  });

  it('builds self-canonical + en/fr/x-default hreflang', () => {
    const fr = localeAlternates('/abjad', 'fr');
    expect(fr.canonical).toMatch(/\/fr\/abjad$/);
    expect(fr.languages.en).toMatch(/[^r]\/abjad$/);
    expect(fr.languages.fr).toMatch(/\/fr\/abjad$/);
    expect(fr.languages['x-default']).toBe(fr.languages.en);
    expect(localeAlternates('/abjad', 'en').canonical).toBe(fr.languages.en);
  });

  it('adds an ar alternate only for pages with an Arabic landing page', () => {
    const withAr = hreflangLanguages('/abjad');
    expect(withAr.ar).toMatch(/\/ar\/abjad$/);
    expect(withAr['x-default']).toBe(withAr.en);
    expect(hreflangLanguages('/ikhtiyarat')).not.toHaveProperty('ar');
    expect(hreflangLanguages('/best-day-for/travel')).not.toHaveProperty('ar');
    for (const en of Object.keys(AR_PATHS)) {
      expect(LOCALIZED_PATHS).toContain(en);
      expect(arabicUrl(en)).toMatch(/\/ar\//);
    }
    expect(arabicUrl('/sadaqa')).toBeNull();
  });

  it('self-canonicalises the Arabic page', () => {
    const ar = localeAlternates('/sadaqa-of-the-day', 'ar');
    expect(ar.canonical).toMatch(/\/ar\/sadaqa-of-the-day$/);
    expect(ar.languages.ar).toBe(ar.canonical);
  });
});

