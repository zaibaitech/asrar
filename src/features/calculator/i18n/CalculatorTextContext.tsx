'use client';

/**
 * Server-supplied calculator text (SR, 21 Oct 2026). /ur/abjad builds the Urdu calculator
 * strings on the server (urServer.ts) and passes them here, so the server HTML already
 * contains the Urdu and the client renders the identical text (no hydration mismatch).
 * The calculator keeps locale 'en' for data, numbers and layout; only `t()` text changes.
 */
import { createContext, useContext, type ReactNode } from 'react';

export type CalculatorTextOverride = Partial<Record<'calculator' | 'nameField' | 'divineNamePicker', Record<string, string | readonly string[]>>> & {
  /** Exact English text -> Urdu for the few strings built outside `t()` (e.g. "9 calculators"). */
  exact?: Record<string, string>;
};

export const CalculatorTextContext = createContext<CalculatorTextOverride | null>(null);

export function CalculatorTextProvider({ value, children }: { value: CalculatorTextOverride; children: ReactNode }) {
  return <CalculatorTextContext.Provider value={value}>{children}</CalculatorTextContext.Provider>;
}

/**
 * Server text for strings outside `t()` inside the calculator block (system selector, disclaimer,
 * aria-labels): returns the Urdu given by the provider, or the English unchanged everywhere else.
 */
export function useServerText(): (en: string) => string {
  const exact = useContext(CalculatorTextContext)?.exact;
  return (en: string) => exact?.[en] ?? en;
}
