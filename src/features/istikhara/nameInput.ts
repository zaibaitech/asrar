/**
 * Clean-up for names typed or pasted into the burj form, applied before
 * validation and before the (unchanged) calculation.
 *
 * Mobile Arabic keyboards and copy/paste often add characters a visitor cannot
 * see: right-to-left / left-to-right marks, zero-width (non-)joiners, BOM, the
 * Arabic letter mark. Pasted text can also use Arabic presentation forms
 * (e.g. ﻣﺤﻤﺪ), which are outside the basic Arabic block. Those made valid names
 * fail with "Name must contain only Arabic letters".
 *
 * Only these are touched: invisible marks are removed and presentation forms
 * are mapped to the standard letters (NFKC, per character). Tashkeel, hamza
 * forms (ء أ إ ؤ ئ آ), ة, ى and spaces are left exactly as typed.
 */
const INVISIBLE = /[\u061C\u200B-\u200F\u202A-\u202E\u2066-\u2069\uFEFF\u00AD]/g;
const PRESENTATION_FORMS = /[\uFB50-\uFDFF\uFE70-\uFEFC]/g;

export function normalizeNameInput(name: string): string {
  return name
    .replace(INVISIBLE, '')
    .replace(PRESENTATION_FORMS, (ch) => ch.normalize('NFKC'))
    .replace(/\s+/g, ' ');
}
