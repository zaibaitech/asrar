import { describe, expect, it } from 'vitest';
import { evaluateElection } from '../engine';
import { travelElectionConfig } from './travel';

describe('travelElectionConfig (config-driven-engine proof)', () => {
  it('runs through evaluateElection with no engine.ts changes', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-13T12:00:00Z'), lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: 'travel' },
      travelElectionConfig,
    );

    expect(result.electionType).toBe('travel');
    expect(result.rules).toHaveLength(8);
    expect(result.rules.map(r => r.id)).toEqual([
      'travel-moon-void-of-course',
      'travel-moon-malefic-hard-aspect',
      'travel-moon-combust',
      'travel-mercury-retrograde',
      'travel-moon-waxing',
      'travel-moon-applying-to-benefic',
      'travel-mercury-dignified',
      'travel-day-of-week',
    ]);
    expect(typeof result.score).toBe('number');
    expect(result.tierInfo).toBeDefined();
  });

  // 13 July 2026 was already established elsewhere in this suite
  // (ephemeris.test.ts's JPL regression block) as a date with Mercury
  // retrograde — reused here to assert the travel-specific penalty fires.
  it('applies an -8 penalty for Mercury retrograde on 13 July 2026', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-13T00:00:00+01:00'), lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: 'travel' },
      travelElectionConfig,
    );
    const mercuryRule = result.bestWindow.rules.find(r => r.id === 'travel-mercury-retrograde');
    expect(mercuryRule?.status).toBe('penalty');
    expect(mercuryRule?.points).toBe(-8);
  });

  // 24 July 2026 was already established as Mercury direct.
  it('applies no penalty for Mercury direct on 24 July 2026', () => {
    const result = evaluateElection(
      { datetime: new Date('2026-07-24T06:00:00+01:00'), lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: 'travel' },
      travelElectionConfig,
    );
    const mercuryRule = result.bestWindow.rules.find(r => r.id === 'travel-mercury-retrograde');
    expect(mercuryRule?.status).toBe('pass');
    expect(mercuryRule?.points).toBe(0);
  });
});
