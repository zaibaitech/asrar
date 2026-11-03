'use client';

import { useEffect, useState } from 'react';
import { InfoDisclosure } from '../calculator/components/InfoDisclosure';
import { LABELS, SOURCES, type Lang, type SourceRef, type StepId } from './sourcesContent';

function QuranExcerpt({ surah, ayah }: { surah: number; ayah: number }) {
  const [text, setText] = useState<string | null | undefined>(undefined);
  useEffect(() => {
    let live = true;
    // Verbatim Tanzil text from our own route; nothing about the user is sent.
    fetch(`/api/quran-verse/${surah}/${ayah}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => live && setText(j?.text ?? null))
      .catch(() => live && setText(null));
    return () => {
      live = false;
    };
  }, [surah, ayah]);
  return (
    <div className="mt-1 rounded-lg border border-slate-200 dark:border-slate-700 p-2">
      <p lang="ar" dir="rtl" className="font-arabic text-lg leading-loose text-slate-900 dark:text-slate-100">
        {text ?? '…'}
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400" dir="ltr">
        {surah}:{ayah} · tanzil.net
      </p>
    </div>
  );
}

function badgeText(r: SourceRef, lang: Lang) {
  return r.status === 'to-verify' ? LABELS.toVerify[lang] : r.status === 'attributed' ? LABELS.attributed[lang] : r.status === 'cited-in-repo' ? LABELS.citedInRepo[lang] : LABELS.quranSrc[lang];
}

/** "Show source" for one step. Built on the calculator's own InfoDisclosure. */
export function SourceDrawer({ step, lang }: { step: StepId; lang: Lang }) {
  const src = SOURCES[step];
  return (
    <InfoDisclosure label={LABELS.showSource[lang]}>
      <div className="space-y-2">
        <p>{src.note}</p>
        <ul className="space-y-2">
          {src.refs.map((r, i) => (
            <li key={i} className="space-y-0.5">
              <span
                className={`inline-block rounded-full border px-2 py-0.5 text-xs font-medium ${
                  r.status === 'to-verify'
                    ? 'border-amber-300 text-amber-800 dark:border-amber-700 dark:text-amber-300'
                    : 'border-slate-300 dark:border-slate-600'
                }`}
              >
                {badgeText(r, lang)}
              </span>
              <p>{r.text}</p>
              {r.url && (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="inline-block min-h-[44px] py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 underline break-all" dir="ltr">
                  ablibrary.net/book_content/b/10942/16
                </a>
              )}
              {r.quran && <QuranExcerpt surah={r.quran.surah} ayah={r.quran.ayah} />}
            </li>
          ))}
        </ul>
      </div>
    </InfoDisclosure>
  );
}
