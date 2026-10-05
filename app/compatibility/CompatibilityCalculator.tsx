'use client';

import { CompatibilityPanel } from '@/src/features/compatibility';
import { AbjadSystemSelector } from '@/src/components/AbjadSystemSelector';

/**
 * The same CompatibilityPanel the home app opens as a modal, embedded with the
 * marriage context pre-selected, plus the Maghribi/Mashriqi selector the home
 * header normally provides.
 */
export function CompatibilityCalculator() {
  return (
    <section aria-label="Compatibility calculator" className="space-y-3">
      <div className="flex justify-end px-2">
        <AbjadSystemSelector compact />
      </div>
      <div className="rounded-2xl overflow-hidden">
        <CompatibilityPanel headingAs="h2" defaultContext="marriage" embedded />
      </div>
    </section>
  );
}
