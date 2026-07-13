import { describe, it, expect } from 'vitest';
import { evaluateElection } from '../engine';
import { marriageElectionConfig, marriageElectionConfigStrictHourRuler } from './marriage';
import { ElectionInput } from '../types';

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

// Phase 3 Part 1 (score normalization): WindowScore.score stays RAW point
// totals (unaffected by normalization — this is what the rule breakdown
// displays and what these two tests originally asserted, 44 / 38). Only
// ElectionResult.score is normalized to 0-100 via raw/maxAchievable()*100.
// marriageElectionConfig.maxAchievable() is 79 (sum of every bonus rule's
// declared maxPoints, deduplicated by exclusiveGroup — no marriage rules
// currently share a group, so it's a plain sum: 20+15+12+10+10+6+6=79).
// Normalized: 44/79*100 ≈ 55.7 → 56, 38/79*100 ≈ 48.1 → 48. Both land in
// the Maqbūl/Acceptable tier (>=40) — before normalization shipped, a raw
// 38 would have been Ḍaʿīf/Weak (<40) under the same 0-100-shaped tier
// bands, since those bands were calibrated assuming marriage's ~79-point
// pool could be read directly as a percentage. This is the exact
// miscalibration normalization fixes.
describe('SCHOLAR-REVIEW: strictHourRuler conditional planetary-hour bonus', () => {
  // 24 July 2026, 06:00 Edinburgh: this window's planetary hour is ruled
  // by Venus, and Venus is genuinely in Virgo (its classical fall) at this
  // instant. Score expectations (44 / 38) are the user's own external
  // reference values, not independently re-derived against JPL Horizons in
  // this test — if this fails after an unrelated change, re-verify the
  // reference before assuming the change is wrong.
  const input: ElectionInput = {
    datetime: new Date('2026-07-24T06:00:00+01:00'),
    lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz,
    electionType: 'marriage',
  };

  it('with strictHourRuler off (default), the 06:00 window scores 44 raw with the Venus-hour bonus applied', () => {
    const result = evaluateElection(input, marriageElectionConfig);
    const window = result.allWindows.find(w => w.time.getTime() === new Date('2026-07-24T05:00:00.000Z').getTime());
    expect(window).toBeDefined();
    expect(window!.score).toBe(44);

    const hourRule = window!.rules.find(r => r.id === 'planetary-hour');
    expect(hourRule?.status).toBe('bonus');
    expect(hourRule?.points).toBe(6);
    expect(hourRule?.detail_en).toContain('Venus');
  });

  it('with strictHourRuler on, the 06:00 window scores 38 raw — the Venus-hour bonus is suppressed because Venus is in fall', () => {
    const result = evaluateElection(input, marriageElectionConfigStrictHourRuler);
    const window = result.allWindows.find(w => w.time.getTime() === new Date('2026-07-24T05:00:00.000Z').getTime());
    expect(window).toBeDefined();
    expect(window!.score).toBe(38);

    const hourRule = window!.rules.find(r => r.id === 'planetary-hour');
    expect(hourRule?.status).toBe('pass');
    expect(hourRule?.points).toBe(0);
    expect(hourRule?.detail_en).toContain('[SCHOLAR-REVIEW]');
    expect(hourRule?.detail_en).toContain('fall');
  });

  it('normalizes the 44-raw / 38-raw window scores against the pool max (79) consistently with scoreToTier', () => {
    expect(marriageElectionConfig.maxAchievable()).toBe(79);
    const normalizedOff = Math.round((44 / 79) * 100);
    const normalizedOn = Math.round((38 / 79) * 100);
    expect(normalizedOff).toBe(56);
    expect(normalizedOn).toBe(48);
    // Both normalized scores land in the same tier band (Maqbūl/Acceptable,
    // >=40) as each other and as marriageElectionConfig.scoreToTier would
    // independently derive — the whole point of normalization is that tier
    // meaning no longer depends on which election type produced the score.
    expect(marriageElectionConfig.scoreToTier(normalizedOff, false).tier).toBe('acceptable');
    expect(marriageElectionConfig.scoreToTier(normalizedOn, false).tier).toBe('acceptable');
  });

  it('marriageElectionConfig defaults to strictHourRuler: false, preserving existing scoring', () => {
    expect(marriageElectionConfig.strictHourRuler).toBe(false);
  });

  it('marriageElectionConfigStrictHourRuler is otherwise identical (same rule count, tiers, civil-hours range)', () => {
    expect(marriageElectionConfigStrictHourRuler.rules).toHaveLength(marriageElectionConfig.rules.length);
    expect(marriageElectionConfigStrictHourRuler.tiers).toBe(marriageElectionConfig.tiers);
    expect(marriageElectionConfigStrictHourRuler.civilHoursRange).toEqual(marriageElectionConfig.civilHoursRange);
    expect(marriageElectionConfigStrictHourRuler.strictHourRuler).toBe(true);
  });
});
