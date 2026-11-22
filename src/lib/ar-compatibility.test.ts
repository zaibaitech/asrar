import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { buildGuidanceTextAr, calculateDivineNameIntentionCompatibility } from '@/src/utils/divineNameCompatibility';
import { DIVINE_NAME_METADATA } from '@/src/constants/divineNameCompatibilityData';
import { DIVINE_NAMES } from '@/src/data/divine-names';
import { INTENTION_NAME_MAP } from '@/src/constants/divineNameIntentions';

describe('/ar/compatibility', () => {
  it('Arabic intention guidance uses the verified Arabic Name from the divine-names data', () => {
    for (const dn of DIVINE_NAME_METADATA.slice(0, 20)) {
      const source = DIVINE_NAMES.find((n) => n.number === dn.number)!;
      for (const tier of ['optimal', 'suitable', 'neutral', 'not-recommended'] as const) {
        const ar = buildGuidanceTextAr(dn, 'provision', tier);
        expect(ar).toContain(source.arabic);
        expect(ar).not.toMatch(/[A-Za-z]/);
      }
    }
    const heal = buildGuidanceTextAr(DIVINE_NAME_METADATA[0], 'healing', 'optimal');
    expect(heal).toContain('يُدعى اللهُ تعالى بها تقليديًا طلبًا للشفاء');
    expect(heal).toContain('والإجابة بيد الله سبحانه');
    const r = calculateDivineNameIntentionCompatibility(DIVINE_NAME_METADATA[0], 'peace', DIVINE_NAME_METADATA);
    expect(r.guidance.ar).toContain(DIVINE_NAME_METADATA[0].arabic);
  });

  it('the Find the Best Names list carries the Arabic guidance for /ar', () => {
    for (const entries of Object.values(INTENTION_NAME_MAP)) for (const e of entries) {
      expect(e.sourceNote.ar).toContain(DIVINE_NAMES.find((n) => n.number === e.divineNameNumber)!.arabic);
      expect(e.sourceNote.ar).not.toMatch(/[A-Za-z]/);
    }
    expect(INTENTION_NAME_MAP.healing[0].sourceNote.ar).toContain('طلبًا للشفاء');
  });

  it('the Arabic page copy is the existing runtime-catalog Arabic, linked to /ar pages', () => {
    const page = readFileSync('app/(site)/compatibility/page.tsx', 'utf8');
    const ar = page.slice(page.indexOf('  ar: {'), page.indexOf('} as const;'));
    for (const href of ['/ar/ikhtiyarat', '/ar/name-and-mother-burj', '/ar/abjad', '/ar/sadaqa', '/ar/birth-profile']) expect(ar).toContain(`'${href}'`);
    const cat = JSON.parse(readFileSync('public/i18n/ar-ui.json', 'utf8')) as Record<string, string>;
    const strings = [...ar.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1]).filter((s) => /[\u0600-\u06ff]/.test(s));
    const values = new Set(Object.values(cat));
    for (const s of strings) expect(values.has(s), s).toBe(true);
    // No English left in the Arabic copy (links aside).
    const all = [...ar.matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1]).filter((s) => !s.startsWith('/'));
    for (const s of all) expect(s, s).not.toMatch(/[A-Za-z]{3,}/);
  });
});
