'use client';

import { useState } from 'react';
import { List, Keyboard } from 'lucide-react';
import { ArabicKeyboard } from './ArabicKeyboard';
import { NamePicker } from './NamePicker';
import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

export function NameField({
  locale,
  label,
  value,
  onChange,
  placeholder,
  showPicker: allowPicker = true,
}: {
  locale: CalculatorLocale;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  /** Hide "Choose from list" — the picker is a person-name database, not relevant for arbitrary text. */
  showPicker?: boolean;
}) {
  const { t } = useCalculatorTranslations(locale, 'nameField');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-base text-slate-700 dark:text-slate-300">{label}</span>
        {allowPicker && (
          <button
            type="button"
            onClick={() => setShowPicker(true)}
            className="flex items-center gap-1 text-sm font-medium text-indigo-600 underline underline-offset-2 dark:text-indigo-400"
          >
            <List size={13} aria-hidden />
            {t('chooseFromList')}
          </button>
        )}
      </div>

      <input
        dir="rtl"
        lang="ar"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-right text-slate-900 outline-none focus:border-indigo-500 font-arabic dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      />

      <button
        type="button"
        onClick={() => setShowKeyboard((v) => !v)}
        className="flex items-center gap-1.5 self-start text-sm font-medium text-slate-400"
      >
        <Keyboard size={13} aria-hidden />
        {showKeyboard ? t('hideKeyboard') : t('showKeyboard')}
      </button>

      {showKeyboard && (
        <ArabicKeyboard
          locale={locale}
          onKey={(char) => onChange(value + char)}
          onBackspace={() => onChange(value.slice(0, -1))}
          onSpace={() => onChange(value + ' ')}
        />
      )}

      {showPicker && (
        <NamePicker
          locale={locale}
          onSelect={(arabic) => {
            onChange(arabic);
            setShowPicker(false);
          }}
          onClose={() => setShowPicker(false)}
        />
      )}
    </div>
  );
}
