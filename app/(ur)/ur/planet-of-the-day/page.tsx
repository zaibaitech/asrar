import type { Metadata } from 'next';
import { Suspense } from 'react';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { PlanetOfTheDayPage } from '@/app/(site)/planet-of-the-day/PlanetOfTheDayPage';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON, UR_POTD as C } from '@/src/lib/i18n/urPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/planet-of-the-day';

export const metadata: Metadata = urduMetadata(EN_PATH);

function Loading() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-6 space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-32 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-slate-50 dark:from-slate-900 dark:via-amber-950/10 dark:to-slate-900">
        <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />
      </div>

      {/* The same tool as /planet-of-the-day, unchanged. */}
      <Suspense fallback={<Loading />}>
        <PlanetOfTheDayPage />
      </Suspense>

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-3xl mx-auto px-4 pt-2" />

      <UrduBody>
        <UrduSection id="potd-rulers" title={C.rulersTitle.ur}>
          <p>{C.rulers.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="potd-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('planetOfDay'), englishPageLink(EN_PATH, 'Planet of the Day')]} />
      </UrduBody>
    </>
  );
}
