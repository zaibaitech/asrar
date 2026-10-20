import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { pickLabel, ruleStatusLabel, yourLocationLabel, YOUR_LOCATION_SENTINEL, type UiLang } from '../features/ikhtiyarat/copy';
import { getMedicalBadges } from './ikhtiyarat/medicalBadges';
import { evaluateElection } from './ikhtiyarat/engine';
import { medicalElectionConfig } from './ikhtiyarat/elections/medical';

/**
 * Phase 5: the labels around the Ikhtiyārāt rule list that the Phase 4 browser check found in English in
 * Urdu mode ("Pass", "Penalty", "Bonus", "Your Location", "Zodiac Man Caution"). They are localized in
 * the component code (pickLabel, driven by LanguageContext.uiLanguage), not only by the DOM catalog.
 * English and French must come out exactly as before.
 */
const root = path.resolve(__dirname, '../..');
const read = (rel: string) => readFileSync(path.join(root, rel), 'utf8');
const URDU = /[؀-ۿ]/;

describe('rule status labels (RuleRow)', () => {
  it('English and French are unchanged', () => {
    const en = Object.fromEntries(Object.entries(ruleStatusLabel).map(([k, v]) => [k, v.en]));
    const fr = Object.fromEntries(Object.entries(ruleStatusLabel).map(([k, v]) => [k, v.fr]));
    expect(en).toEqual({ pass: 'Pass', fail: 'Fail', bonus: 'Bonus', penalty: 'Penalty', hardfail: 'Hard fail' });
    expect(fr).toEqual({ pass: 'Réussi', fail: 'Échec', bonus: 'Bonus', penalty: 'Pénalité', hardfail: 'Échec critique' });
  });

  it('every status has its own Urdu text, and the three that the browser check found are the agreed terms', () => {
    for (const [status, label] of Object.entries(ruleStatusLabel)) {
      expect(label.ur, status).toMatch(URDU);
      expect(label.ur, status).not.toBe(label.en);
    }
    expect(pickLabel(ruleStatusLabel.pass, 'en', 'ur')).toBe('پاس');
    expect(pickLabel(ruleStatusLabel.penalty, 'en', 'ur')).toBe('منفی نمبر');
    expect(pickLabel(ruleStatusLabel.bonus, 'en', 'ur')).toBe('اضافی نمبر'); // same term as the Detailed-mode sentences
  });

  it('the statuses used by the rule engine are exactly the statuses that have a label', () => {
    const src = read('src/lib/ikhtiyarat/types.ts');
    const union = /type RuleStatus\s*=\s*([^;]+);/.exec(src)?.[1].match(/'([a-z]+)'/g)?.map((x) => x.replace(/'/g, '')) ?? [];
    expect(union.sort()).toEqual(Object.keys(ruleStatusLabel).sort());
  });
});

describe('pickLabel', () => {
  it.each<[UiLang, string, string]>([
    ['en', 'en', 'Pass'],
    ['fr', 'fr', 'Réussi'],
    ['en', 'ar', 'Pass'], // Arabic mode reuses the English copy; its text comes from the Arabic catalog
    ['en', 'ur', 'پاس'],
  ])('copy %s, interface %s → %s', (language, uiLanguage, expected) => {
    expect(pickLabel(ruleStatusLabel.pass, language, uiLanguage)).toBe(expected);
  });

  it('falls back to English when a label has no French or Urdu text', () => {
    expect(pickLabel({ en: 'Only English' }, 'fr', 'fr')).toBe('Only English');
    expect(pickLabel({ en: 'Only English' }, 'en', 'ur')).toBe('Only English');
  });
});

describe('"Your Location"', () => {
  it('is the sentinel src/utils/location.ts returns when the place name cannot be looked up', () => {
    expect(read('src/utils/location.ts')).toContain(`'${YOUR_LOCATION_SENTINEL}'`);
    expect(YOUR_LOCATION_SENTINEL).toBe('Your Location');
  });

  it('shows «آپ کا مقام» in Urdu mode and the old text everywhere else (French included, as before)', () => {
    expect(pickLabel(yourLocationLabel, 'en', 'ur')).toBe('آپ کا مقام');
    expect(pickLabel(yourLocationLabel, 'en', 'en')).toBe('Your Location');
    expect(pickLabel(yourLocationLabel, 'fr', 'fr')).toBe('Your Location');
  });

  it('CheckDateView localizes the sentinel only, and keeps real place names untouched', () => {
    const src = read('src/features/ikhtiyarat/components/CheckDateView.tsx');
    expect(src).toContain('location.cityName === YOUR_LOCATION_SENTINEL');
    expect(src).toContain('pickLabel(yourLocationLabel, language, uiLanguage)');
    expect(src).toContain("location.cityName ?? `${location.latitude.toFixed(2)}, ${location.longitude.toFixed(2)}`");
  });
});

describe('"Zodiac Man Caution" (medical badge)', () => {
  const result = evaluateElection(
    { datetime: new Date(Date.UTC(2026, 5, 3, 9, 0, 0)), lat: 55.95, lon: -3.19, tz: 'Europe/London', electionType: 'medical' } as never,
    medicalElectionConfig,
  );
  const badge = getMedicalBadges(result, 'aries' as never).find((b) => b.id === 'zodiac-man-caution')!;

  it('keeps its English, French and Arabic text and gains an Urdu label', () => {
    expect(badge.label.en).toBe('Zodiac Man Caution');
    expect(badge.label.fr).toBe('Prudence — Homme Zodiacal');
    expect(badge.label.ar).toBe('تنبيه الإنسان الفلكي');
    expect(badge.label.ur).toBe('احتیاط — انسانِ فلکی');
  });

  it('SunnahBadges picks the Urdu label in Urdu mode and still prints the Arabic beside it', () => {
    expect(pickLabel(badge.label, 'en', 'ur')).toBe('احتیاط — انسانِ فلکی');
    expect(pickLabel(badge.label, 'fr', 'fr')).toBe('Prudence — Homme Zodiacal');
    expect(read('src/features/ikhtiyarat/components/SunnahBadges.tsx')).toContain('pickLabel(badge.label, language, uiLanguage)');
  });

  it('the note keeps its safety wording in every language (this phase changes labels only)', () => {
    expect(badge.note.en).toMatch(/always follow qualified medical advice/);
    expect(badge.note.fr).toMatch(/professionnel de santé qualifié/);
  });
});
