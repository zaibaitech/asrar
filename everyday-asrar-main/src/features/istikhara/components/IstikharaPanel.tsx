"use client";

import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { translations } from "../../../lib/translations";
import type { IstikharaCalculationResult } from "../types";
import AIChat from "../../../components/AIChat";
import { 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  History,
  Download,
  Share2,
  AlertTriangle,
  Info,
  CheckCircle,
  Clock,
  Star,
  Moon,
  Heart,
  Shield,
  TrendingUp,
  X,
  ChevronRight,
  Zap,
  Eye,
  Save,
  RefreshCw
} from "lucide-react";

// Import child components
import { IstikharaForm } from "./IstikharaForm";
import { IstikharaResults } from "./IstikharaResults";
import { IstikharaEducation } from "./IstikharaEducation";

interface SavedCalculation {
  id: string;
  personName: string;
  motherName: string;
  result: IstikharaCalculationResult;
  timestamp: string;
}

/**
 * IstikharaPanel - Advanced Main Container for Istikharah al-Asmāʾ Module
 * 
 * Features:
 * - Complete state management with history tracking
 * - Smooth animations and transitions
 * - Save/load calculations from localStorage
 * - Export and share functionality
 * - Comprehensive educational content
 * - Statistics and usage insights
 * - Progress indicators
 * - Bilingual support with cultural sensitivity
 * - Mobile-optimized responsive design
 * - Accessibility features
 */
