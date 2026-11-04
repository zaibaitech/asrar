import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import tanzil from '../data/tanzil/quran-simple.json';

/**
 * Every Qur'an quotation in the source must match the Tanzil Project quran-simple
 * text (src/data/tanzil/quran-simple.json, unmodified) exactly, code point for
 * code point. A string of 2+ vocalised words that matches a run of words in an
 * ayah when marks are canonically ordered (NFD) must also match it as written.
 */
const VERSES = tanzil as unknown as Record<string, string>;
const nfd = (s: string) => s.normalize('NFD');
const MARK = /[\u064b-\u065f\u0670\u06d6-\u06ed]/;

const ayat = Object.entries(VERSES)
  .filter(([k]) => /^\d+:\d+$/.test(k))
  .map(([k, v]) => ({ key: k, words: v.split(' '), norm: v.split(' ').map(nfd) }));
const byFirstWord = new Map<string, Array<{ ai: number; i: number }>>();
ayat.forEach((a, ai) =>
  a.norm.forEach((w, i) => {
    const list = byFirstWord.get(w) ?? [];
    list.push({ ai, i });
    byFirstWord.set(w, list);
  }),
);

const LITERAL = /(['"`])((?:(?!\1)[^\n\\])*?[\u0621-\u064a][^\n]*?)\1/g;
const SEGMENT = /[\u0621-\u064a\u064b-\u065f\u0670\u0671\u06d6-\u06ed ]{8,}/g;

function walk(dir: string, out: string[] = []): string[] {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name === 'node_modules' || e.name === '.next' || e.name === 'tanzil') continue;
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(e.name)) out.push(p);
  }
  return out;
}

describe('Qur\'an text matches Tanzil quran-simple', () => {
  it('has all 6236 ayat', () => {
    expect(ayat.length).toBe(6236);
  });

  it('every quoted ayah run in src/ and app/ is exact', () => {
    const root = path.resolve(__dirname, '../..');
    const files = [...walk(path.join(root, 'src')), ...walk(path.join(root, 'app'))].filter(
      (f) => !f.endsWith('quranTanzil.test.ts'),
    );
    const bad: string[] = [];
    let checked = 0;
    for (const f of files) {
      const text = fs.readFileSync(f, 'utf8');
      for (const lit of text.matchAll(LITERAL)) {
        for (const segm of lit[2].matchAll(SEGMENT)) {
          const seg = segm[0].trim();
          if (!MARK.test(seg) || seg.split(' ').length < 2) continue;
          const ws = seg.split(' ').map(nfd);
          for (const { ai, i } of byFirstWord.get(ws[0]) ?? []) {
            const a = ayat[ai];
            if (a.norm.slice(i, i + ws.length).join(' ') !== ws.join(' ')) continue;
            checked++;
            const exact = a.words.slice(i, i + ws.length).join(' ');
            if (seg !== exact) bad.push(`${path.relative(root, f)} ${a.key}: ${seg}`);
            break;
          }
        }
      }
    }
    expect(checked).toBeGreaterThan(40);
    expect(bad).toEqual([]);
  });
});
