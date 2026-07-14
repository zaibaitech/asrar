import { describe, it, expect } from 'vitest';
import { marriageElectionConfig } from './elections/marriage';
import { travelElectionConfig } from './elections/travel';
import { businessElectionConfig } from './elections/business';
import { evaluateDateRange } from './engine';
import { ElectionRulesConfig } from './types';

/**
 * Every registered election config, in one place — used by the
 * cross-type sanity property test below so a future election type
 * automatically gets checked without editing test logic, only this list.
 */
const ALL_ELECTION_CONFIGS: { name: string; config: ElectionRulesConfig }[] = [
  { name: 'marriage', config: marriageElectionConfig },
  { name: 'travel', config: travelElectionConfig },
  { name: 'business', config: businessElectionConfig },
];

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

// Phase 3 Part 3: cross-type property test. Guards against a future
// election type shipping with the same shape of bug that prompted this
// whole normalization pass — a bonus pool too small, relative to its own
// tier bands, for a real scan to ever reach Maqbūl/Acceptable. Runs an
// actual 90-day scan per config (same mechanism as the scan-sanity dev
// warning in engine.ts) and hard-fails CI rather than only warning,
// since this is checked once per config at test time, not on every user
// scan.
describe('cross-type maxAchievable sanity (Phase 3 Part 3)', () => {
  it.each(ALL_ELECTION_CONFIGS)(
    '$name: maxAchievable() is a positive, realistic pool ($config.electionType)',
    ({ config }) => {
      const max = config.maxAchievable();
      expect(max).toBeGreaterThan(0);
      // A pool under 40 raw points can't normalize to the 'acceptable'
      // threshold (40) without EVERY bonus rule firing simultaneously —
      // an unrealistic bar for any real date. 80 is the plan's own
      // recommended floor; below that we fall through to the real scan
      // check below rather than failing outright, since a smaller but
      // still-reachable pool (like travel's 59) is legitimate.
      expect(max).toBeGreaterThanOrEqual(40);
    },
  );

  it.each(ALL_ELECTION_CONFIGS)(
    '$name: a real 90-day scan reaches Maqbūl/Acceptable or better on at least one day',
    ({ config }) => {
      const start = new Date('2026-07-13T12:00:00Z');
      const end = new Date('2026-10-11T12:00:00Z'); // 90 days
      const results = evaluateDateRange(start, end, EDINBURGH.lat, EDINBURGH.lon, EDINBURGH.tz, config.electionType, config);

      const acceptableOrBetter = new Set(['excellent', 'good', 'acceptable']);
      const anyAcceptable = results.some(r => !r.hasHardFail && acceptableOrBetter.has(r.tier));
      expect(anyAcceptable).toBe(true);
    },
  );
});
