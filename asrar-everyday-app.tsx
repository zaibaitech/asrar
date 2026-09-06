'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { Calculator, Book, TrendingUp, Moon, Sun, Info, Sparkles, Flame, Droplet, Wind, Mountain, Star, X, Compass, Heart, ChevronUp, ChevronDown, ChevronRight, HelpCircle, Menu, BookOpen } from 'lucide-react';
import { transliterateLatinToArabic } from './src/lib/text-normalize';
import { HadadSummaryPanel } from './src/components/hadad-summary';
import { IlmHurufPanel } from './src/features/ilm-huruf';
import { CompatibilityPanel } from './src/features/compatibility';
import { IstikharaPanel } from './src/features/istikhara';
import { PlanetOfTheDay, PlanetaryHourCard, PlanetTransitCard } from './src/components/planetary';
import { useRamadanChallenges } from './src/features/ramadanChallenges';
import { useCommunityDhikr } from './src/features/ramadanChallenges/communityDhikrService';
import { analyzePatterns } from './src/features/ilm-huruf/patternRecognition';
import { generateWafqAnalysis } from './src/features/ilm-huruf/wafqGenerator';
import { calculateOptimalTimingWindows } from './src/features/ilm-huruf/talismanTiming';
import { OnboardingTutorial } from './src/components/OnboardingTutorial';
import { MobileMenu } from './src/components/MobileMenu';
import { MobileBottomNav } from './src/components/MobileBottomNav';
import { UserMenu } from './src/components/UserMenu';
import LanguageToggle from './src/components/LanguageToggle';
import { useLanguage } from './src/contexts/LanguageContext';
import type { ElementType } from './src/components/hadad-summary/types';
import { AbjadSystemSelector } from './src/components/AbjadSystemSelector';
import AsrarLogo from './src/components/AsrarLogo';
import { useAuth } from './src/contexts/AuthContext';
import { CalculatorDisclaimerBanner } from './src/components/CalculatorDisclaimerBanner';
import { GetTheAppBanner } from './src/components/GetTheAppBanner';
import { DailyReflectionCard } from './src/components/DailyReflectionCard';
import { CalculatorScreen } from './src/features/calculator/CalculatorScreen';

// ============================================================================
// DOMAIN RULES & CORE DATA
// ============================================================================

// ABJAD and LETTER_ELEMENTS are now imported from hadad-core
// ElementType is imported from types.ts

// Arabic planet names for display
const ARABIC_PLANET_NAMES: Record<string, string> = {
  'Mars': 'المريخ',      // al-Mirrīkh
  'Moon': 'القمر',       // al-Qamar
  'Mercury': 'عطارد',    // ʿUṭārid
  'Saturn': 'زحل'        // Zuḥal
};

