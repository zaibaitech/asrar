/**
 * Finds English text that is written into production components and is not covered by the Urdu catalog.
 * Used by src/lib/urdu-english-ratchet.test.ts and by `npx tsx scripts/i18n/ur/update_known_english.ts`.
 *
 * What it looks at: every file that is reachable from the app routes (app/**) or asrar-everyday-app.tsx
 * through imports, except the files listed in DEV_ONLY. In those .tsx files it extracts
 *   - the English branch of `language === 'en' ? '…' : '…'` (and the 'fr' form),
 *   - `en: '…'` literals,
 *   - JSX text (`>Some text<`).
 * Text of any other shape (strings built from variables, props, data files) is out of its reach: the
 * data-driven content is covered by the *-content / *-coverage tests instead.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'fs';
import path from 'path';

/** Reachable by import but shown only in development builds (NODE_ENV gate); not seen by users. */
export const DEV_ONLY = ['src/features/ilm-huruf/IlmHurufPanel.tsx'];

/**
 * English that is meant to stay English: brand and product names, language names written in their own
 * language, URLs, transliterations of Arabic phrases and the like.
 */
export const LEGIT_ENGLISH: RegExp[] = [
  /^(WhatsApp|Telegram|English|Français|Promise)$/,
  /^https?:\/\//,
  /^(Asrār Everyday|Zaibai Tech|Asrariya|ASRARIYA|Asrariya Quran Share|SendWave|Wave)$/,
  /^[^\u0000-\u007f\s]*\s*(SendWave|Wave)$/u, // "🌍 SendWave", "🇸🇳 Wave"
  /^(Ṣalla-llāhu|Wamā dhālika)\b/, // transliterated Arabic phrases next to their Arabic
  /^en\.[a-z]+$/, // Quran translation edition id
];

const EXTS = ['', '.tsx', '.ts', '/index.tsx', '/index.ts'];
const IMPORT = /(?:import|export)\s[^;]*?from\s*['"]([^'"]+)['"]|import\(\s*['"]([^'"]+)['"]\s*\)|import\s*['"]([^'"]+)['"]/g;

function walk(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    const p = path.join(dir, name);
    if (name === 'node_modules' || name === '.next') continue;
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx)$/.test(name) && !/\.test\./.test(name)) out.push(p);
  }
  return out;
}

function resolveImport(root: string, from: string, spec: string): string | null {
  const base = spec.startsWith('@/') ? path.join(root, spec.slice(2)) : spec.startsWith('.') ? path.resolve(path.dirname(from), spec) : null;
  if (!base) return null;
  for (const e of EXTS) {
    const p = base + e;
    if (existsSync(p) && statSync(p).isFile()) return p;
  }
  return null;
}

export function reachableFiles(root: string): string[] {
  const entries = walk(path.join(root, 'app'));
  entries.push(path.join(root, 'asrar-everyday-app.tsx'));
  const dev = DEV_ONLY.map((f) => path.join(root, f));
  const seen = new Set<string>();
  const stack = [...entries];
  while (stack.length) {
    const f = stack.pop()!;
    if (seen.has(f) || dev.includes(f)) continue;
    seen.add(f);
    let s: string;
    try {
      s = readFileSync(f, 'utf8');
    } catch {
      continue;
    }
    for (const m of s.matchAll(IMPORT)) {
      const p = resolveImport(root, f, m[1] ?? m[2] ?? m[3]);
      if (p && !seen.has(p)) stack.push(p);
    }
  }
  return [...seen].sort();
}

const Q = String.raw`(?:'((?:[^'\\\n]|\\.)*)'|"((?:[^"\\\n]|\\.)*)"|\`([^\`$\n]*)\`)`;
const TERN_EN = new RegExp(String.raw`(?:language|lang|isFrench|isFr|locale|uiLanguage)\s*(?:===|==)\s*'en'\s*\?\s*${Q}\s*:`, 'gs');
const TERN_FR = new RegExp(String.raw`(?:language|lang|locale|uiLanguage)\s*(?:===|==)\s*'fr'\s*\?\s*${Q}\s*:\s*${Q}`, 'gs');
const EN_OBJ = new RegExp(String.raw`\ben:\s*${Q}`, 'g');
const JSX_TEXT = />\s*([^<>{}\n]*[A-Za-z]{3}[^<>{}\n]*?)\s*</g;
const first = (m: RegExpMatchArray, from = 1) => m.slice(from).find((g) => g !== undefined);

/** Text that looks like a sentence or label, not a code fragment caught by the JSX regex. */
function looksLikeText(t: string): boolean {
  return /[A-Za-z]{3}/.test(t) && /^[A-Z0-9"“'‘\p{Extended_Pictographic}]/u.test(t) && !/[=?;|&{}<>]/.test(t) && !/^[A-Za-z]+\)/.test(t);
}

export function extractEnglish(source: string): string[] {
  const found = new Set<string>();
  for (const m of source.matchAll(TERN_EN)) found.add(first(m)!);
  for (const m of source.matchAll(TERN_FR)) {
    const g = m.slice(1).filter((x) => x !== undefined);
    if (g.length >= 2) found.add(g[1]);
  }
  for (const m of source.matchAll(EN_OBJ)) found.add(first(m)!);
  for (const m of source.matchAll(JSX_TEXT)) found.add(m[1].trim());
  return [...found]
    .map((t) => t.replace(/\\'/g, "'").trim())
    .filter((t) => t.length > 2 && looksLikeText(t));
}

/** English strings in reachable production components that the catalog does not translate, per file. */
export function scanUncovered(root: string, covers: (en: string) => boolean): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const f of reachableFiles(root)) {
    if (!f.endsWith('.tsx') || f.includes(`${path.sep}i18n${path.sep}`)) continue;
    const missing = extractEnglish(readFileSync(f, 'utf8'))
      .filter((t) => !LEGIT_ENGLISH.some((re) => re.test(t)) && !covers(t))
      .sort();
    if (missing.length) out[path.relative(root, f)] = missing;
  }
  return out;
}
