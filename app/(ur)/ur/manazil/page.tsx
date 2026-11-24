import type { Metadata } from 'next';
import { Suspense } from 'react';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { ManazilHubClient } from '@/app/(site)/manazil/ManazilHubClient';
import { LUNAR_MANSIONS } from '@/src/lib/lunarMansions';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON } from '@/src/lib/i18n/urPages';
import { UR_MANAZIL_PAGE as C } from '@/src/lib/i18n/urNewPages';
import { Ar, UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/manazil';

export const metadata: Metadata = urduMetadata(EN_PATH);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />

      <div className="max-w-2xl mx-auto px-4">
        <Suspense fallback={<div className="h-40 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 animate-pulse" />}>
          <ManazilHubClient language="en" />
        </Suspense>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.toolUiNote.ur}</p>
      </div>

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduSection id="manazil-about" title={C.aboutTitle.ur}>
          <p>{C.about.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduSection id="manazil-browse" title={C.browseTitle.ur}>
          <p>{C.browseLead.ur}</p>
          <ol className="space-y-2">
            {LUNAR_MANSIONS.map((m) => (
              <li key={m.number} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 flex items-baseline justify-between gap-3">
                <span className="text-slate-800 dark:text-slate-200">
                  <span className="text-slate-400 dark:text-slate-500 tabular-nums">{m.number}.</span> {m.nameTransliteration}
                </span>
                <Ar>
                  <span className="text-lg shrink-0">{m.nameArabic}</span>
                </Ar>
              </li>
            ))}
          </ol>
        </UrduSection>
        <UrduFaq id="manazil-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('manazil'), englishPageLink(EN_PATH, 'Lunar Mansions (Manāzil al-Qamar)')]} />
      </UrduBody>
    </div>
  );
}
