'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Language, TranslationKeys } from '../lib/translations';
import { frPath, isLocalizedPath, stripFrPrefix } from '../lib/i18nRoutes';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Detect browser language and return 'en' or 'fr'
 * French-speaking countries/regions supported:
 * - France, Belgium, Switzerland, Canada (Quebec)
 * - Senegal, Ivory Coast, Cameroon, Mali, Burkina Faso
 * - Niger, Chad, Guinea, Benin, Togo, Rwanda, Burundi
 * - Haiti, Madagascar, Monaco, Luxembourg, and more
 */
function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  // Get browser language (e.g., 'fr-FR', 'fr-SN', 'en-US', 'ar-MA')
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  
  // Check if it starts with 'fr' (covers fr-FR, fr-SN, fr-CA, etc.)
  if (browserLang.toLowerCase().startsWith('fr')) {
    return 'fr';
  }

  // Default to English for all other languages
  return 'en';
}

/**
 * The /fr/... mirror routes are French by URL. Returns the English path for a
 * /fr URL, or null when the current URL is not a French mirror.
 */
function currentFrMirrorTarget(): string | null {
  if (typeof window === 'undefined') return null;
  const target = stripFrPrefix(window.location.pathname);
  return target !== null && isLocalizedPath(target) ? target : null;
}

/**
 * Keep the address bar on the URL that matches the chosen language when the
 * page has a /fr mirror (e.g. "/" <-> "/fr"). replaceState only: no reload,
 * no navigation, the app keeps its state.
 */
function syncUrlWithLanguage(lang: Language) {
  if (typeof window === 'undefined') return;
  const { pathname, search, hash } = window.location;
  const enPath = stripFrPrefix(pathname) ?? pathname;
  if (!isLocalizedPath(enPath)) return;
  const target = lang === 'fr' ? frPath(enPath) : enPath;
  if (target !== pathname) {
    window.history.replaceState(window.history.state, '', `${target}${search}${hash}`);
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    // A /fr/... URL is French regardless of the saved preference (the
    // preference itself is left untouched).
    if (currentFrMirrorTarget() !== null) {
      setLanguage('fr');
      return;
    }

    // Check if user has manually selected a language before
    const saved = localStorage.getItem('preferred-language') as Language | null;
    
    if (saved === 'en' || saved === 'fr') {
      // User has previously chosen a language - respect their choice
      setLanguage(saved);
      // Sync with cookie for server-side metadata
      document.cookie = `asrar_lang=${saved};path=/;max-age=31536000;samesite=lax`;
    } else {
      // First time visitor - auto-detect from browser
      const detected = detectBrowserLanguage();
      setLanguage(detected);
      // Don't save to localStorage yet - only save when user manually changes
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    // Save user's manual preference
    localStorage.setItem('preferred-language', lang);
    // Sync with cookie for server-side metadata (OG tags)
    document.cookie = `asrar_lang=${lang};path=/;max-age=31536000;samesite=lax`;
    // Toggle on a page with a French mirror: move to the matching URL.
    syncUrlWithLanguage(lang);
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider');
  return ctx;
}
