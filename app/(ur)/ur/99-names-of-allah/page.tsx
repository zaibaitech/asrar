import type { Metadata } from 'next';
import { getDivineNames } from '@/src/data/divine-names';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '@/src/lib/abjad-maps';
import { urduMetadata } from '@/src/lib/urMetadata';
import { UR_COMMON } from '@/src/lib/i18n/urPages';
import { UR_NAMES99 as C } from '@/src/lib/i18n/urNewPages';
import { Ar, UrduBody, UrduFaq, UrduHeader, UrduLinks, UrduSection, englishPageLink, otherUrduPages } from '../_shared/UrduLanding';

const EN_PATH = '/99-names-of-allah';

export const dynamic = 'force-static';

export const metadata: Metadata = urduMetadata(EN_PATH);

const NAMES = getDivineNames(ABJAD_MAGHRIBI);
const MASHRIQI_VALUE = new Map(getDivineNames(ABJAD_MASHRIQI).map((n) => [n.number, n.abjadValue]));

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <UrduHeader h1={C.h1.ur} lead={C.lead.ur} note={null} />

      <UrduBody>
        <ol className="space-y-2" aria-label={C.listLabel.ur}>
          {NAMES.map((n) => (
            <li
              key={n.number}
              id={`name-${n.number}`}
              className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-3 sm:p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-base font-semibold leading-loose text-slate-900 dark:text-slate-100">
                  <span className="text-slate-400 dark:text-slate-500 tabular-nums">{n.number}.</span> {n.transliteration}
                </h2>
                <Ar>
                  <span className="text-xl shrink-0">{n.arabic}</span>
                </Ar>
              </div>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                {C.abjadLabel.ur}: {n.abjadValue}
                {MASHRIQI_VALUE.get(n.number) !== n.abjadValue && <> · {C.mashriqiLabel.ur}: {MASHRIQI_VALUE.get(n.number)}</>}
              </p>
            </li>
          ))}
        </ol>

        <UrduSection id="names99-about" title={C.aboutTitle.ur}>
          <p>{C.about.ur}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{UR_COMMON.disclaimer.ur}</p>
        </UrduSection>
        <UrduFaq id="names99-faq" faqs={C.faqs} />
        <UrduLinks links={[...otherUrduPages('names99'), englishPageLink(EN_PATH, 'The 99 Names of Allah')]} />
      </UrduBody>
    </div>
  );
}
