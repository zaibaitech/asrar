import { describe, it, expect } from 'vitest';
import {
  ABJAD,
  LETTER_ELEMENTS,
  digitalRoot,
  asghar,
  hadathRemainder,
  hadathToElement,
  elementOfLetter,
  ruhHadad,
  withMother,
  nearestSacred,
  sacredSet,
  getPlanetarySignatureFromTotal,
} from './hadad-core';

describe('digitalRoot', () => {
  it('reduces multi-digit numbers to 1-9', () => {
    expect(digitalRoot(9)).toBe(9);
    expect(digitalRoot(10)).toBe(1);
    expect(digitalRoot(18)).toBe(9);
    expect(digitalRoot(19)).toBe(1);
    expect(digitalRoot(786)).toBe(3);
  });

  it('treats 0 as a special case, not looping negative', () => {
    expect(digitalRoot(0)).toBe(0);
  });

  it('leaves single digits unchanged', () => {
    for (let n = 1; n <= 9; n++) {
      expect(digitalRoot(n)).toBe(n);
    }
  });
});

describe('asghar', () => {
  it('reduces twice, which is a no-op beyond the first digital root', () => {
    expect(asghar(786)).toBe(digitalRoot(digitalRoot(786)));
    expect(asghar(19)).toBe(1);
  });
});

describe('hadathRemainder', () => {
  it('computes n mod 4', () => {
    expect(hadathRemainder(4)).toBe(0);
    expect(hadathRemainder(5)).toBe(1);
    expect(hadathRemainder(6)).toBe(2);
    expect(hadathRemainder(7)).toBe(3);
    expect(hadathRemainder(8)).toBe(0);
  });
});

describe('hadathToElement', () => {
  it('maps remainders to elements per the Maghribi system', () => {
    expect(hadathToElement(0)).toBe('Water');
    expect(hadathToElement(1)).toBe('Fire');
    expect(hadathToElement(2)).toBe('Earth');
    expect(hadathToElement(3)).toBe('Air');
  });
});

describe('ABJAD and LETTER_ELEMENTS', () => {
  it('assigns exactly 7 letters to each of the 4 elements (Maghribi system)', () => {
    const counts: Record<string, number> = { Fire: 0, Water: 0, Air: 0, Earth: 0 };
    for (const letter of Object.keys(ABJAD)) {
      const el = LETTER_ELEMENTS[letter];
      if (el) counts[el]++;
    }
    // ة is an extra special form mapped to Earth, so Earth has 8, others 7
    expect(counts.Fire).toBe(7);
    expect(counts.Water).toBe(7);
    expect(counts.Air).toBe(7);
    expect(counts.Earth).toBe(7);
  });

  it('gives alif the value 1 and ghayn the value 1000', () => {
    expect(ABJAD['ا']).toBe(1);
    expect(ABJAD['غ']).toBe(1000);
  });
});

describe('elementOfLetter', () => {
  it('returns the correct element for known letters', () => {
    expect(elementOfLetter('ا')).toBe('Fire');
    expect(elementOfLetter('ب')).toBe('Air');
    expect(elementOfLetter('ج')).toBe('Water');
    expect(elementOfLetter('د')).toBe('Earth');
  });

  it('defaults to Earth for unknown characters', () => {
    expect(elementOfLetter('z')).toBe('Earth');
    expect(elementOfLetter('')).toBe('Earth');
  });

  it('treats ta marbuta as Earth, same as ت', () => {
    expect(elementOfLetter('ة')).toBe('Earth');
  });
});

describe('ruhHadad', () => {
  it('averages the total with its digital root, floored', () => {
    // total=100, saghir=digitalRoot(100)=1, r=floor((100+1)/2)=50
    const result = ruhHadad(100);
    expect(result.value).toBe(50);
    expect(result.root).toBe(digitalRoot(50));
    expect(result.element).toBe(hadathToElement(hadathRemainder(50)));
  });
});

describe('withMother', () => {
  it('sums child and mother totals and derives root/element from the sum', () => {
    const result = withMother(100, 50);
    expect(result.total).toBe(150);
    expect(result.root).toBe(digitalRoot(150));
    expect(result.hadath).toBe(hadathToElement(hadathRemainder(150)));
  });
});

describe('nearestSacred', () => {
  it('finds the closest sacred number and flags an exact match', () => {
    const result = nearestSacred(7);
    expect(result.nearest).toBe(7);
    expect(result.isExact).toBe(true);
    expect(result.delta).toBe(0);
    expect(result.divisibleBy7).toBe(true);
  });

  it('computes delta and divisibility for a non-exact value', () => {
    const result = nearestSacred(20);
    // closest in [7,12,19,70,99,114,313,786] to 20 is 19 (delta 1) vs 70 (delta 50)
    expect(result.nearest).toBe(19);
    expect(result.isExact).toBe(false);
    expect(result.delta).toBe(1);
    expect(result.divisibleBy19).toBe(false); // 20 % 19 !== 0
  });

  it('detects divisibility by 7, 19, and 99 independently of nearest-match', () => {
    const result = nearestSacred(99);
    expect(result.divisibleBy99).toBe(true);
    expect(result.divisibleBy7).toBe(false);
  });

  it('never returns a nearest value outside the sacred set', () => {
    for (const n of [1, 50, 500, 1000, 10000]) {
      const result = nearestSacred(n);
      expect(sacredSet).toContain(result.nearest);
    }
  });
});

describe('getPlanetarySignatureFromTotal', () => {
  it('returns a planetary signature with an hourNumber in 1-7', () => {
    const sig = getPlanetarySignatureFromTotal(100);
    expect(sig.hourNumber).toBeGreaterThanOrEqual(1);
    expect(sig.hourNumber).toBeLessThanOrEqual(7);
  });

  it('is consistent for the same total', () => {
    const a = getPlanetarySignatureFromTotal(258);
    const b = getPlanetarySignatureFromTotal(258);
    expect(a.hourNumber).toBe(b.hourNumber);
  });
});
