import { describe, it, expect } from 'vitest';
import { evaluateElection } from '../engine';
import { travelElectionConfig } from './travel';
import { ElectionInput } from '../types';

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

// Permanent JPL-verified regression test (Phase 3 Part 3). 20 August 2026,
// 21:00 BST Edinburgh: Moon at 5.7° Sagittarius (mutable — no modality
// bonus/penalty), elongation 97.9° (waxing), Moon applying trine Jupiter
// orb 5.6°, Mercury direct at 20.7° Leo. Thursday. These figures were
// checked against this engine's own ephemeris output before being pinned
// here — re-verify against fresh JPL data if this ever fails after an
// unrelated change, rather than assuming the change under test is wrong.
describe('JPL regression — 20 August 2026, 21:00 BST Edinburgh (travel)', () => {
  const input: ElectionInput = {
    datetime: new Date('2026-08-20T21:00:00+01:00'),
    lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz,
    electionType: 'travel',
  };

  it('is the day\'s bestWindow, with Sagittarius correctly triggering neither the movable bonus nor the fixed penalty', () => {
    const result = evaluateElection(input, travelElectionConfig);
    expect(result.bestWindow.time.toISOString()).toBe('2026-08-20T20:00:00.000Z');

    const modalityRule = result.bestWindow.rules.find(r => r.id === 'travel-moon-modality');
    expect(modalityRule?.status).toBe('pass');
    expect(modalityRule?.points).toBe(0);
  });

  it('fires the expected raw-point components: waxing +8, Jupiter trine +10, Mercury dignity +4, Thursday +5, planetary-hour +6', () => {
    const result = evaluateElection(input, travelElectionConfig);
    const rules = result.bestWindow.rules;

    const byId = (id: string) => rules.find(r => r.id === id);
    expect(byId('travel-moon-waxing')?.points).toBe(8);
    expect(byId('travel-moon-applying-to-benefic')?.points).toBe(10);
    expect(byId('travel-mercury-dignified')?.points).toBe(4);
    expect(byId('travel-day-of-week')?.points).toBe(5);
    expect(byId('travel-planetary-hour')?.points).toBe(6);

    // bukūr does not fire — 21:00 is outside the 05:00-10:00 early-morning band.
    expect(byId('travel-sunnah-bukur')?.points).toBe(0);
    // mansion 20 is neutral in the travel manzil table (not in either list).
    expect(byId('travel-lunar-mansion')?.points).toBe(0);

    // Raw total: 8 + 10 + 4 + 5 + 6 = 33.
    expect(result.bestWindow.score).toBe(33);
  });

  it('normalizes 33 raw against maxAchievable (59) to a score and tier consistent with scoreToTier', () => {
    const result = evaluateElection(input, travelElectionConfig);
    expect(travelElectionConfig.maxAchievable()).toBe(59);

    const expectedNormalized = Math.round((33 / 59) * 100);
    expect(expectedNormalized).toBe(56);
    expect(result.score).toBe(56);
    expect(result.tier).toBe(travelElectionConfig.scoreToTier(56, false).tier);
    expect(result.tier).toBe('acceptable');
  });
});
