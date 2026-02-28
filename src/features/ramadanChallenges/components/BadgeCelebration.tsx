/**
 * Badge Celebration Modal
 * ========================
 * Celebrates when user earns a new badge
 */

'use client';

import React, { useEffect, useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import type { Badge } from '../badges';
import { BadgeDisplay } from './BadgeDisplay';

interface BadgeCelebrationProps {
  badge: Badge;
  language?: 'en' | 'fr';
  onClose: () => void;
}

const translations = {
  en: {
    congrats: 'Congratulations!',
    earned: 'You earned a new badge:',
    close: 'Continue',
    share: 'Share Achievement',
  },
  fr: {
    congrats: 'Félicitations!',
    earned: 'Vous avez gagné un nouveau badge:',
    close: 'Continuer',
    share: 'Partager la Réussite',
  },
};

export function BadgeCelebration({ badge, language = 'en', onClose }: BadgeCelebrationProps) {
  const t = translations[language];
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Wait for animation
  };

  const handleShare = async () => {
    const badgeName = language === 'fr' ? badge.nameFr : badge.nameEn;
    const badgeDesc = language === 'fr' ? badge.descriptionFr : badge.descriptionEn;
    
    const shareText = language === 'fr'
      ? `🎖️ Je viens de gagner le badge "${badgeName}" sur Asrār!\n\n${badgeDesc}\n\nRejoignez-moi dans ce défi spirituel!`
      : `🎖️ I just earned the "${badgeName}" badge on Asrār!\n\n${badgeDesc}\n\nJoin me in this spiritual challenge!`;
    
    const shareUrl = `${typeof window !== 'undefined' ? window.location.origin : ''}/ramadan`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: t.congrats,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled or error - just copy to clipboard
        await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
      }
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
    }
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleClose}
    >
      <div 
        className={`relative bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 max-w-md w-full shadow-2xl transform transition-all duration-300 ${
          isVisible ? 'scale-100' : 'scale-90'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-slate-600 dark:text-slate-300" />
        </button>

        {/* Sparkles decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
        </div>

        {/* Content */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-amber-900 dark:text-amber-100 mb-2">
            {t.congrats}
          </h2>
          <p className="text-sm text-amber-700 dark:text-amber-300 mb-6">
            {t.earned}
          </p>

          {/* Badge display */}
          <div className="mb-6 animate-bounce">
            <BadgeDisplay badge={badge} language={language} size="lg" showDescription />
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3">
            <button
              onClick={handleShare}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {t.share}
            </button>
            <button
              onClick={handleClose}
              className="px-6 py-3 bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-amber-900 dark:text-amber-100 rounded-xl font-medium transition-colors"
            >
              {t.close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
