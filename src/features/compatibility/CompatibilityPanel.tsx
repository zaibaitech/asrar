import React, { useState, useRef } from 'react';
import { SoulConnectionResult, AstrologicalCompatibility, DivineNameConnectionResult } from '../../types/compatibility';
import { RelationshipInputForm } from '../../components/RelationshipInputForm';
import { SoulConnectionView } from '../../components/SoulConnectionView';
import { AstrologicalInputForm } from '../../components/AstrologicalInputForm';
import { AstrologicalCompatibilityView } from '../../components/AstrologicalCompatibilityView';
import { DivineNameInputForm } from '../../components/DivineNameInputForm';
import { DivineNameConnectionView } from '../../components/DivineNameConnectionView';
import { DivineNameMatchesView } from '../../components/DivineNameMatchesView';
import { DivineNameIntentionForm } from '../../components/DivineNameIntentionForm';
import { DivineNameIntentionView } from '../../components/DivineNameIntentionView';
import { calculateSoulConnection, calculateAbjadTotal } from '../../utils/soulConnection';
import { analyzeAstrologicalCompatibility } from '../../utils/astrologicalCompatibility';
import { calculateDivineNameConnection, findBestDivineNameMatches, DivineNameMatch } from '../../utils/divineNameConnection';
import { useAbjad } from '../../contexts/AbjadContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { COMPAT_THEME } from '../../constants/compatibilityTheme';
import type { RelationshipContext } from '../../constants/soulConnectionArchetypes';
import type { DivineName } from '../../data/divine-names';
import type { DivineIntention } from '../../constants/divineNameIntentions';

/** Top-level: comparing two people, a person against a Divine Name, or an intention against a Divine Name. */
type CompatibilityCategory = 'person-to-person' | 'person-to-divine' | 'divine-to-intention';

/** Within Person-to-Person, which input the user is comparing two people by. */
type InputMode = 'names' | 'dob';

interface CompatibilityPanelProps {
  onBack?: () => void;
}

