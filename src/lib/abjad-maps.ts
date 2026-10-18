/**
 * Abjad (ḥisāb al-jummal) letter values: the ONE source of truth for the
 * whole app. AbjadContext (client), the Abjad calculator
 * (src/features/calculator/lib/abjadMaps.ts), the /names pages
 * (src/lib/names/commonNames.ts) and the API routes all use these tables.
 * Plain constants with no React import, so server code can use them too.
 *
 * Values (checked against the tables in Wikipedia "Abjad numerals", citing
 * Macdonald 1986, pp. 117/130/149, and the German "Abdschad" article; the 22
 * letters common to both orders are also as in Encyclopaedia Iranica, "Abjad",
 * G. Krotkoff, 1982):
 *
 *   both orders  ا1 ب2 ج3 د4 ه5 و6 ز7 ح8 ط9 ي10 ك20 ل30 م40 ن50 ع70 ف80
 *                ق100 ر200 ت400 ث500 خ600 ذ700
 *   Mashriqi     س60  ص90  ش300  ض800 ظ900 غ1000   (أبجد هوز حطي كلمن سعفص قرشت ثخذ ضظغ)
 *   Maghribi     ص60  ض90  س300  ظ800 غ900 ش1000   (أبجد هوز حطي كلمن صعفض قرست ثخذ ظغش)
 *
 * Letter forms, one rule for every table: a hamza seat counts as the letter
 * that carries it (أ إ آ = ا 1, ؤ = و 6, ئ = ي 10), alif maqṣūra ى = ي 10,
 * tāʾ marbūṭa ة = ه 5. The bare hamza ء is not one of the 28 letters and
 * counts 0 (the convention this app already documents in AbjadContext and
 * follows on mobile). Harakāt are stripped by the callers before lookup.
 */

const COMMON: Readonly<Record<string, number>> = {
  'ا': 1, 'ب': 2, 'ج': 3, 'د': 4, 'ه': 5, 'و': 6, 'ز': 7, 'ح': 8, 'ط': 9,
  'ي': 10, 'ك': 20, 'ل': 30, 'م': 40, 'ن': 50, 'ع': 70, 'ف': 80,
  'ق': 100, 'ر': 200, 'ت': 400, 'ث': 500, 'خ': 600, 'ذ': 700,
};

/** Hamza seats, alif maqṣūra and tāʾ marbūṭa → the letter they count as. */
export const LETTER_FORMS: Readonly<Record<string, string>> = {
  'أ': 'ا', 'إ': 'ا', 'آ': 'ا',
  'ؤ': 'و',
  'ئ': 'ي', 'ى': 'ي',
  'ة': 'ه',
};

function withForms(base: Record<string, number>): Record<string, number> {
  const out = { ...base };
  for (const [form, letter] of Object.entries(LETTER_FORMS)) out[form] = base[letter];
  return out;
}

export const ABJAD_MASHRIQI: Record<string, number> = withForms({
  ...COMMON, 'س': 60, 'ص': 90, 'ش': 300, 'ض': 800, 'ظ': 900, 'غ': 1000,
});

export const ABJAD_MAGHRIBI: Record<string, number> = withForms({
  ...COMMON, 'ص': 60, 'ض': 90, 'س': 300, 'ظ': 800, 'غ': 900, 'ش': 1000,
});

// ============================================================================
// SYSTEM SELECTION (one app-wide choice; Maghribi is the default everywhere)
// ============================================================================

/** Lower-case system id, as used by the API (`abjadSystem`) and storage. */
export type AbjadSystemKey = 'maghribi' | 'mashriqi';

export const DEFAULT_ABJAD_SYSTEM: AbjadSystemKey = 'maghribi';

/**
 * Reads a system id from any input ('Mashriqi', 'mashriqi', undefined, …).
 * Anything that is not Mashriqi resolves to the default, Maghribi.
 */
export function resolveAbjadSystem(value: unknown): AbjadSystemKey {
  return typeof value === 'string' && value.trim().toLowerCase() === 'mashriqi' ? 'mashriqi' : DEFAULT_ABJAD_SYSTEM;
}

/** The letter table for a system id (Maghribi unless Mashriqi is asked for). */
export function getAbjadMap(system?: unknown): Record<string, number> {
  return resolveAbjadSystem(system) === 'mashriqi' ? ABJAD_MASHRIQI : ABJAD_MAGHRIBI;
}

/** Which system a letter table belongs to (Maghribi for anything that is not the Mashriqi table). */
export function abjadSystemOfMap(map: Record<string, number> | undefined): AbjadSystemKey {
  return map === ABJAD_MASHRIQI ? 'mashriqi' : 'maghribi';
}
