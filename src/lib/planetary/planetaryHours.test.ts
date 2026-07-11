import { describe, it, expect } from 'vitest';
import {
  getDayRuler,
  getDayOfWeek,
  getPlanetInfo,
  calculatePlanetaryHours,
  getAllPlanetaryHoursForDay,
  formatCountdown,
  formatCountdownShort,
} from './planetaryHours';
import { CHALDEAN_ORDER } from './constants';

describe('getDayRuler', () => {
  it('maps each day of the week to its classical ruler', () => {
    // Use noon UTC to avoid any date-boundary ambiguity in getDay()
    expect(getDayRuler(new Date('2026-07-12T12:00:00Z'))).toBe('Sun');      // Sunday
    expect(getDayRuler(new Date('2026-07-13T12:00:00Z'))).toBe('Moon');     // Monday
    expect(getDayRuler(new Date('2026-07-14T12:00:00Z'))).toBe('Mars');    // Tuesday
    expect(getDayRuler(new Date('2026-07-15T12:00:00Z'))).toBe('Mercury'); // Wednesday
    expect(getDayRuler(new Date('2026-07-16T12:00:00Z'))).toBe('Jupiter'); // Thursday
    expect(getDayRuler(new Date('2026-07-17T12:00:00Z'))).toBe('Venus');   // Friday
    expect(getDayRuler(new Date('2026-07-18T12:00:00Z'))).toBe('Saturn');  // Saturday
  });
});

describe('getDayOfWeek', () => {
  it('returns the day name matching getDay()', () => {
    expect(getDayOfWeek(new Date('2026-07-12T12:00:00Z'))).toBe('Sunday');
    expect(getDayOfWeek(new Date('2026-07-18T12:00:00Z'))).toBe('Saturday');
  });
});

describe('getPlanetInfo', () => {
  it('returns info for every planet in the Chaldean order', () => {
    for (const planet of CHALDEAN_ORDER) {
      const info = getPlanetInfo(planet);
      expect(info.planet).toBe(planet);
      expect(info.symbol).toBeTruthy();
    }
  });
});

describe('calculatePlanetaryHours', () => {
  // A fixed day: sunrise 06:00, sunset 18:00 (12h day), next sunrise 06:00 next day (12h night)
  const sunrise = new Date('2026-07-14T06:00:00Z'); // Tuesday -> day ruler Mars
  const sunset = new Date('2026-07-14T18:00:00Z');
  const nextSunrise = new Date('2026-07-15T06:00:00Z');

  it('assigns the day ruler as the planet of the first daytime hour', () => {
    const now = new Date('2026-07-14T06:05:00Z'); // just after sunrise
    const result = calculatePlanetaryHours(sunrise, sunset, nextSunrise, now);
    expect(result.dayRulerPlanet).toBe('Mars');
    expect(result.currentHour.planet).toBe('Mars');
    expect(result.currentHour.hourNumber).toBe(1);
    expect(result.currentHour.isDaytime).toBe(true);
  });

  it('walks the Chaldean sequence forward for each subsequent hour', () => {
    // Second daytime hour (07:00-08:00) should be the next planet after the day ruler
    const now = new Date('2026-07-14T07:30:00Z');
    const result = calculatePlanetaryHours(sunrise, sunset, nextSunrise, now);
    const marsIndex = CHALDEAN_ORDER.indexOf('Mars');
    const expectedPlanet = CHALDEAN_ORDER[(marsIndex + 1) % CHALDEAN_ORDER.length];
    expect(result.currentHour.hourNumber).toBe(2);
    expect(result.currentHour.planet).toBe(expectedPlanet);
  });

  it('flags night hours correctly and continues the sequence across sunset', () => {
    const now = new Date('2026-07-14T19:00:00Z'); // 1h after sunset, in the 2nd night hour
    const result = calculatePlanetaryHours(sunrise, sunset, nextSunrise, now);
    expect(result.currentHour.isDaytime).toBe(false);
    expect(result.currentHour.hourNumber).toBe(14);
  });

  it('produces a nextHour that is exactly one Chaldean step after currentHour', () => {
    const now = new Date('2026-07-14T10:15:00Z');
    const result = calculatePlanetaryHours(sunrise, sunset, nextSunrise, now);
    const currentIndex = CHALDEAN_ORDER.indexOf(result.currentHour.planet);
    const expectedNext = CHALDEAN_ORDER[(currentIndex + 1) % CHALDEAN_ORDER.length];
    expect(result.nextHour.planet).toBe(expectedNext);
  });

  it('computes a non-negative countdown that shrinks as now approaches the hour boundary', () => {
    const earlier = calculatePlanetaryHours(sunrise, sunset, nextSunrise, new Date('2026-07-14T06:10:00Z'));
    const later = calculatePlanetaryHours(sunrise, sunset, nextSunrise, new Date('2026-07-14T06:50:00Z'));
    expect(earlier.countdownSeconds).toBeGreaterThan(later.countdownSeconds);
    expect(later.countdownSeconds).toBeGreaterThanOrEqual(0);
  });

  it('shifts the frame back a day when now is before the given sunrise', () => {
    // now is before "today's" sunrise but after the implied previous sunset,
    // so the function should treat it as being within the previous day's night
    const now = new Date('2026-07-14T02:00:00Z');
    const result = calculatePlanetaryHours(sunrise, sunset, nextSunrise, now);
    expect(result.currentHour.isDaytime).toBe(false);
  });
});

