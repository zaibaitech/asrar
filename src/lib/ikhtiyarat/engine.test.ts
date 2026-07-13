import { describe, it, expect, vi } from 'vitest';
import { evaluateElection, evaluateDateRange, findNearestBetterDates, computeMaxAchievable } from './engine';
import { marriageElectionConfig } from './elections/marriage';
import { ElectionInput, ElectionRulesConfig } from './types';

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

function inputFor(dateStr: string): ElectionInput {
  return { datetime: new Date(dateStr), lat: EDINBURGH.lat, lon: EDINBURGH.lon, tz: EDINBURGH.tz, electionType: 'marriage' };
}

describe('marriage election — 2026-07-13 Edinburgh (dark moon + combustion + Saturn square)', () => {
  const result = evaluateElection(inputFor('2026-07-13T12:00:00+01:00'), marriageElectionConfig);

  it('is a hard fail with tier Avoid', () => {
    expect(result.hasHardFail).toBe(true);
    expect(result.tier).toBe('avoid');
  });

  it('flags dark-moon and combustion hard fails across the day', () => {
    const allRuleIds = result.allWindows.flatMap(w => w.rules.filter(r => r.status === 'hardfail').map(r => r.id));
    expect(allRuleIds).toContain('dark-moon');
    expect(allRuleIds).toContain('moon-combust');
  });

  it('flags the applying Saturn square hard fail late in the day', () => {
    const lateWindow = result.allWindows.find(w =>
      w.rules.some(r => r.id === 'moon-malefic-hard-aspect' && r.status === 'hardfail'),
    );
    expect(lateWindow).toBeDefined();
  });
});

describe('marriage election — 2026-07-20 Edinburgh (via combusta + Saturn opposition)', () => {
  const result = evaluateElection(inputFor('2026-07-20T12:00:00+01:00'), marriageElectionConfig);

  it('is tier Avoid (score below 20, even on its cleanest window)', () => {
    expect(result.tier).toBe('avoid');
  });

  it('flags via combusta as a penalty and Saturn opposition as a hard fail somewhere in the day', () => {
    const viaCombustaWindow = result.allWindows.find(w => w.rules.some(r => r.id === 'via-combusta' && r.status === 'penalty'));
    expect(viaCombustaWindow).toBeDefined();
    const oppositionWindow = result.allWindows.find(w => w.rules.some(r => r.id === 'moon-malefic-hard-aspect' && r.status === 'hardfail'));
    expect(oppositionWindow).toBeDefined();
  });
});

describe('marriage election — 2026-07-16 to 07-18 Edinburgh (waxing, clearing the beams)', () => {
  it('is not a hard fail, unlike 2026-07-13 which is dark-moon all day', () => {
    const badDate = evaluateElection(inputFor('2026-07-13T12:00:00+01:00'), marriageElectionConfig);
    expect(badDate.hasHardFail).toBe(true);
    expect(badDate.tier).toBe('avoid');

    for (const dateStr of ['2026-07-17T09:00:00+01:00', '2026-07-18T09:00:00+01:00']) {
      const result = evaluateElection(inputFor(dateStr), marriageElectionConfig);
      expect(result.hasHardFail).toBe(false);
    }
  });

  it('scores higher than 2026-07-13’s worst (post-combustion) window', () => {
    const badDate = evaluateElection(inputFor('2026-07-13T21:00:00+01:00'), marriageElectionConfig);
    const worstWindowOn13th = badDate.allWindows[badDate.allWindows.length - 1];
    const goodDate = evaluateElection(inputFor('2026-07-17T09:00:00+01:00'), marriageElectionConfig);
    expect(goodDate.score).toBeGreaterThan(worstWindowOn13th.score);
  });
});

