import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { getSunnahBadges } from './ikhtiyarat/hijri';
import { getMedicalBadges } from './ikhtiyarat/medicalBadges';
import { getTravelBadges } from './ikhtiyarat/travelBadges';
import { evaluateElection } from './ikhtiyarat/engine';
import { medicalElectionConfig } from './ikhtiyarat/elections/medical';
import { travelElectionConfig } from './ikhtiyarat/elections/travel';
import { ZODIAC_MAN_BODY_PART } from './ikhtiyarat/zodiacMan';

/** Phase 15: Arabic interface no longer shows the English/French badge note in front of the Arabic one; «اسرار» in the Urdu About text. */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const AR = /[؀-ۿ]/;

describe('every badge that SunnahBadges can show has a real Arabic note (so hiding the English line in the Arabic interface loses nothing)', () => {
  it('Sunnah/marriage badges over two years of dates', () => {
    const seen = new Set<string>();
    for (let i = 0; i < 730; i += 1) for (const b of getSunnahBadges(new Date(Date.UTC(2026, 0, 1 + i, 12)))) { seen.add(b.id); expect(b.note.ar, b.id).toMatch(AR); expect(b.note.ar.trim().length).toBeGreaterThan(10); }
    expect(seen.size).toBeGreaterThan(0);
  });

  it('travel badges over every weekday and several hours', () => {
    const seen = new Set<string>();
    for (let d = 0; d < 7; d += 1) for (const h of [5, 9, 13, 17, 22]) {
      const r = evaluateElection({ datetime: new Date(Date.UTC(2026, 5, 1 + d, h, 0, 0)), lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: 'travel' } as never, travelElectionConfig);
      for (const b of getTravelBadges(r)) { seen.add(b.id); expect(b.note.ar, b.id).toMatch(AR); }
    }
    expect(seen.size).toBeGreaterThan(0);
  });

  it('medical badges for the 12 signs on every weekday', () => {
    for (let d = 0; d < 7; d += 1) {
      const r = evaluateElection({ datetime: new Date(Date.UTC(2026, 5, 1 + d, 9, 0, 0)), lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: 'medical' } as never, medicalElectionConfig);
      for (const sign of Object.keys(ZODIAC_MAN_BODY_PART)) for (const b of getMedicalBadges(r, sign as never)) { expect(b.note.ar, b.id).toMatch(AR); expect(b.note.ar).not.toMatch(/[A-Za-z]/); }
    }
  });
});

describe('SunnahBadges language selection', () => {
  const src = read('src/features/ikhtiyarat/components/SunnahBadges.tsx');
  it("skips the language-selected (English/French) note only in the Arabic interface, and only when an Arabic note exists", () => {
    expect(src).toContain("!(uiLanguage === 'ar' && badge.note.ar) && (");
    expect(src).toContain('pickLabel(badge.note, language, uiLanguage)');
    expect(src).toMatch(/<p dir="rtl" lang="ar"/);
  });
  it('English, French and Urdu keep both lines (selected-language note, then the Arabic one)', () => {
    // the first paragraph is guarded by the Arabic-interface condition alone
    expect(src.match(/uiLanguage === 'ar'/g)!.length).toBe(2);
  });
});

describe('brand spelling in the Urdu About text', () => {
  it('the Urdu branch of the mobile menu writes «اسرار», like /ur and the catalog; English keeps Asrār', () => {
    const src = read('src/components/MobileMenu.tsx');
    const ur = src.slice(src.indexOf("uiLanguage === 'ur' ?"), src.indexOf(') : ('));
    expect(ur).toContain('<strong>اسرار</strong>');
    expect(ur).not.toContain('Asrār');
    expect(src).toContain('<strong>Asrār</strong> is your guide');
  });
});
