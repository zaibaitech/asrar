'use client';

import { useState } from 'react';
import { ArrowLeft, RotateCcw, List } from 'lucide-react';
import { Card } from './Card';
import { NameField } from './NameField';
import { analyzeText, type TextProfile } from '../lib/textAnalysis';
import type { DivineName } from '../lib/divineNames';
import { CALCULATION_TYPES, TWO_NAME_TYPES, type CalculationType } from './calculatorTypes';
import { DivineNamePicker } from './DivineNamePicker';
import { CalculatorResult } from './CalculatorResult';
import { ResonanceResult } from './ResonanceResult';
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
  const [empty, setEmpty] = useState(false);

  const isTwoNameType = TWO_NAME_TYPES.includes(calcType);
  const sourceText = calcType === 'dhikr' ? (selectedDivineName?.arabic ?? '') : text;
  const activeType = CALCULATION_TYPES.find((c) => c.type === calcType)!;
  const ActiveIcon = activeType.Icon;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
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
    setEmpty(false);
    setText('');
    setMotherText('');
    setSelectedDivineName(null);
  }

  if (profile || resonanceInput) {
    return (
      <div className="flex flex-col gap-3">
        <button type="button" onClick={handleReset} className="flex items-center gap-1.5 self-start text-xs font-medium text-slate-400">
          <RotateCcw size={13} aria-hidden />
          {t('newCalculation')}
        </button>
        {profile && <CalculatorResult locale={locale} profile={profile} calcType={calcType} />}
        {resonanceInput && (calcType === 'divineResonance' || calcType === 'quranicResonance') && (
          <ResonanceResult locale={locale} calcType={calcType} personName={resonanceInput.person} motherName={resonanceInput.mother} />
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <button type="button" onClick={onBack} className="flex items-center gap-1.5 self-start text-xs font-medium text-slate-400">
        <ArrowLeft size={14} className="rtl:rotate-180" aria-hidden />
        {t('backToCalculators')}
      </button>

      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
          <ActiveIcon size={18} aria-hidden />
        </span>
        <div>
          <h2 className="text-lg font-semibold text-gold">{t(activeType.titleKey)}</h2>
          <p className="text-xs text-slate-500">{t(activeType.subtitleKey)}</p>
        </div>
      </div>

      <Card className="flex flex-col gap-3">
        {calcType === 'dhikr' ? (
          <div className="flex flex-col gap-1.5">
            <button
              type="button"
              onClick={() => setShowDivinePicker(true)}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-navy px-3 py-2 text-sm text-slate-300"
            >
              <span className="flex items-center gap-1.5">
                <List size={14} aria-hidden />
                {t('selectDivineName')}
              </span>
              {selectedDivineName && (
                <span dir="rtl" className="text-base text-gold">
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

      {empty && <p className="text-xs text-red-400">{t('noLetters')}</p>}
      <button
        type="submit"
        disabled={isTwoNameType ? !text.trim() : !sourceText.trim()}
        className="rounded-xl bg-gold px-4 py-2 text-sm font-medium text-navy disabled:opacity-40"
      >
        {t('calculate')}
      </button>
    </form>
  );
}
