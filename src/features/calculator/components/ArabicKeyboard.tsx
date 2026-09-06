'use client';

import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

const ROWS: string[][] = [
  ['ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع'],
  ['ه', 'خ', 'ح', 'ج', 'د', 'ش', 'س'],
  ['ظ', 'ط', 'ذ', 'ز', 'ر', 'و', 'ي'],
  ['ة', 'ى', 'ء', 'ؤ', 'ئ', 'ا', 'ب'],
  ['ن', 'م', 'ك', 'ل', 'ت'],
];

export function ArabicKeyboard({
  locale,
  onKey,
  onBackspace,
  onSpace,
}: {
  locale: CalculatorLocale;
  onKey: (char: string) => void;
  onBackspace: () => void;
  onSpace: () => void;
}) {
  const { t } = useCalculatorTranslations(locale, 'nameField');

  return (
    <div dir="rtl" className="flex flex-col gap-1.5 rounded-xl border border-slate-200 bg-slate-100 p-2 dark:border-slate-700 dark:bg-slate-900">
      {ROWS.map((row, i) => (
        <div key={i} className="flex justify-center gap-1">
          {row.map((char) => (
            <button
              key={char}
              type="button"
              onClick={() => onKey(char)}
              className="flex h-9 flex-1 items-center justify-center rounded-lg border border-slate-200 bg-white text-base font-medium text-slate-900 active:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:active:bg-slate-700"
            >
              {char}
            </button>
          ))}
        </div>
      ))}
      <div className="flex gap-1.5">
        <button
          type="button"
          onClick={onBackspace}
          className="flex h-9 flex-1 items-center justify-center rounded-lg border border-red-200 bg-red-50 text-sm font-medium text-red-600 dark:border-red-800 dark:bg-red-900/30 dark:text-red-300"
        >
          {t('delete')}
        </button>
        <button
          type="button"
          onClick={onSpace}
          className="flex h-9 flex-[2] items-center justify-center rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
        >
          {t('space')}
        </button>
      </div>
    </div>
  );
}
