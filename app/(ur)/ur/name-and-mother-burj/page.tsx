import type { Metadata } from 'next';
import { RelatedTools } from '@/src/components/seo/RelatedTools';
import { BurjCalculator } from '@/app/(site)/name-and-mother-burj/BurjCalculator';
import { getBurujData } from '@/src/features/istikhara/calculations';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_BURJ as C, UR_BURUJ, UR_ELEMENTS, UR_WEEKDAYS, urDhikrDisplay } from '@/src/lib/i18n/urPages';
import { Ar, UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages, UrduSpellingNote } from '../_shared/UrduLanding';

const EN_PATH = '/name-and-mother-burj';

export const metadata: Metadata = urduMetadata(EN_PATH);

/** The 12 burūj from the same burujData.json the calculator uses (element, blessed day, dhikr). */
function burujRows() {
  return Array.from({ length: 12 }, (_, i) => {
    const n = i + 1;
    const p = getBurujData(n);
    const names = p.spiritual_practice.divine_names;
    const dayNumber = p.blessed_day.day_number;
    return {
      n,
      name: UR_BURUJ[i].ur,
      element: UR_ELEMENTS[p.element]?.ur ?? p.element,
      day: dayNumber != null ? UR_WEEKDAYS[dayNumber]?.ur ?? '' : '',
      dhikr: 'arabic' in names ? urDhikrDisplay(names.arabic) : '',
    };
  });
}

export default function Page() {
  const rows = burujRows();
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} />

      {/* The same "Who Am I?" calculator as /name-and-mother-burj, unchanged. */}
      <BurjCalculator />

      <RelatedTools pagePath={EN_PATH} lang="ur" className="max-w-2xl mx-auto px-4 pt-6" />

      <UrduBody>
        <UrduSection id="burj-how" title={C.howTitle.ur}>
          <ol className="list-decimal pr-5 space-y-1">
            {C.how.map((s) => (
              <li key={s.en}>{s.ur}</li>
            ))}
          </ol>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100">{C.exampleTitle.ur}</h3>
          <p>{C.example.ur}</p>
          <UrduSpellingNote />
          <p className="text-sm text-slate-500 dark:text-slate-400">{C.dobNote.ur}</p>
        </UrduSection>

        <UrduSection id="burj-istikhara" title={C.istikharaTitle.ur}>
          <p>{C.istikhara.ur}</p>
        </UrduSection>

        <UrduSection id="buruj-table" title={C.tableTitle.ur}>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
            <table className="w-full text-right text-sm">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <tr>
                  <th scope="col" className="px-3 py-2 font-semibold">{C.colBurj.ur}</th>
                  <th scope="col" className="px-3 py-2 font-semibold">{C.colElement.ur}</th>
                  <th scope="col" className="px-3 py-2 font-semibold">{C.colDay.ur}</th>
                  <th scope="col" className="px-3 py-2 font-semibold">{C.colDhikr.ur}</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.n} id={`burj-${r.n}`} className="border-t border-slate-200 dark:border-slate-700 align-top bg-white dark:bg-slate-900">
                    <th scope="row" className="px-3 py-2 font-semibold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {r.n}. {r.name}
                    </th>
                    <td className="px-3 py-2 whitespace-nowrap">{r.element}</td>
                    <td className="px-3 py-2 whitespace-nowrap">{r.day}</td>
                    <td className="px-3 py-2"><Ar>{r.dhikr}</Ar></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </UrduSection>

        <UrduFaq id="burj-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('burj'), englishPageLink(EN_PATH, "Find Your Burj from Your Name & Mother's Name")]} />
      </UrduBody>
    </div>
  );
}