const ELEMENT_INFO = {
  Fire: { icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10', label: 'Fire 🔥', quality: 'Transformative, Initiating' },
  Water: { icon: Droplet, color: 'text-blue-500', bg: 'bg-blue-500/10', label: 'Water 💧', quality: 'Flowing, Adaptive' },
  Air: { icon: Wind, color: 'text-cyan-500', bg: 'bg-cyan-500/10', label: 'Air 🌬', quality: 'Intellectual, Communicative' },
  Earth: { icon: Mountain, color: 'text-emerald-500', bg: 'bg-emerald-500/10', label: 'Earth 🌍', quality: 'Grounding, Stable' }
};

const SACRED_NUMBERS = [
  { num: 7, significance: 'Seven heavens, seven days of creation' },
  { num: 12, significance: 'Twelve Imams, twelve months' },
  { num: 19, significance: 'Numerical miracle of the Quran' },
  { num: 28, significance: 'Arabic alphabet letters' },
  { num: 40, significance: 'Days of spiritual significance' },
  { num: 70, significance: 'Surah Yā-Sīn (يس)' },
  { num: 99, significance: 'Asmā\' al-Ḥusnā (Beautiful Names)' },
  { num: 114, significance: 'Surahs in the Quran' },
  { num: 313, significance: 'Companions at Badr' },
  { num: 786, significance: 'Bismillah value (short form)' },
  { num: 1001, significance: 'Arabian Nights tales' }
];

const ELEMENT_SUGGESTIONS = {
  Fire: {
    verses: [
      { ref: '94:6', text: 'Indeed, with hardship comes ease', context: 'Patience through transformation' },
      { ref: '21:69', text: 'We said: O fire, be coolness and peace', context: 'Divine protection' },
      { ref: '55:14', text: 'Created man from clay like pottery', context: 'Creation through fire' }
    ],
    names: [
      { arabic: 'يَا فَتَّاح', transliteration: 'Yā Fattāḥ', meaning: 'The Opener', counts: [33, 66, 99] },
      { arabic: 'يَا قَوِيّ', transliteration: 'Yā Qawiyy', meaning: 'The Strong', counts: [11, 33, 111] },
      { arabic: 'يَا لَطِيف', transliteration: 'Yā Laṭīf', meaning: 'The Subtle', counts: [129, 300] }
    ],
    affirmation: 'I embrace transformation with wisdom and patience',
    times: ['Sunrise', 'Noon']
  },
  Water: {
    verses: [
      { ref: '21:30', text: 'We made every living thing from water', context: 'Source of life' },
      { ref: '25:48', text: 'We send the winds as glad tidings', context: 'Purification and renewal' },
      { ref: '67:30', text: 'If your water were to sink away', context: 'Divine provision' }
    ],
    names: [
      { arabic: 'يَا رَحِيم', transliteration: 'Yā Raḥīm', meaning: 'The Merciful', counts: [47, 100, 258] },
      { arabic: 'يَا حَلِيم', transliteration: 'Yā Ḥalīm', meaning: 'The Forbearing', counts: [88, 100] },
      { arabic: 'يَا سَلَام', transliteration: 'Yā Salām', meaning: 'The Source of Peace', counts: [131, 300] }
    ],
    affirmation: 'I flow with grace and adapt with compassion',
    times: ['After sunset', 'Before sleep']
  },
  Air: {
    verses: [
      { ref: '2:164', text: 'The winds that blow, the clouds between sky and earth', context: 'Divine signs' },
      { ref: '15:22', text: 'We send the winds to fertilize', context: 'Communication and connection' },
      { ref: '30:48', text: 'He sends the winds as bearers of good news', context: 'Messages and guidance' }
    ],
    names: [
      { arabic: 'يَا عَلِيم', transliteration: 'Yā ʿAlīm', meaning: 'The All-Knowing', counts: [150, 300] },
      { arabic: 'يَا حَكِيم', transliteration: 'Yā Ḥakīm', meaning: 'The Wise', counts: [78, 100] },
      { arabic: 'يَا خَبِير', transliteration: 'Yā Khabīr', meaning: 'The Aware', counts: [812, 1000] }
    ],
    affirmation: 'I seek knowledge with clarity and share wisdom freely',
    times: ['Dawn', 'Mid-morning']
  },
  Earth: {
    verses: [
      { ref: '55:10', text: 'And the earth He has laid for all beings', context: 'Foundation and sustenance' },
      { ref: '20:53', text: 'Who made the earth a resting place', context: 'Stability and grounding' },
      { ref: '15:19', text: 'The earth We have spread out', context: 'Divine provision' }
    ],
    names: [
      { arabic: 'يَا صَبُور', transliteration: 'Yā Ṣabūr', meaning: 'The Patient', counts: [298, 500] },
      { arabic: 'يَا مَتِين', transliteration: 'Yā Matīn', meaning: 'The Firm', counts: [500, 1000] },
      { arabic: 'يَا قَيُّوم', transliteration: 'Yā Qayyūm', meaning: 'The Sustainer', counts: [156, 300] }
    ],
    affirmation: 'I remain grounded, patient, and steadfast in my path',
    times: ['Afternoon', 'Evening']
  }
};

function SuggestionSection({ element }: { element: ElementType }) {
  const { t } = useLanguage();
  const suggestions = ELEMENT_SUGGESTIONS[element];
  const info = ELEMENT_INFO[element];
  
  return (
    <div className="space-y-6">
      <div className={`rounded-xl p-6 ${info.bg} border border-current/20`}>
        <h3 className={`text-xl font-bold ${info.color} mb-2 flex items-center gap-2`}>
          <info.icon className="w-6 h-6" />
          {info.label} Element Guidance
        </h3>
        <p className="text-sm opacity-80 mb-4">{info.quality}</p>
        <p className="italic text-lg">&ldquo;{suggestions.affirmation}&rdquo;</p>
        <p className="text-xs mt-2 opacity-60">{t.dailyReflection.optimalReflectionTimes}: {suggestions.times.join(', ')}</p>
      </div>
      
      <div>
        <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">{t.guidance.relatedQuranicVerses}</h4>
        <div className="space-y-3">
          {suggestions.verses.map((verse, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mb-1">{verse.ref}</div>
              <div className="text-sm mb-1">{verse.text}</div>
              <div className="text-xs text-slate-600 dark:text-slate-400">{verse.context}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">{t.guidance.divineNames}</h4>
        <div className="space-y-3">
          {suggestions.names.map((name, i) => (
            <div key={i} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-lg font-arabic" dir="rtl">{name.arabic}</span>
                <span className="text-xs text-slate-500">{name.transliteration}</span>
              </div>
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">{name.meaning}</div>
              <div className="text-xs text-slate-500">{t.dailyReflection.suggestedCounts}: {name.counts.join(', ')}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function getDailyReflection() {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  
  const allVerses = Object.values(ELEMENT_SUGGESTIONS).flatMap(s => s.verses);
  const allNames = Object.values(ELEMENT_SUGGESTIONS).flatMap(s => s.names);
  
  const verseIndex = dayOfYear % allVerses.length;
  const nameIndex = dayOfYear % allNames.length;
  
  return {
    verse: allVerses[verseIndex],
    name: allNames[nameIndex],
    date: today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  };
}

// ============================================================================
// MAIN APP
// ============================================================================

export default function AsrarEveryday() {
  const { t, language } = useLanguage(); // Get translations and current language
  
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [viewMode, setViewMode] = useState<'planetary' | 'calculator' | 'guidance' | 'advanced'>('planetary');
  const [showCompatibility, setShowCompatibility] = useState(false);

  // Daily Reflection State - initialize to true (collapsed by default), set from localStorage in useEffect
  const [isDailyReflectionCollapsed, setIsDailyReflectionCollapsed] = useState(true);

  // Set mounted on client side only
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load daily reflection preference from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check for deep-link - auto-expand if user came from shared link
      const urlParams = new URLSearchParams(window.location.search);
      const hasDeepLink = urlParams.get('challenge') !== null;
      
      if (hasDeepLink) {
        // Force expand to show the challenge
        setIsDailyReflectionCollapsed(false);
        return;
      }
      
      const stored = localStorage.getItem('dailyReflectionCollapsed');
      if (stored) {
        setIsDailyReflectionCollapsed(JSON.parse(stored));
      }
    }
  }, []);
  
  // Handle daily reflection collapse with localStorage
  const handleToggleDailyReflection = () => {
    setIsDailyReflectionCollapsed((prev: boolean) => {
      const newValue = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('dailyReflectionCollapsed', JSON.stringify(newValue));
      }
      return newValue;
    });
  };

  // Onboarding Tutorial State
  const [showOnboarding, setShowOnboarding] = useState(false);

  // Mobile Menu State
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Tracks the "Get the App" banner's actual rendered visibility so page content
  // can reserve bottom padding for it instead of being covered when scrolled to the end.
  const [isAppBannerVisible, setIsAppBannerVisible] = useState(false);

  // Initialize onboarding on mount and ensure menu is closed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure mobile menu starts closed
      setShowMobileMenu(false);
      
      // Check for deep-link parameters - skip onboarding if user came from shared link
      const urlParams = new URLSearchParams(window.location.search);
      const hasDeepLink = urlParams.get('challenge') !== null;
      
      const hasSeenOnboarding = localStorage.getItem('hasSeenOnboarding');
      if (!hasSeenOnboarding && !hasDeepLink) {
        // Small delay for smoother UX
        const timer = setTimeout(() => setShowOnboarding(true), 500);
        return () => clearTimeout(timer);
      }
      
      // If user came via deep-link, mark onboarding as seen
      if (hasDeepLink && !hasSeenOnboarding) {
        localStorage.setItem('hasSeenOnboarding', 'true');
      }
    }
  }, []);

  // Handle ESC key to close mobile menu and lock body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMobileMenu(false);
      }
    };

    // Lock body scroll when menu is open
    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
      return () => {
        window.removeEventListener('keydown', handleEscape);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showMobileMenu]);
  
  
  // Prevent hydration mismatch by showing loading state until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <AsrarLogo size={80} variant="icon" element="aether" animate={true} />
          </div>
          <p className="text-xl font-semibold text-slate-300">Loading Asrār...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen bg-navy transition-colors">
        {/* Header */}
        <header className="border-b border-white/10 bg-navy/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
            {/* Mobile Header (< 768px) */}
            <div className="flex md:hidden items-center justify-between gap-1">
              {/* Logo & Title */}
              <div className="flex items-center gap-1.5 flex-1 min-w-0">
                <AsrarLogo size={32} variant="icon" element="aether" animate={true} />
                <div className="min-w-0">
                  <h1 className="text-base font-bold text-gold truncate">Asrār</h1>
                  <p className="text-[10px] text-slate-400 truncate hidden xs:block">ʿIlm al-Ḥurūf</p>
                </div>
              </div>

              {/* Mobile Controls */}
              <div className="flex items-center gap-1 flex-shrink-0">
                {/* User Menu */}
                <UserMenu />

                {/* Language Toggle */}
                <LanguageToggle />

                {/* Hamburger Menu */}
                <button
                  onClick={() => setShowMobileMenu(true)}
                  className="flex md:hidden p-2 rounded-lg bg-navy-card hover:bg-white/10 transition-colors min-h-[40px] touch-manipulation"
                  aria-label="Open menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Tablet+ Header (>= 768px) */}
            <div className="hidden md:flex items-center justify-between">
              {/* Logo & Title */}
              <div className="flex items-center gap-3">
                <AsrarLogo size={48} variant="icon" element="aether" animate={true} />
                <div>
                  <h1 className="text-2xl font-bold text-gold">Asrār</h1>
                  <p className="text-xs text-slate-400">ʿIlm al-Ḥurūf & ʿIlm al-ʿAdad Explorer</p>
                </div>
              </div>

              {/* Abjad System Selector */}
              <div className="flex-shrink-0">
                <AbjadSystemSelector compact={true} />
              </div>

              {/* Desktop Controls */}
              <div className="flex items-center gap-2">
                {/* User Menu */}
                <UserMenu />

                {/* Help Button */}
                <button
                  onClick={() => setShowOnboarding(true)}
                  className="p-2 rounded-lg bg-navy-card hover:bg-white/10 transition-colors hidden lg:flex"
                  title="Help & Tutorial"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>

                {/* Language Toggle */}
                <LanguageToggle />
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="w-full mx-auto px-3 sm:px-4 py-2 sm:py-8 pb-24 md:pb-8">
          <div className="max-w-6xl mx-auto">
            {showDisclaimer && <CalculatorDisclaimerBanner onDismiss={() => setShowDisclaimer(false)} />}

          {/* View Mode Tabs — desktop/tablet only; mobile uses the fixed MobileBottomNav instead */}
          <div id="app-main-tabs" className="hidden md:block md:mb-8 overflow-x-auto scroll-mt-4">
            <div className="bg-navy-card rounded-xl shadow-lg border border-white/10 p-1.5 sm:p-2 inline-flex gap-1.5 sm:gap-2 min-w-full sm:min-w-0">
              <button
                onClick={() => setViewMode('planetary')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  viewMode === 'planetary'
                    ? 'bg-gold text-navy shadow-lg'
                    : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                <Moon className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.nav.planetary}</span>
                <span className="sm:hidden">ʿIlm Nujūm</span>
              </button>
              {/* Life Guidance — dev only */}
              {process.env.NODE_ENV === 'development' && (
                <button
                  onClick={() => setViewMode('guidance')}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                    viewMode === 'guidance'
                      ? 'bg-gold text-navy shadow-lg'
                      : 'text-slate-400 hover:bg-white/5'
                  }`}
                >
                  <Compass className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">{t.nav.guidance}</span>
                  <span className="sm:hidden">{t.nav.guidance}</span>
                </button>
              )}
              {/* Who Am I tab */}
              <button
                onClick={() => setViewMode('advanced')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  viewMode === 'advanced'
                    ? 'bg-gold text-navy shadow-lg'
                    : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                <Compass className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.nav.advanced}</span>
                <span className="sm:hidden">{t.nav.advanced}</span>
              </button>
              {/* Best Dates (Ikhtiyārāt) tab */}
              <Link
                href="/ikhtiyarat"
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base text-slate-400 hover:bg-white/5 inline-flex items-center"
              >
                <Star className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{language === 'fr' ? 'Meilleures Dates' : 'Best Dates'}</span>
                <span className="sm:hidden">{language === 'fr' ? 'Dates' : 'Dates'}</span>
              </Link>
              {/* Compatibility tab */}
              <button
                onClick={() => setShowCompatibility(true)}
                className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base text-slate-400 hover:bg-white/5 inline-flex items-center"
              >
                <Heart className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span>{language === 'fr' ? 'Compatibilité' : 'Compatibility'}</span>
              </button>
              <button
                onClick={() => setViewMode('calculator')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  viewMode === 'calculator'
                    ? 'bg-gold text-navy shadow-lg'
                    : 'text-slate-400 hover:bg-white/5'
                }`}
              >
                <Calculator className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.calculator.title}</span>
                <span className="sm:hidden">{t.common.calculate}</span>
              </button>
            </div>
          </div>
          
          {viewMode === 'planetary' ? (
            <div className="space-y-3 sm:space-y-6">
              {/* Today's zikr progress leads the home tab, instead of floating above every tab */}
              <DailyReflectionCard
                isCollapsed={isDailyReflectionCollapsed}
                onToggleCollapse={handleToggleDailyReflection}
              />
              <div className="bg-navy-card rounded-xl p-3 md:p-6 shadow-md border border-white/5">
                <div className="text-[11px] font-semibold uppercase tracking-wide text-gold/80 mb-1">
                  {language === 'fr' ? "Aujourd'hui" : 'Today'}
                </div>
                <h3 className="text-base md:text-xl font-bold mb-0.5 sm:mb-2 text-gold flex items-center gap-2">
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                  {language === 'en' ? 'ʿIlm al-Nujūm – Planetary Alignment' : language === 'fr' ? 'ʿIlm al-Nujūm – Alignement Planétaire' : 'علم النجوم'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-6 hidden sm:block">
                  {language === 'fr'
                    ? 'Aperçus en temps réel basés sur la science céleste islamique traditionnelle et les heures planétaires chaldéennes.'
                    : 'Real-time insights based on traditional Islamic celestial science and Chaldean planetary hours.'}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                  <div className="flex flex-col gap-2">
                    <PlanetaryHourCard language={language} />
                    <Link href="/planetary-hours" className="self-end text-xs font-semibold text-gold hover:underline flex items-center gap-1">
                      {language === 'fr' ? 'Guide complet →' : 'Full Guide →'}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-2">
                    <PlanetOfTheDay language={language} />
                    <Link href="/planet-of-the-day" className="self-end text-xs font-semibold text-gold hover:underline flex items-center gap-1">
                      {language === 'fr' ? 'Guide complet →' : 'Full Guide →'}
                    </Link>
                  </div>
                </div>
                <div className="mt-4 flex flex-col gap-2">
                  <PlanetTransitCard language={language} onNavigate={() => {}} />
                  <Link href="/planet-transit" className="self-end text-xs font-semibold text-gold hover:underline flex items-center gap-1">
                    {language === 'fr' ? 'Guide complet →' : 'Full Guide →'}
                  </Link>
                </div>
              </div>
            </div>
          ) : viewMode === 'guidance' ? (
            <IlmHurufPanel />
          ) : viewMode === 'advanced' ? (
            <IstikharaPanel />
          ) : (
          <CalculatorScreen appLanguage={language} />
          )}
          </div>
        </main>
        
        {/* Modals */}
        {showCompatibility && (
          <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
            <CompatibilityPanel onBack={() => setShowCompatibility(false)} />
          </div>
        )}

        {/* Onboarding Tutorial */}
        <OnboardingTutorial 
          isOpen={showOnboarding}
          onClose={() => setShowOnboarding(false)}
        />

        {/* Mobile Menu - Clean & Minimal */}
        {showMobileMenu && (
          <MobileMenu
            isOpen={showMobileMenu}
            onClose={() => setShowMobileMenu(false)}
            onShowTutorial={() => setShowOnboarding(true)}
            onSelectGuidance={process.env.NODE_ENV === 'development' ? () => setViewMode('guidance') : undefined}
          />
        )}

        {/* Mobile Bottom Nav - fixed, always-labeled primary destinations */}
        <MobileBottomNav
          language={language}
          activeTab={
            showCompatibility
              ? 'compatibility'
              : viewMode === 'planetary' || viewMode === 'calculator' || viewMode === 'advanced'
                ? viewMode
                : null
          }
          onSelectPlanetary={() => setViewMode('planetary')}
          onOpenCompatibility={() => setShowCompatibility(true)}
          onSelectCalculator={() => setViewMode('calculator')}
          onSelectAdvanced={() => setViewMode('advanced')}
          onOpenMore={() => setShowMobileMenu(true)}
        />

        {/* Footer - Professional */}
        <footer
          className={`border-t border-white/10 bg-navy mt-12 ${isAppBannerVisible ? 'pb-44 md:pb-24' : 'pb-24 md:pb-0'}`}
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Logo & App Info */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="flex items-center space-x-3">
                  <AsrarLogo size={48} variant="icon" element="aether" animate={true} />
                  <div>
                    <h3 className="text-lg font-bold text-gold">أسرار</h3>
                    <p className="text-xs text-slate-400">Asrār</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left max-w-xs">
                  {language === 'fr' 
                    ? 'Une plateforme pour explorer la sagesse spirituelle et le timing divin'
                    : 'A platform for spiritual wisdom and divine timing exploration'
                  }
                </p>
              </div>

              {/* Important Notice */}
              <div className="flex flex-col items-center space-y-3">
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                  <svg className="w-5 h-5 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span className="text-xs font-semibold text-amber-800 dark:text-amber-300">
                    {language === 'fr' ? 'Avis important' : 'Important Notice'}
                  </span>
                </div>
                <p className="text-xs text-center text-slate-600 dark:text-slate-400 max-w-sm">
                  {language === 'fr'
                    ? 'À des fins éducatives et culturelles uniquement • Consultez toujours des érudits qualifiés pour des conseils religieux'
                    : 'For educational and cultural exploration only • Always consult qualified scholars for religious guidance'
                  }
                </p>
              </div>

              {/* Powered By */}
              <div className="flex flex-col items-center md:items-end space-y-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {language === 'fr' ? 'Propulsé par' : 'Powered by'}
                </p>
                <a 
                  href="https://zaibaitech.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center md:items-end space-y-1 transition-transform hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gold">
                      Zaibai Tech
                    </span>
                    <svg className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-400 group-hover:text-gold transition-colors">
                    zaibaitech.com
                  </span>
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="flex justify-center items-center">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  © {new Date().getFullYear()} {language === 'fr' ? 'Tous droits réservés' : 'All rights reserved'}
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <GetTheAppBanner
        suppressed={showCompatibility || showOnboarding || showMobileMenu}
        onVisibleChange={setIsAppBannerVisible}
      />
    </div>
  );
}