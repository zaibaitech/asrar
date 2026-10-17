import { describe, expect, it } from 'vitest';
import { normalizeNameInput } from './nameInput';

// Same pattern as validateName() in ./calculations (not imported: that module pulls in TSX for vitest).
const VALID = /^[\u0600-\u06FFa-zA-Z\s\-']+$/;
const ok = (s: string) => VALID.test(normalizeNameInput(s));

describe('burj form name input', () => {
  it('accepts Arabic names with tashkeel, spaces, hamza forms, ة and ى', () => {
    for (const n of ['مُحَمَّد', 'فَاطِمَة', 'عبد الله', 'عبدُ الرَّحْمٰن', 'أحمد', 'إبراهيم', 'آمنة', 'هناء', 'رؤوف', 'عائشة', 'مصطفى', 'ليلى', 'خديجة', 'بشرى ']) {
      expect(ok(n), n).toBe(true);
    }
  });

  it('accepts names carrying invisible keyboard marks or presentation forms', () => {
    expect(ok('\u200Fمحمد')).toBe(true);
    expect(ok('عبد\u200Cالله')).toBe(true);
    expect(ok('\uFEFFفاطمة\u200E')).toBe(true);
    expect(normalizeNameInput('ﻣﺤﻤﺪ')).toBe('محمد');
  });

  it('leaves real Arabic text unchanged', () => {
    expect(normalizeNameInput('عبدُ الرَّحْمٰن')).toBe('عبدُ الرَّحْمٰن');
    expect(normalizeNameInput('أمينة')).toBe('أمينة');
  });

  it('still rejects digits and symbols', () => {
    expect(ok('محمد1')).toBe(false);
    expect(ok('فاطمة!')).toBe(false);
  });
});
