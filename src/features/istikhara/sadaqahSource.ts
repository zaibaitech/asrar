/**
 * Sadaqah source for the "Who Am I?" / Istikhārat al-Asmāʾ results.
 *
 * The two calculation methods are separate systems and must not share guidance:
 * - Date of birth (tropical burj) keeps the web's existing zodiac sadaqah
 *   (Serigne Mahdiou Niane / ZODIAC_SADAQAH).
 * - Name + mother's name (abjad burj) uses the monthly + lifetime guidance
 *   from burujData, the same source asrar-mobile uses for name-based results.
 */
import {
  ZODIAC_SADAQAH,
  ZODIAC_SIGN_ORDER,
  type ZodiacSadaqahEntry,
} from '../../data/zodiacSadaqahData';
import type { IstikharaCalculationResult, SadaqahPractices } from './types';

export function isBirthDateSadaqah(
  result: Pick<IstikharaCalculationResult, 'calculationMethod'>
): boolean {
  return result.calculationMethod === 'birth-date';
}

/** Monthly + lifetime sadaqah for a name + mother's name burj result. */
export function getNameBurjSadaqah(
  result: Pick<IstikharaCalculationResult, 'burujProfile'>
): SadaqahPractices {
  return result.burujProfile.sadaqah;
}

/** Zodiac (Niane) sadaqah the web already shows for a date-of-birth result. */
export function getBirthDateZodiacSadaqah(
  result: Pick<IstikharaCalculationResult, 'burujRemainder'>
): ZodiacSadaqahEntry {
  return ZODIAC_SADAQAH[ZODIAC_SIGN_ORDER[result.burujRemainder - 1]];
}
