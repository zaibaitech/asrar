'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ============================================================================
// ABJAD SYSTEMS
// ============================================================================

export type AbjadSystem = 'Maghribi' | 'Mashriqi';

// Letter values: one shared table for the whole app (src/lib/abjad-maps.ts).
export { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../lib/abjad-maps';
import { ABJAD_MAGHRIBI, ABJAD_MASHRIQI } from '../lib/abjad-maps';

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
  setSystem: (system: AbjadSystem) => void;
  abjad: Record<string, number>;
}

const AbjadContext = createContext<AbjadContextType | undefined>(undefined);

export function AbjadProvider({ children }: { children: ReactNode }) {
  const [system, setSystemState] = useState<AbjadSystem>('Maghribi');

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('abjadSystem');
    if (saved === 'Maghribi' || saved === 'Mashriqi') {
      setSystemState(saved);
    }
  }, []);

  // Save to localStorage when changed
  const setSystem = (newSystem: AbjadSystem) => {
    setSystemState(newSystem);
    localStorage.setItem('abjadSystem', newSystem);
  };

  // Get the appropriate Abjad mapping
  const abjad = system === 'Maghribi' ? ABJAD_MAGHRIBI : ABJAD_MASHRIQI;

  return (
    <AbjadContext.Provider value={{ system, setSystem, abjad }}>
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
