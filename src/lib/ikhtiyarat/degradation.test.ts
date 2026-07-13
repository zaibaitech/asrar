import { describe, it, expect } from 'vitest';
import { findDayDegradation, getDayDegradationNote } from './degradation';
import { ElectionResult, RuleResult, WindowScore, TierInfo } from './types';

const TIER_INFO: TierInfo = { tier: 'good', labelEn: 'Good', labelFr: 'Bon', labelAr: '', color: '#000' };

function passRule(id: string): RuleResult {
  return { id, label_en: id, label_fr: id, label_ar: '', status: 'pass', points: 0, detail_en: '', detail_fr: '' };
}

function hardFailRule(id: string, label = 'Moon combust'): RuleResult {
  return { id, label_en: label, label_fr: label, label_ar: '', status: 'hardfail', points: 0, detail_en: '', detail_fr: '' };
}

function window(hourOffset: number, hasHardFail: boolean, rules: RuleResult[]): WindowScore {
  const dayStart = new Date('2026-07-13T00:00:00Z');
  return { time: new Date(dayStart.getTime() + hourOffset * 3600000), score: hasHardFail ? 0 : 50, rules, hasHardFail };
}

function makeResult(bestWindow: WindowScore, allWindows: WindowScore[]): ElectionResult {
  return {
    electionType: 'marriage',
    date: new Date('2026-07-13T00:00:00Z'),
    score: bestWindow.score,
    tier: 'good',
    tierInfo: TIER_INFO,
    hasHardFail: bestWindow.hasHardFail,
    rules: bestWindow.rules,
    bestWindow,
    allWindows,
    isLeastAfflicted: bestWindow.hasHardFail,
  };
}

describe('findDayDegradation', () => {
  it('returns null when no window differs from bestWindow', () => {
    const clean = window(9, false, [passRule('dark-moon')]);
    const result = makeResult(clean, [clean, window(12, false, [passRule('dark-moon')]), window(21, false, [passRule('dark-moon')])]);
    expect(findDayDegradation(result)).toBeNull();
  });

  it('detects a later window that newly hard-fails when bestWindow is clean', () => {
    const best = window(9, false, [passRule('moon-combust')]);
    const later = window(21, true, [hardFailRule('moon-combust', 'Moon combust')]);
    const result = makeResult(best, [best, window(12, false, [passRule('moon-combust')]), later]);

    const note = findDayDegradation(result);
    expect(note).not.toBeNull();
    expect(note!.worsensLater).toBe(true);
    expect(note!.hour).toBe(21);
    expect(note!.rule.label_en).toBe('Moon combust');
  });

  it('detects an earlier clean window when bestWindow itself hard-fails (isLeastAfflicted case)', () => {
    const earlier = window(9, false, [passRule('moon-combust')]);
    const best = window(21, true, [hardFailRule('moon-combust', 'Moon combust')]);
    const result = makeResult(best, [earlier, window(12, false, [passRule('moon-combust')]), best]);

    const note = findDayDegradation(result);
    expect(note).not.toBeNull();
    expect(note!.worsensLater).toBe(false);
    expect(note!.hour).toBe(21);
  });

  it('returns null when bestWindow hard-fails and every window that day hard-fails (no earlier clean window)', () => {
    const best = window(9, true, [hardFailRule('dark-moon')]);
    const result = makeResult(best, [best, window(12, true, [hardFailRule('dark-moon')]), window(21, true, [hardFailRule('dark-moon')])]);
    expect(findDayDegradation(result)).toBeNull();
  });
});

describe('getDayDegradationNote', () => {
  it('formats a worsens-later note in English', () => {
    const best = window(9, false, [passRule('moon-combust')]);
    const later = window(21, true, [hardFailRule('moon-combust', 'Moon combust')]);
    const result = makeResult(best, [best, later]);

    const note = getDayDegradationNote(result, 'en');
    expect(note).toBe('Conditions worsen later this day — Moon combust after ~21:00.');
  });

  it('formats a worsens-later note in French using label_fr', () => {
    const best = window(9, false, [passRule('moon-combust')]);
    const laterRule: RuleResult = { id: 'moon-combust', label_en: 'Moon combust', label_fr: 'Lune combuste', label_ar: '', status: 'hardfail', points: 0, detail_en: '', detail_fr: '' };
    const later = window(21, true, [laterRule]);
    const result = makeResult(best, [best, later]);

    const note = getDayDegradationNote(result, 'fr');
    expect(note).toBe('Les conditions se détériorent plus tard ce jour — Lune combuste après ~21:00.');
  });

  it('returns null when there is nothing to report', () => {
    const clean = window(9, false, [passRule('dark-moon')]);
    const result = makeResult(clean, [clean]);
    expect(getDayDegradationNote(result, 'en')).toBeNull();
  });
});
