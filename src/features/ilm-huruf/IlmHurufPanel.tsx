'use client';

import React, { useState, useEffect, useRef } from 'react';
import { 
  Sun, Moon, Star, Heart, BookOpen, Lightbulb, 
  Calendar, Clock, Compass, Users, Sparkles,
  TrendingUp, Target, MessageCircle, Home, Flame, Keyboard, ExternalLink,
  Plus, Info, X, ArrowUp, Circle, Minus, Zap, CheckCircle2, User, AlertCircle, Palette
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useProfile } from '../../hooks/useProfile';
import { BalanceMeter } from '../../components/BalanceMeter';
import type { ElementType } from '../../components/BalanceMeter';
import { HarmonyTooltip, type HarmonyBreakdown } from '../../components/HarmonyTooltip';
import { InfoTooltip } from '../../components/InfoTooltip';
import { GlossaryModal } from '../../components/GlossaryModal';
import { CalculationBreakdownModal } from '../../components/CalculationBreakdownModal';
import { ActNowButtons } from '../../components/ActNowButtons';
import { DailyColorGuidanceCard } from '../../components/DailyColorGuidanceCard';
import NameAutocomplete from '../../components/NameAutocomplete';
import { TemperamentDisplay } from '../../components/TemperamentDisplay';
import { DivineTiming } from '../../components/divine-timing';
// Planetary components removed - now in their own tab
import AIAnalysis from '../../components/AIAnalysis';
import AIChat from '../../components/AIChat';
import {
  analyzeNameDestiny,
  analyzeCompatibility,
  calculateLifePath,
  calculatePersonalYear,
  calculatePlanetaryHour,
  getDailyDhikr,
  SPIRITUAL_STATIONS,
  PLANET_DAYS,
  type Planet,
  calculateUserProfile,
  generateWeeklySummary,
  calculateHarmonyType,
  calculateDominantForce,
  getBalanceTip,
  calculateHarmonyBreakdown,
  type UserProfile,
  type WeeklySummary as WeeklySummaryType,
  type DailyReading,
  type HarmonyType,
  type DominantForce as DominantForceType,
  analyzeMotherName,
  generateInheritanceInsight,
  type MotherAnalysis,
  type GeometryAnalysis,
  type GeometryType,
  GEOMETRY_NAMES,
  GEOMETRY_KEYWORDS,
  getCurrentPlanetaryHour,
  detectAlignment,
  calculateTimeWindow,
  generateActionButtons,
  ELEMENT_GUIDANCE_MAP,
  getElementArabicName,
  calculateDailyColorGuidance,
  type CurrentPlanetaryHour,
  type ElementAlignment,
  type TimeWindow,
  type ActionButton,
  type AlignmentQuality,
  type ElementType2,
  type DailyColorGuidance,
  // New imports for Name Destiny module
  buildDestiny,
  type NameDestinyResult,
  BURUJ,
  ELEMENTS,
  PLANETARY_HOURS,
} from './core';
import { getQuranResonanceMessage } from './quranResonance';
import { fetchQuranVerse, type VerseText } from './quranApi';
import { transliterateLatinToArabic } from '../../lib/text-normalize';
import { ArabicKeyboard } from '../../components/ArabicKeyboard';
import { useAbjad } from '../../contexts/AbjadContext';
import { AbjadSystemSelector } from '../../components/AbjadSystemSelector';
import { analyzeRelationshipCompatibility, getElementFromAbjadTotal } from '../../utils/relationshipCompatibility';
import { analyzeFourLayerCompatibility } from '../../utils/fourLayerCompatibility';
import type { RelationshipCompatibility, FourLayerCompatibility } from '../../types/compatibility';
import { CompatibilityGauge } from '../../components/CompatibilityGauge';
import { EnhancedLifePathView } from '../../components/EnhancedLifePathView';
import EnhancedLifePathDisplay from '../../components/EnhancedLifePathDisplay';
import {
  calculateEnhancedLifePath,
  calculateLifePathNumber,
  calculateSoulUrgeNumber,
  calculatePersonalityNumber,
  calculateDestinyNumber,
  calculateLifeCycle,
  calculatePersonalYear as calculatePersonalYearEnhanced,
  calculatePersonalMonth,
  detectKarmicDebts,
  detectSacredNumbers,
  calculatePinnaclesAndChallenges,
  type EnhancedLifePathResult,
  type LifeCycleAnalysis,
  type PinnacleChallenge
} from '../../utils/enhancedLifePath';
import { CompatibilityLearningCenter } from '../../components/CompatibilityLearningCenter';
import { MethodGuidePanel } from '../../components/MethodGuidePanel';
import { CompatibilityGlossary } from '../../components/CompatibilityGlossary';
import { NameDestinyLearningCenter, LetterGuidePanel, NameDestinyGlossary } from './education';
import { BookMarked, ChevronLeft, ChevronRight, Fingerprint, Eye } from 'lucide-react';

// ============================================================================
// MOTHER'S NAME STRATEGY - TYPE DEFINITIONS
// ============================================================================

// Name Destiny Mode (dual-mode system)
type NameDestinyMode = 'general' | 'personal';

// General Results (name only - not personalized)
interface GeneralNameResults {
  mode: 'general';
  name: string;
  arabicName: string;
  abjadValue: number;
  spiritualRoot: number;
  element: 'fire' | 'air' | 'water' | 'earth';
  burj: string;
  planet: string;
  elementDistribution: Record<'fire' | 'air' | 'water' | 'earth', number>;
  generalCharacteristics: string;
  divineResonance: string;
  colorGuidance: any;
}

// Personal Results (name + mother's name - personalized)
interface PersonalProfileResults {
  mode: 'personal';
  name: string;
  arabicName: string;
  motherName: string;
  arabicMotherName: string;
  combinedValue: number;
  spiritualRoot: number;
  element: 'fire' | 'air' | 'water' | 'earth';
  burj: string;
  planet: string;
  elementDistribution: Record<'fire' | 'air' | 'water' | 'earth', number>;
  personalGuidance: string;
  uniqueBlueprint: string;
  divineResonance: string;
  colorGuidance: any;
  motherInfluence: any;
}

// Union type for Name Destiny results
type NameDestinyResults = GeneralNameResults | PersonalProfileResults;

// ============================================================================
// ELEMENT HARMONY & LETTER CHEMISTRY CONSTANTS
// ============================================================================

// Element harmony scores (0-1 scale)
const ELEMENT_HARMONY: Record<string, Record<string, number>> = {
  fire: { fire: 0.95, air: 0.85, water: 0.45, earth: 0.60 },
  air: { fire: 0.85, air: 0.95, water: 0.70, earth: 0.50 },
  water: { fire: 0.45, air: 0.70, water: 0.95, earth: 0.85 },
  earth: { fire: 0.60, air: 0.50, water: 0.85, earth: 0.95 }
};

// Letter to Element mapping (28 Arabic letters)
// MAGHRIBI SYSTEM - Authentic West/North African tradition (7 letters per element)
const LETTER_ELEMENTS: Record<string, 'fire' | 'air' | 'water' | 'earth'> = {
  // 🔥 Fire (Nār/نار) - Hot & Dry - 7 letters
  'ا': 'fire', 'ه': 'fire', 'ط': 'fire', 'م': 'fire', 'ف': 'fire', 'ش': 'fire', 'ذ': 'fire',
  // 💨 Air (Hawā'/هواء) - Hot & Moist - 7 letters
  'ب': 'air', 'و': 'air', 'ي': 'air', 'ن': 'air', 'ض': 'air', 'ظ': 'air', 'غ': 'air',
  // 💧 Water (Mā'/ماء) - Cold & Moist - 7 letters
  'ج': 'water', 'ز': 'water', 'ك': 'water', 'س': 'water', 'ق': 'water', 'ث': 'water', 'خ': 'water',
  // 🌍 Earth (Turāb/تراب) - Cold & Dry - 7 letters
  'د': 'earth', 'ح': 'earth', 'ل': 'earth', 'ع': 'earth', 'ر': 'earth', 'ص': 'earth', 'ت': 'earth',
  // Special forms
  'ة': 'earth' // Tā' marbūṭa (feminine ending) = same as ت
};

// Helper function to get balance advice key from element pair
function getBalanceAdviceKey(element1: 'fire' | 'air' | 'water' | 'earth', element2: 'fire' | 'air' | 'water' | 'earth'): string {
  const pairs: Record<string, string> = {
    'fire-fire': 'fireFire',
    'fire-air': 'fireAir',
    'air-fire': 'fireAir',
    'fire-water': 'fireWater',
    'water-fire': 'fireWater',
    'fire-earth': 'fireEarth',
    'earth-fire': 'fireEarth',
    'air-air': 'airAir',
    'air-water': 'airWater',
    'water-air': 'airWater',
    'air-earth': 'airEarth',
    'earth-air': 'airEarth',
    'water-water': 'waterWater',
    'water-earth': 'waterEarth',
    'earth-water': 'waterEarth',
    'earth-earth': 'earthEarth'
  };
  return pairs[`${element1}-${element2}`] || 'fireFire';
}

// Helper function to get dhikr effect key
function getDhikrEffectKey(element: 'fire' | 'air' | 'water' | 'earth'): string {
  const keys: Record<string, string> = {
    fire: 'fireEffect',
    air: 'airEffect',
    water: 'waterEffect',
    earth: 'earthEffect'
  };
  return keys[element];
}

// Divine Names for each element (these are proper names, don't translate)
const DHIKR_NAMES: Record<'fire' | 'air' | 'water' | 'earth', { name: string; nameFr: string; nameAr: string }> = {
  fire: { name: 'Yā Laṭīf (يا لطيف)', nameFr: 'Yā Laṭīf (يا لطيف)', nameAr: 'يا لطيف' },
  air: { name: 'Yā Ḥakīm (يا حكيم)', nameFr: 'Yā Ḥakīm (يا حكيم)', nameAr: 'يا حكيم' },
  water: { name: 'Yā Nūr (يا نور)', nameFr: 'Yā Nūr (يا نور)', nameAr: 'يا نور' },
  earth: { name: 'Yā Fattāḥ (يا فتاح)', nameFr: 'Yā Fattāḥ (يا فتاح)', nameAr: 'يا فتاح' }
};

// Helper function to calculate element distribution from Arabic text
function calculateElementDistribution(arabicText: string): Record<'fire' | 'air' | 'water' | 'earth', number> {
  const normalized = arabicText.replace(/[Ù‹ÙŒÙÙŽÙÙÙ‘Ù’\s]/g, '');
  const letters = [...normalized];
  const total = letters.length;
  
  const counts = { fire: 0, air: 0, water: 0, earth: 0 };
  
  letters.forEach(letter => {
    const element = LETTER_ELEMENTS[letter];
    if (element) {
      counts[element]++;
    }
  });
  
  return {
    fire: total > 0 ? Math.round((counts.fire / total) * 100) : 0,
    air: total > 0 ? Math.round((counts.air / total) * 100) : 0,
    water: total > 0 ? Math.round((counts.water / total) * 100) : 0,
    earth: total > 0 ? Math.round((counts.earth / total) * 100) : 0
  };
}

// Helper function to get dominant element
function getDominantElement(distribution: Record<'fire' | 'air' | 'water' | 'earth', number>): 'fire' | 'air' | 'water' | 'earth' {
  let max = 0;
  let dominant: 'fire' | 'air' | 'water' | 'earth' = 'fire';
  
  (Object.entries(distribution) as [typeof dominant, number][]).forEach(([element, percentage]) => {
    if (percentage > max) {
      max = percentage;
      dominant = element;
    }
  });
  
  return dominant;
}

// Helper function to get element icon
function getElementIcon(element: 'fire' | 'air' | 'water' | 'earth'): string {
  const icons = { fire: '🔥', air: '💨', water: '💧', earth: '🌍' };
  return icons[element];
}

// Helper function to get element name in multiple languages
function getElementName(element: 'fire' | 'air' | 'water' | 'earth', lang: 'en' | 'fr' | 'ar'): string {
  const names = {
    fire: { en: 'Fire', fr: 'Feu', ar: 'Ø§Ù„Ù†Ø§Ø±' },
    air: { en: 'Air', fr: 'Air', ar: 'Ø§Ù„Ù‡ÙˆØ§Ø¡' },
    water: { en: 'Water', fr: 'Eau', ar: 'Ø§Ù„Ù…Ø§Ø¡' },
    earth: { en: 'Earth', fr: 'Terre', ar: 'Ø§Ù„Ø£Ø±Ø¶' }
  };
  return names[element][lang];
}

/**
 * Get current day's element based on planetary day assignment
 * Sun=Fire, Mon=Water, Tue=Fire, Wed=Air, Thu=Water, Fri=Air, Sat=Earth
 * Based on classical planetary day rulership
 */
function getCurrentDayElement(): ElementType {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0=Sunday, 1=Monday, etc.
  const dayElements: ElementType[] = ['Fire', 'Water', 'Fire', 'Air', 'Water', 'Air', 'Earth'];
  return dayElements[dayOfWeek];
}

const PLANET_ICONS: Record<Planet, typeof Sun> = {
  Sun, Moon,
  Mercury: MessageCircle,
  Venus: Heart,
  Mars: Flame,
  Jupiter: Star,
  Saturn: Compass
};

const PLANET_COLORS: Record<Planet, string> = {
  Sun: 'text-yellow-500',
  Moon: 'text-blue-300',
  Mercury: 'text-purple-500',
  Venus: 'text-pink-500',
  Mars: 'text-red-500',
  Jupiter: 'text-indigo-500',
  Saturn: 'text-slate-600'
};

const PLANET_ICONS_EMOJI: Record<Planet, string> = {
  Sun: '˜€ï¸',
  Moon: '™',
  Mars: '™‚ï¸',
  Mercury: '˜¿ï¸',
  Jupiter: '™ƒ',
  Venus: '™€ï¸',
  Saturn: '™„'
};