describe('property tests', () => {
  it('is deterministic for the same input', () => {
    const a = evaluateElection(inputFor('2026-07-17T12:00:00+01:00'), marriageElectionConfig);
    const b = evaluateElection(inputFor('2026-07-17T12:00:00+01:00'), marriageElectionConfig);
    expect(a.score).toBe(b.score);
    expect(a.tier).toBe(b.tier);
    expect(a.rules).toEqual(b.rules);
  });

  it('forces tier Avoid whenever any hard fail is present', () => {
    for (const dateStr of ['2026-07-13T12:00:00+01:00', '2026-07-20T12:00:00+01:00']) {
      const result = evaluateElection(inputFor(dateStr), marriageElectionConfig);
      if (result.hasHardFail) {
        expect(result.tier).toBe('avoid');
      }
    }
  });

  it('maps tier boundaries correctly at 20/40/60/80 with no hard fail', () => {
    const { scoreToTier } = marriageElectionConfig as any;
    expect(marriageElectionConfig.scoreToTier(19, false).tier).toBe('avoid');
    expect(marriageElectionConfig.scoreToTier(20, false).tier).toBe('weak');
    expect(marriageElectionConfig.scoreToTier(39, false).tier).toBe('weak');
    expect(marriageElectionConfig.scoreToTier(40, false).tier).toBe('acceptable');
    expect(marriageElectionConfig.scoreToTier(59, false).tier).toBe('acceptable');
    expect(marriageElectionConfig.scoreToTier(60, false).tier).toBe('good');
    expect(marriageElectionConfig.scoreToTier(79, false).tier).toBe('good');
    expect(marriageElectionConfig.scoreToTier(80, false).tier).toBe('excellent');
    expect(marriageElectionConfig.scoreToTier(100, true).tier).toBe('avoid');
  });
});

describe('day-boundary correctness across timezones', () => {
  // Regression test: evaluateElection's internal day-start calculation used
  // to anchor to UTC midnight rather than the user's actual local midnight,
  // so for any timezone with a non-trivial UTC offset, the 8 sub-daily
  // windows it scored didn't actually span the user's real local day —
  // for a timezone ahead of UTC (e.g. Sydney), the reported `date` and
  // window times could land on the *previous* local calendar day entirely.

  it('reports a date and windows that fall on the requested local calendar day (Los Angeles, UTC-7)', () => {
    const input: ElectionInput = {
      datetime: new Date('2026-07-13T14:00:00-07:00'), // 2pm PDT, user picked "2026-07-13"
      lat: 34.05, lon: -118.24, tz: 'America/Los_Angeles',
      electionType: 'marriage',
    };
    const result = evaluateElection(input, marriageElectionConfig);

    const dateLocalDay = result.date.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });
    expect(dateLocalDay).toBe('7/13/2026');

    for (const window of result.allWindows) {
      const windowLocalDay = window.time.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });
      expect(windowLocalDay).toBe('7/13/2026');
    }
  });

  it('reports a date and windows that fall on the requested local calendar day (Sydney, UTC+10)', () => {
    const input: ElectionInput = {
      datetime: new Date('2026-07-13T14:00:00+10:00'), // 2pm AEST, user picked "2026-07-13"
      lat: -33.87, lon: 151.21, tz: 'Australia/Sydney',
      electionType: 'marriage',
    };
    const result = evaluateElection(input, marriageElectionConfig);

    const dateLocalDay = result.date.toLocaleDateString('en-US', { timeZone: 'Australia/Sydney' });
    expect(dateLocalDay).toBe('7/13/2026');

    for (const window of result.allWindows) {
      const windowLocalDay = window.time.toLocaleDateString('en-US', { timeZone: 'Australia/Sydney' });
      expect(windowLocalDay).toBe('7/13/2026');
    }
  });

  it('reports a date that falls on the requested local calendar day for a half-hour offset (India, UTC+5:30)', () => {
    const input: ElectionInput = {
      datetime: new Date('2026-03-01T10:00:00+05:30'),
      lat: 28.61, lon: 77.21, tz: 'Asia/Kolkata',
      electionType: 'marriage',
    };
    const result = evaluateElection(input, marriageElectionConfig);
    const dateLocalDay = result.date.toLocaleDateString('en-US', { timeZone: 'Asia/Kolkata' });
    expect(dateLocalDay).toBe('3/1/2026');
  });
});

