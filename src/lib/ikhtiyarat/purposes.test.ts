import { describe, expect, it } from 'vitest';
import {
  PURPOSES,
  PURPOSE_SLUGS,
  computeNextFavouredHours,
  computeUpcomingDates,
  getCautionLabels,
  getFavouredHourPlanets,
  getFavouredWeekdays,
} from './purposes';

describe('best-day-for purposes', () => {
  it('reads the favoured weekdays from each config', () => {
    const days = (slug: keyof typeof PURPOSES) => getFavouredWeekdays(PURPOSES[slug].config).map((w) => w.day);
    expect(days('marriage')).toEqual([5, 4, 1]);
    expect(days('travel').sort()).toEqual([3, 4]);
    expect(days('business').sort()).toEqual([3, 4]);
    expect(days('moving-home').sort()).toEqual([4, 6]);
  });

  it('reads the favoured planetary hours from each config', () => {
    expect(getFavouredHourPlanets(PURPOSES.marriage.config).sort()).toEqual(['Jupiter', 'Moon', 'Venus']);
    expect(getFavouredHourPlanets(PURPOSES.travel.config).sort()).toEqual(['Jupiter', 'Mercury', 'Moon']);
    expect(getFavouredHourPlanets(PURPOSES.business.config).sort()).toEqual(['Jupiter', 'Mercury']);
    expect(getFavouredHourPlanets(PURPOSES['moving-home'].config).sort()).toEqual(['Jupiter', 'Saturn']);
  });

  it('finds every caution rule id in its config (guards against renamed rule ids)', () => {
    for (const slug of PURPOSE_SLUGS) {
      expect(getCautionLabels(PURPOSES[slug])).toHaveLength(PURPOSES[slug].hardFailRuleIds.length);
    }
  });

  it('lists upcoming dates on or after the given day, best first by date', () => {
    const dates = computeUpcomingDates('travel', '2026-10-05', 30);
    expect(dates.length).toBeGreaterThan(0);
    const ymds = dates.map((d) => d.ymd);
    expect([...ymds].sort()).toEqual(ymds);
    expect(ymds[0] >= '2026-10-05').toBe(true);
    for (const d of dates) expect(['excellent', 'good', 'acceptable']).toContain(d.tier);
  });

  it('returns future planetary hours ruled by a favoured planet', () => {
    const now = new Date('2026-10-05T10:00:00Z');
    const hours = computeNextFavouredHours('business', now);
    expect(hours).toHaveLength(6);
    for (const h of hours) {
      expect(['Mercury', 'Jupiter']).toContain(h.planet);
      expect(new Date(h.endIso).getTime()).toBeGreaterThan(now.getTime());
    }
  });
});
