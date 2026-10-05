import { describe, expect, it } from 'vitest';
import { ogIkhtiyaratResultUrl, ogImageUrl, ogKeyForPath } from './urls';

describe('og urls', () => {
  it('maps page paths to card keys', () => {
    expect(ogKeyForPath('/best-day-for/travel')).toBe('best-day-for-travel');
    expect(ogKeyForPath('/name-and-mother-burj')).toBe('name-and-mother-burj');
    expect(ogKeyForPath('/')).toBeNull();
    expect(ogKeyForPath('/ramadan')).toBeNull();
  });

  it('adds lang and a daily cache key only where needed', () => {
    const now = new Date('2026-10-09T08:00:00Z');
    expect(ogImageUrl('abjad', 'en', now)).toMatch(/\/og\/page\/abjad$/);
    expect(ogImageUrl('abjad', 'fr', now)).toMatch(/\/og\/page\/abjad\?lang=fr$/);
    expect(ogImageUrl('sadaqa-of-the-day', 'fr', now)).toMatch(/\/og\/page\/sadaqa-of-the-day\?lang=fr&d=2026-10-09$/);
  });

  it('builds the ikhtiyārāt result card URL from share-link params only', () => {
    const url = ogIkhtiyaratResultUrl('2026-11-20', { lat: '51.5', lon: '-0.12', tz: 'Europe/London', election: 'travel', lang: 'fr' });
    expect(url).toMatch(/\/og\/ikhtiyarat\/2026-11-20\?lat=51\.5&lon=-0\.12&tz=Europe%2FLondon&election=travel&lang=fr$/);
  });
});
