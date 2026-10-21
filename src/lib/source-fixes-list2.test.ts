import { describe, it, expect } from 'vitest';
import { readFileSync } from 'fs';
import path from 'path';
import { LUNAR_MANSIONS } from './lunarMansions';
import { PROPHETIC_NAMES_201 } from '../features/ramadanChallenges/propheticNames201';

/** Source changes list 2 (asrar-source-changes-for-mario-2.md), approved by Mario on 21 Oct 2026. */
const root = path.resolve(__dirname, '../..');
const read = (f: string) => readFileSync(path.join(root, f), 'utf8');
const ur: Record<string, string> = JSON.parse(read('public/i18n/ur-ui.json'));
const ar: Record<string, string> = JSON.parse(read('public/i18n/ar-ui.json'));
const status = JSON.parse(read('scripts/i18n/ur/review_status.json'));
type L2 = { id: string; en: string | null; en_before: string; ur?: string; ur_before?: string; status: string };
const list2 = status.source_fixes_2026_10_21_list2 as L2[];
const arFixes: Record<string, { ar: string; status: string; id: string }> = JSON.parse(read('scripts/i18n/ar/source-fixes-2026-10.json'));
const buruj = read('src/data/burujData.json');

describe('source fixes list 2 (21 Oct 2026)', () => {
  it('B1/B4: protection is sought from Allah in EN and FR; nothing is "Protected"', () => {
    expect(buruj).not.toMatch(/Traditionally, sought protection|Receives divine protection|"Protégé |Reçoit une protection divine dans/);
    expect(buruj.match(/In this tradition, (protection is sought from Allah|Allah's protection is sought) /g)).toHaveLength(11);
    expect(buruj.match(/Dans cette tradition, on demande la protection d'Allah /g)).toHaveLength(11);
  });

  it('B2/B3: blessed-day notes are hedged in EN and FR', () => {
    expect(buruj).toContain('Traditionally regarded as the day when your charisma');
    expect(buruj).toContain('Traditionally regarded as the day when your natural discipline');
    expect(buruj).not.toContain('Your transformative abilities peak');
    expect(buruj).not.toMatch(/"Votre (charisme|discipline)|Vos capacités de transformation culminent/);
  });

  it('B5: Ḥāshir has its own French gloss', () => {
    const h = PROPHETIC_NAMES_201.find((n) => n.transliteration === 'Ḥāshirun')!;
    expect(h.meaningFr).toBe('Celui sur les pas duquel les gens seront rassemblés');
  });

  it('S1/S3/S4/S5: lunar mansion texts', () => {
    const m = (n: number) => LUNAR_MANSIONS.find((x) => x.number === n)!;
    expect(m(1).favorableFor.en).toContain('Starting a treatment your doctor has advised');
    expect(m(1).favorableFor.fr).toContain('Commencer un traitement conseillé par votre médecin');
    expect(m(8).nameEn).toBe('The Muzzle');
    expect(m(8).nameFr).toBe('Le Mufle');
    expect(m(16).nameArabic).toBe('الزُّبانَى');
    expect(ur['Al-Zubānā']).toBe('الزبانیٰ');
    const vows = LUNAR_MANSIONS.find((x) => x.favorableFor.en.includes("Keeping one's commitments"))!;
    expect(vows.favorableFor.fr).toContain('Tenir ses engagements');
    expect(LUNAR_MANSIONS.some((x) => x.favorableFor.en.includes('Keeping vows'))).toBe(false);
    expect(ur["Keeping one's commitments"]).toBe('عہد و پیمان کی پاسداری');
  });

  it('S2: Thursday is hedged, the night is the one between Thursday and Friday (EN/FR)', () => {
    const p = read('app/(site)/planet-of-the-day/PlanetOfTheDayPage.tsx');
    expect(p).not.toContain('Thursday is the most blessed day');
    expect(p).toContain('The night between Thursday and Friday');
    expect(p).toContain('La nuit entre jeudi et vendredi');
  });

  it('S6–S8: soul-connection archetypes make no health prediction, no certainty, no amulet-style "protection practices"', () => {
    const a = read('src/constants/soulConnectionArchetypes.ts');
    const burdened = a.slice(a.indexOf("title: { en: 'The Burdened Path'"), a.indexOf('  5: {'));
    expect(burdened).not.toMatch(/[Hh]ealth|[Ss]anté/);
    expect(a).not.toMatch(/spiritual protection|protection practices rather|protection spirituelle|pratiques de protection plutôt/);
    expect(a.match(/protection through duʿāʾ and remembrance/g)).toHaveLength(4); // + archetype 9 key to success (Pass 9b)
    expect(a).not.toContain('Marriage starts with confusion');
    expect(a).not.toContain('trust are common.');
  });

  it('S10: no healing claims or alternative medicine among recommended careers (EN/FR)', () => {
    expect(buruj).not.toMatch(/"(Energy healing|Deep healing modalities|Alternative medicine|Healing arts|Healing arts practices|Holistic healing|Trauma healing work|Healing & \w+)"/);
    expect(buruj).not.toMatch(/Guérison énergétique|Modalités de guérison profonde|Médecine alternative|"Arts de guérison"/);
    expect(buruj).toContain('"Complementary wellness (alongside medical care)"');
  });

  it('S11: finance careers point to Sharīʿah-compliant forms (EN/FR)', () => {
    expect(buruj).not.toMatch(/"(Grain futures and commodities|Venture capital|Banking and finance|Investment management|Insurance|Investment banking|Insurance underwriting|Blockchain and crypto)"/);
    expect(buruj).toContain('"Takāful (Islamic cooperative insurance)"');
    expect(buruj).toContain('"Banque et finance islamiques"');
  });

  it('S12/S13: rizq is not from people; the career note speaks of the tradition', () => {
    expect(buruj).not.toContain('providing sustenance');
    const c = read('src/features/istikhara/components/CareerTabAdvanced.tsx');
    expect(c).not.toMatch(/spiritual alignment suggests|alignement spirituel suggère/);
  });

  it('F9: practice nights name both days (Islamic night convention, as the reviewed Urdu)', () => {
    expect(buruj).not.toMatch(/"Saturday night"|Samedi soir|Nuit du samedi|OR Sunday night \(midnight|OR Thursday night \(midnight/);
    expect(ur['The night between Friday and Saturday']).toBe('جمعہ اور ہفتے کی درمیانی رات');
  });

  it('S9: «زہرہ» is feminine — no Urdu string with Venus as subject uses masculine agreement', () => {
    const venusFirst = Object.values(ur).filter((v) => v.startsWith('زہرہ'));
    expect(venusFirst.length).toBeGreaterThan(5);
    for (const v of venusFirst) expect(v, v).not.toMatch(/(آتا|رہا|گیا|ہوتا|کرتا|ہو گیا) ہے/);
    expect(ur['Venus appears to be moving backward right now — traditionally a caution for matters of love and relationships.']).toContain('نظر آتی ہے');
  });

  it('every list-2 key is in the Urdu catalog with the recorded Urdu; drafts are listed for review sheet 4', () => {
    for (const e of list2) {
      if (e.status === 'removed') { expect(ur[e.en_before], e.en_before).toBeUndefined(); continue; }
      expect(ur[e.en!], e.en!).toBe(e.ur);
      if (e.status.startsWith('reviewed-corrected')) expect(e.ur).not.toBe(e.ur_before);
    }
    // Review sheet 4 (pass 9): every list-2 row reviewed — 13 corrections + 2 optional, the rest confirmed.
    expect(list2.filter((e) => e.status === 'draft')).toEqual([]);
    expect(list2.filter((e) => e.status === 'reviewed-corrected')).toHaveLength(13);
    expect(list2.filter((e) => e.status === 'reviewed-corrected (optional)')).toHaveLength(2);
  });

  it('Arabic follows the new English keys (all reviewed in sheet 4)', () => {
    const l2 = Object.entries(arFixes).filter(([, e]) => e.id.endsWith('(list 2)'));
    expect(l2).toHaveLength(18);
    for (const [k, e] of l2) { expect(ar[k], k).toBe(e.ar); expect(e.status).toMatch(/^reviewed/); }
    const all = l2.map(([, e]) => e.ar).join('\n');
    expect(all).not.toMatch(/عنصري|عنصرية|عناصري/);
  });
});
