/**
 * Challenge Card Component
 * =========================
 * Individual dhikr challenge card with progress tracking,
 * quick-add buttons, session logging, and streak display.
 */

'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, Settings, Flame, Share2, X, Copy, Check } from 'lucide-react';
import type { Challenge, SessionTag, ChallengeType } from '../types';
import { SESSION_TAGS } from '../types';
import { computePercent, formatNumber, formatPercent } from '../utils';
import { getRamadanInfo } from '@/src/lib/hijri';

// ─── Type Badge Colors ───────────────────────────────────────────────────────────

const TYPE_STYLES: Record<ChallengeType, { bg: string; text: string; label: string; labelAr: string }> = {
  ISTIGHFAR: {
    bg: 'bg-amber-100 dark:bg-amber-900/40',
    text: 'text-amber-700 dark:text-amber-300',
    label: 'Istighfār',
    labelAr: 'استغفار',
  },
  SALAWAT: {
    bg: 'bg-emerald-100 dark:bg-emerald-900/40',
    text: 'text-emerald-700 dark:text-emerald-300',
    label: 'Ṣalawāt',
    labelAr: 'صلوات',
  },
  DIVINE_NAME: {
    bg: 'bg-purple-100 dark:bg-purple-900/40',
    text: 'text-purple-700 dark:text-purple-300',
    label: 'Divine Name',
    labelAr: 'اسم إلهي',
  },
  PROPHETIC_NAMES: {
    bg: 'bg-amber-100 dark:bg-amber-900/40',
    text: 'text-amber-700 dark:text-amber-300',
    label: '201 Names',
    labelAr: 'أسماء النبي',
  },
  CUSTOM: {
    bg: 'bg-slate-100 dark:bg-slate-700/40',
    text: 'text-slate-700 dark:text-slate-300',
    label: 'Custom',
    labelAr: 'مخصص',
  },
};

// ─── Inspirational Quotes ────────────────────────────────────────────────────────

const QUOTES = [
  { en: 'The dhikr of Allah is the greatest.', ar: 'وَلَذِكْرُ اللّٰهِ أَكْبَرُ' },
  { en: 'Remember Me, and I will remember you.', ar: 'فَاذْكُرُونِي أَذْكُرْكُمْ' },
  { en: 'Hearts find rest in the remembrance of Allah.', ar: 'أَلَا بِذِكْرِ اللّٰهِ تَطْمَئِنُّ الْقُلُوبُ' },
  { en: 'Glorify Allah morning and evening.', ar: 'وَسَبِّحُوهُ بُكْرَةً وَأَصِيلًا' },
];

// ─── Props ───────────────────────────────────────────────────────────────────────

interface ChallengeCardProps {
  challenge: Challenge;
  onLogCount: (amount: number, session: SessionTag) => void;
  onOpenSettings?: () => void;
  language?: 'en' | 'fr';
  defaultExpanded?: boolean;
}

// ─── Component ───────────────────────────────────────────────────────────────────

