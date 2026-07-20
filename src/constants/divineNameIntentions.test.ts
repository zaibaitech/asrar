import { describe, it, expect } from 'vitest';
import { DIVINE_INTENTIONS, INTENTION_NAME_MAP, INTENTION_COMPANION_DUA, DivineIntention } from './divineNameIntentions';
import { findDivineNameByNumber, DIVINE_NAMES } from '../data/divine-names';

describe('Divine Name to Intention data integrity', () => {
  it('has exactly one INTENTION_NAME_MAP entry list per DIVINE_INTENTIONS id, with no gaps or extras', () => {
    const intentionIds = DIVINE_INTENTIONS.map(i => i.id).sort();
    const mapIds = (Object.keys(INTENTION_NAME_MAP) as DivineIntention[]).sort();
    expect(mapIds).toEqual(intentionIds);
  });

  it('every intention has at least one Name entry', () => {
    for (const intention of DIVINE_INTENTIONS) {
      expect(INTENTION_NAME_MAP[intention.id].length).toBeGreaterThan(0);
    }
  });

  it('every referenced divineNameNumber resolves to a real entry in DIVINE_NAMES', () => {
    for (const [intentionId, entries] of Object.entries(INTENTION_NAME_MAP)) {
      for (const entry of entries) {
        const name = findDivineNameByNumber(entry.divineNameNumber);
        expect(name, `${intentionId}: divineNameNumber ${entry.divineNameNumber} not found in DIVINE_NAMES`).toBeDefined();
      }
    }
  });

  it('every entry has a non-empty sourceNote in both languages', () => {
    for (const entries of Object.values(INTENTION_NAME_MAP)) {
      for (const entry of entries) {
        expect(entry.sourceNote.en.length).toBeGreaterThan(0);
        expect(entry.sourceNote.fr.length).toBeGreaterThan(0);
      }
    }
  });

  it('every DIVINE_INTENTIONS entry has non-empty EN/FR label and description', () => {
    for (const intention of DIVINE_INTENTIONS) {
      expect(intention.label.en.length).toBeGreaterThan(0);
      expect(intention.label.fr.length).toBeGreaterThan(0);
      expect(intention.description.en.length).toBeGreaterThan(0);
      expect(intention.description.fr.length).toBeGreaterThan(0);
    }
  });

  it('every companion dua has non-empty Arabic, transliteration, translation, and citation', () => {
    for (const [intentionId, dua] of Object.entries(INTENTION_COMPANION_DUA)) {
      expect(dua!.arabic.length, `${intentionId} dua Arabic`).toBeGreaterThan(0);
      expect(dua!.transliteration.length, `${intentionId} dua transliteration`).toBeGreaterThan(0);
      expect(dua!.translation.en.length, `${intentionId} dua EN`).toBeGreaterThan(0);
      expect(dua!.translation.fr.length, `${intentionId} dua FR`).toBeGreaterThan(0);
      expect(dua!.citation.length, `${intentionId} dua citation`).toBeGreaterThan(0);
    }
  });

  it('every companion dua key is a valid DivineIntention id', () => {
    const intentionIds = new Set(DIVINE_INTENTIONS.map(i => i.id));
    for (const key of Object.keys(INTENTION_COMPANION_DUA)) {
      expect(intentionIds.has(key as DivineIntention)).toBe(true);
    }
  });

  it('sanity: DIVINE_NAMES has exactly 99 entries (unchanged by this feature)', () => {
    expect(DIVINE_NAMES).toHaveLength(99);
  });
});
