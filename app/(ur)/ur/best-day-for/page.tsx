import type { Metadata } from 'next';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { PURPOSE_SLUGS } from '@/src/lib/ikhtiyarat/purposes';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON } from '@/src/lib/i18n/urPages';
import { UR_BEST_DAY as C } from '@/src/lib/i18n/urNewPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/best-day-for';

export const metadata: Metadata = urduMetadata(EN_PATH);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <nav aria-label={C.h1.ur} className="space-y-3">
          <ul className="space-y-3">
            {PURPOSE_SLUGS.map((slug) => {
              const p = C.purposes[slug];
              return (
                <li key={slug}>
                  <a href={`/ur/best-day-for/${slug}`} className="font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
                    {p.name.ur}
                  </a>
                  <p className="text-sm leading-loose text-slate-600 dark:text-slate-400">{p.lead.ur}</p>
                </li>
              );
            })}
          </ul>
        </nav>
        <UrduSection id="best-day-about" title={C.aboutTitle.ur}>
          <p>{C.about.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="best-day-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('bestDayFor'), englishPageLink(EN_PATH, 'Best Day For…')]} />
      </UrduBody>
    </div>
  );
}
