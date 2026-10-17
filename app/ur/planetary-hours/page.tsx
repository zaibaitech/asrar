import type { Metadata } from 'next';
import { Suspense } from 'react';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { PlanetaryHoursPage } from '@/app/planetary-hours/PlanetaryHoursPage';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON, UR_ELEMENTS, UR_HOURS as C, UR_PLANETS, UR_WEEKDAYS } from '@/src/lib/i18n/urPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/planetary-hours';

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
      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-indigo-950/20 dark:to-slate-900">
        <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />
      </div>

      {/* The same planetary-hours tool as /planetary-hours, unchanged. */}
      <Suspense fallback={<Loading />}>
        <PlanetaryHoursPage />
      </Suspense>

      <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
        <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />
        <UrduBody>
          <UrduSection id="hours-what" title={C.whatTitle.ur}>
            <p>{C.what.ur}</p>
          </UrduSection>

          <UrduSection id="hours-how" title={C.howTitle.ur}>
            <ol className="list-decimal pr-5 space-y-1">
              {C.how.map((s) => (
                <li key={s.en}>{s.ur}</li>
              ))}
            </ol>
            <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
          </UrduSection>

          <UrduSection id="hours-guide" title={C.guideTitle.ur}>
            <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
              <table className="w-full text-right text-sm">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                  <tr>
                    <th scope="col" className="px-3 py-2 font-semibold">{C.colPlanet.ur}</th>
                    <th scope="col" className="px-3 py-2 font-semibold">{C.colDay.ur}</th>
                    <th scope="col" className="px-3 py-2 font-semibold">{C.colElement.ur}</th>
                    <th scope="col" className="px-3 py-2 font-semibold">{C.colBestFor.ur}</th>
                  </tr>
                </thead>
                <tbody>
                  {UR_PLANETS.map((p) => (
                    <tr key={p.name.en} className="border-t border-slate-200 dark:border-slate-700 align-top bg-white dark:bg-slate-900">
                      <th scope="row" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">{p.name.ur}</th>
                      <td className="px-3 py-2 whitespace-nowrap">{UR_WEEKDAYS[p.day].ur}</td>
                      <td className="px-3 py-2 whitespace-nowrap">{UR_ELEMENTS[p.element].ur}</td>
                      <td className="px-3 py-2">{p.bestFor.ur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </UrduSection>

          <UrduFaq id="hours-faq" faqs={C.faqs} />
          <UrduLinks links={[...otherUrduPages('hours'), englishPageLink(EN_PATH, 'Planetary Hours Today')]} />
        </UrduBody>
      </div>
    </>
  );
}
