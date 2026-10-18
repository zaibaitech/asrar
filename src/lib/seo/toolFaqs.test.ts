import { describe, it, expect } from 'vitest';
import { ABJAD_FAQS, PLANETARY_HOURS_FAQS, PLANET_OF_THE_DAY_FAQS } from './toolFaqs';

describe('tool page FAQs', () => {
  for (const [name, faqs] of Object.entries({ ABJAD_FAQS, PLANETARY_HOURS_FAQS, PLANET_OF_THE_DAY_FAQS })) {
    it(`${name}: EN and FR have the same questions, none empty`, () => {
      expect(faqs.fr).toHaveLength(faqs.en.length);
      for (const f of [...faqs.en, ...faqs.fr]) {
        expect(f.q.length).toBeGreaterThan(10);
        expect(f.a.length).toBeGreaterThan(40);
      }
    });
    it(`${name}: reflection wording, no promises or predictions`, () => {
      for (const f of faqs.en) expect(f.a).not.toMatch(/\bwill (bring|give|make you)|guarantee|destined/i);
    });
  }
});
