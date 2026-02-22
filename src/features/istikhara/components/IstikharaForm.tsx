"use client";

import React, { useState, useEffect } from "react";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useProfile } from "../../../hooks/useProfile";
import { translations } from "../../../lib/translations";
import { validateName, calculateIstikhara, calculateIstikharaFromBirthDate } from "../calculations";
import type { IstikharaCalculationResult } from "../types";
import { 
  Keyboard, 
  Sparkles, 
  Info, 
  Lock, 
  BookOpen, 
  Moon,
  Star,
  CheckCircle,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  Lightbulb,
  Shield,
  Heart
} from "lucide-react";
import { ArabicKeyboard } from "../../../components/ArabicKeyboard";
import NameAutocomplete from "../../../components/NameAutocomplete";

interface IstikharaFormProps {
  onCalculate: (result: IstikharaCalculationResult) => void;
}

/**
 * IstikharaForm - Enhanced Input Component for Istikhara Calculation
 * 
 * Features:
 * - Comprehensive educational information about the tradition
 * - Bilingual support with contextual help
 * - Advanced name input with autocomplete and Arabic keyboard
 * - Real-time validation with helpful feedback
 * - Privacy assurance and security indicators
 * - Sample names for guidance
 * - Preview of calculation components
 * - Animated transitions and micro-interactions
 * - Full accessibility support
 * - Cultural context and scholarly references
 */
