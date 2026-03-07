import React, { useState, useRef, useEffect } from 'react';
import { CompatibilityMode, RelationshipCompatibility } from '../../types/compatibility';
import { CompatibilityModeSwitcher } from '../../components/CompatibilityModeSwitcher';
import { RelationshipInputForm } from '../../components/RelationshipInputForm';
import { RelationshipCompatibilityView } from '../../components/RelationshipCompatibilityView';
import { analyzeRelationshipCompatibility, getElementFromAbjadTotal } from '../../utils/relationshipCompatibility';
import { useAbjad } from '../../contexts/AbjadContext';
import AIChat from '../../components/AIChat';
import { useLanguage } from '../../contexts/LanguageContext';

// Helper to calculate Abjad total from Arabic text
function calculateAbjadTotal(text: string, abjadMap: Record<string, number>): number {
  const normalized = text.replace(/[ًٌٍَُِّْ\s]/g, '');
  return [...normalized].reduce((sum, char) => sum + (abjadMap[char] || 0), 0);
}

interface CompatibilityPanelProps {
  onBack?: () => void;
}

export function CompatibilityPanel({ onBack }: CompatibilityPanelProps) {
  const [mode, setMode] = useState<CompatibilityMode>('relationship');
  const [relationshipResult, setRelationshipResult] = useState<RelationshipCompatibility | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);
  const { abjad } = useAbjad();
  const { language } = useLanguage();
  
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
      
      // Calculate Abjad totals using the context map
      const person1Total = calculateAbjadTotal(person1Arabic, abjad);
      const person2Total = calculateAbjadTotal(person2Arabic, abjad);
      
      // Determine elements
      const person1Element = getElementFromAbjadTotal(person1Total);
      const person2Element = getElementFromAbjadTotal(person2Total);
      
      // Analyze compatibility
      const result = analyzeRelationshipCompatibility(
        person1Name,
        person1Arabic,
        person1Total,
        person1Element,
        person2Name,
        person2Arabic,
        person2Total,
        person2Element
      );
      
      // Smooth transition
      await new Promise(resolve => setTimeout(resolve, 300));
      
      setRelationshipResult(result);
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
  
  /**
   * Reset to form view
   */
  const handleReset = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowResults(false);
      setRelationshipResult(null);
      setIsTransitioning(false);
      
      // Scroll to form
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 300);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-indigo-950 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium flex items-center gap-2"
          >
            ← Back
          </button>
        )}
        
        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            💫 Compatibility Analysis
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Explore relationship harmony through Islamic numerology
          </p>
        </div>
        
        {/* Mode Switcher - Only show when not viewing results */}
        {!showResults && (
          <CompatibilityModeSwitcher 
            currentMode={mode}
            onModeChange={(newMode) => {
              setMode(newMode);
              setRelationshipResult(null);
            }}
          />
        )}
        
        {/* Main Content - Form or Results */}
        <div 
          ref={formRef}
          className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
        >
          {!showResults ? (
            <RelationshipInputForm 
              onCalculate={handleRelationshipCalculate}
              language={language as 'en' | 'fr' | 'ar'}
              isLoading={isTransitioning}
            />
          ) : relationshipResult ? (
            <div className="space-y-6">
              <RelationshipCompatibilityView 
                compatibility={relationshipResult}
                language={language as 'en' | 'fr' | 'ar'}
              />
              
              {/* Calculate Again Button */}
              <button
                onClick={handleReset}
                className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {language === 'fr' ? 'Calculer un Autre Couple' : 'Calculate Another Pair'}
              </button>

              {/* AI Chat Assistant */}
              <AIChat
                calculationData={{
                  person1: relationshipResult.person1,
                  person2: relationshipResult.person2,
                  overallScore: relationshipResult.overallScore,
                  compatibility: relationshipResult,
                }}
                analysisType="compatibility"
                language={language as 'ar' | 'en' | 'fr'}
              />
            </div>
          ) : null}
        </div>
        
      </div>
    </div>
  );
}
