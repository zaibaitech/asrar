import { describe, expect, it } from 'vitest';
import { RELATED_TOOLS, relatedToolHref, relatedToolLinks } from './relatedTools';

describe('Related tools links', () => {
  it('gives every listed page 3–4 links, never to itself', () => {
    for (const [page, keys] of Object.entries(RELATED_TOOLS)) {
      expect(keys.length).toBeGreaterThanOrEqual(3);
      expect(keys.length).toBeLessThanOrEqual(4);
      for (const [href] of relatedToolLinks(page, 'en')) expect(href).not.toBe(page);
    }
  });

  it('keeps links in the language of the URL', () => {
    expect(relatedToolHref('/compatibility', 'en')).toBe('/compatibility');
    expect(relatedToolHref('/compatibility', 'fr')).toBe('/fr/compatibility');
    expect(relatedToolHref('/compatibility', 'ar')).toBe('/ar/compatibility');
    // Dedicated Arabic landing pages.
    expect(relatedToolHref('/abjad', 'ar')).toBe('/ar/abjad');
    expect(relatedToolHref('/name-and-mother-burj', 'ar')).toBe('/ar/name-and-mother-burj');
    // No localized version: English fallback.
    expect(relatedToolHref('/birth-profile', 'fr')).toBe('/birth-profile');
    expect(relatedToolHref('/birth-profile', 'ar')).toBe('/birth-profile');
  });

  it('burj page links to compatibility, abjad, planetary hours and planet of the day', () => {
    expect(relatedToolLinks('/name-and-mother-burj', 'ar')).toEqual([
      ['/ar/compatibility', 'توافق الأسماء للزواج'],
      ['/ar/abjad', 'حساب الجمل'],
      ['/ar/planetary-hours', 'ساعات الكواكب اليوم'],
      ['/ar/planet-of-the-day', 'كوكب اليوم'],
    ]);
    expect(relatedToolLinks('/name-and-mother-burj', 'fr').map(([h]) => h)).toEqual([
      '/fr/compatibility',
      '/fr/abjad',
      '/fr/planetary-hours',
      '/fr/planet-of-the-day',
    ]);
  });
});

describe('Related tools analytics ids', () => {
  it('maps every page and link to a GA4 tool id from the allow-list', async () => {
    const { pageEventId, relatedToolLinksWithIds } = await import('./relatedTools');
    const { TOOLS } = await import('@/src/lib/analytics');
    for (const page of Object.keys(RELATED_TOOLS)) {
      expect(TOOLS).toContain(pageEventId(page));
      for (const [, , id] of relatedToolLinksWithIds(page, 'ar')) expect(TOOLS).toContain(id);
    }
    expect(pageEventId('/name-and-mother-burj')).toBe('burj');
    expect(pageEventId('/best-day-for/travel')).toBe('best_day_for');
    expect(pageEventId('/planetary-hours')).toBe('planetary_hours');
  });
});