describe('civil-hours constraint on best-window selection', () => {
  // Synthetic config: score a window purely by how close its local hour is
  // to midnight (00:00), so the "objectively best" window across the full
  // day is always at h=0 (00:00) — outside any sane civil-hours range.
  // This isolates the civil-hours mechanism from real ephemeris data.
  const midnightPreferringTier = { tier: 'excellent' as const, labelEn: 'Excellent', labelFr: 'Excellent', labelAr: 'ممتاز', color: '#000' };
  function makeMidnightPreferringConfig(civilHoursRange?: { startHour: number; endHour: number }): ElectionRulesConfig {
    return {
      electionType: 'marriage',
      rules: [
        {
          id: 'closeness-to-midnight',
          label: { en: '', fr: '', ar: '' },
          evaluate(ctx) {
            const localHour = ctx.datetime.getUTCHours(); // datetime windows are constructed at exact local-midnight-relative offsets in UTC test fixtures below
            const distanceFromMidnight = Math.min(localHour, 24 - localHour);
            return {
              id: 'closeness-to-midnight', label_en: '', label_fr: '', label_ar: '',
              status: 'bonus', points: 24 - distanceFromMidnight,
              detail_en: '', detail_fr: '',
            };
          },
        },
      ],
      tiers: [midnightPreferringTier],
      scoreToTier: () => midnightPreferringTier,
      civilHoursRange,
      maxAchievable: () => 24,
    };
  }

  // UTC timezone so ctx.datetime's UTC hour equals the local hour directly,
  // keeping the synthetic rule's math simple and unambiguous.
  const utcInput: ElectionInput = {
    datetime: new Date('2026-07-13T12:00:00Z'),
    lat: 51.5, lon: 0, tz: 'UTC',
    electionType: 'marriage',
  };

  it('with a full-day (0-24) civil-hours range, the best window is midnight (00:00) for this synthetic config', () => {
    const result = evaluateElection(utcInput, makeMidnightPreferringConfig({ startHour: 0, endHour: 24 }));
    expect(result.bestWindow.time.getUTCHours()).toBe(0);
  });

  it('a config with no civilHoursRange falls back to the engine default (8-22), excluding midnight', () => {
    const result = evaluateElection(utcInput, makeMidnightPreferringConfig(undefined));
    const hour = result.bestWindow.time.getUTCHours();
    expect(hour).toBeGreaterThanOrEqual(8);
    expect(hour).toBeLessThan(22);
  });

  it('with an explicit civil-hours range of 8-22, the best window is constrained to that range', () => {
    const result = evaluateElection(utcInput, makeMidnightPreferringConfig({ startHour: 8, endHour: 22 }));
    const hour = result.bestWindow.time.getUTCHours();
    expect(hour).toBeGreaterThanOrEqual(8);
    expect(hour).toBeLessThan(22);
    // Within [8,22) on a 3-hour step, h=21 scores highest (closest to
    // midnight among the allowed hours) — h=9 and h=21 are NOT equidistant
    // (distance 9 vs 3), so this isn't a tie-break case.
    expect(hour).toBe(21);
  });

  it('marriageElectionConfig defaults to the 8-22 civil-hours range', () => {
    expect(marriageElectionConfig.civilHoursRange).toEqual({ startHour: 8, endHour: 22 });
  });

  it('isLeastAfflicted is true only when the chosen window still hard-fails', () => {
    const clean = evaluateElection(inputFor('2026-07-17T09:00:00+01:00'), marriageElectionConfig);
    expect(clean.isLeastAfflicted).toBe(clean.hasHardFail);

    const badDate = evaluateElection(inputFor('2026-07-13T12:00:00+01:00'), marriageElectionConfig);
    expect(badDate.hasHardFail).toBe(true);
    expect(badDate.isLeastAfflicted).toBe(true);
  });
});

describe('findNearestBetterDates', () => {
  // A short radius (vs. the 45-day production default) is enough to
  // exercise the filtering/sorting logic below without the full scan's
  // real-world runtime (each day requires 8 ephemeris-backed window
  // evaluations against 21 rules — see item 8a's caching work, which
  // addresses this cost directly). Even so, running the whole suite in
  // parallel can add real contention on top of the scan's own cost, so
  // these tests carry a generous timeout rather than a tight one tuned
  // only for an isolated run.
  const TEST_RADIUS_DAYS = 8;
  const SCAN_TEST_TIMEOUT = 20000;

  it('only returns dates reaching at least the acceptable tier, never merely "higher score than baseline"', () => {
    const input = inputFor('2026-07-13T12:00:00+01:00'); // known Avoid date
    const { dates } = findNearestBetterDates(input, marriageElectionConfig, 3, TEST_RADIUS_DAYS);
    for (const d of dates) {
      expect(d.hasHardFail).toBe(false);
      expect(['excellent', 'good', 'acceptable']).toContain(d.tier);
    }
  }, SCAN_TEST_TIMEOUT);

  it('sorts results by date-distance from the input date', () => {
    const input = inputFor('2026-07-13T12:00:00+01:00');
    const { dates } = findNearestBetterDates(input, marriageElectionConfig, 3, TEST_RADIUS_DAYS);
    for (let i = 1; i < dates.length; i++) {
      const prevDistance = Math.abs(dates[i - 1].date.getTime() - input.datetime.getTime());
      const currDistance = Math.abs(dates[i].date.getTime() - input.datetime.getTime());
      expect(currDistance).toBeGreaterThanOrEqual(prevDistance);
    }
  }, SCAN_TEST_TIMEOUT);

  it('reports radiusExhausted and provides bestAvailable when no acceptable date exists within a tiny radius', () => {
    const input = inputFor('2026-07-13T12:00:00+01:00');
    const { dates, radiusExhausted, bestAvailable } = findNearestBetterDates(input, marriageElectionConfig, 3, 0);
    expect(dates).toHaveLength(0);
    expect(radiusExhausted).toBe(true);
    expect(bestAvailable).toBeNull(); // searchRadiusDays=0 means the loop never runs, so nothing was scanned
  });

  it('bestAvailable is populated (not null) when the scan runs but nothing reaches acceptable', () => {
    // A radius of 1 day around a known Avoid date is very unlikely to
    // reach 'acceptable' (real astrology doesn't flip that fast), so this
    // exercises the "scanned, found nothing acceptable, report the best
    // candidate anyway" path without asserting exact scores.
    const input = inputFor('2026-07-13T12:00:00+01:00');
    const { dates, bestAvailable } = findNearestBetterDates(input, marriageElectionConfig, 3, 1);
    if (dates.length === 0) {
      expect(bestAvailable).not.toBeNull();
    }
  });

  it('is deterministic for the same input', () => {
    const input = inputFor('2026-07-13T12:00:00+01:00');
    const a = findNearestBetterDates(input, marriageElectionConfig, 3, TEST_RADIUS_DAYS);
    const b = findNearestBetterDates(input, marriageElectionConfig, 3, TEST_RADIUS_DAYS);
    expect(a.dates.map(d => d.date.toISOString())).toEqual(b.dates.map(d => d.date.toISOString()));
    expect(a.radiusExhausted).toBe(b.radiusExhausted);
  }, SCAN_TEST_TIMEOUT); // two scans back-to-back
});