export function IlmHurufPanel() {
  const { t, language } = useLanguage();
  const { abjad } = useAbjad(); // Get the current Abjad system
  const { profile } = useProfile(); // Get user profile for auto-fill
  
  const [mode, setMode] = useState<'destiny' | 'compatibility' | 'timing' | 'life-path'>('destiny');
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [latinInput, setLatinInput] = useState('');
  const [latinInput2, setLatinInput2] = useState('');
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showKeyboard2, setShowKeyboard2] = useState(false);
  const [translitConfidence, setTranslitConfidence] = useState<number | null>(null);
  const [translitWarnings, setTranslitWarnings] = useState<string[]>([]);
  const [birthDate, setBirthDate] = useState('');
  const [results, setResults] = useState<any>(null);
  
  // Mother's name feature (Um Ḥadad)
  const [motherName, setMotherName] = useState('');
  const [motherLatinInput, setMotherLatinInput] = useState('');
  const [showMotherNameSection, setShowMotherNameSection] = useState(false);
  const [showMotherKeyboard, setShowMotherKeyboard] = useState(false);

  // Auto-fill toggle - allow users to disable for calculating others
  const [enableAutofill, setEnableAutofill] = useState(true);

  // Auto-fill from user profile
  useEffect(() => {
    if (profile && enableAutofill) {
      // Auto-fill user's name if empty
      if (!latinInput && profile.full_name) {
        setLatinInput(profile.full_name);
        setName(profile.full_name); // Set both latin and arabic name
      }
      
      // Auto-fill mother's name if empty
      if (!motherLatinInput && profile.mother_name) {
        setMotherLatinInput(profile.mother_name);
        setMotherName(profile.mother_name);
      }
      
      // Auto-fill birth date if empty
      if (!birthDate && profile.date_of_birth) {
        setBirthDate(profile.date_of_birth);
      }
    }
  }, [profile, enableAutofill]);

  // Mother's Name Strategy - Name Destiny dual-mode system
  const [nameDestinyMode, setNameDestinyMode] = useState<NameDestinyMode>('personal'); // Default to Personal (recommended)

  // Four-layer compatibility: Mother's names for both people
  const [motherName2, setMotherName2] = useState('');
  const [motherLatinInput2, setMotherLatinInput2] = useState('');
  const [showMotherNameSection1, setShowMotherNameSection1] = useState(false);
  const [showMotherNameSection2, setShowMotherNameSection2] = useState(false);
  const [showMotherKeyboard1, setShowMotherKeyboard1] = useState(false);
  const [showMotherKeyboard2Compat, setShowMotherKeyboard2Compat] = useState(false);
  const [compatibilityAnalysisMode, setCompatibilityAnalysisMode] = useState<'quick' | 'complete'>('quick');

  // Modal states for educational features
  const [showCalculationModal, setShowCalculationModal] = useState(false);
  const [showGlossaryModal, setShowGlossaryModal] = useState(false);

  // Refs for auto-scroll and animations
  const formSectionRef = useRef<HTMLDivElement>(null);
  const resultsSectionRef = useRef<HTMLDivElement>(null);
  const [highlightInput, setHighlightInput] = useState(false);

  // Clear results when mode changes to prevent showing stale data
  useEffect(() => {
    setResults(null);
  }, [mode]);

  // Auto-upgrade from General to Personal mode when mother's name is entered
  useEffect(() => {
    if (mode === 'destiny' && nameDestinyMode === 'general' && motherName.trim()) {
      setNameDestinyMode('personal');
    }
  }, [mode, motherName, nameDestinyMode]);

  // Clear mother's name when switching from Personal to General mode
  useEffect(() => {
    if (mode === 'destiny' && nameDestinyMode === 'general' && motherName.trim()) {
      // Don't auto-clear if they manually entered it - only prevent in general mode
    }
  }, [nameDestinyMode]);

  // Handle mode change with auto-scroll and highlight animation
  const handleModeChange = (newMode: 'destiny' | 'compatibility' | 'timing' | 'life-path') => {
    setMode(newMode);
    setHighlightInput(true);
    
    // Trigger smooth scroll to input section after brief delay
    setTimeout(() => {
      formSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }, 100);
    
    // Remove highlight animation after it completes
    setTimeout(() => {
      setHighlightInput(false);
    }, 2000);
  };

  const handleLatinInput = (value: string, isFirstName: boolean = true) => {
    if (isFirstName) {
      setLatinInput(value);
    } else {
      setLatinInput2(value);
    }
    
    if (value.trim()) {
      const result = transliterateLatinToArabic(value);
      if (isFirstName) {
        setName(result.primary);
        setTranslitConfidence(result.confidence);
        setTranslitWarnings(result.warnings);
      } else {
        setName2(result.primary);
      }
    } else {
      if (isFirstName) {
        setName('');
        setTranslitConfidence(null);
        setTranslitWarnings([]);
      } else {
        setName2('');
      }
    }
  };

  const handleKeyboardPress = (char: string, isFirstName: boolean = true) => {
    const currentName = isFirstName ? name : name2;
    
    if (char === 'Œ«') {
      // Backspace
      const newValue = currentName.slice(0, -1);
      if (isFirstName) {
        setName(newValue);
        setLatinInput(''); // Clear latin when typing Arabic
      } else {
        setName2(newValue);
        setLatinInput2('');
      }
    } else if (char === 'Žµ') {
      // Space
      if (isFirstName) {
        setName(currentName + ' ');
      } else {
        setName2(currentName + ' ');
      }
    } else {
      // Regular character
      if (isFirstName) {
        setName(currentName + char);
        setLatinInput(''); // Clear latin when typing Arabic
      } else {
        setName2(currentName + char);
        setLatinInput2('');
      }
    }
  };

  const handleMotherLatinInput = (value: string) => {
    setMotherLatinInput(value);
    if (value.trim()) {
      const result = transliterateLatinToArabic(value);
      setMotherName(result.primary);
    } else {
      setMotherName('');
    }
  };

  const handleMotherKeyboardPress = (char: string) => {
    if (char === 'Œ«') {
      // Backspace
      setMotherName(motherName.slice(0, -1));
      setMotherLatinInput('');
    } else if (char === 'Žµ') {
      // Space
      setMotherName(motherName + ' ');
    } else {
      // Regular character
      setMotherName(motherName + char);
      setMotherLatinInput('');
    }
  };

  // Keyboard handlers for compatibility mode mother's names
  const handleMotherKeyboardPress1 = (char: string) => {
    if (char === 'Œ«') {
      setMotherName(motherName.slice(0, -1));
      setMotherLatinInput('');
    } else if (char === 'Žµ') {
      setMotherName(motherName + ' ');
    } else {
      setMotherName(motherName + char);
      setMotherLatinInput('');
    }
  };

  const handleMotherKeyboardPress2 = (char: string) => {
    if (char === 'Œ«') {
      setMotherName2(motherName2.slice(0, -1));
      setMotherLatinInput2('');
    } else if (char === 'Žµ') {
      setMotherName2(motherName2 + ' ');
    } else {
      setMotherName2(motherName2 + char);
      setMotherLatinInput2('');
    }
  };

  const handleAnalyze = () => {
    try {
      // VALIDATION: Name Destiny Personal mode requires mother's name
      if (mode === 'destiny' && nameDestinyMode === 'personal' && !motherName.trim()) {
        setResults({
          error: true,
          message: language === 'fr' 
            ? "Le nom de la mère est requis pour la lecture personnelle. Passez en mode Général ou ajoutez le nom de votre mère."
            : "Mother's name is required for Personal reading. Switch to General mode or add your mother's name."
        });
        return;
      }

      // VALIDATION: Life Path requires mother's name
      if (mode === 'life-path' && !motherName.trim()) {
        setResults({
          error: true,
          message: t.mothersNameStrategy.lifePath.validationError
        });
        return;
      }

      // VALIDATION: Divine Timing does NOT require mother's name
      // (Element is calculated from personal name only)
      
      if (mode === 'destiny' && name) {
        const result: any = analyzeNameDestiny(name, abjad);
        
        // Add mother's name analysis if provided
        if (motherName.trim()) {
          try {
            const motherAnalysis = analyzeMotherName(motherName, abjad);
            result.motherAnalysis = motherAnalysis;
          } catch (error) {
            console.error('Error analyzing mother\'s name:', error);
            // Continue without mother analysis if it fails
          }
        }
        
        // ENHANCEMENT: Add complete Name Destiny calculation with mother's name
        try {
          const nameDestiny = buildDestiny(name, motherName || undefined, abjad);
          result.nameDestiny = nameDestiny;
        } catch (error) {
          console.error('Error building name destiny:', error);
          // Continue without name destiny enhancement if it fails
        }
        
        setResults(result);
        
        // Scroll to results section after state update
        setTimeout(() => {
          resultsSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }, 100);
      } else if (mode === 'compatibility' && name && name2) {
        // Calculate Abjad totals
        const calculateAbjadTotal = (text: string, abjadMap: Record<string, number>): number => {
          const normalized = text.replace(/[Ù‹ÙŒÙÙŽÙÙÙ‘Ù’\s]/g, '');
          return [...normalized].reduce((sum, char) => sum + (abjadMap[char] || 0), 0);
        };
        
        const person1Total = calculateAbjadTotal(name, abjad);
        const person2Total = calculateAbjadTotal(name2, abjad);
        
        // Determine elements
        const person1Element = getElementFromAbjadTotal(person1Total);
        const person2Element = getElementFromAbjadTotal(person2Total);
        
        // Use traditional three-method analysis (Quick Analysis)
        const result = analyzeRelationshipCompatibility(
          name,
          name,
          person1Total,
          person1Element,
          name2,
          name2,
          person2Total,
          person2Element
        );
        setResults(result);
        
        // Scroll to results section after state update
        setTimeout(() => {
          resultsSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }, 100);
      } else if (mode === 'life-path' && birthDate && name) {
        const result = calculateEnhancedLifePath(
          name, 
          new Date(birthDate),
          undefined, // fatherName (not used yet)
          motherName || undefined // Pass mother's name if provided
        );
        setResults(result);
        
        // Scroll to results section after state update
        setTimeout(() => {
          resultsSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }, 100);
      } else if (mode === 'timing' && birthDate && name) {
        // Calculate user's element from their name for personalized timing
        // Use simple Abjad calculation to avoid complex dependencies
        const calculateAbjadTotal = (text: string, abjadMap: Record<string, number>): number => {
          const normalized = text.replace(/[ًٌٍَُِّْ\s]/g, '');
          return [...normalized].reduce((sum, char) => sum + (abjadMap[char] || 0), 0);
        };
        
        const nameTotal = calculateAbjadTotal(name, abjad);
        const userElement = getElementFromAbjadTotal(nameTotal);
        
        const now = new Date();
        const planetaryHour = calculatePlanetaryHour(now);
        const personalYear = calculatePersonalYear(new Date(birthDate), now.getFullYear());
        
        setResults({ 
          planetaryHour, 
          personalYear,
          element: userElement, // User's element for personalization
          name: name,
          total: nameTotal
        });
        
        // Scroll to results section after state update
        setTimeout(() => {
          resultsSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start'
          });
        }, 100);
      }
    } catch (error) {
      console.error('Analysis error:', error);
      setResults({
        error: true,
        message: error instanceof Error ? error.message : (t?.errors?.analysisError || 'Unable to analyze. Please check your input.')
      });
    }
  };

  return (
    <div className="space-y-4 max-w-full overflow-x-hidden">
      {/* Mode Selection Header - Compact for Mobile */}
      <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 md:p-6 shadow-md">
        <h2 className="text-xl md:text-2xl font-bold mb-1 text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-500" />
          {t.ilmHuruf.title}
        </h2>
        <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-4">
          {t.ilmHuruf.subtitle}
        </p>
        
        {/* Mode Selection Grid - Compact 2x2 Mobile Layout */}
        <div className="grid grid-cols-2 gap-2 md:gap-3">
          {/* Destiny Mode */}
          <button
            onClick={() => handleModeChange('destiny')}
            className={`relative group p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all duration-300 transform ${
              mode === 'destiny'
                ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40 scale-[1.02] shadow-lg ring-2 ring-purple-500 ring-offset-1 dark:ring-offset-slate-900'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-purple-400 hover:shadow-md active:scale-95'
            }`}
            aria-pressed={mode === 'destiny'}
          >
            <div className="relative">
              <Target className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 transition-colors ${mode === 'destiny' ? 'text-purple-600' : 'text-purple-500 group-hover:text-purple-600'}`} />
              <div className={`text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 transition-all leading-tight ${mode === 'destiny' ? 'animate-scale-in' : ''}`}>
                {t.ilmHuruf.nameDestiny}
              </div>
              {mode === 'destiny' && (
                <div className="absolute top-0 right-0 animate-scale-in">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-purple-600" />
                </div>
              )}
            </div>
          </button>
          
          {/* Compatibility Mode */}
          <button
            onClick={() => handleModeChange('compatibility')}
            className={`relative group p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all duration-300 transform ${
              mode === 'compatibility'
                ? 'border-pink-500 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/40 dark:to-pink-800/40 scale-[1.02] shadow-lg ring-2 ring-pink-500 ring-offset-1 dark:ring-offset-slate-900'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-pink-400 hover:shadow-md active:scale-95'
            }`}
            aria-pressed={mode === 'compatibility'}
          >
            <div className="relative">
              <Users className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 transition-colors ${mode === 'compatibility' ? 'text-pink-600' : 'text-pink-500 group-hover:text-pink-600'}`} />
              <div className={`text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 transition-all leading-tight ${mode === 'compatibility' ? 'animate-scale-in' : ''}`}>
                {t.ilmHuruf.compatibility}
              </div>
              {mode === 'compatibility' && (
                <div className="absolute top-0 right-0 animate-scale-in">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-pink-600" />
                </div>
              )}
            </div>
          </button>
          
          {/* Life Path Mode */}
          <button
            onClick={() => handleModeChange('life-path')}
            className={`relative group p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all duration-300 transform ${
              mode === 'life-path'
                ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40 scale-[1.02] shadow-lg ring-2 ring-blue-500 ring-offset-1 dark:ring-offset-slate-900'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-blue-400 hover:shadow-md active:scale-95'
            }`}
            aria-pressed={mode === 'life-path'}
          >
            <div className="relative">
              <Compass className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 transition-colors ${mode === 'life-path' ? 'text-blue-600' : 'text-blue-500 group-hover:text-blue-600'}`} />
              <div className={`text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 transition-all leading-tight ${mode === 'life-path' ? 'animate-scale-in' : ''}`}>
                {t.ilmHuruf.lifePath}
              </div>
              {mode === 'life-path' && (
                <div className="absolute top-0 right-0 animate-scale-in">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-blue-600" />
                </div>
              )}
            </div>
          </button>
          
          {/* Divine Timing Mode */}
          <button
            onClick={() => handleModeChange('timing')}
            className={`relative group p-3 md:p-4 rounded-lg md:rounded-xl border-2 transition-all duration-300 transform ${
              mode === 'timing'
                ? 'border-amber-500 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/40 dark:to-amber-800/40 scale-[1.02] shadow-lg ring-2 ring-amber-500 ring-offset-1 dark:ring-offset-slate-900'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-amber-400 hover:shadow-md active:scale-95'
            }`}
            aria-pressed={mode === 'timing'}
          >
            <div className="relative">
              <Clock className={`w-5 h-5 md:w-6 md:h-6 mx-auto mb-1 md:mb-2 transition-colors ${mode === 'timing' ? 'text-amber-600' : 'text-amber-500 group-hover:text-amber-600'}`} />
              <div className={`text-xs md:text-sm font-bold text-slate-900 dark:text-slate-100 transition-all leading-tight ${mode === 'timing' ? 'animate-scale-in' : ''}`}>
                {t.ilmHuruf.divineTiming}
              </div>
              {mode === 'timing' && (
                <div className="absolute top-0 right-0 animate-scale-in">
                  <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-amber-600" />
                </div>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Input Section with Highlight Animation - Compact */}
      <div 
        ref={formSectionRef}
        className={`bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-4 md:p-6 transition-all duration-300 ${
          highlightInput ? 'animate-soft-highlight' : ''
        }`}
      >
        <div className="mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <span className={`inline-block w-2 h-2 rounded-full transition-colors ${
              mode === 'destiny' ? 'bg-purple-500' : 
              mode === 'compatibility' ? 'bg-pink-500' : 
              mode === 'life-path' ? 'bg-blue-500' : 
              'bg-amber-500'
            }`}></span>
            {mode === 'destiny' && t.ilmHuruf.discoverNameDestiny}
            {mode === 'compatibility' && t.ilmHuruf.analyzeTwoSouls}
            {mode === 'life-path' && t.ilmHuruf.calculateLifePath}
            {mode === 'timing' && t.ilmHuruf.currentPlanetaryInfluence}
          </h3>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {mode === 'destiny' && t.ilmHuruf.nameDestinyDesc}
            {mode === 'compatibility' && t.ilmHuruf.compatibilityDesc}
            {mode === 'life-path' && t.ilmHuruf.lifePathDesc}
            {mode === 'timing' && t.ilmHuruf.divineTimingDesc}
          </p>
        </div>
        
        {/* Name Destiny Mode Selector */}
        {mode === 'destiny' && (
          <div className="mb-6 animate-slide-up">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
              {t.mothersNameStrategy.modeSelector.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* General Mode */}
              <button
                onClick={() => setNameDestinyMode('general')}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  nameDestinyMode === 'general'
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                    : 'border-slate-300 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{t.mothersNameStrategy.modeSelector.generalMode.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-white mb-1">
                      {t.mothersNameStrategy.modeSelector.generalMode.title}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {t.mothersNameStrategy.modeSelector.generalMode.description}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                      {t.mothersNameStrategy.modeSelector.generalMode.bestFor}
                    </div>
                  </div>
                </div>
              </button>

              {/* Personal Mode */}
              <button
                onClick={() => setNameDestinyMode('personal')}
                className={`p-4 rounded-lg border-2 transition-all text-left relative ${
                  nameDestinyMode === 'personal'
                    ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                    : 'border-slate-300 dark:border-slate-600 hover:border-purple-300 dark:hover:border-purple-700'
                }`}
              >
                <div className="absolute top-2 right-2 text-xs font-bold text-purple-600 dark:text-purple-400">
                  {t.mothersNameStrategy.modeSelector.personalMode.recommended}
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{t.mothersNameStrategy.modeSelector.personalMode.icon}</span>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-white mb-1">
                      {t.mothersNameStrategy.modeSelector.personalMode.title}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {t.mothersNameStrategy.modeSelector.personalMode.description}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 mt-2">
                      {t.mothersNameStrategy.modeSelector.personalMode.bestFor}
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Why Personal is Better */}
            <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-700">
              <div className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-2">
                {t.mothersNameStrategy.modeSelector.whyPersonalBetter}
              </div>
              <ul className="space-y-1 text-xs text-purple-800 dark:text-purple-200">
                <li>✓ {t.mothersNameStrategy.modeSelector.reason1}</li>
                <li>✓ {t.mothersNameStrategy.modeSelector.reason2}</li>
                <li>✓ {t.mothersNameStrategy.modeSelector.reason3}</li>
              </ul>
            </div>
          </div>
        )}
        
        {/* Autofill Toggle - User Profile */}
        {profile && (
          <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {t.ilmHuruf.autofillToggle?.label || 'Use my profile information'}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {t.ilmHuruf.autofillToggle?.description || 'Toggle off to calculate for family or friends'}
                </p>
              </div>
              <button
                onClick={() => setEnableAutofill(!enableAutofill)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  enableAutofill 
                    ? 'bg-purple-600' 
                    : 'bg-slate-300 dark:bg-slate-600'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    enableAutofill ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </label>
          </div>
        )}
        
        <div className="space-y-3 animate-slide-up">
          {(mode === 'destiny' || mode === 'life-path') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* Latin Input with Autocomplete */}
              <div className={mode === 'life-path' ? 'md:col-span-1' : 'md:col-span-2'}>
                <label className="block text-xs md:text-sm font-medium mb-1.5 text-slate-700 dark:text-slate-300">
                  {t.ilmHuruf.nameLatinLabel}
                </label>
                <NameAutocomplete
                  value={latinInput}
                  onChange={(value) => handleLatinInput(value, true)}
                  onArabicSelect={(arabic, latin) => {
                    setName(arabic);
                    setLatinInput(latin);
                  }}
                  placeholder={t.ilmHuruf.namePlaceholderEn}
                  showHelper={true}
                />
                {translitConfidence !== null && translitConfidence < 100 && (
                  <div className="mt-2 p-2 bg-amber-50 dark:bg-amber-900/20 rounded border border-amber-200 dark:border-amber-800">
                    <p className="text-xs text-amber-800 dark:text-amber-200">
                      {t.ilmHuruf.confidence}: {translitConfidence}% 
                      {translitWarnings.length > 0 && ` • ${translitWarnings.join(', ')}`}
                    </p>
                  </div>
                )}
              </div>

              {/* Birth Date field - only for life-path mode, shown inline */}
              {mode === 'life-path' && (
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    {t.ilmHuruf.birthDate}
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  />
                </div>
              )}

              {/* Mother's Name field - REQUIRED for life-path mode (always visible) */}
              {mode === 'life-path' && (
                <div className="md:col-span-2">
                  <div className="bg-rose-50 dark:bg-rose-900/20 rounded-lg p-4 border-2 border-rose-300 dark:border-rose-700 space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="block text-sm font-medium text-rose-700 dark:text-rose-300">
                        {t.mothersNameStrategy.lifePath.motherNameRequired}
                        <span className="text-xs text-rose-600 dark:text-rose-400 block mt-1">
                          {t.mothersNameStrategy.lifePath.explanation}
                        </span>
                      </label>
                      <button
                        onClick={() => {
                          alert(t.mothersNameStrategy.lifePath.detailedExplanation);
                        }}
                        className="text-rose-500 hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
                        title={t.mothersNameStrategy.lifePath.whyRequired}
                      >
                        <Info className="h-4 w-4" />
                      </button>
                    </div>
                      
                      {/* Mother's Latin Input with Autocomplete */}
                      <div>
                        <label className="block text-xs font-medium mb-1 text-rose-600 dark:text-rose-400">
                          {language === 'fr' ? "Tapez en lettres latines" : "Type in Latin letters"}
                        </label>
                        <NameAutocomplete
                          value={motherLatinInput}
                          onChange={(value) => {
                            setMotherLatinInput(value);
                            if (value) {
                              const arabicResult = transliterateLatinToArabic(value);
                              setMotherName(arabicResult.primary);
                            } else {
                              setMotherName('');
                            }
                          }}
                          onArabicSelect={(arabic, latin) => {
                            setMotherName(arabic);
                            setMotherLatinInput(latin);
                          }}
                          placeholder={language === 'fr' ? "Fatima, Aisha, Khadija, etc." : "Fatima, Aisha, Khadija, etc."}
                          showHelper={false}
                        />
                      </div>

                      {/* Mother's Arabic Input */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-medium text-rose-600 dark:text-rose-400">
                            {language === 'fr' ? "Ou en arabe" : "Or in Arabic"}
                          </label>
                          <button
                            onClick={() => setShowMotherKeyboard(!showMotherKeyboard)}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                              showMotherKeyboard
                                ? 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border border-rose-300 dark:border-rose-700'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600'
                            }`}
                          >
                            <Keyboard className="w-3 h-3" />
                            {showMotherKeyboard ? t.ilmHuruf.hideKeyboard : t.ilmHuruf.showKeyboard}
                          </button>
                        </div>
                        <input
                          type="text"
                          value={motherName}
                          onChange={(e) => {
                            setMotherName(e.target.value);
                            setMotherLatinInput('');
                          }}
                          dir="rtl"
                          placeholder={language === 'fr' ? "اسم الأم" : "Mother's name in Arabic"}
                          className="w-full px-4 py-2 rounded-lg border border-rose-300 dark:border-rose-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-right"
                        />
                        
                        {/* Mother's Virtual Keyboard */}
                        {showMotherKeyboard && (
                          <div className="mt-2">
                            <ArabicKeyboard 
                              onKeyPress={(char: string) => setMotherName(prev => prev + char)}
                              onBackspace={() => setMotherName(prev => prev.slice(0, -1))}
                              onSpace={() => setMotherName(prev => prev + ' ')}
                              onClose={() => setShowMotherKeyboard(false)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                </div>
              )}

              {/* Mother's Name field - for Name Destiny mode (conditional based on mode) */}
              {mode === 'destiny' && (
                <div className="md:col-span-2">
                  {/* Personal Mode - Mother's name required */}
                  {nameDestinyMode === 'personal' && (
                    <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-700 space-y-3">
                      <div className="flex items-center justify-between">
                        <label className="block text-sm font-medium text-purple-700 dark:text-purple-300">
                          {t.mothersNameStrategy.nameInput.motherNameRequired}
                          <span className="text-xs text-purple-600 dark:text-purple-400 block mt-1">
                            {t.mothersNameStrategy.nameInput.personalModeSubtitle}
                          </span>
                        </label>
                        <Info className="h-4 w-4 text-purple-500 dark:text-purple-400" />
                      </div>
                      
                      {/* Mother's Latin Input */}
                      <div>
                        <label className="block text-xs font-medium mb-1 text-purple-600 dark:text-purple-400">
                          {language === 'fr' ? "Tapez en lettres latines" : "Type in Latin letters"}
                        </label>
                        <NameAutocomplete
                          value={motherLatinInput}
                          onChange={(value) => {
                            setMotherLatinInput(value);
                            if (value) {
                              const arabicResult = transliterateLatinToArabic(value);
                              setMotherName(arabicResult.primary);
                            } else {
                              setMotherName('');
                            }
                          }}
                          onArabicSelect={(arabic, latin) => {
                            setMotherName(arabic);
                            setMotherLatinInput(latin);
                          }}
                          placeholder={t.ilmHuruf.motherNamePlaceholderEn}
                          showHelper={false}
                        />
                      </div>

                      {/* Mother's Arabic Input */}
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-medium text-purple-600 dark:text-purple-400">
                            {language === 'fr' ? "Ou en arabe" : "Or in Arabic"}
                          </label>
                          <button
                            onClick={() => setShowMotherKeyboard(!showMotherKeyboard)}
                            className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium transition-colors ${
                              showMotherKeyboard
                                ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-700'
                                : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600'
                            }`}
                          >
                            <Keyboard className="w-3 h-3" />
                            {showMotherKeyboard ? t.ilmHuruf.hideKeyboard : t.ilmHuruf.showKeyboard}
                          </button>
                        </div>
                        <input
                          type="text"
                          value={motherName}
                          onChange={(e) => {
                            setMotherName(e.target.value);
                            setMotherLatinInput('');
                          }}
                          dir="rtl"
                          placeholder={t.ilmHuruf.motherNamePlaceholderAr}
                          className="w-full px-4 py-2 rounded-lg border border-purple-300 dark:border-purple-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-right"
                        />
                        
                        {/* Mother's Virtual Keyboard */}
                        {showMotherKeyboard && (
                          <div className="mt-2">
                            <ArabicKeyboard 
                              onKeyPress={(char: string) => setMotherName(prev => prev + char)}
                              onBackspace={() => setMotherName(prev => prev.slice(0, -1))}
                              onSpace={() => setMotherName(prev => prev + ' ')}
                              onClose={() => setShowMotherKeyboard(false)}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* General Mode - Mother's name optional with explanation */}
                  {nameDestinyMode === 'general' && !motherName && (
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="h-4 w-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm text-amber-800 dark:text-amber-200">
                            {t.mothersNameStrategy.generalResults.limitedInsight}
                          </p>
                          <button
                            onClick={() => setNameDestinyMode('personal')}
                            className="mt-2 text-sm font-medium text-amber-900 dark:text-amber-100 underline hover:no-underline"
                          >
                            {t.mothersNameStrategy.nameInput.switchToPersonal}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Arabic Input */}
              <div className="md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t.ilmHuruf.nameArabic}
                  </label>
                  <button
                    onClick={() => setShowKeyboard(!showKeyboard)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      showKeyboard
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    <Keyboard className="w-3 h-3" />
                    {showKeyboard ? t.ilmHuruf.hideKeyboard : t.ilmHuruf.showKeyboard}
                  </button>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setLatinInput(''); // Clear latin if user types Arabic directly
                  }}
                  placeholder={t.ilmHuruf.namePlaceholderAr}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-right text-xl font-arabic"
                  dir="rtl"
                  style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                />
                {showKeyboard && (
                  <div className="mt-3">
                    <ArabicKeyboard 
                      onKeyPress={(char) => handleKeyboardPress(char, true)}
                      onBackspace={() => {
                        setName(prev => prev.slice(0, -1));
                        setLatinInput('');
                      }}
                      onSpace={() => setName(prev => prev + ' ')}
                      onClose={() => setShowKeyboard(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
          
          {mode === 'compatibility' && (
            <div className="space-y-6">
              {/* Person 1 Inputs */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                    {t.fourLayerCompatibility?.person1Name || "First Person's Name"}
                  </h4>
                </div>

                {/* Latin Input for Person 1 with Autocomplete */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    {t.ilmHuruf.yourNameLatin}
                    <span 
                      className="text-slate-400 cursor-help" 
                      title={t.fourLayerCompatibility?.nameTooltip || "Your name reveals your conscious self"}
                    >
                      <Info className="h-4 w-4" />
                    </span>
                  </label>
                  <NameAutocomplete
                    value={latinInput}
                    onChange={(value) => handleLatinInput(value, true)}
                    onArabicSelect={(arabic, latin) => {
                      setName(arabic);
                      setLatinInput(latin);
                    }}
                    placeholder={t.ilmHuruf.namePlaceholderEn}
                    showHelper={true}
                  />
                </div>

                {/* Arabic Input for Person 1 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      {t.ilmHuruf.yourNameArabic}
                    </label>
                    <button
                      onClick={() => setShowKeyboard(!showKeyboard)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                        showKeyboard
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      <Keyboard className="w-3 h-3" />
                      {showKeyboard ? t.ilmHuruf.hideKeyboard : t.ilmHuruf.showKeyboard}
                    </button>
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setLatinInput('');
                    }}
                    placeholder={t.ilmHuruf.namePlaceholderAr}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-right text-xl font-arabic"
                    dir="rtl"
                    style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                  />
                  {showKeyboard && (
                    <div className="mt-3">
                      <ArabicKeyboard 
                        onKeyPress={(char) => handleKeyboardPress(char, true)}
                        onBackspace={() => {
                          setName(prev => prev.slice(0, -1));
                          setLatinInput('');
                        }}
                        onSpace={() => setName(prev => prev + ' ')}
                        onClose={() => setShowKeyboard(false)}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Person 2 Inputs */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300">
                    {t.fourLayerCompatibility?.person2Name || "Second Person's Name"}
                  </h4>
                </div>

                {/* Latin Input for Second Person with Autocomplete */}
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    {t.ilmHuruf.secondPersonLatin}
                  </label>
                  <NameAutocomplete
                    value={latinInput2}
                    onChange={(value) => handleLatinInput(value, false)}
                    onArabicSelect={(arabic, latin) => {
                      setName2(arabic);
                      setLatinInput2(latin);
                    }}
                    placeholder={t.ilmHuruf.namePlaceholderEn}
                    showHelper={true}
                  />
                </div>
              
              {/* Arabic Input for Second Person */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t.ilmHuruf.secondPersonArabic}
                  </label>
                  <button
                    onClick={() => setShowKeyboard2(!showKeyboard2)}
                    className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                      showKeyboard2
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    <Keyboard className="w-3 h-3" />
                    {showKeyboard2 ? t.ilmHuruf.hideKeyboard : t.ilmHuruf.showKeyboard}
                  </button>
                </div>
                <input
                  type="text"
                  value={name2}
                  onChange={(e) => {
                    setName2(e.target.value);
                    setLatinInput2(''); // Clear latin if user types Arabic directly
                  }}
                  placeholder={t.ilmHuruf.motherNamePlaceholderAr}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-right text-xl font-arabic"
                  dir="rtl"
                  style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                />
                {showKeyboard2 && (
                  <div className="mt-3">
                    <ArabicKeyboard 
                      onKeyPress={(char) => handleKeyboardPress(char, false)}
                      onBackspace={() => {
                        setName2(prev => prev.slice(0, -1));
                        setLatinInput2('');
                      }}
                      onSpace={() => setName2(prev => prev + ' ')}
                      onClose={() => setShowKeyboard2(false)}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          )}
          
          {mode === 'timing' && (
            <div className="space-y-4">
              {/* Name fields for Rest Signal feature */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Latin Input with Autocomplete */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    {t.ilmHuruf.yourNameLatin} <span className="text-xs text-slate-500">({t.ilmHuruf.optionalForRestSignal})</span>
                  </label>
                  <NameAutocomplete
                    value={latinInput}
                    onChange={(value) => handleLatinInput(value, true)}
                    onArabicSelect={(arabic, latin) => {
                      setName(arabic);
                      setLatinInput(latin);
                    }}
                    placeholder={t.ilmHuruf.namePlaceholderEn}
                    showHelper={false}
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.ilmHuruf.restSignalNote}
                  </p>
                </div>
                
                {/* Arabic Input */}
                <div className="md:col-span-1">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                      {t.ilmHuruf.yourNameArabic} <span className="text-xs text-slate-500">({t.ilmHuruf.optional})</span>
                    </label>
                    <button
                      onClick={() => setShowKeyboard(!showKeyboard)}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                        showKeyboard
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-700'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 border border-slate-300 dark:border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      <Keyboard className="w-3 h-3" />
                      {showKeyboard ? t.ilmHuruf.hideKeyboard : t.ilmHuruf.showKeyboard}
                    </button>
                  </div>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setLatinInput('');
                    }}
                    placeholder={t.ilmHuruf.namePlaceholderAr}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-right text-xl font-arabic"
                    dir="rtl"
                    style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                  />
                  {showKeyboard && (
                    <div className="mt-3">
                      <ArabicKeyboard 
                        onKeyPress={(char) => handleKeyboardPress(char, true)}
                        onBackspace={() => {
                          setName(prev => prev.slice(0, -1));
                          setLatinInput('');
                        }}
                        onSpace={() => setName(prev => prev + ' ')}
                        onClose={() => setShowKeyboard(false)}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Birth Date - Required for Divine Timing */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">
                    {t.ilmHuruf.birthDate} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
                  />
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.ilmHuruf.birthDateUsage}
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <button
            onClick={handleAnalyze}
            className="w-full bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-700 hover:to-purple-800 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Sparkles className="w-5 h-5 inline mr-2" />
            {t.ilmHuruf.analyzeButton}
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div ref={resultsSectionRef}>
        {results && results.error && (
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
            <div className="flex items-center gap-3 mb-2">
              <MessageCircle className="w-6 h-6 text-red-600 dark:text-red-400" />
              <h3 className="text-lg font-bold text-red-800 dark:text-red-200">{t.ilmHuruf.analysisError}</h3>
            </div>
            <p className="text-red-700 dark:text-red-300">{results.message}</p>
          </div>
        )}
        {results && !results.error && mode === 'destiny' && <DestinyResults results={results} />}
        {results && !results.error && mode === 'compatibility' && results.person1 && results.person2 && <CompatibilityResults results={results} />}
        {results && !results.error && mode === 'life-path' && <EnhancedLifePathDisplay data={results as EnhancedLifePathResult} />}
        {results && !results.error && mode === 'timing' && results.element && (
          <DivineTiming 
            userElement={(results.element.toLowerCase() as 'fire' | 'air' | 'water' | 'earth')} 
            userName={name || undefined}
            birthDate={birthDate || undefined}
          />
        )}
      </div>

      {/* AI Chat Assistant for Compatibility - Rendered at top level for fixed positioning */}
      {results && !results.error && mode === 'compatibility' && results.person1 && results.person2 && (
        <AIChat
          calculationData={{
            compatibility: results,
          }}
          analysisType="compatibility"
          language={language as 'ar' | 'en' | 'fr'}
        />
      )}
    </div>
  );
}

// ============================================================================
// WEEKLY RESULTS COMPONENT
// ============================================================================

interface WeeklyResultsProps {
  results: {
    profile: UserProfile;
    weeklySummary: WeeklySummaryType;
    harmonyType: HarmonyType;
    dominantForce: DominantForceType;
  };
  selectedDay: string | null;
  setSelectedDay: (day: string | null) => void;
}

function WeeklyResults({ results, selectedDay, setSelectedDay }: WeeklyResultsProps) {
  const { profile, weeklySummary, harmonyType, dominantForce } = results;
  const { t, language } = useLanguage();
  const [expandedRestDay, setExpandedRestDay] = useState<string | null>(null);
  
  const toggleRestSignal = (dayDate: string) => {
    setExpandedRestDay(expandedRestDay === dayDate ? null : dayDate);
  };
  
  // Safety check
  if (!profile || !weeklySummary) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
        <p className="text-red-800 dark:text-red-200">
          Unable to generate weekly forecast. Please enter a valid Arabic name.
        </p>
      </div>
    );
  }
  
  const balanceTip = getBalanceTip(dominantForce);
  
  const ELEMENT_COLORS = {
    Fire: 'text-red-500 bg-red-50 dark:bg-red-900/20',
    Water: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
    Air: 'text-purple-500 bg-purple-50 dark:bg-purple-900/20',
    Earth: 'text-green-500 bg-green-50 dark:bg-green-900/20'
  };
  
  const HARMONY_COLORS = {
    Complete: 'text-green-600 bg-green-50 dark:bg-green-900/30',
    Partial: 'text-amber-600 bg-amber-50 dark:bg-amber-900/30',
    Conflict: 'text-red-600 bg-red-50 dark:bg-red-900/30'
  };

  // Helper: localized weekday from ISO date
  const getTranslatedWeekday = (isoDate?: string) => {
    if (!isoDate) return '';
    try {
      const d = new Date(isoDate);
      return d.toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { weekday: 'long' });
    } catch (e) {
      return isoDate;
    }
  };

  // Helper: localized planet name
  const getPlanetName = (planetName: string) => {
    const names: Record<string, { en: string; fr: string }> = {
      Sun: { en: 'Sun', fr: 'Soleil' },
      Moon: { en: 'Moon', fr: 'Lune' },
      Mars: { en: 'Mars', fr: 'Mars' },
      Mercury: { en: 'Mercury', fr: 'Mercure' },
      Jupiter: { en: 'Jupiter', fr: 'Jupiter' },
      Venus: { en: 'Venus', fr: 'Vénus' },
      Saturn: { en: 'Saturn', fr: 'Saturne' }
    };
    return language === 'fr' ? (names[planetName]?.fr || planetName) : (names[planetName]?.en || planetName);
  };

  // Helper: translate generated tips (mapping English -> French)
  const translateTip = (tip: string) => {
    if (!tip) return tip;
    if (language !== 'fr') return tip;

    const map: Record<string, string> = {
      // Sun
      'Excellent for leadership€”schedule important meetings and presentations': 'Excellent pour le leadership €” planifiez des réunions et présentations importantes',
      'Lead projects and take initiative€”high energy for achievements': 'Dirigez des projets et prenez l\'initiative €” énergie élevée pour les réalisations',
      'Challenging for visibility€”lead quietly, support others today': 'Difficile pour la visibilité €” dirigez discr¨tement, soutenez les autres aujourd\'hui',
      // Moon
      'Perfect for reflection€”trust your intuition and emotional wisdom': 'Parfait pour la réflexion €” faites confiance   votre intuition et sagesse émotionnelle',
      'Gentle day€”plan, review, nurture relationships, avoid overload': 'Journée douce €” planifiez, révisez, entretenez les relations, évitez la surcharge',
      'Rest needed€”minimize commitments, process emotions, be kind to yourself': 'Repos nécessaire €” réduisez les engagements, traitez les émotions, soyez bienveillant avec vous-mªme',
      // Mars
      'Fierce energy€”tackle tough challenges and push through obstacles boldly': '‰nergie féroce €” relevez les défis difficiles et surmontez les obstacles avec audace',
      'Take action on difficult tasks€”courage and determination favored': 'Agissez sur les t¢ches difficiles €” le courage et la détermination sont favorisés',
      'Channel carefully€”physical activity helps, avoid conflicts and rushing': 'Canalisez prudemment €” l\'activité physique aide, évitez les conflits et la précipitation',
      // Mercury
      'Sharp mind€”perfect for writing, calls, learning, and travel plans': 'Esprit vif €” parfait pour l\'écriture, les appels, l\'apprentissage et les projets de voyage',
      'Communicate clearly€”good for emails, meetings, and study sessions': 'Communiquez clairement €” bon pour les e-mails, réunions et sessions d\'étude',
      'Mental fog possible€”double-check messages, postpone major decisions': 'Brouillard mental possible €” vérifiez les messages, reportez les décisions majeures',
      // Jupiter
      'Timing is perfect€”make big decisions, start new ventures, expand horizons': 'Le moment est parfait €” prenez de grandes décisions, lancez de nouvelles entreprises, élargissez vos horizons',
      'Growth day€”great for planning expansion and seeking opportunities': 'Journée de croissance €” idéale pour planifier l\'expansion et rechercher des opportunités',
      'Temper optimism€”research thoroughly before committing to anything big': 'Modérez l\'optimisme €” recherchez soigneusement avant de vous engager dans de grandes choses',
      // Venus
      'Excellent for connection€”ideal for relationships, creativity, and beauty': 'Excellent pour la connexion €” idéal pour les relations, la créativité et la beauté',
      'Harmonious day€”connect with others, enjoy art, balance work-pleasure': 'Journée harmonieuse €” connectez-vous aux autres, appréciez l\'art, équilibrer travail et plaisir',
      'Social challenges€”focus on self-care, solo creative work, gentle interactions': 'Défis sociaux €” concentrez-vous sur les soins personnels, travail créatif en solo, interactions douces',
      // Saturn
      'Build strong foundations€”organize, plan long-term, establish structures': 'Construisez des bases solides €” organisez, planifiez   long terme, établissez des structures',
      'Structure your week€”discipline and planning bring good results': 'Structurez votre semaine €” la discipline et la planification apportent de bons résultats',
      'Heavy responsibilities€”break tasks into small steps, be patient with delays': 'Responsabilités lourdes €” décomposez les t¢ches en petites étapes, soyez patient face aux retards',
      // Element tips
      'Balance heat€”practice calm speech, charity, time near water': '‰quilibrez la chaleur €” pratiquez la parole calme, la charité, du temps pr¨s de l\'eau',
      'Activate energy€”light exercise, sunlight, decisive action': 'Activez l\'énergie €” exercice léger, lumi¨re du soleil, action décisive',
      'Ground yourself€”stick to routine, nature walk, one task at a time': 'Ancrez-vous €” respectez la routine, promenade dans la nature, une t¢che   la fois',
      'Add lightness€”try creativity, flexibility, or a short change of scenery': 'Ajoutez de la lég¨reté €” essayez la créativité, la flexibilité ou un court changement de décor',
      // Planet secondary tips
      'Shine your light€”but stay humble and generous with recognition': 'Faites briller votre lumi¨re €” restez humble et généreux dans la reconnaissance',
      'Honor your feelings€”they guide you to what truly matters': 'Honorez vos sentiments €” ils vous guident vers ce qui compte vraiment',
      'Channel warrior energy€”protect boundaries, pursue goals with courage': 'Canalisez l\'énergie guerri¨re €” protégez les limites, poursuivez vos objectifs avec courage',
      'Mental agility peaks€”network, negotiate, adapt quickly': 'L\'agilité mentale atteint son apogée €” réseauter, négocier, s\'adapter rapidement',
      'Seek wisdom and growth€”mentor others or learn from teachers': 'Recherchez la sagesse et la croissance €” mentorat ou apprentissage aupr¨s des enseignants',
      'Appreciate beauty€”create harmony in your environment and relationships': 'Appréciez la beauté €” créez l\'harmonie dans votre environnement et vos relations',
      'Master discipline€”small consistent efforts build lasting success': 'Ma®trisez la discipline €” de petits efforts constants construisent un succ¨s durable'
    };

    return map[tip] || tip;
  };

  // Helper: translate rest practice items
  const translatePractice = (practice: string) => {
    if (!practice) return practice;
    if (language !== 'fr') return practice;
    const m: Record<string, string> = {
      '20min Silence': '20min de silence',
      'Nature Walk': 'Promenade en nature',
      'Journal Freely': 'Journal libre',
      'Read Sacred Texts': 'Lire des textes sacrés',
      'Mindful Tea': 'Thé conscient',
      'Early Sleep': 'Dormir t´t'
    };
    return m[practice] || practice;
  };

  // Translation helper for energy types
  const translateEnergyType = (energyType: string): string => {
    if (language === 'en') return energyType;
    
    const m: Record<string, string> = {
      // Mercury
      'Mental sharpness': 'Acuité mentale',
      'Communication peak': 'Pic de communication',
      'Quick connections': 'Connexions rapides',
      'Integration time': 'Temps d\'intégration',
      
      // Sun
      'Peak leadership energy': 'Pic d\'énergie de leadership',
      'High visibility': 'Haute visibilité',
      'Delegation phase': 'Phase de délégation',
      'Reflection time': 'Temps de réflexion',
      
      // Moon
      'Emotional clarity': 'Clarté émotionnelle',
      'Nurturing peak': 'Pic de soin',
      'Intuitive window': 'Fenªtre intuitive',
      'Release & rest': 'Rel¢chement & repos',
      
      // Mars
      'Peak action energy': 'Pic d\'énergie d\'action',
      'Competitive drive': 'Esprit de compétition',
      'Courage window': 'Fenªtre de courage',
      'Power-down time': 'Temps de récupération',
      
      // Venus
      'Beauty & connection': 'Beauté & connexion',
      'Pleasure peak': 'Pic de plaisir',
      'Relationship time': 'Temps relationnel',
      'Art & beauty': 'Art & beauté',
      
      // Jupiter
      'Expansion begins': 'L\'expansion commence',
      'Opportunity window': 'Fenªtre d\'opportunité',
      'Growth momentum': 'Momentum de croissance',
      'Wisdom integration': 'Intégration de la sagesse',
      
      // Saturn
      'Structure setting': 'Mise en place de structure',
      'Discipline peak': 'Pic de discipline',
      'Responsibility time': 'Temps de responsabilité',
      'Completion energy': '‰nergie de completion'
    };
    
    return m[energyType] || energyType;
  };

  // Translation helper for task items (bestFor and avoid lists)
  const translateTask = (task: string): string => {
    if (language === 'en') return task;
    
    const m: Record<string, string> = {
      // Mercury tasks
      'Writing tasks': 'T¢ches d\'écriture',
      'Study complex topics': '‰tudier des sujets complexes',
      'Plan communications': 'Planifier les communications',
      'Learn new skills': 'Apprendre de nouvelles compétences',
      'Mindless work': 'Travail machinal',
      'Physical-only tasks': 'T¢ches uniquement physiques',
      'Important calls': 'Appels importants',
      'Presentations': 'Présentations',
      'Teach or explain': 'Enseigner ou expliquer',
      'Networking': 'Réseautage',
      'Solo work': 'Travail en solo',
      'Silence': 'Silence',
      'Short trips/errands': 'Courts trajets/courses',
      'Email responses': 'Réponses aux e-mails',
      'Quick meetings': 'Réunions rapides',
      'Social media': 'Médias sociaux',
      'Deep focus': 'Concentration profonde',
      'Long commitments': 'Engagements longs',
      'Review what you learned': 'Revoir ce que vous avez appris',
      'Journal insights': 'Noter les perspectives',
      'Organize notes': 'Organiser les notes',
      'Light reading': 'Lecture lég¨re',
      'New information': 'Nouvelles informations',
      'Complex learning': 'Apprentissage complexe',
      
      // Sun tasks
      'Important decisions': 'Décisions importantes',
      'Set daily direction': 'Définir la direction du jour',
      'Lead team meetings': 'Diriger des réunions d\'équipe',
      'Strategic planning': 'Planification stratégique',
      'Routine tasks': 'T¢ches routini¨res',
      'Following others': 'Suivre les autres',
      'Public presentations': 'Présentations publiques',
      'Client meetings': 'Réunions avec clients',
      'Performance reviews': '‰valuations de performance',
      'Launch initiatives': 'Lancer des initiatives',
      'Background work': 'Travail en arri¨re-plan',
      'Hiding mistakes': 'Cacher les erreurs',
      'Delegate tasks': 'Déléguer des t¢ches',
      'Teach and mentor': 'Enseigner et encadrer',
      'Review team work': 'Réviser le travail d\'équipe',
      'Empower others': 'Responsabiliser les autres',
      'Micromanaging': 'Microgestion',
      'Reflect on the day': 'Réfléchir sur la journée',
      'Celebrate wins': 'Célébrer les victoires',
      'Plan tomorrow': 'Planifier demain',
      'Rest with pride': 'Se reposer avec fierté',
      'Self-criticism': 'Auto-critique',
      'Dim your light': 'Diminuer votre lumi¨re',
      
      // Moon tasks
      'Check in with feelings': 'Vérifier vos sentiments',
      'Care for family': 'Prendre soin de la famille',
      'Gentle morning ritual': 'Rituel matinal doux',
      'Cook nourishing food': 'Cuisiner des aliments nourrissants',
      'Harsh decisions': 'Décisions dures',
      'Ignore emotions': 'Ignorer les émotions',
      'Mother/nurture others': 'Materner/prendre soin des autres',
      'Create safe space': 'Créer un espace s»r',
      'Listen deeply': '‰couter profondément',
      'Comfort someone': 'Réconforter quelqu\'un',
      'Aggression': 'Agression',
      'Emotional coldness': 'Froideur émotionnelle',
      'Trust your gut': 'Faire confiance   votre instinct',
      'Dream journaling': 'Journal des rêves',
      'Water activities': 'Activités aquatiques',
      'Meditate': 'Méditer',
      'Logic-only thinking': 'Pensée uniquement logique',
      'Ignore intuition': 'Ignorer l\'intuition',
      'Let go of the day': 'Lâcher prise sur la journée',
      'Forgive conflicts': 'Pardonner les conflits',
      'New fights': 'Nouvelles disputes',
      'Revenge planning': 'Planification de vengeance',
      'Alcohol': 'Alcool',
      
      // Mars tasks
      'Start difficult tasks': 'Commencer les tâches difficiles',
      'Physical exercise': 'Exercice physique',
      'Tackle challenges': 'Relever des défis',
      'Assert yourself': 'S\'affirmer',
      'Passive activities': 'Activités passives',
      'Procrastination': 'Procrastination',
      'Compete or debate': 'Compétition ou débat',
      'Sales pitches': 'Présentations de vente',
      'Push through obstacles': 'Surmonter les obstacles',
      'Take action': 'Passer   l\'action',
      'Avoid conflict': 'Éviter les conflits',
      'Fence-sitting': 'Indécision',
      'Face your fear': 'Affronter votre peur',
      'Bold moves': 'Mouvements audacieux',
      'Defend boundaries': 'Défendre les limites',
      'Stand up for yourself': 'Défendre vos droits',
      'Cowardice': 'Lâcheté',
      'People-pleasing': 'Plaire aux autres',
      'Wind down intensity': 'Réduire l\'intensité',
      'Repair any damage': 'Réparer les dégâts',
      'Cool down': 'Se calmer',
      'Forgive self': 'Se pardonner',
      'Stir up conflict': 'Attiser les conflits',
      'Reckless action': 'Action imprudente',
      
      // Venus tasks
      'Beautify space': 'Embellir l\'espace',
      'Dress nicely': 'S\'habiller joliment',
      'Enjoy breakfast': 'Savourer le petit déjeuner',
      'Appreciate beauty': 'Apprécier la beauté',
      'Ugliness': 'Laideur',
      'Harshness': 'Dureté',
      'Socialize': 'Socialiser',
      'Express affection': 'Exprimer l\'affection',
      'Enjoy pleasures': 'Apprécier les plaisirs',
      'Share love': 'Partager l\'amour',
      'Isolation': 'Isolation',
      'Rudeness': 'Impolitesse',
      'Connect deeply': 'Se connecter profondément',
      'Date night': 'Soirée en amoureux',
      'Quality time': 'Temps de qualité',
      'Relationship talk': 'Discussion relationnelle',
      'Conflict': 'Conflit',
      'Distance': 'Distance',
      'Create art': 'Créer de l\'art',
      'Listen to music': 'Écouter de la musique',
      'Indulge senses': 'Se faire plaisir',
      'Luxury bath': 'Bain de luxe',
      'Frugality': 'Frugalité',
      'Denial': 'Déni',
      
      // Jupiter tasks
      'Think big picture': 'Penser   long terme',
      'Study philosophy': 'Étudier la philosophie',
      'Set ambitious goals': 'Fixer des objectifs ambitieux',
      'Small thinking': 'Pensée limitée',
      'Petty details': 'Détails insignifiants',
      'Seek opportunities': 'Chercher des opportunités',
      'Make connections': 'Créer des connexions',
      'Generous acts': 'Actes généreux',
      'Teaching': 'Enseignement',
      'Stinginess': 'Avarice',
      'Narrowness': '‰troitesse d\'esprit',
      'Expand projects': '‰tendre les projets',
      'Take calculated risks': 'Prendre des risques calculés',
      'Travel planning': 'Planification de voyage',
      'Cultural exploration': 'Exploration culturelle',
      'Contraction': 'Contraction',
      'Fear-based decisions': 'Décisions basées sur la peur',
      'Philosophical reflection': 'Réflexion philosophique',
      'Gratitude practice': 'Pratique de gratitude',
      'Mentor someone': 'Encadrer quelqu\'un',
      'Spiritual study': '‰tude spirituelle',
      'Materialism': 'Matérialisme',
      'Pessimism': 'Pessimisme',
      
      // Saturn tasks
      'Build structure': 'Construire une structure',
      'Long-term planning': 'Planification   long terme',
      'Set boundaries': 'Définir des limites',
      'Serious work': 'Travail sérieux',
      'Chaos': 'Chaos',
      'Frivolity': 'Frivolité',
      'Focused work': 'Travail concentré',
      'Meet deadlines': 'Respecter les délais',
      'Quality control': 'Contr´le qualité',
      'Professional duties': 'Devoirs professionnels',
      'Slacking': 'Paresse',
      'Shortcuts': 'Raccourcis',
      'Take responsibility': 'Prendre ses responsabilités',
      'Difficult conversations': 'Conversations difficiles',
      'Face consequences': 'Faire face aux conséquences',
      'Do what you must': 'Faire ce qui doit ªtre fait',
      'Blame others': 'Bl¢mer les autres',
      'Avoid duty': '‰viter le devoir',
      'Complete projects': 'Terminer les projets',
      'Tie up loose ends': 'Régler les détails',
      'Archive & organize': 'Archiver & organiser',
      'Review progress': 'Réviser les progr¨s',
      'Start new things': 'Commencer de nouvelles choses',
      'Rush': 'Précipitation'
    };
    
    return m[task] || task;
  };

  // Translation helper for planetal phases
  const translatePlanetalPhase = (phase: string): string => {
    if (language === 'en') return phase;
    
    const m: Record<string, string> = {
      'Sun rises - authority peaks': 'Le soleil se l¨ve - pic d\'autorité',
      'Solar noon - maximum presence': 'Midi solaire - présence maximale',
      'Moon opens heart': 'La lune ouvre le cÅ“ur',
      'Emotional tide peaks': 'Pic de marée émotionnelle',
      'Mars fuels courage': 'Mars alimente le courage'
    };
    
    return m[phase] || phase;
  };

  return (
    <div className="space-y-6">
      {/* Profile Chips */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl p-6">
        <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100">
          {t.ilmHuruf.yourSpiritualProfile}
        </h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-700 text-black dark:text-white">
            <span className="text-sm font-medium">
              {t.ilmHuruf.ruh}: {profile.ruh}
            </span>
          </div>
          <div className={`px-4 py-2 rounded-full border ${ELEMENT_COLORS[profile.element]}`}>
            <span className="text-sm font-medium">
              {t.ilmHuruf.element}: {profile.element}
            </span>
          </div>
          <div className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-700">
            <span className="text-sm font-medium text-blue-900 dark:text-blue-200 flex items-center gap-2">
              {React.createElement(PLANET_ICONS[profile.kawkab], { className: 'w-4 h-4' })}
              {profile.kawkab}
            </span>
          </div>
        </div>
      </div>

      {/* Balance Meter - Energy Harmony */}
      <BalanceMeter 
        userElement={profile.element as ElementType} 
        currentDayElement={getCurrentDayElement()} 
      />

      {/* Harmony & Dominant Force */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className={`rounded-xl p-4 border-2 ${HARMONY_COLORS[harmonyType]}`}>
          <div className="text-sm font-medium opacity-75 mb-1">{t.ilmHuruf.currentHarmony}</div>
          <div className="text-xl font-bold">{harmonyType}</div>
          <p className="text-xs mt-2 opacity-90">
            {harmonyType === 'Complete' && t.ilmHuruf.allForcesAligned}
            {harmonyType === 'Partial' && t.ilmHuruf.mixedSignals}
            {harmonyType === 'Conflict' && t.ilmHuruf.challengingEnergies}
          </p>
        </div>
        
        <div className="rounded-xl p-4 border-2 border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/50">
          <div className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-1">{t.ilmHuruf.dominantForce}</div>
          <div className="text-xl font-bold text-slate-900 dark:text-slate-100">{dominantForce}</div>
          <p className="text-xs mt-2 text-slate-600 dark:text-slate-400">{balanceTip}</p>
        </div>
      </div>

      {/* Week at a Glance - Enhanced Display */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-bold mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-green-500" />
          {t.ilmHuruf.weekAtAGlance}
        </h3>
        
        {/* Week Summary - Best Days */}
        <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border border-green-200 dark:border-green-800">
          <div className="grid md:grid-cols-2 gap-4">
            {/* Best Day */}
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-2">{t.ilmHuruf.peakDayThisWeek}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  {weeklySummary?.days?.find(d => d.date === weeklySummary?.best_day) && (
                    <>
                      <div className="font-bold text-slate-900 dark:text-slate-100">
                        {getTranslatedWeekday(weeklySummary?.days?.find(d => d.date === weeklySummary?.best_day)?.date)}
                      </div>
                      <div className="text-sm text-slate-600 dark:text-slate-400">
                        {t.ilmHuruf.harmony}: {weeklySummary?.days?.find(d => d.date === weeklySummary?.best_day)?.harmony_score}/10
                      </div>
                    </>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{t.ilmHuruf.bestForInitiatives}</p>
            </div>

            {/* Focus Day */}
            <div>
              <p className="text-xs font-semibold text-slate-600 dark:text-slate-400 uppercase tracking-wide mb-2">{t.ilmHuruf.focusDay}</p>
              <div className="flex items-center gap-2">
                <span className="text-2xl">Ž¯</span>
                <div>
                  {weeklySummary?.days?.find(d => d.date === weeklySummary?.focus_day) && (
                    <>
                      <div className="font-bold text-slate-900 dark:text-slate-100">
                        {getTranslatedWeekday(weeklySummary?.days?.find(d => d.date === weeklySummary?.focus_day)?.date)}
                      </div>
                              <div className="text-sm text-slate-600 dark:text-slate-400">
                                {t.ilmHuruf.planet}: {getPlanetName(weeklySummary?.days?.find(d => d.date === weeklySummary?.focus_day)?.day_planet || '')}
                              </div>
                    </>
                  )}
                </div>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2">{t.ilmHuruf.forDeepWorkAndPlanning}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3">
          {weeklySummary?.days?.map((day) => {
            const isBest = day.date === weeklySummary?.best_day;
            const isGentle = day.date === weeklySummary?.gentle_day;
            const isFocus = day.date === weeklySummary?.focus_day;
            const isSelected = day.date === selectedDay;
            const firstTip = day.tips?.[0] || t.ilmHuruf.planMindfully;
            const displayedFirstTip = translateTip(firstTip);
            const truncatedTip = displayedFirstTip.length > 45 ? displayedFirstTip.slice(0, 45) + '...' : displayedFirstTip;
            
            return (
              <button
                key={day.date}
                onClick={() => setSelectedDay(day.date === selectedDay ? null : day.date)}
                className={`relative rounded-xl p-3 transition-all duration-200 border-2 ${
                  isSelected 
                    ? 'ring-2 ring-purple-500 bg-purple-50 dark:bg-purple-900/30 border-purple-300 dark:border-purple-700 shadow-lg scale-105' 
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:shadow-md hover:scale-102'
                }`}
              >
                {/* Day name */}
                <div className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {getTranslatedWeekday(day.date)}
                </div>
                
                {/* Score display with bar */}
                <div className="mb-2">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-600 dark:text-slate-400">{t.ilmHuruf.harmony}</span>
                    <div className="flex items-center">
                      <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {day.harmony_score}/10
                      </span>
                      <HarmonyTooltip
                        breakdown={calculateHarmonyBreakdown(
                          day.day_planet,
                          profile.element,
                          profile.kawkab,
                          day.ruh_phase,
                          profile.ruh,
                          `${day.day_planet} day`
                        ) as HarmonyBreakdown}
                        context="weekly"
                      />
                    </div>
                  </div>
                  <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        day.band === 'High' ? 'bg-green-500' :
                        day.band === 'Moderate' ? 'bg-amber-500' :
                        'bg-blue-400'
                      }`}
                      style={{ width: `${(day.harmony_score / 10) * 100}%` }}
                    />
                  </div>
                </div>
                
                {/* Planet info */}
                <div className="flex items-center gap-1.5 mb-2 py-1.5 px-2 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                  <span className="text-lg">{PLANET_ICONS_EMOJI[day.day_planet]}</span>
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {getPlanetName(day.day_planet)}
                  </span>
                </div>
                
                {/* Key tip preview */}
                <div className="mb-2 min-h-[2.5rem]">
                  <div className="flex items-start gap-1">
                    <span className="text-xs flex-shrink-0">’¡</span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-tight text-left">
                      {truncatedTip}
                    </p>
                  </div>
                </div>
                
                {/* Rest Signal Badge */}
                {day.isRestDay && (
                  <div className="mb-2">
                    <div
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent day selection toggle
                        toggleRestSignal(day.date);
                      }}
                      className={`w-full text-[10px] px-2 py-1 rounded-full font-bold transition-colors cursor-pointer ${
                        day.restLevel === 'deep'
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50'
                      }`}
                    >
                      {day.restLevel === 'deep' ? `›‘ ${t.ilmHuruf.deepRest}` : `™ ${t.ilmHuruf.restSignalBadge}`}
                    </div>
                  </div>
                )}
                
                {/* Energy Return Speed (Irtiá¹⭐Äb) - Lesson 25 */}
                <div className="mb-2 p-2 bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg border border-purple-200 dark:border-purple-700/50">
                  <div className="flex items-start gap-1.5">
                    <span className="text-sm flex-shrink-0">
                      {day.energyReturn.speed === 'instant' && 'š¡'}
                      {day.energyReturn.speed === 'quick' && '’¨'}
                      {day.energyReturn.speed === 'gradual' && 'Š'}
                      {day.energyReturn.speed === 'delayed' && '±'}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-0.5">
                        <span className="text-[10px] font-bold text-purple-900 dark:text-purple-100 uppercase">
                          {day.energyReturn.speed === 'instant' && t.ilmHuruf.instant}
                          {day.energyReturn.speed === 'quick' && t.ilmHuruf.quick}
                          {day.energyReturn.speed === 'gradual' && t.ilmHuruf.gradual}
                          {day.energyReturn.speed === 'delayed' && t.ilmHuruf.delayed}
                        </span>
                        <span className="text-[9px] text-purple-600 dark:text-purple-400">
                          {day.energyReturn.speed === 'instant' && t.ilmHuruf.sameDayParens}
                          {day.energyReturn.speed === 'quick' && t.ilmHuruf.fewHoursParens}
                          {day.energyReturn.speed === 'gradual' && t.ilmHuruf.twoDaysParens}
                          {day.energyReturn.speed === 'delayed' && t.ilmHuruf.oneToTwoWeeksParens}
                        </span>
                      </div>
                      <p className="text-[10px] text-purple-700 dark:text-purple-300 leading-tight">
                        {day.energyReturn.practice}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-1">
                  {isBest && (
                    <div className="text-[10px] px-1.5 py-0.5 rounded-full bg-green-500 text-white font-bold">
                      {t.ilmHuruf.best}
                    </div>
                  )}
                  {isGentle && (
                    <div className="text-[10px] px-1.5 py-0.5 rounded-full bg-blue-400 text-white font-bold">
                      {t.ilmHuruf.gentle}
                    </div>
                  )}
                  {isFocus && !isBest && (
                    <div className="text-[10px] px-1.5 py-0.5 rounded-full bg-purple-500 text-white font-bold">
                      {t.ilmHuruf.focus}
                    </div>
                  )}
                </div>
                
                {/* Click indicator */}
                {!isSelected && (
                  <div className="absolute bottom-1 right-1 text-[10px] text-slate-400 dark:text-slate-600">
                    –¼
                  </div>
                )}
              </button>
            );
          })}
        </div>
        
        {/* Energy Return Speeds Overview (Irtiá¹⭐Äb) */}
        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
            <span className="text-lg">š¡</span>
            {t.ilmHuruf.energyReturnSpeedsThisWeek}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mb-3">
            {t.ilmHuruf.whenActionsManifestResults}
          </p>
          <div className="grid md:grid-cols-4 gap-3">
            {(() => {
              const speedCounts = {
                instant: weeklySummary?.days?.filter(d => d.energyReturn?.speed === 'instant').length || 0,
                quick: weeklySummary?.days?.filter(d => d.energyReturn?.speed === 'quick').length || 0,
                gradual: weeklySummary?.days?.filter(d => d.energyReturn?.speed === 'gradual').length || 0,
                delayed: weeklySummary?.days?.filter(d => d.energyReturn?.speed === 'delayed').length || 0,
              };
              return Object.entries(speedCounts).map(([speed, count]) => (
                <div key={speed} className="bg-white dark:bg-slate-700/50 rounded-lg p-3 text-center">
                  <div className="flex justify-center text-2xl mb-1">
                    {speed === 'instant' && 'š¡'}
                    {speed === 'quick' && '’¨'}
                    {speed === 'gradual' && 'Š'}
                    {speed === 'delayed' && '±'}
                  </div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                    {speed === 'instant' ? t.ilmHuruf.instant : speed === 'quick' ? t.ilmHuruf.fewHours : speed === 'gradual' ? t.ilmHuruf.twoDays : t.ilmHuruf.oneToTwoWeeks}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {language === 'fr' ? `${count} jour${count !== 1 ? 's' : ''}` : `${count} day${count !== 1 ? 's' : ''}`}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-500 mt-2">
                    {speed === 'instant' && t.ilmHuruf.sameDay}
                    {speed === 'quick' && t.ilmHuruf.fewHours}
                    {speed === 'gradual' && t.ilmHuruf.twoDays}
                    {speed === 'delayed' && t.ilmHuruf.oneToTwoWeeks}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
        
        {/* Expandable Rest Signal Content */}
        {expandedRestDay && (() => {
          const restDay = weeklySummary?.days?.find(d => d.date === expandedRestDay);
          if (!restDay || !restDay.isRestDay) return null;
          
          return (
            <div className="mt-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-5 border-2 border-blue-200 dark:border-blue-800 animate-in slide-in-from-top duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{restDay.restLevel === 'deep' ? '›‘' : '™'}</span>
                  <h4 className="font-bold text-blue-900 dark:text-blue-100">
                    {restDay.restLevel === 'deep' ? t.ilmHuruf.deepRestNeeded : t.ilmHuruf.restSignal}
                  </h4>
                </div>
                <button
                  onClick={() => setExpandedRestDay(null)}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 text-sm"
                >
                  œ•
                </button>
              </div>
              
              <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                {restDay.restLevel === 'deep' 
                  ? t.ilmHuruf.criticalLowEnergy
                  : t.ilmHuruf.lowHarmonyPause.replace('{planet}', getPlanetName(restDay.day_planet))
                }
              </p>
              
              {/* Rest Practices */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-400 mb-2 uppercase tracking-wide">
                  {t.ilmHuruf.restPractices}
                </p>
                <ul className="space-y-2">
                  {restDay.restPractices?.map((practice, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <span className="text-blue-500 dark:text-blue-400 flex-shrink-0">–¡</span>
                      <span>{translatePractice(practice)}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Better Days Suggestions */}
              {restDay.betterDays && restDay.betterDays.length > 0 && (
                <div className="pt-4 border-t border-blue-200 dark:border-blue-700">
                  <p className="text-xs font-semibold text-slate-700 dark:text-slate-400 mb-2 flex items-center gap-1">
                    <span>’¡</span>
                    <span className="uppercase tracking-wide">{t.ilmHuruf.betterDaysThisWeek}</span>
                  </p>
                  <ul className="space-y-1">
                    {restDay.betterDays.map((betterDay, i) => (
                      <li key={i} className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <span className="text-green-500">•</span>
                        <span>{betterDay}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 italic">
                    {t.ilmHuruf.rescheduleImportantTasks}
                  </p>
                </div>
              )}
              
              {/* Classical Wisdom */}
              <div className="mt-4 pt-4 border-t border-blue-200 dark:border-blue-700">
                <p className="text-xs italic text-slate-600 dark:text-slate-400 text-center">
                  <span className="font-semibold">{t.ilmHuruf.classicalWisdom}</span> "{t.ilmHuruf.stillnessBeforeMotion}"
                  <br />
                  <span className="text-[10px]">{t.ilmHuruf.stillnessExplanation}</span>
                </p>
              </div>
            </div>
          );
        })()}
        
        {/* Selected Day Details - Enhanced */}
        {selectedDay && (() => {
          const day = weeklySummary?.days?.find(d => d.date === selectedDay);
          if (!day) return null;
          
          const PlanetIcon = PLANET_ICONS[day.day_planet];
          
          return (
            <div className="mt-6 animate-in slide-in-from-top duration-300">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl p-6 text-white shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{PLANET_ICONS_EMOJI[day.day_planet]}</div>
                    <div>
                      <div className="text-2xl font-bold">
                        {day.weekday}
                      </div>
                      <div className="text-sm opacity-90">
                        {new Date(day.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1">
                      <div className="text-4xl font-bold">{day.harmony_score}</div>
                      <div className="self-start mt-2">
                        <HarmonyTooltip
                          breakdown={calculateHarmonyBreakdown(
                            day.day_planet,
                            profile.element,
                            profile.kawkab,
                            day.ruh_phase,
                            profile.ruh,
                            `${day.day_planet} day`
                          ) as HarmonyBreakdown}
                          context="weekly"
                        />
                      </div>
                    </div>
                    <div className="text-xs opacity-90">/ 10</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-3 mb-4">
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                    <div className="text-xs opacity-75 mb-1">{t.ilmHuruf.planet}</div>
                    <div className="font-bold flex items-center gap-2">
                      <PlanetIcon className="w-5 h-5" />
                      {day.day_planet}
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                      {day.day_planet === 'Sun' && t.ilmHuruf.leadership}
                      {day.day_planet === 'Moon' && t.ilmHuruf.emotions}
                      {day.day_planet === 'Mars' && t.ilmHuruf.action}
                      {day.day_planet === 'Mercury' && t.ilmHuruf.communication}
                      {day.day_planet === 'Jupiter' && t.ilmHuruf.expansion}
                      {day.day_planet === 'Venus' && t.ilmHuruf.love}
                      {day.day_planet === 'Saturn' && t.ilmHuruf.structure}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                    <div className="text-xs opacity-75 mb-1">{t.ilmHuruf.ruhPhase}</div>
                    <div className="font-bold">{day.ruh_phase_group}</div>
                    <div className="text-xs opacity-75 mt-1">{t.ilmHuruf.phase} {day.ruh_phase}/9</div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-lg p-3">
                    <div className="text-xs opacity-75 mb-1">{t.ilmHuruf.energyBand}</div>
                    <div className={`font-bold flex items-center gap-2`}>
                      {day.band === 'High' && '”¥ High'}
                      {day.band === 'Moderate' && 'š–ï¸ Moderate'}
                      {day.band === 'Low' && 'Š Gentle'}
                    </div>
                    <div className="text-xs opacity-75 mt-1">
                      {day.band === 'High' && 'Peak performance day'}
                      {day.band === 'Moderate' && 'Steady progress day'}
                      {day.band === 'Low' && 'Rest & reflection day'}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-white dark:bg-slate-800 rounded-xl p-5 border-2 border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-purple-500" />
                  <h4 className="font-bold text-slate-900 dark:text-slate-100">{t.ilmHuruf.yourGuidanceForThisDay}</h4>
                </div>
                
                {/* Energy Return - Detailed (Irtiá¹⭐Äb) */}
                <div className="mb-5 p-4 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-3 flex items-center gap-2">
                    <span className="text-2xl">
                      {day.energyReturn.speed === 'instant' && 'š¡'}
                      {day.energyReturn.speed === 'quick' && '’¨'}
                      {day.energyReturn.speed === 'gradual' && 'Š'}
                      {day.energyReturn.speed === 'delayed' && '±'}
                    </span>
                    <span>{t.ilmHuruf.energyReturnWisdom}</span>
                  </h4>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        <strong className="text-purple-700 dark:text-purple-300">{t.ilmHuruf.returnSpeed}</strong>{' '}
                        <span className="uppercase font-bold">
                          {day.energyReturn.speed === 'instant' && t.ilmHuruf.instant}
                          {day.energyReturn.speed === 'quick' && t.ilmHuruf.quick}
                          {day.energyReturn.speed === 'gradual' && t.ilmHuruf.gradual}
                          {day.energyReturn.speed === 'delayed' && t.ilmHuruf.delayed}
                        </span>
                        {' '}
                        <span className="text-purple-600 dark:text-purple-400">
                          ({day.energyReturn.timeframe})
                        </span>
                      </p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {day.energyReturn.description}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-purple-200 dark:border-purple-700">
                      <p className="text-xs font-semibold text-purple-800 dark:text-purple-200 mb-2 uppercase tracking-wide flex items-center gap-1">
                        <span>Ž¯</span>
                        <span>{t.ilmHuruf.todaysPractice}</span>
                      </p>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                        {day.energyReturn.practice}
                      </p>
                    </div>
                    
                    <div className="pt-3 border-t border-purple-200 dark:border-purple-700">
                      <p className="text-xs text-slate-500 dark:text-slate-400 italic leading-relaxed">
                        <span className="font-semibold">{t.ilmHuruf.classicalTeaching}</span> "{t.ilmHuruf.classicalQuote}" 
                        {t.ilmHuruf.classicalMeaning}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Task Sequencer (Niáº“Äm - Lesson 28) - Only for high-harmony days */}
                {day.taskSequence && (
                  <div className="p-5 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-700">
                    
                    {/* Header */}
                    <div className="mb-4">
                      <h4 className="text-lg font-bold text-purple-900 dark:text-purple-100 flex items-center gap-2">
                        <span className="text-2xl">“‹</span>
                        <span>
                          {language === 'fr' ? 'Séquence Optimale pour' : 'Optimal Sequence for'} {getTranslatedWeekday(day.date)}
                        </span>
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                        {getPlanetName(day.day_planet)} {language === 'fr' ? 'jour' : 'day'} • {t.ilmHuruf.harmony} {day.harmony_score}/10
                      </p>
                    </div>
                    
                    {/* Time Windows */}
                    <div className="space-y-4">
                      
                      {/* Morning */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-yellow-400">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-slate-900 dark:text-slate-100">
                            … {language === 'fr' ? 'Matin' : 'Morning'}
                          </h5>
                          <span className="text-xs bg-yellow-100 dark:bg-yellow-900/30 px-2 py-1 rounded text-yellow-800 dark:text-yellow-200 font-medium">
                            {day.taskSequence.morning.timeRange}
                          </span>
                        </div>
                        
                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-3 font-medium">
                          {translateEnergyType(day.taskSequence.morning.energyType)}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
                              œ“ {language === 'fr' ? 'Idéal Pour :' : 'Best For:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.morning.bestFor.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">
                              ✗ {language === 'fr' ? 'À Éviter :' : 'Avoid:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.morning.avoid.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {day.taskSequence.morning.planetalPhase && (
                          <p className="text-xs text-purple-600 dark:text-purple-400 mt-2 italic">
                            {translatePlanetalPhase(day.taskSequence.morning.planetalPhase)}
                          </p>
                        )}
                      </div>
                      
                      {/* Midday */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-blue-400">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-slate-900 dark:text-slate-100">
                            ˜€ï¸ {language === 'fr' ? 'Midi' : 'Midday'}
                          </h5>
                          <span className="text-xs bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded text-blue-800 dark:text-blue-200 font-medium">
                            {day.taskSequence.midday.timeRange}
                          </span>
                        </div>
                        
                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-3 font-medium">
                          {translateEnergyType(day.taskSequence.midday.energyType)}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
                              œ“ {language === 'fr' ? 'Idéal Pour :' : 'Best For:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.midday.bestFor.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">
                              ✗ {language === 'fr' ? 'À Éviter :' : 'Avoid:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.midday.avoid.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {day.taskSequence.midday.planetalPhase && (
                          <p className="text-xs text-purple-600 dark:text-purple-400 mt-2 italic">
                            {translatePlanetalPhase(day.taskSequence.midday.planetalPhase)}
                          </p>
                        )}
                      </div>
                      
                      {/* Afternoon */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-orange-400">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-slate-900 dark:text-slate-100">
                            † {language === 'fr' ? 'Apr¨s-midi' : 'Afternoon'}
                          </h5>
                          <span className="text-xs bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded text-orange-800 dark:text-orange-200 font-medium">
                            {day.taskSequence.afternoon.timeRange}
                          </span>
                        </div>
                        
                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-3 font-medium">
                          {translateEnergyType(day.taskSequence.afternoon.energyType)}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
                              œ“ {language === 'fr' ? 'Idéal Pour :' : 'Best For:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.afternoon.bestFor.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">
                              ✗ {language === 'fr' ? 'À Éviter :' : 'Avoid:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.afternoon.avoid.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {day.taskSequence.afternoon.planetalPhase && (
                          <p className="text-xs text-purple-600 dark:text-purple-400 mt-2 italic">
                            {translatePlanetalPhase(day.taskSequence.afternoon.planetalPhase)}
                          </p>
                        )}
                      </div>
                      
                      {/* Evening */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border-l-4 border-purple-400">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold text-slate-900 dark:text-slate-100">
                            ™ {language === 'fr' ? 'Soir' : 'Evening'}
                          </h5>
                          <span className="text-xs bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded text-purple-800 dark:text-purple-200 font-medium">
                            {day.taskSequence.evening.timeRange}
                          </span>
                        </div>
                        
                        <p className="text-sm text-purple-700 dark:text-purple-300 mb-3 font-medium">
                          {translateEnergyType(day.taskSequence.evening.energyType)}
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-3">
                          <div>
                            <p className="text-xs font-semibold text-green-700 dark:text-green-300 mb-1">
                              œ“ {language === 'fr' ? 'Idéal Pour :' : 'Best For:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.evening.bestFor.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-red-700 dark:text-red-300 mb-1">
                              ✗ {language === 'fr' ? 'À Éviter :' : 'Avoid:'}
                            </p>
                            <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                              {day.taskSequence.evening.avoid.map((task, i) => (
                                <li key={i}>• {translateTask(task)}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {day.taskSequence.evening.planetalPhase && (
                          <p className="text-xs text-purple-600 dark:text-purple-400 mt-2 italic">
                            {translatePlanetalPhase(day.taskSequence.evening.planetalPhase)}
                          </p>
                        )}
                      </div>
                      
                    </div>
                    
                    {/* Classical Wisdom */}
                    <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-700">
                      <p className="text-xs italic text-slate-500 dark:text-slate-400">
                        <span className="font-semibold">Classical teaching (Lesson 28):</span> "Li-kulli shay'in waqtun" 
                        (For everything there is a time) €” Success comes from right action at right time.
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Daily Tips */}
                <div className="space-y-3">
                  {day.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{tip}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={() => setSelectedDay(null)}
                  className="mt-4 w-full px-4 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors flex items-center justify-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
                >
                  <span>–²</span>
                  Close Details
                </button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
        <p className="text-sm text-amber-900 dark:text-amber-200">
          {t.ilmHuruf.reflectiveGuidance}
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// ELEMENT-BASED COLOR SYSTEM (Matching Istikhara)
// ============================================================================

const elementColors = {
  fire: {
    gradient: "from-red-600 via-orange-500 to-yellow-500",
    bgGradient: "from-red-900/20 via-orange-900/15 to-yellow-900/10",
    bgPattern: "from-red-500/5 via-orange-500/5 to-yellow-500/5",
    border: "border-red-400/50",
    text: "text-red-200",
    textBright: "text-red-100",
    progressColor: "#ef4444",
    progressGlow: "shadow-red-500/50",
    cardGlow: "shadow-xl shadow-red-500/20",
    glowRing: "ring-red-500/30",
    accentBg: "bg-red-500/20",
    hoverScale: "hover:shadow-2xl hover:shadow-red-500/30",
    pulseColor: "bg-red-500"
  },
  earth: {
    gradient: "from-amber-600 via-yellow-500 to-green-500",
    bgGradient: "from-amber-900/20 via-yellow-900/15 to-green-900/10",
    bgPattern: "from-amber-500/5 via-yellow-500/5 to-green-500/5",
    border: "border-amber-400/50",
    text: "text-amber-200",
    textBright: "text-amber-100",
    progressColor: "#f59e0b",
    progressGlow: "shadow-amber-500/50",
    cardGlow: "shadow-xl shadow-amber-500/20",
    glowRing: "ring-amber-500/30",
    accentBg: "bg-amber-500/20",
    hoverScale: "hover:shadow-2xl hover:shadow-amber-500/30",
    pulseColor: "bg-amber-500"
  },
  air: {
    gradient: "from-cyan-600 via-blue-500 to-indigo-500",
    bgGradient: "from-cyan-900/20 via-blue-900/15 to-indigo-900/10",
    bgPattern: "from-cyan-500/5 via-blue-500/5 to-indigo-500/5",
    border: "border-cyan-400/50",
    text: "text-cyan-200",
    textBright: "text-cyan-100",
    progressColor: "#06b6d4",
    progressGlow: "shadow-cyan-500/50",
    cardGlow: "shadow-xl shadow-cyan-500/20",
    glowRing: "ring-cyan-500/30",
    accentBg: "bg-cyan-500/20",
    hoverScale: "hover:shadow-2xl hover:shadow-cyan-500/30",
    pulseColor: "bg-cyan-500"
  },
  water: {
    gradient: "from-blue-600 via-indigo-500 to-purple-500",
    bgGradient: "from-blue-900/20 via-indigo-900/15 to-purple-900/10",
    bgPattern: "from-blue-500/5 via-indigo-500/5 to-purple-500/5",
    border: "border-blue-400/50",
    text: "text-blue-200",
    textBright: "text-blue-100",
    progressColor: "#3b82f6",
    progressGlow: "shadow-blue-500/50",
    cardGlow: "shadow-xl shadow-blue-500/20",
    glowRing: "ring-blue-500/30",
    accentBg: "bg-blue-500/20",
    hoverScale: "hover:shadow-2xl hover:shadow-blue-500/30",
    pulseColor: "bg-blue-500"
  }
};

// Helper function to get element key from ElementData
function getElementKey(element: { en: string; fr: string }): 'fire' | 'earth' | 'air' | 'water' {
  const enLower = element.en.toLowerCase();
  if (enLower === 'fire' || enLower === 'earth' || enLower === 'air' || enLower === 'water') {
    return enLower as 'fire' | 'earth' | 'air' | 'water';
  }
  return 'fire'; // fallback
}

// Helper component for Sacred Geometry Background
const SacredGeometryBackground = ({ colors }: { colors: typeof elementColors.fire }) => (
  <div className="absolute inset-0 opacity-40">
    <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
      <defs>
        <pattern id="sacred-pattern" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
          <circle cx="12.5" cy="12.5" r="8" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.6" />
          <circle cx="12.5" cy="12.5" r="5" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
          <circle cx="12.5" cy="12.5" r="2" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
          <path d="M 12.5 4.5 L 12.5 20.5 M 4.5 12.5 L 20.5 12.5" stroke="currentColor" strokeWidth="0.2" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100" height="100" fill="url(#sacred-pattern)" className={colors.text} />
    </svg>
  </div>
);

function DestinyResults({ results }: { results: any }) {
  const { t, language } = useLanguage();
  const [verseText, setVerseText] = useState<VerseText | null>(null);
  const [loadingVerse, setLoadingVerse] = useState(false);
  const [verseError, setVerseError] = useState<string | null>(null);

  // Fetch Quranic verse when quranResonance is available
  useEffect(() => {
    if (results?.quranResonance) {
      console.log('•Œ Fetching Quranic Resonance:', results.quranResonance);
      setLoadingVerse(true);
      setVerseError(null);
      setVerseText(null);
      
      const fetchVerse = async () => {
        const verse = await fetchQuranVerse(
          results.quranResonance.surahNumber,
          results.quranResonance.ayahNumber
        );
        
        if (verse) {
          console.log('œ… Successfully fetched verse:', verse);
          setVerseText(verse);
        } else {
          console.warn('š ï¸ Verse fetch returned null');
          setVerseError('Unable to load verse at this moment. Please refresh or visit Quran.com directly.');
        }
        setLoadingVerse(false);
      };
      
      fetchVerse().catch(err => {
        console.error('Œ Error fetching verse:', err);
        setVerseError(t?.errors?.verseLoadError || 'Unable to load verse text. Please try again.');
        setLoadingVerse(false);
      });
    }
  }, [results?.quranResonance]);

  // Safety check
  if (!results || !results.destiny) {
    return (
      <div className="text-center text-slate-500 dark:text-slate-400 py-8">
        Unable to calculate destiny. Please enter a name.
      </div>
    );
  }

  const station = results.destiny;
  
  // Debug log
  console.log('DestinyResults rendering. Has quranResonance?', !!results.quranResonance, results.quranResonance);
  
  // Extract language - already imported at top
  const isFr = language === 'fr';
  
  // Get localized station data
  const localizedStation = isFr && results.saghir in t.spiritualStations
    ? t.spiritualStations[results.saghir as keyof typeof t.spiritualStations]
    : station;
  
  return (
    <div className="space-y-6">
      {/* ========== NAME DESTINY RESULTS ========== */}
      {results.nameDestiny && (
        <div className="space-y-6">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/40 dark:to-purple-900/40 rounded-xl p-6 border-2 border-indigo-300 dark:border-indigo-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-7 h-7 text-indigo-700 dark:text-indigo-300" />
                <div>
                  <h2 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                    {t.nameDestiny.coreAnalysis}
                  </h2>
                  <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
                    {t.nameDestiny.coreAnalysisDesc}
                  </p>
                </div>
              </div>
              <InfoTooltip content={t.nameDestiny.motherNameInfo} />
            </div>
          </div>


          {/* Section 1: Core Numerology Values - Enhanced UI with Element-Based Theming */}
          <div className={`relative overflow-hidden bg-gradient-to-br ${(() => {
            const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
            const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
            return elementColors[userElementKey as keyof typeof elementColors].bgGradient;
          })()} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 ${(() => {
            const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
            const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
            return elementColors[userElementKey as keyof typeof elementColors].cardGlow;
          })()} border-2 ${(() => {
            const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
            const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
            return elementColors[userElementKey as keyof typeof elementColors].border;
          })()} transition-all duration-700 ${(() => {
            const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
            const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
            return elementColors[userElementKey as keyof typeof elementColors].hoverScale;
          })()}`}>
            
            {/* Sacred Geometry Background */}
            <SacredGeometryBackground colors={(() => {
              const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
              const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
              return elementColors[userElementKey as keyof typeof elementColors];
            })()} />
            
            {/* Floating Sparkle Effects */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 animate-pulse">
              <Sparkles className={`w-5 h-5 sm:w-6 sm:h-6 ${(() => {
                const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
                const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
                return elementColors[userElementKey as keyof typeof elementColors].text;
              })()} ${(() => {
                const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
                const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
                return elementColors[userElementKey as keyof typeof elementColors].progressGlow;
              })()}`} />
            </div>

            {/* Main Content */}
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center md:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Star className={`w-7 h-7 sm:w-8 sm:h-8 ${(() => {
                    const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
                    const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
                    return elementColors[userElementKey as keyof typeof elementColors].textBright;
                  })()}`} />
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {t.nameDestiny.nameChart.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 mt-1">
                      {t.nameDestiny.nameChart.subtitle}
                    </p>
                  </div>
                </div>
                <div className="hidden md:block h-12 w-px bg-gradient-to-b from-white/20 to-white/10" />
              </div>

              {/* Enhanced Grid: Total, Saghir, Element, Burj with glassmorphism */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
                {/* Total Ḥadad Kabīr */}
                <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 flex flex-col items-center transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                    {t.nameDestiny.nameChart.total}
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1">
                    {results.nameDestiny.totalKabir}
                  </div>
                  {results.nameDestiny.motherKabir > 0 && (
                    <div className="text-xs text-white/60 mt-1">
                      ({results.nameDestiny.personKabir} + {results.nameDestiny.motherKabir})
                    </div>
                  )}
                </div>

                {/* Digital Root (Ṣaghīr) */}
                <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 flex flex-col items-center transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                    {t.nameDestiny.nameChart.saghir}
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white mb-1">
                    {results.nameDestiny.saghir}
                  </div>
                </div>

                {/* Element (Ṭabʿ) - YOUR PERSONAL ELEMENT with enhanced styling */}
                <div className={`group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 ${(() => {
                  const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
                  const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
                  return elementColors[userElementKey as keyof typeof elementColors].border;
                })()} flex flex-col items-center transition-all duration-300 hover:bg-white/20 hover:scale-105 relative overflow-hidden`}>
                  {/* Glow effect */}
                  <div className={`absolute inset-0 ${(() => {
                    const userElement = (isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en).toLowerCase();
                    const userElementKey = userElement === 'feu' ? 'fire' : userElement === 'eau' ? 'water' : userElement === 'terre' ? 'earth' : userElement;
                    return elementColors[userElementKey as keyof typeof elementColors].accentBg;
                  })()} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 w-full flex flex-col items-center">
                    <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                      {t.nameDestiny.nameChart.tabh}
                    </div>
                    <div className="text-[10px] text-white/50 mb-1">
                      ({isFr ? 'Votre élément personnel' : 'YOUR Personal Element'})
                    </div>
                    <span className="text-4xl sm:text-5xl mb-2">{results.nameDestiny.element.icon}</span>
                    <div className="text-xl sm:text-2xl font-bold text-white">
                      {isFr ? results.nameDestiny.element.fr : results.nameDestiny.element.en}
                    </div>
                    <div className="text-xs text-white/70 mt-1">
                      {isFr ? results.nameDestiny.element.qualityFr : results.nameDestiny.element.qualityEn}
                    </div>
                  </div>
                </div>

                {/* Burj (Zodiac) */}
                <div className="group bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20 flex flex-col items-center transition-all duration-300 hover:bg-white/20 hover:scale-105">
                  <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                    {t.nameDestiny.nameChart.burj}
                  </div>
                  <span className="text-4xl sm:text-5xl mb-2">{results.nameDestiny.burj.symbol}</span>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {isFr ? results.nameDestiny.burj.fr : results.nameDestiny.burj.en}
                  </div>
                  <div className="text-xs text-white/70 font-arabic mb-1">
                    {results.nameDestiny.burj.ar}
                  </div>
                  <div className="text-xs text-white/60 italic mt-1 text-center">
                    {isFr ? results.nameDestiny.burj.qualityFr : results.nameDestiny.burj.qualityEn}
                  </div>
                </div>
              </div>

              {/* Enhanced Row: Planet, Day, Hour with glassmorphism */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                    {t.nameDestiny.nameChart.planet}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {results.nameDestiny.burj.planet}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2">
                    {t.nameDestiny.nameChart.day}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {isFr ? results.nameDestiny.burj.dayFr : results.nameDestiny.burj.dayEn}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-5 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="text-xs uppercase tracking-wider text-white/70 font-semibold mb-2 flex items-center justify-center gap-1">
                    {t.nameDestiny.nameChart.hour}
                    <span className="relative group/tooltip">
                      <Info className="h-3 w-3 text-white/50 cursor-help" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-slate-900 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none z-10">
                        {t.nameDestiny.nameChart.hourTip}
                      </div>
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {results.nameDestiny.hourIndex}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Element Inheritance (if mother's name provided) - Enhanced UI */}
          {results.nameDestiny.foundation && (
            <>
              {/* ========== INHERITED INFLUENCES SECTION (Mother's Name Impact) ========== */}
              <div className="relative overflow-hidden bg-gradient-to-r from-rose-100 to-pink-100 dark:from-rose-900/40 dark:to-pink-900/40 rounded-2xl sm:rounded-3xl p-4 sm:p-6 mt-6 mb-4 border-2 border-rose-300 dark:border-rose-600 shadow-xl hover:shadow-2xl transition-all duration-700">
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-300 rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-rose-700 dark:text-rose-300" />
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-rose-900 dark:text-rose-100">
                        {t.nameDestiny.inheritedInfluences}
                      </h2>
                      <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300 mt-0.5">
                        {t.nameDestiny.inheritedInfluencesDesc}
                      </p>
                    </div>
                  </div>
                  <InfoTooltip content={t.nameDestiny.motherNameExplanation} />
                </div>
              </div>

              <div className={`relative overflow-hidden bg-gradient-to-br ${(() => {
                // Determine which element pair we're working with
                const expressionElem = isFr ? results.nameDestiny.expression.fr : results.nameDestiny.expression.en;
                const foundationElem = isFr ? results.nameDestiny.foundation.fr : results.nameDestiny.foundation.en;
                
                // Normalize to English element names
                const normalizeElement = (elem: string) => {
                  if (elem === 'Feu' || elem === 'Fire') return 'fire';
                  if (elem === 'Eau' || elem === 'Water') return 'water';
                  if (elem === 'Air') return 'air';
                  if (elem === 'Terre' || elem === 'Earth') return 'earth';
                  return elem.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                };
                
                const expr = normalizeElement(expressionElem);
                const found = normalizeElement(foundationElem);
                
                // Create a blended gradient based on both elements
                if (expr === found) {
                  return elementColors[expr].bgGradient;
                } else {
                  // Blend the two element colors
                  const color1 = elementColors[expr].bgGradient.split(' ')[0];
                  const color2 = elementColors[found].bgGradient.split(' ')[2];
                  return `${color1} via-purple-900/15 ${color2}`;
                }
              })()} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl hover:shadow-2xl border-2 border-rose-200 dark:border-rose-700 transition-all duration-700`}>
                
                {/* Sacred Geometry Background - Dual element blend */}
                <div className="absolute inset-0 opacity-30">
                  <svg className="w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern id="inheritance-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                        <circle cx="10" cy="10" r="6" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.6" />
                        <circle cx="10" cy="10" r="3" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.4" />
                        <line x1="10" y1="4" x2="10" y2="16" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
                        <line x1="4" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#inheritance-pattern)" className="text-rose-300 dark:text-rose-500" />
                  </svg>
                </div>
                
                {/* Floating Heart Icon */}
                <div className="absolute top-6 right-6 animate-pulse">
                  <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 dark:text-rose-500 opacity-60" />
                </div>

                <div className="relative z-10">
                  <div className="text-center mb-6 sm:mb-8">
                    <div className="text-xs sm:text-sm uppercase tracking-wider text-rose-700 dark:text-rose-300 font-semibold mb-3 sm:mb-4">
                      {t.nameDestiny.origin.inheritance}
                    </div>
              <div className="flex items-center justify-center gap-6 mb-3">
                {/* Expression (Person) */}
                <div className="text-center">
                  <div className="text-xs text-rose-600 dark:text-rose-400 mb-1 font-semibold">
                    {t.nameDestiny.origin.expression}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{results.nameDestiny.expression.icon}</span>
                    <span className="text-lg font-bold text-rose-900 dark:text-rose-100">
                      {isFr ? results.nameDestiny.expression.fr : results.nameDestiny.expression.en}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-3xl text-rose-400">†”</div>

                {/* Foundation (Mother) */}
                <div className="text-center">
                  <div className="text-xs text-rose-600 dark:text-rose-400 mb-1 font-semibold">
                    {t.nameDestiny.origin.foundation}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{results.nameDestiny.foundation.icon}</span>
                    <span className="text-lg font-bold text-rose-900 dark:text-rose-100">
                      {isFr ? results.nameDestiny.foundation.fr : results.nameDestiny.foundation.en}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Element Harmony Badge - Enhanced with glassmorphism */}
              {(() => {
                const expressionElem = isFr ? results.nameDestiny.expression.fr : results.nameDestiny.expression.en;
                const foundationElem = isFr ? results.nameDestiny.foundation.fr : results.nameDestiny.foundation.en;
                
                let harmonyType = '';
                let harmonyIcon = '';
                let harmonyColor = '';
                let harmonyBg = '';
                let harmonyGlow = '';
                
                if (expressionElem === foundationElem) {
                  harmonyType = t.nameDestiny.nameChart.unified;
                  harmonyIcon = '🌟';
                  harmonyColor = 'text-purple-900 dark:text-purple-100';
                  harmonyBg = 'bg-purple-100/80 dark:bg-purple-900/40';
                  harmonyGlow = 'shadow-lg shadow-purple-500/30';
                } else if (
                  (expressionElem === 'Fire' || expressionElem === 'Feu') && (foundationElem === 'Air' || foundationElem === 'Air') ||
                  (expressionElem === 'Air' || expressionElem === 'Air') && (foundationElem === 'Fire' || foundationElem === 'Feu') ||
                  (expressionElem === 'Water' || expressionElem === 'Eau') && (foundationElem === 'Earth' || foundationElem === 'Terre') ||
                  (expressionElem === 'Earth' || expressionElem === 'Terre') && (foundationElem === 'Water' || foundationElem === 'Eau')
                ) {
                  harmonyType = t.nameDestiny.nameChart.harmonious;
                  harmonyIcon = '✨';
                  harmonyColor = 'text-emerald-900 dark:text-emerald-100';
                  harmonyBg = 'bg-emerald-100/80 dark:bg-emerald-900/40';
                  harmonyGlow = 'shadow-lg shadow-emerald-500/30';
                } else if (
                  (expressionElem === 'Fire' || expressionElem === 'Feu') && (foundationElem === 'Earth' || foundationElem === 'Terre') ||
                  (expressionElem === 'Earth' || expressionElem === 'Terre') && (foundationElem === 'Air' || foundationElem === 'Air') ||
                  (expressionElem === 'Air' || expressionElem === 'Air') && (foundationElem === 'Water' || foundationElem === 'Eau') ||
                  (expressionElem === 'Water' || expressionElem === 'Eau') && (foundationElem === 'Fire' || foundationElem === 'Feu')
                ) {
                  harmonyType = t.nameDestiny.nameChart.nourishing;
                  harmonyIcon = '🌱';
                  harmonyColor = 'text-blue-900 dark:text-blue-100';
                  harmonyBg = 'bg-blue-100/80 dark:bg-blue-900/40';
                  harmonyGlow = 'shadow-lg shadow-blue-500/30';
                } else {
                  harmonyType = t.nameDestiny.nameChart.transformative;
                  harmonyIcon = '⚡';
                  harmonyColor = 'text-amber-900 dark:text-amber-100';
                  harmonyBg = 'bg-amber-100/80 dark:bg-amber-900/40';
                  harmonyGlow = 'shadow-lg shadow-amber-500/30';
                }
                
                return (
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-xs text-rose-600 dark:text-rose-400 font-semibold uppercase tracking-wide">
                      {t.nameDestiny.nameChart.elementHarmony}
                    </div>
                    <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-md border-2 text-sm sm:text-base font-bold ${harmonyColor} ${harmonyBg} ${harmonyGlow} border-white/30 transition-all duration-300 hover:scale-105`}>
                      <span className="text-xl sm:text-2xl">{harmonyIcon}</span>
                      <span>{harmonyType}</span>
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Enhanced Inheritance Insight Card with multi-layer depth */}
            {results.motherAnalysis && (
              <div className="relative overflow-hidden bg-gradient-to-br from-white/60 to-rose-50/60 dark:from-slate-800/60 dark:to-rose-900/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-rose-200 dark:border-rose-700 shadow-lg mt-6">
                {/* Subtle pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-20 h-20 bg-rose-300 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-pink-300 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">
                        {t.nameDestiny.origin.insight}
                      </h4>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                        {(() => {
                          const userElement = (isFr ? results.nameDestiny.expression.fr : results.nameDestiny.expression.en) as 'Fire' | 'Water' | 'Air' | 'Earth' | 'Feu' | 'Eau' | 'Terre';
                          const normalizedUserElement = 
                            userElement === 'Feu' ? 'Fire' :
                            userElement === 'Eau' ? 'Water' :
                            userElement === 'Terre' ? 'Earth' :
                            userElement as 'Fire' | 'Water' | 'Air' | 'Earth';
                          
                          if (language === 'fr' && t.inheritanceSame && t.inheritanceCompatible && t.inheritanceOpposing) {
                            const motherEl = results.motherAnalysis.element;
                            if (normalizedUserElement === motherEl) {
                              return t.inheritanceSame.replace('{element}', 
                                normalizedUserElement === 'Fire' ? t.elements.fire :
                                normalizedUserElement === 'Water' ? t.elements.water :
                                normalizedUserElement === 'Air' ? t.elements.air :
                                t.elements.earth
                              );
                            }
                            const compatKey = `${normalizedUserElement.toLowerCase()}${motherEl.charAt(0).toUpperCase()}${motherEl.slice(1).toLowerCase()}` as keyof typeof t.inheritanceCompatible;
                            if (t.inheritanceCompatible[compatKey]) {
                              return t.inheritanceCompatible[compatKey];
                            }
                            const opposKey = `${normalizedUserElement.toLowerCase()}${motherEl.charAt(0).toUpperCase()}${motherEl.slice(1).toLowerCase()}` as keyof typeof t.inheritanceOpposing;
                            if (t.inheritanceOpposing[opposKey]) {
                              return t.inheritanceOpposing[opposKey];
                            }
                          }
                          return generateInheritanceInsight(normalizedUserElement, results.motherAnalysis.element);
                        })()}
                      </p>
                    </div>
                  </div>

                  {/* Additional metadata */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-rose-200 dark:border-rose-800">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-100 dark:bg-rose-900/40 rounded-full text-xs font-medium text-rose-800 dark:text-rose-200">
                      <span>📊</span>
                      <span>{t.nameDestiny.origin.kabir}: {results.motherAnalysis.kabir}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-100 dark:bg-rose-900/40 rounded-full text-xs font-medium text-rose-800 dark:text-rose-200">
                      <span>✨</span>
                      <span>{t.nameDestiny.origin.saghir}: {results.motherAnalysis.saghir}</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-rose-100 dark:bg-rose-900/40 rounded-full text-xs font-medium text-rose-800 dark:text-rose-200">
                      <span>🔢</span>
                      <span>{t.nameDestiny.origin.hadath}: {results.motherAnalysis.hadath}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </>
    )}

          {/* Disclaimer */}
          <div className="mt-4 text-xs text-center text-indigo-600 dark:text-indigo-400 italic">
            {t.nameDestiny.disclaimer.reflectionOnly}
          </div>
        </div>
      )}

      {/* Section 2: Element Distribution Chart */}
      {results.nameDestiny && results.nameDestiny.arabicName && (
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-teal-200 dark:border-teal-700 shadow-2xl hover:shadow-3xl transition-all duration-700">
          
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {/* Sacred Geometry Background for Letter Analysis */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="letter-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                  <rect x="2" y="2" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4" />
                  <circle cx="7.5" cy="7.5" r="4" fill="none" stroke="currentColor" strokeWidth="0.2" opacity="0.3" />
                  <path d="M 7.5 3.5 L 7.5 11.5 M 3.5 7.5 L 11.5 7.5" stroke="currentColor" strokeWidth="0.2" opacity="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#letter-pattern)" className="text-teal-400" />
            </svg>
          </div>
          
          {/* Floating Element Icons */}
          <div className="absolute top-6 right-6 flex gap-2 animate-pulse">
            <span className="text-2xl opacity-60">🔥</span>
            <span className="text-2xl opacity-60" style={{ animationDelay: '0.3s' }}>💨</span>
            <span className="text-2xl opacity-60" style={{ animationDelay: '0.6s' }}>💧</span>
            <span className="text-2xl opacity-60" style={{ animationDelay: '0.9s' }}>🌍</span>
          </div>

          <div className="relative z-10">
            {/* Header with enhanced styling */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-teal-900 dark:text-teal-100">
                  {t.nameDestiny.elementChart.title}
                </h3>
                <p className="text-sm sm:text-base text-teal-700 dark:text-teal-300 mt-1">
                  {t.nameDestiny.elementChart.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-teal-600 dark:text-teal-400 italic mt-1">
                  {isFr ? '(Composition des lettres du nom - à titre informatif)' : '(Name letter composition - informational only)'}
                </p>
              </div>
            </div>

            {(() => {
              // Calculate element distribution for the name
              const elementDist = calculateElementDistribution(results.nameDestiny.arabicName);
              
              // Find dominant element
              let dominantElement: 'fire' | 'air' | 'water' | 'earth' = 'fire';
              let maxPercentage = 0;
              
              Object.entries(elementDist).forEach(([elem, pct]) => {
                if (pct > maxPercentage) {
                  maxPercentage = pct;
                  dominantElement = elem as 'fire' | 'air' | 'water' | 'earth';
                }
              });

              // Element visual config with enhanced gradients
              const elementConfig = {
                fire: { 
                  icon: '🔥', 
                  color: 'text-red-600 dark:text-red-400', 
                  bg: 'bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30',
                  bar: 'bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500',
                  glow: 'shadow-lg shadow-red-500/30',
                  border: 'border-red-300 dark:border-red-700'
                },
                air: { 
                  icon: '💨', 
                  color: 'text-sky-600 dark:text-sky-400', 
                  bg: 'bg-gradient-to-br from-sky-100 to-cyan-100 dark:from-sky-900/30 dark:to-cyan-900/30',
                  bar: 'bg-gradient-to-r from-sky-500 via-cyan-500 to-blue-500',
                  glow: 'shadow-lg shadow-sky-500/30',
                  border: 'border-sky-300 dark:border-sky-700'
                },
                water: { 
                  icon: '💧', 
                  color: 'text-blue-600 dark:text-blue-400', 
                  bg: 'bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30',
                  bar: 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500',
                  glow: 'shadow-lg shadow-blue-500/30',
                  border: 'border-blue-300 dark:border-blue-700'
                },
                earth: { 
                  icon: '🌍', 
                  color: 'text-amber-600 dark:text-amber-400', 
                  bg: 'bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30',
                  bar: 'bg-gradient-to-r from-amber-600 via-yellow-500 to-green-500',
                  glow: 'shadow-lg shadow-amber-500/30',
                  border: 'border-amber-300 dark:border-amber-700'
                }
              };

              return (
                <>
                  {/* Element Bars with Enhanced Styling */}
                  <div className="space-y-4 sm:space-y-5 mb-8">
                    {Object.entries(elementDist).map(([elem, pct]) => {
                      const config = elementConfig[elem as keyof typeof elementConfig];
                      const elemName = elem as 'fire' | 'air' | 'water' | 'earth';
                      const displayName = isFr ? t.nameDestiny.elementChart[elemName].name : elem.charAt(0).toUpperCase() + elem.slice(1);
                      const isDominant = elem === dominantElement;
                      
                      return (
                        <div 
                          key={elem} 
                          className={`group relative overflow-hidden ${config.bg} backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 ${config.border} ${config.glow} transition-all duration-300 hover:scale-[1.02] ${isDominant ? 'ring-2 ring-offset-2 ring-teal-500 dark:ring-offset-slate-900' : ''}`}
                        >
                          {/* Dominant badge */}
                          {isDominant && (
                            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 px-2 py-1 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-xs font-bold rounded-full shadow-lg animate-pulse">
                              {language === 'fr' ? 'DOMINANT' : 'DOMINANT'}
                            </div>
                          )}
                          
                          <div className="relative z-10">
                            {/* Element Header */}
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-2 sm:gap-3">
                                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${config.bg} rounded-xl flex items-center justify-center shadow-md border-2 ${config.border}`}>
                                  <span className="text-2xl sm:text-3xl">{config.icon}</span>
                                </div>
                                <div>
                                  <div className={`text-base sm:text-lg font-bold ${config.color}`}>
                                    {displayName}
                                  </div>
                                  <div className="text-xs text-slate-600 dark:text-slate-400">
                                    {isFr ? t.nameDestiny.elementChart[elemName].name : ''}
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className={`text-2xl sm:text-3xl font-bold ${config.color}`}>
                                  {pct}%
                                </div>
                                <div className="text-xs text-slate-600 dark:text-slate-400">
                                  {language === 'fr' ? 'des lettres' : 'of letters'}
                                </div>
                              </div>
                            </div>
                            
                            {/* Enhanced Progress Bar with Glow */}
                            <div className="relative">
                              <div className="w-full bg-white/50 dark:bg-slate-700/50 rounded-full h-4 sm:h-5 shadow-inner overflow-hidden">
                                <div 
                                  className={`${config.bar} h-full rounded-full transition-all duration-1000 ease-out ${config.glow} relative overflow-hidden`}
                                  style={{ width: `${pct}%` }}
                                >
                                  {/* Animated shine effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                                </div>
                              </div>
                              {/* Percentage markers */}
                              <div className="flex justify-between mt-1 text-xs text-slate-500 dark:text-slate-500">
                                <span>0%</span>
                                <span>25%</span>
                                <span>50%</span>
                                <span>75%</span>
                                <span>100%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Dominant Element Analysis - Enhanced Card */}
                  <div className={`relative overflow-hidden ${elementConfig[dominantElement].bg} backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 ${elementConfig[dominantElement].border} ${elementConfig[dominantElement].glow} shadow-2xl`}>
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-6">
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 ${elementConfig[dominantElement].bg} rounded-2xl flex items-center justify-center shadow-lg border-2 ${elementConfig[dominantElement].border}`}>
                          <span className="text-4xl sm:text-5xl">{elementConfig[dominantElement].icon}</span>
                        </div>
                        <div className="flex-1">
                          <div className="text-xs uppercase tracking-wider font-semibold text-slate-600 dark:text-slate-400 mb-1">
                            {t.nameDestiny.elementChart.dominant}
                          </div>
                          <div className={`text-2xl sm:text-3xl font-bold ${elementConfig[dominantElement].color}`}>
                            {isFr ? t.nameDestiny.elementChart[dominantElement].name : dominantElement.charAt(0).toUpperCase() + dominantElement.slice(1)} ({maxPercentage}%)
                          </div>
                        </div>
                      </div>
                      
                      {/* Grid Layout for Personality & Dhikr */}
                      <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                        {/* Personality Reflection */}
                        <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-white/30">
                          <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                            <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                            <span>{t.nameDestiny.elementChart.personality}</span>
                          </div>
                          <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed">
                            {t.nameDestiny.elementChart[dominantElement].personality}
                          </p>
                        </div>

                        {/* Balancing Dhikr */}
                        <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 backdrop-blur-sm rounded-xl p-4 sm:p-5 border-2 border-emerald-300 dark:border-emerald-700 shadow-lg">
                          <div className="flex items-center gap-2 text-sm font-semibold text-emerald-900 dark:text-emerald-100 mb-3">
                            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span>{t.nameDestiny.elementChart.balancingDhikr}</span>
                          </div>
                          <div className="space-y-3">
                            <div className="text-center p-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                              <p className="text-xl sm:text-2xl font-bold text-emerald-900 dark:text-emerald-100 font-arabic mb-1">
                                {t.nameDestiny.elementChart.dhikr[dominantElement]}
                              </p>
                              <p className="text-xs text-emerald-700 dark:text-emerald-300">
                                {language === 'fr' ? 'Récitez régulièrement pour l\'équilibre' : 'Recite regularly for balance'}
                              </p>
                            </div>
                            
                            {/* Practice Tips */}
                            <div className="flex items-start gap-2 text-xs text-emerald-800 dark:text-emerald-200">
                              <Sparkles className="w-4 h-4 flex-shrink-0 mt-0.5" />
                              <span>
                                {(() => {
                                  if (dominantElement === 'fire') return language === 'fr' ? 'Calme l\'intensité excessive' : 'Calms excessive intensity';
                                  if (dominantElement === 'air') return language === 'fr' ? 'Ancre la pensée dispersée' : 'Grounds scattered thinking';
                                  if (dominantElement === 'water') return language === 'fr' ? 'Apporte chaleur et clarté' : 'Brings warmth and clarity';
                                  if (dominantElement === 'earth') return language === 'fr' ? 'Ajoute légèreté et flexibilité' : 'Adds lightness and flexibility';
                                  return '';
                                })()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Important Note about Letter Composition */}
                      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-start gap-3">
                          <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                          <div className="flex-1">
                            <p className="text-sm text-blue-900 dark:text-blue-100 font-semibold mb-1">
                              {language === 'fr' ? 'Note Importante' : 'Important Note'}
                            </p>
                            <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                              {language === 'fr' 
                                ? 'Cette analyse montre la composition des lettres de votre nom (à titre informatif). Votre élément PERSONNEL (Ṭabʿ) ci-dessus est votre véritable essence spirituelle et est utilisé pour toutes les analyses principales.'
                                : 'This analysis shows your name\'s letter composition (informational only). Your PERSONAL element (Ṭabʿ) above is your true spiritual essence and is used for all main analyses.'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })()}

            {/* Disclaimer */}
            <div className="mt-6 text-xs sm:text-sm text-center text-teal-600 dark:text-teal-400 italic">
              {t.nameDestiny.disclaimer.reflectionOnly}
            </div>
          </div>
        </div>
      )}

      {/* Section 4: Temperament & Personality Profile - Based on YOUR Tab' Element */}
      {results.nameDestiny && (() => {
        const [showFullProfile, setShowFullProfile] = useState(false);
        
        return (
          <div className={`relative overflow-hidden bg-gradient-to-br ${(() => {
            const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
            return elementColors[userElement].bgGradient;
          })()} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 ${(() => {
            const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
            return elementColors[userElement].border;
          })()} ${(() => {
            const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
            return elementColors[userElement].cardGlow;
          })()} shadow-2xl hover:shadow-3xl transition-all duration-700`}>
            
            {/* Sacred Geometry Background */}
            <SacredGeometryBackground colors={(() => {
              const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
              return elementColors[userElement];
            })()} />
            
            {/* Animated Floating Orbs */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className={`absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl animate-pulse ${(() => {
                const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                return elementColors[userElement].pulseColor;
              })()}`}></div>
              <div className={`absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl animate-pulse ${(() => {
                const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                return elementColors[userElement].pulseColor;
              })()}`} style={{ animationDelay: '1s' }}></div>
            </div>
            
            {/* Sparkles in Corner */}
            <div className="absolute top-6 right-6 animate-pulse">
              <Sparkles className={`w-6 h-6 sm:w-8 sm:h-8 ${(() => {
                const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                return elementColors[userElement].text;
              })()} ${(() => {
                const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                return elementColors[userElement].progressGlow;
              })()}`} />
            </div>

            <div className="relative z-10">
              {/* Header Section with Element Badge */}
              <div className="mb-6 sm:mb-8">
                {/* Element Badge - Prominent Display */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 mb-6">
                  {/* Large Element Icon Card */}
                  <div className={`group relative bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 ${(() => {
                    const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                    return elementColors[userElement].border;
                  })()} shadow-lg hover:scale-105 transition-all duration-300`}>
                    {/* Glow effect */}
                    <div className={`absolute inset-0 ${(() => {
                      const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                      return elementColors[userElement].accentBg;
                    })()} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`} />
                    
                    <div className="relative z-10 text-center">
                      <span className="text-6xl sm:text-7xl md:text-8xl block mb-3">
                        {results.nameDestiny.element.icon}
                      </span>
                      <div className="text-sm uppercase tracking-wider text-white/70 font-semibold mb-2">
                        {language === 'fr' ? 'Votre Élément Personnel' : 'Your Personal Element'}
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {language === 'fr' ? results.nameDestiny.element.fr : results.nameDestiny.element.en}
                      </div>
                      <div className="text-sm text-white/70">
                        {language === 'fr' ? results.nameDestiny.element.qualityFr : results.nameDestiny.element.qualityEn}
                      </div>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                      <User className="w-4 h-4 text-white" />
                      <span className="text-xs uppercase tracking-wider text-white font-semibold">
                        {language === 'fr' ? 'Profil Basé sur Votre Essence' : 'Profile Based on Your Essence'}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                      {language === 'fr' ? 'Profil de Tempérament & Personnalité' : 'Temperament & Personality Profile'}
                    </h3>
                    
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl">
                      {language === 'fr' 
                        ? 'Votre profil basé sur VOTRE élément personnel (Ṭabʿ) - votre véritable essence spirituelle'
                        : 'Your profile based on YOUR personal element (Ṭabʿ) - your true spiritual essence'}
                    </p>
                    
                    {/* Info Card */}
                    <div className="mt-4 p-4 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl border border-white/20">
                      <div className="flex items-start gap-3">
                        <Info className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <p className="text-xs sm:text-sm text-white/80 leading-relaxed text-left">
                          {language === 'fr' 
                            ? 'Ce profil reflète votre véritable nature basée sur votre élément personnel (Ṭabʿ), pas sur la composition des lettres de votre nom.'
                            : 'This profile reflects your true nature based on your personal element (Ṭabʿ), not your name letter composition.'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Compact Core Insights Grid */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {/* Core Qualities Card */}
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${(() => {
                      const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                      return elementColors[userElement].accentBg;
                    })()}`}>
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {language === 'fr' ? 'Qualités Essentielles' : 'Core Qualities'}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {(() => {
                      const element = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                      const qualities = {
                        fire: language === 'fr' 
                          ? ['Passionné et énergique', 'Leader naturel', 'Courageux et audacieux', 'Spontané et direct']
                          : ['Passionate and energetic', 'Natural leader', 'Courageous and bold', 'Spontaneous and direct'],
                        air: language === 'fr'
                          ? ['Intellectuel et curieux', 'Communicatif', 'Adaptable et flexible', 'Créatif et innovant']
                          : ['Intellectual and curious', 'Communicative', 'Adaptable and flexible', 'Creative and innovative'],
                        water: language === 'fr'
                          ? ['Émotionnellement intuitif', 'Empathique et compatissant', 'Profondément réflexif', 'Artistiquement sensible']
                          : ['Emotionally intuitive', 'Empathetic and compassionate', 'Deeply reflective', 'Artistically sensitive'],
                        earth: language === 'fr'
                          ? ['Stable et fiable', 'Pratique et réaliste', 'Patient et persévérant', 'Ancré et sécurisant']
                          : ['Stable and reliable', 'Practical and realistic', 'Patient and persevering', 'Grounded and secure']
                      };
                      
                      return qualities[element].map((quality, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                          <span className={`${(() => {
                            const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                            return elementColors[userElement].textBright;
                          })()}`}>✦</span>
                          <span>{quality}</span>
                        </li>
                      ));
                    })()}
                  </ul>
                </div>

                {/* Growth Areas Card */}
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${(() => {
                      const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                      return elementColors[userElement].accentBg;
                    })()}`}>
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-white">
                      {language === 'fr' ? 'Zones de Croissance' : 'Growth Areas'}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {(() => {
                      const element = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                      const growthAreas = {
                        fire: language === 'fr'
                          ? ['Cultiver la patience', 'Écouter avant d\'agir', 'Gérer l\'impulsivité', 'Équilibrer intensité']
                          : ['Cultivate patience', 'Listen before acting', 'Manage impulsiveness', 'Balance intensity'],
                        air: language === 'fr'
                          ? ['Ancrer dans le présent', 'Finir ce qui est commencé', 'Approfondir les connexions', 'Équilibrer logique/émotion']
                          : ['Ground in the present', 'Finish what you start', 'Deepen connections', 'Balance logic/emotion'],
                        water: language === 'fr'
                          ? ['Établir des limites', 'Gérer la sensibilité excessive', 'Agir malgré les doutes', 'Équilibrer donner/recevoir']
                          : ['Set boundaries', 'Manage over-sensitivity', 'Act despite doubts', 'Balance giving/receiving'],
                        earth: language === 'fr'
                          ? ['Embrasser le changement', 'Être plus flexible', 'Exprimer les émotions', 'Risquer et explorer']
                          : ['Embrace change', 'Be more flexible', 'Express emotions', 'Take risks and explore']
                      };
                      
                      return growthAreas[element].map((area, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-white/90">
                          <span className={`${(() => {
                            const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                            return elementColors[userElement].textBright;
                          })()}`}>→</span>
                          <span>{area}</span>
                        </li>
                      ));
                    })()}
                  </ul>
                </div>
              </div>

              {/* Toggle Button for Full Profile */}
              <div className="text-center mb-6">
                <button
                  onClick={() => setShowFullProfile(!showFullProfile)}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl border-2 border-white/30 text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
                >
                  {showFullProfile ? (
                    <>
                      <Minus className="w-5 h-5" />
                      <span>{language === 'fr' ? 'Voir Moins' : 'See Less'}</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      <span>{language === 'fr' ? 'Voir le Profil Complet' : 'See Full Profile'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Collapsible Full Profile Section */}
              {showFullProfile && (
                <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 border border-white/20 shadow-inner mb-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  <TemperamentDisplay 
                    element={
                      results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth'
                    }
                    compact={false}
                    showCareer={true}
                    showPsychology={true}
                  />
                </div>
              )}

              {/* Balancing Practice Card - Always Visible */}
              <div className={`bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/40 dark:to-teal-900/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-emerald-300 dark:border-emerald-700 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">
                      {language === 'fr' ? 'Pratique d\'Équilibrage' : 'Balancing Practice'}
                    </h4>
                    <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 mb-3">
                      <p className="text-xl sm:text-2xl font-bold text-emerald-900 dark:text-emerald-100 text-center font-arabic mb-2">
                        {(() => {
                          const element = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                          return t.nameDestiny.elementChart.dhikr[element];
                        })()}
                      </p>
                      <p className="text-xs sm:text-sm text-center text-emerald-700 dark:text-emerald-300">
                        {language === 'fr' ? 'Récitez quotidiennement pour équilibrer votre élément' : 'Recite daily to balance your element'}
                      </p>
                    </div>
                    <p className="text-sm text-emerald-800 dark:text-emerald-200 leading-relaxed">
                      {(() => {
                        const element = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'air' | 'water' | 'earth';
                        const practices = {
                          fire: language === 'fr'
                            ? 'Lorsque vous vous sentez trop intense ou impatient, cette invocation apporte calme et douceur à votre nature ardente.'
                            : 'When feeling too intense or impatient, this invocation brings calm and gentleness to your fiery nature.',
                          air: language === 'fr'
                            ? 'Lorsque vos pensées sont dispersées ou que vous vous sentez déconnecté, cette invocation apporte sagesse et ancrage.'
                            : 'When thoughts are scattered or feeling disconnected, this invocation brings wisdom and grounding.',
                          water: language === 'fr'
                            ? 'Lorsque vous êtes submergé émotionnellement ou que vous absorbez trop des autres, cette invocation apporte lumière et clarté.'
                            : 'When emotionally overwhelmed or absorbing too much from others, this invocation brings light and clarity.',
                          earth: language === 'fr'
                            ? 'Lorsque vous êtes coincé dans la routine ou résistez au changement, cette invocation apporte ouverture et nouveaux chemins.'
                            : 'When stuck in routine or resisting change, this invocation brings openness and new pathways.'
                        };
                        return practices[element];
                      })()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 text-xs sm:text-sm text-center text-white/70 italic">
                {t.nameDestiny.disclaimer.reflectionOnly}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Section 5: Spiritual & Color Resonance - ENHANCED */}
      {results.nameDestiny && (results.nameDestiny.divineNameResonance || results.nameDestiny.colorResonance) && (() => {
        const userElement = results.nameDestiny.element.en.toLowerCase() as 'fire' | 'water' | 'air' | 'earth';
        const colors = elementColors[userElement];
        
        // Color palette based on element
        const elementColorPalette: Record<string, Array<{ hex: string; name: string; meaning: string; usage: string }>> = {
          fire: [
            { hex: '#DC2626', name: isFr ? 'Rouge' : 'Red', meaning: isFr ? 'Passion et courage' : 'Passion and courage', usage: isFr ? 'Portez lors de moments nécessitant bravoure' : 'Wear during moments requiring bravery' },
            { hex: '#EA580C', name: isFr ? 'Orange' : 'Orange', meaning: isFr ? 'Créativité et enthousiasme' : 'Creativity and enthusiasm', usage: isFr ? 'Favorise expression créative' : 'Promotes creative expression' },
            { hex: '#F59E0B', name: isFr ? 'Or' : 'Gold', meaning: isFr ? 'Illumination et réussite' : 'Illumination and success', usage: isFr ? 'Pour occasions importantes' : 'For important occasions' }
          ],
          air: [
            { hex: '#EAB308', name: isFr ? 'Jaune' : 'Yellow', meaning: isFr ? 'Clarté mentale' : 'Mental clarity', usage: isFr ? 'Pour concentration et étude' : 'For focus and study' },
            { hex: '#F3F4F6', name: isFr ? 'Blanc' : 'White', meaning: isFr ? 'Pureté et nouveau départ' : 'Purity and new beginnings', usage: isFr ? 'Lors de transitions' : 'During transitions' },
            { hex: '#7DD3FC', name: isFr ? 'Bleu clair' : 'Light Blue', meaning: isFr ? 'Communication fluide' : 'Fluid communication', usage: isFr ? 'Pour dialogues importants' : 'For important conversations' }
          ],
          water: [
            { hex: '#0EA5E9', name: isFr ? 'Bleu' : 'Blue', meaning: isFr ? 'Profondeur émotionnelle' : 'Emotional depth', usage: isFr ? 'Pour introspection' : 'For introspection' },
            { hex: '#06B6D4', name: isFr ? 'Turquoise' : 'Turquoise', meaning: isFr ? 'Guérison et paix' : 'Healing and peace', usage: isFr ? 'Moments de méditation' : 'Meditation moments' },
            { hex: '#94A3B8', name: isFr ? 'Argent' : 'Silver', meaning: isFr ? 'Intuition et mystères' : 'Intuition and mysteries', usage: isFr ? 'Pratiques spirituelles' : 'Spiritual practices' }
          ],
          earth: [
            { hex: '#16A34A', name: isFr ? 'Vert' : 'Green', meaning: isFr ? 'Croissance et ancrage' : 'Growth and grounding', usage: isFr ? 'Pour stabilité' : 'For stability' },
            { hex: '#78716C', name: isFr ? 'Marron' : 'Brown', meaning: isFr ? 'Force et résilience' : 'Strength and resilience', usage: isFr ? 'Dans défis quotidiens' : 'In daily challenges' },
            { hex: '#D6D3D1', name: isFr ? 'Beige' : 'Beige', meaning: isFr ? 'Simplicité et harmonie' : 'Simplicity and harmony', usage: isFr ? 'Vie quotidienne' : 'Daily life' }
          ]
        };

        const palette = elementColorPalette[userElement];

        return (
          <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/30 dark:to-slate-900 rounded-2xl border border-purple-200/50 dark:border-purple-700/50 shadow-xl">
            {/* Sacred Geometry Background - Interlocking Circles (Divine Unity) */}
            <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="unity-circles" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-600 dark:text-purple-400"/>
                    <circle cx="80" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-600 dark:text-purple-400"/>
                    <circle cx="20" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-purple-600 dark:text-purple-400"/>
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#unity-circles)" />
              </svg>
            </div>

            {/* Radiant Central Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-purple-400/20 via-pink-300/10 to-transparent blur-3xl animate-pulse pointer-events-none"></div>

            <div className="relative p-6 sm:p-8 space-y-6">
              {/* Section Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 dark:from-purple-400 dark:via-pink-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  ✨ {t.nameDestiny.higherResonance.title}
                </h3>
                <p className="text-sm text-purple-700 dark:text-purple-300 max-w-2xl mx-auto">
                  {t.nameDestiny.higherResonance.subtitle}
                </p>
              </div>

              {/* Divine Name Resonance - Premium Card */}
              {results.nameDestiny.divineNameResonance && (
                <div className="relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-md rounded-2xl border-2 border-purple-300/50 dark:border-purple-600/50 shadow-2xl p-6 sm:p-8">
                  {/* Decorative Corner Borders */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-purple-400 dark:border-purple-500 rounded-tl-2xl"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-purple-400 dark:border-purple-500 rounded-tr-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-purple-400 dark:border-purple-500 rounded-bl-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-purple-400 dark:border-purple-500 rounded-br-2xl"></div>

                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-4xl">🕌</span>
                    <h4 className="text-xl sm:text-2xl font-bold text-purple-900 dark:text-purple-200">
                      {isFr ? 'Nom Divin Gouvernant' : 'Governing Divine Name'}
                    </h4>
                  </div>

                  {/* Divine Name Display */}
                  <div className="text-center mb-6 space-y-3">
                    <p className="text-sm text-purple-700 dark:text-purple-300">
                      {isFr 
                        ? 'Le Nom Divin correspondant à votre nom (Cycle de 28 Lettres)'
                        : 'The Divine Name corresponding to your name (28-Letter Cycle)'}
                    </p>
                    <div className="bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-700 dark:from-violet-500 dark:via-purple-600 dark:to-indigo-600 rounded-2xl p-6 sm:p-8 text-white shadow-2xl border border-purple-400/30">
                      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 font-arabic leading-tight">
                        {results.nameDestiny.divineNameResonance.arabic}
                      </div>
                      <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 tracking-wide">
                        {results.nameDestiny.divineNameResonance.transliteration}
                      </div>
                      <div className="text-base sm:text-lg md:text-xl opacity-95">
                        {isFr ? results.nameDestiny.divineNameResonance.meaningFr : results.nameDestiny.divineNameResonance.meaningEn}
                      </div>
                    </div>
                  </div>

                  {/* How it was derived */}
                  {results.nameDestiny.divineNameResonance.abjadTotal && results.nameDestiny.divineNameResonance.resonanceIndex && (
                    <div className="mb-6 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 rounded-xl p-5 border border-indigo-200 dark:border-indigo-700">
                      <h5 className="text-base font-bold text-indigo-900 dark:text-indigo-200 mb-4 flex items-center gap-2">
                        <Info className="w-5 h-5" />
                        <span>{isFr ? 'Comment cela a été dérivé' : 'How it was derived'}</span>
                      </h5>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 border border-indigo-300 dark:border-indigo-600">
                          <div className="text-xs uppercase tracking-wider text-indigo-700 dark:text-indigo-300 mb-1 font-semibold">
                            {isFr ? 'Total Abjad (Kabīr)' : 'Abjad Total (Kabīr)'}
                          </div>
                          <div className="text-3xl font-bold text-indigo-900 dark:text-indigo-200">
                            {results.nameDestiny.divineNameResonance.abjadTotal}
                          </div>
                          <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-1">
                            {isFr ? 'Valeur totale des lettres' : 'Sum of letter values'}
                          </div>
                        </div>
                        <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 border border-purple-300 dark:border-purple-600">
                          <div className="text-xs uppercase tracking-wider text-purple-700 dark:text-purple-300 mb-1 font-semibold">
                            {isFr ? 'Index de Résonance' : 'Resonance Index'}
                          </div>
                          <div className="text-3xl font-bold text-purple-900 dark:text-purple-200">
                            {results.nameDestiny.divineNameResonance.resonanceIndex}
                            <span className="text-base font-normal text-purple-600 dark:text-purple-400 ml-1">/28</span>
                          </div>
                          <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                            {isFr ? 'Cycle de 28 lettres arabes' : '28-letter Arabic cycle'}
                          </div>
                        </div>
                      </div>
                      {results.nameDestiny.divineNameResonance.governingLetter && (
                        <div className="mt-4 text-center">
                          <div className="text-sm text-indigo-700 dark:text-indigo-300">
                            {isFr ? 'Lettre gouvernante:' : 'Governing letter:'} 
                            <span className="font-bold text-2xl mx-2 font-arabic text-indigo-900 dark:text-indigo-200">
                              {results.nameDestiny.divineNameResonance.governingLetter}
                            </span>
                            {isFr 
                              ? `(Position ${results.nameDestiny.divineNameResonance.resonanceIndex} dans l'alphabet arabe)`
                              : `(Position ${results.nameDestiny.divineNameResonance.resonanceIndex} in Arabic alphabet)`}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Dhikr (Optional) */}
                  {results.nameDestiny.divineNameResonance.dhikrCount && (
                    <div className="mb-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl p-5 border border-emerald-200 dark:border-emerald-700">
                      <h5 className="text-base font-bold text-emerald-900 dark:text-emerald-200 mb-3 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" />
                        <span>{isFr ? 'Dhikr (Optionnel)' : 'Dhikr (Optional)'}</span>
                      </h5>
                      <div className="space-y-3">
                        <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4 border border-emerald-300 dark:border-emerald-600 text-center">
                          <div className="text-sm text-emerald-700 dark:text-emerald-300 mb-2">
                            {isFr ? 'Compte recommandé' : 'Recommended count'}
                          </div>
                          <div className="text-4xl font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                            {results.nameDestiny.divineNameResonance.dhikrCount}
                          </div>
                          <div className="text-xs text-emerald-600 dark:text-emerald-400">
                            {isFr 
                              ? `Valeur Abjad de ${results.nameDestiny.divineNameResonance.arabic}`
                              : `Abjad value of ${results.nameDestiny.divineNameResonance.arabic}`}
                          </div>
                        </div>
                        <div className="text-sm text-emerald-800 dark:text-emerald-300 leading-relaxed">
                          {isFr 
                            ? "Ce Nom Divin peut être utilisé dans le dhikr (rappel d'Allah), cherchant la proximité, le pardon ou l'aide selon son intention (niyyah)."
                            : "This Divine Name may be used in dhikr (remembrance of Allah), seeking closeness, forgiveness, or help according to one's intention (niyyah)."}
                        </div>
                        <div className="text-xs text-emerald-700 dark:text-emerald-400 italic text-center font-arabic">
                          يُذكَر هذا الاسم في الذِّكر تقرُّبًا إلى الله وحسب النِّيَّة
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Important Disclaimer */}
                  <div className="bg-amber-50 dark:bg-amber-900/30 rounded-xl p-4 border border-amber-200 dark:border-amber-700">
                    <div className="flex gap-3">
                      <Info className="w-5 h-5 text-amber-700 dark:text-amber-300 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-amber-800 dark:text-amber-300 leading-relaxed">
                        {isFr
                          ? "Cette correspondance est basée sur ʿIlm al-Ḥurūf (Science des Lettres) de la tradition Maghribī. C'est une correspondance spirituelle, pas une garantie de destin."
                          : "This correspondence is based on ʿIlm al-Ḥurūf (Science of Letters) from Maghribī tradition. It is a spiritual correspondence, not a guarantee of destiny."}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Color Resonance - Element-Based Palette */}
              {results.nameDestiny.colorResonance && (
                <div className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl border border-pink-300/50 dark:border-pink-700/50 shadow-xl p-6">
                  <div className="flex items-center justify-center gap-3 mb-5">
                    <span className="text-3xl">🎨</span>
                    <h4 className="text-xl sm:text-2xl font-bold text-pink-900 dark:text-pink-200">
                      {t.nameDestiny.colorResonance.title}
                    </h4>
                  </div>

                  <p className="text-sm text-center text-pink-700 dark:text-pink-300 mb-6">
                    {t.nameDestiny.colorResonance.subtitle}
                  </p>

                  {/* Element Color Palette Grid */}
                  <div className="grid sm:grid-cols-3 gap-4 mb-6">
                    {palette.map((color, idx) => (
                      <div key={idx} className="group relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-700 dark:to-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-600 hover:shadow-lg transition-all hover:scale-105">
                        {/* Color Swatch */}
                        <div className="relative mb-3">
                          <div 
                            className="w-full h-24 rounded-lg shadow-md border-2 border-slate-300 dark:border-slate-600 transition-transform group-hover:scale-110"
                            style={{ backgroundColor: color.hex }}
                          ></div>
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                            {color.hex}
                          </div>
                        </div>

                        {/* Color Info */}
                        <div className="space-y-2">
                          <div className="font-bold text-base text-slate-900 dark:text-slate-100">
                            {color.name}
                          </div>
                          <div className="text-xs text-slate-700 dark:text-slate-300">
                            <strong>{isFr ? 'Signification' : 'Meaning'}:</strong> {color.meaning}
                          </div>
                          <div className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                            <Palette className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                            <span>{color.usage}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Color Usage Guide */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-xl p-5 border border-purple-200 dark:border-purple-700">
                    <div className="flex items-center gap-2 mb-3 text-purple-900 dark:text-purple-200">
                      <Palette className="w-5 h-5" />
                      <h5 className="font-bold text-base">{isFr ? 'Guide d\'Utilisation des Couleurs' : 'Color Usage Guide'}</h5>
                    </div>
                    <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-300">
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 dark:text-purple-400 font-bold">•</span>
                        <span>{isFr ? 'Portez ces couleurs lors de pratiques spirituelles pour amplifier votre connexion' : 'Wear these colors during spiritual practices to amplify your connection'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 dark:text-purple-400 font-bold">•</span>
                        <span>{isFr ? 'Intégrez-les dans votre environnement (décoration, vêtements)' : 'Integrate them into your environment (decoration, clothing)'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 dark:text-purple-400 font-bold">•</span>
                        <span>{isFr ? 'Méditez en visualisant ces couleurs pour harmoniser votre énergie' : 'Meditate while visualizing these colors to harmonize your energy'}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple-500 dark:text-purple-400 font-bold">•</span>
                        <span>{isFr ? 'Combinez-les selon vos intentions (courage + clarté, paix + croissance, etc.)' : 'Combine them according to your intentions (courage + clarity, peace + growth, etc.)'}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Disclaimer */}
              <div className="text-center text-xs text-purple-600 dark:text-purple-400 italic px-4">
                {t.nameDestiny.disclaimer.reflectionOnly}
              </div>
            </div>
          </div>
        );
      })()}

      {/* Section 6: Core Destiny Number & Station - ENHANCED */}
      {results.nameDestiny && (() => {
        const userElementKey = getElementKey(results.nameDestiny.element);
        const colors = elementColors[userElementKey];
        
        return (
        <div className={`relative overflow-hidden bg-gradient-to-br ${colors.bgGradient} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 ${colors.border} ${colors.cardGlow} shadow-2xl hover:shadow-3xl transition-all duration-700`}>
          
          {/* Sacred Geometry Background - Number Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="number-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  {/* Nine-pointed star - sacred number geometry */}
                  <path d="M60,20 L65,45 L90,40 L70,55 L85,75 L60,65 L35,75 L50,55 L30,40 L55,45 Z" 
                        fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
                  {/* Inner circle */}
                  <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                  {/* Outer circle */}
                  <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                  {/* Center point */}
                  <circle cx="60" cy="60" r="3" fill="currentColor" opacity="0.8"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#number-pattern)" className="text-white"/>
            </svg>
          </div>
          
          {/* Animated Orbiting Elements */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className={`absolute top-20 left-20 w-24 h-24 rounded-full blur-2xl animate-pulse ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].pulseColor;
            })()}`}></div>
            <div className={`absolute bottom-20 right-20 w-32 h-32 rounded-full blur-2xl animate-pulse ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].pulseColor;
            })()}`} style={{ animationDelay: '0.5s' }}></div>
            <div className={`absolute top-1/2 right-10 w-20 h-20 rounded-full blur-2xl animate-pulse ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].pulseColor;
            })()}`} style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Sparkles */}
          <div className="absolute top-6 right-6 animate-pulse">
            <Target className={`w-6 h-6 sm:w-8 sm:h-8 ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].text;
            })()} ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].progressGlow;
            })()}`} />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                <Target className="w-4 h-4 text-white" />
                <span className="text-xs uppercase tracking-wider text-white font-semibold">
                  {language === 'fr' ? 'Nombres Sacrés & Station de Vie' : 'Sacred Numbers & Life Station'}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                {language === 'fr' ? 'Nombre de Destinée & Station' : 'Core Destiny Number & Station'}
              </h3>
              
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto">
                {language === 'fr' 
                  ? 'Les nombres sacrés qui révèlent votre chemin de vie et votre station actuelle'
                  : 'The sacred numbers revealing your life path and current station'}
              </p>
            </div>

            {/* Dual Number Display - Kabīr and Saghīr */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {/* Kabīr Card */}
              <div className={`group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 ${(() => {
                const userElementKey = getElementKey(results.nameDestiny.element);
                
                return elementColors[userElementKey].border;
              })()} shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${(() => {
                  const userElementKey = getElementKey(results.nameDestiny.element);
                  
                  return elementColors[userElementKey].accentBg;
                })()} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`} />
                
                <div className="relative z-10 text-center">
                  {/* Label */}
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                      {language === 'fr' ? 'Grand Nombre' : 'Greater Number'}
                    </span>
                  </div>
                  
                  {/* Number Circle */}
                  <div className={`mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br ${(() => {
                    const userElementKey = getElementKey(results.nameDestiny.element);
                    
                    return elementColors[userElementKey].gradient;
                  })()} flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4`}>
                    <span className="text-5xl sm:text-6xl font-extrabold text-white">
                      {results.nameDestiny.personKabir}
                    </span>
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {language === 'fr' ? 'Kabīr' : 'Kabīr'}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed">
                    {language === 'fr'
                      ? 'Votre nombre de vie complet - représente le chemin global et la mission de l\'âme'
                      : 'Your complete life number - represents overall path and soul mission'}
                  </p>
                </div>
              </div>

              {/* Saghīr Card */}
              <div className={`group relative bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 ${(() => {
                const userElementKey = getElementKey(results.nameDestiny.element);
                
                return elementColors[userElementKey].border;
              })()} shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                {/* Glow Effect */}
                <div className={`absolute inset-0 ${(() => {
                  const userElementKey = getElementKey(results.nameDestiny.element);
                  
                  return elementColors[userElementKey].accentBg;
                })()} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl`} />
                
                <div className="relative z-10 text-center">
                  {/* Label */}
                  <div className="mb-4">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                      {language === 'fr' ? 'Nombre Réduit' : 'Reduced Number'}
                    </span>
                  </div>
                  
                  {/* Number Circle */}
                  <div className={`mx-auto w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br ${(() => {
                    const userElementKey = getElementKey(results.nameDestiny.element);
                    
                    return elementColors[userElementKey].gradient;
                  })()} flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4`}>
                    <span className="text-5xl sm:text-6xl font-extrabold text-white">
                      {results.nameDestiny.saghir}
                    </span>
                  </div>
                  
                  {/* Name */}
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {language === 'fr' ? 'Saghīr' : 'Saghīr'}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed">
                    {language === 'fr'
                      ? 'Votre essence numérique - l\'expression concentrée de votre énergie spirituelle'
                      : 'Your numeric essence - the concentrated expression of your spiritual energy'}
                  </p>
                </div>
              </div>
            </div>

            {/* Number Significance Card */}
            <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20 mb-8 sm:mb-10">
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${(() => {
                  const userElementKey = getElementKey(results.nameDestiny.element);
                  
                  return elementColors[userElementKey].accentBg;
                })()} shadow-lg`}>
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3">
                    {language === 'fr' ? 'Signification des Nombres' : 'Number Significance'}
                  </h4>
                  <div className="space-y-3 text-sm text-white/90 leading-relaxed">
                    <p>
                      {language === 'fr'
                        ? `Le Kabīr (${results.nameDestiny.personKabir}) représente votre chemin de vie complet et votre potentiel maximal. C'est le nombre qui guide votre destinée globale.`
                        : `Kabīr (${results.nameDestiny.personKabir}) represents your complete life path and maximum potential. This is the number guiding your overall destiny.`}
                    </p>
                    <p>
                      {language === 'fr'
                        ? `Le Saghīr (${results.nameDestiny.saghir}) est l'essence concentrée - la réduction spirituelle qui révèle votre nature fondamentale. Ce nombre influence votre expression quotidienne.`
                        : `Saghīr (${results.nameDestiny.saghir}) is the concentrated essence - the spiritual reduction revealing your fundamental nature. This number influences your daily expression.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Life Station Section */}
            <div className="space-y-6">
              {/* Station Header */}
              <div className="text-center">
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {language === 'fr' ? 'Votre Station de Vie Actuelle' : 'Your Current Life Station'}
                </h4>
                <p className="text-sm text-white/80">
                  {language === 'fr' 
                    ? 'Basée sur votre Saghīr, votre station spirituelle dans le voyage de la vie'
                    : 'Based on your Saghīr, your spiritual station in the journey of life'}
                </p>
              </div>

              {/* Station Display Card */}
              <div className={`relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-white/30 shadow-2xl`}>
                {/* Decorative Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white/30">
                  <span className="text-3xl">🎯</span>
                </div>
                
                <div className="mt-8 text-center">
                  {/* Station Number Badge */}
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/30 mb-6">
                    <span className={`text-2xl font-extrabold ${(() => {
                      const userElementKey = getElementKey(results.nameDestiny.element);
                      
                      return elementColors[userElementKey].textBright;
                    })()}`}>
                      {results.nameDestiny.saghir}
                    </span>
                    <div className="w-px h-6 bg-white/30"></div>
                    <span className="text-sm uppercase tracking-wider text-white font-semibold">
                      {language === 'fr' ? 'Station' : 'Station'}
                    </span>
                  </div>
                  
                  {/* Station Title */}
                  <h5 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {(() => {
                      const stationNames = {
                        1: language === 'fr' ? 'Le Pionnier' : 'The Pioneer',
                        2: language === 'fr' ? 'Le Médiateur' : 'The Mediator',
                        3: language === 'fr' ? 'Le Créateur' : 'The Creator',
                        4: language === 'fr' ? 'Le Bâtisseur' : 'The Builder',
                        5: language === 'fr' ? 'L\'Explorateur' : 'The Explorer',
                        6: language === 'fr' ? 'Le Gardien' : 'The Guardian',
                        7: language === 'fr' ? 'Le Chercheur' : 'The Seeker',
                        8: language === 'fr' ? 'Le Manifesteur' : 'The Manifestor',
                        9: language === 'fr' ? 'Le Compléteur' : 'The Completer'
                      };
                      return stationNames[results.nameDestiny.saghir as keyof typeof stationNames] || (language === 'fr' ? 'Station Unique' : 'Unique Station');
                    })()}
                  </h5>
                  
                  {/* Station Description */}
                  <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                    <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                      {(() => {
                        const descriptions = {
                          1: language === 'fr'
                            ? 'Vous êtes dans la station de l\'initiation et du leadership. Votre rôle est de commencer de nouveaux chemins et d\'inspirer l\'action. Cette station demande du courage et de l\'indépendance.'
                            : 'You are in the station of initiation and leadership. Your role is to begin new paths and inspire action. This station requires courage and independence.',
                          2: language === 'fr'
                            ? 'Vous êtes dans la station de la coopération et de l\'harmonie. Votre rôle est de créer des ponts entre les gens et de favoriser la paix. Cette station demande sensibilité et diplomatie.'
                            : 'You are in the station of cooperation and harmony. Your role is to build bridges between people and foster peace. This station requires sensitivity and diplomacy.',
                          3: language === 'fr'
                            ? 'Vous êtes dans la station de l\'expression créative. Votre rôle est d\'apporter joie et beauté au monde. Cette station demande authenticité et communication.'
                            : 'You are in the station of creative expression. Your role is to bring joy and beauty to the world. This station requires authenticity and communication.',
                          4: language === 'fr'
                            ? 'Vous êtes dans la station de la stabilité et de la structure. Votre rôle est de créer des fondations durables. Cette station demande discipline et persévérance.'
                            : 'You are in the station of stability and structure. Your role is to create lasting foundations. This station requires discipline and perseverance.',
                          5: language === 'fr'
                            ? 'Vous êtes dans la station du changement et de la liberté. Votre rôle est d\'explorer de nouveaux territoires et d\'embrasser la transformation. Cette station demande adaptabilité et courage.'
                            : 'You are in the station of change and freedom. Your role is to explore new territories and embrace transformation. This station requires adaptability and courage.',
                          6: language === 'fr'
                            ? 'Vous êtes dans la station du service et de la responsabilité. Votre rôle est de prendre soin et de guider les autres. Cette station demande compassion et engagement.'
                            : 'You are in the station of service and responsibility. Your role is to care for and guide others. This station requires compassion and commitment.',
                          7: language === 'fr'
                            ? 'Vous êtes dans la station de la sagesse spirituelle. Votre rôle est de chercher la vérité profonde et de partager la connaissance. Cette station demande introspection et foi.'
                            : 'You are in the station of spiritual wisdom. Your role is to seek deep truth and share knowledge. This station requires introspection and faith.',
                          8: language === 'fr'
                            ? 'Vous êtes dans la station du pouvoir et de la manifestation. Votre rôle est de réaliser des objectifs ambitieux et de créer l\'abondance. Cette station demande maîtrise et intégrité.'
                            : 'You are in the station of power and manifestation. Your role is to achieve ambitious goals and create abundance. This station requires mastery and integrity.',
                          9: language === 'fr'
                            ? 'Vous êtes dans la station de la compassion universelle. Votre rôle est de servir l\'humanité avec sagesse et amour. Cette station demande sacrifice et vision globale.'
                            : 'You are in the station of universal compassion. Your role is to serve humanity with wisdom and love. This station requires sacrifice and global vision.'
                        };
                        return descriptions[results.nameDestiny.saghir as keyof typeof descriptions] || (language === 'fr' ? 'Une station unique sur le chemin spirituel.' : 'A unique station on the spiritual path.');
                      })()}
                    </p>
                  </div>

                  {/* Station Qualities */}
                  <div className="grid sm:grid-cols-3 gap-4 mt-6">
                    {(() => {
                      const qualities = {
                        1: {
                          keywords: language === 'fr' ? ['Leadership', 'Initiative', 'Indépendance'] : ['Leadership', 'Initiative', 'Independence'],
                          icon: '🚀'
                        },
                        2: {
                          keywords: language === 'fr' ? ['Harmonie', 'Coopération', 'Sensibilité'] : ['Harmony', 'Cooperation', 'Sensitivity'],
                          icon: '🤝'
                        },
                        3: {
                          keywords: language === 'fr' ? ['Créativité', 'Expression', 'Joie'] : ['Creativity', 'Expression', 'Joy'],
                          icon: '🎨'
                        },
                        4: {
                          keywords: language === 'fr' ? ['Stabilité', 'Structure', 'Discipline'] : ['Stability', 'Structure', 'Discipline'],
                          icon: '🏗️'
                        },
                        5: {
                          keywords: language === 'fr' ? ['Liberté', 'Changement', 'Aventure'] : ['Freedom', 'Change', 'Adventure'],
                          icon: '🌍'
                        },
                        6: {
                          keywords: language === 'fr' ? ['Service', 'Responsabilité', 'Amour'] : ['Service', 'Responsibility', 'Love'],
                          icon: '💚'
                        },
                        7: {
                          keywords: language === 'fr' ? ['Sagesse', 'Spiritualité', 'Vérité'] : ['Wisdom', 'Spirituality', 'Truth'],
                          icon: '📿'
                        },
                        8: {
                          keywords: language === 'fr' ? ['Pouvoir', 'Abondance', 'Maîtrise'] : ['Power', 'Abundance', 'Mastery'],
                          icon: '👑'
                        },
                        9: {
                          keywords: language === 'fr' ? ['Compassion', 'Service', 'Vision'] : ['Compassion', 'Service', 'Vision'],
                          icon: '🌟'
                        }
                      };
                      
                      const stationQuality = qualities[results.nameDestiny.saghir as keyof typeof qualities];
                      
                      if (!stationQuality) return null;
                      
                      return stationQuality.keywords.map((keyword, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                          <div className="text-2xl mb-1">{idx === 0 ? stationQuality.icon : '✦'}</div>
                          <div className="text-sm font-semibold text-white">{keyword}</div>
                        </div>
                      ));
                    })()}
                  </div>
                </div>
              </div>

              {/* Guidance Card */}
              <div className={`bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/40 dark:to-cyan-900/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-blue-300 dark:border-blue-700 shadow-xl`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <Compass className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-100 mb-3">
                      {language === 'fr' ? 'Guidance pour Votre Station' : 'Guidance for Your Station'}
                    </h5>
                    <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                      {language === 'fr'
                        ? 'Votre station de vie n\'est pas fixe - elle représente votre chemin actuel. En honorant les qualités de cette station et en travaillant sur ses défis, vous progressez naturellement sur votre voyage spirituel. Méditez sur votre Saghīr pour vous connecter à l\'énergie de votre station.'
                        : 'Your life station is not fixed - it represents your current path. By honoring the qualities of this station and working on its challenges, you naturally progress on your spiritual journey. Meditate on your Saghīr to connect with the energy of your station.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })()}

      {/* Section 7: Soul Triad - Three Aspects of Self */}
      {results.nameDestiny && results.nameDestiny.saghir && results.nameDestiny.soulUrgeNumber && results.nameDestiny.personalityNumber && (
        <div className={`relative overflow-hidden bg-gradient-to-br ${(() => {
          const userElementKey = getElementKey(results.nameDestiny.element);
          
          return elementColors[userElementKey].bgGradient;
        })()} backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 ${(() => {
          const userElementKey = getElementKey(results.nameDestiny.element);
          
          return elementColors[userElementKey].border;
        })()} ${(() => {
          const userElementKey = getElementKey(results.nameDestiny.element);
          
          return elementColors[userElementKey].cardGlow;
        })()} shadow-2xl hover:shadow-3xl transition-all duration-700`}>
          
          {/* Sacred Geometry Background - Triad Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="triad-pattern" x="0" y="0" width="150" height="130" patternUnits="userSpaceOnUse">
                  {/* Triangle - symbol of trinity/triad */}
                  <path d="M75,20 L130,110 L20,110 Z" 
                        fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.6"/>
                  {/* Inner triangle */}
                  <path d="M75,40 L110,90 L40,90 Z" 
                        fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                  {/* Center point */}
                  <circle cx="75" cy="65" r="3" fill="currentColor" opacity="0.8"/>
                  {/* Three circles at vertices */}
                  <circle cx="75" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                  <circle cx="130" cy="110" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                  <circle cx="20" cy="110" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#triad-pattern)" className="text-white"/>
            </svg>
          </div>
          
          {/* Animated Trinity Orbs */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className={`absolute top-20 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full blur-3xl animate-pulse ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].pulseColor;
            })()}`}></div>
            <div className={`absolute bottom-32 left-1/4 w-24 h-24 rounded-full blur-3xl animate-pulse ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].pulseColor;
            })()}`} style={{ animationDelay: '0.5s' }}></div>
            <div className={`absolute bottom-32 right-1/4 w-24 h-24 rounded-full blur-3xl animate-pulse ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].pulseColor;
            })()}`} style={{ animationDelay: '1s' }}></div>
          </div>
          
          {/* Sparkles */}
          <div className="absolute top-6 right-6 animate-pulse">
            <Users className={`w-6 h-6 sm:w-8 sm:h-8 ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].text;
            })()} ${(() => {
              const userElementKey = getElementKey(results.nameDestiny.element);
              
              return elementColors[userElementKey].progressGlow;
            })()}`} />
          </div>

          <div className="relative z-10">
            {/* Header */}
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full border border-white/30 mb-4">
                <Users className="w-4 h-4 text-white" />
                <span className="text-xs uppercase tracking-wider text-white font-semibold">
                  {language === 'fr' ? 'La Triade de l\'Âme' : 'The Soul Triad'}
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                {language === 'fr' ? 'Triade de l\'Âme - Trois Aspects du Soi' : 'Soul Triad - Three Aspects of Self'}
              </h3>
              
              <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-2xl mx-auto mb-6">
                {language === 'fr' 
                  ? 'Votre identité spirituelle révélée à travers trois dimensions sacrées : Expression, Désir, et Persona'
                  : 'Your spiritual identity revealed through three sacred dimensions: Expression, Desire, and Persona'}
              </p>

              {/* Triad Concept Explanation */}
              <div className="max-w-3xl mx-auto bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl p-5 border border-white/20">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed text-left">
                    {language === 'fr'
                      ? 'La Triade de l\'Âme représente trois aspects fondamentaux de votre être : qui vous êtes réellement (Expression), ce que vous désirez profondément (Désir), et comment vous apparaissez aux autres (Persona). Ensemble, ces trois nombres créent l\'image complète de votre identité spirituelle.'
                      : 'The Soul Triad represents three fundamental aspects of your being: who you truly are (Expression), what you deeply desire (Desire), and how you appear to others (Persona). Together, these three numbers create the complete picture of your spiritual identity.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Three Aspects Grid */}
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
              
              {/* 1. Life Destiny / Expression Number */}
              <div className={`group relative bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-rose-300/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg border-4 border-white/30">
                      <Fingerprint className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="text-center mb-3">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                      {language === 'fr' ? 'Destinée de Vie' : 'Life Destiny'}
                    </span>
                  </div>
                  
                  {/* Number Circle */}
                  <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {results.nameDestiny.saghir}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
                    {language === 'fr' ? 'Votre Expression' : 'Your Expression'}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed text-center mb-4">
                    {language === 'fr'
                      ? 'Qui vous êtes réellement - votre nature authentique et vos talents naturels'
                      : 'Who you truly are - your authentic nature and natural talents'}
                  </p>
                  
                  {/* Key Aspects */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-rose-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Talents innés' : 'Innate talents'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-rose-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Capacités naturelles' : 'Natural abilities'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-rose-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Chemin de vie' : 'Life path'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Soul Urge / Heart's Desire */}
              <div className={`group relative bg-gradient-to-br from-violet-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-violet-300/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white/30">
                      <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="text-center mb-3">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                      {language === 'fr' ? 'Désir de l\'Âme' : 'Soul Urge'}
                    </span>
                  </div>
                  
                  {/* Number Circle */}
                  <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {results.nameDestiny.soulUrgeNumber}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
                    {language === 'fr' ? 'Votre Désir' : 'Your Desire'}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed text-center mb-4">
                    {language === 'fr'
                      ? 'Ce que vous désirez profondément - vos motivations intérieures et aspirations'
                      : 'What you deeply desire - your inner motivations and aspirations'}
                  </p>
                  
                  {/* Key Aspects */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-violet-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Motivations profondes' : 'Deep motivations'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-violet-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Aspirations du cœur' : 'Heart aspirations'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-violet-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Besoins spirituels' : 'Spiritual needs'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Outer Personality / Persona */}
              <div className={`group relative bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-cyan-300/50 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500`}>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl sm:rounded-3xl" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg border-4 border-white/30">
                      <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                  </div>
                  
                  {/* Label */}
                  <div className="text-center mb-3">
                    <span className="text-xs uppercase tracking-widest text-white/80 font-semibold">
                      {language === 'fr' ? 'Personnalité Extérieure' : 'Outer Personality'}
                    </span>
                  </div>
                  
                  {/* Number Circle */}
                  <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-2xl border-4 border-white/30 mb-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white">
                      {results.nameDestiny.personalityNumber}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-3 text-center">
                    {language === 'fr' ? 'Votre Persona' : 'Your Persona'}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-white/90 leading-relaxed text-center mb-4">
                    {language === 'fr'
                      ? 'Comment vous apparaissez - la première impression que vous donnez aux autres'
                      : 'How you appear - the first impression you give to others'}
                  </p>
                  
                  {/* Key Aspects */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Première impression' : 'First impression'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Image sociale' : 'Social image'}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-cyan-300">▸</span>
                      <span className="text-xs text-white/90">
                        {language === 'fr' ? 'Masque public' : 'Public mask'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Triad Connection Visualization */}
            <div className="mb-8 sm:mb-10">
              <div className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
                <h4 className="text-lg sm:text-xl font-bold text-white text-center mb-6">
                  {language === 'fr' ? 'La Connexion de la Triade' : 'The Triad Connection'}
                </h4>
                
                {/* Visual Triangle Diagram */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative h-64 sm:h-80">
                    {/* Triangle Lines */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="triad-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(244, 114, 182, 0.5)" />
                          <stop offset="50%" stopColor="rgba(167, 139, 250, 0.5)" />
                          <stop offset="100%" stopColor="rgba(103, 232, 249, 0.5)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Triangle edges */}
                      <path d="M 50% 15% L 15% 85% L 85% 85% Z" 
                            fill="none" 
                            stroke="url(#triad-gradient)" 
                            strokeWidth="2" 
                            strokeDasharray="5,5"
                            className="animate-pulse"/>
                    </svg>
                    
                    {/* Top: Life Destiny (Expression) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-lg border-4 border-white/30 mb-2">
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {results.nameDestiny.saghir}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {language === 'fr' ? 'Expression' : 'Expression'}
                      </span>
                    </div>
                    
                    {/* Bottom Left: Soul Urge (Desire) */}
                    <div className="absolute bottom-0 left-[15%] -translate-x-1/2 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-lg border-4 border-white/30 mb-2">
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {results.nameDestiny.soulUrgeNumber}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {language === 'fr' ? 'Désir' : 'Desire'}
                      </span>
                    </div>
                    
                    {/* Bottom Right: Outer Personality (Persona) */}
                    <div className="absolute bottom-0 right-[15%] translate-x-1/2 text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-lg border-4 border-white/30 mb-2">
                        <span className="text-xl sm:text-2xl font-bold text-white">
                          {results.nameDestiny.personalityNumber}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {language === 'fr' ? 'Persona' : 'Persona'}
                      </span>
                    </div>
                    
                    {/* Center - Integration Point */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${(() => {
                        const userElementKey = getElementKey(results.nameDestiny.element);
                        
                        return elementColors[userElementKey].gradient;
                      })()} flex items-center justify-center shadow-xl border-4 border-white/50 animate-pulse`}>
                        <Sparkles className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Integration Analysis */}
            <div className={`bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/40 dark:to-orange-900/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-amber-300 dark:border-amber-700 shadow-xl mb-8 sm:mb-10`}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">
                    {language === 'fr' ? 'Intégration de la Triade' : 'Triad Integration'}
                  </h4>
                  <div className="space-y-3 text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
                    <p>
                      {language === 'fr'
                        ? `Votre Expression (${results.nameDestiny.saghir}) révèle qui vous êtes naturellement. Votre Désir (${results.nameDestiny.soulUrgeNumber}) montre ce que votre cœur recherche. Votre Persona (${results.nameDestiny.personalityNumber}) représente comment le monde vous voit.`
                        : `Your Expression (${results.nameDestiny.saghir}) reveals who you naturally are. Your Desire (${results.nameDestiny.soulUrgeNumber}) shows what your heart seeks. Your Persona (${results.nameDestiny.personalityNumber}) represents how the world sees you.`}
                    </p>
                    <p className="font-semibold">
                      {language === 'fr'
                        ? 'L\'harmonie se trouve lorsque ces trois aspects travaillent ensemble : quand qui vous êtes, ce que vous désirez, et comment vous apparaissez sont alignés.'
                        : 'Harmony is found when these three aspects work together: when who you are, what you desire, and how you appear are aligned.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Balancing the Triad - Guidance */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {/* Expression Balance */}
              <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-5 border border-rose-300/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center">
                    <Fingerprint className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {language === 'fr' ? 'Équilibrer l\'Expression' : 'Balance Expression'}
                  </h5>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  {language === 'fr'
                    ? 'Honorez vos talents naturels. Vivez authentiquement selon votre vraie nature.'
                    : 'Honor your natural talents. Live authentically according to your true nature.'}
                </p>
              </div>

              {/* Desire Balance */}
              <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-xl p-5 border border-violet-300/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {language === 'fr' ? 'Équilibrer le Désir' : 'Balance Desire'}
                  </h5>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  {language === 'fr'
                    ? 'Écoutez votre cœur. Poursuivez ce qui nourrit vraiment votre âme.'
                    : 'Listen to your heart. Pursue what truly nourishes your soul.'}
                </p>
              </div>

              {/* Persona Balance */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-5 border border-cyan-300/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                    <Eye className="w-4 h-4 text-white" />
                  </div>
                  <h5 className="text-sm font-bold text-white">
                    {language === 'fr' ? 'Équilibrer la Persona' : 'Balance Persona'}
                  </h5>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  {language === 'fr'
                    ? 'Soyez conscient de votre impact. Alignez votre image extérieure avec votre vérité intérieure.'
                    : 'Be aware of your impact. Align your outer image with your inner truth.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Section 8: Qur'anic Resonance */}
      {results.quranResonance && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border-2 border-emerald-500 dark:border-emerald-600 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-5">
            <div className="flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-white" />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  {t.nameDestiny.quranicResonance.title}
                </h3>
                <p className="text-sm text-emerald-100 mt-1">{t.nameDestiny.quranicResonance.subtitle}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 space-y-5 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-800 dark:to-slate-900">
            <div className="text-center space-y-3">
              <div className="text-4xl font-bold text-black dark:text-white mb-2" style={{ fontFamily: 'Amiri, serif' }}>
                {results.quranResonance.surahNameArabic}
              </div>
              <div className="text-2xl font-bold text-black dark:text-white">
                {results.quranResonance.surahName}
              </div>
              <div className="inline-block px-5 py-2 bg-emerald-600 dark:bg-emerald-700 rounded-lg shadow-md">
                <div className="text-base font-bold text-white">
                  Ayah {results.quranResonance.ayahNumber} of {results.quranResonance.totalAyahsInSurah}
                </div>
              </div>
            </div>
            
            {/* Verse Text Display */}
            {loadingVerse && (
              <div className="text-center py-8 bg-emerald-50 dark:bg-slate-700 rounded-lg">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-emerald-300 border-t-emerald-600"></div>
                <p className="text-sm text-black dark:text-slate-300 mt-3 font-medium">Loading Qur'anic verse...</p>
              </div>
            )}
            
            {verseError && !loadingVerse && !verseText && (
              <div className="text-center py-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                <p className="text-sm text-amber-800 dark:text-amber-300">{verseError}</p>
                <p className="text-xs text-amber-700 dark:text-amber-400 mt-2">
                  The verse reference is valid (Surah {results.quranResonance.surahNumber}:{results.quranResonance.ayahNumber}), but we're having trouble fetching it.
                </p>
              </div>
            )}
            
            {verseText && !loadingVerse && (
              <div className="space-y-4 bg-white dark:bg-slate-750 rounded-lg p-6 border-2 border-emerald-200 dark:border-emerald-700">
                {/* Arabic Text */}
                {verseText.arabic && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">Arabic Text</h4>
                    <div className="text-right bg-gradient-to-l from-emerald-50 to-transparent dark:from-slate-800 dark:to-transparent rounded p-5 border-r-4 border-emerald-500">
                      <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-black dark:text-white" 
                         style={{ fontFamily: 'Amiri, Scheherazade, serif', lineHeight: '2', direction: 'rtl' }}>
                        {verseText.arabic}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Translation */}
                {verseText.translation && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">English Translation</h4>
                    <div className="bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/10 dark:to-transparent rounded p-5 border-l-4 border-blue-400">
                      <p className="text-base text-black dark:text-slate-200 leading-relaxed mb-3">
                        "{verseText.translation}"
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 italic">
                        €” {verseText.translationName}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {!verseText && !loadingVerse && !verseError && (
              <div className="text-center py-6 text-slate-500 dark:text-slate-400 text-sm">
                <p>No verse data available for this resonance.</p>
              </div>
            )}
            
            <div className="flex justify-center pt-2">
              <a
                href={results.quranResonance.quranLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-200 font-bold shadow-lg hover:shadow-xl text-base"
              >
                <BookOpen className="w-5 h-5" />
                Read Full Verse on Quran.com
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            <div className="pt-4 border-t-2 border-emerald-200 dark:border-emerald-800">
              <p className="text-base text-black dark:text-slate-300 italic text-center leading-relaxed font-medium">
                {getQuranResonanceMessage()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section 8: Spiritual Origin (Mother's Name Analysis) */}
      {results.motherAnalysis && (
        <div className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-xl border-2 border-rose-200 dark:border-rose-800 p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <Heart className="h-6 w-6 text-rose-500" />
            <div>
              <h3 className="text-2xl font-bold text-rose-900 dark:text-rose-100">
                {t.nameDestiny.origin.title}
              </h3>
              <p className="text-sm text-rose-700 dark:text-rose-300 mt-1">
                {t.nameDestiny.motherOrigin.subtitle}
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            {/* Mother's Element */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-rose-200 dark:border-rose-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                {t.nameDestiny.origin.motherElement}
              </p>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-rose-600 dark:text-rose-400">
                  {results.motherAnalysis.element}
                </div>
                <div className="text-lg font-arabic text-slate-700 dark:text-slate-300">
                  {results.motherAnalysis.elementArabic}
                </div>
              </div>
              <div className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                {t.nameDestiny.origin.kabir}: {results.motherAnalysis.kabir} • {t.nameDestiny.origin.saghir}: {results.motherAnalysis.saghir} • {t.nameDestiny.origin.hadath}: {results.motherAnalysis.hadath}
              </div>
            </div>
            
            {/* Element Inheritance Comparison */}
            <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-rose-200 dark:border-rose-700">
              <p className="text-sm font-medium mb-3 text-black dark:text-slate-300">
                {t.nameDestiny.origin.inheritance}:
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1 text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.nameDestiny.origin.yourExpression}</p>
                  <p className="font-bold text-purple-600 dark:text-purple-400">
                    {isFr ? results.nameDestiny.expression.fr : results.nameDestiny.expression.en}
                  </p>
                </div>
                <div className="text-3xl text-slate-400">†”</div>
                <div className="flex-1 text-center p-3 bg-rose-50 dark:bg-rose-900/20 rounded-lg">
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-1">{t.nameDestiny.origin.yourFoundation}</p>
                  <p className="font-bold text-rose-600 dark:text-rose-400">
                    {results.motherAnalysis.element}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Inheritance Insight */}
            <div className="p-4 bg-gradient-to-br from-white to-rose-50 dark:from-slate-800 dark:to-rose-900/10 rounded-lg border border-rose-200 dark:border-rose-700">
              <p className="text-sm font-semibold text-black dark:text-slate-100 mb-2 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-amber-500" />
                {t.nameDestiny.origin.insight}:
              </p>
              <p className="text-sm text-black dark:text-slate-300 leading-relaxed">
                {(() => {
                  // Use the correct expression element from nameDestiny
                  const userElement = (isFr ? results.nameDestiny.expression.fr : results.nameDestiny.expression.en) as 'Fire' | 'Water' | 'Air' | 'Earth' | 'Feu' | 'Eau' | 'Terre';
                  
                  // Normalize for comparison
                  const normalizedUserElement = 
                    userElement === 'Feu' ? 'Fire' :
                    userElement === 'Eau' ? 'Water' :
                    userElement === 'Terre' ? 'Earth' :
                    userElement as 'Fire' | 'Water' | 'Air' | 'Earth';
                  
                  // Check if French and use translation keys
                  if (language === 'fr' && t.inheritanceSame && t.inheritanceCompatible && t.inheritanceOpposing) {
                    const motherEl = results.motherAnalysis.element;
                    
                    // Same element
                    if (normalizedUserElement === motherEl) {
                      return t.inheritanceSame.replace('{element}', 
                        normalizedUserElement === 'Fire' ? t.elements.fire :
                        normalizedUserElement === 'Water' ? t.elements.water :
                        normalizedUserElement === 'Air' ? t.elements.air :
                        t.elements.earth
                      );
                    }
                    
                    // Compatible elements
                    const compatKey = `${normalizedUserElement.toLowerCase()}${motherEl.charAt(0).toUpperCase()}${motherEl.slice(1).toLowerCase()}` as keyof typeof t.inheritanceCompatible;
                    if (t.inheritanceCompatible[compatKey]) {
                      return t.inheritanceCompatible[compatKey];
                    }
                    
                    // Opposing elements
                    const opposKey = `${normalizedUserElement.toLowerCase()}${motherEl.charAt(0).toUpperCase()}${motherEl.slice(1).toLowerCase()}` as keyof typeof t.inheritanceOpposing;
                    if (t.inheritanceOpposing[opposKey]) {
                      return t.inheritanceOpposing[opposKey];
                    }
                  }
                  
                  // Fallback to English
                  return generateInheritanceInsight(
                    normalizedUserElement,
                    results.motherAnalysis.element
                  );
                })()}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Section 9: Letter Geometry & Form Analysis */}
      {results.geometry && (
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl shadow-lg border-2 border-indigo-200 dark:border-indigo-800 p-6">
          <div className="flex items-center gap-3 mb-5">
            <Compass className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                {t.nameDestiny.geometry.title}
              </h3>
              <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
                The shapes and forms within your name
              </p>
            </div>
          </div>
          <div className="space-y-5">
            {/* Vertical */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ArrowUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-bold uppercase text-black dark:text-indigo-300">
                  {isFr ? GEOMETRY_NAMES.vertical.fr : GEOMETRY_NAMES.vertical.en} ({GEOMETRY_NAMES.vertical.transliteration} - {GEOMETRY_NAMES.vertical.ar})
                  <span className="ml-2 text-xs font-normal">({results.geometry.vertical.count} {isFr ? 'lettres' : 'letters'})</span>
                </span>
              </div>
              {results.geometry.vertical.count > 0 ? (
                <>
                  <div className="flex gap-2 mb-2 flex-wrap" dir="rtl">
                    {results.geometry.vertical.letters.map((letter: string, i: number) => (
                      <span 
                        key={i}
                        className="text-3xl p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-900 dark:text-blue-100"
                        style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-black dark:text-gray-400">
                    {GEOMETRY_KEYWORDS.vertical.join(' • ')}
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">{t.nameDestiny.geometry.none}</p>
              )}
            </div>

            <div className="border-t border-indigo-200 dark:border-indigo-800"></div>

            {/* Round */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Circle className="w-4 h-4 text-rose-600" />
                <span className="text-sm font-bold uppercase text-black dark:text-indigo-300">
                  {isFr ? GEOMETRY_NAMES.round.fr : GEOMETRY_NAMES.round.en} ({GEOMETRY_NAMES.round.transliteration} - {GEOMETRY_NAMES.round.ar})
                  <span className="ml-2 text-xs font-normal">({results.geometry.round.count} {isFr ? 'lettres' : 'letters'})</span>
                </span>
              </div>
              {results.geometry.round.count > 0 ? (
                <>
                  <div className="flex gap-2 mb-2 flex-wrap" dir="rtl">
                    {results.geometry.round.letters.map((letter: string, i: number) => (
                      <span 
                        key={i}
                        className="text-3xl p-2 bg-rose-100 dark:bg-rose-900/30 rounded-lg text-rose-900 dark:text-rose-100"
                        style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-black dark:text-gray-400">
                    {GEOMETRY_KEYWORDS.round.join(' • ')}
                  </p>
                </>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-500 italic">{t.nameDestiny.geometry.none}</p>
              )}
            </div>

            <div className="border-t border-indigo-200 dark:border-indigo-800"></div>

            {/* Flat */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Minus className="w-4 h-4 text-amber-700" />
                <span className="text-sm font-bold uppercase text-black dark:text-indigo-300">
                  {isFr ? GEOMETRY_NAMES.flat.fr : GEOMETRY_NAMES.flat.en} ({GEOMETRY_NAMES.flat.transliteration} - {GEOMETRY_NAMES.flat.ar})
                  <span className="ml-2 text-xs font-normal">({results.geometry.flat.count} {isFr ? 'lettres' : 'letters'})</span>
                </span>
              </div>
              {results.geometry.flat.count > 0 ? (
                <>
                  <div className="flex gap-2 mb-2 flex-wrap" dir="rtl">
                    {results.geometry.flat.letters.map((letter: string, i: number) => (
                      <span 
                        key={i}
                        className="text-3xl p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-900 dark:text-amber-100"
                        style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-black dark:text-gray-400">
                    {GEOMETRY_KEYWORDS.flat.join(' • ')}
                  </p>
                </>
              ) : (
                <p className="text-sm text-black dark:text-gray-500 italic">{t.nameDestiny.geometry.none}</p>
              )}
            </div>

            <div className="border-t border-indigo-200 dark:border-indigo-800"></div>

            {/* Angular */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-orange-600" />
                <span className="text-sm font-bold uppercase text-black dark:text-indigo-300">
                  {isFr ? GEOMETRY_NAMES.angular.fr : GEOMETRY_NAMES.angular.en} ({GEOMETRY_NAMES.angular.transliteration} - {GEOMETRY_NAMES.angular.ar})
                  <span className="ml-2 text-xs font-normal">({results.geometry.angular.count} {isFr ? 'lettres' : 'letters'})</span>
                </span>
              </div>
              {results.geometry.angular.count > 0 ? (
                <>
                  <div className="flex gap-2 mb-2 flex-wrap" dir="rtl">
                    {results.geometry.angular.letters.map((letter: string, i: number) => (
                      <span 
                        key={i}
                        className="text-3xl p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg text-orange-900 dark:text-orange-100"
                        style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}
                      >
                        {letter}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-black dark:text-gray-400">
                    {GEOMETRY_KEYWORDS.angular.join(' • ')}
                  </p>
                </>
              ) : (
                <p className="text-sm text-black dark:text-gray-500 italic">{t.nameDestiny.geometry.none}</p>
              )}
            </div>

            {/* Geometric Profile */}
            <div className="mt-4 p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-black dark:text-indigo-200 mb-2">
                    {t.nameDestiny.geometry.profile}
                  </div>
                  <p className="text-sm text-black dark:text-indigo-300 leading-relaxed">
                    {(() => {
                      // Determine the profile type based on geometry percentages
                      const { vertical, round, flat, angular } = results.geometry;
                      const dominantType = results.geometry.dominant;
                      const dominantPct = results.geometry[dominantType].percentage;
                      
                      // Map to translation key
                      if (dominantPct > 60) {
                        return t.geometryProfiles[`${dominantType}Dominant` as keyof typeof t.geometryProfiles];
                      } else {
                        return t.geometryProfiles.balanced;
                      }
                    })()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Soul Triad */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-bold mb-4 text-black dark:text-slate-100 flex items-center gap-2">
          <Target className="w-5 h-5 text-purple-500" />
          {t.nameDestiny.triad.title}
        </h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <div className="font-bold text-black dark:text-purple-300 mb-1">
              {t.nameDestiny.triad.lifeDestiny} ({results.saghir})
            </div>
            <div className="text-sm text-black dark:text-slate-300">
              {localizedStation.quality}
            </div>
          </div>
          
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <div className="font-bold text-black dark:text-blue-300 mb-1">
              {t.nameDestiny.triad.soulUrge} ({results.soulUrge?.name})
            </div>
            <div className="text-sm text-black dark:text-slate-300">
              {(() => {
                if (!results.soulUrge) return '';
                const soulNumber = results.soulUrge.name;
                return isFr && soulNumber in t.spiritualStations
                  ? t.spiritualStations[soulNumber as keyof typeof t.spiritualStations].quality
                  : results.soulUrge.quality;
              })()}
            </div>
          </div>
          
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="font-bold text-black dark:text-green-300 mb-1">
              {t.nameDestiny.triad.outerPersonality} ({results.personality?.name})
            </div>
            <div className="text-sm text-black dark:text-slate-300">
              {(() => {
                if (!results.personality) return '';
                const personalityNumber = results.personality.name;
                return isFr && personalityNumber in t.spiritualStations
                  ? t.spiritualStations[personalityNumber as keyof typeof t.spiritualStations].quality
                  : results.personality.quality;
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Life Guidance */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-amber-500" />
          {t.nameDestiny.guidance.title}
        </h3>
        
        <div className="space-y-5">
          <div>
            <div className="font-semibold text-yellow-700 dark:text-yellow-400 mb-1 flex items-center gap-2">
              🧭 {t.nameDestiny.guidance.yourPath}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 italic">
              {t.nameDestiny.guidance.yourPathDesc}
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              {(() => {
                // Build localized interpretation
                const destinyStation = localizedStation;
                const soulStation = isFr && results.soulUrge && results.soulUrge.name in t.spiritualStations
                  ? t.spiritualStations[results.soulUrge.name as keyof typeof t.spiritualStations]
                  : results.soulUrge;
                const personalityStation = isFr && results.personality && results.personality.name in t.spiritualStations
                  ? t.spiritualStations[results.personality.name as keyof typeof t.spiritualStations]
                  : results.personality;
                
                if (isFr) {
                  return `Votre destin de vie (${destinyStation.name}) vous appelle   ${destinyStation.quality.toLowerCase()}. ` +
                    `Votre âme aspire profondément   ${soulStation?.quality.toLowerCase()}, ` +
                    `tandis qu'extérieurement vous exprimez ${personalityStation?.quality.toLowerCase()}. ` +
                    `L'intégration se produit lorsque vous alignez ces trois dimensions.`;
                } else {
                  return results.interpretation;
                }
              })()}
            </p>
          </div>
          
          <div>
            <div className="font-semibold text-indigo-700 dark:text-indigo-400 mb-1 flex items-center gap-2">
              🕌 {t.nameDestiny.guidance.spiritualPractice}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 italic">
              {t.nameDestiny.guidance.spiritualPracticeDesc}
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              {localizedStation.practice}
            </p>
          </div>
          
          <div>
            <div className="font-semibold text-blue-700 dark:text-blue-400 mb-1 flex items-center gap-2">
              📖 {t.nameDestiny.guidance.quranicGuidance}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 italic">
              {t.nameDestiny.guidance.quranicGuidanceDesc}
            </p>
            <p className="text-slate-700 dark:text-slate-300 italic">
              {localizedStation.verse}
            </p>
          </div>
          
          <div>
            <div className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-2">
              🛠️ {t.nameDestiny.guidance.practicalAction}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2 italic">
              {t.nameDestiny.guidance.practicalActionDesc}
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              {localizedStation.practical}
            </p>
          </div>
          
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border-l-4 border-amber-500">
            <div className="font-semibold text-amber-900 dark:text-amber-300 mb-1 flex items-center gap-2">
              ⚠️ {t.nameDestiny.guidance.shadowToWatch}
            </div>
            <p className="text-xs text-amber-700 dark:text-amber-400 mb-2 italic">
              {t.nameDestiny.guidance.shadowToWatchDesc}
            </p>
            <p className="text-amber-800 dark:text-amber-200">
              {localizedStation.shadow}
            </p>
          </div>
        </div>
      </div>

      {/* Educational Materials for Name Destiny */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
        <div className="flex items-center gap-3 mb-6">
          <BookMarked className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          <div>
            <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100">
              {language === 'fr' ? 'Matériel Éducatif' : 'Educational Materials'}
            </h3>
            <p className="text-sm text-purple-700 dark:text-purple-300 mt-1">
              {language === 'fr' 
                ? 'Apprenez-en plus sur la Science des Lettres'
                : 'Learn more about the Science of Letters'}
            </p>
          </div>
        </div>

        <NameDestinyLearningCenter currentLanguage={language === 'fr' ? 'fr' : 'en'} />

        {/* AI Deep Analysis Section */}
        <div className="mt-8">
          <AIAnalysis 
            calculationData={{
              name: results.nameDestiny?.arabicName || '',
              motherName: results.nameDestiny?.motherArabicName || '',
              totalValue: results.kabir,
              saghir: results.saghir,
              hadath: results.hadath,
              element: results.nameDestiny?.element,
              elementDistribution: results.nameDestiny?.elementDistribution,
              burj: results.nameDestiny?.burj,
              planetaryHour: results.nameDestiny?.hourIndex,
              divineNameResonance: results.nameDestiny?.divineNameResonance,
              colorResonance: results.nameDestiny?.colorResonance,
              geometry: results.geometry,
            }}
            analysisType="name-destiny"
            language={language === 'fr' ? 'ar' : language as 'ar' | 'en'}
          />
        </div>

        {/* AI Chat Assistant */}
        <AIChat
          calculationData={{
            name: results.nameDestiny?.arabicName || '',
            motherName: results.nameDestiny?.motherArabicName || '',
            totalValue: results.kabir,
            saghir: results.saghir,
            hadath: results.hadath,
            element: results.nameDestiny?.element,
            elementDistribution: results.nameDestiny?.elementDistribution,
            burj: results.nameDestiny?.burj,
            planetaryHour: results.nameDestiny?.hourIndex,
            divineNameResonance: results.nameDestiny?.divineNameResonance,
            colorResonance: results.nameDestiny?.colorResonance,
            geometry: results.geometry,
          }}
          analysisType="name-destiny"
          language={language as 'ar' | 'en' | 'fr'}
        />
      </div>
    </div>
  );
}

function CompatibilityResults({ results }: { results: any }) {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'results' | 'learning' | 'methods' | 'glossary'>('results');
  const tabContainerRef = useRef<HTMLDivElement>(null);
  
  const tabs = {
    en: {
      results: 'Results',
      learning: 'Learning Center',
      methods: 'Method Guide',
      glossary: 'Glossary'
    },
    fr: {
      results: 'Résultats',
      learning: "Centre d'Apprentissage",
      methods: 'Guide des Méthodes',
      glossary: 'Glossaire'
    }
  };
  
  const tabLabels = language === 'fr' ? tabs.fr : tabs.en;
  
  // Tab order for navigation
  const tabOrder: ('results' | 'learning' | 'methods' | 'glossary')[] = ['results', 'learning', 'methods', 'glossary'];
  
  // Navigate to previous/next tab
  const navigateTab = (direction: 'prev' | 'next') => {
    const currentIndex = tabOrder.indexOf(activeTab);
    let newIndex: number;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? tabOrder.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === tabOrder.length - 1 ? 0 : currentIndex + 1;
    }
    
    setActiveTab(tabOrder[newIndex]);
  };
  
  // Scroll tabs container
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabContainerRef.current) {
      const scrollAmount = 200;
      const newScrollLeft = direction === 'left' 
        ? tabContainerRef.current.scrollLeft - scrollAmount
        : tabContainerRef.current.scrollLeft + scrollAmount;
      
      tabContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };
  
  // Helper function to get score interpretation
  const getScoreInterpretation = (score: number, quality: string): string[] => {
    if (language === 'fr') {
      if (score >= 85) {
        return [
          'Ÿ Compatibilité exceptionnelle',
          '',
          'Ce que cela signifie :',
          'Harmonie exceptionnelle aux niveaux de surface et d\'¢me. Vos énergies se compl¨tent magnifiquement. Cette relation a un potentiel extraordinaire pour la croissance mutuelle et le bonheur.',
          '',
          'Attente réaliste :',
          '• La communication coule naturellement',
          '• Vous vous "comprenez" intuitivement',
          '• Les défis sont gérables ensemble',
          '• Concentrez-vous sur la croissance continue'
        ];
      } else if (score >= 70) {
        return [
          '’« Tr¨s bonne compatibilité',
          '',
          'Ce que cela signifie :',
          'Forte compatibilité avec des domaines mineurs   cultiver. Cette connexion a un grand potentiel avec un effort mutuel. Vos forces dépassent largement vos défis.',
          '',
          'Attente réaliste :',
          '• Excellent potentiel   long terme',
          '• Quelques domaines nécessitent une attention consciente',
          '• La communication et le compromis sont essentiels',
          '• Cultivez ce que vous avez construit ensemble'
        ];
      } else if (score >= 55) {
        return [
          'œ¨ Bonne compatibilité',
          '',
          'Ce que cela signifie :',
          'Compatibilité modérée. Vous pouvez construire une relation harmonieuse avec compréhension, communication et compromis. Vos différences sont gérables€”pas des obstacles€”mais nécessitent un effort conscient.',
          '',
          'Attente réaliste :',
          score >= 60 
            ? '• La vie quotidienne peut avoir des frictions\n• Mais votre fondation émotionnelle est solide\n• Concentrez-vous sur le lien profond que vous partagez'
            : '• Les deux partenaires doivent ªtre engagés\n• Les différences enrichissent quand honorées\n• La patience et la compréhension sont essentielles'
        ];
      } else if (score >= 40) {
        return [
          'š ï¸ Compatibilité difficile',
          '',
          'Ce que cela signifie :',
          'Différences significatives d\'énergie et d\'approche. Cette relation nécessite un effort substantiel, de la patience et une croissance mutuelle. Possible, mais les deux partenaires doivent ªtre pleinement engagés.',
          '',
          'Attente réaliste :',
          '• Nécessite un travail conscient quotidien',
          '• Les deux doivent vouloir grandir ensemble',
          '• Cherchez des conseils professionnels si nécessaire',
          '• Célébrez les petites victoires'
        ];
      } else {
        return [
          'š¨ Tr¨s difficile',
          '',
          'Ce que cela signifie :',
          'Conflits élémentaires majeurs. Bien que non impossible, ce jumelage fait face   des défis fondamentaux qui nécessitent un engagement profond pour ªtre surmontés.',
          '',
          'Considération sérieuse :',
          '• Štes-vous tous deux pleinement engagés   grandir ?',
          '• Le conseil professionnel est fortement recommandé',
          '• Fixez des attentes réalistes',
          '• Honorez vos besoins individuels aussi'
        ];
      }
    } else {
      if (score >= 85) {
        return [
          'Ÿ Exceptional Compatibility',
          '',
          'What This Means:',
          'Outstanding compatibility on both surface and soul levels. Your energies complement each other beautifully. This relationship has extraordinary potential for mutual growth and happiness.',
          '',
          'Realistic Expectation:',
          '• Communication flows naturally',
          '• You "get" each other intuitively',
          '• Challenges are manageable together',
          '• Focus on continuous growth'
        ];
      } else if (score >= 70) {
        return [
          '’« Very Good Compatibility',
          '',
          'What This Means:',
          'Strong compatibility with minor areas to nurture. This connection has great potential with mutual effort. Your strengths far outweigh your challenges.',
          '',
          'Realistic Expectation:',
          '• Excellent long-term potential',
          '• Some areas need conscious attention',
          '• Communication and compromise are key',
          '• Nurture what you\'ve built together'
        ];
      } else if (score >= 55) {
        return [
          'œ¨ Good Compatibility',
          '',
          'What This Means:',
          'Moderate compatibility. You can build a harmonious relationship with understanding, communication, and compromise. Your differences are workable€”not deal-breakers€”but require conscious effort.',
          '',
          'Realistic Expectation:',
          score >= 60 
            ? '• Daily life may have friction\n• But your emotional foundation is strong\n• Focus on nurturing the deep bond you share'
            : '• Both partners need to be committed\n• Differences enrich when honored\n• Patience and understanding are essential'
        ];
      } else if (score >= 40) {
        return [
          'š ï¸ Challenging Compatibility',
          '',
          'What This Means:',
          'Significant differences in energy and approach. This relationship requires substantial effort, patience, and mutual growth. Possible, but both partners must be fully committed.',
          '',
          'Realistic Expectation:',
          '• Requires conscious daily work',
          '• Both must want to grow together',
          '• Seek professional guidance if needed',
          '• Celebrate small victories'
        ];
      } else {
        return [
          'š¨ Very Difficult',
          '',
          'What This Means:',
          'Major elemental conflicts. While not impossible, this pairing faces fundamental challenges that require deep commitment to overcome.',
          '',
          'Serious Consideration:',
          '• Are you both fully committed to growth?',
          '• Professional counseling is strongly recommended',
          '• Set realistic expectations',
          '• Honor your individual needs too'
        ];
      }
    }
  };
  
  // Check format type
  const isNewThreeMethod = results?.mode === 'relationship' && results?.methods;
  
  if (!results || !results.person1 || !results.person2) {
    return (
      <div className="text-center text-slate-500 dark:text-slate-400 py-8">
        Unable to calculate compatibility. Please ensure both names are entered.
      </div>
    );
  }

  // New format with four methods (Spiritual, Elemental, Planetary, Daily Interaction)
  if (isNewThreeMethod) {
    const { person1, person2, methods, overallScore, overallQuality, overallQualityFrench, summary, summaryFrench, recommendations, recommendationsFrench } = results as RelationshipCompatibility;
    
    const qualityColors: Record<string, string> = {
      'excellent': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
      'very-good': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
      'good': 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400',
      'moderate': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
      'challenging': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400'
    };
    
    // Select content based on language
    const displayRecommendations = language === 'fr' ? recommendationsFrench : recommendations;
    const displaySummary = language === 'fr' ? summaryFrench : summary;
    const displayOverallQuality = language === 'fr' ? overallQualityFrench : overallQuality.toUpperCase().replace('-', ' ');
    
    return (
      <div className="space-y-6">
        
        {/* Tab Navigation with Scroll Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-2 p-2 border-b border-slate-200 dark:border-slate-700">
            
            {/* Left Scroll Arrow */}
            <button
              onClick={() => scrollTabs('left')}
              className="flex-shrink-0 p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              title={language === 'fr' ? 'Défiler à gauche' : 'Scroll left'}
              aria-label={language === 'fr' ? 'Défiler à gauche' : 'Scroll left'}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Tabs Container - Horizontally Scrollable */}
            <div 
              ref={tabContainerRef}
              className="flex gap-2 flex-1 overflow-x-auto scroll-smooth"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              <button
                onClick={() => setActiveTab('results')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'results'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Heart className="w-5 h-5" />
                {tabLabels.results}
              </button>
              
              <button
                onClick={() => setActiveTab('learning')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'learning'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookOpen className="w-5 h-5" />
                {tabLabels.learning}
              </button>
              
              <button
                onClick={() => setActiveTab('methods')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'methods'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Compass className="w-5 h-5" />
                {tabLabels.methods}
              </button>
              
              <button
                onClick={() => setActiveTab('glossary')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                  activeTab === 'glossary'
                    ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <BookMarked className="w-5 h-5" />
                {tabLabels.glossary}
              </button>
            </div>
            
            {/* Right Scroll Arrow */}
            <button
              onClick={() => scrollTabs('right')}
              className="flex-shrink-0 p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
              title={language === 'fr' ? 'Défiler à droite' : 'Scroll right'}
              aria-label={language === 'fr' ? 'Défiler à droite' : 'Scroll right'}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'learning' && (
          <CompatibilityLearningCenter language={language === 'fr' ? 'fr' : 'en'} />
        )}
        
        {activeTab === 'methods' && (
          <MethodGuidePanel language={language === 'fr' ? 'fr' : 'en'} />
        )}
        
        {activeTab === 'glossary' && (
          <CompatibilityGlossary language={language === 'fr' ? 'fr' : 'en'} />
        )}
        
        {activeTab === 'results' && (
        <div className="space-y-8">
        
        {/* Enhanced Names Header with Beautiful Gradient */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-rose-100 via-pink-50 to-purple-100 dark:from-rose-950/40 dark:via-pink-950/30 dark:to-purple-950/40 p-8 border-2 border-rose-200 dark:border-rose-800">
          {/* Decorative Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative space-y-2">
            {/* Romantic Title */}
            <p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
              {language === 'fr' ? 'Analyse de Compatibilité Relationnelle' : 'Relationship Compatibility Analysis'}
            </p>
            
            {/* Names with Heart */}
            <div className="flex items-center justify-center gap-4 text-2xl font-bold">
              <span className="text-gray-900 dark:text-gray-50 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-xl backdrop-blur-sm">
                {person1.name}
              </span>
              <div className="relative">
                <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
                <div className="absolute inset-0 w-10 h-10 bg-rose-300 rounded-full blur-lg opacity-50"></div>
              </div>
              <span className="text-gray-900 dark:text-gray-50 bg-white/60 dark:bg-slate-800/60 px-4 py-2 rounded-xl backdrop-blur-sm">
                {person2.name}
              </span>
            </div>
          </div>
        </div>
        
        {/* Overall Score - Enhanced */}
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-950/30 dark:via-purple-950/30 dark:to-pink-950/30 rounded-2xl p-8 border-2 border-indigo-200 dark:border-indigo-800 shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <CompatibilityGauge 
              score={overallScore} 
              size="lg"
              label={language === 'fr' ? "Compatibilité Globale" : "Overall Compatibility"}
            />
            <div className={`px-6 py-3 rounded-full font-bold text-lg ${qualityColors[overallQuality] || qualityColors['moderate']} border-2`}>
              {displayOverallQuality}
            </div>
            
            {/* What This Means - Simple Language */}
            <div className="max-w-2xl mt-4">
              <div className="flex items-start gap-3 p-4 bg-white/60 dark:bg-slate-800/60 rounded-xl backdrop-blur-sm">
                <Info className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <p className="font-semibold text-slate-900 dark:text-slate-50">
                    {language === 'fr' ? 'Ce que cela signifie:' : 'What This Means:'}
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {displaySummary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Four Methods - Enhanced Cards */}
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">
              {language === 'fr' ? 'Comment Nous Analysons Votre Compatibilité' : 'How We Analyze Your Compatibility'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {language === 'fr' 
                ? 'Nous examinons votre relation à travers quatre dimensions différentes pour vous donner une image complète.'
                : 'We examine your relationship through four different dimensions to give you the complete picture.'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Spiritual Destiny - Enhanced */}
            <div className="group hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-purple-900/30 rounded-2xl border-2 border-purple-200 dark:border-purple-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-2xl">
                    🌙
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-50">
                      {language === 'fr' ? 'Connexion des Âmes' : 'Soul Connection'}
                    </h4>
                    <p className="text-sm text-purple-600 dark:text-purple-400">
                      {language === 'fr' ? 'Votre alignement spirituel' : 'Your spiritual alignment'}
                    </p>
                  </div>
                </div>
                <CompatibilityGauge 
                  score={methods.spiritualDestiny.score}
                  size="md"
                  color={methods.spiritualDestiny.color === 'green' ? '#10b981' : 
                         methods.spiritualDestiny.color === 'blue' ? '#3b82f6' :
                         methods.spiritualDestiny.color === 'yellow' ? '#eab308' :
                         methods.spiritualDestiny.color === 'purple' ? '#a855f7' : '#f97316'}
                />
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'fr' ? methods.spiritualDestiny.descriptionFrench : methods.spiritualDestiny.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-purple-600 dark:text-purple-400">
                <Sparkles className="w-4 h-4" />
                <span>{language === 'fr' ? 'Nombre sacré:' : 'Sacred number:'} {methods.spiritualDestiny.remainder}</span>
              </div>
            </div>

            {/* Elemental Temperament - Enhanced */}
            <div className="group hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-950/30 dark:to-cyan-900/30 rounded-2xl border-2 border-cyan-200 dark:border-cyan-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-500 rounded-xl flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-50">
                      {language === 'fr' ? 'Équilibre des Tempéraments' : 'Personality Balance'}
                    </h4>
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">
                      {language === 'fr' ? 'Vos natures élémentales' : 'Your elemental natures'}
                    </p>
                  </div>
                </div>
                <CompatibilityGauge 
                  score={methods.elementalTemperament.score}
                  size="md"
                  color={methods.elementalTemperament.color === 'red' ? '#ef4444' :
                         methods.elementalTemperament.color === 'blue' ? '#3b82f6' :
                         methods.elementalTemperament.color === 'cyan' ? '#06b6d4' : '#10b981'}
                />
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'fr' ? methods.elementalTemperament.descriptionFrench : methods.elementalTemperament.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-cyan-600 dark:text-cyan-400">
                <Flame className="w-4 h-4" />
                <span>{language === 'fr' ? 'Élément:' : 'Element:'} {language === 'fr' ? methods.elementalTemperament.sharedElementFrench : methods.elementalTemperament.sharedElement}</span>
              </div>
            </div>

            {/* Planetary Cosmic - Enhanced */}
            <div className="group hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-950/30 dark:to-indigo-900/30 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center text-2xl">
                    ⭐
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-50">
                      {language === 'fr' ? 'Harmonie Cosmique' : 'Cosmic Harmony'}
                    </h4>
                    <p className="text-sm text-indigo-600 dark:text-indigo-400">
                      {language === 'fr' ? 'Vos influences planétaires' : 'Your planetary influences'}
                    </p>
                  </div>
                </div>
                <CompatibilityGauge 
                  score={methods.planetaryCosmic.score}
                  size="md"
                  color={methods.planetaryCosmic.color === 'green' ? '#10b981' :
                         methods.planetaryCosmic.color === 'blue' ? '#3b82f6' :
                         methods.planetaryCosmic.color === 'yellow' ? '#eab308' : '#f97316'}
                />
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'fr' ? methods.planetaryCosmic.descriptionFrench : methods.planetaryCosmic.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400">
                <Star className="w-4 h-4" />
                <span>{methods.planetaryCosmic.person1Planet.name} × {methods.planetaryCosmic.person2Planet.name}</span>
              </div>
            </div>

            {/* Daily Interaction - Enhanced */}
            <div className="group hover:shadow-2xl transition-all duration-300 p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 rounded-2xl border-2 border-amber-200 dark:border-amber-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center text-2xl">
                    🤝
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-50">
                      {language === 'fr' ? 'Vie Quotidienne' : 'Daily Life Together'}
                    </h4>
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      {language === 'fr' ? 'Vos interactions journalières' : 'Your day-to-day dynamics'}
                    </p>
                  </div>
                </div>
                <CompatibilityGauge 
                  score={methods.dailyInteraction.score}
                  size="md"
                  color={methods.dailyInteraction.color === 'green' ? '#10b981' :
                         methods.dailyInteraction.color === 'blue' ? '#3b82f6' :
                         methods.dailyInteraction.color === 'yellow' ? '#eab308' : '#f97316'}
                />
              </div>
              
              <div className="p-4 bg-white/50 dark:bg-slate-800/50 rounded-xl">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {language === 'fr' ? methods.dailyInteraction.descriptionFrench : methods.dailyInteraction.description}
                </p>
              </div>
              
              <div className="flex items-center gap-2 text-xs text-amber-600 dark:text-amber-400">
                <Users className="w-4 h-4" />
                <span>
                  {language === 'fr' 
                    ? `${methods.dailyInteraction.person1DominantFrench} × ${methods.dailyInteraction.person2DominantFrench}`
                    : `${methods.dailyInteraction.person1Dominant} × ${methods.dailyInteraction.person2Dominant}`
                  }
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Letter Chemistry - Your Personality Balance */}
        <div className="p-6 bg-gradient-to-br from-rose-50 to-orange-50 dark:from-rose-950/20 dark:to-orange-950/20 rounded-xl space-y-4 border-2 border-rose-200 dark:border-rose-800">
          {/* Title with Explanation */}
          <div className="text-center space-y-3 mb-4">
            <div className="space-y-1">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
                <span>🧪</span>
                <span>{language === 'fr' ? 'Votre Équilibre Personnalité' : 'Your Personality Balance'}</span>
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {language === 'fr' ? '(Chimie des Lettres • ' : '(Letter Chemistry • '}زواج الحروف)
              </p>
            </div>
            {/* Description Line */}
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              {language === 'fr' 
                ? 'Chaque nom contient des énergies (Feu, Air, Eau, Terre). Nous analysons comment ces énergies se complètent entre vous deux.'
                : 'Each name holds energies (Fire, Air, Water, Earth). We analyze how these energies complement each other between you two.'}
            </p>
          </div>
          
          {(() => {
            // Calculate element distributions for both people
            const person1Dist = calculateElementDistribution(person1.arabicName);
            const person2Dist = calculateElementDistribution(person2.arabicName);
            
            // Calculate combined distribution
            const combined = {
              fire: Math.round((person1Dist.fire + person2Dist.fire) / 2),
              air: Math.round((person1Dist.air + person2Dist.air) / 2),
              water: Math.round((person1Dist.water + person2Dist.water) / 2),
              earth: Math.round((person1Dist.earth + person2Dist.earth) / 2)
            };
            
            // Calculate overall harmony percentage (based on element balance)
            const maxElement = Math.max(combined.fire, combined.air, combined.water, combined.earth);
            const minElement = Math.min(combined.fire, combined.air, combined.water, combined.earth);
            const harmonyPercentage = Math.round(100 - ((maxElement - minElement) * 1.5)); // More balanced = higher harmony
            
            const dominant1 = getDominantElement(person1Dist);
            const dominant2 = getDominantElement(person2Dist);
            
            return (
              <>
                {/* Combined Element Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {t.compatibilityResults.combinedHarmony}
                    </span>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                      {t.ilmHuruf.harmony}: {harmonyPercentage}%
                    </span>
                  </div>
                  {/* Harmony explanation */}
                  <p className="text-xs italic text-gray-600 dark:text-gray-400 text-center">
                    {t.compatibilityResults.combinedHarmonyExplain}
                  </p>
                  <div className="flex h-6 rounded-full overflow-hidden border-2 border-white dark:border-slate-700 shadow-inner">
                    {combined.fire > 0 && (
                      <div 
                        style={{ width: `${combined.fire}%` }}
                        className="bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold"
                        title={`${getElementName('fire', language === 'fr' ? 'fr' : 'en')} ${combined.fire}%`}
                      >
                        {combined.fire >= 15 && `🔥 ${combined.fire}%`}
                      </div>
                    )}
                    {combined.air > 0 && (
                      <div 
                        style={{ width: `${combined.air}%` }}
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 flex items-center justify-center text-white text-xs font-bold"
                        title={`${getElementName('air', language === 'fr' ? 'fr' : 'en')} ${combined.air}%`}
                      >
                        {combined.air >= 15 && `🌬️ ${combined.air}%`}
                      </div>
                    )}
                    {combined.water > 0 && (
                      <div 
                        style={{ width: `${combined.water}%` }}
                        className="bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white text-xs font-bold"
                        title={`${getElementName('water', language === 'fr' ? 'fr' : 'en')} ${combined.water}%`}
                      >
                        {combined.water >= 15 && `💧 ${combined.water}%`}
                      </div>
                    )}
                    {combined.earth > 0 && (
                      <div 
                        style={{ width: `${combined.earth}%` }}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 flex items-center justify-center text-white text-xs font-bold"
                        title={`${getElementName('earth', language === 'fr' ? 'fr' : 'en')} ${combined.earth}%`}
                      >
                        {combined.earth >= 15 && `🌍 ${combined.earth}%`}
                      </div>
                    )}
                  </div>
                </div>

                {/* NEW FEATURE 2: Dominant Element Pair Insight */}
                <div className="mt-4 p-4 bg-white/50 dark:bg-slate-800/50 rounded-lg border border-rose-200 dark:border-rose-800">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-2xl">{getElementIcon(dominant1)}</span>
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                      {getElementName(dominant1, language === 'fr' ? 'fr' : 'en')}
                    </span>
                    <span className="text-2xl">×</span>
                    <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                      {getElementName(dominant2, language === 'fr' ? 'fr' : 'en')}
                    </span>
                    <span className="text-2xl">{getElementIcon(dominant2)}</span>
                  </div>
                  <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                    {t.compatibilityResults.balanceAdvice[getBalanceAdviceKey(dominant1, dominant2) as keyof typeof t.compatibilityResults.balanceAdvice]}
                  </p>
                </div>

                {/* Individual breakdowns */}
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-950/20 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="space-y-2 mb-3">
                      <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                        {person1.name}
                      </div>
                      {/* Element Temperament Tag */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg">{getElementIcon(dominant1)}</span>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 px-2 py-1 rounded-full border border-purple-300 dark:border-purple-700">
                          {(() => {
                            const key = `${dominant1}Temperament` as 'fireTemperament' | 'airTemperament' | 'waterTemperament' | 'earthTemperament';
                            return t.compatibilityResults[key];
                          })()}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {(['fire', 'air', 'water', 'earth'] as const).map(el => (
                        person1Dist[el] > 0 && (
                          <div key={el} className="flex items-center gap-2 text-xs">
                            <span>{getElementIcon(el)}</span>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  el === 'fire' ? 'bg-red-500' :
                                  el === 'air' ? 'bg-cyan-500' :
                                  el === 'water' ? 'bg-blue-500' : 'bg-green-600'
                                }`}
                                style={{ width: `${person1Dist[el]}%` }}
                              />
                            </div>
                            <span className="w-10 text-right text-gray-600 dark:text-gray-400">
                              {person1Dist[el]}%
                            </span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg border border-pink-200 dark:border-pink-800">
                    <div className="space-y-2 mb-3">
                      <div className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                        {person2.name}
                      </div>
                      {/* Element Temperament Tag */}
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg">{getElementIcon(dominant2)}</span>
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-slate-800 px-2 py-1 rounded-full border border-pink-300 dark:border-pink-700">
                          {(() => {
                            const key = `${dominant2}Temperament` as 'fireTemperament' | 'airTemperament' | 'waterTemperament' | 'earthTemperament';
                            return t.compatibilityResults[key];
                          })()}
                        </span>
                      </div>
                    </div>
                    <div className="space-y-1">
                      {(['fire', 'air', 'water', 'earth'] as const).map(el => (
                        person2Dist[el] > 0 && (
                          <div key={el} className="flex items-center gap-2 text-xs">
                            <span>{getElementIcon(el)}</span>
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  el === 'fire' ? 'bg-red-500' :
                                  el === 'air' ? 'bg-cyan-500' :
                                  el === 'water' ? 'bg-blue-500' : 'bg-green-600'
                                }`}
                                style={{ width: `${person2Dist[el]}%` }}
                              />
                            </div>
                            <span className="w-10 text-right text-gray-600 dark:text-gray-400">
                              {person2Dist[el]}%
                            </span>
                          </div>
                        )
                      ))}
                    </div>
                  </div>
                </div>
              </>
            );
          })()}
        </div>

        {/* Spiritual Guidance for Your Relationship */}
        <div className="p-6 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 rounded-xl border-2 border-amber-200 dark:border-amber-800">
          <div className="text-center space-y-3 mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 flex items-center justify-center gap-2">
              <span>🕊️</span>
              <span>{language === 'fr' ? 'Guidance Spirituelle' : 'Spiritual Guidance'}</span>
            </h3>
            {/* Contextual Sentence */}
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto italic leading-relaxed">
              {language === 'fr' 
                ? 'Des pratiques spirituelles personnalisées pour renforcer votre harmonie relationnelle et équilibrer vos énergies.'
                : 'Personalized spiritual practices to strengthen your relationship harmony and balance your energies.'}
            </p>
          </div>
          {(() => {
            const person1Dist = calculateElementDistribution(person1.arabicName);
            const person2Dist = calculateElementDistribution(person2.arabicName);
            const dominant1 = getDominantElement(person1Dist);
            const dominant2 = getDominantElement(person2Dist);
            
            // Get dhikr for the most dominant element
            const primaryDhikr = DHIKR_NAMES[dominant1];
            const primaryEffectKey = getDhikrEffectKey(dominant1) as 'fireEffect' | 'airEffect' | 'waterEffect' | 'earthEffect';
            const primaryEffect = t.compatibilityResults.dhikrEffects[primaryEffectKey];
            const secondaryDhikr = dominant1 !== dominant2 ? DHIKR_NAMES[dominant2] : null;
            const secondaryEffectKey = secondaryDhikr ? getDhikrEffectKey(dominant2) as 'fireEffect' | 'airEffect' | 'waterEffect' | 'earthEffect' : null;
            const secondaryEffect = secondaryEffectKey ? t.compatibilityResults.dhikrEffects[secondaryEffectKey] : null;
            
            return (
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/70 dark:bg-slate-800/70 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getElementIcon(dominant1)}</span>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-gray-100">
                        {language === 'fr' ? primaryDhikr.nameFr : primaryDhikr.name}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {t.compatibilityResults.for} {getElementName(dominant1, language === 'fr' ? 'fr' : 'en')}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {primaryEffect}
                  </p>
                </div>
                
                {secondaryDhikr && (
                  <div className="p-4 bg-white/70 dark:bg-slate-800/70 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">{getElementIcon(dominant2)}</span>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-gray-100">
                          {language === 'fr' ? secondaryDhikr.nameFr : secondaryDhikr.name}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {t.compatibilityResults.for} {getElementName(dominant2, language === 'fr' ? 'fr' : 'en')}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {secondaryEffect}
                    </p>
                  </div>
                )}
              </div>
            );
          })()}
        </div>

        {/* Recommendations */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            <h3 className="font-bold text-gray-900 dark:text-gray-100">
              {t.compatibilityResults.recommendations}
            </h3>
          </div>
          
          <ul className="space-y-2">
            {displayRecommendations.map((rec, idx) => (
              <li 
                key={idx}
                className="flex items-start gap-2 p-3 bg-amber-50 dark:bg-amber-950/20 rounded-lg"
              >
                <span className="text-amber-600 dark:text-amber-400 font-bold">•</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
        )}
      </div>
    );
  }

  // Old format (fallback)
  const harmonyColor = results.harmonyScore >= 75 ? 'text-green-600' : results.harmonyScore >= 50 ? 'text-amber-600' : 'text-red-600';
  const harmonyBg = results.harmonyScore >= 75 ? 'bg-green-50 dark:bg-green-900/20' : results.harmonyScore >= 50 ? 'bg-amber-50 dark:bg-amber-900/20' : 'bg-red-50 dark:bg-red-900/20';
  
  return (
    <div className="space-y-6">
      {/* Harmony Score */}
      <div className={`${harmonyBg} rounded-xl p-6 border-2 ${harmonyColor.replace('text-', 'border-')}`}>
        <div className="text-center">
          <div className={`text-6xl font-bold mb-2 ${harmonyColor}`}>{results.harmonyScore}%</div>
          <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {results.relationship}
          </div>
          <div className="text-slate-700 dark:text-slate-300">{results.advice}</div>
        </div>
      </div>

      {/* Individual Profiles */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {results.person1.saghir}
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {results.person1.destiny?.name || 'Unknown'}
            </div>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            {results.person1.destiny?.quality || ''}
          </div>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
          <div className="text-center mb-3">
            <div className="text-3xl font-bold text-pink-600 dark:text-pink-400">
              {results.person2.saghir}
            </div>
            <div className="text-sm font-medium text-slate-600 dark:text-slate-400">
              {results.person2.destiny?.name || 'Unknown'}
            </div>
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-400">
            {results.person2.destiny?.quality || ''}
          </div>
        </div>
      </div>

      {/* Strengths & Challenges */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Strengths
          </h4>
          <ul className="space-y-2">
            {results.strengths.map((strength: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                <span className="text-green-500 mt-0.5">œ“</span>
                {strength}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
          <h4 className="font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            Growth Areas
          </h4>
          <ul className="space-y-2">
            {results.challenges.map((challenge: string, idx: number) => (
              <li key={idx} className="text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2">
                <span className="text-amber-500 mt-0.5">š¡</span>
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function LifePathResults({ results }: { results: EnhancedLifePathResult }) {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const {
    lifePathNumber,
    expressionNumber,
    soulUrgeNumber,
    personalityNumber,
    destinyNumber,
    personalYear,
    personalMonth,
    cycle,
    karmicDebts,
    sacredNumbers,
    pinnaclesAndChallenges,
    maternalInfluence
  } = results;
  
  return (
    <div className="space-y-8">
      {/* Enhanced Hero Header */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-8 shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star className="w-10 h-10 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold">
              {language === 'fr' ? 'Votre Chemin de Vie' : 'Your Life Path Journey'}
            </h2>
            <Sparkles className="w-10 h-10 animate-pulse" />
          </div>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez le plan unique de votre âme et les énergies qui guident votre destinée'
              : 'Discover your soul\'s unique blueprint and the energies guiding your destiny'}
          </p>
        </div>
      </div>

      {/* Core Numbers - Redesigned as Large Beautiful Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Life Path Number - From Birth Date */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-blue-400">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Compass className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-sm font-medium opacity-90">{t.lifePath.lifePathLabel}</h3>
                  <p className="text-xs opacity-75">{language === 'fr' ? 'De Votre Date de Naissance' : 'From Your Birth Date'}</p>
                </div>
              </div>
              <div className="text-5xl font-bold">{lifePathNumber}</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">
                {isFr && t.lifePath.numberArchetypes[lifePathNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[lifePathNumber as keyof typeof t.lifePath.numberArchetypes].title
                  : t.lifePath.numberArchetypes[lifePathNumber as keyof typeof t.lifePath.numberArchetypes]?.title || "Your Core Path"}
              </h4>
              <p className="text-sm opacity-90 leading-relaxed">
                {isFr && t.lifePath.numberArchetypes[lifePathNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[lifePathNumber as keyof typeof t.lifePath.numberArchetypes].meaning
                  : t.lifePath.numberArchetypes[lifePathNumber as keyof typeof t.lifePath.numberArchetypes]?.meaning || "This is your soul's blueprint and life purpose."}
              </p>
            </div>
            
            <div className="flex items-start gap-2 bg-white/10 rounded-lg p-3">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs opacity-90">
                {language === 'fr' 
                  ? 'Calculé à partir de votre date de naissance - votre mission de vie'
                  : 'Calculated from your birth date - your life\'s mission'}
              </p>
            </div>
          </div>
        </div>

        {/* Expression Number - From Name */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-emerald-400">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Sparkles className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-sm font-medium opacity-90">
                    {language === 'fr' ? 'Nombre d\'Expression' : 'Expression Number'}
                  </h3>
                  <p className="text-xs opacity-75">{language === 'fr' ? 'De Votre Nom' : 'From Your Name'}</p>
                </div>
              </div>
              <div className="text-5xl font-bold">{expressionNumber}</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">
                {isFr && t.lifePath.numberArchetypes[expressionNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[expressionNumber as keyof typeof t.lifePath.numberArchetypes].title
                  : t.lifePath.numberArchetypes[expressionNumber as keyof typeof t.lifePath.numberArchetypes]?.title || "How You Express"}
              </h4>
              <p className="text-sm opacity-90 leading-relaxed">
                {isFr && t.lifePath.numberArchetypes[expressionNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[expressionNumber as keyof typeof t.lifePath.numberArchetypes].meaning
                  : t.lifePath.numberArchetypes[expressionNumber as keyof typeof t.lifePath.numberArchetypes]?.meaning || "This is how you express your life path through your name's vibration."}
              </p>
            </div>
            
            <div className="flex items-start gap-2 bg-white/10 rounded-lg p-3">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs opacity-90">
                {language === 'fr' 
                  ? 'Calculé à partir de votre nom - comment vous exprimez votre chemin'
                  : 'Calculated from your name - how you express your path'}
              </p>
            </div>
          </div>
        </div>

        {/* Soul Urge Number - Your Heart's Desire */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-purple-400">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Heart className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-sm font-medium opacity-90">{t.lifePath.soulUrgeLabel}</h3>
                  <p className="text-xs opacity-75">{language === 'fr' ? 'Désir du Cœur' : 'Heart\'s Desire'}</p>
                </div>
              </div>
              <div className="text-5xl font-bold">{soulUrgeNumber}</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">
                {isFr && t.lifePath.numberArchetypes[soulUrgeNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[soulUrgeNumber as keyof typeof t.lifePath.numberArchetypes].title
                  : t.lifePath.numberArchetypes[soulUrgeNumber as keyof typeof t.lifePath.numberArchetypes]?.title || "What You Truly Want"}
              </h4>
              <p className="text-sm opacity-90 leading-relaxed">
                {isFr && t.lifePath.numberArchetypes[soulUrgeNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[soulUrgeNumber as keyof typeof t.lifePath.numberArchetypes].meaning
                  : t.lifePath.numberArchetypes[soulUrgeNumber as keyof typeof t.lifePath.numberArchetypes]?.meaning || "This reveals your deepest desires and what makes you feel fulfilled."}
              </p>
            </div>
            
            <div className="flex items-start gap-2 bg-white/10 rounded-lg p-3">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs opacity-90">{t.lifePath.soulUrgeSimple}</p>
            </div>
          </div>
        </div>

        {/* Personality Number - How Others See You */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-500 to-pink-700 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-pink-400">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <Users className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-sm font-medium opacity-90">{t.lifePath.personalityLabel}</h3>
                  <p className="text-xs opacity-75">{language === 'fr' ? 'Image Extérieure' : 'Outer Image'}</p>
                </div>
              </div>
              <div className="text-5xl font-bold">{personalityNumber}</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">
                {isFr && t.lifePath.numberArchetypes[personalityNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[personalityNumber as keyof typeof t.lifePath.numberArchetypes].title
                  : t.lifePath.numberArchetypes[personalityNumber as keyof typeof t.lifePath.numberArchetypes]?.title || "How People See You"}
              </h4>
              <p className="text-sm opacity-90 leading-relaxed">
                {isFr && t.lifePath.numberArchetypes[personalityNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[personalityNumber as keyof typeof t.lifePath.numberArchetypes].meaning
                  : t.lifePath.numberArchetypes[personalityNumber as keyof typeof t.lifePath.numberArchetypes]?.meaning || "This is the impression you make when people meet you."}
              </p>
            </div>
            
            <div className="flex items-start gap-2 bg-white/10 rounded-lg p-3">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs opacity-90">{t.lifePath.personalitySimple}</p>
            </div>
          </div>
        </div>

        {/* Destiny Number - Your Life Mission */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 p-6 shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-400">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 text-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-sm font-medium opacity-90">{t.lifePath.destinyLabel}</h3>
                  <p className="text-xs opacity-75">{language === 'fr' ? 'Mission de Vie' : 'Life Mission'}</p>
                </div>
              </div>
              <div className="text-5xl font-bold">{destinyNumber}</div>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <h4 className="font-semibold text-lg mb-2">
                {isFr && t.lifePath.numberArchetypes[destinyNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[destinyNumber as keyof typeof t.lifePath.numberArchetypes].title
                  : t.lifePath.numberArchetypes[destinyNumber as keyof typeof t.lifePath.numberArchetypes]?.title || "Your Life Mission"}
              </h4>
              <p className="text-sm opacity-90 leading-relaxed">
                {isFr && t.lifePath.numberArchetypes[destinyNumber as keyof typeof t.lifePath.numberArchetypes]
                  ? t.lifePath.numberArchetypes[destinyNumber as keyof typeof t.lifePath.numberArchetypes].meaning
                  : t.lifePath.numberArchetypes[destinyNumber as keyof typeof t.lifePath.numberArchetypes]?.meaning || "This is what you're meant to achieve and contribute to the world."}
              </p>
            </div>
            
            <div className="flex items-start gap-2 bg-white/10 rounded-lg p-3">
              <Info className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-xs opacity-90">{t.lifePath.destinySimple}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Maternal Influence Section - Only shown if available */}
      {maternalInfluence !== undefined && (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-6 border border-indigo-200 dark:border-indigo-800">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                {t.lifePath.externalInfluences}
              </h3>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {t.lifePath.maternalInfluenceExplanation}
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg p-5 text-black shadow-lg border-2 border-indigo-600">
            <div className="text-sm font-semibold text-black opacity-90 mb-1">
              {t.lifePath.maternalInfluence}
            </div>
            <div className="text-4xl font-bold text-black mb-2">{maternalInfluence}</div>
            <div className="text-xs text-black opacity-75 mb-3 font-semibold">
              {isFr && t.lifePath.numberArchetypes[maternalInfluence as keyof typeof t.lifePath.numberArchetypes]
                ? t.lifePath.numberArchetypes[maternalInfluence as keyof typeof t.lifePath.numberArchetypes].title
                : t.lifePath.numberArchetypes[maternalInfluence as keyof typeof t.lifePath.numberArchetypes]?.title || t.lifePath.externalEnergy}
            </div>
            <p className="text-xs text-black opacity-85 leading-relaxed mb-2">
              {t.lifePath.maternalInfluenceDesc}
            </p>
            <div className="bg-white bg-opacity-20 rounded p-2 text-xs text-black opacity-90">
              <span className="font-semibold">{t.lifePath.important}</span> {t.lifePath.importantNote}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Current Life Cycle - Calendar Style */}
      {cycle && (
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900/30 rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-700 p-8">
        {/* Decorative background */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-400 opacity-5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                {t.lifePath.whereYouAreNow}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {language === 'fr' ? 'Votre Moment dans le Temps' : 'Your Moment in Time'}
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Life Cycle Phase */}
            <div className="bg-white dark:bg-slate-900/40 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-sm font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.currentLifePhase}</div>
              </div>
              
              <div className="mb-4">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {cycle?.cycleNumber && t.lifePath.phaseOf9.replace('{number}', cycle.cycleNumber.toString())}
                </div>
                <div className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                  {cycle?.cycleStage}
                </div>
              </div>
              
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                {cycle?.positionInCycle && t.lifePath.yearTheme.replace('{position}', cycle.positionInCycle.toString())} 
                <span className="font-semibold text-indigo-600 dark:text-indigo-400"> {cycle?.yearTheme}</span>
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  {t.lifePath.focusAreas}
                </div>
                <div className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                  {cycle?.focus?.join(' • ')}
                </div>
              </div>
            </div>
            
            {/* Personal Year & Month - Calendar Cards */}
            <div className="space-y-4">
              <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                <span className="font-semibold text-slate-900 dark:text-slate-100">{t.lifePath.yourAge}:</span> {cycle?.age && t.lifePath.years.replace('{age}', cycle.age.toString())}
              </div>
              
              <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                {t.lifePath.yearMonthEnergy}
              </div>
              
              {/* Personal Year Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-amber-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm font-semibold opacity-90">{t.lifePath.personalYearLabel}</span>
                    </div>
                    <div className="text-5xl font-bold">{personalYear}</div>
                  </div>
                  <p className="text-sm opacity-90">{t.lifePath.overallEnergy}</p>
                  <div className="mt-3 pt-3 border-t border-white/30">
                    <p className="text-xs opacity-80">
                      {language === 'fr' ? 'L\'énergie qui guide toute votre année' : 'The energy guiding your entire year'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Personal Month Card */}
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-300">
                <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-20 rounded-full blur-2xl"></div>
                
                <div className="relative z-10 text-white">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      <span className="text-sm font-semibold opacity-90">{t.lifePath.personalMonthLabel}</span>
                    </div>
                    <div className="text-5xl font-bold">{personalMonth}</div>
                  </div>
                  <p className="text-sm opacity-90">{t.lifePath.monthFlow}</p>
                  <div className="mt-3 pt-3 border-t border-white/30">
                    <p className="text-xs opacity-80">
                      {language === 'fr' ? 'Le thème de votre mois actuel' : 'Your current month\'s theme'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Strengths and Challenges - Only show if data is available */}
      {pinnaclesAndChallenges && (
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
          {t.lifePath.strengthsAndGrowth}
        </h3>
        
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 pb-3 border-b border-slate-200 dark:border-slate-700">
          {t.lifePath.strengthsIntro}
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-green-700 dark:text-green-400">{t.lifePath.whatYouAreStrongAt}</h4>
            <div className="space-y-2">
              {pinnaclesAndChallenges.pinnacle1 && (
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-3 border-l-4 border-green-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.strength.replace('{number}', '1')}</div>
                <span className="font-bold text-green-700 dark:text-green-400">{pinnaclesAndChallenges.pinnacle1}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.strengthDesc1}</p>
              </div>
              )}
              {pinnaclesAndChallenges.pinnacle2 && (
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-3 border-l-4 border-green-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.strength.replace('{number}', '2')}</div>
                <span className="font-bold text-green-700 dark:text-green-400">{pinnaclesAndChallenges.pinnacle2}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.strengthDesc2}</p>
              </div>
              )}
              {pinnaclesAndChallenges.pinnacle3 && (
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-3 border-l-4 border-green-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.strength.replace('{number}', '3')}</div>
                <span className="font-bold text-green-700 dark:text-green-400">{pinnaclesAndChallenges.pinnacle3}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.strengthDesc3}</p>
              </div>
              )}
              {pinnaclesAndChallenges.pinnacle4 && (
              <div className="bg-green-50 dark:bg-green-900/30 rounded p-3 border-l-4 border-green-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.strength.replace('{number}', '4')}</div>
                <span className="font-bold text-green-700 dark:text-green-400">{pinnaclesAndChallenges.pinnacle4}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.strengthDesc4}</p>
              </div>
              )}
              {pinnaclesAndChallenges.currentPinnacle && (
              <div className="bg-emerald-100 dark:bg-emerald-900/50 rounded p-3 mt-3 border-2 border-emerald-500">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.currentStrength}</span>
                <div className="text-emerald-700 dark:text-emerald-300 font-bold mt-1">{pinnaclesAndChallenges.currentPinnacle}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.currentStrengthDesc}</p>
              </div>
              )}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3 text-amber-700 dark:text-amber-400">{t.lifePath.whereYouCanGrow}</h4>
            <div className="space-y-2">
              {pinnaclesAndChallenges.challenge1 && (
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-3 border-l-4 border-amber-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.growthArea.replace('{number}', '1')}</div>
                <span className="font-bold text-amber-700 dark:text-amber-400">{pinnaclesAndChallenges.challenge1}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.growthDesc1}</p>
              </div>
              )}
              {pinnaclesAndChallenges.challenge2 && (
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-3 border-l-4 border-amber-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.growthArea.replace('{number}', '2')}</div>
                <span className="font-bold text-amber-700 dark:text-amber-400">{pinnaclesAndChallenges.challenge2}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.growthDesc2}</p>
              </div>
              )}
              {pinnaclesAndChallenges.challenge3 && (
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-3 border-l-4 border-amber-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.growthArea.replace('{number}', '3')}</div>
                <span className="font-bold text-amber-700 dark:text-amber-400">{pinnaclesAndChallenges.challenge3}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.growthDesc3}</p>
              </div>
              )}
              {pinnaclesAndChallenges.challenge4 && (
              <div className="bg-amber-50 dark:bg-amber-900/30 rounded p-3 border-l-4 border-amber-500">
                <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.growthArea.replace('{number}', '4')}</div>
                <span className="font-bold text-amber-700 dark:text-amber-400">{pinnaclesAndChallenges.challenge4}</span>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.growthDesc4}</p>
              </div>
              )}
              {pinnaclesAndChallenges.currentChallenge && (
              <div className="bg-orange-100 dark:bg-orange-900/50 rounded p-3 mt-3 border-2 border-orange-500">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">{t.lifePath.currentChallenge}</span>
                <div className="text-orange-700 dark:text-orange-300 font-bold mt-1">{pinnaclesAndChallenges.currentChallenge}</div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{t.lifePath.currentChallengeDesc}</p>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Enhanced Special Numbers with Sparkle Effects */}
      {(karmicDebts?.length > 0 || sacredNumbers?.length > 0) && (
        <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-xl border-2 border-purple-200 dark:border-purple-700 p-8">
          {/* Sparkle background effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-20 left-20 w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-10 right-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg animate-pulse">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {t.lifePath.specialNumbers}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {language === 'fr' ? 'Nombres Uniques dans Votre Vie' : 'Unique Numbers in Your Life'}
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {karmicDebts?.length > 0 && (
                <div className="bg-white dark:bg-slate-900/40 rounded-xl p-6 shadow-lg border border-red-200 dark:border-red-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-red-100 dark:bg-red-900/50 rounded-lg flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.lifePath.lessonsToLearn}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {t.lifePath.lessonsDesc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {karmicDebts?.map((debt) => (
                      <div key={debt} className="group relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div className="relative bg-gradient-to-br from-red-500 to-orange-500 text-white rounded-full px-5 py-3 text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                          {debt}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {sacredNumbers?.length > 0 && (
                <div className="bg-white dark:bg-slate-900/40 rounded-xl p-6 shadow-lg border border-indigo-200 dark:border-indigo-800">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-slate-100">{t.lifePath.blessedNumbers}</h4>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {t.lifePath.blessedDesc}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {sacredNumbers?.map((sacred, index) => (
                      <div key={sacred} className="group relative">
                        {/* Sparkle effect on hover */}
                        <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                        <div 
                          className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white rounded-full px-5 py-3 text-lg font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                          style={{animationDelay: `${index * 0.2}s`}}
                        >
                          {sacred}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-indigo-200 dark:border-indigo-800">
                    <p className="text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
                      <Info className="w-4 h-4" />
                      {language === 'fr' 
                        ? 'Ces nombres portent une énergie spéciale pour vous' 
                        : 'These numbers carry special energy for you'}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* AI Deep Analysis Section */}
      <div className="mt-8">
        <AIAnalysis 
          calculationData={{
            birthDate: results.birthDate,
            lifePathNumber: results.lifePathNumber,
            personalYear: results.personalYear,
            personalMonth: results.personalMonth,
          }}
          analysisType="life-path"
          language={language === 'fr' ? 'ar' : language as 'ar' | 'en'}
        />
      </div>

      {/* AI Chat Assistant */}
      <AIChat
        calculationData={{
          birthDate: results.birthDate,
          lifePathNumber: results.lifePathNumber,
          personalYear: results.personalYear,
          personalMonth: results.personalMonth,
        }}
        analysisType="life-path"
        language={language as 'ar' | 'en' | 'fr'}
      />
    </div>
  );
}

function TimingResults({ results, birthDate, name, abjad }: { results: any; birthDate: string; name: string; abjad: any }) {
  const { t, language } = useLanguage();
  const isFr = language === 'fr';
  const { planetaryHour, personalYear } = results;
  const [restAlertDismissed, setRestAlertDismissed] = useState(false);
  
  // Real-time state for Act Now feature
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentHour, setCurrentHour] = useState<CurrentPlanetaryHour | null>(null);
  const [alignment, setAlignment] = useState<ElementAlignment | null>(null);
  const [timeWindow, setTimeWindow] = useState<TimeWindow | null>(null);
  const [actionButtons, setActionButtons] = useState<ActionButton[]>([]);
  const [userElement, setUserElement] = useState<ElementType | null>(null);
  const [dailyColorGuidance, setDailyColorGuidance] = useState<DailyColorGuidance | null>(null);
  const [todayReading, setTodayReading] = useState<DailyReading | null>(null);
  
  // Get today's info
  const today = new Date();
  const todayWeekday = today.toLocaleDateString('en-US', { weekday: 'long' });
  
  // Check sessionStorage for dismissal
  useEffect(() => {
    const dismissed = sessionStorage.getItem('restAlertDismissed');
    const dismissedDate = sessionStorage.getItem('restAlertDismissedDate');
    const todayStr = today.toISOString().split('T')[0];
    
    if (dismissed === 'true' && dismissedDate === todayStr) {
      setRestAlertDismissed(true);
    }
  }, []);
  
  // Calculate today's reading if we have a birth date and name
  useEffect(() => {
    if (birthDate && name) {
      try {
        // Generate a profile for today's reading
        const tempProfile = calculateUserProfile(name, new Date(birthDate), undefined, abjad);
        const weeklySummary = generateWeeklySummary(tempProfile, today);
        setTodayReading(weeklySummary.days.find(d => d.weekday === todayWeekday) || null);
      } catch (e) {
        console.error('Error calculating today\'s reading:', e);
        setTodayReading(null);
      }
    }
  }, [birthDate, name, abjad, todayWeekday]);
  
  // Real-time updates for Act Now feature
  useEffect(() => {
    // Update current hour and alignment
    const updateRealTimeData = () => {
      const now = new Date();
      setCurrentTime(now);
      
      // Calculate user's element if we have name
      let calculatedElement: ElementType | null = null;
      if (name) {
        try {
          const tempProfile = calculateUserProfile(name, birthDate ? new Date(birthDate) : undefined, undefined, abjad);
          calculatedElement = tempProfile.element;
          setUserElement(calculatedElement);
          
          // Calculate DAILY color guidance
          const dailyGuidance = calculateDailyColorGuidance(calculatedElement as ElementType2);
          setDailyColorGuidance(dailyGuidance);
        } catch (e) {
          console.error('Error calculating user element:', e);
        }
      }
      
      // Always get current hour
      const hour = getCurrentPlanetaryHour(now);
      setCurrentHour(hour);
      
      // Calculate alignment and actions if we have user element
      if (calculatedElement && hour) {
        const align = detectAlignment(calculatedElement, hour.element);
        const window = calculateTimeWindow(hour, calculatedElement);
        const buttons = generateActionButtons(align, window, t);
        
        setAlignment(align);
        setTimeWindow(window);
        setActionButtons(buttons);
      }
    };
    
    // Initial update
    updateRealTimeData();
    
    // Update every minute
    const interval = setInterval(updateRealTimeData, 60000);
    
    return () => clearInterval(interval);
  }, [name, birthDate, abjad]);
  
  const dismissRestAlert = () => {
    setRestAlertDismissed(true);
    const todayStr = today.toISOString().split('T')[0];
    sessionStorage.setItem('restAlertDismissed', 'true');
    sessionStorage.setItem('restAlertDismissedDate', todayStr);
  };
  
  const scrollToWeekView = () => {
    // Scroll to weekly section if it exists
    const weekSection = document.querySelector('[data-week-view]');
    if (weekSection) {
      weekSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // If not on page, inform user
      alert('Switch to "Weekly View" tab to see your full week forecast');
    }
  };
  
  if (!planetaryHour || !planetaryHour.planet) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border border-red-200 dark:border-red-800">
        <p className="text-red-800 dark:text-red-200">
          {t.timingResults.unableToCalculate}
        </p>
      </div>
    );
  }
  
  const PlanetIcon = PLANET_ICONS[planetaryHour.planet as Planet];
  
  return (
    <div className="space-y-6">
      
      {/* Today's Rest Signal Alert */}
      {todayReading?.isRestDay && !restAlertDismissed && (
        <div className={`p-5 rounded-xl border-2 animate-in slide-in-from-top duration-300 ${
          todayReading.restLevel === 'deep' 
            ? 'bg-red-50 border-red-300 dark:bg-red-900/20 dark:border-red-700'
            : 'bg-blue-50 border-blue-300 dark:bg-blue-900/20 dark:border-blue-700'
        }`}>
          
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-4xl">
                {todayReading.restLevel === 'deep' ? '›‘' : '™'}
              </span>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  {todayReading.restLevel === 'deep' ? t.timingResults.deepRestNeededToday : t.timingResults.todayIsRestDay}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 flex items-center gap-1">
                  <span>{t.timingResults.harmonyScore}: {todayReading.harmony_score}/10</span>
                  {birthDate && name && (
                    <HarmonyTooltip
                      breakdown={(() => {
                        try {
                          const tempProfile = calculateUserProfile(name, new Date(birthDate), undefined, abjad);
                          return calculateHarmonyBreakdown(
                            todayReading.day_planet,
                            tempProfile.element,
                            tempProfile.kawkab,
                            todayReading.ruh_phase,
                            tempProfile.ruh,
                            t.timingResults.planetEnergy.replace('{planet}', todayReading.day_planet)
                          ) as HarmonyBreakdown;
                        } catch {
                          // Fallback if profile calculation fails
                          return {
                            score: todayReading.harmony_score,
                            userElement: 'Fire' as ElementType,
                            contextElement: 'Fire' as ElementType,
                            contextLabel: t.timingResults.planetEnergy.replace('{planet}', todayReading.day_planet),
                            ruhPhase: todayReading.ruh_phase,
                            connectionType: 'weak' as const,
                            elementMatch: 25,
                            planetMatch: 50,
                            ruhImpact: 50
                          };
                        }
                      })()}
                      context="daily"
                    />
                  )}
                  <span className="mx-1">•</span>
                  <span>{t.timingResults.planetEnergy.replace('{planet}', todayReading.day_planet)}</span>
                  <span className="mx-1">•</span>
                  <span>{todayReading.weekday}</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Message */}
          <div className="mb-4">
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {todayReading.restLevel === 'deep' 
                ? t.timingResults.criticalLowEnergy
                : t.timingResults.lowHarmonyToday
              }
            </p>
          </div>
          
          {/* Quick Practices */}
          {todayReading.restPractices && todayReading.restPractices.length > 0 && (
            <div className="bg-white dark:bg-slate-800 rounded-lg p-4 mb-4">
              <p className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-wide">
                {t.timingResults.recommendedToday}
              </p>
              <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                {todayReading.restPractices.slice(0, 3).map((practice, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-500 dark:text-blue-400 flex-shrink-0">•</span>
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-3">
            <button 
              onClick={scrollToWeekView}
              className="text-sm px-4 py-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 font-medium"
            >
              <Calendar className="w-4 h-4" />
              {t.timingResults.viewFullWeek}
            </button>
            
            <button 
              onClick={dismissRestAlert}
              className="text-sm px-4 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
            >
              {t.timingResults.dismiss}
            </button>
          </div>
          
          {/* Classical Wisdom */}
          <p className="text-xs italic text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-200 dark:border-slate-700">
            <span className="font-semibold">
              "{todayReading.restLevel === 'deep' 
                ? t.timingResults.deepRestQuote
                : t.timingResults.restDayQuote
              }"
            </span>
            {' €” '}
            {todayReading.restLevel === 'deep'
              ? t.timingResults.deepRestTranslation
              : t.timingResults.restDayTranslation
            }
          </p>
        </div>
      )}
      
      {/* Note about rest day context */}
      {todayReading?.isRestDay && !restAlertDismissed && (
        <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>š ï¸ {t.timingResults.restDayActive}</strong> €” {t.timingResults.restDayNote}
          </p>
        </div>
      )}
      
      {/* Daily Color Guidance - Positioned before hourly planetary info */}
      {dailyColorGuidance && <DailyColorGuidanceCard guidance={dailyColorGuidance} />}
      
      {/* Act Now - Real-Time Planetary Hour */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
          <Clock className="w-5 h-5 text-amber-500" />
          {t.timingResults.currentPlanetaryHour} {currentHour && 'š¡'}
        </h3>
        
        <div className="text-center mb-6">
          <PlanetIcon className={`w-16 h-16 mx-auto mb-3 ${PLANET_COLORS[planetaryHour.planet as Planet]}`} />
          <div className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            {planetaryHour.planet}
          </div>
          <div className="text-lg text-slate-600 dark:text-slate-400">
            {planetaryHour.quality}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
            <div className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 w-4" />
              {t.timingResults.favorableFor}
            </div>
            <ul className="space-y-1">
              {planetaryHour.favorable.map((item: string, idx: number) => (
                <li key={idx} className="text-sm text-slate-700 dark:text-slate-300">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
            <div className="font-bold text-amber-700 dark:text-amber-300 mb-2">
              {t.timingResults.avoid}
            </div>
            <ul className="space-y-1">
              {planetaryHour.avoid.map((item: string, idx: number) => (
                <li key={idx} className="text-sm text-slate-700 dark:text-slate-300">
                  • {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Act Now Enhancement - Show if we have user element */}
        {currentHour && alignment && timeWindow && userElement && (
          <div className="mt-6 space-y-4">
            {/* Status Banner */}
            <div className={`rounded-lg p-4 ${
              alignment.quality === 'perfect' || alignment.quality === 'strong'
                ? userElement === 'Fire' ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white' :
                  userElement === 'Air' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' :
                  userElement === 'Water' ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white' :
                  'bg-gradient-to-r from-amber-600 to-yellow-700 text-white'
                : 'bg-gradient-to-r from-gray-200 to-gray-300 text-slate-900'
            }`}>
              <div className="text-center">
                <div className="text-2xl mb-2 font-bold">
                  {alignment.quality === 'perfect' ? `œ¨ ${t.timingResults.perfectAlignment}` : 
                   alignment.quality === 'strong' ? `’« ${t.timingResults.strongEnergy}` :
                   alignment.quality === 'opposing' ? `¸ï¸ ${t.timingResults.restTime}` : `“Š ${t.timingResults.moderate}`}
                </div>
                <p className={`text-sm mb-2 font-medium ${
                  alignment.quality === 'perfect' || alignment.quality === 'strong' 
                    ? 'opacity-90' 
                    : 'text-slate-800'
                }`}>
                  {t.timingResults.yourElement.replace('{element}', userElement)} + {t.timingResults.hourElement.replace('{element}', currentHour.element)} = {alignment.quality.toUpperCase()}
                </p>
                <div className={`flex items-center justify-center gap-2 text-sm font-bold ${
                  alignment.quality === 'perfect' || alignment.quality === 'strong'
                    ? ''
                    : 'text-slate-900'
                }`}>
                  <Clock className={`h-4 w-4 ${timeWindow.urgency === 'high' ? 'animate-pulse' : ''}`} />
                  <span>{t.timingResults.windowClosesIn} {timeWindow.closesIn}</span>
                  {timeWindow.urgency === 'high' && <span>š ï¸</span>}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              {actionButtons.slice(0, 3).map((button, idx) => (
                <button
                  key={idx}
                  className={`w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    button.priority === 'primary'
                      ? alignment.quality === 'perfect' || alignment.quality === 'strong'
                        ? 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-md hover:shadow-lg'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-300 border border-slate-300 dark:border-slate-600'
                      : 'bg-white dark:bg-slate-800 border border-gray-300 dark:border-gray-600 text-slate-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
                  }`}
                >
                  <span className="text-xl">{button.icon}</span>
                  {button.label}
                </button>
              ))}
            </div>

            {/* Next Window */}
            {timeWindow.nextWindow && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <p className="text-sm text-blue-900 dark:text-blue-100 font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  “ {t.timingResults.nextWindow.replace('{element}', userElement)} {timeWindow.nextWindowIn}
                </p>
              </div>
            )}

            {/* Element Guidance */}
            {ELEMENT_GUIDANCE_MAP[userElement] && (
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                <h4 className="font-bold text-indigo-900 dark:text-indigo-100 mb-2 flex items-center gap-2 text-sm">
                  <Lightbulb className="w-4 h-4" />
                  {alignment.quality === 'perfect' || alignment.quality === 'strong' ? t.timingResults.bestForNow : t.timingResults.bestForWhenReturns}
                </h4>
                <ul className="space-y-1">
                  {ELEMENT_GUIDANCE_MAP[userElement].bestFor.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-xs text-indigo-900 dark:text-indigo-200 flex items-start gap-2 font-medium">
                      <span className="text-green-600 dark:text-green-400 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Personal Year */}
      {personalYear && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-purple-500" />
            {t.timingResults.yourPersonalYear}
          </h3>
          
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {personalYear.year}
            </div>
            <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
              {personalYear.station.name}
            </div>
            <div className="text-slate-600 dark:text-slate-400">
              {personalYear.theme}
            </div>
          </div>
          
          <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              {personalYear.station.practical}
            </p>
          </div>
        </div>
      )}

      {/* Daily Dhikr */}
      <div className="bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-600 dark:to-teal-700 rounded-xl p-6 shadow-xl border-2 border-emerald-400 dark:border-emerald-500">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-emerald-900 dark:text-white">
          <BookOpen className="w-5 h-5" />
          {t.timingResults.recommendedDhikr}
        </h3>
        
        <div className="text-center">
          <div className="text-4xl font-bold mb-3 font-arabic text-emerald-900 dark:text-white" style={{ fontFamily: "'Amiri', 'Scheherazade New', serif" }}>
            {getDailyDhikr(new Date().getDate() % 12).arabic}
          </div>
          <div className="text-2xl mb-4 font-semibold text-emerald-900 dark:text-white">
            {getDailyDhikr(new Date().getDate() % 12).dhikr}
          </div>
          <div className="bg-white/70 dark:bg-white/20 backdrop-blur-sm rounded-lg p-3 mb-4">
            <p className="font-medium text-emerald-900 dark:text-white">
              {t.timingResults.count}: <span className="font-bold text-xl">{getDailyDhikr(new Date().getDate() % 12).count}</span> {t.timingResults.times}
            </p>
            <p className="text-sm mt-1 text-emerald-800 dark:text-white">
              {t.timingResults.bestTime}: {getDailyDhikr(new Date().getDate() % 12).time}
            </p>
          </div>
          <div className="text-base bg-emerald-200/70 dark:bg-emerald-800/50 rounded-lg p-3 text-emerald-900 dark:text-white">
            <strong>{t.timingResults.benefit}:</strong> {getDailyDhikr(new Date().getDate() % 12).benefit}
          </div>
        </div>
      </div>

      {/* Act Now Buttons - Real-Time Action Prompts */}
      {userElement && (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-6">
          <h3 className="text-lg font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            ⚡ {t.timingResults.actNowRealTimeGuidance}
          </h3>
          <ActNowButtons userElement={userElement as 'fire' | 'water' | 'air' | 'earth'} />
        </div>
      )}

      {/* AI Chat Assistant */}
      <AIChat
        calculationData={{
          birthDate,
          name,
          planetaryHour,
          personalYear,
          currentAlignment: results.currentAlignment,
        }}
        analysisType="divine-timing"
        language={language as 'ar' | 'en' | 'fr'}
      />
    </div>
  );
}








