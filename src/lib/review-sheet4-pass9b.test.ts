import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { LUNAR_MANSIONS } from './lunarMansions';

/** Review sheet 4 (pass 9) corrections and the Pass 9b follow-ups (Mario approved, 21 Oct 2026). */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const ur: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));
const ar: Record<string, string> = JSON.parse(read('public/i18n/ar-ui.json'));
const status = JSON.parse(read('scripts/i18n/ur/review_status.json'));
const buruj = read('src/data/burujData.json');
const arFixes: Record<string, { ar: string; status: string; id: string }> = JSON.parse(read('scripts/i18n/ar/source-fixes-2026-10.json'));

describe('review sheet 4 (pass 9)', () => {
  it('personal wellbeing is «عافیت», not «بہبود»; the muzzle is «شیر کی ناک»', () => {
    expect(ur['Wellbeing']).toBe('عافیت');
    expect(ur['The Muzzle']).toBe('شیر کی ناک');
    const s6 = (status.source_fixes_2026_10_21_list2 as { id: string; ur: string }[]).filter((e) => e.id === 'S6');
    expect(s6).toHaveLength(9);
    for (const e of s6) { expect(e.ur).not.toContain('بہبود'); expect(e.ur).toContain('عافیت'); }
    expect(ur['Healthcare & Caring Professions']).toBe('طبی خدمات اور نگہداشت کے پیشے');
  });
  it('Arabic stress is «الضغط النفسي» (never bare «الضغط» next to wellbeing); Thursday asks Allah for rizq', () => {
    const s6 = Object.values(arFixes).filter((e) => e.id === 'S6 (list 2)').map((e) => e.ar).join('\n');
    expect(s6).not.toMatch(/الضغط(?! النفسي)/);
    expect(ar['In tradition, Thursday is an especially blessed day for spiritual elevation, wealth-seeking, and expansion. Make du\'ā\' for rizq (sustenance). Begin long-term projects. Seek knowledge, visit scholars, and perform generous acts of sadaqah. The night between Thursday and Friday is especially blessed — use it for extra worship.']).toContain('ادعُ الله بالرزق');
  });
  it('all 28 mansion names have Urdu (section E)', () => {
    for (const m of LUNAR_MANSIONS) expect(ur[m.nameTransliteration], m.nameTransliteration).toMatch(/[\u0600-\u06FF]/);
    expect(ur['Baṭn al-Ḥūt']).toBe('بطن الحوت');
  });
  it('«سخت نظر» is gone and the six spot-check strings say «تناؤ والی نسبت»', () => {
    expect(Object.values(ur).join('\n')).not.toContain('سخت نظر');
    for (const r of status.spotcheck_sakht_nazar as { en: string; ur: string }[]) expect(ur[r.en]).toContain('تناؤ والی نسبت');
  });
});

describe('Pass 9b follow-ups', () => {
  it('French list-1 lines follow the approved English', () => {
    expect(buruj).not.toMatch(/mortalité infantile|l'aide arrive toujours|Reçoit une protection divine|Sessions de guérison puissantes|capacités de guérison|présence guérissante|mois de transformation|Goodwill|Armée du Salut|numérologie islamique|culminent ce jour saint|Votre empathie naturelle est la plus forte ce jour/);
  });
  it('archetype 9 asks Allah for protection; no "protection practices"; "Empty promises"', () => {
    const a = read('src/constants/soulConnectionArchetypes.ts');
    expect(a).not.toMatch(/increase protection practices|augmentez les pratiques de protection/);
    expect(LUNAR_MANSIONS.some((m) => m.unfavorableFor.en.includes('Empty vows'))).toBe(false);
    expect(LUNAR_MANSIONS.some((m) => m.unfavorableFor.fr.includes('Promesses creuses'))).toBe(true);
  });
  it('no healing promises left in the burj blessed-day or sadaqah texts (EN/FR)', () => {
    const d = JSON.parse(buruj).buruj_data as Record<string, { blessed_day: unknown; sadaqah: unknown }>;
    const txt = JSON.stringify(Object.values(d).map((b) => [b.blessed_day, b.sadaqah]));
    expect(txt).not.toMatch(/[Hh]ealing|guérison(?! \(shifāʾ\))|karmic|karmiques/);
  });
  it('Pass 9b reviewed (review 4): L1, A2, B4, B5 corrected, optional B3 applied; 2 Arabic confirmed; zero drafts remain', () => {
    const p = status.pass9b as { en: string; ur: string; status: string }[];
    expect(p).toHaveLength(13);
    for (const e of p) { expect(ur[e.en], e.en).toBe(e.ur); expect(e.status).toMatch(/^reviewed/); }
    expect(p.filter((e) => e.status === 'reviewed-corrected')).toHaveLength(3);
    expect(p.filter((e) => e.status === 'reviewed-corrected (optional)')).toHaveLength(1);
    const pass9bAr = Object.values(arFixes).filter((e) => e.id.endsWith('(pass 9b)'));
    expect(pass9bAr).toHaveLength(2);
    for (const e of pass9bAr) expect(e.status).toBe('reviewed');
    expect(Object.values(arFixes).filter((e) => e.status === 'draft')).toEqual([]);
    expect(JSON.stringify(status)).not.toMatch(/"status": ?"draft"/);
    const monday = Object.keys(ur).find((k) => k.startsWith('Monday is ideal for matters of the home'))!;
    expect(ur[monday]).toContain('جذباتی عافیت');
    expect(Object.values(ur).join('\n')).not.toMatch(/جذباتی بہبود|جذباتی سہولت/);
    expect(ur['When seeking emotional calm and wellbeing']).toBe('جب جذباتی سکون اور عافیت مقصود ہو');
    expect(ur['Emotional wellbeing, and counselling when needed']).toBe('جذباتی عافیت، اور ضرورت ہو تو کسی ماہر سے مشاورت');
    const goat = Object.keys(ur).find((k) => k.startsWith('The red goat'))!;
    expect(ur[goat]).toContain('گہری باطنی اصلاح');
    expect(ur[goat]).not.toContain('ذریعہ سمجھا جاتا');
  });
  it('unused old keys are pruned from the Arabic catalog', () => {
    expect(ar['Empty vows']).toBeUndefined();
    expect(ar['Keeping vows']).toBeUndefined();
    expect(Object.keys(ar).some((k) => k.startsWith('Thursday is the most blessed day'))).toBe(false);
    expect(Object.values(ur).join('\n')).not.toMatch(/عنصریت/);
    expect(Object.values(arFixes).map((e) => e.ar).join('\n')).not.toMatch(/عنصري|عنصرية|عناصري/);
  });
  it('SF3: number 10 is "traditionally associated with" authority, not a guarantee (EN/FR); reviewed Urdu kept', () => {
    expect(buruj).not.toMatch(/establishes ultimate material and spiritual authority|il établit l'autorité matérielle et spirituelle ultime/);
    const k = Object.keys(ur).find((x) => x.startsWith('In the numerological tradition, 10 is the number'))!;
    expect(k).toMatch(/it is traditionally associated with material and spiritual authority\.$/);
    expect(buruj).toContain("il est traditionnellement lié à l'autorité matérielle et spirituelle.");
    expect(ur[k]).toBe(status.sf3.ur);
    expect(status.sf3.status).toBe('reviewed');
  });
});