export function IstikharaPanel() {
  const { language } = useLanguage();
  const t = translations[language].istikhara;
  
  // Ref for scrolling to form
  const formRef = useRef<HTMLDivElement>(null);
  
  // State management
  const [calculationResult, setCalculationResult] = useState<IstikharaCalculationResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [savedCalculations, setSavedCalculations] = useState<SavedCalculation[]>([]);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);
  const [totalCalculations, setTotalCalculations] = useState(0);
  const [showQuickTips, setShowQuickTips] = useState(false);

  // Scroll to form on mount
  useEffect(() => {
    if (formRef.current && !showResults) {
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, []);

  // Load saved data on mount
  useEffect(() => {
    const saved = localStorage.getItem('istikhara-history');
    const welcomeSeen = localStorage.getItem('istikhara-welcome-seen');
    const count = localStorage.getItem('istikhara-total-count');
    
    if (saved) {
      try {
        setSavedCalculations(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load history:', e);
      }
    }
    
    setHasSeenWelcome(welcomeSeen === 'true');
    setTotalCalculations(count ? parseInt(count) : 0);
  }, []);

  // Save to history
  const saveCalculation = (result: IstikharaCalculationResult) => {
    const calculation: SavedCalculation = {
      id: Date.now().toString(),
      personName: result.personName,
      motherName: result.motherName,
      result,
      timestamp: new Date().toISOString()
    };

    const updated = [calculation, ...savedCalculations].slice(0, 10); // Keep last 10
    setSavedCalculations(updated);
    localStorage.setItem('istikhara-history', JSON.stringify(updated));

    // Update count
    const newCount = totalCalculations + 1;
    setTotalCalculations(newCount);
    localStorage.setItem('istikhara-total-count', newCount.toString());
  };

  /**
   * Handle calculation from form submission
   */
  const handleCalculate = async (result: IstikharaCalculationResult) => {
    setIsTransitioning(true);
    
    // Save to history
    saveCalculation(result);
    
    // Smooth transition
    await new Promise(resolve => setTimeout(resolve, 300));
    
    setCalculationResult(result);
    setShowResults(true);
    setIsTransitioning(false);
    
    // Mark welcome as seen
    if (!hasSeenWelcome) {
      setHasSeenWelcome(true);
      localStorage.setItem('istikhara-welcome-seen', 'true');
    }

    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Reset to form view
   */
  const handleReset = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setShowResults(false);
      setCalculationResult(null);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  /**
   * Load saved calculation
   */
  const loadSavedCalculation = (saved: SavedCalculation) => {
    setCalculationResult(saved.result);
    setShowResults(true);
    setShowHistory(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  /**
   * Delete saved calculation
   */
  const deleteSavedCalculation = (id: string) => {
    const updated = savedCalculations.filter(calc => calc.id !== id);
    setSavedCalculations(updated);
    localStorage.setItem('istikhara-history', JSON.stringify(updated));
  };

  /**
   * Clear all history
   */
  const clearAllHistory = () => {
    if (window.confirm(
      language === 'en' 
        ? 'Are you sure you want to clear all saved calculations?' 
        : 'Êtes-vous sûr de vouloir effacer tous les calculs sauvegardés?'
    )) {
      setSavedCalculations([]);
      localStorage.removeItem('istikhara-history');
    }
  };

  /**
   * Export current result
   */
  const handleExport = () => {
    if (!calculationResult) return;

    const data = {
      personName: calculationResult.personName,
      motherName: calculationResult.motherName,
      element: calculationResult.burujProfile.element,
      blessed_day: calculationResult.burujProfile.blessed_day,
      career: calculationResult.burujProfile.career,
      timestamp: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `istikhara-${calculationResult.personName}-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  /**
   * Share current result
   */
  const handleShare = async () => {
    if (!calculationResult) return;

    const shareText = language === 'en'
      ? `I discovered my spiritual profile through Istikhara al-Asmāʾ! I'm a ${calculationResult.burujProfile.element} element. ✨🌙`
      : `J'ai découvert mon profil spirituel avec Istikhara al-Asmāʾ! Je suis un élément ${calculationResult.burujProfile.element}. ✨🌙`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Istikhara al-Asmāʾ Results',
          text: shareText,
          url: window.location.href
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      alert(language === 'en' ? 'Copied to clipboard!' : 'Copié dans le presse-papiers!');
    }
  };

  return (
    <div className="min-h-screen space-y-4 sm:space-y-6 pb-20">
      {/* Floating Action Buttons */}
      {!showResults && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-2 md:gap-3">
          {/* Quick Tips Button */}
          <button
            onClick={() => setShowQuickTips(true)}
            className="group flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
            title={language === 'en' ? 'Quick Tips' : 'Conseils Rapides'}
          >
            <Zap className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Quick Tips' : 'Conseils'}
            </span>
          </button>

          {/* History Button */}
          {savedCalculations.length > 0 && (
            <button
              onClick={() => setShowHistory(true)}
              className="group flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative text-sm md:text-base"
              title={language === 'en' ? 'View History' : 'Voir l\'Historique'}
            >
              <History className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">
                {language === 'en' ? 'History' : 'Historique'}
              </span>
              <span className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 text-white text-[10px] md:text-xs rounded-full flex items-center justify-center">
                {savedCalculations.length}
              </span>
            </button>
          )}

          {/* Learning Center Button */}
          <button
            onClick={() => setShowEducation(true)}
            className="group flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
            title={language === 'en' ? 'Learning Center' : 'Centre d\'Apprentissage'}
          >
            <BookOpen className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Learn' : 'Apprendre'}
            </span>
            <HelpCircle className="w-3 h-3 md:w-4 md:h-4 opacity-70" />
          </button>
        </div>
      )}

      {/* Results Actions */}
      {showResults && (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-2 md:gap-3">
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
          >
            <Share2 className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Share' : 'Partager'}
            </span>
          </button>

          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-3 py-2 md:px-4 md:py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm md:text-base"
          >
            <Download className="w-4 h-4 md:w-5 md:h-5" />
            <span className="hidden sm:inline">
              {language === 'en' ? 'Export' : 'Exporter'}
            </span>
          </button>
        </div>
      )}

      {/* Modals */}
      <IstikharaEducation isOpen={showEducation} onClose={() => setShowEducation(false)} />

      {/* History Modal */}
      {showHistory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-2 sm:p-4">
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[90vh] sm:max-h-[80vh] overflow-hidden flex flex-col border-2 border-purple-500/30 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
              <div className="flex items-center gap-2 sm:gap-3">
                <History className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                <h2 className="text-lg sm:text-2xl font-bold text-white">
                  {language === 'en' ? 'Calculation History' : 'Historique des Calculs'}
                </h2>
              </div>
              <button
                onClick={() => setShowHistory(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-3">
              {savedCalculations.length === 0 ? (
                <div className="text-center py-12">
                  <History className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400">
                    {language === 'en' ? 'No saved calculations yet' : 'Aucun calcul sauvegardé'}
                  </p>
                </div>
              ) : (
                savedCalculations.map((saved) => (
                  <div
                    key={saved.id}
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{saved.result.burujProfile.element_emoji}</span>
                          <div>
                            <h3 className="font-semibold text-white font-arabic">
                              {saved.personName}
                            </h3>
                            <p className="text-xs text-gray-500">
                              {new Date(saved.timestamp).toLocaleDateString(
                                language === 'en' ? 'en-US' : 'fr-FR',
                                { year: 'numeric', month: 'long', day: 'numeric' }
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm">
                          <span className="text-purple-400">
                            {saved.result.burujProfile.element} {language === 'en' ? 'Element' : 'Élément'}
                          </span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400">
                            {saved.result.burujProfile.blessed_day.day[language]}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => loadSavedCalculation(saved)}
                          className="px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteSavedCalculation(saved.id)}
                          className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors text-sm"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {savedCalculations.length > 0 && (
              <div className="p-4 border-t border-white/10 flex justify-between items-center">
                <p className="text-sm text-gray-400">
                  {savedCalculations.length} {language === 'en' ? 'saved calculations' : 'calculs sauvegardés'}
                </p>
                <button
                  onClick={clearAllHistory}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                >
                  {language === 'en' ? 'Clear All' : 'Tout Effacer'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quick Tips Modal */}
      {showQuickTips && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4">
          <div className="bg-slate-900 rounded-2xl max-w-xl w-full border-2 border-blue-500/30 shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Zap className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-bold text-white">
                  {language === 'en' ? 'Quick Tips' : 'Conseils Rapides'}
                </h2>
              </div>
              <button
                onClick={() => setShowQuickTips(false)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {[
                {
                  icon: "📝",
                  title: language === 'en' ? 'Arabic Script Required' : 'Écriture Arabe Requise',
                  text: language === 'en' 
                    ? 'Both names must be entered in Arabic letters for accurate calculation'
                    : 'Les deux noms doivent être en lettres arabes pour un calcul précis'
                },
                {
                  icon: "👩",
                  title: language === 'en' ? 'Mother\'s Name Importance' : 'Importance du Nom de la Mère',
                  text: language === 'en'
                    ? 'The mother\'s name is essential as it represents the soul\'s entry into this world'
                    : 'Le nom de la mère est essentiel car il représente l\'entrée de l\'âme dans ce monde'
                },
                {
                  icon: "💾",
                  title: language === 'en' ? 'Auto-Save Feature' : 'Sauvegarde Automatique',
                  text: language === 'en'
                    ? 'Your calculations are automatically saved for quick access later'
                    : 'Vos calculs sont automatiquement sauvegardés pour un accès rapide'
                },
                {
                  icon: "🔒",
                  title: language === 'en' ? 'Privacy First' : 'Confidentialité d\'Abord',
                  text: language === 'en'
                    ? 'All calculations happen locally in your browser - no data is sent to servers'
                    : 'Tous les calculs se font localement dans votre navigateur - aucune donnée n\'est envoyée'
                }
              ].map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 bg-white/5 rounded-lg">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{tip.title}</h3>
                    <p className="text-sm text-gray-400">{tip.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}



      {/* Simplified Header Section */}
      <div className="text-center space-y-2 max-w-3xl mx-auto pt-2 sm:pt-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
          {t.title}
        </h1>
        
        <p className="text-lg sm:text-xl text-purple-200 font-arabic tracking-wide">
          {t.titleArabic}
        </p>
        
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto px-2">
          {t.subtitle}
        </p>
      </div>

      {/* Progress Indicator - More compact */}
      {!showResults && (
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-400">
                {language === 'en' ? 'Step 1: Enter Names' : 'Étape 1: Entrer les Noms'}
              </span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600" />
            <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10 opacity-50">
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <span className="text-xs sm:text-sm text-gray-500">
                {language === 'en' ? 'Step 2: View Results' : 'Étape 2: Voir Résultats'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content - Form or Results */}
      <div 
        ref={formRef}
        className={`max-w-5xl mx-auto transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
      >
        {!showResults ? (
          <IstikharaForm onCalculate={handleCalculate} />
        ) : calculationResult ? (
          <IstikharaResults 
            result={calculationResult} 
            onReset={handleReset}
          />
        ) : null}
      </div>

      {/* Disclaimer - Compact and after form */}
      {!showResults && (
        <div className="max-w-3xl mx-auto">
          <div className="p-3 sm:p-4 bg-gradient-to-br from-amber-900/40 to-orange-900/30 border-2 border-amber-500/40 rounded-lg sm:rounded-xl shadow-lg">
            <div className="flex items-start gap-2 sm:gap-3">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-amber-100 text-sm sm:text-base mb-1">
                  {t.disclaimer.title}
                </h3>
                <p className="text-amber-200 leading-relaxed text-xs sm:text-sm">
                  {t.disclaimer.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AI Chat Assistant */}
      {calculationResult && (
        <AIChat
          calculationData={{
            personName: calculationResult.personName,
            motherName: calculationResult.motherName,
            combinedTotal: calculationResult.combinedTotal,
            burujProfile: calculationResult.burujProfile,
            repetitionCount: calculationResult.repetitionCount,
          }}
          analysisType="general"
          language={language === 'fr' ? 'ar' : language as 'ar' | 'en'}
        />
      )}

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .font-arabic {
          font-family: 'Amiri', 'Traditional Arabic', serif;
        }
      `}</style>
    </div>
  );
}