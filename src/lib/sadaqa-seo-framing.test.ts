import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const read = (rel: string) => readFileSync(resolve(process.cwd(), rel), 'utf8');
const REGIONAL = /West African|Senegalese|Gambia|Gambian|Wolof|sarax|Tamxarit|Gamo|Korité|Tabaski|Werruk Korr|Diggi Kor|daaras|ouest-africain|sénégalais|africain de l.ouest|غرب أفريقيا|السنغال|الولوف/i;
const FORBIDDEN_AR = /عنصري|عنصرية|عناصري/;

const FILES = [
  'app/(site)/sadaqa/page.tsx',
  'app/(site)/sadaqa-of-the-day/page.tsx',
  'app/(ar)/ar/sadaqa-of-the-day/page.tsx',
  'app/(ar)/ar/sadaqa-of-the-day/arabicSadaqa.ts',
  'src/lib/siteRoutes.ts',
  'public/llms.txt',
  'app/og/page/[key]/cards.ts',
  'src/features/calculator/lib/sadaqahByMonth.ts',
  'src/lib/i18n/urNewPages.ts',
  'src/lib/urMetadata.ts',
];

describe('sadaqa SEO pages are framed as universal voluntary charity', () => {
  it('drops West African, Senegal and festival wording from the sadaqa guides, listings and share cards', () => {
    for (const f of FILES) {
      const text = read(f);
      expect(text, f).not.toMatch(REGIONAL);
      expect(text, f).not.toMatch(FORBIDDEN_AR);
    }
  });
});
