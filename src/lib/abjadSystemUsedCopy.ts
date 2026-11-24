/**
 * Copy for the small "calculated with … Abjad" line under letter-table totals.
 * EN/FR wording is fixed. Arabic and Urdu are provided for Language Review.
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
  const label = system === 'Mashriqi' ? labels.mashriqi : labels.maghribi;
  if (lang === 'fr') {
    const name = system === 'Mashriqi' ? 'mashriqi' : 'maghribi';
    return {
      line: `Calculé selon l'Abjad ${name} (غ = ${ghayn})`,
      change: 'Modifier',
    };
  }
  if (lang === 'ar') {
    const arName = system === 'Mashriqi' ? 'المشرقي' : 'المغربي';
    return {
      line: `حُسِب بحسب الأبجد ${arName} (غ = ${ghayn})`,
      change: 'تغيير',
    };
  }
  if (lang === 'ur') {
    return {
      line: `${label} ابجد سے حساب کیا گیا (غ = ${ghayn})`,
      change: 'تبدیل کریں',
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
