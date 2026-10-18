'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ============================================================================
// ABJAD SYSTEMS
// ============================================================================

export type AbjadSystem = 'Maghribi' | 'Mashriqi';

// Letter values: one shared table for the whole app (src/lib/abjad-maps.ts).
export { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../lib/abjad-maps';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI, type AbjadSystemKey } from '../lib/abjad-maps';
export type { AbjadSystemKey } from '../lib/abjad-maps';

// ============================================================================
// HAMZA HANDLING
// ============================================================================

/**
 * IMPORTANT NOTE ABOUT HAMZA (ء):
 * 
 * Hamza (ء) is intentionally NOT included in Abjad calculations.
 * 
 * Classical tradition varies on hamza treatment:
 * - Some classical scholars count it as 1
 * - Others ignore it completely
 * - Some treat it as a diacritic, not a letter
 * 
 * Current Implementation: IGNORES hamza (not counted in totals)
 * Rationale: Aligns with most modern Maghribi applications and contemporary
 * Islamic numerology practice. Hamza is treated as an orthographic marker
 * rather than a counted letter.
 * 
 * If a name contains hamza:
 * - The letter is recognized but not added to the numerical total
 * - A console warning is logged to inform users
 * - The calculation proceeds normally with other letters
 * 
 * Example: محمد (Muhammad) vs محّمد (with hamza) = same numerical value
 */

export function validateAndWarnAboutHamza(arabicText: string): void {
  if (arabicText.includes('ء')) {
    console.warn(
      `⚠️ Input contains hamza (ء) which is not counted in Abjad calculations. ` +
      `This is by design - hamza is treated as an orthographic marker, not a letter value. ` +
      `The calculation will proceed with other letters normally.`
    );
  }
}

// ============================================================================

interface AbjadContextType {
  system: AbjadSystem;
  /** Lower-case id of the same choice ('maghribi' | 'mashriqi'), as the API expects. */
  systemKey: AbjadSystemKey;
  setSystem: (system: AbjadSystem) => void;
  abjad: Record<string, number>;
}

/** localStorage key that remembers the user's choice for the whole app. */
export const ABJAD_SYSTEM_STORAGE_KEY = 'abjadSystem';

const AbjadContext = createContext<AbjadContextType | undefined>(undefined);

type KeyValueStorage = Pick<Storage, 'getItem' | 'setItem'>;

/** The remembered choice, or null when none is saved (→ the Maghribi default). */
export function loadSavedAbjadSystem(storage: KeyValueStorage | undefined): AbjadSystem | null {
  try {
    const saved = storage?.getItem(ABJAD_SYSTEM_STORAGE_KEY);
    return saved === 'Maghribi' || saved === 'Mashriqi' ? saved : null;
  } catch {
    return null;
  }
}

/** Remembers the choice; storage failures (private mode) are ignored. */
export function saveAbjadSystem(storage: KeyValueStorage | undefined, system: AbjadSystem): void {
  try {
    storage?.setItem(ABJAD_SYSTEM_STORAGE_KEY, system);
  } catch {
    // the choice still applies for this visit
  }
}

/**
 * One app-wide Abjad system. Maghribi is the default on every page and
 * locale; the user's choice is remembered in localStorage and every
 * calculator reads its letter table from here, so they all switch together.
 */
export function AbjadProvider({ children }: { children: ReactNode }) {
  const [system, setSystemState] = useState<AbjadSystem>('Maghribi');

  // Load from localStorage on mount, and follow changes made in other tabs.
  useEffect(() => {
    const saved = loadSavedAbjadSystem(window.localStorage);
    if (saved) setSystemState(saved);
    const onStorage = (e: StorageEvent) => {
      if (e.key !== ABJAD_SYSTEM_STORAGE_KEY) return;
      setSystemState(e.newValue === 'Mashriqi' ? 'Mashriqi' : 'Maghribi');
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Save to localStorage when changed
  const setSystem = (newSystem: AbjadSystem) => {
    setSystemState(newSystem);
    saveAbjadSystem(typeof window === 'undefined' ? undefined : window.localStorage, newSystem);
  };

  // Get the appropriate Abjad mapping
  const abjad = system === 'Mashriqi' ? ABJAD_MASHRIQI : ABJAD_MAGHRIBI;
  const systemKey: AbjadSystemKey = system === 'Mashriqi' ? 'mashriqi' : 'maghribi';

  return (
    <AbjadContext.Provider value={{ system, systemKey, setSystem, abjad }}>
      {children}
    </AbjadContext.Provider>
  );
}

export function useAbjad() {
  const context = useContext(AbjadContext);
  if (context === undefined) {
    throw new Error('useAbjad must be used within an AbjadProvider');
  }
  return context;
}
