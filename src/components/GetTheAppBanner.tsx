'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function GetTheAppBanner() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Don't show if already installed (running as standalone PWA)
    const isStandalone =
      ('standalone' in navigator && (navigator as { standalone?: boolean }).standalone === true) ||
      window.matchMedia('(display-mode: standalone)').matches;
    if (isStandalone) return;

    const dismissed = sessionStorage.getItem('getAppBannerDismissed');
    if (dismissed) return;

    const ua = navigator.userAgent;
    const isiOS = /iPad|iPhone|iPod/.test(ua) && !/MSStream/.test(ua);
    setIsIOS(isiOS);
    setVisible(true);
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('getAppBannerDismissed', '1');
    setVisible(false);
  };

  if (!visible) return null;

  // ── iOS Safari: show "Add to Home Screen" instructions ──
  if (isIOS) {
    const headline = language === 'fr'
      ? 'Installer Asrār sur iPhone'
      : 'Install Asrār on your iPhone';
    const instruction = language === 'fr'
      ? 'Appuyez sur'
      : 'Tap';
    const instruction2 = language === 'fr'
      ? 'puis « Sur l\'écran d\'accueil »'
      : 'then "Add to Home Screen"';

    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-400/30 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 shadow-2xl">
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-3">
          <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-800/60 border border-amber-400/20 flex items-center justify-center text-xl shadow-inner">
            ✨
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-bold text-amber-300 leading-tight">{headline}</p>
            <p className="text-[11px] text-slate-300 mt-0.5 leading-snug flex items-center gap-1 flex-wrap">
              <span>{instruction}</span>
              {/* iOS Share icon */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="inline w-4 h-4 fill-amber-300 flex-shrink-0">
                <path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"/>
                <path d="M24 7h2v21h-2z"/>
                <path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"/>
              </svg>
              <span>{instruction2}</span>
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="flex-shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {/* Arrow pointing to Safari bottom bar */}
        <div className="flex justify-center pb-1">
          <div className="w-3 h-3 border-b-2 border-r-2 border-amber-400/50 rotate-45 translate-y-[-2px]" />
        </div>
      </div>
    );
  }

  // ── Android / desktop: show Google Play badge ──
  const playUrl = 'https://play.google.com/store/apps/details?id=com.zaibaitech.asrariya';
  const badgeSrc = language === 'fr'
    ? 'https://play.google.com/intl/fr_fr/badges/static/images/badges/fr_badge_web_generic.png'
    : 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png';
  const headline = language === 'fr'
    ? 'Téléchargez Asrāriya sur Android'
    : 'Get the full experience — Download Asrāriya';
  const sub = language === 'fr'
    ? 'Guidance spirituelle personnalisée · Dhikr · Abjad · Heures planétaires'
    : 'Personalised spiritual guidance · Dhikr · Abjad · Planetary Hours';

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-amber-400/30 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 shadow-2xl">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
      <div className="max-w-6xl mx-auto px-4 py-2.5 sm:px-5 sm:py-3 flex items-center gap-3">
        <div className="flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-indigo-800/60 border border-amber-400/20 flex items-center justify-center text-xl sm:text-2xl shadow-inner">
          ✨
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs sm:text-sm font-bold text-amber-300 leading-tight">{headline}</p>
          <p className="text-[11px] text-slate-400 mt-0.5 leading-snug hidden sm:block">{sub}</p>
        </div>
        <a
          href={playUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0"
          aria-label="Get it on Google Play"
        >
          <img
            src={badgeSrc}
            alt="Get it on Google Play"
            className="h-9 sm:h-10 w-auto"
          />
        </a>
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
