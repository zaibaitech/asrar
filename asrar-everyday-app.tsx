'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Calculator, Book, TrendingUp, Moon, Sun, Info, Sparkles, Flame, Droplet, Wind, Mountain, History, Star, GitCompare, Calendar, Trash2, X, Copy, CheckCircle, AlertTriangle, Zap, Compass, Keyboard, Heart, ChevronUp, ChevronDown, HelpCircle, Menu, Lightbulb, Waves, List, BookOpen, Download, Search, Tag } from 'lucide-react';
import { transliterateLatinToArabic } from './src/lib/text-normalize';
import { HadadSummaryPanel } from './src/components/hadad-summary';
import { IlmHurufPanel } from './src/features/ilm-huruf';
import { CompatibilityPanel } from './src/features/compatibility';
import { IstikharaPanel } from './src/features/istikhara';
import { PlanetOfTheDay, PlanetaryHourCard, PlanetTransitCard } from './src/components/planetary';
import { RamadanHub, useRamadanChallenges } from './src/features/ramadanChallenges';
import { getRamadanInfo } from './src/lib/hijri';
import { analyzePatterns } from './src/features/ilm-huruf/patternRecognition';
import { generateWafqAnalysis } from './src/features/ilm-huruf/wafqGenerator';
import { calculateOptimalTimingWindows } from './src/features/ilm-huruf/talismanTiming';
import { OnboardingTutorial } from './src/components/OnboardingTutorial';
import { MobileMenu } from './src/components/MobileMenu';
import { UserMenu } from './src/components/UserMenu';
import LanguageToggle from './src/components/LanguageToggle';
import { useLanguage } from './src/contexts/LanguageContext';
import { LETTER_ELEMENTS, digitalRoot as calcDigitalRoot, hadathRemainder as calcHadathRemainder, hadathToElement, nearestSacred, ELEMENT_INFO as HADAD_ELEMENT_INFO, calculateBurj, getPlanetarySignatureFromTotal } from './src/components/hadad-summary/hadad-core';
import type { AbjadAudit, AuditStep, ElementType } from './src/components/hadad-summary/types';
import { useAbjad } from './src/contexts/AbjadContext';
import { AbjadSystemSelector } from './src/components/AbjadSystemSelector';
import { ArabicKeyboard } from './src/components/ArabicKeyboard';
import { findVersesByValue, getExactVerseMatch, type QuranicVerse } from './src/data/quranic-verses';
import { findDivineNameByValue, findSimilarDivineNames, type DivineName } from './src/data/divine-names';
import AsrarLogo from './src/components/AsrarLogo';
import { useAuth } from './src/contexts/AuthContext';

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

// ============================================================================
// CALCULATION UTILITIES
// ============================================================================

function normalizeArabic(text: string): string {
  return text
    .replaceAll(/[ًٌٍَُِّْ]/g, '') // Remove diacritics
    .replaceAll(/[أإآ]/g, 'ا') // Unify Alif
    .replaceAll(/ى/g, 'ي') // Unify Ya
    .replaceAll(/ة/g, 'ه') // Ta Marbuta as Ha
    .replaceAll(/\s+/g, ''); // Remove spaces
}

function auditAbjad(text: string, abjadMap: Record<string, number>, elementsMap: Record<string, ElementType>): AbjadAudit {
  const normalized = normalizeArabic(text);
  const steps: AuditStep[] = [...normalized].map(ch => ({
    ch,
    value: abjadMap[ch] || 0,
    element: elementsMap[ch] || 'Earth'
  }));
  
  const total = steps.reduce((sum, step) => sum + step.value, 0);
  
  return {
    original: text,
    normalized,
    steps,
    total
  };
}

// Helper functions for calculations
function abjadSum(text: string, abjadMap: Record<string, number>): number {
  const normalized = text.replaceAll(/[ًٌٍَُِّْ\s]/g, '');
  return [...normalized].reduce((sum, char) => sum + (abjadMap[char] || 0), 0);
}

function digitalRoot(n: number): number {
  return calcDigitalRoot(n);
}

function hadathRemainder(n: number): 0 | 1 | 2 | 3 {
  return calcHadathRemainder(n);
}

// Advanced Calculation Methods
function calculateWusta(n: number): number {
  // Wusṭā (Middle/Mean) - Average of Kabīr and Ṣaghīr
  const saghir = calcDigitalRoot(n);
  return Math.round((n + saghir) / 2);
}

function calculateKamal(n: number): number {
  // Kamāl (Perfection) - Sum of all digits in the number
  return n.toString().split('').reduce((sum, digit) => sum + Number.parseInt(digit), 0);
}

function calculateBast(n: number): number {
  // Basṭ (Expansion) - Multiply by 9 and reduce
  return calcDigitalRoot(n * 9);
}

function calculateSirri(n: number): number {
  // Sirrī (Secret/Hidden) - Reverse digits and take digital root
  const reversed = Number.parseInt(n.toString().split('').reverse().join(''));
  return calcDigitalRoot(reversed);
}

function sacredResonance(n: number) {
  const sacred = nearestSacred(n);
  return sacred;
}

// hadathToElement is now imported from hadad-core

function findSacredMatches(kabir: number) {
  return SACRED_NUMBERS
    .filter(s => Math.abs(s.num - kabir) <= s.num * 0.1)
    .map(s => ({
      ...s,
      confidence: s.num === kabir ? 'exact' as const : 'close' as const
    }));
}

// ============================================================================
// CELESTIAL CORRESPONDENCE MAPPING
// Based on Al-Buni's Shams al-Ma'arif and classical Ilm al-Huruf
// ============================================================================

// ============================================================================
// COMPONENTS
// ============================================================================

