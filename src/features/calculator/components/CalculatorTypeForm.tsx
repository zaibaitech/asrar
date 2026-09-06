'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, RotateCcw, List } from 'lucide-react';
import { Card } from './Card';
import { NameField } from './NameField';
import { analyzeText, type TextProfile } from '../lib/textAnalysis';
import type { DivineName } from '../lib/divineNames';
import { CALCULATION_TYPES, TWO_NAME_TYPES, DATE_OF_BIRTH_TYPES, type CalculationType } from './calculatorTypes';
import { DivineNamePicker } from './DivineNamePicker';
import { CalculatorResult } from './CalculatorResult';
import { ResonanceResult } from './ResonanceResult';
import { SadaqahResult } from './SadaqahResult';
import { useCalculatorTranslations, type CalculatorLocale } from '../i18n';

const FIELD_KEYS: Record<'name' | 'phrase' | 'general', { label: string; placeholder: string }> = {
  name: { label: 'nameFieldLabel', placeholder: 'nameFieldPlaceholder' },
  phrase: { label: 'phraseFieldLabel', placeholder: 'phraseFieldPlaceholder' },
  general: { label: 'generalFieldLabel', placeholder: 'generalFieldPlaceholder' },
};

/**
 * The input form + result for exactly one calculator type. Reached from the
 * browse list (CalculatorTypeBrowser); "back" hands control up to the
 * parent, which returns to the browse screen.
 */
export function CalculatorTypeForm({
  locale,
  calcType,
  onBack,
}: {
  locale: CalculatorLocale;
  calcType: CalculationType;
  onBack: () => void;
}) {
  const { t } = useCalculatorTranslations(locale);
  const [text, setText] = useState('');
  const [motherText, setMotherText] = useState('');
  const [selectedDivineName, setSelectedDivineName] = useState<DivineName | null>(null);
  const [showDivinePicker, setShowDivinePicker] = useState(false);
  const [profile, setProfile] = useState<TextProfile | null>(null);
  const [resonanceInput, setResonanceInput] = useState<{ person: string; mother: string } | null>(null);
  const [dob, setDob] = useState('');
  const [dobSubmitted, setDobSubmitted] = useState<string | null>(null);
  const [empty, setEmpty] = useState(false);
  const topRef = useRef<HTMLFormElement>(null);

  // The browse list can be scrolled far down when a type is picked; without
  // this the page keeps that scroll position and the (shorter) form renders
  // mostly below the fold instead of showing its input fields.
  useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const isTwoNameType = TWO_NAME_TYPES.includes(calcType);
  const isDobType = DATE_OF_BIRTH_TYPES.includes(calcType);
  const sourceText = calcType === 'dhikr' ? (selectedDivineName?.arabic ?? '') : text;
  const activeType = CALCULATION_TYPES.find((c) => c.type === calcType)!;
  const ActiveIcon = activeType.Icon;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (isDobType) {
      setDobSubmitted(dob);
      setEmpty(false);
      return;
    }
    if (isTwoNameType) {
      setResonanceInput({ person: text, mother: motherText });
      setEmpty(false);
      return;
    }
    const result = analyzeText(sourceText);
    setProfile(result);
    setEmpty(!result);
  }

  function handleReset() {
    setProfile(null);
    setResonanceInput(null);
    setDobSubmitted(null);
    setEmpty(false);
    setText('');
    setMotherText('');
    setDob('');
    setSelectedDivineName(null);
  }

  if (profile || resonanceInput || dobSubmitted) {
    return (
      <div className="flex flex-col gap-3">
        <button type="button" onClick={handleReset} className="flex items-center gap-1.5 self-start text-sm font-medium text-slate-400">
          <RotateCcw size={13} aria-hidden />
          {t('newCalculation')}
        </button>
        {profile && <CalculatorResult locale={locale} profile={profile} calcType={calcType} />}
        {resonanceInput && (calcType === 'divineResonance' || calcType === 'quranicResonance') && (
          <ResonanceResult locale={locale} calcType={calcType} personName={resonanceInput.person} motherName={resonanceInput.mother} />
        )}
        {dobSubmitted && calcType === 'sadaqah' && <SadaqahResult locale={locale} dob={dobSubmitted} />}
      </div>
    );
  }

  return (
    <form ref={topRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
      <button type="button" onClick={onBack} className="flex items-center gap-1.5 self-start text-sm font-medium text-slate-400">
        <ArrowLeft size={14} className="rtl:rotate-180" aria-hidden />
        {t('backToCalculators')}
      </button>

      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/40 dark:text-indigo-400">
          <ActiveIcon size={18} aria-hidden />
        </span>
        <div>
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{t(activeType.titleKey)}</h2>
          <p className="text-sm text-slate-500">{t(activeType.subtitleKey)}</p>
        </div>
      </div>

      <Card className="flex flex-col gap-3">
        {isDobType ? (
          <label className="flex flex-col gap-1.5">
            <span className="text-base text-slate-700 dark:text-slate-300">{t('dobFieldLabel')}</span>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              max={new Date().toISOString().slice(0, 10)}
              className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:[color-scheme:dark]"
            />
            <span className="text-sm text-slate-500">{t('dobFieldHelper')}</span>
          </label>
        ) : calcType === 'dhikr' ? (
          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => setShowDivinePicker(true)}
              className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2 text-base text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            >
              <span className="flex items-center gap-1.5">
                <List size={14} aria-hidden />
                {t('selectDivineName')}
              </span>
              {selectedDivineName && (
                <span dir="rtl" className="text-lg text-indigo-600 dark:text-indigo-400">
                  {selectedDivineName.arabic}
                </span>
              )}
            </button>
            {showDivinePicker && (
              <DivineNamePicker
                locale={locale}
                onSelect={(name) => {
                  setSelectedDivineName(name);
                  setShowDivinePicker(false);
                }}
                onClose={() => setShowDivinePicker(false)}
              />
            )}
          </div>
        ) : isTwoNameType ? (
          <div className="flex flex-col gap-3">
            <NameField locale={locale} label={t('nameFieldLabel')} value={text} onChange={setText} placeholder={t('nameFieldPlaceholder')} />
            <NameField
              locale={locale}
              label={t('motherNameFieldLabel')}
              value={motherText}
              onChange={setMotherText}
              placeholder={t('motherNameFieldPlaceholder')}
            />
          </div>
        ) : (
          <NameField
            locale={locale}
            label={t(FIELD_KEYS[calcType as 'name' | 'phrase' | 'general'].label)}
            value={text}
            onChange={setText}
            placeholder={t(FIELD_KEYS[calcType as 'name' | 'phrase' | 'general'].placeholder)}
            showPicker={false}
          />
        )}
      </Card>

      {empty && <p className="text-sm text-red-500 dark:text-red-400">{t('noLetters')}</p>}
      <button
        type="submit"
        disabled={isDobType ? !dob : isTwoNameType ? !text.trim() : !sourceText.trim()}
        className="rounded-xl bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 disabled:opacity-40"
      >
        {t('calculate')}
      </button>
    </form>
  );
}
