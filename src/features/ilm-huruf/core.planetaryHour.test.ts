import { describe, it, expect } from 'vitest';
import { calculatePlanetaryHour } from './core';

// 2026-11-01 is a Sunday. Local time is used (getHours/getDay).
const at = (day: number, hour: number) => new Date(2026, 10, day, hour, 30, 0);

describe('core.calculatePlanetaryHour (Chaldean order from the day ruler)', () => {
  it('Sunday first hour is the Sun, then Venus, Mercury, Moon, Saturn, Jupiter, Mars', () => {
    const seq = [6, 7, 8, 9, 10, 11, 12].map((h) => calculatePlanetaryHour(at(1, h)).planet);
    expect(seq).toEqual(['Sun', 'Venus', 'Mercury', 'Moon', 'Saturn', 'Jupiter', 'Mars']);
  });

  it('first hour of each weekday belongs to that day\'s ruler', () => {
    const rulers = ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn'];
    rulers.forEach((p, i) => expect(calculatePlanetaryHour(at(1 + i, 6)).planet).toBe(p));
  });

  it('the 8th hour of the day returns to the day ruler', () => {
    expect(calculatePlanetaryHour(at(1, 13)).planet).toBe('Sun');
  });

  it('after midnight and before 06:00 still belongs to the previous day', () => {
    // Monday 02:30 is hour 20 of Sunday: Sun index 3 + 20 = 23 % 7 = 2 -> Mars
    expect(calculatePlanetaryHour(at(2, 2)).planet).toBe('Mars');
  });
});
