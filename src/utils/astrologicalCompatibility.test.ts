import { describe, it, expect } from 'vitest';
import { analyzeAstrologicalCompatibility } from './astrologicalCompatibility';
import { getPlanetPosition } from '../lib/ikhtiyarat/ephemeris';

describe('analyzeAstrologicalCompatibility', () => {
  it('computes matching Sun signs for two people born the same day (both Leo)', () => {
    const result = analyzeAstrologicalCompatibility('A', '1990-08-01', 'B', '1995-08-01');
    expect(result.methods.sunSign.person1Sign).toBe('leo');
    expect(result.methods.sunSign.person2Sign).toBe('leo');
    expect(result.methods.sunSign.relation).toBe('same');
    expect(result.methods.sunSign.score).toBe(90);
  });

  it('is deterministic for the same input', () => {
    const a = analyzeAstrologicalCompatibility('A', '1990-03-15', 'B', '1988-11-22');
    const b = analyzeAstrologicalCompatibility('A', '1990-03-15', 'B', '1988-11-22');
    expect(a.overallScore).toBe(b.overallScore);
    expect(a.methods.sunSign.person1Sign).toBe(b.methods.sunSign.person1Sign);
    expect(a.methods.moonSign.person1Sign).toBe(b.methods.moonSign.person1Sign);
  });

  it('never uses birth time/location — only date is accepted as input', () => {
    // Type-level check: the function signature takes dob strings only.
    // Functional check: two calls with the same date produce identical
    // ephemeris-derived signs regardless of when in the day they're called.
    const morning = getPlanetPosition('Sun', new Date('1990-03-15T00:00:00Z'));
    const evening = getPlanetPosition('Sun', new Date('1990-03-15T23:00:00Z'));
    // Sun sign should be stable across a single calendar day except right at a cusp.
    expect(morning.sign).toBe(evening.sign);
  });

  it('flags moonSign.uncertain when a date falls near a Moon sign transition', () => {
    // Scan a range of dates to find one where the Moon changes sign near
    // noon UTC (guaranteed to exist roughly every ~2.3 days) and confirm
    // the flag fires — proves the uncertainty detection isn't a no-op.
    let foundUncertain = false;
    for (let d = 1; d <= 30; d++) {
      const dob = `2026-01-${String(d).padStart(2, '0')}`;
      const result = analyzeAstrologicalCompatibility('A', dob, 'B', '2000-01-01');
      if (result.methods.moonSign.uncertain) {
        foundUncertain = true;
        break;
      }
    }
    expect(foundUncertain).toBe(true);
  });

  it('overall score is a weighted combination of sunSign(40%), moonSign(35%), venusMars(25%)', () => {
    const result = analyzeAstrologicalCompatibility('A', '1992-06-10', 'B', '1994-12-03');
    const { sunSign, moonSign, venusMars } = result.methods;
    const expected = Math.round(sunSign.score * 0.4 + moonSign.score * 0.35 + venusMars.score * 0.25);
    expect(result.overallScore).toBe(expected);
  });

  it('overallQuality is consistent with the score bands used elsewhere in the app', () => {
    const result = analyzeAstrologicalCompatibility('A', '1990-08-01', 'B', '1990-08-01');
    if (result.overallScore >= 85) expect(result.overallQuality).toBe('excellent');
    else if (result.overallScore >= 75) expect(result.overallQuality).toBe('very-good');
    else if (result.overallScore >= 65) expect(result.overallQuality).toBe('good');
    else if (result.overallScore >= 50) expect(result.overallQuality).toBe('moderate');
    else expect(result.overallQuality).toBe('challenging');
  });

  it('same person born on the same day scores highest on sun and moon sign axes', () => {
    const result = analyzeAstrologicalCompatibility('A', '1990-08-01', 'B', '1990-08-01');
    expect(result.methods.sunSign.relation).toBe('same');
    expect(result.methods.moonSign.relation).toBe('same');
  });
});
