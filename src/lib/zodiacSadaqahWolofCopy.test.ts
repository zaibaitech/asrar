import { describe, expect, it } from 'vitest';
import {
  ZODIAC_SADAQAH,
  ZODIAC_SIGN_ORDER,
  type SadaqahForm,
} from '../data/zodiacSadaqahData';
import {
  zodiacSadaqahInWolofLabel,
  zodiacSadaqahWolofLine,
} from './zodiacSadaqahWolofCopy';

function allForms(): { sign: string; form: SadaqahForm }[] {
  return ZODIAC_SIGN_ORDER.flatMap((sign) => {
    const entry = ZODIAC_SADAQAH[sign];
    return [...(entry.generalForms ?? []), ...entry.specificForms].map((form) => ({
      sign,
      form,
    }));
  });
}

describe('zodiac sadaqah Wolof secondary copy', () => {
  it('English and French use the agreed wording', () => {
    expect(zodiacSadaqahWolofLine('en', 'petaw')).toBe('Wolof: petaw');
    expect(zodiacSadaqahWolofLine('fr', 'petaw')).toBe('Wolof : petaw');
    expect(zodiacSadaqahInWolofLabel('en')).toBe('In Wolof');
    expect(zodiacSadaqahInWolofLabel('fr')).toBe('En wolof');
  });

  it('Arabic and Urdu use dedicated Wolof labels', () => {
    expect(zodiacSadaqahWolofLine('ar', 'laakh')).toBe('(الولوفية: لاخ)');
    expect(zodiacSadaqahWolofLine('ur', 'laakh')).toBe('(وولوف: لاخ)');
    expect(zodiacSadaqahWolofLine('ar', 'petaw')).toBe('(الولوفية: بيتاو)');
    expect(zodiacSadaqahWolofLine('ur', 'petaw')).toBe('(وولوف: پیتاو)');
    expect(zodiacSadaqahInWolofLabel('ar')).toBe('بالولوفية');
    expect(zodiacSadaqahInWolofLabel('ur')).toBe('وولوف میں');
  });

  it('every card has English and French titles; none are Wolof-only', () => {
    const forms = allForms();
    expect(forms.length).toBeGreaterThan(0);
    const wolofOnly = forms.filter(
      ({ form }) => form.wolof && (!form.title.en.trim() || !form.title.fr.trim())
    );
    expect(wolofOnly).toEqual([]);
    for (const { sign, form } of forms) {
      expect(form.title.en.trim(), `${sign} missing English title`).toBeTruthy();
      expect(form.title.fr.trim(), `${sign} missing French title`).toBeTruthy();
    }
  });

  it('only records a Wolof name where the source already attests one', () => {
    const named = allForms()
      .filter(({ form }) => form.wolof)
      .map(({ form }) => form.wolof)
      .sort();
    expect(named).toEqual(['Cheb Yap', 'laakh', 'petaw']);
  });
});
