import type { Metadata } from 'next';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { WeekdaySadaqa } from '@/src/components/sadaqa/WeekdaySadaqa';
import { SadaqaDateChecker } from '@/src/components/sadaqa/SadaqaDateChecker';
import { HamdallahDonationCard } from '@/src/components/donation/HamdallahDonationCard';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON } from '@/src/lib/i18n/urPages';
import { UR_SADAQA_DAY as C, UR_WEEKDAY_SADAQA } from '@/src/lib/i18n/urNewPages';
import { UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/sadaqa-of-the-day';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = urduMetadata(EN_PATH);

export default function Page() {
  const serverDay = new Date().getUTCDay();

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />

      <UrduBody>
        <section className="space-y-3" aria-labelledby="ur-sadaqa-today">
          <h2 id="ur-sadaqa-today" className="text-xl font-semibold leading-loose text-slate-900 dark:text-slate-100">
            {UR_WEEKDAY_SADAQA[serverDay]?.name.ur}
          </h2>
          <p>{UR_WEEKDAY_SADAQA[serverDay]?.intro.ur}</p>
          <ul className="list-disc pr-5 space-y-1">
            {(UR_WEEKDAY_SADAQA[serverDay]?.items ?? []).map((item) => (
              <li key={item.en}>{item.ur}</li>
            ))}
          </ul>
        </section>
      </UrduBody>

      <div className="max-w-2xl mx-auto px-4" dir="ltr">
        <WeekdaySadaqa lang="en" serverDay={serverDay} />
      </div>

      <UrduBody>
        <UrduSection id="sadaqa-checker" title={C.checkerTitle.ur}>
          <p>{C.checkerIntro.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.toolUiNote.ur}</p>
          <div dir="ltr">
            <SadaqaDateChecker lang="en" mode="day" />
          </div>
        </UrduSection>
      </UrduBody>

      <div className="max-w-2xl mx-auto px-4">
        <HamdallahDonationCard location="sadaqa" locale="ur" />
      </div>

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduSection id="sadaqa-day-about" title={C.aboutTitle.ur}>
          <p>{C.about.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="sadaqa-day-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('sadaqaOfTheDay'), englishPageLink(EN_PATH, 'Sadaqa of the Day')]} />
      </UrduBody>
    </div>
  );
}