describe('scan-sanity self-detecting calibration warning (Phase 3 Part 3)', () => {
  // This test reconstructs the exact symptom that caught the original
  // travel-election scoring bug: a config whose maxAchievable() is set
  // (deliberately, here) below its own 'acceptable' threshold, so no day
  // could ever normalize to Maqbūl no matter how many bonuses fire.
  const uncappableTier = { tier: 'weak' as const, labelEn: 'Weak', labelFr: 'Faible', labelAr: 'ضعيف', color: '#000' };
  const alwaysBonusRule = {
    id: 'always-bonus',
    label: { en: '', fr: '', ar: '' },
    maxPoints: 10,
    evaluate: () => ({ id: 'always-bonus', label_en: '', label_fr: '', label_ar: '', status: 'bonus' as const, points: 10, detail_en: '', detail_fr: '' }),
  };
  const uncappableConfig: ElectionRulesConfig = {
    electionType: 'travel',
    rules: [alwaysBonusRule],
    tiers: [uncappableTier],
    // scoreToTier here requires >=90 to reach anything but 'weak', while
    // maxAchievable() only allows 100 (10/10 raw = fully normalized) at
    // best — reconstructing the original bug's shape: a threshold the
    // config's own point pool can realistically never clear.
    scoreToTier: () => uncappableTier,
    maxAchievable: () => computeMaxAchievable([alwaysBonusRule]),
  };

  it('warns in dev when a 90+ day scan finds no day reaching Maqbūl/Acceptable or better', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const start = new Date('2026-01-01T12:00:00Z');
    const end = new Date('2026-04-15T12:00:00Z'); // > 90 days
    evaluateDateRange(start, end, EDINBURGH.lat, EDINBURGH.lon, EDINBURGH.tz, 'travel', uncappableConfig);
    expect(warnSpy).toHaveBeenCalledTimes(1);
    expect(warnSpy.mock.calls[0][0]).toContain('no day in a');
    expect(warnSpy.mock.calls[0][0]).toContain('reached Maqbūl/Acceptable or better');
    warnSpy.mockRestore();
  });

  it('does not warn for a well-calibrated config (marriage) over the same range', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const start = new Date('2026-01-01T12:00:00Z');
    const end = new Date('2026-04-15T12:00:00Z');
    evaluateDateRange(start, end, EDINBURGH.lat, EDINBURGH.lon, EDINBURGH.tz, 'marriage', marriageElectionConfig);
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });

  it('does not warn for scans shorter than the 90-day sanity threshold, even if uncalibrated', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
    const start = new Date('2026-01-01T12:00:00Z');
    const end = new Date('2026-01-10T12:00:00Z'); // 10 days
    evaluateDateRange(start, end, EDINBURGH.lat, EDINBURGH.lon, EDINBURGH.tz, 'travel', uncappableConfig);
    expect(warnSpy).not.toHaveBeenCalled();
    warnSpy.mockRestore();
  });
});
