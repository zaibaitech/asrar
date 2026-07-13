import { describe, it, expect } from 'vitest';
import { getUrfBadgeForMonth } from './urf';

describe('getUrfBadgeForMonth', () => {
  it('returns a positive badge for Muharram (Tamxarit)', () => {
    const badge = getUrfBadgeForMonth(1);
    expect(badge).not.toBeNull();
    expect(badge!.id).toBe('tamxarit');
    expect(badge!.tone).toBe('positive');
    expect(badge!.label.en).toContain('Tamxarit');
  });

  it('returns a caution badge for Safar (Diggi) that explicitly negates the omen', () => {
    const badge = getUrfBadgeForMonth(2);
    expect(badge).not.toBeNull();
    expect(badge!.id).toBe('diggi-safar');
    expect(badge!.tone).toBe('caution');
    expect(badge!.note.en).toContain('negated');
    expect(badge!.note.en).toContain('fully permissible');
  });

  it('returns a positive badge for Rabi al-Awwal (Gàmmu)', () => {
    const badge = getUrfBadgeForMonth(3);
    expect(badge).not.toBeNull();
    expect(badge!.id).toBe('gammu');
    expect(badge!.tone).toBe('positive');
  });

  it('returns a positive badge for Shawwal (Kori)', () => {
    const badge = getUrfBadgeForMonth(10);
    expect(badge).not.toBeNull();
    expect(badge!.id).toBe('kori-shawwal');
    expect(badge!.tone).toBe('positive');
  });

  it('returns null for months with no specific customary note', () => {
    for (const month of [4, 5, 6, 7, 8, 9, 11, 12]) {
      expect(getUrfBadgeForMonth(month)).toBeNull();
    }
  });

  it('never implies marriage is forbidden or disliked in any month', () => {
    for (let month = 1; month <= 12; month++) {
      const badge = getUrfBadgeForMonth(month);
      if (badge) {
        expect(badge.note.en.toLowerCase()).not.toContain('forbidden');
        expect(badge.note.en.toLowerCase()).not.toContain('haram');
        expect(badge.note.en.toLowerCase()).not.toContain('disliked');
      }
    }
  });
});
