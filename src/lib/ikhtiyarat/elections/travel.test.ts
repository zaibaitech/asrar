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
    expect(result.rules.length).toBe(2);
    expect(result.rules.map(r => r.id)).toEqual(['travel-moon-void-of-course', 'travel-moon-waxing']);
    expect(typeof result.score).toBe('number');
    expect(result.tierInfo).toBeDefined();
  });
});
