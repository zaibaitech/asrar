'use client';

import { IstikharaPanel } from '@/src/features/istikhara';

/**
 * The home app's "Who Am I?" (Istikhārat al-Asmāʾ) panel, rendered unchanged.
 * The wrapper reproduces the home app's <main> container and background so
 * the panel looks exactly as it does in the app's tab.
 */
export function BurjCalculator() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="w-full mx-auto px-3 sm:px-4 py-2 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <IstikharaPanel />
        </div>
      </div>
    </div>
  );
}
