'use client';

import { IstikharaPanel } from '@/src/features/istikhara';

/**
 * The same "Who Am I?" (Istikhārat al-Asmāʾ) panel used by the home app's tab.
 * Its palette (light text, translucent cards) is designed for a dark backdrop,
 * so it sits on a dark card here regardless of the page theme.
 */
export function BurjCalculator() {
  return (
    <section
      aria-label="Name and mother's name burj calculator"
      className="rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 px-2 py-4 sm:p-6"
    >
      <IstikharaPanel headingAs="h2" embedded />
    </section>
  );
}
