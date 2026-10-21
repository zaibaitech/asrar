'use client';

import React from 'react';
import { useAbjad } from '../contexts/AbjadContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe2 } from 'lucide-react';
import { useServerText } from '../features/calculator/i18n/CalculatorTextContext';

/**
 * The one app-wide Abjad system switch. Every calculator reads the same
 * choice from AbjadContext (Maghribi by default, remembered in localStorage),
 * so switching here switches them all.
 *
 * `showNote` adds the one-line regional note under the switch; the home
 * app's header bar passes false and keeps the note as a tooltip instead.
 */
export function AbjadSystemSelector({ compact = false, showNote = true }: { compact?: boolean; showNote?: boolean } = {}) {
  const { system, setSystem } = useAbjad();
  const { t } = useLanguage();
  const a = t.abjadSystem;
  const st = useServerText(); // Urdu on /ur/abjad (server HTML); identity elsewhere
  const note = st(a?.note ?? 'Maghribi (the Maghreb, al-Andalus & West Africa) · Mashriqi (Egypt, the Middle East & Asia)');

  if (compact) {
    const toggle = (
      <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-2" title={showNote ? undefined : note} data-testid="abjad-system-selector">
        <button
          type="button"
          aria-pressed={system === 'Maghribi'}
          onClick={() => setSystem('Maghribi')}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            system === 'Maghribi'
              ? 'bg-indigo-600 text-white'
              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
        >
          {st(a.maghribi)}
        </button>
        <button
          type="button"
          aria-pressed={system === 'Mashriqi'}
          onClick={() => setSystem('Mashriqi')}
          className={`px-3 py-1 rounded text-xs font-medium transition-all ${
            system === 'Mashriqi'
              ? 'bg-indigo-600 text-white'
              : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
        >
          {st(a.mashriqi)}
        </button>
      </div>
    );
    if (!showNote) return toggle;
    return (
      <div className="flex flex-col items-end gap-1">
        {toggle}
        <p className="text-[11px] leading-snug text-slate-500 dark:text-slate-400 text-end" data-testid="abjad-system-note">{note}</p>
      </div>
    );
  }

  return (
    <div data-testid="abjad-system-selector" className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-3">
          <Globe2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <div>
            <div className="font-semibold text-slate-900 dark:text-slate-100">
              {a.title}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-400">
              {a.currentMode} <span className="font-medium text-indigo-600 dark:text-indigo-400">{system === 'Maghribi' ? a.maghribi : a.mashriqi}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            aria-pressed={system === 'Maghribi'}
            onClick={() => setSystem('Maghribi')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              system === 'Maghribi'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-indigo-400'
            }`}
          >
            {a.maghribi}
            <div className="text-xs opacity-75">{a.western}</div>
          </button>
          <button
            type="button"
            aria-pressed={system === 'Mashriqi'}
            onClick={() => setSystem('Mashriqi')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              system === 'Mashriqi'
                ? 'bg-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600 hover:border-indigo-400'
            }`}
          >
            {a.mashriqi}
            <div className="text-xs opacity-75">{a.eastern}</div>
          </button>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-indigo-200 dark:border-indigo-800">
        <div className="text-xs text-slate-600 dark:text-slate-400">
          {system === 'Maghribi' ? (
            <>
              <span className="font-medium">{a.maghribiSystem}</span> {a.maghribiDesc}
            </>
          ) : (
            <>
              <span className="font-medium">{a.mashriqiSystem}</span> {a.mashriqiDesc}
            </>
          )}
        </div>
        {showNote && <div className="mt-1 text-xs text-slate-500 dark:text-slate-400" data-testid="abjad-system-note">{note}</div>}
      </div>
    </div>
  );
}
