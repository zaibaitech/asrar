/**
 * Copy for the small "calculated with … Abjad" line under letter-table totals.
 * EN/FR wording is fixed. Arabic and Urdu reuse the existing Maghribi/Mashriqi
 * labels and keep the sentence frame in English until those strings are reviewed.
 */
import type { AbjadSystem } from '../contexts/AbjadContext';
import type { Language } from './translations';

export function abjadGhaynValue(system: AbjadSystem): 900 | 1000 {
  return system === 'Mashriqi' ? 1000 : 900;
}

export function abjadSystemUsedCopy(
  lang: Language,
  system: AbjadSystem,
  labels: { maghribi: string; mashriqi: string }
): { line: string; change: string } {
  const ghayn = abjadGhaynValue(system);
  if (lang === 'fr') {
    const name = system === 'Mashriqi' ? 'mashriqi' : 'maghribi';
    return {
      line: `Calculé selon l'Abjad ${name} (غ = ${ghayn})`,
      change: 'Modifier',
    };
  }
  if (lang === 'ar' || lang === 'ur') {
    const label = system === 'Mashriqi' ? labels.mashriqi : labels.maghribi;
    return {
      line: `Calculated with ${label} Abjad (غ = ${ghayn})`,
      change: 'Change',
    };
  }
  return {
    line: `Calculated with ${system} Abjad (غ = ${ghayn})`,
    change: 'Change',
  };
}

export const ABJAD_SYSTEM_SELECTOR_ID = 'abjad-system-selector';

export function focusAbjadSystemSelector(): void {
  if (typeof document === 'undefined') return;
  const el =
    document.getElementById(ABJAD_SYSTEM_SELECTOR_ID) ??
    document.querySelector<HTMLElement>('[data-testid="abjad-system-selector"]');
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.querySelector<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])')?.focus();
}
