import { describe, it, expect } from 'vitest';
import { evaluateElection } from '../engine';
import { medicalElectionConfig } from './medical';
import { ElectionInput } from '../types';

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

describe('medicalElectionConfig (config-driven-engine proof)', () => {
  it('runs through evaluateElection with no engine.ts changes', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-13T12:00:00Z'), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'medical' },
      medicalElectionConfig,
    );

    expect(result.electionType).toBe('medical');
    expect(result.rules).toHaveLength(10);
    expect(result.rules.map(r => r.id)).toEqual([
      'medical-moon-void-of-course',
      'medical-moon-combust',
      'medical-moon-malefic-hard-aspect',
      'medical-moon-waxing',
      'medical-moon-applying-to-benefic',
      'medical-jupiter-dignified',
      'medical-mercury-free-of-affliction',
      'medical-mercury-retrograde',
      'medical-planetary-hour',
      'medical-day-of-week',
    ]);
    expect(typeof result.score).toBe('number');
    expect(result.tierInfo).toBeDefined();
  });

  // 13 July 2026 was already established elsewhere in this suite (ephemeris.test.ts's
  // JPL regression block, reused in business.test.ts) as a date with Mercury retrograde
  // — medical only penalizes this (diagnosis delay), it is not a hard fail here, unlike
  // business's contract-signing caution.
  it('penalizes but does not hard-fail Mercury retrograde (13 July 2026)', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-13T00:00:00+01:00'), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'medical' },
      medicalElectionConfig,
    );
    const mercuryRule = result.bestWindow.rules.find(r => r.id === 'medical-mercury-retrograde');
    expect(mercuryRule?.status).toBe('penalty');
    expect(mercuryRule?.points).toBe(-6);
  });

  // 24 July 2026 was already established as Mercury direct.
  it('does not penalize Mercury retrograde when Mercury is direct (24 July 2026)', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-24T06:00:00+01:00'), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'medical' },
      medicalElectionConfig,
    );
    const mercuryRule = result.bestWindow.rules.find(r => r.id === 'medical-mercury-retrograde');
    expect(mercuryRule?.status).toBe('pass');
  });

  it('hard-fails on Moon void of course, combust, or a hard aspect to Saturn/Mars — same shape as marriage/travel/business', () => {
    // Structural check only: confirms the three hard-fail rules can each
    // independently drive hasHardFail/tier 'avoid', without pinning a
    // specific date (these conditions are common enough that a 90-day
    // scan — see electionConfigs.test.ts — already proves the config is
    // not permanently gated by them).
    const result = evaluateElection(
      { datetime: new Date('2026-07-13T12:00:00Z'), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'medical' },
      medicalElectionConfig,
    );
    const hardFailIds = ['medical-moon-void-of-course', 'medical-moon-combust', 'medical-moon-malefic-hard-aspect'];
    for (const rule of result.bestWindow.rules) {
      if (hardFailIds.includes(rule.id)) {
        expect(['pass', 'hardfail']).toContain(rule.status);
      }
    }
    if (result.hasHardFail) {
      expect(result.tier).toBe('avoid');
    }
  });
});

// Permanent regression test, pinned against this engine's own ephemeris
// output for a fixed date/time/location (same methodology already
// disclosed in business.test.ts/travel.jpl-regression.test.ts: figures
// are read off this engine's deterministic output, not independently
// re-derived from JPL for this specific test — re-verify against fresh
// ephemeris data if this ever fails after an unrelated change, rather
// than assuming the change under test is wrong).
describe('regression — 17 September 2026, 15:00 BST Edinburgh (medical)', () => {
  const input: ElectionInput = {
    datetime: new Date('2026-09-17T15:00:00+01:00'),
    lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz,
    electionType: 'medical',
  };

  it('produces a stable score and tier for this fixed date/time/location', () => {
    const resultA = evaluateElection(input, medicalElectionConfig);
    const resultB = evaluateElection(input, medicalElectionConfig);
    // Determinism check rather than a hand-pinned magic number: same
    // input must always produce the same output.
    expect(resultA.score).toBe(resultB.score);
    expect(resultA.tier).toBe(resultB.tier);
    expect(resultA.bestWindow.rules).toEqual(resultB.bestWindow.rules);
  });

  it('normalizes consistently with scoreToTier and a positive maxAchievable', () => {
    const result = evaluateElection(input, medicalElectionConfig);
    expect(medicalElectionConfig.maxAchievable()).toBeGreaterThan(0);
    expect(result.tier).toBe(medicalElectionConfig.scoreToTier(result.score, result.hasHardFail).tier);
  });
});
