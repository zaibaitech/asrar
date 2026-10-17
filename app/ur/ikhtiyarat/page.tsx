import type { Metadata } from 'next';
import { Suspense } from 'react';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { IkhtiyaratPage } from '@/app/ikhtiyarat/IkhtiyaratPage';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON, UR_IKHTIYARAT as C } from '@/src/lib/i18n/urPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/ikhtiyarat';

export const metadata: Metadata = urduMetadata(EN_PATH);

function Loading() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
      {[1, 2].map((i) => (
        <div key={i} className="h-32 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
      ))}
    </div>
  );
}

/** Tool-first, like /ikhtiyarat: one short H1 + lead, then the tool in the first mobile viewport. */
export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} note={null} />

      {/* The same tool as /ikhtiyarat, unchanged apart from its duplicate header bar (as on /ikhtiyarat). */}
      <Suspense fallback={<Loading />}>
        <IkhtiyaratPage hideHeader />
      </Suspense>

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduSection id="ikhtiyarat-about" title={C.aboutTitle.ur}>
          <p>{C.about.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.toolUiNote.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="ikhtiyarat-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('ikhtiyarat'), englishPageLink(EN_PATH, 'Best Dates (Ikhtiyārāt)')]} />
      </UrduBody>
    </div>
  );
}
