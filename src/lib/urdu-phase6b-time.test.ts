import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { withUrduDayPeriod } from '../components/i18n/ArabicDomTranslator';

/** Phase 6B: 12-hour times in Urdu mode use the Urdu period-of-the-day words from ICU, not Latin AM/PM. */
const at = (h: number, m: number) => new Date(Date.UTC(2026, 0, 5, h, m));
const fmt = (d: Date, locale: string, o: Intl.DateTimeFormatOptions, urdu = false) =>
  new Intl.DateTimeFormat(locale, { timeZone: 'UTC', ...(urdu ? withUrduDayPeriod(o) : o) }).format(d);
const H12 = { hour: 'numeric', minute: '2-digit', hour12: true } as const;

describe('Urdu 12-hour clock', () => {
  it('morning, noon, afternoon, evening, night and midnight read in Urdu, with the same digits and minutes', () => {
    const got = [[9, 5], [12, 0], [15, 45], [17, 0], [19, 30], [0, 5], [3, 10]].map(([h, m]) => fmt(at(h, m), 'ur-u-nu-latn', H12, true));
    expect(got).toEqual(['9:05 صبح', '12:00 دوپہر', '3:45 دوپہر', '5:00 سہ پہر', '7:30 شام', '12:05 رات', '3:10 رات']);
  });

  it('keeps the hour and minute of the value, and never prints Latin AM or PM', () => {
    for (let h = 0; h < 24; h += 1) for (const m of [0, 5, 59]) {
      const s = fmt(at(h, m), 'ur-u-nu-latn', H12, true);
      expect(s).not.toMatch(/AM|PM/);
      const shown = Number(s.split(':')[0]);
      expect(shown).toBe(h % 12 === 0 ? 12 : h % 12);
      expect(s).toContain(`:${String(m).padStart(2, '0')}`);
    }
  });

  it('2-digit hours and seconds work too', () => {
    expect(fmt(at(15, 45), 'ur-u-nu-latn', { hour: '2-digit', minute: '2-digit' }, true)).toBe('03:45 دوپہر');
    expect(fmt(at(15, 45), 'ur-u-nu-latn', { hour: 'numeric', minute: '2-digit', second: '2-digit' }, true)).toMatch(/^3:45:00 دوپہر$/);
  });

  it('leaves everything else as requested: 24-hour clocks, styles, no hour, an explicit dayPeriod', () => {
    const same = [{ hour: '2-digit', minute: '2-digit', hour12: false }, { hour: 'numeric', hourCycle: 'h23' }, { timeStyle: 'short' }, { dateStyle: 'short' },
      { year: 'numeric', month: 'long' }, { hour: 'numeric', dayPeriod: 'long' }] as Intl.DateTimeFormatOptions[];
    for (const o of same) expect(withUrduDayPeriod(o)).toBe(o);
    expect(withUrduDayPeriod(undefined)).toBeUndefined();
    expect(fmt(at(15, 45), 'ur-u-nu-latn', { hour: '2-digit', minute: '2-digit', hour12: false }, true)).toBe('15:45');
  });

  it('does not change the instant: the same value in another zone still shifts by its offset', () => {
    const d = at(23, 30);
    const tz = (zone: string) => new Intl.DateTimeFormat('ur-u-nu-latn', { timeZone: zone, ...withUrduDayPeriod(H12) }).format(d);
    expect(tz('UTC')).toBe('11:30 رات');
    expect(tz('Africa/Dakar')).toBe('11:30 رات');
    expect(tz('Asia/Karachi')).toBe('4:30 صبح');
  });

  it('English, French and Arabic output is untouched: only the Urdu branch of the translator asks for a day period', () => {
    for (const l of ['en-US', 'fr-FR', 'ar-u-nu-latn']) expect(fmt(at(15, 45), l, H12)).toBe(new Intl.DateTimeFormat(l, { timeZone: 'UTC', ...H12 }).format(at(15, 45)));
    expect(fmt(at(15, 45), 'en-US', H12)).toBe('3:45 PM');
    expect(fmt(at(15, 45), 'ar-u-nu-latn', H12)).toBe('3:45 م');
    const src = readFileSync(path.resolve(__dirname, '../components/i18n/ArabicDomTranslator.tsx'), 'utf8');
    expect(src).toContain("const periodOpts = (o: any) => (activeDateLocale === DATE_LOCALES.ur ? withUrduDayPeriod(o) : o);");
    expect(src.match(/periodOpts\(/g)!.length).toBe(3); // toLocaleTimeString, toLocaleString, Intl.DateTimeFormat
    expect(src).toMatch(/toLocaleDateString = function \(l\?: any, o\?: any\) \{ return orig\.ds\.call\(this, mapLocale\(l\) as any, o\)/);
  });
});
