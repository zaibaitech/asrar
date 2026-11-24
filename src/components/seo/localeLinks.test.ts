import { describe, expect, it } from 'vitest';
import { INDEXABLE_UR_PATHS } from '@/src/lib/i18nRoutes';
import { localeLinkTargets } from './localeLinks';
import { ABOUT_META, METHODOLOGY_META } from '@/src/lib/infoPageCopy';

const codes = (path: string, served: 'en' | 'fr' | 'ar' | 'ur') => localeLinkTargets(path, served).map((l) => l.code);

describe('LocaleLinks targets', () => {
  it('links /abjad to its real FR, AR and (reviewed) UR URLs from English', () => {
    const t = localeLinkTargets('/abjad', 'en');
    expect(t.map((l) => l.href)).toEqual(['/fr/abjad', '/ar/abjad', ...(INDEXABLE_UR_PATHS.includes('/abjad') ? ['/ur/abjad'] : [])]);
  });

  it('never lists the page language itself', () => {
    for (const lang of ['en', 'fr', 'ar'] as const) expect(codes('/abjad', lang)).not.toContain(lang);
  });

  it('only links Urdu where the Urdu page is on the indexable allow-list', () => {
    for (const p of ['/manazil', '/ikhtiyarat', '/planetary-hours']) {
      if (!INDEXABLE_UR_PATHS.includes(p)) expect(codes(p, 'en')).not.toContain('ur');
    }
  });

  it('returns no links for pages with no localized version', () => {
    expect(localeLinkTargets('/names', 'en')).toEqual([]);
  });

  it('mirrors correctly from a /fr page back to English', () => {
    expect(localeLinkTargets('/abjad', 'fr').find((l) => l.code === 'en')?.href).toBe('/abjad');
  });
});

describe('About / Methodology SEO titles', () => {
  it('use the brand at most once and stay within 60 characters', () => {
    for (const meta of [ABOUT_META.en, ABOUT_META.fr, METHODOLOGY_META.en, METHODOLOGY_META.fr]) {
      expect(meta.seoTitle, meta.title).toBeTruthy();
      expect(meta.seoTitle!.length).toBeLessThanOrEqual(60);
      expect((meta.seoTitle!.match(/Asrār/g) ?? []).length).toBe(1);
      expect(meta.seoTitle).not.toMatch(/\|\s*Asrār$/);
    }
  });
});
