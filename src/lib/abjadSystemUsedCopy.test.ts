import { describe, expect, it } from 'vitest';
import { abjadGhaynValue, abjadSystemUsedCopy } from './abjadSystemUsedCopy';

const enLabels = { maghribi: 'Maghribi', mashriqi: 'Mashriqi' };
const arLabels = { maghribi: 'مغربي', mashriqi: 'مشرقي' };
const urLabels = { maghribi: 'مغربی', mashriqi: 'مشرقی' };

describe('abjadSystemUsedCopy', () => {
  it('English and French use the agreed wording, with غ = 1000 or 900', () => {
    expect(abjadGhaynValue('Mashriqi')).toBe(1000);
    expect(abjadGhaynValue('Maghribi')).toBe(900);
    expect(abjadSystemUsedCopy('en', 'Mashriqi', enLabels)).toEqual({
      line: 'Calculated with Mashriqi Abjad (غ = 1000)',
      change: 'Change',
    });
    expect(abjadSystemUsedCopy('en', 'Maghribi', enLabels)).toEqual({
      line: 'Calculated with Maghribi Abjad (غ = 900)',
      change: 'Change',
    });
    expect(abjadSystemUsedCopy('fr', 'Mashriqi', enLabels)).toEqual({
      line: "Calculé selon l'Abjad mashriqi (غ = 1000)",
      change: 'Modifier',
    });
    expect(abjadSystemUsedCopy('fr', 'Maghribi', enLabels)).toEqual({
      line: "Calculé selon l'Abjad maghribi (غ = 900)",
      change: 'Modifier',
    });
  });

  it('Arabic and Urdu reuse existing system labels and keep the English frame', () => {
    expect(abjadSystemUsedCopy('ar', 'Mashriqi', arLabels).line).toBe(
      'Calculated with مشرقي Abjad (غ = 1000)'
    );
    expect(abjadSystemUsedCopy('ar', 'Maghribi', arLabels).line).toBe(
      'Calculated with مغربي Abjad (غ = 900)'
    );
    expect(abjadSystemUsedCopy('ur', 'Mashriqi', urLabels).line).toBe(
      'Calculated with مشرقی Abjad (غ = 1000)'
    );
    expect(abjadSystemUsedCopy('ur', 'Maghribi', urLabels).change).toBe('Change');
  });
});
