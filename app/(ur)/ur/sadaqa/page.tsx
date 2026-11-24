import type { Metadata } from 'next';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { SadaqaDateChecker } from '@/src/components/sadaqa/SadaqaDateChecker';
import { HamdallahDonationCard } from '@/src/components/donation/HamdallahDonationCard';
import { ZODIAC_SADAQAH, ZODIAC_SIGN_ORDER, ZODIAC_SIGN_SYMBOL } from '@/src/data/zodiacSadaqahData';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON } from '@/src/lib/i18n/urPages';
import { UR_SADAQA as C, UR_WEEKDAY_SADAQA, UR_MONTH_SADAQA } from '@/src/lib/i18n/urNewPages';
import { Ar, UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/sadaqa';

export const metadata: Metadata = urduMetadata(EN_PATH);

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />

      <UrduBody>
        <UrduSection id="by-weekday" title={C.dayTitle.ur}>
          <p>{C.dayIntro.ur}</p>
          <ul className="space-y-1">
            {UR_WEEKDAY_SADAQA.map((d) => (
              <li key={d.day}>
                <strong className="text-slate-900 dark:text-slate-100">{d.name.ur}</strong>
                {' '}
                — {d.items.map((s) => s.ur.replace(/۔$/, '')).join('؛ ')}
              </li>
            ))}
          </ul>
          <a href="/ur/sadaqa-of-the-day" className="inline-block font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
            {C.dayLink.ur}
          </a>
        </UrduSection>

        <UrduSection id="by-hijri-month" title={C.monthTitle.ur}>
          <p>{C.monthIntro.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.toolUiNote.ur}</p>
          <div dir="ltr">
            <SadaqaDateChecker lang="en" mode="month" />
          </div>
          <div className="space-y-4">
            {UR_MONTH_SADAQA.map((m) => (
              <article key={m.month} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-2">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {m.month}. {m.name.ur}
                </h3>
                <p className="text-slate-700 dark:text-slate-300 text-sm">{m.intro.ur}</p>
                <ul className="list-disc pr-5 space-y-0.5 text-sm text-slate-700 dark:text-slate-300">
                  {m.items.map((item) => (
                    <li key={item.en}>{item.ur}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </UrduSection>

        <UrduSection id="by-burj" title={C.burjTitle.ur}>
          <p>{C.burjIntro.ur}</p>
          <a href="/ur/name-and-mother-burj" className="inline-block font-semibold text-emerald-700 dark:text-emerald-300 hover:underline">
            {C.burjLink.ur}
          </a>
          <div className="grid gap-4 sm:grid-cols-2">
            {ZODIAC_SIGN_ORDER.map((id) => {
              const z = ZODIAC_SADAQAH[id];
              return (
                <article key={id} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-4 space-y-2">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                    <span aria-hidden="true">{ZODIAC_SIGN_SYMBOL[id]} </span>
                    {z.ur} · {z.translit}{' '}
                    <Ar>({z.ar})</Ar>
                  </h3>
                  <ul className="list-disc pr-5 space-y-0.5 text-sm text-slate-700 dark:text-slate-300">
                    {z.specificForms.map((f) => (
                      <li key={f.title.en}>{f.title.ur}</li>
                    ))}
                  </ul>
                  {z.timing && (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {C.bestDay.ur}: <strong>{z.timing.day.ur}</strong>
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </UrduSection>
      </UrduBody>

      <div className="max-w-2xl mx-auto px-4">
        <HamdallahDonationCard location="sadaqa" locale="ur" />
      </div>

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduFaq id="sadaqa-faq" faqs={C.faqs} />
        <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        <UrduLinks links={[...otherUrduPages('sadaqa'), englishPageLink(EN_PATH, 'Sadaqa Guide')]} />
      </UrduBody>
    </div>
  );
}
