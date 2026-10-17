import type { Metadata } from 'next';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { CompatibilityCalculator } from '@/app/compatibility/CompatibilityCalculator';
import { AbjadSystemSelector } from '@/src/components/AbjadSystemSelector';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON, UR_COMPAT as C } from '@/src/lib/i18n/urPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/compatibility';

export const metadata: Metadata = urduMetadata(EN_PATH);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />
      <div className="max-w-3xl mx-auto px-4 pb-3 space-y-3">
        <aside className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4 space-y-1">
          <h2 className="font-semibold text-amber-900 dark:text-amber-200">{C.adabTitle.ur}</h2>
          <p className="text-sm text-amber-900/90 dark:text-amber-100/90 leading-loose">{C.adab.ur}</p>
        </aside>
        <div className="flex justify-end">
          <AbjadSystemSelector compact />
        </div>
      </div>

      {/* The same calculator as /compatibility, unchanged. */}
      <CompatibilityCalculator />

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduSection id="compat-how" title={C.howTitle.ur}>
          <ol className="list-decimal pr-5 space-y-1">
            {C.how.map((s) => (
              <li key={s.en}>{s.ur}</li>
            ))}
          </ol>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.spellingNote.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="compat-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('compatibility'), englishPageLink(EN_PATH, 'Name Compatibility for Marriage')]} />
      </UrduBody>
    </div>
  );
}