export function CompatibilityPanel({ onBack }: CompatibilityPanelProps) {
  const [category, setCategory] = useState<CompatibilityCategory>('person-to-person');
  const [inputMode, setInputMode] = useState<InputMode>('names');
  const [soulConnectionResult, setSoulConnectionResult] = useState<SoulConnectionResult | null>(null);
  const [selectedContext, setSelectedContext] = useState<RelationshipContext>('universal');
  const [astrologicalResult, setAstrologicalResult] = useState<AstrologicalCompatibility | null>(null);
  const [divineNameResult, setDivineNameResult] = useState<DivineNameConnectionResult | null>(null);
  const [divineNameMatches, setDivineNameMatches] = useState<{ person: { name: string; arabicName: string; kabir: number }; matches: DivineNameMatch[] } | null>(null);
  const [selectedIntention, setSelectedIntention] = useState<DivineIntention | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { abjad } = useAbjad();
  const { language } = useLanguage();
  const lang = language as 'en' | 'fr' | 'ar';

  const handleRelationshipCalculate = async (
    person1Name: string,
    person1Arabic: string,
    person2Name: string,
    person2Arabic: string,
    context: RelationshipContext
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

      setSelectedContext(context);
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

  const handleDivineNameCalculate = async (
    personName: string,
    personArabic: string,
    subMode: 'pick' | 'auto',
    selectedDivineName: DivineName | null
  ) => {
    try {
      setIsTransitioning(true);

      const personKabir = calculateAbjadTotal(personArabic, abjad);

      await new Promise(resolve => setTimeout(resolve, 300));

      if (subMode === 'pick' && selectedDivineName) {
        const result = calculateDivineNameConnection(personName, personArabic, personKabir, selectedDivineName);
        setDivineNameResult(result);
        setDivineNameMatches(null);
      } else {
        const matches = findBestDivineNameMatches(personKabir);
        setDivineNameMatches({ person: { name: personName, arabicName: personArabic, kabir: personKabir }, matches });
        setDivineNameResult(null);
      }
      setShowResults(true);
      setIsTransitioning(false);

      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error calculating Divine Name connection:', error);
      alert('Error calculating compatibility. Please try again.');
      setIsTransitioning(false);
    }
  };

  const handleIntentionSelect = async (intention: DivineIntention) => {
    setIsTransitioning(true);
    await new Promise(resolve => setTimeout(resolve, 300));
    setSelectedIntention(intention);
    setShowResults(true);
    setIsTransitioning(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      setDivineNameResult(null);
      setDivineNameMatches(null);
      setSelectedIntention(null);
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
            {category === 'person-to-divine'
              ? (language === 'fr' ? "Découvrez votre résonance spirituelle avec les 99 Noms d'Allah" : 'Discover your spiritual resonance with the 99 Names of Allah')
              : category === 'divine-to-intention'
              ? (language === 'fr' ? "Appelez Allah par le Nom dont le sens correspond à votre besoin" : 'Call upon Allah by the Name whose meaning matches your need')
              : inputMode === 'names'
              ? (language === 'fr' ? "Explorez l'harmonie relationnelle grâce à la numérologie islamique" : 'Explore relationship harmony through Islamic numerology')
              : (language === 'fr' ? "Explorez la compatibilité astrologique générale à partir des dates de naissance" : 'Explore general astrological compatibility from birth dates')}
          </p>
        </div>

        {/* Category selector: Person-to-Person vs Person-to-Divine-Name vs Divine-Name-to-Intention */}
        {!showResults && (
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center p-1 rounded-xl gap-1" style={{ background: COMPAT_THEME.cardBg, border: `1px solid ${COMPAT_THEME.cardBorder}` }}>
              <button
                onClick={() => setCategory('person-to-person')}
                className="px-5 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
                style={category === 'person-to-person'
                  ? { background: COMPAT_THEME.ctaGradient, color: '#fff' }
                  : { color: COMPAT_THEME.muted }}
              >
                {language === 'fr' ? 'Personne à Personne' : 'Person to Person'}
              </button>
              <button
                onClick={() => setCategory('person-to-divine')}
                className="px-5 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
                style={category === 'person-to-divine'
                  ? { background: COMPAT_THEME.ctaGradient, color: '#fff' }
                  : { color: COMPAT_THEME.muted }}
              >
                {language === 'fr' ? 'Personne à Nom Divin' : 'Person to Divine Name'}
              </button>
              <button
                onClick={() => setCategory('divine-to-intention')}
                className="px-5 py-2 rounded-lg font-technical text-sm font-semibold transition-all"
                style={category === 'divine-to-intention'
                  ? { background: COMPAT_THEME.ctaGradient, color: '#fff' }
                  : { color: COMPAT_THEME.muted }}
              >
                {language === 'fr' ? 'Nom Divin selon une Intention' : 'Divine Name to Intention'}
              </button>
            </div>
          </div>
        )}

        {/* By Names / By Birth Date sub-toggle — only within Person-to-Person */}
        {!showResults && category === 'person-to-person' && (
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
            category === 'person-to-divine' ? (
              <DivineNameInputForm
                onCalculate={handleDivineNameCalculate}
                language={lang}
                isLoading={isTransitioning}
              />
            ) : category === 'divine-to-intention' ? (
              <DivineNameIntentionForm
                onSelect={handleIntentionSelect}
                language={lang}
                isLoading={isTransitioning}
              />
            ) : inputMode === 'names' ? (
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
                initialContext={selectedContext}
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
          ) : divineNameResult ? (
            <div className="space-y-6">
              <DivineNameConnectionView
                result={divineNameResult}
                language={lang}
              />

              {/* Calculate Again Button */}
              <CalculateAgainButton onClick={handleReset} language={language} />
            </div>
          ) : divineNameMatches ? (
            <div className="space-y-6">
              <DivineNameMatchesView
                person={divineNameMatches.person}
                matches={divineNameMatches.matches}
                language={lang}
              />

              {/* Calculate Again Button */}
              <CalculateAgainButton onClick={handleReset} language={language} />
            </div>
          ) : selectedIntention ? (
            <div className="space-y-6">
              <DivineNameIntentionView
                intention={selectedIntention}
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
