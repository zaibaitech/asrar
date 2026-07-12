import { describe, it, expect } from 'vitest';
import { toLocalDateString, getLocalToday } from './localDate';

describe('toLocalDateString', () => {
  it('formats a date as YYYY-MM-DD using local getters', () => {
    const date = new Date(2026, 2, 5); // March 5, 2026, local time
    expect(toLocalDateString(date)).toBe('2026-03-05');
  });

  it('pads single-digit months and days', () => {
    const date = new Date(2026, 0, 1); // January 1, 2026
    expect(toLocalDateString(date)).toBe('2026-01-01');
  });

  it('does not shift the date across a UTC day boundary', () => {
    // 11:30 PM local time — toISOString() would push this into the next UTC day
    // for any timezone west of UTC. toLocalDateString must not do that.
    const date = new Date(2026, 5, 30, 23, 30, 0);
    expect(toLocalDateString(date)).toBe('2026-06-30');
  });

  it('does not shift the date for times just after local midnight', () => {
    // 12:15 AM local time — toISOString() would push this into the previous UTC day
    // for any timezone east of UTC. toLocalDateString must not do that.
    const date = new Date(2026, 5, 30, 0, 15, 0);
    expect(toLocalDateString(date)).toBe('2026-06-30');
  });
});

describe('getLocalToday', () => {
  it('matches toLocalDateString(new Date()) at call time', () => {
    expect(getLocalToday()).toBe(toLocalDateString(new Date()));
  });
});
