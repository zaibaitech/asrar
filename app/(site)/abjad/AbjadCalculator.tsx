'use client';

import { useState } from 'react';
import { CalculatorScreen } from '@/src/features/calculator/CalculatorScreen';
import { CalculatorDisclaimerBanner } from '@/src/components/CalculatorDisclaimerBanner';
import { AbjadSystemSelector } from '@/src/components/AbjadSystemSelector';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { useServerText } from '@/src/features/calculator/i18n/CalculatorTextContext';

/** Client-side Abjad calculator — the same CalculatorScreen the home app's calculator tab uses. */
export function AbjadCalculator() {
  const { language } = useLanguage();
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const st = useServerText(); // Urdu on /ur/abjad (server HTML); identity on /abjad and /ar/abjad

  return (
    <section aria-label={st('Abjad calculator')} className="space-y-3">
      <div className="flex justify-end">
        <AbjadSystemSelector compact />
      </div>
      {showDisclaimer && <CalculatorDisclaimerBanner onDismiss={() => setShowDisclaimer(false)} />}
      <CalculatorScreen appLanguage={language === 'fr' ? 'fr' : 'en'} headingAs="h2" />
    </section>
  );
}
