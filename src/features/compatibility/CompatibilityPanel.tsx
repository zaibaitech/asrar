import React, { useState, useRef, useEffect } from 'react';
import { SoulConnectionResult, AstrologicalCompatibility } from '../../types/compatibility';
import { RelationshipInputForm } from '../../components/RelationshipInputForm';
import { SoulConnectionView } from '../../components/SoulConnectionView';
import { AstrologicalInputForm } from '../../components/AstrologicalInputForm';
import { AstrologicalCompatibilityView } from '../../components/AstrologicalCompatibilityView';
import { calculateSoulConnection } from '../../utils/soulConnection';
import { analyzeAstrologicalCompatibility } from '../../utils/astrologicalCompatibility';
import { useAbjad } from '../../contexts/AbjadContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPAT_THEME } from '../../constants/compatibilityTheme';

// Helper to calculate Abjad total from Arabic text
function calculateAbjadTotal(text: string, abjadMap: Record<string, number>): number {
  const normalized = text.replace(/[ًٌٍَُِّْ\s]/g, '');
  return [...normalized].reduce((sum, char) => sum + (abjadMap[char] || 0), 0);
}

/** Which input the user is comparing two people by. */
type InputMode = 'names' | 'dob';

interface CompatibilityPanelProps {
  onBack?: () => void;
}

export function CompatibilityPanel({ onBack }: CompatibilityPanelProps) {
  const [inputMode, setInputMode] = useState<InputMode>('names');
  const [soulConnectionResult, setSoulConnectionResult] = useState<SoulConnectionResult | null>(null);
  const [astrologicalResult, setAstrologicalResult] = useState<AstrologicalCompatibility | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { abjad } = useAbjad();
  const { language } = useLanguage();
  const lang = language as 'en' | 'fr' | 'ar';

  // Scroll to form on mount
  useEffect(() => {
    if (formRef.current && !showResults) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  const handleRelationshipCalculate = async (
    person1Name: string,
    person1Arabic: string,
    person2Name: string,
    person2Arabic: string
  ) => {
    try {
      setIsTransitioning(true);

      // Calculate Abjad (kabir) totals using the context map
      const person1Kabir = calculateAbjadTotal(person1Arabic, abjad);
      const person2Kabir = calculateAbjadTotal(person2Arabic, abjad);

      const result = calculateSoulConnection(
        person1Name,
        person1Arabic,
        person1Kabir,
        person2Name,
        person2Arabic,
        person2Kabir,
      );

      // Smooth transition
      await new Promise(resolve => setTimeout(resolve, 300));

      setSoulConnectionResult(result);
      setShowResults(true);
      setIsTransitioning(false);

      // Scroll to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error calculating compatibility:', error);
      alert('Error calculating compatibility. Please try again.');
      setIsTransitioning(false);
    }
  };

  const handleAstrologicalCalculate = async (
    person1Name: string,
    person1Dob: string,
    person2Name: string,
    person2Dob: string
  ) => {
    try {
      setIsTransitioning(true);

      const result = analyzeAstrologicalCompatibility(person1Name, person1Dob, person2Name, person2Dob, lang);

      await new Promise(resolve => setTimeout(resolve, 300));

      setAstrologicalResult(result);
      setShowResults(true);
      setIsTransitioning(false);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error calculating astrological compatibility:', error);
      alert('Error calculating compatibility. Please try again.');
      setIsTransitioning(false);
    }
  };

  /**
   * Reset to form view
   */
  const handleReset = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowResults(false);
      setSoulConnectionResult(null);
      setAstrologicalResult(null);
      setIsTransitioning(false);

      // Scroll to form
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 300);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6" style={{ background: COMPAT_THEME.pageBg }}>
      <div className="max-w-4xl mx-auto space-y-6">

        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="font-technical text-sm font-semibold flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{ color: COMPAT_THEME.indigo }}
          >
            ← {language === 'fr' ? 'Retour' : 'Back'}
          </button>
        )}

        {/* Title */}
        <div className="text-center mb-6">
          <div className="font-technical text-[11px] tracking-[4px] font-bold" style={{ color: COMPAT_THEME.indigo }}>
            {language === 'fr' ? 'ASRĀR · COMPATIBILITÉ' : 'ASRĀR · COMPATIBILITY'}
          </div>
          <h1 className="font-display font-semibold text-4xl mt-3.5 leading-tight" style={{ color: COMPAT_THEME.ink }}>
            {language === 'fr' ? 'Compatibilité' : 'Compatibility'}
          </h1>
          <p className="text-sm mt-2.5" style={{ color: COMPAT_THEME.muted }}>
            {inputMode === 'names'
              ? (language === 'fr' ? "Explorez l'harmonie relationnelle grâce à la numérologie islamique" : 'Explore relationship harmony through Islamic numerology')
              : (language === 'fr' ? "Explorez la compatibilité astrologique générale à partir des dates de naissance" : 'Explore general astrological compatibility from birth dates')}
          </p>
        </div>

        {/* Names / Birth Date mode toggle */}
        {!showResults && (
          <div className="flex justify-center">
            <div className="inline-flex p-1 rounded-xl" style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}` }}>
              <button
                onClick={() => setInputMode('names')}
                className="px-5 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
                style={inputMode === 'names'
                  ? { background: COMPAT_THEME.indigo, color: '#fff' }
                  : { color: COMPAT_THEME.muted }}
              >
                {language === 'fr' ? 'Par Noms' : 'By Names'}
              </button>
              <button
                onClick={() => setInputMode('dob')}
                className="px-5 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
                style={inputMode === 'dob'
                  ? { background: COMPAT_THEME.indigo, color: '#fff' }
                  : { color: COMPAT_THEME.muted }}
              >
                {language === 'fr' ? 'Par Date de Naissance' : 'By Birth Date'}
              </button>
            </div>
          </div>
        )}

        {/* Main Content - Form or Results */}
        <div
          ref={formRef}
          className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          {!showResults ? (
            inputMode === 'names' ? (
              <RelationshipInputForm
                onCalculate={handleRelationshipCalculate}
                language={lang}
                isLoading={isTransitioning}
              />
            ) : (
              <AstrologicalInputForm
                onCalculate={handleAstrologicalCalculate}
                language={lang}
                isLoading={isTransitioning}
              />
            )
          ) : soulConnectionResult ? (
            <div className="space-y-6">
              <SoulConnectionView
                result={soulConnectionResult}
                language={lang}
              />

              {/* Calculate Again Button */}
              <CalculateAgainButton onClick={handleReset} language={language} />
            </div>
          ) : astrologicalResult ? (
            <div className="space-y-6">
              <AstrologicalCompatibilityView
                compatibility={astrologicalResult}
                language={lang}
              />

              {/* Calculate Again Button */}
              <CalculateAgainButton onClick={handleReset} language={language} />
            </div>
          ) : null}
        </div>

      </div>
    </div>
  );
}

function CalculateAgainButton({ onClick, language }: { onClick: () => void; language: string }) {
  return (
    <button
      onClick={onClick}
      className="w-full px-6 py-3 rounded-xl font-technical font-bold text-sm tracking-wide transition-opacity hover:opacity-90 flex items-center justify-center gap-2"
      style={{ background: COMPAT_THEME.ctaGradient, color: '#fff' }}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
      {language === 'fr' ? 'Calculer un Autre Couple' : 'Calculate Another Pair'}
    </button>
  );
}
