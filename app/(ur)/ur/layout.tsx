/**
 * Layout for the Urdu pages (/ur/...), phase 1, under native review.
 *
 * Loads Noto Nastaliq Urdu (self-hosted, Arabic-script subset only) for the
 * /ur pages alone: the font is declared in this layout, so EN/FR/AR pages
 * never reference or download it. Noto Naskh Arabic (root layout) is the
 * fallback. /ur pages are noindex by default (metadata below, plus X-Robots-Tag
 * in middleware) and out of the sitemap and hreflang, except the reviewed
 * allow-list (INDEXABLE_UR_PATHS: /ur/abjad), which overrides this per page.
 */
import type { Metadata } from 'next';
import localFont from 'next/font/local';

const nastaliq = localFont({
  src: '../../../src/fonts/NotoNastaliqUrdu-arabic-var.woff2',
  weight: '400 700',
  display: 'swap',
  variable: '--font-urdu',
  adjustFontFallback: false,
  declarations: [{ prop: 'unicode-range', value: 'U+0600-06FF, U+0750-077F, U+0870-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC' }],
});

// Default for every /ur page. Allow-listed pages (INDEXABLE_UR_PATHS: /ur/abjad) override
// it in their own page metadata (urduMetadata), which Next.js merges over the layout.
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function UrduLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="ur" dir="rtl" className={`${nastaliq.variable} font-urdu`}>
      {children}
    </div>
  );
}