describe('getAllPlanetaryHoursForDay', () => {
  const sunrise = new Date('2026-07-14T06:00:00Z');
  const sunset = new Date('2026-07-14T18:00:00Z');
  const nextSunrise = new Date('2026-07-15T06:00:00Z');

  it('returns exactly 24 hours, 12 day and 12 night', () => {
    const { hours } = getAllPlanetaryHoursForDay(sunrise, sunset, nextSunrise);
    expect(hours).toHaveLength(24);
    expect(hours.filter(h => h.isDaytime)).toHaveLength(12);
    expect(hours.filter(h => !h.isDaytime)).toHaveLength(12);
  });

  it('starts the sequence with the day ruler and cycles the Chaldean order without gaps', () => {
    const { hours, dayRuler } = getAllPlanetaryHoursForDay(sunrise, sunset, nextSunrise);
    expect(hours[0].planet).toBe(dayRuler);
    const rulerIndex = CHALDEAN_ORDER.indexOf(dayRuler);
    for (let i = 0; i < 24; i++) {
      const expected = CHALDEAN_ORDER[(rulerIndex + i) % CHALDEAN_ORDER.length];
      expect(hours[i].planet).toBe(expected);
    }
  });

  it('identifies the correct currentHourIndex for a given now', () => {
    const now = new Date('2026-07-14T13:00:00Z'); // 7h after sunrise -> hour index 7
    const { currentHourIndex } = getAllPlanetaryHoursForDay(sunrise, sunset, nextSunrise, now);
    expect(currentHourIndex).toBe(7);
  });
});

describe('formatCountdown', () => {
  it('formats hours and minutes when over an hour remains', () => {
    expect(formatCountdown(3665)).toBe('1h 1m');
  });

  it('formats minutes and seconds under an hour', () => {
    expect(formatCountdown(125)).toBe('2m 5s');
  });

  it('formats seconds only under a minute', () => {
    expect(formatCountdown(45)).toBe('45s');
  });
});

describe('formatCountdownShort', () => {
  it('returns 0:00 for zero or negative input', () => {
    expect(formatCountdownShort(0)).toBe('0:00');
    expect(formatCountdownShort(-5)).toBe('0:00');
  });

  it('formats minutes:seconds under an hour', () => {
    expect(formatCountdownShort(125)).toBe('2:05');
  });

  it('formats hours:minutes:seconds over an hour', () => {
    expect(formatCountdownShort(3665)).toBe('1:01:05');
  });
});