export function ChallengeCard({
  challenge,
  onLogCount,
  onOpenSettings,
  language = 'en',
  defaultExpanded = false,
}: ChallengeCardProps) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [showSessionLogger, setShowSessionLogger] = useState(false);
  const [selectedSession, setSelectedSession] = useState<SessionTag>('Other');
  const [customAmount, setCustomAmount] = useState('');
  const [showMonthlyLog, setShowMonthlyLog] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  // ─── Computed values ───
  const ramadanInfo = getRamadanInfo();
  const typeStyle = TYPE_STYLES[challenge.type];

  const progressPct = useMemo(
    () => computePercent(challenge.ramadanProgress, challenge.ramadanTarget),
    [challenge.ramadanProgress, challenge.ramadanTarget]
  );

  const todayPct = useMemo(
    () => computePercent(challenge.todayProgress, challenge.dailyTarget),
    [challenge.todayProgress, challenge.dailyTarget]
  );

  const todayRemaining = Math.max(0, challenge.dailyTarget - challenge.todayProgress);
  const isComplete = challenge.ramadanProgress >= challenge.ramadanTarget;
  const isTodayComplete = challenge.todayProgress >= challenge.dailyTarget;

  // Get random quote (stable per card)
  const quote = useMemo(() => QUOTES[Math.floor(challenge.id.charCodeAt(0) % QUOTES.length)], [challenge.id]);

  // ─── Handlers ───
  const handleQuickAdd = (amount: number) => {
    onLogCount(amount, selectedSession);
  };

  const handleCustomAdd = () => {
    const amount = parseInt(customAmount, 10);
    if (amount > 0) {
      onLogCount(amount, selectedSession);
      setCustomAmount('');
    }
  };

  // ─── Share functionality ───
  
  // Convert challenge type to URL-friendly kebab-case
  const getChallengeSlug = (): string => {
    const typeToSlug: Record<ChallengeType, string> = {
      ISTIGHFAR: 'istighfar',
      SALAWAT: 'salawat',
      DIVINE_NAME: 'divine-name',
      PROPHETIC_NAMES: 'prophetic-names',
      CUSTOM: 'custom',
    };
    return typeToSlug[challenge.type] || 'custom';
  };

  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    const baseUrl = window.location.origin;
    const challengeSlug = getChallengeSlug();
    const langParam = language === 'fr' ? '&lang=fr' : '';
    return `${baseUrl}?challenge=${challengeSlug}${langParam}`;
  };

  const handleNativeShare = async () => {
    const shareUrl = getShareUrl();
    const shareTitle = language === 'fr' 
      ? `Défi ${challenge.title} — Asrār` 
      : `${challenge.title} Challenge — Asrār`;
    const shareText = language === 'fr'
      ? `🤲 Rejoignez-moi dans ce défi spirituel!\n\n${challenge.title}\n${challenge.arabicText}\n\nSuivez votre dhikr quotidien et transformez votre Ramadan.`
      : `🤲 Join me in this spiritual challenge!\n\n${challenge.title}\n${challenge.arabicText}\n\nTrack your daily dhikr and transform your Ramadan.`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: shareUrl,
        });
        setShowShareModal(false);
      } catch {
        // User cancelled or share failed
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyLink = async () => {
    const shareUrl = getShareUrl();
    try {
      await navigator.clipboard.writeText(shareUrl);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    }
  };

  const shareWhatsApp = () => {
    const shareUrl = getShareUrl();
    const text = language === 'fr'
      ? `🤲 Rejoignez-moi dans ${challenge.title}!\n\n${challenge.arabicText}\n\nSuivez votre dhikr quotidien:`
      : `🤲 Join me in ${challenge.title}!\n\n${challenge.arabicText}\n\nTrack your daily dhikr:`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + shareUrl)}`, '_blank');
  };

  const shareTelegram = () => {
    const shareUrl = getShareUrl();
    const text = language === 'fr'
      ? `🤲 Rejoignez-moi dans ${challenge.title}!\n\n${challenge.arabicText}`
      : `🤲 Join me in ${challenge.title}!\n\n${challenge.arabicText}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`, '_blank');
  };

  // ─── Daily breakdown ───
  const dailyBreakdown = useMemo(() => {
    const breakdown: Record<string, number> = {};
    for (const log of challenge.sessionLogs) {
      breakdown[log.date] = (breakdown[log.date] || 0) + log.count;
    }
    return breakdown;
  }, [challenge.sessionLogs]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300">
      {/* ─── Header ─── */}
      <div
        className="p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          {/* Type badge and title */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${typeStyle.bg} ${typeStyle.text}`}>
              {typeStyle.label}
            </span>
            <div className="min-w-0 flex-1">
              <h4 className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                {challenge.title}
              </h4>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {onOpenSettings && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenSettings();
                }}
                className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                aria-label="Settings"
              >
                <Settings size={16} />
              </button>
            )}
            <button className="p-1 text-slate-400">
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>
        </div>

        {/* Arabic text preview (always visible in header) */}
        <div className="mt-3">
          <p className="text-2xl font-arabic text-amber-800 dark:text-amber-200" dir="rtl">
            {challenge.arabicText}
          </p>
          <p className="text-sm italic text-slate-500 dark:text-slate-400 mt-1">
            {challenge.transliteration}
          </p>
        </div>
      </div>

      {/* ─── Progress Bar (always visible) ─── */}
      <div className="px-4 pb-4">
        <div
          className="h-2 w-full rounded-full bg-slate-200/80 dark:bg-slate-700/50 overflow-hidden"
          role="progressbar"
          aria-valuenow={Math.round(progressPct)}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${formatPercent(progressPct)} complete`}
        >
          <div
            className={`h-full rounded-full transition-[width] duration-500 ease-out ${
              isComplete
                ? 'bg-gradient-to-r from-amber-400 to-amber-500'
                : 'bg-gradient-to-r from-amber-500 to-amber-600'
            }`}
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="flex items-center justify-between mt-1.5 text-xs text-slate-500 dark:text-slate-400">
          <span>{formatNumber(challenge.ramadanProgress)} / {formatNumber(challenge.ramadanTarget)}</span>
          <span>{formatPercent(progressPct)}</span>
        </div>
      </div>

      {/* ─── Expanded Content ─── */}
      {isExpanded && (
        <div className="px-4 pb-4 space-y-4 animate-in slide-in-from-top-2 duration-200">
          {/* Today's stats grid */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {language === 'fr' ? "Objectif" : "Today's Target"}
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {formatNumber(challenge.dailyTarget)}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {language === 'fr' ? "Progrès" : "Today's Progress"}
              </div>
              <div className={`text-lg font-bold tabular-nums ${
                isTodayComplete ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
              }`}>
                {formatNumber(challenge.todayProgress)}
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/30 rounded-lg p-3">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {language === 'fr' ? 'Restant' : 'Remaining'}
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-slate-100 tabular-nums">
                {formatNumber(todayRemaining)}
              </div>
            </div>
          </div>

          {/* Streak */}
          {challenge.streakDays > 0 && (
            <div className="flex items-center justify-center gap-2 py-2">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-bold text-orange-600 dark:text-orange-400">
                {challenge.streakDays} {language === 'fr' ? 'jours de suite' : 'day streak'}
              </span>
            </div>
          )}

          {/* Today complete badge */}
          {isTodayComplete && (
            <div className="text-center py-2 px-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-sm">
              ✓ {language === 'fr' ? "Objectif du jour atteint!" : "Today's target complete!"}
            </div>
          )}

          {/* Quick Add */}
          <div>
            <h5 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              {language === 'fr' ? 'Ajout rapide' : 'Quick Add'}
            </h5>
            <div className="flex flex-wrap gap-2">
              {challenge.quickAddPresets.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleQuickAdd(amount)}
                  className="px-4 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 dark:bg-amber-900/40 dark:hover:bg-amber-900/60 text-amber-700 dark:text-amber-300 font-medium text-sm transition-colors"
                >
                  +{formatNumber(amount)}
                </button>
              ))}
            </div>
          </div>

          {/* Session Logger */}
          <div>
            <button
              onClick={() => setShowSessionLogger(!showSessionLogger)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              <span>{language === 'fr' ? 'Enregistrer session' : 'Log Session'}</span>
              {showSessionLogger ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showSessionLogger && (
              <div className="mt-3 space-y-3 animate-in slide-in-from-top-2 duration-200">
                {/* Session tags */}
                <div className="flex flex-wrap gap-1.5">
                  {SESSION_TAGS.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedSession(tag)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        selectedSession === tag
                          ? 'bg-amber-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>

                {/* Custom amount input */}
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder={language === 'fr' ? 'Montant personnalisé' : 'Custom amount'}
                    className="flex-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    min="1"
                    aria-label="Custom count input"
                  />
                  <button
                    onClick={handleCustomAdd}
                    disabled={!customAmount || parseInt(customAmount, 10) <= 0}
                    className="px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white font-medium text-sm transition-colors disabled:cursor-not-allowed"
                  >
                    {language === 'fr' ? 'Ajouter' : 'Add'}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Monthly Progress (collapsible) */}
          <div>
            <button
              onClick={() => setShowMonthlyLog(!showMonthlyLog)}
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300 transition-colors"
            >
              <span>{language === 'fr' ? 'Progrès mensuel' : 'Monthly Progress'}</span>
              {showMonthlyLog ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            </button>

            {showMonthlyLog && (
              <div className="mt-3 grid grid-cols-6 sm:grid-cols-10 gap-1 animate-in slide-in-from-top-2 duration-200">
                {Array.from({ length: 30 }, (_, i) => {
                  const day = i + 1;
                  const dateStr = ramadanInfo?.ramadanStart
                    ? new Date(new Date(ramadanInfo.ramadanStart).getTime() + i * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
                    : '';
                  const dayTotal = dailyBreakdown[dateStr] || 0;
                  const dayPct = challenge.dailyTarget > 0 ? Math.min(100, (dayTotal / challenge.dailyTarget) * 100) : 0;

                  return (
                    <div
                      key={day}
                      className={`aspect-square rounded flex items-center justify-center text-xs font-medium ${
                        dayPct >= 100
                          ? 'bg-amber-500 text-white'
                          : dayPct > 0
                          ? 'bg-amber-200 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200'
                          : 'bg-slate-100 dark:bg-slate-700/50 text-slate-400 dark:text-slate-500'
                      }`}
                      title={dateStr ? `${formatNumber(dayTotal)} on day ${day}` : `Day ${day}`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Inspirational quote */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-700">
            <p className="text-center text-sm italic text-amber-600/80 dark:text-amber-400/80">
              "{quote.en}"
            </p>
            <p className="text-center text-sm font-arabic text-amber-700/60 dark:text-amber-300/60 mt-1" dir="rtl">
              {quote.ar}
            </p>
          </div>

          {/* Invite Friends Button */}
          <button
            onClick={handleNativeShare}
            className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium transition-all flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20"
          >
            <Share2 className="w-4 h-4" />
            {language === 'fr' ? 'Inviter des amis' : 'Invite Friends to Join'}
          </button>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {language === 'fr' ? 'Partager cette pratique' : 'Share this practice'}
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
              {language === 'fr' ? 'Partager via' : 'Share via'}
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={shareWhatsApp}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-green-500 hover:bg-green-600 text-white font-medium transition-colors"
              >
                WhatsApp
              </button>
              <button
                onClick={shareTelegram}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors"
              >
                Telegram
              </button>
            </div>
            
            <div className="mt-4">
              <button
                onClick={copyLink}
                className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl transition-colors ${
                  linkCopied
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {linkCopied ? (
                  <><Check className="w-4 h-4" /> {language === 'fr' ? 'Lien copié!' : 'Link copied!'}</>
                ) : (
                  <><Copy className="w-4 h-4" /> {language === 'fr' ? 'Copier le lien' : 'Copy Link'}</>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChallengeCard;
