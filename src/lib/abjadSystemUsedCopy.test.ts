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

  it('Arabic and Urdu use reviewed-ready wording with existing system labels', () => {
    expect(abjadSystemUsedCopy('ar', 'Mashriqi', arLabels)).toEqual({
      line: 'حُسِب بحسب الأبجد المشرقي (غ = 1000)',
      change: 'تغيير',
    });
    expect(abjadSystemUsedCopy('ar', 'Maghribi', arLabels)).toEqual({
      line: 'حُسِب بحسب الأبجد المغربي (غ = 900)',
      change: 'تغيير',
    });
    expect(abjadSystemUsedCopy('ur', 'Mashriqi', urLabels)).toEqual({
      line: 'مشرقی ابجد سے حساب کیا گیا (غ = 1000)',
      change: 'تبدیل کریں',
    });
    expect(abjadSystemUsedCopy('ur', 'Maghribi', urLabels).change).toBe('تبدیل کریں');
  });
});
