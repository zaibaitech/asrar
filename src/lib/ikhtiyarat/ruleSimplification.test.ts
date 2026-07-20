import { describe, it, expect } from 'vitest';
import { marriageElectionConfig } from './elections/marriage';
import { travelElectionConfig } from './elections/travel';
import { businessElectionConfig } from './elections/business';
import { medicalElectionConfig } from './elections/medical';
import { homeElectionConfig } from './elections/home';
import { educationElectionConfig } from './elections/education';
import { evaluateDateRange } from './engine';
import { getSimplifiedRuleText } from './ruleSimplification';
import { ElectionRulesConfig, RuleResult } from './types';

const ALL_ELECTION_CONFIGS: { name: string; config: ElectionRulesConfig }[] = [
  { name: 'marriage', config: marriageElectionConfig },
  { name: 'travel', config: travelElectionConfig },
  { name: 'business', config: businessElectionConfig },
  { name: 'medical', config: medicalElectionConfig },
  { name: 'home', config: homeElectionConfig },
  { name: 'education', config: educationElectionConfig },
];

const EDINBURGH = { lat: 55.95, lon: -3.19, tz: 'Europe/London' };

/**
 * Every rule outcome that actually occurs across a realistic 90-day scan,
 * for every election type — this is the same range/location already used
 * by electionConfigs.test.ts's cross-type sanity suite, reused here so
 * this test naturally covers every branch each rule can take (hard fail,
 * penalty, bonus, neutral) rather than only the single date each
 * election's own elections/*.test.ts happens to pin.
 */
function collectAllFiredRules(config: ElectionRulesConfig): RuleResult[] {
  const start = new Date('2026-07-13T12:00:00Z');
  const end = new Date('2026-10-11T12:00:00Z');
  const results = evaluateDateRange(start, end, EDINBURGH.lat, EDINBURGH.lon, EDINBURGH.tz, config.electionType, config);
  return results.flatMap(r => r.bestWindow.rules);
}

describe('ruleSimplification completeness', () => {
  it.each(ALL_ELECTION_CONFIGS)(
    '$name: every rule outcome seen in a 90-day scan has a Simple-mode explanation (either a specific entry or the generic pass fallback)',
    ({ config }) => {
      const allRules = collectAllFiredRules(config);
      const missing = new Set<string>();

      for (const rule of allRules) {
        const en = getSimplifiedRuleText(rule, 'en');
        const fr = getSimplifiedRuleText(rule, 'fr');
        if (!en || !fr) {
          missing.add(`${rule.id} (status=${rule.status}, points=${rule.points})`);
        }
      }

      expect(Array.from(missing), `Missing simplification entries:\n${Array.from(missing).join('\n')}`).toEqual([]);
    },
  );
});
