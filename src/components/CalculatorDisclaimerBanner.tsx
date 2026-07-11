'use client';

import { useEffect } from 'react';
import { Info, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function CalculatorDisclaimerBanner({ onDismiss }: { onDismiss: () => void }) {
  const { t } = useLanguage();

  useEffect(() => {
    const dismissedTime = localStorage.getItem('disclaimerDismissedAt');
    if (dismissedTime) {
      const hoursSinceDismissed = (Date.now() - Number.parseInt(dismissedTime)) / (1000 * 60 * 60);
      if (hoursSinceDismissed < 24) {
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