function DisclaimerBanner({ onDismiss }: { onDismiss: () => void }) {
  const { t } = useLanguage();
  
  // Auto-show again after 24 hours
  useEffect(() => {
    const dismissedTime = localStorage.getItem('disclaimerDismissedAt');
    if (dismissedTime) {
      const hoursSinceDismissed = (Date.now() - Number.parseInt(dismissedTime)) / (1000 * 60 * 60);
      if (hoursSinceDismissed < 24) {
        // Still within 24 hours, keep dismissed
        onDismiss();
      }
    }
  }, [onDismiss]);
  
  const handleDismiss = () => {
    localStorage.setItem('disclaimerDismissedAt', Date.now().toString());
    onDismiss();
  };
  
  return (
    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-2">
      <div className="flex items-start gap-2">
        <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <p className="text-xs text-amber-900 dark:text-amber-100">
            <strong>{t.disclaimer.title}</strong> {t.disclaimer.message}
          </p>
        </div>
        <button 
          onClick={handleDismiss} 
          className="text-amber-600 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-200 flex-shrink-0 p-1 rounded hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ConfidenceMeter({ confidence, warnings }: { confidence: number; warnings: string[] }) {
  const color = confidence >= 80 ? 'green' : confidence >= 60 ? 'yellow' : 'red';
  const colorClasses = {
    green: 'bg-green-500 text-green-900 border-green-200',
    yellow: 'bg-yellow-500 text-yellow-900 border-yellow-200',
    red: 'bg-red-500 text-red-900 border-red-200'
  };
  
  return (
    <div className={`rounded-lg p-3 border ${
      color === 'green' ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' :
      color === 'yellow' ? 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800' :
      'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
    }`}>
      <div className="flex items-center gap-2 mb-2">
        {color === 'yellow' || color === 'red' ? (
          <AlertTriangle className={`w-4 h-4 ${color === 'yellow' ? 'text-yellow-600' : 'text-red-600'}`} />
        ) : (
          <CheckCircle className="w-4 h-4 text-green-600" />
        )}
        <span className={`text-sm font-medium ${
          color === 'green' ? 'text-green-900 dark:text-green-100' :
          color === 'yellow' ? 'text-yellow-900 dark:text-yellow-100' :
          'text-red-900 dark:text-red-100'
        }`}>
          Transliteration Confidence: {confidence}%
        </span>
      </div>
      
      {confidence < 80 && (
        <div className={`text-xs ${
          color === 'yellow' ? 'text-yellow-800 dark:text-yellow-200' : 'text-red-800 dark:text-red-200'
        }`}>
          {warnings.length > 0 ? (
            <div>
              {warnings.map((w, i) => (
                <div key={i}>• {w}</div>
              ))}
            </div>
          ) : (
            <div>Please verify the Arabic spelling before calculating.</div>
          )}
        </div>
      )}
    </div>
  );
}

function TaMarbutaToggle({ value, onChange }: { value: 'ه' | 'ة'; onChange: (v: 'ه' | 'ة') => void }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <label className="text-slate-600 dark:text-slate-400">Tāʾ Marbūṭa:</label>
      <div className="flex bg-slate-100 dark:bg-slate-700 rounded-lg p-1">
        <button
          onClick={() => onChange('ه')}
          className={`px-3 py-1 rounded transition-colors ${
            value === 'ه'
              ? 'bg-white dark:bg-slate-600 shadow-sm'
              : 'hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
          title="Maghrib practice (default)"
        >
          <span className="font-arabic text-lg">ه</span>
        </button>
        <button
          onClick={() => onChange('ة')}
          className={`px-3 py-1 rounded transition-colors ${
            value === 'ة'
              ? 'bg-white dark:bg-slate-600 shadow-sm'
              : 'hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
          title="Mashreq practice"
        >
          <span className="font-arabic text-lg">ة</span>
        </button>
      </div>
      <div 
        title="Choose how tāʾ marbūṭa is counted: ه (hāʾ=5, Maghrib) or ة (tāʾ=400, Mashreq)"
        className="flex items-center"
      >
        <Info className="w-4 h-4 text-slate-400 cursor-help" />
      </div>
    </div>
  );
}

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

// ============================================================================
// STORAGE & HISTORY
// ============================================================================

interface HistoryItem {
  id: string;
  timestamp: number;
  display: string;
  arabic: string;
  kabir: number;
  saghir: number;
  hadathElement: ElementType;
  dominant: ElementType;
  isFavorite?: boolean;
  notes?: string;
  tags?: string[];
  category?: 'name' | 'prayer' | 'verse' | 'custom';
}

function loadHistory(): HistoryItem[] {
  if (typeof globalThis.window === 'undefined') return [];
  const stored = localStorage.getItem('asrar-history');
  return stored ? JSON.parse(stored) : [];
}

function saveHistory(history: HistoryItem[]) {
  if (typeof globalThis.window === 'undefined') return;
  localStorage.setItem('asrar-history', JSON.stringify(history));
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
// NEW COMPONENTS
// ============================================================================

function HistoryPanel({ 
  history, 
  onSelect, 
  onDelete, 
  onToggleFavorite, 
  onClear,
  onUpdateNotes,
  onUpdateTags,
  onUpdateCategory
}: { 
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
  onClear: () => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onUpdateTags: (id: string, tags: string[]) => void;
  onUpdateCategory: (id: string, category: 'name' | 'prayer' | 'verse' | 'custom') => void;
}) {
  const { t, language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState<'all' | 'name' | 'prayer' | 'verse' | 'custom'>('all');
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);
  const [editingNotesText, setEditingNotesText] = useState('');
  
  // Filter and search history
  const filteredHistory = history.filter(item => {
    const matchesSearch = 
      item.display.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.arabic.includes(searchQuery) ||
      (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });
  
  const favorites = filteredHistory.filter(h => h.isFavorite);
  const recent = filteredHistory.filter(h => !h.isFavorite).slice(0, 10);
  
  // Export functions
  const exportAsJSON = () => {
    const dataStr = JSON.stringify(history, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `asrar-history-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };
  
  const exportAsCSV = () => {
    const headers = ['Date', 'Display', 'Arabic', 'Kabir', 'Saghir', 'Dominant Element', 'Hadath', 'Category', 'Tags', 'Notes'];
    const rows = history.map(item => [
      new Date(item.timestamp).toLocaleDateString(),
      item.display,
      item.arabic,
      item.kabir.toString(),
      item.saghir.toString(),
      item.dominant,
      item.hadathElement,
      item.category || '',
      (item.tags || []).join('; '),
      (item.notes || '').replaceAll(/\n/g, ' ')
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const dataBlob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `asrar-history-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };
  
  const handleStartEditNotes = (item: HistoryItem) => {
    setEditingNotesId(item.id);
    setEditingNotesText(item.notes || '');
  };
  
  const handleSaveNotes = (id: string) => {
    onUpdateNotes(id, editingNotesText);
    setEditingNotesId(null);
    setEditingNotesText('');
  };
  
  const HistoryCard = ({ item }: { item: HistoryItem }) => (
    <div 
      className="bg-slate-50 dark:bg-slate-800 rounded-lg p-3 border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-400 transition-all group"
    >
      <div className="flex items-start justify-between mb-2" onClick={() => onSelect(item)}>
        <div className="flex-1 cursor-pointer">
          <div className="font-medium text-slate-900 dark:text-slate-100" dir="rtl">{item.arabic}</div>
          {item.display !== item.arabic && (
            <div className="text-sm text-slate-600 dark:text-slate-400">{item.display}</div>
          )}
        </div>
        <div className="flex gap-1">
          <button
            onClick={(e) => { e.stopPropagation(); onToggleFavorite(item.id); }}
            className={`p-1 rounded hover:bg-slate-200 dark:hover:bg-slate-700 ${item.isFavorite ? 'text-yellow-500' : 'text-slate-400'}`}
            title={language === 'en' ? 'Toggle Favorite' : language === 'fr' ? 'Basculer Favori' : 'تبديل المفضلة'}
          >
            <Star className="w-4 h-4" fill={item.isFavorite ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(item.id); }}
            className="p-1 rounded hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500"
            title={language === 'en' ? 'Delete' : language === 'fr' ? 'Supprimer' : 'حذف'}
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="flex gap-2 text-xs mb-2 flex-wrap">
        <span className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">Kabīr: {item.kabir}</span>
        <span className={`px-2 py-1 rounded ${ELEMENT_INFO[item.dominant].bg} ${ELEMENT_INFO[item.dominant].color}`}>
          {item.dominant}
        </span>
        {item.category && (
          <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded">
            {item.category}
          </span>
        )}
      </div>
      
      {/* Tags */}
      {item.tags && item.tags.length > 0 && (
        <div className="flex gap-1 mb-2 flex-wrap">
          {item.tags.map((tag, idx) => (
            <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Notes */}
      <div className="mt-2">
        {editingNotesId === item.id ? (
          <div className="space-y-2" onClick={(e) => e.stopPropagation()}>
            <textarea
              value={editingNotesText}
              onChange={(e) => setEditingNotesText(e.target.value)}
              className="w-full px-2 py-1 text-xs bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded resize-none"
              rows={2}
              placeholder={language === 'en' ? 'Add notes...' : language === 'fr' ? 'Ajouter des notes...' : 'إضافة ملاحظات...'}
            />
            <div className="flex gap-2">
              <button
                onClick={() => handleSaveNotes(item.id)}
                className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                {language === 'en' ? 'Save' : language === 'fr' ? 'Sauvegarder' : 'حفظ'}
              </button>
              <button
                onClick={() => setEditingNotesId(null)}
                className="text-xs bg-slate-300 dark:bg-slate-700 px-3 py-1 rounded hover:bg-slate-400 dark:hover:bg-slate-600"
              >
                {language === 'en' ? 'Cancel' : language === 'fr' ? 'Annuler' : 'إلغاء'}
              </button>
            </div>
          </div>
        ) : (
          <>
            {item.notes ? (
              <div 
                className="text-xs text-slate-600 dark:text-slate-400 bg-amber-50 dark:bg-amber-900/20 p-2 rounded cursor-pointer hover:bg-amber-100 dark:hover:bg-amber-900/30"
                onClick={(e) => { e.stopPropagation(); handleStartEditNotes(item); }}
              >
                {item.notes}
              </div>
            ) : (
              <button
                onClick={(e) => { e.stopPropagation(); handleStartEditNotes(item); }}
                className="text-xs text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1"
              >
                + {language === 'en' ? 'Add note' : language === 'fr' ? 'Ajouter une note' : 'إضافة ملاحظة'}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
  
  return (
    <div className="space-y-4">
      {/* Search and Controls */}
      <div className="space-y-3">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={language === 'en' ? 'Search history...' : language === 'fr' ? 'Rechercher dans l\'historique...' : 'البحث في التاريخ...'}
            className="w-full pl-10 pr-3 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-sm"
          />
        </div>
        
        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          {['all', 'name', 'prayer', 'verse', 'custom'].map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat as any)}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                filterCategory === cat
                  ? 'bg-indigo-600 text-white'
                  : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
              }`}
            >
              {cat === 'all' 
                ? (language === 'en' ? 'All' : language === 'fr' ? 'Tous' : 'الكل')
                : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Export Buttons */}
        <div className="flex gap-2">
          <button
            onClick={exportAsJSON}
            disabled={history.length === 0}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            <Download className="w-4 h-4" />
            {language === 'en' ? 'Export JSON' : language === 'fr' ? 'Exporter JSON' : 'تصدير JSON'}
          </button>
          <button
            onClick={exportAsCSV}
            disabled={history.length === 0}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            <Download className="w-4 h-4" />
            {language === 'en' ? 'Export CSV' : language === 'fr' ? 'Exporter CSV' : 'تصدير CSV'}
          </button>
        </div>
      </div>
      
      {favorites.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
              {t.history.favorites}
            </h3>
          </div>
          <div className="space-y-2">
            {favorites.map(item => <HistoryCard key={item.id} item={item} />)}
          </div>
        </div>
      )}
      
      {recent.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100">{t.history.recentCalculations}</h3>
            {history.length > 0 && (
              <button
                onClick={onClear}
                className="text-xs text-red-500 hover:text-red-600 dark:hover:text-red-400"
              >
                {t.history.clearAll}
              </button>
            )}
          </div>
          <div className="space-y-2">
            {recent.map(item => <HistoryCard key={item.id} item={item} />)}
          </div>
        </div>
      )}
      
      {filteredHistory.length === 0 && history.length > 0 && (
        <div className="text-center text-slate-500 dark:text-slate-400 py-8">
          <Search className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm">
            {language === 'en' ? 'No results found' : language === 'fr' ? 'Aucun résultat trouvé' : 'لا توجد نتائج'}
          </p>
        </div>
      )}
      
      {history.length === 0 && (
        <div className="text-center text-slate-500 dark:text-slate-400 py-8">
          <History className="w-12 h-12 mx-auto mb-2 opacity-50" />
          <p className="text-sm">{t.history.noCalculationsYet}</p>
        </div>
      )}
    </div>
  );
}

function BatchCalculator({ onClose, abjad, analyzeElements }: { 
  onClose: () => void;
  abjad: Record<string, number>;
  analyzeElements: (text: string) => any;
}) {
  const { t, language } = useLanguage();
  const [batchInput, setBatchInput] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [calculating, setCalculating] = useState(false);

  const calculateBatch = () => {
    setCalculating(true);
    const lines = batchInput.split('\n').filter(line => line.trim());
    
    const batchResults = lines.map((line, index) => {
      const trimmed = line.trim();
      const kabir = abjadSum(trimmed, abjad);
      const saghir = digitalRoot(kabir);
      const hadathRem = hadathRemainder(kabir);
      const hadathElement = hadathToElement(hadathRem);
      const elementAnalysis = analyzeElements(trimmed);
      
      return {
        id: index,
        input: trimmed,
        kabir,
        saghir,
        hadathElement,
        dominant: elementAnalysis.dominant,
        secondary: elementAnalysis.secondary,
        balance: elementAnalysis.balance
      };
    });
    
    setResults(batchResults);
    setCalculating(false);
  };

  const exportAsCSV = () => {
    const headers = ['Input', 'Kabīr', 'Ṣaghīr', 'Ḥadath Element', 'Dominant Element', 'Secondary Element', 'Balance'];
    const rows = results.map(r => [
      r.input,
      r.kabir.toString(),
      r.saghir.toString(),
      r.hadathElement,
      r.dominant,
      r.secondary,
      `${r.balance?.toFixed(1) ?? '0'}%`
    ]);
    
    const csvContent = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');
    
    const dataBlob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `asrar-batch-${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const copyAsTable = () => {
    const text = results.map(r => 
      `${r.input}\t${r.kabir}\t${r.saghir}\t${r.hadathElement}\t${r.dominant}`
    ).join('\n');
    
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <List className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            {language === 'en' ? 'Batch Calculator' : language === 'fr' ? 'Calculateur par Lot' : 'حاسبة دفعة'}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                {language === 'en' ? 'Enter phrases (one per line)' : language === 'fr' ? 'Entrez des phrases (une par ligne)' : 'أدخل العبارات (واحدة لكل سطر)'}
              </label>
              <textarea
                value={batchInput}
                onChange={(e) => setBatchInput(e.target.value)}
                className="w-full h-64 px-4 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 font-arabic text-lg resize-none"
                placeholder={language === 'en' 
                  ? 'محمد\nأحمد\nفاطمة\n...' 
                  : language === 'fr'
                  ? 'محمد\nأحمد\nفاطمة\n...'
                  : 'محمد\nأحمد\nفاطمة\n...'}
                dir="rtl"
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={calculateBatch}
                  disabled={!batchInput.trim() || calculating}
                  className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  {calculating 
                    ? (language === 'en' ? 'Calculating...' : language === 'fr' ? 'Calcul...' : 'جاري الحساب...')
                    : (language === 'en' ? 'Calculate All' : language === 'fr' ? 'Calculer Tout' : 'احسب الكل')}
                </button>
              </div>
            </div>

            {/* Results Section */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {language === 'en' ? `Results (${results.length})` : language === 'fr' ? `Résultats (${results.length})` : `النتائج (${results.length})`}
                </label>
                {results.length > 0 && (
                  <div className="flex gap-2">
                    <button
                      onClick={copyAsTable}
                      className="text-xs bg-slate-600 text-white px-3 py-1 rounded hover:bg-slate-700 flex items-center gap-1"
                      title={language === 'en' ? 'Copy as table' : language === 'fr' ? 'Copier comme tableau' : 'نسخ كجدول'}
                    >
                      <Copy className="w-3 h-3" />
                      {language === 'en' ? 'Copy' : language === 'fr' ? 'Copier' : 'نسخ'}
                    </button>
                    <button
                      onClick={exportAsCSV}
                      className="text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 flex items-center gap-1"
                    >
                      <Download className="w-3 h-3" />
                      CSV
                    </button>
                  </div>
                )}
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg h-64 overflow-y-auto">
                {results.length === 0 ? (
                  <div className="flex items-center justify-center h-full text-slate-400 text-sm">
                    {language === 'en' ? 'Results will appear here' : language === 'fr' ? 'Les résultats apparaîtront ici' : 'ستظهر النتائج هنا'}
                  </div>
                ) : (
                  <div className="divide-y divide-slate-200 dark:divide-slate-700">
                    {results.map((result) => (
                      <div key={result.id} className="p-3 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                        <div className="font-medium text-slate-900 dark:text-slate-100 font-arabic mb-1" dir="rtl">
                          {result.input}
                        </div>
                        <div className="flex gap-2 text-xs flex-wrap">
                          <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded">
                            Kabīr: {result.kabir}
                          </span>
                          <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded">
                            Ṣaghīr: {result.saghir}
                          </span>
                          <span className={`px-2 py-0.5 rounded ${ELEMENT_INFO[result.dominant as ElementType]?.bg || 'bg-gray-100'} ${ELEMENT_INFO[result.dominant as ElementType]?.color || 'text-gray-700'}`}>
                            {result.dominant}
                          </span>
                          <span className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">
                            {result.balance?.toFixed(0) ?? '0'}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          {results.length > 0 && (
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">
                  {language === 'en' ? 'Total Items' : language === 'fr' ? 'Total' : 'المجموع'}
                </div>
                <div className="text-2xl font-bold text-indigo-900 dark:text-indigo-100">
                  {results.length}
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                  {language === 'en' ? 'Avg Kabīr' : language === 'fr' ? 'Moy. Kabīr' : 'متوسط كبير'}
                </div>
                <div className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                  {(results.reduce((sum, r) => sum + r.kabir, 0) / results.length).toFixed(0)}
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <div className="text-xs text-green-600 dark:text-green-400 mb-1">
                  {language === 'en' ? 'Avg Balance' : language === 'fr' ? 'Équilibre Moy.' : 'متوسط التوازن'}
                </div>
                <div className="text-2xl font-bold text-green-900 dark:text-green-100">
                  {(results.reduce((sum, r) => sum + (r.balance ?? 0), 0) / results.length).toFixed(0)}%
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                <div className="text-xs text-amber-600 dark:text-amber-400 mb-1">
                  {language === 'en' ? 'Most Common' : language === 'fr' ? 'Plus Commun' : 'الأكثر شيوعا'}
                </div>
                <div className="text-lg font-bold text-amber-900 dark:text-amber-100">
                  {(() => {
                    const counts = results.reduce((acc, r) => {
                      acc[r.dominant] = (acc[r.dominant] || 0) + 1;
                      return acc;
                    }, {} as Record<string, number>);
                    const sorted = Object.entries(counts).sort((a, b) => (b[1] as number) - (a[1] as number));
                    return sorted[0]?.[0] || '-';
                  })()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComparisonMode({ onClose, abjad, analyzeElements }: { 
  onClose: () => void;
  abjad: Record<string, number>;
  analyzeElements: (text: string) => any;
}) {
  const { t } = useLanguage();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [comparison, setComparison] = useState<any>(null);
  const [showKeyboard1, setShowKeyboard1] = useState(false);
  const [showKeyboard2, setShowKeyboard2] = useState(false);

  const handleKeyboardPress1 = (letter: string) => {
    setInput1(prev => prev + letter);
  };

  const handleKeyboardPress2 = (letter: string) => {
    setInput2(prev => prev + letter);
  };
  
  const compare = () => {
    if (!input1.trim() || !input2.trim()) return;
    
    const calc1 = {
      display: name1 || input1,
      arabic: input1,
      kabir: abjadSum(input1, abjad),
      saghir: digitalRoot(abjadSum(input1, abjad)),
      hadathElement: hadathToElement(hadathRemainder(abjadSum(input1, abjad))),
      ...analyzeElements(input1)
    };
    
    const calc2 = {
      display: name2 || input2,
      arabic: input2,
      kabir: abjadSum(input2, abjad),
      saghir: digitalRoot(abjadSum(input2, abjad)),
      hadathElement: hadathToElement(hadathRemainder(abjadSum(input2, abjad))),
      ...analyzeElements(input2)
    };
    
    // Calculate compatibility score
    const elementMatch = calc1.dominant === calc2.dominant ? 30 : 
                        (calc1.dominant === calc2.secondary || calc1.secondary === calc2.dominant) ? 15 : 0;
    const numberHarmony = Math.abs(calc1.saghir - calc2.saghir) <= 2 ? 20 : 10;
    const kabirDiff = Math.abs(calc1.kabir - calc2.kabir);
    const kabirHarmony = kabirDiff < 50 ? 20 : kabirDiff < 100 ? 10 : 5;
    const hadathMatch = calc1.hadathElement === calc2.hadathElement ? 30 : 15;
    
    const compatibility = elementMatch + numberHarmony + kabirHarmony + hadathMatch;
    
    setComparison({ calc1, calc2, compatibility });
  };
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <GitCompare className="w-5 h-5" />
            {t.comparison.title}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          {/* Input Section */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{t.comparison.firstName}</h3>
                <button
                  onClick={() => setShowKeyboard1(!showKeyboard1)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    showKeyboard1
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  <Keyboard className="w-4 h-4" />
                  {showKeyboard1 ? '✕' : '⌨'}
                </button>
              </div>
              <input
                type="text"
                value={name1}
                onChange={(e) => setName1(e.target.value)}
                placeholder="Display name (optional)"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
                placeholder="Arabic text"
                dir="rtl"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none text-xl font-arabic"
              />
              {showKeyboard1 && (
                <div className="mt-2">
                  <ArabicKeyboard 
                    onKeyPress={handleKeyboardPress1}
                    onClose={() => setShowKeyboard1(false)}
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{t.comparison.secondName}</h3>
                <button
                  onClick={() => setShowKeyboard2(!showKeyboard2)}
                  className={`flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                    showKeyboard2
                      ? 'bg-indigo-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                  }`}
                >
                  <Keyboard className="w-4 h-4" />
                  {showKeyboard2 ? '✕' : '⌨'}
                </button>
              </div>
              <input
                type="text"
                value={name2}
                onChange={(e) => setName2(e.target.value)}
                placeholder="Display name (optional)"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
              <input
                type="text"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
                placeholder="Arabic text"
                dir="rtl"
                className="w-full px-3 py-2 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 outline-none text-xl font-arabic"
              />
              {showKeyboard2 && (
                <div className="mt-2">
                  <ArabicKeyboard 
                    onKeyPress={handleKeyboardPress2}
                    onClose={() => setShowKeyboard2(false)}
                  />
                </div>
              )}
            </div>
          </div>
          
          <button
            onClick={compare}
            disabled={!input1.trim() || !input2.trim()}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-lg font-medium transition-colors"
          >
            Compare
          </button>
          
          {/* Results */}
          {comparison && (
            <div className="space-y-6">
              {/* Compatibility Score */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border border-purple-200 dark:border-purple-800">
                <h3 className="text-xl font-bold mb-2 text-purple-900 dark:text-purple-100">{t.comparison.elementalHarmony}</h3>
                <div className="flex items-center gap-4">
                  <div className="text-5xl font-bold text-purple-600 dark:text-purple-400">{comparison.compatibility}%</div>
                  <div className="flex-1">
                    <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-4 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-green-500 h-full transition-all duration-500"
                        style={{ width: `${comparison.compatibility}%` }}
                      />
                    </div>
                    <p className="text-sm mt-2 text-slate-600 dark:text-slate-400">
                      {comparison.compatibility >= 75 ? 'Strong harmony and resonance' :
                       comparison.compatibility >= 50 ? 'Moderate compatibility' :
                       'Complementary differences'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Side by Side Comparison */}
              <div className="grid md:grid-cols-2 gap-4">
                {[comparison.calc1, comparison.calc2].map((calc, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                    <h4 className="font-bold text-lg mb-3" dir="rtl">{calc.arabic}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Kabīr:</span>
                        <span className="font-semibold">{calc.kabir}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Ṣaghīr:</span>
                        <span className="font-semibold">{calc.saghir}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Element:</span>
                        <span className={`font-semibold ${ELEMENT_INFO[calc.dominant as ElementType].color}`}>{calc.dominant}</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {Object.entries(calc.counts)
                          .filter(([_, count]) => (count as number) > 0)
                          .map(([element, count]) => (
                            <span key={element} className={`text-xs px-2 py-1 rounded ${ELEMENT_INFO[element as ElementType].bg}`}>
                              {element}: {count as number}
                            </span>
                          ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Elemental Interaction Analysis */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-4 border border-amber-200 dark:border-amber-800">
                <h4 className="font-semibold mb-3 text-amber-900 dark:text-amber-100 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Elemental Interaction
                </h4>
                <div className="space-y-2 text-sm">
                  {(() => {
                    const elem1 = comparison.calc1.dominant;
                    const elem2 = comparison.calc2.dominant;
                    const elementPairs: Record<string, { icon: string; desc: string; type: 'harmonious' | 'tension' | 'neutral' }> = {
                      'Fire-Fire': { icon: '🔥🔥', desc: 'Amplified passion and energy. Intense but powerful.', type: 'harmonious' },
                      'Fire-Water': { icon: '🔥💧', desc: 'Steam and transformation. Dynamic tension creates change.', type: 'tension' },
                      'Fire-Air': { icon: '🔥💨', desc: 'Fire fans higher. Inspiration and expansion.', type: 'harmonious' },
                      'Fire-Earth': { icon: '🔥🌍', desc: 'Fire forges earth. Creative manifestation.', type: 'neutral' },
                      'Water-Water': { icon: '💧💧', desc: 'Deep emotional resonance. Flowing harmony.', type: 'harmonious' },
                      'Water-Air': { icon: '💧💨', desc: 'Mist and clouds. Dreamy, imaginative blend.', type: 'neutral' },
                      'Water-Earth': { icon: '💧🌍', desc: 'Fertile ground. Nurturing and growth.', type: 'harmonious' },
                      'Air-Air': { icon: '💨💨', desc: 'Mental synergy. Ideas multiply.', type: 'harmonious' },
                      'Air-Earth': { icon: '💨🌍', desc: 'Wind shapes stone. Gradual transformation.', type: 'neutral' },
                      'Earth-Earth': { icon: '🌍🌍', desc: 'Stable foundation. Grounded partnership.', type: 'harmonious' },
                    };
                    
                    const key = `${elem1}-${elem2}`;
                    const reverseKey = `${elem2}-${elem1}`;
                    const interaction = elementPairs[key] || elementPairs[reverseKey] || { icon: '✨', desc: 'Unique combination', type: 'neutral' as const };
                    
                    const colorClass = interaction.type === 'harmonious' ? 'text-green-700 dark:text-green-300' :
                                      interaction.type === 'tension' ? 'text-amber-700 dark:text-amber-300' :
                                      'text-blue-700 dark:text-blue-300';
                    
                    return (
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-2xl">{interaction.icon}</span>
                          <span className={`font-semibold ${colorClass}`}>
                            {interaction.type === 'harmonious' ? '✓ Harmonious' :
                             interaction.type === 'tension' ? '⚠️ Tension' :
                             '○ Neutral'}
                          </span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">{interaction.desc}</p>
                      </div>
                    );
                  })()}
                </div>
              </div>
              
              {/* Combined Values Analysis */}
              <div className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-violet-200 dark:border-violet-800">
                <h4 className="font-semibold mb-3 text-violet-900 dark:text-violet-100">Combined Values</h4>
                {(() => {
                  const combinedKabir = comparison.calc1.kabir + comparison.calc2.kabir;
                  const combinedSaghir = digitalRoot(combinedKabir);
                  const combinedHadath = hadathToElement(hadathRemainder(combinedKabir));
                  
                  return (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-violet-600 dark:text-violet-400 mb-1">Combined Kabīr</div>
                        <div className="text-2xl font-bold text-violet-900 dark:text-violet-100">{combinedKabir}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">{comparison.calc1.kabir} + {comparison.calc2.kabir}</div>
                      </div>
                      <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3">
                        <div className="text-xs text-violet-600 dark:text-violet-400 mb-1">Combined Ṣaghīr</div>
                        <div className="text-2xl font-bold text-violet-900 dark:text-violet-100">{combinedSaghir}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                          {t.numericalEssence[`number${combinedSaghir}` as keyof typeof t.numericalEssence] || 'Unity'}
                        </div>
                      </div>
                      <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-3 col-span-2">
                        <div className="text-xs text-violet-600 dark:text-violet-400 mb-1">Combined Element</div>
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-semibold ${ELEMENT_INFO[combinedHadath as ElementType].color}`}>
                            {HADAD_ELEMENT_INFO[combinedHadath as ElementType].icon} {combinedHadath}
                          </span>
                          <span className="text-xs text-slate-600 dark:text-slate-400">
                            {combinedHadath === 'Fire' && 'Passionate union' ||
                             combinedHadath === 'Water' && 'Emotional depth' ||
                             combinedHadath === 'Air' && 'Mental connection' ||
                             combinedHadath === 'Earth' && 'Stable foundation'}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
              
              {/* Numerical Operations */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold mb-3 text-slate-900 dark:text-slate-100">Mathematical Operations</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-white dark:bg-slate-800 rounded p-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Addition</div>
                    <div className="font-mono">{comparison.calc1.kabir} + {comparison.calc2.kabir} = {comparison.calc1.kabir + comparison.calc2.kabir}</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded p-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Difference</div>
                    <div className="font-mono">|{comparison.calc1.kabir} - {comparison.calc2.kabir}| = {Math.abs(comparison.calc1.kabir - comparison.calc2.kabir)}</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded p-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Multiplication</div>
                    <div className="font-mono text-xs">{comparison.calc1.kabir} × {comparison.calc2.kabir} = {comparison.calc1.kabir * comparison.calc2.kabir}</div>
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded p-2">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Ratio</div>
                    <div className="font-mono text-xs">{Math.max(comparison.calc1.kabir, comparison.calc2.kabir)} ÷ {Math.min(comparison.calc1.kabir, comparison.calc2.kabir)} = {(Math.max(comparison.calc1.kabir, comparison.calc2.kabir) / Math.min(comparison.calc1.kabir, comparison.calc2.kabir)).toFixed(2)}</div>
                  </div>
                </div>
              </div>
              
              {/* Detailed Analysis */}
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold mb-2 text-slate-900 dark:text-slate-100">Detailed Analysis</h4>
                <ul className="text-sm space-y-1 text-slate-600 dark:text-slate-400">
                  <li>• Dominant elements: {comparison.calc1.dominant} ↔ {comparison.calc2.dominant}</li>
                  <li>• Numerical difference: {Math.abs(comparison.calc1.kabir - comparison.calc2.kabir)}</li>
                  <li>• Digital root harmony: {Math.abs(comparison.calc1.saghir - comparison.calc2.saghir)} apart</li>
                  <li>• Hadath elements: {comparison.calc1.hadathElement} ↔ {comparison.calc2.hadathElement}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Rotating Dhikr Preview for Header ────────────────────────────────────────────

// Standard dhikr options to rotate through (shows variety even with 1 active challenge)
const PREVIEW_DHIKR = [
  { arabicText: 'أَسْتَغْفِرُ اللهَ', label: 'Istighfār' },
  { arabicText: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّد', label: 'Ṣalawāt' },
  { arabicText: 'يَا رَحْمَٰنُ', label: 'Divine Name' },
  { arabicText: 'سُبْحَانَ اللهِ', label: 'Tasbīḥ' },
];

function RotatingDhikrPreview({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % PREVIEW_DHIKR.length);
        setIsVisible(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const current = PREVIEW_DHIKR[currentIndex];
  
  return (
    <div className={`flex flex-col items-end gap-1 ${className || ''}`}>
      <p 
        className={`text-base sm:text-lg font-arabic text-amber-800 dark:text-amber-200 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        dir="rtl"
      >
        {current.arabicText}
      </p>
      <div className="flex gap-1">
        {PREVIEW_DHIKR.map((_, idx) => (
          <span
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
              idx === currentIndex
                ? 'bg-amber-600 dark:bg-amber-400'
                : 'bg-amber-300 dark:bg-amber-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function DailyReflectionCard({ isCollapsed, onToggleCollapse }: { isCollapsed: boolean; onToggleCollapse: () => void }) {
  const { t, language } = useLanguage();
  const daily = getDailyReflection();
  const ramadan = getRamadanInfo();
  const isRamadan = ramadan.isRamadan;
  
  // Get total dhikr count from Ramadan challenges
  const { getTotalRamadanProgress } = useRamadanChallenges();
  const totalDhikr = getTotalRamadanProgress();

  // Ramadan-aware header strings
  const headerTitle = isRamadan
    ? (language === 'fr'
        ? `🌙 Jour ${ramadan.dayOfRamadan} de Ramadan · Défis Spirituels`
        : `🌙 Ramadan Day ${ramadan.dayOfRamadan} · Spiritual Challenges`)
    : t.dailyReflection.todaysReflection;

  const badgeLabel = isRamadan ? 'رمضان' : t.dailyReflection.dailyBadge;

  // Color scheme: amber/gold during Ramadan, emerald otherwise
  const colors = isRamadan
    ? {
        bg: 'from-amber-50 via-yellow-50 to-orange-50 dark:from-amber-950/40 dark:via-yellow-950/30 dark:to-orange-950/30',
        border: 'border-amber-200 dark:border-amber-700/50',
        headerHover: 'hover:bg-amber-100/40 dark:hover:bg-amber-900/20',
        pulse: 'bg-amber-400',
        title: 'text-amber-900 dark:text-amber-100',
        badge: 'bg-amber-600',
        sub: 'text-amber-600 dark:text-amber-400',
        btnHover: 'hover:bg-amber-200/50 dark:hover:bg-amber-800/50',
        icon: 'text-amber-600 dark:text-amber-400',
      }
    : {
        bg: 'from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20',
        border: 'border-emerald-200 dark:border-emerald-800',
        headerHover: 'hover:bg-emerald-100/50 dark:hover:bg-emerald-900/30',
        pulse: 'bg-emerald-400',
        title: 'text-emerald-900 dark:text-emerald-100',
        badge: 'bg-emerald-600',
        sub: 'text-emerald-600 dark:text-emerald-400',
        btnHover: 'hover:bg-emerald-200/50 dark:hover:bg-emerald-900/50',
        icon: 'text-emerald-600 dark:text-emerald-400',
      };
  
  return (
    <div className={`bg-gradient-to-br ${colors.bg} rounded-xl border ${colors.border} overflow-hidden transition-all duration-300`}>
      {/* Header - Always Visible */}
      <div className={`px-4 py-3 sm:p-6 cursor-pointer ${colors.headerHover} transition-colors`} onClick={onToggleCollapse}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 sm:gap-3 flex-1 min-w-0">
            {/* Pulse Animation Badge */}
            <div className="relative flex-shrink-0">
              <div className={`absolute inset-0 ${colors.pulse} rounded-full opacity-75 animate-pulse`} style={{width: '22px', height: '22px'}}></div>
              {isRamadan
                ? <span className="relative z-10 text-lg sm:text-xl">🌙</span>
                : <Calendar className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.icon} relative z-10`} />
              }
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className={`text-sm sm:text-lg font-bold ${colors.title}`}>{headerTitle}</h3>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] sm:text-xs font-medium ${colors.badge} text-white ${isRamadan ? 'font-arabic' : 'animate-pulse'}`}>
                  {badgeLabel}
                </span>
              </div>
              {!isRamadan && !isCollapsed && (
                <p className={`text-xs ${colors.sub} mt-0.5`}>{daily.date}</p>
              )}
            </div>
            
            {/* Rotating Dhikr Preview - Only during Ramadan when collapsed */}
            {isRamadan && isCollapsed && (
              <RotatingDhikrPreview className="hidden sm:flex" />
            )}
          </div>
          
          {/* Right side: Total dhikr count (Ramadan only) + Collapse Toggle */}
          <div className="flex items-center gap-3">
            {/* Total Dhikr Stat Block - Always visible during Ramadan */}
            {isRamadan && (
              <div className="flex flex-col items-end leading-tight">
                <span className="text-lg sm:text-xl font-bold text-amber-700 dark:text-amber-300">
                  {totalDhikr.toLocaleString()}
                </span>
                <span className="text-[10px] sm:text-xs text-amber-500 dark:text-amber-400">
                  {language === 'fr' ? 'dhikr au total' : 'dhikr total'}
                </span>
              </div>
            )}
            
            {/* Collapse Toggle Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCollapse();
              }}
              className={`p-2 ${colors.btnHover} rounded-lg transition-colors flex-shrink-0`}
              aria-label={isCollapsed ? t.dailyReflection.expandReflection : t.dailyReflection.collapseReflection}
            >
              {isCollapsed ? (
                <ChevronDown className={`w-5 h-5 ${colors.icon}`} />
              ) : (
                <ChevronUp className={`w-5 h-5 ${colors.icon}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Collapsible Content */}
      {!isCollapsed && (
        <div className="px-6 pb-6 pt-0 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Ramadan Spiritual Challenge Hub — replaces old single tracker */}
          <RamadanHub language={language} />

          <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
            <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">{t.dailyReflection.verseOfTheDay}</div>
            <div className="text-sm font-medium mb-1">{daily.verse.text}</div>
            <div className="text-xs text-slate-600 dark:text-slate-400">Quran {daily.verse.ref} • {daily.verse.context}</div>
          </div>
          
          <div className="bg-white/50 dark:bg-slate-800/50 rounded-lg p-4">
            <div className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-1">{t.dailyReflection.divineNameForReflection}</div>
            <div className="flex items-baseline justify-between mb-1">
              <span className="text-xl font-arabic" dir="rtl">{daily.name.arabic}</span>
              <span className="text-xs text-slate-500">{daily.name.transliteration}</span>
            </div>
            <div className="text-sm text-slate-600 dark:text-slate-400">{daily.name.meaning}</div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// MAIN APP
// ============================================================================

export default function AsrarEveryday() {
  const { abjad } = useAbjad(); // Get the current Abjad system
  const { t, language } = useLanguage(); // Get translations and current language
  
  // Add mounted state to prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  
  const [darkMode, setDarkMode] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(true);
  const [viewMode, setViewMode] = useState<'planetary' | 'calculator' | 'guidance' | 'advanced'>('planetary');
  const [calculatorMode, setCalculatorMode] = useState<'beginner' | 'intermediate' | 'scholar'>('beginner');
  const [arabicInput, setArabicInput] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [latinInput, setLatinInput] = useState('');
  const [taMarbutaAs, setTaMarbutaAs] = useState<'ه' | 'ة'>('ه');
  const [translitResult, setTranslitResult] = useState<any>(null);
  const [result, setResult] = useState<any>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showComparison, setShowComparison] = useState(false);
  const [showBatchCalculator, setShowBatchCalculator] = useState(false);
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [showCompatibility, setShowCompatibility] = useState(false);
  const [copiedValue, setCopiedValue] = useState<string | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  
  // Collapsible sections state
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    letterBreakdown: true,
    advancedMethods: true,
    elementDistribution: true,
    burjSignature: true,
    planetarySignature: true,
    celestialSignature: true
  });
  
  // Daily Reflection State - initialize to true (collapsed by default), set from localStorage in useEffect
  const [isDailyReflectionCollapsed, setIsDailyReflectionCollapsed] = useState(true);
  
  // Set mounted on client side only
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Load section preferences from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('expandedSections');
      if (stored) {
        setExpandedSections(JSON.parse(stored));
      }
    }
  }, []);
  
  // Save section preferences to localStorage
  const toggleSection = (section: string) => {
    setExpandedSections(prev => {
      const newState = { ...prev, [section]: !prev[section] };
      if (typeof window !== 'undefined') {
        localStorage.setItem('expandedSections', JSON.stringify(newState));
      }
      return newState;
    });
  };
  
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
  
  // Helper function for element analysis
  const analyzeElements = (text: string) => {
    const audit = auditAbjad(text, abjad, LETTER_ELEMENTS);
    const counts: Record<ElementType, number> = { Fire: 0, Water: 0, Air: 0, Earth: 0 };
    const values: Record<ElementType, number> = { Fire: 0, Water: 0, Air: 0, Earth: 0 };
    
    audit.steps.forEach(step => {
      const element = step.element as ElementType | undefined;
      if (element) {
        counts[element]++;
        values[element] += step.value;
      }
    });
    
    const entries = Object.entries(counts) as [ElementType, number][];
    const dominant = entries.reduce((a, b) => b[1] > a[1] ? b : a)[0];
    const secondary = entries.filter(([el]) => el !== dominant).reduce((a, b) => b[1] > a[1] ? b : a)[0];
    
    // Calculate balance score
    const countValues = Object.values(counts);
    const total = countValues.reduce((a, b) => a + b, 0);
    const avg = total / 4;
    const variance = countValues.reduce((sum, count) => sum + Math.pow(count - avg, 2), 0) / 4;
    const balance = Math.max(0, 100 - (variance / avg) * 20);
    
    return { counts, values, dominant, secondary, balance, audit };
  };
  
  useEffect(() => {
    setHistory(loadHistory());
  }, []);
  
  const handleLatinInput = (value: string) => {
    setLatinInput(value);
    if (value.trim()) {
      const result = transliterateLatinToArabic(value, { taMarbutaAs });
      setTranslitResult(result);
      setArabicInput(result.primary);
      setDisplayName(value);
    } else {
      setTranslitResult(null);
      setArabicInput('');
      setDisplayName('');
    }
  };
  
  const handleTaMarbutaChange = (newValue: 'ه' | 'ة') => {
    setTaMarbutaAs(newValue);
    // Retransliterate if Latin input exists
    if (latinInput.trim()) {
      const result = transliterateLatinToArabic(latinInput, { taMarbutaAs: newValue });
      setTranslitResult(result);
      setArabicInput(result.primary);
    }
    // Recalculate if result exists
    if (result && arabicInput) {
      calculate();
    }
  };

  const handleKeyboardPress = (char: string) => {
    if (char === '⌫') {
      // Backspace
      setArabicInput(arabicInput.slice(0, -1));
      setLatinInput(''); // Clear latin when typing Arabic
    } else if (char === '⎵') {
      // Space
      setArabicInput(arabicInput + ' ');
    } else {
      // Regular character
      setArabicInput(arabicInput + char);
      setLatinInput(''); // Clear latin when typing Arabic
    }
  };
  
  const calculate = () => {
    if (!arabicInput.trim()) return;
    
    setIsCalculating(true);
    
    // Use setTimeout to allow UI to update
    setTimeout(() => {
      const audit = auditAbjad(arabicInput, abjad, LETTER_ELEMENTS);
      const kabir = audit.total;
      const saghir = calcDigitalRoot(kabir);
      const hadath = calcHadathRemainder(kabir);
      const hadathElement = hadathToElement(hadath);
      const elementAnalysis = analyzeElements(arabicInput);
      const sacredMatches = findSacredMatches(kabir);
      const resonance = sacredResonance(kabir);
    
    // Advanced calculation methods
    const wusta = calculateWusta(kabir);
    const kamal = calculateKamal(kabir);
    const bast = calculateBast(kabir);
    const sirri = calculateSirri(kabir);
    
    // Quranic verse connections
    const exactVerse = getExactVerseMatch(kabir);
    const relatedVerses = findVersesByValue(kabir, 50);
    
    // Divine Name connections
    const exactDivineName = findDivineNameByValue(kabir);
    const similarDivineNames = findSimilarDivineNames(kabir, 20);
    
    // Letter-by-letter breakdown
    const letterBreakdown = arabicInput.split('').map((letter, idx) => {
      const value = abjad[letter] || 0;
      const element = LETTER_ELEMENTS[letter] || 'Air';
      return {
        letter,
        value,
        element,
        position: idx + 1
      };
    }).filter(l => l.value > 0);
    
    const newResult = {
      display: displayName || arabicInput,
      arabic: arabicInput,
      kabir,
      saghir,
      hadath,
      hadathElement,
      wusta,
      kamal,
      bast,
      sirri,
      letterBreakdown,
      exactVerse,
      relatedVerses,
      exactDivineName,
      similarDivineNames,
      ...elementAnalysis,
      sacredMatches,
      resonance
    };
    
    setResult(newResult);
    
    // Add to history
    const historyItem: HistoryItem = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      display: newResult.display,
      arabic: newResult.arabic,
      kabir: newResult.kabir,
      saghir: newResult.saghir,
      hadathElement: newResult.hadathElement,
      dominant: newResult.dominant,
      isFavorite: false
    };
    
    const newHistory = [historyItem, ...history].slice(0, 50); // Keep last 50
    setHistory(newHistory);
    saveHistory(newHistory);
    setIsCalculating(false);
    }, 100);
  };
  
  // Copy to clipboard function
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedValue(label);
      setTimeout(() => setCopiedValue(null), 2000);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  };
  
  // Export current result as JSON
  const exportResult = () => {
    if (!result) return;
    
    const exportData = {
      text: result.arabic,
      display: result.display,
      timestamp: new Date().toISOString(),
      calculations: {
        kabir: result.kabir,
        saghir: result.saghir,
        hadath: result.hadath,
        hadathElement: result.hadathElement
      },
      elements: {
        dominant: result.dominant,
        secondary: result.secondary,
        counts: result.counts,
        values: result.values
      },
      advanced: {
        wusta: result.wusta,
        kamal: result.kamal,
        bast: result.bast,
        sirri: result.sirri
      }
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `asrar-${result.arabic}-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  
  const handleHistorySelect = (item: HistoryItem) => {
    setArabicInput(item.arabic);
    setDisplayName(item.display !== item.arabic ? item.display : '');
    setShowHistory(false);
    // Trigger calculation
    setTimeout(calculate, 100);
  };
  
  const handleDeleteHistory = (id: string) => {
    const newHistory = history.filter(h => h.id !== id);
    setHistory(newHistory);
    saveHistory(newHistory);
  };
  
  const handleToggleFavorite = (id: string) => {
    const newHistory = history.map(h => 
      h.id === id ? { ...h, isFavorite: !h.isFavorite } : h
    );
    setHistory(newHistory);
    saveHistory(newHistory);
  };
  
  const handleUpdateNotes = (id: string, notes: string) => {
    const newHistory = history.map(h => 
      h.id === id ? { ...h, notes } : h
    );
    setHistory(newHistory);
    saveHistory(newHistory);
  };
  
  const handleUpdateTags = (id: string, tags: string[]) => {
    const newHistory = history.map(h => 
      h.id === id ? { ...h, tags } : h
    );
    setHistory(newHistory);
    saveHistory(newHistory);
  };
  
  const handleUpdateCategory = (id: string, category: 'name' | 'prayer' | 'verse' | 'custom') => {
    const newHistory = history.map(h => 
      h.id === id ? { ...h, category } : h
    );
    setHistory(newHistory);
    saveHistory(newHistory);
  };
  
  const handleClearHistory = () => {
    if (confirm('Clear all history? This cannot be undone.')) {
      setHistory([]);
      saveHistory([]);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') calculate();
  };
  
  // Prevent hydration mismatch by showing loading state until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <AsrarLogo size={80} variant="icon" element="aether" animate={true} />
          </div>
          <p className="text-xl font-semibold text-slate-700 dark:text-slate-300">Loading Asrār...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors">
        {/* Header */}
        <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
            {/* Mobile Header (< 768px) */}
            <div className="flex md:hidden items-center justify-between gap-1">
              {/* Logo & Title */}
              <div className="flex items-center gap-1.5 flex-1 min-w-0">
                <AsrarLogo size={32} variant="icon" element="aether" animate={true} />
                <div className="min-w-0">
                  <h1 className="text-base font-bold text-slate-900 dark:text-slate-100 truncate">Asrār</h1>
                  <p className="text-[10px] text-slate-600 dark:text-slate-400 truncate hidden xs:block">ʿIlm al-Ḥurūf</p>
                </div>
              </div>

              {/* Mobile Controls */}
              <div className="flex items-center gap-1 flex-shrink-0">
                {/* User Menu */}
                <UserMenu />

                {/* Language Toggle */}
                <LanguageToggle />

                {/* History Button */}
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors relative min-h-[40px] touch-manipulation"
                  title="View history"
                >
                  <History className="w-5 h-5" />
                  {history.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                      {history.length > 9 ? '9+' : history.length}
                    </span>
                  )}
                </button>

                {/* Hamburger Menu */}
                <button
                  onClick={() => setShowMobileMenu(true)}
                  className="flex md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors min-h-[40px] touch-manipulation"
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
                  <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Asrār</h1>
                  <p className="text-xs text-slate-600 dark:text-slate-400">ʿIlm al-Ḥurūf & ʿIlm al-ʿAdad Explorer</p>
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
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors hidden lg:flex"
                  title="Help & Tutorial"
                >
                  <HelpCircle className="w-5 h-5" />
                </button>

                {/* Compatibility Button */}
                <button
                  onClick={() => setShowCompatibility(true)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors hidden lg:flex"
                  title="Relationship Compatibility"
                >
                  <Heart className="w-5 h-5" />
                </button>

                {/* Comparison Button */}
                <button
                  onClick={() => setShowComparison(true)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="Compare two names"
                >
                  <GitCompare className="w-5 h-5" />
                </button>

                {/* Batch Calculator Button */}
                <button
                  onClick={() => setShowBatchCalculator(true)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  title="Batch Calculator"
                >
                  <List className="w-5 h-5" />
                </button>

                {/* History Button */}
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative"
                  title="View history"
                >
                  <History className="w-5 h-5" />
                  {history.length > 0 && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                      {history.length > 9 ? '9+' : history.length}
                    </span>
                  )}
                </button>

                {/* Language Toggle */}
                <LanguageToggle />
              </div>
            </div>
          </div>
        </header>
        
        {/* Main Content */}
        <main className="w-full mx-auto px-3 sm:px-4 py-2 sm:py-8">
          <div className="max-w-6xl mx-auto">
            {showDisclaimer && <DisclaimerBanner onDismiss={() => setShowDisclaimer(false)} />}
            
            {/* Daily Reflection - Prominent Banner */}
            <div className="mb-2 sm:mb-8">
              <DailyReflectionCard 
                isCollapsed={isDailyReflectionCollapsed}
              onToggleCollapse={handleToggleDailyReflection}
            />
          </div>
          
          {/* View Mode Tabs - Mobile Responsive */}
          <div className="mb-2 sm:mb-8 overflow-x-auto">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 p-1.5 sm:p-2 inline-flex gap-1.5 sm:gap-2 min-w-full sm:min-w-0">
              <button
                onClick={() => setViewMode('planetary')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  viewMode === 'planetary'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Moon className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.nav.planetary}</span>
                <span className="sm:hidden">ʿIlm Nujūm</span>
              </button>
              <button
                onClick={() => setViewMode('calculator')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  viewMode === 'calculator'
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Calculator className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.calculator.title}</span>
                <span className="sm:hidden">{t.common.calculate}</span>
              </button>
              {/* Life Guidance & Who Am I tabs */}
              <button
                onClick={() => setViewMode('guidance')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  viewMode === 'guidance'
                    ? 'bg-gradient-to-r from-violet-600 to-purple-700 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Compass className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.nav.guidance}</span>
                <span className="sm:hidden">{t.nav.guidance}</span>
              </button>
              <button
                onClick={() => setViewMode('advanced')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all whitespace-nowrap text-sm sm:text-base ${
                  viewMode === 'advanced'
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                <Compass className="w-4 sm:w-5 h-4 sm:h-5 inline mr-1 sm:mr-2" />
                <span className="hidden sm:inline">{t.nav.advanced}</span>
                <span className="sm:hidden">{t.nav.advanced}</span>
              </button>
            </div>
          </div>
          
          {viewMode === 'planetary' ? (
            <div className="space-y-3 sm:space-y-6">
              <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 dark:from-indigo-900/20 dark:via-purple-900/20 dark:to-blue-900/20 rounded-xl p-3 md:p-6 shadow-md">
                <h3 className="text-base md:text-xl font-bold mb-0.5 sm:mb-2 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500" />
                  {language === 'en' ? 'ʿIlm al-Nujūm – Planetary Alignment' : language === 'fr' ? 'ʿIlm al-Nujūm – Alignement Planétaire' : 'علم النجوم'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-2 sm:mb-6 hidden sm:block">
                  {language === 'fr'
                    ? 'Aperçus en temps réel basés sur la science céleste islamique traditionnelle et les heures planétaires chaldéennes.'
                    : 'Real-time insights based on traditional Islamic celestial science and Chaldean planetary hours.'}
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
                  <PlanetaryHourCard language={language} />
                  <PlanetOfTheDay language={language} />
                </div>
                <div className="mt-4">
                  <PlanetTransitCard language={language} onNavigate={() => {}} />
                </div>
              </div>
            </div>
          ) : viewMode === 'guidance' ? (
            <IlmHurufPanel />
          ) : viewMode === 'advanced' ? (
            <IstikharaPanel />
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content Area - Mobile Full Width, Desktop 2/3 */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              
              {/* Quick Actions - Compact Top Position */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  onClick={() => setShowComparison(true)}
                  className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-xl p-4 transition-all shadow-md hover:shadow-lg flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <GitCompare className="w-5 h-5 sm:w-6 sm:h-6" />
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base">
                        {language === 'en' ? 'Compare Two' : language === 'fr' ? 'Comparer Deux' : 'مقارنة عبارتين'}
                      </div>
                      <div className="text-xs opacity-90 hidden sm:block">
                        {language === 'en' ? 'Compatibility analysis' : language === 'fr' ? 'Analyse compatibilité' : 'تحليل التوافق'}
                      </div>
                    </div>
                  </div>
                  <div className="text-xl group-hover:translate-x-1 transition-transform">→</div>
                </button>
                
                <button
                  onClick={() => setShowBatchCalculator(true)}
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white rounded-xl p-4 transition-all shadow-md hover:shadow-lg flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <List className="w-5 h-5 sm:w-6 sm:h-6" />
                    <div className="text-left">
                      <div className="font-bold text-sm sm:text-base">
                        {language === 'en' ? 'Batch Calculate' : language === 'fr' ? 'Calcul par Lot' : 'حاسبة دفعة'}
                      </div>
                      <div className="text-xs opacity-90 hidden sm:block">
                        {language === 'en' ? 'Multiple at once' : language === 'fr' ? 'Plusieurs à la fois' : 'متعددة في وقت واحد'}
                      </div>
                    </div>
                  </div>
                  <div className="text-xl group-hover:translate-x-1 transition-transform">→</div>
                </button>
              </div>

              {/* Input Section - Mobile Optimized */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Calculator className="w-5 h-5 flex-shrink-0" />
              <span>{t.calculator.calculateLetterValues}</span>
            </h2>
            
            {/* Mode Switcher - Knowledge Level Selector */}
            <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  {t.calculator.knowledgeLevel}
                </h3>
                <button 
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                  onClick={() => {
                    alert(t.calculator.knowledgeLevelInfo);
                  }}
                >
                  {t.calculator.knowledgeLevelHelp}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <button 
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all ${
                    calculatorMode === 'beginner' 
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                  }`}
                  onClick={() => setCalculatorMode('beginner')}
                >
                  <div className="text-2xl sm:text-3xl mb-1">🔰</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100">
                    {t.calculator.beginner}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 hidden sm:block">
                    {t.calculator.learnBasics}
                  </div>
                </button>
                
                <button 
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all ${
                    calculatorMode === 'intermediate' 
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                  }`}
                  onClick={() => setCalculatorMode('intermediate')}
                >
                  <div className="text-2xl sm:text-3xl mb-1">🎓</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100">
                    {t.calculator.intermediate}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 hidden sm:block">
                    {t.calculator.deeperAnalysis}
                  </div>
                </button>
                
                <button 
                  className={`p-3 sm:p-4 rounded-xl border-2 transition-all ${
                    calculatorMode === 'scholar' 
                      ? 'border-indigo-600 dark:border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30' 
                      : 'border-slate-300 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                  }`}
                  onClick={() => setCalculatorMode('scholar')}
                >
                  <div className="text-2xl sm:text-3xl mb-1">👑</div>
                  <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-slate-100">
                    {t.calculator.scholar}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400 mt-1 hidden sm:block">
                    {t.calculator.fullResearch}
                  </div>
                </button>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t.calculator.latinText}
                  </label>
                  <TaMarbutaToggle value={taMarbutaAs} onChange={handleTaMarbutaChange} />
                </div>
                <input
                  type="text"
                  value={latinInput}
                  onChange={(e) => handleLatinInput(e.target.value)}
                  placeholder="e.g., Rahim, Musa, Latif"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 text-base sm:text-lg rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition-all"
                />
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {t.calculator.autoTransliterates}
                </p>
                {translitResult && translitResult.confidence < 100 && (
                  <div className="mt-2">
                    <ConfidenceMeter 
                      confidence={translitResult.confidence} 
                      warnings={translitResult.warnings} 
                    />
                  </div>
                )}
              </div>
              
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    {t.calculator.arabicText} <span className="text-red-500">*</span>
                  </label>
                  <button
                    onClick={() => setShowKeyboard(!showKeyboard)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                      showKeyboard
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    <Keyboard className="w-4 h-4" />
                    <span className="hidden sm:inline">{showKeyboard ? t.calculator.hideKeyboard : t.calculator.showKeyboard}</span>
                    <span className="sm:hidden">{showKeyboard ? '✕' : '⌨'}</span>
                  </button>
                </div>
                <input
                  type="text"
                  value={arabicInput}
                  onChange={(e) => {
                    setArabicInput(e.target.value);
                    setLatinInput('');
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="باكا"
                  dir="rtl"
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 outline-none transition-all text-2xl sm:text-3xl font-arabic"
                  style={{ fontFamily: "'Noto Naskh Arabic', 'Amiri', serif" }}
                  maxLength={200}
                />
                {arabicInput.length > 0 && (
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {t.calculator.examples}: يس (70), بسم الله (786), باكا (108)
                    </p>
                    <span className={`text-xs ${arabicInput.length > 150 ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400 dark:text-slate-500'}`}>
                      {arabicInput.length}/200
                    </span>
                  </div>
                )}
                {arabicInput.length === 0 && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {t.calculator.examples}: يس (70), بسم الله (786), باكا (108)
                  </p>
                )}
                {showKeyboard && (
                  <div className="mt-3 overflow-x-auto">
                    <ArabicKeyboard 
                      onKeyPress={handleKeyboardPress}
                      onClose={() => setShowKeyboard(false)}
                    />
                  </div>
                )}
                {translitResult && translitResult.candidates.length > 1 && (
                  <div className="mt-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                    <p className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-2">Alternative spellings:</p>
                    <div className="flex flex-wrap gap-2">
                      {translitResult.candidates.slice(0, 5).map((alt: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={() => setArabicInput(alt)}
                          className="px-3 py-1 bg-white dark:bg-slate-800 rounded border border-blue-300 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-sm font-arabic"
                          dir="rtl"
                        >
                          {alt}
                        </button>
                      ))}
                    </div>
                    {translitResult.warnings.length > 0 && (
                      <p className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                        ℹ️ {translitResult.warnings[0]}
                      </p>
                    )}
                  </div>
                )}
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={calculate}
                  disabled={!arabicInput.trim() || isCalculating}
                  className="flex-1 py-3 px-4 sm:px-6 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-slate-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-base sm:text-lg min-h-[44px]"
                >
                  {isCalculating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {language === 'en' ? 'Calculating...' : language === 'fr' ? 'Calcul...' : 'جاري الحساب...'}
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-5 h-5" />
                      {t.calculator.calculateButton}
                    </>
                  )}
                </button>
                {(arabicInput.trim() || latinInput.trim()) && (
                  <button
                    onClick={() => {
                      setArabicInput('');
                      setLatinInput('');
                      setTranslitResult(null);
                      setResult(null);
                      setDisplayName('');
                    }}
                    className="px-4 py-3 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 min-h-[44px]"
                    title={language === 'en' ? 'Clear all' : language === 'fr' ? 'Tout effacer' : 'مسح الكل'}
                  >
                    <X className="w-5 h-5" />
                    <span className="hidden sm:inline">{language === 'en' ? 'Clear' : language === 'fr' ? 'Effacer' : 'مسح'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
          
          {/* Results - Mobile Responsive with Educational Interface */}
          {result && (
            <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              
              {/* Export Button */}
              <div className="flex justify-end">
                <button
                  onClick={exportResult}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg transition-colors text-sm font-medium"
                  title={language === 'en' ? 'Export results as JSON' : language === 'fr' ? 'Exporter en JSON' : 'تصدير كـ JSON'}
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {language === 'en' ? 'Export JSON' : language === 'fr' ? 'Exporter JSON' : 'تصدير JSON'}
                  </span>
                </button>
              </div>
              
              {/* 1. Educational Context Banner */}
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl p-4 sm:p-6 border border-indigo-200 dark:border-indigo-800">
                <div className="flex items-start gap-3 mb-4">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-1">{t.calculator.whatYouLearn}</h3>
                    <p className="text-sm text-indigo-800 dark:text-indigo-200">{t.calculator.discoverSignificance}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-indigo-200 dark:border-indigo-700">
                    <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">🔢 {t.calculator.numericalValues}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t.calculator.numericalValuesDesc}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-indigo-200 dark:border-indigo-700">
                    <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">🌊 {t.calculator.elementalForces}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t.calculator.elementalForcesDesc}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800/50 rounded-lg p-3 border border-indigo-200 dark:border-indigo-700">
                    <p className="text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-1">✨ {t.calculator.hiddenPatterns}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{t.calculator.hiddenPatternsDesc}</p>
                  </div>
                </div>
              </div>

              {/* 2. Enhanced Key Metrics Cards with Tooltips */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  {t.calculator.keyMetrics}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Kabīr Card */}
                  <div className="group relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/40 rounded-xl p-4 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wide">{t.calculator.kabir.label}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => copyToClipboard(result.kabir.toString(), 'kabir')}
                          className="p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors"
                          title={language === 'en' ? 'Copy value' : language === 'fr' ? 'Copier' : 'نسخ'}
                        >
                          {copiedValue === 'kabir' ? (
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                          )}
                        </button>
                        <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-help" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-1">{result.kabir}</div>
                    <p className="text-xs text-blue-700 dark:text-blue-300">{t.calculator.totalOfAllLetterValues}</p>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 whitespace-nowrap font-medium">
                      {t.calculator.kabir.description}
                    </div>
                  </div>

                  {/* Ṣaghīr Card */}
                  <div className="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-900/40 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">{t.calculator.saghir.label}</span>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => copyToClipboard(result.saghir.toString(), 'saghir')}
                          className="p-1 hover:bg-emerald-200 dark:hover:bg-emerald-800 rounded transition-colors"
                          title={language === 'en' ? 'Copy value' : language === 'fr' ? 'Copier' : 'نسخ'}
                        >
                          {copiedValue === 'saghir' ? (
                            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                          ) : (
                            <Copy className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                          )}
                        </button>
                        <Info className="w-4 h-4 text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-help" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-1">{result.saghir}</div>
                    <p className="text-xs text-emerald-700 dark:text-emerald-300">{t.calculator.digitalRoot}</p>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 whitespace-nowrap font-medium">
                      {t.calculator.saghir.description}
                    </div>
                  </div>

                  {/* Ḥadath Card */}
                  <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/40 rounded-xl p-4 border border-amber-200 dark:border-amber-800 hover:shadow-lg transition-all duration-300 cursor-help">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-amber-700 dark:text-amber-300 uppercase tracking-wide">{t.calculator.hadath.label}</span>
                      <Info className="w-4 h-4 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-3xl font-bold text-amber-900 dark:text-amber-100 mb-1">{result.hadath}</div>
                    <p className="text-xs text-amber-700 dark:text-amber-300">{t.calculator.remainderMod4}</p>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 whitespace-nowrap font-medium">
                      {t.calculator.hadath.description}
                    </div>
                  </div>

                  {/* Rūḥ Ḥadad Card */}
                  <div className="group relative bg-gradient-to-br from-rose-50 to-rose-100 dark:from-rose-900/20 dark:to-rose-900/40 rounded-xl p-4 border border-rose-200 dark:border-rose-800 hover:shadow-lg transition-all duration-300 cursor-help">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs font-semibold text-rose-700 dark:text-rose-300 uppercase tracking-wide">{t.calculator.ruh.label}</span>
                      <Info className="w-4 h-4 text-rose-600 dark:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-2xl font-bold text-rose-900 dark:text-rose-100 mb-1">{ELEMENT_INFO[result.hadathElement as ElementType].label}</div>
                    <p className="text-xs text-rose-700 dark:text-rose-300">{t.calculator.spiritOfTheCycle}</p>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 whitespace-nowrap font-medium">
                      {t.calculator.ruh.description}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Visual Calculation Breakdown */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
                  <Calculator className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  {t.calculator.stepByStep}
                </h3>
                <div className="space-y-4">
                  {/* Step 1: Letter Values */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-sm flex-shrink-0">1</div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{t.guidance.letterValues}</p>
                      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 text-sm font-arabic" dir="rtl">
                        <div className="flex flex-wrap gap-2">
                          {result.audit.steps.slice(0, 10).map((step: any, i: number) => (
                            <span key={i} className={`px-2 py-1 rounded ${ELEMENT_INFO[step.element as ElementType]?.bg || 'bg-slate-200 dark:bg-slate-700'}`}>
                              {step.letter}: {step.value}
                            </span>
                          ))}
                          {result.audit.steps.length > 10 && <span className="text-slate-500">+{result.audit.steps.length - 10} more</span>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Sum */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-sm flex-shrink-0">2</div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{t.guidance.sumAllValues}</p>
                      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 text-sm">
                        <p className="text-slate-600 dark:text-slate-400">{t.calculator.totalAbjadValue}: <span className="font-bold text-slate-900 dark:text-slate-100">{result.kabir}</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Step 3: Digital Root */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-sm flex-shrink-0">3</div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{t.guidance.calculateDigitalRoot}</p>
                      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 text-sm">
                        <p className="text-slate-600 dark:text-slate-400">{t.calculator.reduceToSingleDigit}: <span className="font-bold text-slate-900 dark:text-slate-100">{result.saghir}</span></p>
                      </div>
                    </div>
                  </div>

                  {/* Step 4: Element Discovery */}
                  <div className="flex gap-4">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white font-bold text-sm flex-shrink-0">4</div>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{t.guidance.elementDiscovery}</p>
                      <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-3 text-sm">
                        <p className="text-slate-600 dark:text-slate-400">{t.calculator.dominantElement}: <span className={`font-bold ${ELEMENT_INFO[result.dominant as ElementType].color}`}>{result.dominant}</span></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* NEW: Letter-by-Letter Breakdown */}
              {result.letterBreakdown && result.letterBreakdown.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => toggleSection('letterBreakdown')}
                    className="w-full flex items-center justify-between mb-4 group"
                  >
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                      <List className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                      {language === 'en' ? 'Letter-by-Letter Breakdown' : language === 'fr' ? 'Décomposition Lettre par Lettre' : 'تحليل حرف بحرف'}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                        {expandedSections.letterBreakdown ? (language === 'en' ? 'Collapse' : language === 'fr' ? 'Réduire' : 'طي') : (language === 'en' ? 'Expand' : language === 'fr' ? 'Développer' : 'توسيع')}
                      </span>
                      {expandedSections.letterBreakdown ? <ChevronUp className="w-5 h-5 text-slate-600 dark:text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-600 dark:text-slate-400" />}
                    </div>
                  </button>
                  
                  {expandedSections.letterBreakdown && (
                    <>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        {language === 'en' 
                          ? 'See how each letter contributes to the total value and elemental composition.'
                          : language === 'fr'
                          ? 'Voyez comment chaque lettre contribue à la valeur totale et à la composition élémentaire.'
                          : 'انظر كيف تساهم كل حرف في القيمة الإجمالية والتكوين العنصري.'}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {result.letterBreakdown.map((item: any, idx: number) => {
                      const elementInfo = ELEMENT_INFO[item.element as ElementType];
                      const Icon = elementInfo.icon;
                      return (
                        <div key={idx} className={`${elementInfo.bg} border-2 ${elementInfo.color.replace('text-', 'border-')} rounded-lg p-3 transition-all hover:scale-105`}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-2xl font-arabic" dir="rtl">{item.letter}</span>
                            <Icon className={`w-5 h-5 ${elementInfo.color}`} />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600 dark:text-slate-400">
                              {language === 'en' ? 'Value' : language === 'fr' ? 'Valeur' : 'القيمة'}
                            </span>
                            <span className={`text-xl font-bold ${elementInfo.color}`}>{item.value}</span>
                          </div>
                          <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            {language === 'en' ? item.element : language === 'fr' ? t.elements[item.element.toLowerCase() as keyof typeof t.elements] : item.element}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mt-4 p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-indigo-900 dark:text-indigo-100">
                        {language === 'en' ? 'Total Letters' : language === 'fr' ? 'Total de Lettres' : 'مجموع الحروف'}
                      </span>
                      <span className="text-indigo-700 dark:text-indigo-300">{result.letterBreakdown.length}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm mt-2">
                      <span className="font-semibold text-indigo-900 dark:text-indigo-100">
                        {language === 'en' ? 'Sum of Values' : language === 'fr' ? 'Somme des Valeurs' : 'مجموع القيم'}
                      </span>
                      <span className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">{result.kabir}</span>
                    </div>
                  </div>
                  </>
                  )}
                </div>
              )}

              {/* NEW: Advanced Calculation Methods */}
              {(calculatorMode === 'intermediate' || calculatorMode === 'scholar') && (
                <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => toggleSection('advancedMethods')}
                    className="w-full flex items-center justify-between mb-4 group"
                  >
                    <div className="flex items-center gap-2">
                      <Calculator className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                        {language === 'en' ? 'Advanced Calculation Methods' : language === 'fr' ? 'Méthodes de Calcul Avancées' : 'طرق الحساب المتقدمة'}
                      </h3>
                      <div className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                        <span className="text-xs font-semibold text-purple-700 dark:text-purple-300">
                          {calculatorMode === 'scholar' ? '👑 Scholar' : '🎓 ' + calculatorMode}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                        {expandedSections.advancedMethods ? (language === 'en' ? 'Collapse' : language === 'fr' ? 'Réduire' : 'طي') : (language === 'en' ? 'Expand' : language === 'fr' ? 'Développer' : 'توسيع')}
                      </span>
                      {expandedSections.advancedMethods ? <ChevronUp className="w-5 h-5 text-slate-600 dark:text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-600 dark:text-slate-400" />}
                    </div>
                  </button>
                  
                  {expandedSections.advancedMethods && (
                    <>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                    {language === 'en'
                      ? 'Traditional methods from classical Ilm al-Huruf texts for deeper numerical analysis.'
                      : language === 'fr'
                      ? 'Méthodes traditionnelles des textes classiques d\'Ilm al-Huruf pour une analyse numérique plus profonde.'
                      : 'طرق تقليدية من نصوص علم الحروف الكلاسيكية لتحليل رقمي أعمق.'}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Wusṭā */}
                    <div className="group relative bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-900/40 rounded-lg p-4 border border-amber-200 dark:border-amber-700 hover:shadow-lg transition-all cursor-help">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-amber-700 dark:text-amber-300">
                          {language === 'en' ? 'Wusṭā (Mean)' : language === 'fr' ? 'Wusṭā (Moyenne)' : 'وسطى (المتوسط)'}
                        </span>
                        <div className="flex items-center gap-1">
                          <Info className="w-3 h-3 text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-xs bg-amber-200 dark:bg-amber-800 px-2 py-1 rounded text-amber-800 dark:text-amber-200">
                            (Kabīr + Ṣaghīr) / 2
                          </span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-amber-900 dark:text-amber-100">{result.wusta}</div>
                      <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                        {language === 'en' ? 'Balance between large and small' : language === 'fr' ? 'Équilibre entre grand et petit' : 'التوازن بين الكبير والصغير'}
                      </p>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 w-64 shadow-xl">
                        <p className="font-semibold mb-1">{language === 'en' ? '📚 Classical Reference' : language === 'fr' ? '📚 Référence Classique' : '📚 المرجع الكلاسيكي'}</p>
                        <p className="text-xs leading-relaxed">
                          {language === 'en' 
                            ? 'The middle path (Wusṭā) represents spiritual balance. Mentioned in classical texts as the harmony point between manifestation (Kabīr) and essence (Ṣaghīr).'
                            : language === 'fr'
                            ? 'Le chemin du milieu (Wusṭā) représente l\'équilibre spirituel. Mentionné dans les textes classiques comme le point d\'harmonie entre manifestation (Kabīr) et essence (Ṣaghīr).'
                            : 'الطريق الأوسط (وسطى) يمثل التوازن الروحي. ورد في النصوص الكلاسيكية كنقطة التناغم بين التجلي (الكبير) والجوهر (الصغير).'}
                        </p>
                      </div>
                    </div>

                    {/* Kamāl */}
                    <div className="group relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40 rounded-lg p-4 border border-green-200 dark:border-green-700 hover:shadow-lg transition-all cursor-help">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                          {language === 'en' ? 'Kamāl (Perfection)' : language === 'fr' ? 'Kamāl (Perfection)' : 'كمال (الكمال)'}
                        </span>
                        <div className="flex items-center gap-1">
                          <Info className="w-3 h-3 text-green-600 dark:text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-xs bg-green-200 dark:bg-green-800 px-2 py-1 rounded text-green-800 dark:text-green-200">
                            {language === 'en' ? 'Sum of digits' : language === 'fr' ? 'Somme chiffres' : 'مجموع الأرقام'}
                          </span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-green-900 dark:text-green-100">{result.kamal}</div>
                      <p className="text-xs text-green-700 dark:text-green-300 mt-1">
                        {language === 'en' ? 'Essence of numerical completion' : language === 'fr' ? 'Essence d\'achèvement numérique' : 'جوهر الاكتمال العددي'}
                      </p>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 w-64 shadow-xl">
                        <p className="font-semibold mb-1">{language === 'en' ? '📚 Al-Būnī Reference' : language === 'fr' ? '📚 Référence d\'Al-Būnī' : '📚 مرجع البوني'}</p>
                        <p className="text-xs leading-relaxed">
                          {language === 'en' 
                            ? 'Kamāl reveals the perfected state of a number. Found in "Shams al-Ma\'ārif" as a method to discover the hidden potential within any value.'
                            : language === 'fr'
                            ? 'Kamāl révèle l\'état perfectionné d\'un nombre. Trouvé dans "Shams al-Ma\'ārif" comme méthode pour découvrir le potentiel caché dans toute valeur.'
                            : 'كمال يكشف الحالة الكاملة للرقم. موجود في "شمس المعارف" كطريقة لاكتشاف الإمكانات المخفية في أي قيمة.'}
                        </p>
                      </div>
                    </div>

                    {/* Basṭ */}
                    <div className="group relative bg-gradient-to-br from-cyan-50 to-cyan-100 dark:from-cyan-900/20 dark:to-cyan-900/40 rounded-lg p-4 border border-cyan-200 dark:border-cyan-700 hover:shadow-lg transition-all cursor-help">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                          {language === 'en' ? 'Basṭ (Expansion)' : language === 'fr' ? 'Basṭ (Expansion)' : 'بسط (التوسع)'}
                        </span>
                        <div className="flex items-center gap-1">
                          <Info className="w-3 h-3 text-cyan-600 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-xs bg-cyan-200 dark:bg-cyan-800 px-2 py-1 rounded text-cyan-800 dark:text-cyan-200">
                            Kabīr × 9 → root
                          </span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-cyan-900 dark:text-cyan-100">{result.bast}</div>
                      <p className="text-xs text-cyan-700 dark:text-cyan-300 mt-1">
                        {language === 'en' ? 'Expanded spiritual potential' : language === 'fr' ? 'Potentiel spirituel étendu' : 'الإمكانات الروحية الموسعة'}
                      </p>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 w-64 shadow-xl">
                        <p className="font-semibold mb-1">{language === 'en' ? '📚 Sufi Numerology' : language === 'fr' ? '📚 Numérologie Soufie' : '📚 علم الأرقام الصوفي'}</p>
                        <p className="text-xs leading-relaxed">
                          {language === 'en' 
                            ? 'Basṭ expands a value through 9, the number of completion. Used in Sufi practices to reveal the expansive nature of divine names and their manifestations.'
                            : language === 'fr'
                            ? 'Basṭ étend une valeur à travers 9, le nombre d\'achèvement. Utilisé dans les pratiques soufies pour révéler la nature expansive des noms divins.'
                            : 'البسط يوسع القيمة من خلال 9، رقم الاكتمال. يستخدم في الممارسات الصوفية للكشف عن الطبيعة التوسعية للأسماء الإلهية.'}
                        </p>
                      </div>
                    </div>

                    {/* Sirrī */}
                    <div className="group relative bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-900/20 dark:to-violet-900/40 rounded-lg p-4 border border-violet-200 dark:border-violet-700 hover:shadow-lg transition-all cursor-help">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
                          {language === 'en' ? 'Sirrī (Hidden)' : language === 'fr' ? 'Sirrī (Caché)' : 'سري (المخفي)'}
                        </span>
                        <div className="flex items-center gap-1">
                          <Info className="w-3 h-3 text-violet-600 dark:text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="text-xs bg-violet-200 dark:bg-violet-800 px-2 py-1 rounded text-violet-800 dark:text-violet-200">
                            {language === 'en' ? 'Reverse digits' : language === 'fr' ? 'Inverser chiffres' : 'عكس الأرقام'}
                          </span>
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-violet-900 dark:text-violet-100">{result.sirri}</div>
                      <p className="text-xs text-violet-700 dark:text-violet-300 mt-1">
                        {language === 'en' ? 'Secret reflection of the value' : language === 'fr' ? 'Réflexion secrète de la valeur' : 'انعكاس سري للقيمة'}
                      </p>
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs rounded-lg px-3 py-2 w-64 shadow-xl">
                        <p className="font-semibold mb-1">{language === 'en' ? '📚 Esoteric Tradition' : language === 'fr' ? '📚 Tradition Ésotérique' : '📚 التقليد الباطني'}</p>
                        <p className="text-xs leading-relaxed">
                          {language === 'en' 
                            ? 'Sirrī (Secret) reveals the hidden mirror of a value. By reversing digits, we unveil the complementary spiritual aspect - what\'s concealed behind the apparent.'
                            : language === 'fr'
                            ? 'Sirrī (Secret) révèle le miroir caché d\'une valeur. En inversant les chiffres, nous dévoilons l\'aspect spirituel complémentaire - ce qui est caché derrière l\'apparent.'
                            : 'السري يكشف المرآة المخفية للقيمة. من خلال عكس الأرقام، نكشف الجانب الروحي التكميلي - ما هو مخفي وراء الظاهر.'}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mathematical Operations Panel */}
                  <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      {language === 'en' ? 'Interactive Operations' : language === 'fr' ? 'Opérations Interactives' : 'العمليات التفاعلية'}
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      <div className="bg-white dark:bg-slate-800 rounded p-3 text-center border border-slate-200 dark:border-slate-600">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Kabīr + Ṣaghīr</div>
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{result.kabir + result.saghir}</div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded p-3 text-center border border-slate-200 dark:border-slate-600">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Kabīr - Ṣaghīr</div>
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{result.kabir - result.saghir}</div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded p-3 text-center border border-slate-200 dark:border-slate-600">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Kabīr × Ṣaghīr</div>
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{result.kabir * result.saghir}</div>
                      </div>
                      <div className="bg-white dark:bg-slate-800 rounded p-3 text-center border border-slate-200 dark:border-slate-600">
                        <div className="text-xs text-slate-600 dark:text-slate-400 mb-1">Kabīr mod 9</div>
                        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">{result.kabir % 9}</div>
                      </div>
                    </div>
                  </div>
                  </>
                  )}
                </div>
              )}

              {/* 4. Element Distribution */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 border border-slate-200 dark:border-slate-700">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-4">
                  <Waves className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  {t.elementalComposition.title}
                </h3>
                
                {/* Element Balance Score */}
                {(() => {
                  const counts = Object.values(result.counts as Record<string, number>);
                  const total = counts.reduce((a, b) => a + b, 0);
                  const avg = total / 4;
                  const variance = counts.reduce((sum, count) => sum + Math.pow(count - avg, 2), 0) / 4;
                  const balanceScore = Math.max(0, 100 - (variance / avg) * 20);
                  const isBalanced = balanceScore >= 70;
                  
                  return (
                    <div className="mb-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg border border-indigo-200 dark:border-indigo-700">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-indigo-900 dark:text-indigo-100">
                          {language === 'en' ? 'Elemental Balance Score' : language === 'fr' ? 'Score d\'Équilibre Élémentaire' : 'نتيجة التوازن العنصري'}
                        </span>
                        <span className={`text-2xl font-bold ${isBalanced ? 'text-green-600' : 'text-amber-600'}`}>
                          {Math.round(balanceScore)}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden mb-2">
                        <div
                          className={`h-full ${isBalanced ? 'bg-green-500' : 'bg-amber-500'} transition-all duration-500`}
                          style={{ width: `${balanceScore}%` }}
                        />
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {isBalanced 
                          ? (language === 'en' ? '✨ Well-balanced elemental composition' : language === 'fr' ? '✨ Composition élémentaire bien équilibrée' : '✨ تكوين عنصري متوازن جيدًا')
                          : (language === 'en' ? '⚖️ Some imbalance detected - see recommendations below' : language === 'fr' ? '⚖️ Déséquilibre détecté - voir recommandations ci-dessous' : '⚖️ تم اكتشاف عدم توازن - انظر التوصيات أدناه')}
                      </p>
                    </div>
                  );
                })()}
                
                <div className="space-y-4">
                  {Object.entries(result.counts).map(([element, count]) => {
                    const total = Object.values(result.counts as Record<string, number>).reduce((a, b) => a + b, 0);
                    const percentage = total > 0 ? Math.round((count as number / total) * 100) : 0;
                    const info = ELEMENT_INFO[element as ElementType];
                    const Icon = info.icon;
                    const elementKey = element.toLowerCase() as 'fire' | 'water' | 'air' | 'earth';
                    
                    return (
                      <div key={element}>
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-4 h-4 ${info.color}`} />
                            <span className="font-medium text-slate-900 dark:text-slate-100">{t.elements[elementKey]}</span>
                          </div>
                          <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">{count as number} {t.elementalComposition.letters} ({percentage}%)</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full ${info.bg} transition-all duration-500`}
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Harmonizing Recommendations */}
                {(() => {
                  const counts = result.counts as Record<string, number>;
                  const total = Object.values(counts).reduce((a, b) => a + b, 0);
                  const weakest = Object.entries(counts).sort((a, b) => a[1] - b[1])[0];
                  const strongest = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
                  const weakestPct = (weakest[1] / total) * 100;
                  const strongestPct = (strongest[1] / total) * 100;
                  const needsBalance = strongestPct - weakestPct > 30;
                  
                  if (!needsBalance) return null;
                  
                  const harmonizingPractices: Record<string, { en: string; fr: string; ar: string }> = {
                    Fire: {
                      en: "Engage with warmth, passion, and action. Practice dhikr with energy and movement.",
                      fr: "Engagez-vous avec chaleur, passion et action. Pratiquez le dhikr avec énergie et mouvement.",
                      ar: "انخرط بالدفء والشغف والعمل. مارس الذكر بالطاقة والحركة."
                    },
                    Water: {
                      en: "Cultivate emotional depth, intuition, and flow. Practice dhikr near water or during wudu.",
                      fr: "Cultivez la profondeur émotionnelle, l'intuition et la fluidité. Pratiquez le dhikr près de l'eau ou pendant les ablutions.",
                      ar: "تنمية العمق العاطفي والحدس والتدفق. مارس الذكر بالقرب من الماء أو أثناء الوضوء."
                    },
                    Air: {
                      en: "Focus on breath, intellect, and communication. Practice conscious breathing with dhikr.",
                      fr: "Concentrez-vous sur le souffle, l'intellect et la communication. Pratiquez la respiration consciente avec le dhikr.",
                      ar: "ركز على التنفس والفكر والتواصل. مارس التنفس الواعي مع الذكر."
                    },
                    Earth: {
                      en: "Ground yourself in stability, practicality, and presence. Practice dhikr while touching earth or in prostration.",
                      fr: "Ancrez-vous dans la stabilité, la praticité et la présence. Pratiquez le dhikr en touchant la terre ou en prosternation.",
                      ar: "اجعل نفسك راسخًا في الاستقرار والعملية والحضور. مارس الذكر أثناء لمس الأرض أو في السجود."
                    }
                  };
                  
                  return (
                    <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-700">
                      <h4 className="text-sm font-bold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4" />
                        {language === 'en' ? 'Harmonizing Recommendation' : language === 'fr' ? 'Recommandation d\'Harmonisation' : 'توصية التناغم'}
                      </h4>
                      <p className="text-sm text-amber-800 dark:text-amber-200 mb-2">
                        {language === 'en' 
                          ? `Your ${weakest[0]} element (${weakestPct.toFixed(0)}%) could use more attention. Try:`
                          : language === 'fr'
                          ? `Votre élément ${t.elements[weakest[0].toLowerCase() as keyof typeof t.elements]} (${weakestPct.toFixed(0)}%) pourrait nécessiter plus d'attention. Essayez:`
                          : `عنصرك ${weakest[0]} (${weakestPct.toFixed(0)}٪) قد يحتاج إلى مزيد من الاهتمام. حاول:`}
                      </p>
                      <p className="text-sm text-amber-700 dark:text-amber-300">
                        {language === 'fr' ? harmonizingPractices[weakest[0]].fr : harmonizingPractices[weakest[0]].en}
                      </p>
                    </div>
                  );
                })()}
              </div>

              {/* 5. Sacred Number Resonance */}
              {result.resonance && (
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6 border border-purple-200 dark:border-purple-800">
                  <h3 className="text-lg font-bold text-purple-900 dark:text-purple-100 flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5" />
                    {t.sacredNumbers.title}
                  </h3>
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Divisibility by 7 */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                        <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">🔢 {t.sacredNumbers.divisibleBy} 7</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{result.kabir % 7 === 0 ? `✓ Yes - ${t.sacredNumbers.divinePerfection}` : `${t.sacredNumbers.nearest}: ${Math.round(result.kabir / 7) * 7}`}</p>
                      </div>
                      {/* Divisibility by 19 */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                        <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">✨ {t.sacredNumbers.divisibleBy} 19</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{result.kabir % 19 === 0 ? `✓ Yes - ${t.sacredNumbers.quranicHarmony}` : `${t.sacredNumbers.nearest}: ${Math.round(result.kabir / 19) * 19}`}</p>
                      </div>
                      {/* Divisibility by 99 */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                        <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">🌟 {t.sacredNumbers.divisibleBy} 99</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{result.kabir % 99 === 0 ? `✓ Yes - ${t.sacredNumbers.divineNames}` : `${t.sacredNumbers.nearest}: ${Math.round(result.kabir / 99) * 99}`}</p>
                      </div>
                      {/* Digital Root Match */}
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                        <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">🎯 Essence Pattern</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Core number: {result.saghir}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 6. Personal Interpretation Summary */}
              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-xl p-4 sm:p-6 border border-indigo-500 dark:border-indigo-600 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    {t.numericalEssence.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {/* Core Number Meaning */}
                    <div>
                      <p className="text-sm opacity-90 mb-2">{t.numericalEssence.coreNumberMeaning}</p>
                      <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                        <p className="font-bold text-lg mb-2">{t.numericalEssence.theNumber} {result.saghir}</p>
                        <p className="text-sm opacity-90">
                          {result.saghir === 1 && t.numericalEssence.number1}
                          {result.saghir === 2 && t.numericalEssence.number2}
                          {result.saghir === 3 && t.numericalEssence.number3}
                          {result.saghir === 4 && t.numericalEssence.number4}
                          {result.saghir === 5 && t.numericalEssence.number5}
                          {result.saghir === 6 && t.numericalEssence.number6}
                          {result.saghir === 7 && t.numericalEssence.number7}
                          {result.saghir === 8 && t.numericalEssence.number8}
                          {result.saghir === 9 && t.numericalEssence.number9}
                        </p>
                      </div>
                    </div>

                    {/* Element Meaning */}
                    <div>
                      <p className="text-sm opacity-90 mb-2">{t.numericalEssence.dominantElement}</p>
                      <div className={`${ELEMENT_INFO[result.dominant as ElementType].bg} text-slate-900 rounded-lg p-4`}>
                        <p className="font-bold text-lg mb-2">{result.dominant}</p>
                        <p className="text-sm opacity-90">
                          {result.dominant === 'Fire' && t.numericalEssence.fireDesc}
                          {result.dominant === 'Water' && t.numericalEssence.waterDesc}
                          {result.dominant === 'Air' && t.numericalEssence.airDesc}
                          {result.dominant === 'Earth' && t.numericalEssence.earthDesc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm opacity-90 italic border-t border-white/20 pt-4">
                    💫 {t.numericalEssence.guidanceMessage}
                  </p>
                </div>
              </div>

              {/* Quranic Verse Connections */}
              {(result.exactVerse || (result.relatedVerses && result.relatedVerses.length > 0)) && (
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-xl p-4 sm:p-6 border-2 border-emerald-300 dark:border-emerald-700">
                  <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100 flex items-center gap-2 mb-4">
                    <BookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    {language === 'en' ? 'Quranic Verse Connections' : language === 'fr' ? 'Connexions Coraniques' : 'الارتباطات القرآنية'}
                  </h3>
                  
                  {result.exactVerse && (
                    <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-lg border-2 border-emerald-400 dark:border-emerald-600">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-bold">
                          {language === 'en' ? 'Exact Match!' : language === 'fr' ? 'Correspondance Exacte!' : 'تطابق تام!'}
                        </div>
                        <span className="text-sm text-slate-600 dark:text-slate-400">
                          {result.exactVerse.chapter}:{result.exactVerse.verse}
                        </span>
                      </div>
                      <div className="mb-3">
                        <p className="text-2xl font-arabic text-right mb-2 text-emerald-900 dark:text-emerald-100" dir="rtl">
                          {result.exactVerse.arabic}
                        </p>
                        <p className="text-sm italic text-slate-600 dark:text-slate-400 mb-2">
                          {result.exactVerse.transliteration}
                        </p>
                        <p className="text-base text-slate-700 dark:text-slate-300">
                          {language === 'fr' ? result.exactVerse.translation.fr : result.exactVerse.translation.en}
                        </p>
                      </div>
                      <div className="p-3 bg-emerald-50 dark:bg-emerald-900/30 rounded border border-emerald-200 dark:border-emerald-700">
                        <p className="text-xs font-semibold text-emerald-800 dark:text-emerald-200 mb-1">
                          {language === 'en' ? '✨ Spiritual Significance' : language === 'fr' ? '✨ Signification Spirituelle' : '✨ الأهمية الروحية'}
                        </p>
                        <p className="text-sm text-emerald-700 dark:text-emerald-300">
                          {language === 'fr' ? result.exactVerse.significance.fr : result.exactVerse.significance.en}
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {!result.exactVerse && result.relatedVerses && result.relatedVerses.length > 0 && (
                    <div>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">
                        {language === 'en' 
                          ? `Found ${result.relatedVerses.length} verse${result.relatedVerses.length > 1 ? 's' : ''} with similar numerical values:`
                          : language === 'fr'
                          ? `Trouvé ${result.relatedVerses.length} verset${result.relatedVerses.length > 1 ? 's' : ''} avec des valeurs numériques similaires:`
                          : `تم العثور على ${result.relatedVerses.length} آية ذات قيم رقمية مماثلة:`}
                      </p>
                      <div className="space-y-3">
                        {result.relatedVerses.slice(0, 3).map((verse: QuranicVerse, idx: number) => (
                          <div key={idx} className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-emerald-200 dark:border-emerald-700">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                                {verse.chapter}:{verse.verse}
                              </span>
                              <span className="text-xs bg-emerald-100 dark:bg-emerald-900/50 px-2 py-1 rounded text-emerald-800 dark:text-emerald-200">
                                {verse.abjadValue} ({Math.abs(verse.abjadValue - result.kabir)} {language === 'en' ? 'diff' : language === 'fr' ? 'diff' : 'فرق'})
                              </span>
                            </div>
                            <p className="text-sm font-arabic text-right mb-1 text-slate-700 dark:text-slate-300" dir="rtl">
                              {verse.arabic}
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400">
                              {language === 'fr' ? verse.translation.fr : verse.translation.en}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Divine Name (Asmā' al-Ḥusnā) Connections */}
              {(result.exactDivineName || (result.similarDivineNames && result.similarDivineNames.length > 0)) && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 sm:p-6 border-2 border-purple-300 dark:border-purple-700">
                  <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 flex items-center gap-2 mb-4">
                    <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    {language === 'en' ? 'Divine Name Connection' : language === 'fr' ? 'Connexion au Nom Divin' : 'ارتباط الاسم الإلهي'}
                  </h3>
                  
                  {result.exactDivineName && (
                    <div className="mb-6 p-5 bg-white dark:bg-slate-800 rounded-lg border-2 border-purple-400 dark:border-purple-600 shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-lg">
                          {result.exactDivineName.number}
                        </div>
                        <div>
                          <div className="px-3 py-1 bg-purple-600 text-white rounded-full text-sm font-bold inline-block mb-1">
                            {language === 'en' ? '✨ Perfect Match!' : language === 'fr' ? '✨ Correspondance Parfaite!' : '✨ تطابق مثالي!'}
                          </div>
                          <p className="text-xs text-slate-600 dark:text-slate-400">
                            {language === 'en' ? 'One of the 99 Beautiful Names of Allah' : language === 'fr' ? 'Un des 99 Beaux Noms d\'Allah' : 'أحد أسماء الله الحسنى 99'}
                          </p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-3xl font-arabic text-right mb-2 text-purple-900 dark:text-purple-100" dir="rtl">
                          {result.exactDivineName.arabic}
                        </p>
                        <p className="text-lg font-semibold text-slate-800 dark:text-slate-200 mb-1">
                          {result.exactDivineName.transliteration}
                        </p>
                        <p className="text-base text-purple-700 dark:text-purple-300 font-medium">
                          {language === 'fr' ? result.exactDivineName.translation.fr : result.exactDivineName.translation.en}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded border border-purple-200 dark:border-purple-700">
                          <p className="text-xs font-semibold text-purple-800 dark:text-purple-200 mb-1">
                            💫 {language === 'en' ? 'Meaning & Significance' : language === 'fr' ? 'Signification' : 'المعنى والأهمية'}
                          </p>
                          <p className="text-sm text-purple-700 dark:text-purple-300">
                            {language === 'fr' ? result.exactDivineName.meaning.fr : result.exactDivineName.meaning.en}
                          </p>
                        </div>
                        
                        <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded border border-amber-200 dark:border-amber-700">
                          <p className="text-xs font-semibold text-amber-800 dark:text-amber-200 mb-1">
                            🤲 {language === 'en' ? 'Spiritual Practice' : language === 'fr' ? 'Pratique Spirituelle' : 'الممارسة الروحية'}
                          </p>
                          <p className="text-sm text-amber-700 dark:text-amber-300">
                            {language === 'fr' ? result.exactDivineName.spiritualPractice.fr : result.exactDivineName.spiritualPractice.en}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {!result.exactDivineName && result.similarDivineNames && result.similarDivineNames.length > 0 && (
                    <div>
                      <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                        {language === 'en' 
                          ? `Found ${result.similarDivineNames.length} Divine Name${result.similarDivineNames.length > 1 ? 's' : ''} with similar values:`
                          : language === 'fr'
                          ? `Trouvé ${result.similarDivineNames.length} Nom${result.similarDivineNames.length > 1 ? 's' : ''} Divin${result.similarDivineNames.length > 1 ? 's' : ''} avec des valeurs similaires:`
                          : `تم العثور على ${result.similarDivineNames.length} اسم إلهي بقيم مماثلة:`}
                      </p>
                      <div className="space-y-3">
                        {result.similarDivineNames.slice(0, 3).map((name: DivineName, idx: number) => (
                          <div key={idx} className="p-3 bg-white dark:bg-slate-800 rounded-lg border border-purple-200 dark:border-purple-700">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 flex items-center justify-center text-xs font-bold">
                                  #{name.number}
                                </span>
                                <div>
                                  <p className="text-sm font-semibold text-purple-900 dark:text-purple-100">
                                    {name.transliteration}
                                  </p>
                                  <p className="text-xs text-slate-600 dark:text-slate-400">
                                    {language === 'fr' ? name.translation.fr : name.translation.en}
                                  </p>
                                </div>
                              </div>
                              <span className="text-xs bg-purple-100 dark:bg-purple-900/50 px-2 py-1 rounded text-purple-800 dark:text-purple-200">
                                {name.abjadValue} ({Math.abs(name.abjadValue - result.kabir)} {language === 'en' ? 'diff' : language === 'fr' ? 'diff' : 'فرق'})
                              </span>
                            </div>
                            <p className="text-sm font-arabic text-right text-slate-700 dark:text-slate-300" dir="rtl">
                              {name.arabic}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* INTERMEDIATE MODE - Burj & Planetary Analysis */}
              {(calculatorMode === 'intermediate' || calculatorMode === 'scholar') && (
                <>
                  {/* Burj (Zodiac Sign) Calculation */}
                  {(() => {
                    const burj = calculateBurj(result.kabir);
                    return (
                      <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-4 sm:p-6 border-2 border-amber-300 dark:border-amber-700">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-amber-900 dark:text-amber-100 flex items-center gap-2">
                              <Compass className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                              {language === 'en' ? 'Burj (Zodiac Sign)' : 'Burj (Signe du Zodiaque)'}
                            </h3>
                            <p className="text-xs text-amber-700 dark:text-amber-300 mt-1">
                              {language === 'en' ? 'Classical Islamic astronomy' : 'Astronomie islamique classique'}
                            </p>
                          </div>
                          <div className="px-3 py-1 bg-amber-200 dark:bg-amber-800 rounded-full">
                            <span className="text-xs font-semibold text-amber-900 dark:text-amber-100">🎓 {language === 'en' ? 'Intermediate' : 'Intermédiaire'}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Burj Name & Symbol */}
                          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                            <div className="text-center mb-3">
                              <div className="text-5xl mb-2">{burj.burjIndex === 1 ? '♈' : burj.burjIndex === 2 ? '♉' : burj.burjIndex === 3 ? '♊' : burj.burjIndex === 4 ? '♋' : burj.burjIndex === 5 ? '♌' : burj.burjIndex === 6 ? '♍' : burj.burjIndex === 7 ? '♎' : burj.burjIndex === 8 ? '♏' : burj.burjIndex === 9 ? '♐' : burj.burjIndex === 10 ? '♑' : burj.burjIndex === 11 ? '♒' : '♓'}</div>
                              <h4 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-1">
                                {burj.burjName.en}
                              </h4>
                              <p className="text-xl font-arabic text-amber-700 dark:text-amber-300" dir="rtl">
                                {burj.burjName.ar}
                              </p>
                              <p className="text-sm text-amber-600 dark:text-amber-400 mt-1">
                                {burj.burjName.transliteration}
                              </p>
                            </div>
                            <div className="text-center space-y-2 mt-4 pt-4 border-t border-amber-200 dark:border-amber-700">
                              <p className="text-xs text-amber-700 dark:text-amber-300">
                                <span className="font-semibold">{language === 'en' ? 'Calculation:' : 'Calcul:'}</span> {result.kabir} ÷ 12 = {burj.burjIndex}
                              </p>
                            </div>
                          </div>

                          {/* Burj Attributes */}
                          <div className="space-y-3">
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-700">
                              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">
                                {language === 'en' ? 'Element' : 'Élément'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {burj.element} {HADAD_ELEMENT_INFO[burj.element]?.icon}
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-700">
                              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">
                                {language === 'en' ? 'Modality' : 'Modalité'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {burj.modality}
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-700">
                              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">
                                {language === 'en' ? 'Planetary Ruler' : 'Maître planétaire'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {burj.planetaryRuler} <span className="text-xs font-arabic" dir="rtl">({burj.planetaryRulerAr})</span>
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-amber-200 dark:border-amber-700">
                              <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-1">
                                {language === 'en' ? 'Temperament' : 'Tempérament'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {burj.temperament}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Symbolism & Spiritual Quality */}
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                            <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
                              {language === 'en' ? 'Symbolism' : 'Symbolisme'}
                            </p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              {burj.symbolism}
                            </p>
                          </div>
                          <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 border border-amber-200 dark:border-amber-700">
                            <p className="text-xs font-semibold text-amber-700 dark:text-amber-300 mb-2">
                              {language === 'en' ? 'Spiritual Quality' : 'Qualité spirituelle'}
                            </p>
                            <p className="text-sm text-slate-700 dark:text-slate-300">
                              {burj.spiritualQuality}
                            </p>
                          </div>
                        </div>

                        {/* Classical Reference */}
                        <div className="mt-4 bg-amber-100 dark:bg-amber-900/30 rounded-lg p-3 border border-amber-300 dark:border-amber-700">
                          <p className="text-xs font-semibold text-amber-800 dark:text-amber-200 mb-1">
                            📚 {language === 'en' ? 'Classical Reference' : 'Référence classique'}
                          </p>
                          <p className="text-xs text-amber-700 dark:text-amber-300">
                            <span className="font-medium">{burj.classicalReference.source}:</span> {burj.classicalReference.citation}
                          </p>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Planetary Signature */}
                  {(() => {
                    const planetSig = getPlanetarySignatureFromTotal(result.kabir);
                    return (
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-4 sm:p-6 border-2 border-purple-300 dark:border-purple-700">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-purple-900 dark:text-purple-100 flex items-center gap-2">
                              <Star className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                              {language === 'en' ? 'Planetary Signature' : 'Signature Planétaire'}
                            </h3>
                            <p className="text-xs text-purple-700 dark:text-purple-300 mt-1">
                              {language === 'en' ? 'The 7 classical planets' : 'Les 7 planètes classiques'}
                            </p>
                          </div>
                          <div className="px-3 py-1 bg-purple-200 dark:bg-purple-800 rounded-full">
                            <span className="text-xs font-semibold text-purple-900 dark:text-purple-100">🎓 {language === 'en' ? 'Intermediate' : 'Intermédiaire'}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          {/* Planet Name */}
                          <div className="md:col-span-1 bg-white dark:bg-slate-800 rounded-lg p-4 border border-purple-200 dark:border-purple-700 text-center">
                            <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
                              {language === 'en' ? 'Planet' : 'Planète'}
                            </p>
                            <div className="text-4xl mb-2">
                              {planetSig.planet === 'Sun' ? '☉' : planetSig.planet === 'Moon' ? '☽' : planetSig.planet === 'Mars' ? '♂' : planetSig.planet === 'Mercury' ? '☿' : planetSig.planet === 'Jupiter' ? '♃' : planetSig.planet === 'Venus' ? '♀' : '♄'}
                            </div>
                            <h4 className="text-xl font-bold text-purple-900 dark:text-purple-100 mb-1">
                              {planetSig.planet}
                            </h4>
                            <p className="text-lg font-arabic text-purple-700 dark:text-purple-300" dir="rtl">
                              {planetSig.planetArabic}
                            </p>
                            <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
                              {planetSig.planetTransliteration}
                            </p>
                          </div>

                          {/* Attributes */}
                          <div className="md:col-span-2 grid grid-cols-2 gap-3">
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                              <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">
                                {language === 'en' ? 'Day of Week' : 'Jour de la semaine'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {planetSig.dayOfWeek}
                              </p>
                              <p className="text-xs font-arabic text-purple-600 dark:text-purple-400" dir="rtl">
                                {planetSig.dayArabic}
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                              <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">
                                {language === 'en' ? 'Hour Number' : 'Numéro d\'heure'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {planetSig.hourNumber}
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                              <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">
                                {language === 'en' ? 'Metal' : 'Métal'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {planetSig.metal}
                              </p>
                              <p className="text-xs font-arabic text-purple-600 dark:text-purple-400" dir="rtl">
                                {planetSig.metalArabic}
                              </p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                              <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-1">
                                {language === 'en' ? 'Color' : 'Couleur'}
                              </p>
                              <p className="text-sm font-medium text-slate-900 dark:text-slate-100">
                                {planetSig.color}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Spiritual Quality */}
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 border border-purple-200 dark:border-purple-700 mb-4">
                          <p className="text-xs font-semibold text-purple-700 dark:text-purple-300 mb-2">
                            {language === 'en' ? 'Spiritual Quality' : 'Qualité spirituelle'}
                          </p>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {planetSig.spiritualQuality}
                          </p>
                        </div>

                        {/* Dhikr Recommendation */}
                        {planetSig.dhikrRecommendation && (
                          <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                            <p className="text-xs font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-1">
                              ✨ {language === 'en' ? 'Dhikr Recommendation' : 'Recommandation de Dhikr'}
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              <div>
                                <p className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                                  {language === 'en' ? 'Divine Name' : 'Nom Divin'}
                                </p>
                                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
                                  {planetSig.dhikrRecommendation.divineName}
                                </p>
                                <p className="text-sm font-arabic text-purple-700 dark:text-purple-300" dir="rtl">
                                  {planetSig.dhikrRecommendation.divineNameArabic}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                                  {language === 'en' ? 'Count' : 'Nombre'}
                                </p>
                                <p className="text-2xl font-bold text-purple-900 dark:text-purple-100">
                                  {planetSig.dhikrRecommendation.count}×
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                                  {language === 'en' ? 'Timing' : 'Moment'}
                                </p>
                                <p className="text-sm font-medium text-purple-900 dark:text-purple-100">
                                  {planetSig.dhikrRecommendation.timing}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </>
              )}

              {/* 7. Celestial Signature - From hadad-core ELEMENT_INFO */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-4 sm:p-6 border-2 border-blue-200 dark:border-blue-800">
                <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4 flex items-center gap-2">
                  <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  {t.celestialSignature.title}
                  <span className="text-xs font-normal opacity-70">(ʿIlm al-Ḥurūf)</span>
                </h3>
                
                {(() => {
                  // Get element from hadath, then look up celestial info
                  const element = hadathToElement(result.hadath);
                  const celestialInfo = HADAD_ELEMENT_INFO[element];
                  
                  return (
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {/* Planet */}
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
                          <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">{t.celestialSignature.planet}</div>
                          <div className="text-3xl font-bold text-blue-900 dark:text-blue-100 mb-1">
                            {celestialInfo.planet}
                          </div>
                          <div className="text-xs font-arabic text-blue-600 dark:text-blue-400">
                            {ARABIC_PLANET_NAMES[celestialInfo.planet]}
                          </div>
                        </div>
                        
                        {/* Day */}
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
                          <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">{t.celestialSignature.day}</div>
                          <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
                            {celestialInfo.day}
                          </div>
                        </div>
                        
                        {/* Best Hours */}
                        <div className="bg-white/60 dark:bg-slate-800/60 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-700 hover:shadow-md transition-shadow">
                          <div className="text-sm font-medium text-blue-700 dark:text-blue-300 mb-2">{t.celestialSignature.bestHours}</div>
                          <div className="text-lg font-bold text-blue-900 dark:text-blue-100">
                            {celestialInfo.hours.join(', ')}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-xs text-blue-700 dark:text-blue-300 mt-4 text-center italic">
                        ✨ {t.celestialSignature.footerNote}
                      </p>
                    </>
                  );
                })()}
              </div>

              {/* SCHOLAR MODE - Advanced Calculator Features */}
              {calculatorMode === 'scholar' && (() => {
                // Calculate pattern analysis
                const patternAnalysis = analyzePatterns(result.kabir);
                
                // Calculate wafq analysis
                const element = hadathToElement(result.hadath);
                const wafqAnalysis = generateWafqAnalysis(
                  result.kabir,
                  result.saghir,
                  element,
                  result.text
                );

                // Calculate talisman timing
                const burj = calculateBurj(result.kabir);
                const planetaryInfo = getPlanetarySignatureFromTotal(result.kabir);
                const talismanTiming = calculateOptimalTimingWindows(
                  planetaryInfo.planet,
                  element,
                  burj.burjName.en,
                  burj.burjName.ar
                );

                return (
                  <>
                    {/* Pattern Recognition */}
                    {patternAnalysis.hasPatterns && (
                      <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border-2 border-indigo-300 dark:border-indigo-700">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-3xl">🔮</span>
                          <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-200">
                            {language === 'fr' ? 'Reconnaissance de Motifs' : 'Pattern Recognition'}
                          </h4>
                          <div className="ml-auto px-3 py-1 bg-purple-200 dark:bg-purple-800 rounded-full">
                            <span className="text-xs font-semibold text-purple-900 dark:text-purple-100">👑 Scholar</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">
                          {language === 'fr' 
                            ? `Votre nombre ${patternAnalysis.value} révèle ${patternAnalysis.patterns.length} motif(s) significatif(s)`
                            : `Your number ${patternAnalysis.value} reveals ${patternAnalysis.patterns.length} significant pattern(s)`}
                        </p>

                        {/* Pattern Cards */}
                        <div className="space-y-3">
                          {patternAnalysis.patterns.map((pattern: any, idx: number) => (
                            <div 
                              key={idx}
                              className={`rounded-lg p-4 border-2 ${
                                pattern.confidence === 'high' 
                                  ? 'bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30 border-indigo-300 dark:border-indigo-600'
                                  : 'bg-slate-50 dark:bg-slate-900/30 border-slate-300 dark:border-slate-600'
                              }`}
                            >
                              <div className="flex items-start gap-3">
                                <span className="text-3xl">{pattern.icon}</span>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <h5 className="font-bold text-indigo-900 dark:text-indigo-200">
                                      {language === 'fr' ? pattern.descriptionFr : pattern.description}
                                    </h5>
                                    {pattern.confidence === 'high' && (
                                      <span className="text-xs bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                                        {language === 'fr' ? 'Haute' : 'High'}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                                    {language === 'fr' ? pattern.significanceFr : pattern.significance}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Spiritual Message */}
                        {patternAnalysis.spiritualMessage && (
                          <div className="mt-4 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-lg p-4 border-2 border-purple-300 dark:border-purple-600">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-2xl">✨</span>
                              <h5 className="font-bold text-purple-900 dark:text-purple-200">
                                {language === 'fr' ? 'Message Spirituel' : 'Spiritual Message'}
                              </h5>
                            </div>
                            <p className="text-sm text-purple-800 dark:text-purple-200 leading-relaxed italic">
                              {language === 'fr' ? patternAnalysis.spiritualMessageFr : patternAnalysis.spiritualMessage}
                            </p>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Wafq Generator */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border-2 border-purple-300 dark:border-purple-700">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl">⬛</span>
                        <h4 className="text-xl font-bold text-purple-900 dark:text-purple-200">
                          {language === 'fr' ? 'Wafq - Carrés Magiques' : 'Wafq - Magic Squares'}
                        </h4>
                        <div className="ml-auto px-3 py-1 bg-purple-200 dark:bg-purple-800 rounded-full">
                          <span className="text-xs font-semibold text-purple-900 dark:text-purple-100">👑 Scholar</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                        {language === 'fr' 
                          ? 'Géométrie sacrée personnalisée basée sur votre valeur numérique'
                          : 'Personalized sacred geometry based on your numerical value'}
                      </p>

                      {/* Personal Magic Square */}
                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-2xl">{
                            wafqAnalysis.personalSquare.order === 3 ? '🪐' : // Saturn
                            wafqAnalysis.personalSquare.order === 4 ? '♃' : // Jupiter
                            wafqAnalysis.personalSquare.order === 5 ? '♂' : // Mars
                            wafqAnalysis.personalSquare.order === 6 ? '☉' : // Sun
                            wafqAnalysis.personalSquare.order === 7 ? '♀' : // Venus
                            wafqAnalysis.personalSquare.order === 8 ? '☿' : // Mercury
                            '☽' // Moon
                          }</span>
                          <h5 className="font-bold text-purple-900 dark:text-purple-200">
                            {language === 'fr' ? 'Votre Wafq Personnel' : 'Your Personal Wafq'} - {
                              language === 'fr' 
                                ? wafqAnalysis.personalSquare.planetary.planetFr
                                : wafqAnalysis.personalSquare.planetary.planet
                            } ({wafqAnalysis.personalSquare.order}×{wafqAnalysis.personalSquare.order})
                          </h5>
                        </div>

                        {/* Square Grid */}
                        <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/40 dark:to-indigo-900/40 rounded-lg p-4 mb-3">
                          <div className="grid gap-1" style={{
                            gridTemplateColumns: `repeat(${wafqAnalysis.personalSquare.order}, minmax(0, 1fr))`
                          }}>
                            {wafqAnalysis.personalSquare.grid.flat().map((num: number, idx: number) => (
                              <div 
                                key={idx}
                                className="aspect-square flex items-center justify-center bg-white dark:bg-slate-800 rounded border-2 border-purple-300 dark:border-purple-600 font-bold text-purple-900 dark:text-purple-200"
                                style={{ fontSize: wafqAnalysis.personalSquare.order > 6 ? '0.75rem' : '1rem' }}
                              >
                                {num}
                              </div>
                            ))}
                          </div>
                          <div className="text-center mt-2 text-sm text-purple-700 dark:text-purple-300">
                            {language === 'fr' ? 'Constante Magique' : 'Magic Constant'}: <span className="font-bold">{wafqAnalysis.personalSquare.magicConstant}</span>
                          </div>
                        </div>

                        {/* Planetary Info */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                            <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                              {language === 'fr' ? 'Jour Optimal' : 'Optimal Day'}
                            </div>
                            <div className="font-semibold text-purple-900 dark:text-purple-200">
                              {language === 'fr' 
                                ? wafqAnalysis.personalSquare.planetary.dayFr
                                : wafqAnalysis.personalSquare.planetary.day}
                            </div>
                          </div>
                          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 border border-purple-200 dark:border-purple-700">
                            <div className="text-xs text-purple-600 dark:text-purple-400 mb-1">
                              {language === 'fr' ? 'Métal' : 'Metal'}
                            </div>
                            <div className="font-semibold text-purple-900 dark:text-purple-200">
                              {wafqAnalysis.personalSquare.planetary.metal}
                            </div>
                          </div>
                        </div>

                        {/* Intention */}
                        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 rounded-lg p-3 border border-amber-300 dark:border-amber-700">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">🎯</span>
                            <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold">
                              {language === 'fr' ? 'Intention Spirituelle' : 'Spiritual Intention'}
                            </div>
                          </div>
                          <p className="text-sm text-amber-900 dark:text-amber-200">
                            {language === 'fr' 
                              ? wafqAnalysis.personalSquare.planetary.intentionFr
                              : wafqAnalysis.personalSquare.planetary.intention}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Talisman Timing */}
                    <div className="bg-white dark:bg-slate-800 rounded-lg p-5 border-2 border-indigo-300 dark:border-indigo-700">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-3xl">⏰</span>
                        <h4 className="text-xl font-bold text-indigo-900 dark:text-indigo-200">
                          {language === 'fr' ? 'Timing Talismanique' : 'Talisman Timing'}
                        </h4>
                        <div className="ml-auto px-3 py-1 bg-purple-200 dark:bg-purple-800 rounded-full">
                          <span className="text-xs font-semibold text-purple-900 dark:text-purple-100">👑 Scholar</span>
                        </div>
                      </div>
                      
                      <p className="text-sm text-indigo-700 dark:text-indigo-300 mb-4">
                        {language === 'fr' 
                          ? 'Moments astrologiques optimaux pour créer des talismans et effectuer un travail spirituel'
                          : 'Optimal astrological times for creating talismans and performing spiritual work'}
                      </p>

                      {/* User's Astrological Profile */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-5">
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 border border-indigo-200 dark:border-indigo-700">
                          <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">{language === 'fr' ? 'Burj' : 'Zodiac'}</div>
                          <div className="font-semibold text-indigo-900 dark:text-indigo-200 text-sm">
                            {talismanTiming.userBurj}
                          </div>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 border border-indigo-200 dark:border-indigo-700">
                          <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">{language === 'fr' ? 'Planète' : 'Planet'}</div>
                          <div className="font-semibold text-indigo-900 dark:text-indigo-200 text-sm">
                            {talismanTiming.userPlanet}
                          </div>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 border border-indigo-200 dark:border-indigo-700">
                          <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">{language === 'fr' ? 'Jour Optimal' : 'Best Day'}</div>
                          <div className="font-semibold text-indigo-900 dark:text-indigo-200 text-sm">
                            {language === 'fr' ? talismanTiming.bestDayAr : talismanTiming.bestDay}
                          </div>
                        </div>
                        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-3 border border-indigo-200 dark:border-indigo-700">
                          <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">{language === 'fr' ? 'Heure Optimale' : 'Best Hour'}</div>
                          <div className="font-semibold text-indigo-900 dark:text-indigo-200 text-sm">
                            {talismanTiming.bestHour}
                          </div>
                        </div>
                      </div>

                      {/* Current Alignment */}
                      {talismanTiming.currentAlignment && (
                        <div className={`rounded-lg p-4 mb-4 border-2 ${
                          talismanTiming.currentAlignment.alignmentQuality === 'excellent'
                            ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border-green-400 dark:border-green-600'
                            : talismanTiming.currentAlignment.alignmentQuality === 'good'
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 border-blue-400 dark:border-blue-600'
                            : 'bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 border-amber-400 dark:border-amber-600'
                        }`}>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">
                              {talismanTiming.currentAlignment.alignmentQuality === 'excellent' ? '🌟' : 
                               talismanTiming.currentAlignment.alignmentQuality === 'good' ? '✨' : '🔆'}
                            </span>
                            <h5 className="font-bold text-lg">
                              {language === 'fr' ? 'Alignement Actuel' : 'Current Alignment'}
                            </h5>
                            <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${
                              talismanTiming.currentAlignment.alignmentQuality === 'excellent'
                                ? 'bg-green-600 text-white'
                                : talismanTiming.currentAlignment.alignmentQuality === 'good'
                                ? 'bg-blue-600 text-white'
                                : 'bg-amber-600 text-white'
                            }`}>
                              {talismanTiming.currentAlignment.alignmentScore}/100
                            </span>
                          </div>
                          <div className="text-sm space-y-1">
                            {(language === 'fr' ? talismanTiming.currentAlignment.reasonsFr : talismanTiming.currentAlignment.reasons).map((reason: string, idx: number) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="text-green-600 dark:text-green-400 mt-0.5">✓</span>
                                <span>{reason}</span>
                              </div>
                            ))}
                          </div>
                          <div className="mt-3 pt-3 border-t border-indigo-200 dark:border-indigo-700">
                            <p className="text-xs font-semibold text-indigo-800 dark:text-indigo-300">
                              ⏰ {language === 'fr' ? 'Fenêtre active jusqu\'à' : 'Window active until'}: {talismanTiming.currentAlignment.endTime.toLocaleTimeString(language === 'fr' ? 'fr' : 'en', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Recommendation */}
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg p-4 border border-purple-300 dark:border-purple-700">
                        <div className="flex items-start gap-2">
                          <span className="text-lg mt-0.5">💡</span>
                          <div className="text-sm text-purple-900 dark:text-purple-200">
                            <p className="font-semibold mb-1">{language === 'fr' ? 'Recommandation:' : 'Recommendation:'}</p>
                            <p>{language === 'fr' ? talismanTiming.recommendationFr : talismanTiming.recommendation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          )}
          
          {/* Welcome Message - Mobile Responsive */}
          {!result && (
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 sm:p-8 text-center">
              <Sparkles className="w-12 sm:w-16 h-12 sm:h-16 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-slate-100">{t.welcome.title}</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                {t.welcome.description}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {Object.entries(ELEMENT_INFO).map(([element, info]) => {
                  const Icon = info.icon;
                  const elementKey = element.toLowerCase() as 'fire' | 'water' | 'air' | 'earth';
                  return (
                    <div key={element} className={`p-4 rounded-lg ${info.bg} border border-current/20`}>
                      <Icon className={`w-8 h-8 mx-auto mb-2 ${info.color}`} />
                      <div className={`font-medium text-sm ${info.color}`}>{t.elements[elementKey]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Planetary Modules Section */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Moon className="w-6 h-6" />
              {language === 'en' ? 'Ilm Nujum – Planetary Alignment' : language === 'fr' ? 'Ilm Nujum – Alignement Planétaire' : 'علم النجوم'}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <PlanetOfTheDay language={language} />
              <PlanetaryHourCard language={language} />
              <div className="lg:col-span-2">
                <PlanetTransitCard language={language} onNavigate={() => {}} />
              </div>
            </div>
          </div>
            </div>
            
            {/* Sidebar - History */}
            {showHistory && (
              <div className="lg:col-span-1">
                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 sticky top-24">
                  <h2 className="text-xl font-bold mb-4 text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <History className="w-5 h-5" />
                    {t.common.history}
                  </h2>
                  <HistoryPanel
                    history={history}
                    onSelect={handleHistorySelect}
                    onDelete={handleDeleteHistory}
                    onToggleFavorite={handleToggleFavorite}
                    onClear={handleClearHistory}
                    onUpdateNotes={handleUpdateNotes}
                    onUpdateTags={handleUpdateTags}
                    onUpdateCategory={handleUpdateCategory}
                  />
                </div>
              </div>
            )}
          </div>
          )}
          </div>
        </main>
        
        {/* Modals */}
        {showComparison && <ComparisonMode onClose={() => setShowComparison(false)} abjad={abjad} analyzeElements={analyzeElements} />}
        {showBatchCalculator && <BatchCalculator onClose={() => setShowBatchCalculator(false)} abjad={abjad} analyzeElements={analyzeElements} />}
        {showBatchCalculator && <BatchCalculator onClose={() => setShowBatchCalculator(false)} abjad={abjad} analyzeElements={analyzeElements} />}
        
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
            onShowHistory={() => setShowHistory(true)}
            historyCount={history.length}
          />
        )}
        
        {/* Footer - Professional */}
        <footer className="border-t border-slate-200 dark:border-slate-700 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Logo & App Info */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <div className="flex items-center space-x-3">
                  <AsrarLogo size={48} variant="icon" element="aether" animate={true} />
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100">أسرار</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Asrār</p>
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
                    <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Zaibai Tech
                    </span>
                    <svg className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
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
    </div>
  );
}