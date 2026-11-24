import { describe, expect, it } from 'vitest';
import { ZODIAC_SADAQAH } from '../../data/zodiacSadaqahData';
import { calculateIstikhara, calculateIstikharaFromBirthDate, getBurujData } from './calculations';
import {
  getBirthDateZodiacSadaqah,
  getNameBurjSadaqah,
  isBirthDateSadaqah,
} from './sadaqahSource';

describe('sadaqah source split (name-burj vs date of birth)', () => {
  it('name + mother results use burujData monthly/lifetime sadaqah, not the zodiac/Niane set', () => {
    const result = calculateIstikhara('Muhammad', 'Amina');
    expect(result.calculationMethod).toBe('name-based');
    expect(isBirthDateSadaqah(result)).toBe(false);

    const nameSadaqah = getNameBurjSadaqah(result);
    const fromProfile = getBurujData(result.burujRemainder).sadaqah;
    expect(nameSadaqah.monthly.traditional.en).toBe(fromProfile.monthly.traditional.en);
    expect(nameSadaqah.lifetime.traditional.en).toBe(fromProfile.lifetime.traditional.en);

    const zodiac = getBirthDateZodiacSadaqah(result);
    expect(nameSadaqah.monthly.traditional.en).not.toBe(zodiac.en);
    expect(nameSadaqah.monthly.traditional.en).not.toContain(zodiac.en);
  });

  it('date-of-birth results keep the current web zodiac sadaqah', () => {
    // Mid-Aries in any common timezone (21 Mar–19 Apr).
    const result = calculateIstikharaFromBirthDate('1990-04-10');
    expect(result.calculationMethod).toBe('birth-date');
    expect(result.burujRemainder).toBe(1);
    expect(isBirthDateSadaqah(result)).toBe(true);

    const zodiac = getBirthDateZodiacSadaqah(result);
    expect(zodiac).toBe(ZODIAC_SADAQAH.aries);
    expect(zodiac.en).toBe('Aries');

    // Same burj number also has name-burj data, but the DOB path must not use it.
    const nameSystem = getNameBurjSadaqah(result);
    expect(nameSystem.monthly.traditional.en).toMatch(/Beef/i);
    expect(zodiac.specificForms[0].title.en).not.toMatch(/Beef/i);
  });
});
