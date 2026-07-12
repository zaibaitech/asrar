import { describe, it, expect } from 'vitest';
import { evaluateElection } from './engine';
import { marriageElectionConfig } from './elections/marriage';
import { ElectionInput } from './types';

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
