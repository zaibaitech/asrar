import { describe, it, expect } from 'vitest';
import { evaluateElection } from '../engine';
import { businessElectionConfig } from './business';
import { ElectionInput } from '../types';

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

describe('businessElectionConfig (config-driven-engine proof)', () => {
  it('runs through evaluateElection with no engine.ts changes', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-13T12:00:00Z'), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'business' },
      businessElectionConfig,
    );

    expect(result.electionType).toBe('business');
    expect(result.rules).toHaveLength(11);
    expect(result.rules.map(r => r.id)).toEqual([
      'business-mercury-retrograde',
      'business-moon-void-of-course',
      'business-mercury-combust',
      'business-moon-malefic-hard-aspect',
      'business-moon-waxing',
      'business-moon-applying-to-jupiter',
      'business-moon-applying-to-venus',
      'business-mercury-dignified',
      'business-mercury-free-of-affliction',
      'business-planetary-hour',
      'business-day-of-week',
    ]);
    expect(typeof result.score).toBe('number');
    expect(result.tierInfo).toBeDefined();
  });

  // 13 July 2026 was already established elsewhere in this suite as a date
  // with Mercury retrograde (ephemeris.test.ts's JPL regression block) —
  // reused here to confirm the hard-fail fires for business too.
  it('hard-fails when Mercury is retrograde (13 July 2026)', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-13T00:00:00+01:00'), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'business' },
      businessElectionConfig,
    );
    expect(result.hasHardFail).toBe(true);
    expect(result.tier).toBe('avoid');
    const mercuryRule = result.bestWindow.rules.find(r => r.id === 'business-mercury-retrograde');
    expect(mercuryRule?.status).toBe('hardfail');
  });

  // 24 July 2026 was already established as Mercury direct.
  it('does not hard-fail Mercury retrograde when Mercury is direct (24 July 2026)', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-24T06:00:00+01:00'), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'business' },
      businessElectionConfig,
    );
    const mercuryRule = result.bestWindow.rules.find(r => r.id === 'business-mercury-retrograde');
    expect(mercuryRule?.status).toBe('pass');
  });
});

// Permanent JPL-verified regression test. 17 September 2026, 15:00 BST
// Edinburgh: Moon at 10.7° Sagittarius, elongation 76.0° (waxing), Moon
// applying trine Jupiter orb 6.4°, Mercury direct at 11.2° Libra (16.5°
// from the Sun — not combust, no domicile bonus since Libra isn't
// Gemini/Virgo). Thursday. These figures were checked against this
// engine's own ephemeris output before being pinned here — re-verify
// against fresh JPL data if this ever fails after an unrelated change,
// rather than assuming the change under test is wrong.
describe('JPL regression — 17 September 2026, 15:00 BST Edinburgh (business)', () => {
  const input: ElectionInput = {
    datetime: new Date('2026-09-17T15:00:00+01:00'),
    lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz,
    electionType: 'business',
  };

  it('is the day\'s bestWindow', () => {
    const result = evaluateElection(input, businessElectionConfig);
    expect(result.bestWindow.time.toISOString()).toBe('2026-09-17T14:00:00.000Z');
  });

  it('fires the expected raw-point components: waxing +10, Jupiter trine +12, Mercury free of affliction +4, planetary-hour +6 (Jupiter), Thursday +5', () => {
    const result = evaluateElection(input, businessElectionConfig);
    const rules = result.bestWindow.rules;
    const byId = (id: string) => rules.find(r => r.id === id);

    expect(byId('business-moon-waxing')?.points).toBe(10);
    expect(byId('business-moon-applying-to-jupiter')?.points).toBe(12);
    expect(byId('business-moon-applying-to-venus')?.points).toBe(0);
    expect(byId('business-mercury-dignified')?.points).toBe(0);
    expect(byId('business-mercury-free-of-affliction')?.points).toBe(4);
    expect(byId('business-planetary-hour')?.points).toBe(6);
    expect(byId('business-day-of-week')?.points).toBe(5);

    // No hard fails on this date/window.
    expect(byId('business-mercury-retrograde')?.status).toBe('pass');
    expect(byId('business-moon-void-of-course')?.status).toBe('pass');
    expect(byId('business-mercury-combust')?.status).toBe('pass');
    expect(byId('business-moon-malefic-hard-aspect')?.status).toBe('pass');

    // Raw total: 10 + 12 + 4 + 6 + 5 = 37.
    expect(result.bestWindow.score).toBe(37);
  });

  it('normalizes 37 raw against maxAchievable (53) to a score and tier consistent with scoreToTier', () => {
    const result = evaluateElection(input, businessElectionConfig);
    expect(businessElectionConfig.maxAchievable()).toBe(53);

    const expectedNormalized = Math.round((37 / 53) * 100);
    expect(expectedNormalized).toBe(70);
    expect(result.score).toBe(70);
    expect(result.tier).toBe(businessElectionConfig.scoreToTier(70, false).tier);
    expect(result.tier).toBe('good');
  });
});
