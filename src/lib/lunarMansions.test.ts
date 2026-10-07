import { describe, it, expect } from 'vitest';
import {
  LUNAR_MANSIONS,
  getLunarMansionByNumber,
  getCurrentLunarMansion,
} from './lunarMansions';

const PLACEHOLDER_EN = /Mansion \d+ spiritual focus/;
const PLACEHOLDER_FR = /Focus spirituel du manoir \d+/i;
const PLACEHOLDER_WISDOM = /Classical wisdom for mansion \d+/i;

describe('LUNAR_MANSIONS Phase B content', () => {
  it('has exactly 28 mansions numbered 1–28 in order', () => {
    expect(LUNAR_MANSIONS).toHaveLength(28);
    expect(LUNAR_MANSIONS.map((m) => m.number)).toEqual(
      Array.from({ length: 28 }, (_, i) => i + 1)
    );
  });

  it('has no placeholder spiritualFocus text (EN or FR)', () => {
    for (const m of LUNAR_MANSIONS) {
      expect(m.spiritualFocus.en, `mansion ${m.number} EN`).not.toMatch(
        PLACEHOLDER_EN
      );
      expect(m.spiritualFocus.fr, `mansion ${m.number} FR`).not.toMatch(
        PLACEHOLDER_FR
      );
      expect(m.spiritualFocus.en.trim().length).toBeGreaterThan(20);
      expect(m.spiritualFocus.fr.trim().length).toBeGreaterThan(20);
    }
  });

  it('has no placeholder classicalWisdom quotes', () => {
    for (const m of LUNAR_MANSIONS) {
      expect(m.classicalWisdom.quote, `mansion ${m.number}`).not.toMatch(
        PLACEHOLDER_WISDOM
      );
      expect(m.classicalWisdom.scholar).not.toBe('Classical Scholars');
    }
  });

  it('keeps equal tropical sector metadata (~12.857°)', () => {
    const step = 360 / 28;
    for (const m of LUNAR_MANSIONS) {
      const expected = (m.number - 1) * step;
      expect(m.startDegree).toBeCloseTo(expected, 1);
    }
  });

  it('getLunarMansionByNumber returns filled entries for 9 and 28', () => {
    const nine = getLunarMansionByNumber(9);
    const twentyEight = getLunarMansionByNumber(28);
    expect(nine?.nameTransliteration).toBe('Al-Ṭarf');
    expect(twentyEight?.nameTransliteration).toBe('Baṭn al-Ḥūt');
    expect(nine?.spiritualFocus.en).not.toMatch(PLACEHOLDER_EN);
    expect(twentyEight?.spiritualFocus.en).not.toMatch(PLACEHOLDER_EN);
  });

  it('getCurrentLunarMansion returns a mansion with real spiritualFocus', () => {
    const current = getCurrentLunarMansion(new Date('2026-10-07T12:00:00Z'));
    expect(current.mansion.number).toBeGreaterThanOrEqual(1);
    expect(current.mansion.number).toBeLessThanOrEqual(28);
    expect(current.spiritualGuidance.en).not.toMatch(PLACEHOLDER_EN);
  });
});
