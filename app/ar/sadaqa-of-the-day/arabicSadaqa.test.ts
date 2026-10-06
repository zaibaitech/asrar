import { describe, expect, it } from 'vitest';
import { SADAQAH_BY_DAY } from '@/src/features/calculator/lib/sadaqahByDay';
import { AR_SADAQAH_BY_DAY, arabicItemsFor } from './arabicSadaqa';

describe('Arabic sadaqa-of-the-day data', () => {
  it('mirrors SADAQAH_BY_DAY day by day, item by item', () => {
    expect(AR_SADAQAH_BY_DAY.map((d) => d.day)).toEqual(SADAQAH_BY_DAY.map((d) => d.day));
    for (const src of SADAQAH_BY_DAY) {
      const ar = AR_SADAQAH_BY_DAY.find((d) => d.day === src.day)!;
      expect(ar.items.length).toBe(src.en.items.length);
    }
  });

  it('joins items with the Arabic conjunction', () => {
    expect(arabicItemsFor(5)).toBe('الملابس، والصابون، والعطر');
  });
});