export function IstikharaForm({ onCalculate }: IstikharaFormProps) {
  const { language } = useLanguage();
  const { profile } = useProfile(); // Get user profile for auto-fill
  const t = translations[language].istikhara;
  
  // Calculation method state
  const [calculationMethod, setCalculationMethod] = useState<'name-based' | 'birth-date'>('name-based');
  const [dateFormat, setDateFormat] = useState<'full' | 'month-day'>('full');
  
  // Form state
  const [personName, setPersonName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [personLatin, setPersonLatin] = useState("");
  const [motherLatin, setMotherLatin] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [birthMonth, setBirthMonth] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [enableAutofill, setEnableAutofill] = useState(true);
  
  // Auto-fill from user profile
  useEffect(() => {
    if (profile && enableAutofill) {
      // Auto-fill person's name if empty
      if (!personLatin && profile.full_name) {
        setPersonLatin(profile.full_name);
        setPersonName(profile.full_name);
      }
      
      // Auto-fill mother's name if empty
      if (!motherLatin && profile.mother_name) {
        setMotherLatin(profile.mother_name);
        setMotherName(profile.mother_name);
      }
      
      // Auto-fill birth date if empty
      if (!dateOfBirth && profile.date_of_birth) {
        setDateOfBirth(profile.date_of_birth);
      }
    }
  }, [profile, enableAutofill]);
  
  // UI state
  const [showPersonKeyboard, setShowPersonKeyboard] = useState(false);
  const [showMotherKeyboard, setShowMotherKeyboard] = useState(false);
  const [showEducation, setShowEducation] = useState(false);
  const [showExamples, setShowExamples] = useState(false);
  const [showWhatYouWillGet, setShowWhatYouWillGet] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [errors, setErrors] = useState<{ person?: string; mother?: string }>({});
  const [isCalculating, setIsCalculating] = useState(false);
  const [touched, setTouched] = useState<{ person: boolean; mother: boolean }>({
    person: false,
    mother: false
  });

  // Example names for guidance
  const exampleNames = {
    male: {
      en: [
        { arabic: "محمد", latin: "Muhammad" },
        { arabic: "عمر", latin: "Omar" },
        { arabic: "علي", latin: "Ali" },
        { arabic: "حسن", latin: "Hassan" },
        { arabic: "إبراهيم", latin: "Ibrahim" }
      ],
      fr: [
        { arabic: "محمد", latin: "Muhammad" },
        { arabic: "عمر", latin: "Omar" },
        { arabic: "علي", latin: "Ali" },
        { arabic: "حسن", latin: "Hassan" },
        { arabic: "إبراهيم", latin: "Ibrahim" }
      ]
    },
    female: {
      en: [
        { arabic: "فاطمة", latin: "Fatima" },
        { arabic: "عائشة", latin: "Aisha" },
        { arabic: "خديجة", latin: "Khadija" },
        { arabic: "أمينة", latin: "Amina" },
        { arabic: "مريم", latin: "Maryam" }
      ],
      fr: [
        { arabic: "فاطمة", latin: "Fatima" },
        { arabic: "عائشة", latin: "Aisha" },
        { arabic: "خديجة", latin: "Khadija" },
        { arabic: "أمينة", latin: "Amina" },
        { arabic: "مريم", latin: "Maryam" }
      ]
    }
  };

  /**
   * Handle keyboard input for person's name
   */
  const handlePersonKeyboardPress = (char: string) => {
    if (char === '⌫') {
      setPersonName(personName.slice(0, -1));
    } else if (char === '⎵') {
      setPersonName(personName + ' ');
    } else {
      setPersonName(personName + char);
    }
    setPersonLatin('');
    if (!touched.person) {
      setTouched({ ...touched, person: true });
    }
  };

  /**
   * Handle keyboard input for mother's name
   */
  const handleMotherKeyboardPress = (char: string) => {
    if (char === '⌫') {
      setMotherName(motherName.slice(0, -1));
    } else if (char === '⎵') {
      setMotherName(motherName + ' ');
    } else {
      setMotherName(motherName + char);
    }
    setMotherLatin('');
    if (!touched.mother) {
      setTouched({ ...touched, mother: true });
    }
  };

  /**
   * Validate both inputs with detailed feedback
   */
  const validateInputs = (): boolean => {
    const newErrors: { person?: string; mother?: string } = {};
    
    // Validate person's name
    if (!personName.trim()) {
      newErrors.person = language === 'en' 
        ? 'Please enter your name in Arabic' 
        : 'Veuillez entrer votre nom en arabe';
    } else if (!validateName(personName)) {
      newErrors.person = language === 'en'
        ? 'Name must contain only Arabic letters'
        : 'Le nom ne doit contenir que des lettres arabes';
    }
    
    // Validate mother's name
    if (!motherName.trim()) {
      newErrors.mother = language === 'en'
        ? 'Please enter mother\'s name in Arabic'
        : 'Veuillez entrer le nom de la mère en arabe';
    } else if (!validateName(motherName)) {
      newErrors.mother = language === 'en'
        ? 'Name must contain only Arabic letters'
        : 'Le nom ne doit contenir que des lettres arabes';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Real-time validation on blur
   */
  const handleBlur = (field: 'person' | 'mother') => {
    setTouched({ ...touched, [field]: true });
    
    const value = field === 'person' ? personName : motherName;
    const newErrors = { ...errors };
    
    if (!value.trim()) {
      newErrors[field] = language === 'en'
        ? 'This field is required'
        : 'Ce champ est requis';
    } else if (!validateName(value)) {
      newErrors[field] = language === 'en'
        ? 'Name must contain only Arabic letters'
        : 'Le nom ne doit contenir que des lettres arabes';
    } else {
      delete newErrors[field];
    }
    
    setErrors(newErrors);
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all as touched (only relevant for name-based)
    if (calculationMethod === 'name-based') {
      setTouched({ person: true, mother: true });
    }
    
    // Clear previous errors
    setErrors({});
    
    // Validate inputs (only for name-based method)
    if (calculationMethod === 'name-based' && !validateInputs()) {
      return;
    }
    
    // Start calculation
    setIsCalculating(true);
    
    try {
      // Simulate minimum loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 800));
      
      if (calculationMethod === 'name-based') {
        // Name-based calculation (Classical ʿIlm al-Ḥurūf)
        const result = calculateIstikhara(personName, motherName);
        onCalculate(result);
      } else {
        // Birth-date calculation (ʿIlm al-Nujūm - Tropical Zodiac)
        const birthDateStr = dateFormat === 'full' 
          ? dateOfBirth 
          : `2000-${birthMonth}-${birthDay}`; // Use 2000 as placeholder year for month-day only
        
        const result = calculateIstikharaFromBirthDate(birthDateStr, dateFormat);
        onCalculate(result);
      }
    } catch (error) {
      console.error("Istikhara calculation error:", error);
      setErrors({
        person: t.ui.error,
      });
    } finally {
      setIsCalculating(false);
    }
  };

  /**
   * Handle clear/reset
   */
  const handleClear = () => {
    setPersonName("");
    setMotherName("");
    setPersonLatin("");
    setMotherLatin("");
    setDateOfBirth("");
    setBirthMonth("");
    setBirthDay("");
    setErrors({});
    setTouched({ person: false, mother: false });
    setShowPersonKeyboard(false);
    setShowMotherKeyboard(false);
  };

  /**
   * Use example name
   */
  const useExampleName = (arabic: string, latin: string, field: 'person' | 'mother') => {
    if (field === 'person') {
      setPersonName(arabic);
      setPersonLatin(latin);
      setTouched({ ...touched, person: true });
    } else {
      setMotherName(arabic);
      setMotherLatin(latin);
      setTouched({ ...touched, mother: true });
    }
    setShowExamples(false);
  };

  // Check if form is valid based on calculation method
  const isNameBasedValid = personName.trim() && motherName.trim() && 
                           validateName(personName) && validateName(motherName);
  const isBirthDateValid = dateFormat === 'full' 
    ? dateOfBirth.trim() !== ''
    : birthMonth !== '' && birthDay !== '';
  const isFormValid = calculationMethod === 'name-based' ? isNameBasedValid : isBirthDateValid;

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Educational Section - Collapsed by default */}
      <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 border-2 border-blue-400/40 rounded-lg sm:rounded-xl overflow-hidden">
        <button
          onClick={() => setShowEducation(!showEducation)}
          className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300" />
            <h3 className="font-bold text-white text-base sm:text-lg">
              {language === 'en' ? 'About This Science' : 'À Propos de Cette Science'}
            </h3>
          </div>
          {showEducation ? (
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          ) : (
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          )}
        </button>
        
        {showEducation && (
          <div className="px-4 sm:px-5 pb-4 sm:pb-5 space-y-4 animate-slide-down">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm sm:text-base text-gray-100 leading-relaxed">
                {language === 'en' 
                  ? 'ʿIlm al-Ḥurūf (Science of Letters) is an ancient Islamic tradition that explores the spiritual significance of Arabic letters and their numerical values. Each letter corresponds to a number in the Abjad system, revealing hidden meanings and divine connections.'
                  : 'ʿIlm al-Ḥurūf (Science des Lettres) est une tradition islamique ancienne qui explore la signification spirituelle des lettres arabes et leurs valeurs numériques. Chaque lettre correspond à un nombre dans le système Abjad, révélant des significations cachées et des connexions divines.'}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-2 sm:gap-3 mt-4">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-xs sm:text-sm mb-1">
                        {language === 'en' ? 'Mother\'s Name Significance' : 'Signification du Nom de la Mère'}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-100">
                        {language === 'en'
                          ? 'The mother\'s influence shapes the soul\'s entry into this world, making her name essential for accurate spiritual calculation.'
                          : 'L\'influence de la mère façonne l\'entrée de l\'âme dans ce monde, rendant son nom essentiel pour un calcul spirituel précis.'}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-xs sm:text-sm mb-1">
                        {language === 'en' ? 'Scholarly Foundation' : 'Fondation Savante'}
                      </h4>
                      <p className="text-[10px] sm:text-xs text-gray-100">
                        {language === 'en'
                          ? 'This practice is rooted in classical Islamic texts and has been preserved by scholars across generations.'
                          : 'Cette pratique est enracinée dans les textes islamiques classiques et a été préservée par les érudits à travers les générations.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* What You'll Discover Section */}
      <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-400/40 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowWhatYouWillGet(!showWhatYouWillGet)}
          className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="w-5 h-5 text-green-300" />
            <h3 className="font-bold text-white text-lg">
              {language === 'en' ? 'What You\'ll Discover' : 'Ce Que Vous Découvrirez'}
            </h3>
          </div>
          {showWhatYouWillGet ? (
            <ChevronUp className="w-5 h-5 text-gray-300" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-300" />
          )}
        </button>
        
        {showWhatYouWillGet && (
          <div className="px-5 pb-5 space-y-3 animate-slide-down">
            {[
              {
                icon: "💧",
                title: language === 'en' ? 'Your Elemental Nature' : 'Votre Nature Élémentaire',
                desc: language === 'en' 
                  ? 'Discover your core temperament (Fire, Earth, Air, or Water)'
                  : 'Découvrez votre tempérament de base (Feu, Terre, Air ou Eau)'
              },
              {
                icon: "🌟",
                title: language === 'en' ? 'Personality Insights' : 'Perspectives de Personnalité',
                desc: language === 'en'
                  ? 'Detailed traits, social dynamics, and dream symbolism'
                  : 'Traits détaillés, dynamiques sociales et symbolisme des rêves'
              },
              {
                icon: "💼",
                title: language === 'en' ? 'Career Guidance' : 'Orientation Professionnelle',
                desc: language === 'en'
                  ? 'Traditional and modern career paths aligned with your energy'
                  : 'Parcours professionnels traditionnels et modernes alignés avec votre énergie'
              },
              {
                icon: "📅",
                title: language === 'en' ? 'Your Power Day' : 'Votre Jour de Puissance',
                desc: language === 'en'
                  ? 'The most auspicious day for important decisions'
                  : 'Le jour le plus propice pour les décisions importantes'
              },
              {
                icon: "🤲",
                title: language === 'en' ? 'Spiritual Practices' : 'Pratiques Spirituelles',
                desc: language === 'en'
                  ? 'Personalized dhikr, charity guidance, and sacred offerings'
                  : 'Dhikr personnalisé, guidance de charité et offrandes sacrées'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                  <p className="text-xs text-white/90 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Main Form */}
      <form 
        onSubmit={handleSubmit} 
        className="p-3 sm:p-4 md:p-5 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border-2 border-white/10 rounded-lg sm:rounded-xl shadow-2xl space-y-3 sm:space-y-4"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            e.stopPropagation();
            return false;
          }
        }}
      >
        {/* Autofill Toggle - User Profile */}
        {profile && (
          <div className="mb-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700">
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {translations[language].ilmHuruf.autofillToggle?.label || 'Use my profile information'}
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {translations[language].ilmHuruf.autofillToggle?.description || 'Toggle off to calculate for family or friends'}
                </p>
              </div>
              <button
                type="button"
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

        {/* Choose Calculation Method */}
        <div className="text-center mb-4">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-3">
            {language === 'en' ? 'Choose Calculation Method:' : 'Choisissez la Méthode de Calcul:'}
          </h3>
          
          {/* Method Selection Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {/* Name-Based Method */}
            <button
              type="button"
              onClick={() => setCalculationMethod('name-based')}
              className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                calculationMethod === 'name-based'
                  ? 'bg-slate-800/60 border-purple-500 shadow-lg shadow-purple-500/20'
                  : 'bg-slate-900/40 border-white/20 hover:border-white/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">📜</span>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {language === 'en' ? 'Name-Based' : 'Basé sur le Nom'}
                  </h4>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide mt-1 ${
                    calculationMethod === 'name-based' 
                      ? 'bg-purple-600 text-white' 
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {language === 'en' ? 'CLASSICAL' : 'CLASSIQUE'}
                  </span>
                  <p className="text-xs text-slate-400 mt-2">
                    {language === 'en' 
                      ? "Traditional ʿIlm al-Ḥurūf method using your name + mother's name"
                      : "Méthode traditionnelle ʿIlm al-Ḥurūf utilisant votre nom + nom de mère"}
                  </p>
                </div>
              </div>
              {calculationMethod === 'name-based' && (
                <div className="absolute top-3 right-3">
                  <CheckCircle className="w-5 h-5 text-purple-400" />
                </div>
              )}
            </button>

            {/* Birth Date Method */}
            <button
              type="button"
              onClick={() => setCalculationMethod('birth-date')}
              className={`relative p-4 rounded-xl border-2 transition-all text-left ${
                calculationMethod === 'birth-date'
                  ? 'bg-slate-800/60 border-teal-500 shadow-lg shadow-teal-500/20'
                  : 'bg-slate-900/40 border-white/20 hover:border-white/40'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">📅</span>
                <div className="flex-1">
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {language === 'en' ? 'Birth Date' : 'Date de Naissance'}
                  </h4>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide mt-1 ${
                    calculationMethod === 'birth-date' 
                      ? 'bg-teal-600 text-white' 
                      : 'bg-slate-700 text-slate-300'
                  }`}>
                    {language === 'en' ? 'QUICK' : 'RAPIDE'}
                  </span>
                  <p className="text-xs text-slate-400 mt-2">
                    {language === 'en' 
                      ? 'Simpler method using only your date of birth'
                      : 'Méthode plus simple utilisant uniquement votre date de naissance'}
                  </p>
                </div>
              </div>
              {calculationMethod === 'birth-date' && (
                <div className="absolute top-3 right-3">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Name-Based Form Fields */}
        {calculationMethod === 'name-based' && (
          <>
            {/* Form Title */}
            <div className="text-center">
              <p className="text-xs text-white px-2">
                {language === 'en' 
                  ? 'Both names must be in Arabic script for accurate spiritual analysis'
                  : 'Les deux noms doivent être en écriture arabe pour une analyse spirituelle précise'}
              </p>
            </div>

        {/* Person's Name Input */}
        <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-2 border-purple-400/40 rounded-lg">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-purple-200 flex items-center gap-2">
              <span className="text-xl">👤</span>
              {t.form.personName}
            </h4>
            {personName && validateName(personName) && (
              <CheckCircle className="w-5 h-5 text-green-300" />
            )}
          </div>
          
          {/* Latin Input with Autocomplete */}
          <div>
            <label className="block text-xs font-medium text-white mb-2">
              {language === "en" ? "Search by Latin Name" : "Rechercher par Nom Latin"} 
              <span className="text-white/70 ml-1">{language === "en" ? "(optional)" : "(optionnel)"}</span>
            </label>
            <NameAutocomplete
              value={personLatin}
              onChange={(value: string) => setPersonLatin(value)}
              onArabicSelect={(arabic: string, latin: string) => {
                setPersonName(arabic);
                setPersonLatin(latin);
                setTouched({ ...touched, person: true });
              }}
              placeholder={language === "en" ? "Type to search: Muhammad, Ali, Hassan..." : "Tapez pour rechercher: Muhammad, Ali, Hassan..."}
              showHelper={false}
            />
            <p className="text-xs text-white mt-1 flex items-center gap-1">
              <Info className="w-3 h-3" />
              {language === "en" ? "Database-backed suggestions as you type" : "Suggestions de la base de données en temps réel"}
            </p>
          </div>
          
          {/* Arabic Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-medium text-white">
                {language === "en" ? "Arabic Name" : "Nom Arabe"} 
                <span className="text-red-300 ml-1">*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowPersonKeyboard(!showPersonKeyboard)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  showPersonKeyboard
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Keyboard className="w-3.5 h-3.5" />
                {showPersonKeyboard 
                  ? (language === 'en' ? 'Hide Keyboard' : 'Masquer Clavier')
                  : (language === 'en' ? 'Show Keyboard' : 'Afficher Clavier')}
              </button>
            </div>
            
            <input
              type="text"
              value={personName}
              onChange={(e) => {
                setPersonName(e.target.value);
                setPersonLatin('');
                if (!touched.person) setTouched({ ...touched, person: true });
              }}
              onBlur={() => handleBlur('person')}
              placeholder="محمد"
              dir="rtl"
              lang="ar"
              required
              className={`w-full px-4 py-3 border-2 rounded-xl bg-slate-800/50 text-white font-arabic text-xl focus:ring-2 transition-all ${
                errors.person && touched.person
                  ? "border-red-500 focus:ring-red-500" 
                  : personName && validateName(personName)
                  ? "border-green-500 focus:ring-green-500"
                  : "border-white/20 focus:ring-purple-500 focus:border-purple-500"
              }`}
              aria-invalid={!!errors.person}
              aria-describedby={errors.person ? "person-error" : undefined}
            />
            
            {showPersonKeyboard && (
              <div className="mt-3 animate-slide-down">
                <ArabicKeyboard 
                  onKeyPress={handlePersonKeyboardPress}
                  onClose={() => setShowPersonKeyboard(false)}
                />
              </div>
            )}
            
            {errors.person && touched.person && (
              <p id="person-error" className="text-sm text-red-400 mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.person}
              </p>
            )}
          </div>
        </div>

        {/* Mother's Name Input */}
        <div className="space-y-2 sm:space-y-3 p-3 sm:p-4 bg-gradient-to-br from-indigo-900/30 to-blue-900/20 border-2 border-indigo-400/40 rounded-lg">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-indigo-200 flex items-center gap-2">
              <span className="text-xl">👩</span>
              {t.form.motherName}
            </h4>
            {motherName && validateName(motherName) && (
              <CheckCircle className="w-5 h-5 text-green-300" />
            )}
          </div>
          
          {/* Latin Input with Autocomplete */}
          <div>
            <label className="block text-xs font-medium text-white mb-2">
              {language === "en" ? "Search by Latin Name" : "Rechercher par Nom Latin"}
              <span className="text-white/70 ml-1">{language === "en" ? "(optional)" : "(optionnel)"}</span>
            </label>
            <NameAutocomplete
              value={motherLatin}
              onChange={(value: string) => setMotherLatin(value)}
              onArabicSelect={(arabic: string, latin: string) => {
                setMotherName(arabic);
                setMotherLatin(latin);
                setTouched({ ...touched, mother: true });
              }}
              placeholder={language === "en" ? "Type to search: Fatima, Aisha, Khadija..." : "Tapez pour rechercher: Fatima, Aisha, Khadija..."}
              showHelper={false}
            />
            <p className="text-xs text-white mt-1 flex items-center gap-1">
              <Info className="w-3 h-3" />
              {language === "en" ? "Database-backed suggestions" : "Suggestions de la base de données"}
            </p>
          </div>
          
          {/* Arabic Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs font-medium text-white">
                {language === "en" ? "Arabic Name" : "Nom Arabe"}
                <span className="text-red-400 ml-1">*</span>
              </label>
              <button
                type="button"
                onClick={() => setShowMotherKeyboard(!showMotherKeyboard)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  showMotherKeyboard
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Keyboard className="w-3.5 h-3.5" />
                {showMotherKeyboard 
                  ? (language === 'en' ? 'Hide Keyboard' : 'Masquer Clavier')
                  : (language === 'en' ? 'Show Keyboard' : 'Afficher Clavier')}
              </button>
            </div>
            
            <input
              type="text"
              value={motherName}
              onChange={(e) => {
                setMotherName(e.target.value);
                setMotherLatin('');
                if (!touched.mother) setTouched({ ...touched, mother: true });
              }}
              onBlur={() => handleBlur('mother')}
              placeholder="فاطمة"
              dir="rtl"
              lang="ar"
              required
              className={`w-full px-4 py-3 border-2 rounded-xl bg-slate-800/50 text-white font-arabic text-xl focus:ring-2 transition-all ${
                errors.mother && touched.mother
                  ? "border-red-500 focus:ring-red-500" 
                  : motherName && validateName(motherName)
                  ? "border-green-500 focus:ring-green-500"
                  : "border-white/20 focus:ring-indigo-500 focus:border-indigo-500"
              }`}
              aria-invalid={!!errors.mother}
              aria-describedby={errors.mother ? "mother-error" : undefined}
            />
            
            {showMotherKeyboard && (
              <div className="mt-3 animate-slide-down">
                <ArabicKeyboard 
                  onKeyPress={handleMotherKeyboardPress}
                  onClose={() => setShowMotherKeyboard(false)}
                />
              </div>
            )}
            
            {errors.mother && touched.mother && (
              <p id="mother-error" className="text-sm text-red-400 mt-2 flex items-center gap-1">
                <AlertCircle className="w-4 h-4" />
                {errors.mother}
              </p>
            )}
          </div>
        </div>
          </>
        )}

        {/* Birth Date Form Fields */}
        {calculationMethod === 'birth-date' && (
          <div className="space-y-4">
            {/* Select Your Birth Date Header */}
            <div className="p-4 bg-gradient-to-br from-teal-900/30 to-cyan-900/20 border-2 border-teal-400/40 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">📅</span>
                <h4 className="font-bold text-teal-200 text-lg">
                  {language === 'en' ? 'Select Your Birth Date' : 'Sélectionnez Votre Date de Naissance'}
                </h4>
              </div>

              {/* Date Format Toggle */}
              <div className="flex rounded-lg overflow-hidden mb-3 bg-slate-800/50">
                <button
                  type="button"
                  onClick={() => setDateFormat('full')}
                  className={`flex-1 px-4 py-2.5 text-sm font-medium transition-all ${
                    dateFormat === 'full'
                      ? 'bg-teal-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {language === 'en' ? 'Full date' : 'Date complète'}
                </button>
                <button
                  type="button"
                  onClick={() => setDateFormat('month-day')}
                  className={`flex-1 px-4 py-2.5 text-sm font-medium transition-all ${
                    dateFormat === 'month-day'
                      ? 'bg-teal-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {language === 'en' ? 'Month & day only' : 'Mois et jour uniquement'}
                </button>
              </div>

              <p className="text-xs text-slate-400 mb-4">
                {language === 'en' 
                  ? 'Best when using your own saved profile.' 
                  : 'Idéal lorsque vous utilisez votre propre profil enregistré.'}
              </p>

              {/* Date Input - Full Date */}
              {dateFormat === 'full' && (
                <div className="relative">
                  <div className="flex items-center gap-2 p-3 bg-slate-800/70 border-2 border-slate-600 rounded-xl">
                    <span className="text-xl">📅</span>
                    <input
                      type="date"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      max={new Date().toISOString().split('T')[0]}
                      min="1900-01-01"
                      className="flex-1 bg-transparent text-white text-lg focus:outline-none"
                      aria-label={language === 'en' ? 'Date of Birth' : 'Date de Naissance'}
                    />
                  </div>
                </div>
              )}

              {/* Date Input - Month & Day Only */}
              {dateFormat === 'month-day' && (
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative">
                    <label className="block text-xs text-slate-400 mb-1">
                      {language === 'en' ? 'Month' : 'Mois'}
                    </label>
                    <select
                      value={birthMonth}
                      onChange={(e) => setBirthMonth(e.target.value)}
                      className="w-full p-3 bg-slate-800/70 border-2 border-slate-600 rounded-xl text-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="">{language === 'en' ? 'Select...' : 'Sélectionner...'}</option>
                      {Array.from({ length: 12 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                          {new Date(2000, i, 1).toLocaleString(language === 'en' ? 'en-US' : 'fr-FR', { month: 'long' })}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="relative">
                    <label className="block text-xs text-slate-400 mb-1">
                      {language === 'en' ? 'Day' : 'Jour'}
                    </label>
                    <select
                      value={birthDay}
                      onChange={(e) => setBirthDay(e.target.value)}
                      className="w-full p-3 bg-slate-800/70 border-2 border-slate-600 rounded-xl text-white focus:outline-none focus:border-teal-500"
                    >
                      <option value="">{language === 'en' ? 'Select...' : 'Sélectionner...'}</option>
                      {Array.from({ length: 31 }, (_, i) => (
                        <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* What You'll Discover Card */}
            <div className="p-4 bg-gradient-to-br from-amber-900/20 to-orange-900/10 border-2 border-amber-400/30 rounded-xl">
              <h5 className="font-bold text-amber-200 flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4" />
                {language === 'en' ? "What You'll Discover:" : "Ce que Vous Découvrirez:"}
              </h5>
              <ul className="space-y-2 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  {language === 'en' ? 'Your Burj (zodiac sign)' : 'Votre Burj (signe du zodiaque)'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  {language === 'en' ? 'Your elemental nature' : 'Votre nature élémentaire'}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-400">•</span>
                  {language === 'en' 
                    ? 'Optional lunar timing baselines (requires full DOB year)' 
                    : 'Base de timing lunaire optionnelle (nécessite l\'année de naissance complète)'}
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Example Names Button - Only show for name-based method */}
        {calculationMethod === 'name-based' && (
        <div className="border-t border-white/10 pt-4">
          <button
            type="button"
            onClick={() => setShowExamples(!showExamples)}
            className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
          >
            <span className="text-sm text-white flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              {language === 'en' ? 'Need help? See example names' : 'Besoin d\'aide ? Voir des exemples de noms'}
            </span>
            {showExamples ? (
              <ChevronUp className="w-4 h-4 text-white" />
            ) : (
              <ChevronDown className="w-4 h-4 text-white" />
            )}
          </button>
          
          {showExamples && (
            <div className="mt-3 grid md:grid-cols-2 gap-4 animate-slide-down">
              <div className="p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
                <h5 className="text-sm font-semibold text-purple-300 mb-3">
                  {language === 'en' ? 'Common Male Names' : 'Noms Masculins Courants'}
                </h5>
                <div className="space-y-2">
                  {exampleNames.male[language].map((name, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => useExampleName(name.arabic, name.latin, 'person')}
                      className="w-full flex items-center justify-between p-2 bg-white/5 hover:bg-white/10 rounded text-left transition-colors group"
                    >
                      <span className="font-arabic text-white">{name.arabic}</span>
                      <span className="text-xs text-white/80 group-hover:text-white transition-colors">{name.latin}</span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-indigo-900/20 border border-indigo-500/30 rounded-lg">
                <h5 className="text-sm font-semibold text-indigo-300 mb-3">
                  {language === 'en' ? 'Common Female Names' : 'Noms Féminins Courants'}
                </h5>
                <div className="space-y-2">
                  {exampleNames.female[language].map((name, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => useExampleName(name.arabic, name.latin, 'mother')}
                      className="w-full flex items-center justify-between p-2 bg-white/5 hover:bg-white/10 rounded text-left transition-colors group"
                    >
                      <span className="font-arabic text-white">{name.arabic}</span>
                      <span className="text-xs text-white/80 group-hover:text-white transition-colors">{name.latin}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 sm:gap-3 pt-2 sm:pt-3">
          <button
            type="submit"
            disabled={isCalculating || !isFormValid}
            tabIndex={-1}
            className={`flex-1 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all transform ${
              isFormValid && !isCalculating
                ? 'bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95'
                : 'bg-gray-700 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isCalculating ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-2 border-white border-t-transparent"></div>
                <span className="hidden sm:inline">{t.ui.loading}</span>
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                {t.form.calculateButton}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={handleClear}
            disabled={isCalculating}
            className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm sm:text-base rounded-lg sm:rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t.form.clearButton}
          </button>
        </div>

        {/* Helper Text */}
        <div className="space-y-1 sm:space-y-2 text-center">
          <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed">
            {t.form.bothNamesRequired}
          </p>
          {isFormValid && (
            <p className="text-xs sm:text-sm text-green-400 flex items-center justify-center gap-1">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              {language === 'en' ? 'Ready to calculate!' : 'Prêt à calculer!'}
            </p>
          )}
        </div>
      </form>

      {/* Privacy Assurance */}
      <div className="bg-gradient-to-br from-gray-900/50 to-slate-900/50 border-2 border-gray-700/50 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowPrivacy(!showPrivacy)}
          className="w-full flex items-center justify-between p-5 hover:bg-white/5 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-white" />
            <h3 className="font-bold text-white text-lg">
              {language === 'en' ? 'Privacy & Security' : 'Confidentialité & Sécurité'}
            </h3>
          </div>
          {showPrivacy ? (
            <ChevronUp className="w-5 h-5 text-white" />
          ) : (
            <ChevronDown className="w-5 h-5 text-white" />
          )}
        </button>
        
        {showPrivacy && (
          <div className="px-5 pb-5 space-y-3 animate-slide-down">
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <Lock className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  {language === 'en' ? 'No Data Storage' : 'Aucun Stockage de Données'}
                </h4>
                <p className="text-xs text-white/90">
                  {language === 'en'
                    ? 'Your names are calculated in real-time and never stored on our servers. All calculations happen locally in your browser.'
                    : 'Vos noms sont calculés en temps réel et ne sont jamais stockés sur nos serveurs. Tous les calculs se font localement dans votre navigateur.'}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
              <Heart className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-white text-sm mb-1">
                  {language === 'en' ? 'Sacred Tradition' : 'Tradition Sacrée'}
                </h4>
                <p className="text-xs text-white/90">
                  {language === 'en'
                    ? 'This tool is created with respect for Islamic tradition and scholarly heritage. All calculations follow authentic classical methods.'
                    : 'Cet outil est créé avec respect pour la tradition islamique et l\'héritage savant. Tous les calculs suivent des méthodes classiques authentiques.'}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .font-arabic {
          font-family: 'Amiri', 'Traditional Arabic', serif;
        }

        .prose-invert {
          color: rgb(209, 213, 219);
        }
      `}</style>
    </div>
  );
}