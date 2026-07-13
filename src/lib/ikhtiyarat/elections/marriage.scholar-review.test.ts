import { describe, it, expect } from 'vitest';
import { evaluateElection } from '../engine';
import { marriageElectionConfig, marriageElectionConfigStrictHourRuler } from './marriage';
import { ElectionInput } from '../types';

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

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

  it('with strictHourRuler off (default), the 06:00 window scores 44 with the Venus-hour bonus applied', () => {
    const result = evaluateElection(input, marriageElectionConfig);
    const window = result.allWindows.find(w => w.time.getTime() === new Date('2026-07-24T05:00:00.000Z').getTime());
    expect(window).toBeDefined();
    expect(window!.score).toBe(44);

    const hourRule = window!.rules.find(r => r.id === 'planetary-hour');
    expect(hourRule?.status).toBe('bonus');
    expect(hourRule?.points).toBe(6);
    expect(hourRule?.detail_en).toContain('Venus');
  });

  it('with strictHourRuler on, the 06:00 window scores 38 — the Venus-hour bonus is suppressed because Venus is in fall', () => {
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
