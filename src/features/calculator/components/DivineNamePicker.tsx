'use client';

import { useMemo, useState } from 'react';
import { X, Search } from 'lucide-react';
import { DIVINE_NAMES, type DivineName } from '../lib/divineNames';
import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

export function DivineNamePicker({
  locale,
  onSelect,
  onClose,
}: {
  locale: CalculatorLocale;
  onSelect: (name: DivineName) => void;
  onClose: () => void;
}) {
  const { t } = useCalculatorTranslations(locale, 'divineNamePicker');
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DIVINE_NAMES;
    return DIVINE_NAMES.filter((n) => n.transliteration.toLowerCase().includes(q) || n.arabic.includes(query));
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 sm:items-center" onClick={onClose}>
      <div
        className="flex max-h-[75vh] w-full max-w-md flex-col rounded-t-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3 dark:border-slate-700">
          <h2 className="text-base font-medium text-slate-900 dark:text-slate-100">{t('title')}</h2>
          <button type="button" onClick={onClose} aria-label={t('title')} className="text-slate-400">
            <X size={18} />
          </button>
        </div>

        <div className="border-b border-slate-200 px-4 py-2 dark:border-slate-700">
          <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
            <Search size={16} className="text-slate-500" aria-hidden />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full bg-transparent text-base text-slate-900 outline-none placeholder:text-slate-500 dark:text-slate-100"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-2">
          {results.length === 0 ? (
            <p className="p-4 text-center text-base text-slate-500">{t('noResults')}</p>
          ) : (
            results.map((name) => (
              <button
                key={name.number}
                type="button"
                onClick={() => onSelect(name)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left hover:bg-slate-100 dark:hover:bg-white/5"
              >
                <span className="text-base text-slate-600 dark:text-slate-300">
                  {name.transliteration} <span className="text-slate-500">· {name.abjadValue}</span>
                </span>
                <span dir="rtl" className="text-lg text-indigo-600 dark:text-indigo-400">
                  {name.arabic}
                </span>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
