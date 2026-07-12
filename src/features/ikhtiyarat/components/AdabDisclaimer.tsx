'use client';

import { useState } from 'react';
import { ikhtiyaratCopy, disclaimerArabic, UiLang } from '../copy';

export function AdabDisclaimer({ language }: { language: UiLang }) {
  const [dismissed, setDismissed] = useState(false);
  const c = ikhtiyaratCopy[language];

  if (dismissed) {
    return (
      <button
        onClick={() => setDismissed(false)}
        className="w-full text-left px-4 py-2 rounded-xl border border-amber-200 dark:border-amber-800/50 bg-amber-50/60 dark:bg-amber-950/20 text-xs text-amber-700 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950/30 transition-colors"
      >
        {c.disclaimerTitle} ⓘ
      </button>
    );
  }

  return (
    <div className="rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-amber-50/80 dark:bg-amber-950/30 p-4 space-y-3">
      <h2 className="text-sm font-semibold text-amber-900 dark:text-amber-300">{c.disclaimerTitle}</h2>
      <p className="text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed">{c.disclaimer}</p>
      <p className="font-arabic text-sm text-amber-800 dark:text-amber-200/90 leading-relaxed text-right">{disclaimerArabic}</p>
      <button
        onClick={() => setDismissed(true)}
        className="w-full py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-colors active:scale-[0.98]"
      >
        {c.disclaimerAccept}
      </button>
    </div>
  );
}
