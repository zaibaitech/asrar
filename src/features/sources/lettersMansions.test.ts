import { describe, it, expect } from 'vitest';
import { abjadOrder, lettersMansions } from './lettersMansions';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../../lib/abjad-maps';
import { DIVINE_RESONANCE_TABLE } from '../calculator/lib/divineResonance';
import { LUNAR_MANSIONS } from '../../lib/lunarMansions';

describe('letters and their mansions', () => {
  it('there are 28 mansions, numbered 1..28 in list order', () => {
    expect(LUNAR_MANSIONS).toHaveLength(28);
    LUNAR_MANSIONS.forEach((m, i) => expect(m.number).toBe(i + 1));
  });

  it('Mashriqi abjad order equals the app\u2019s Divine Name resonance letter order', () => {
    const order = abjadOrder(ABJAD_MASHRIQI);
    expect(order).toHaveLength(28);
    order.forEach((ch, i) => expect(DIVINE_RESONANCE_TABLE[i + 1].letter).toBe(ch));
  });

  it('Maghribi order differs from that table at exactly 6 positions (15, 18, 21, 26, 27, 28)', () => {
    const order = abjadOrder(ABJAD_MAGHRIBI);
    expect(order).toHaveLength(28);
    const diff = order.map((ch, i) => (DIVINE_RESONANCE_TABLE[i + 1].letter === ch ? 0 : i + 1)).filter(Boolean);
    expect(diff).toEqual([15, 18, 21, 26, 27, 28]);
  });

  it('pairs position k with mansion k, once per distinct letter, folding hamza seats', () => {
    const rows = lettersMansions('أحمد', ABJAD_MAGHRIBI);
    expect(rows.map((r) => r.letter)).toEqual(['ا', 'ح', 'م', 'د']);
    expect(rows.map((r) => r.position)).toEqual([1, 8, 13, 4]);
    rows.forEach((r) => expect(r.mansion.number).toBe(r.position));
    expect(lettersMansions('ممم', ABJAD_MAGHRIBI)).toHaveLength(1);
  });

  it('follows the selected system: ص is 15 in Maghribi and 18 in Mashriqi', () => {
    expect(lettersMansions('ص', ABJAD_MAGHRIBI)[0].position).toBe(15);
    expect(lettersMansions('ص', ABJAD_MASHRIQI)[0].position).toBe(18);
  });
});
