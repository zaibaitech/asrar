import { describe, it, expect } from 'vitest';
import { gregorianToHijri, getSunnahBadges } from './hijri';

describe('gregorianToHijri', () => {
  it('converts a known date deterministically', () => {
    const a = gregorianToHijri(new Date('2026-07-13T12:00:00Z'));
    const b = gregorianToHijri(new Date('2026-07-13T12:00:00Z'));
    expect(a).toEqual(b);
    expect(a.month).toBeGreaterThanOrEqual(1);
    expect(a.month).toBeLessThanOrEqual(12);
  });
});

describe('getSunnahBadges', () => {
  it('flags Friday as a blessed day', () => {
    // 2026-07-17 is a Friday
    const badges = getSunnahBadges(new Date('2026-07-17T12:00:00Z'));
    expect(badges.some(b => b.id === 'jumuah')).toBe(true);
  });

  it('never returns a badge implying nikah is forbidden', () => {
    for (let i = 0; i < 30; i++) {
      const d = new Date(Date.UTC(2026, 0, 1 + i * 12));
      const badges = getSunnahBadges(d);
      for (const b of badges) {
        expect(b.note.en.toLowerCase()).not.toContain('forbidden');
        expect(b.note.en.toLowerCase()).not.toContain('haram');
      }
    }
  });
});
