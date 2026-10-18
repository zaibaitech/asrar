/**
 * Guard: translation keys in ar.ts render ahead of the runtime catalog (public/i18n/ar-ui.json),
 * so an ar.ts value can hide a Language Reviewer correction. Any ar.ts entry whose English source
 * text has a reviewed correction in scripts/i18n/ar/reviewer-corrections.json must use exactly
 * that correction.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { rawTranslations } from '../translations';

type Correction = { id: string; batch: number; ar?: string; remove?: boolean };
const corrections: Record<string, Correction> = JSON.parse(
  readFileSync(join(__dirname, '../../../scripts/i18n/ar/reviewer-corrections.json'), 'utf8'),
);

/** Flatten a tree to path → string, including array elements. */
function strings(t: unknown, prefix = '', out = new Map<string, string>()): Map<string, string> {
  if (typeof t === 'string') out.set(prefix, t);
  else if (Array.isArray(t)) t.forEach((v, i) => strings(v, `${prefix}[${i}]`, out));
  else if (t && typeof t === 'object')
    for (const [k, v] of Object.entries(t)) strings(v, prefix ? `${prefix}.${k}` : k, out);
  return out;
}

describe('ar.ts follows the Language Reviewer corrections', () => {
  const en = strings(rawTranslations.en);
  const ar = strings(rawTranslations.ar);

  it('every ar.ts value with a reviewed English source matches the correction', () => {
    const mismatches: string[] = [];
    let checked = 0;
    for (const [path, source] of en) {
      const c = corrections[source] ?? corrections[source.trim()];
      if (!c || c.remove || c.ar === undefined || !ar.has(path)) continue;
      checked++;
      if (ar.get(path) !== c.ar) mismatches.push(`${path} (${c.id}): «${ar.get(path)}» should be «${c.ar}»`);
    }
    expect(checked).toBeGreaterThan(50);
    expect(mismatches).toEqual([]);
  });
});
