/**
 * Prophetic Names Practice Card
 * ==============================
 * Special 7-day tracker for the 201 Holy Names of Prophet Muḥammad ﷺ
 * Rizq Abundance Practice with morning/evening sessions.
 */

'use client';

import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Play, 
  CheckCircle2, 
  Circle, 
  Sun, 
  Trash2,
  Star,
  Share2,
  X,
  MessageCircle,
  Send,
  Link2,
  Check
} from 'lucide-react';
import type { Challenge, SessionTag } from '../types';
import { RIZQ_PRACTICE_INFO } from '../propheticNames201';
import { PropheticNamesPractice } from './PropheticNamesPractice';
import { translations } from '@/src/lib/translations';

// ─── Types ───────────────────────────────────────────────────────────────────────

interface PropheticNamesCardProps {
  challenge: Challenge;
  onLogSession: (id: string, amount: number, session: SessionTag) => void;
  onRemove: (id: string) => void;
  language?: 'en' | 'fr';
}

interface DaySession {
  day: number;
  completed: boolean;
}

// ─── Local Storage Key for Session Progress ──────────────────────────────────────

const SESSIONS_STORAGE_KEY = 'prophetic_names_sessions_v1';

// ─── Helper Functions ────────────────────────────────────────────────────────────

function getStoredSessions(challengeId: string): DaySession[] {
  if (typeof window === 'undefined') return getDefaultSessions();
  try {
    const raw = localStorage.getItem(`${SESSIONS_STORAGE_KEY}_${challengeId}`);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {}
  return getDefaultSessions();
}

function storeSessionProgress(challengeId: string, sessions: DaySession[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`${SESSIONS_STORAGE_KEY}_${challengeId}`, JSON.stringify(sessions));
}

function getDefaultSessions(): DaySession[] {
  return Array.from({ length: 7 }, (_, i) => ({
    day: i + 1,
    completed: false,
  }));
}

// ─── Component ───────────────────────────────────────────────────────────────────

export function PropheticNamesCard({ 
  challenge, 
  onLogSession, 
  onRemove,
  language = 'en' 
}: PropheticNamesCardProps) {
  const t = translations[language].propheticNames;
  const [sessions, setSessions] = useState<DaySession[]>(getDefaultSessions());
  const [showPractice, setShowPractice] = useState(false);
  const [currentDay, setCurrentDay] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);

  // Generate shareable URL with language parameter
  const getShareUrl = () => {
    if (typeof window === 'undefined') return '';
    const baseUrl = window.location.origin;
    const langParam = language === 'fr' ? '&lang=fr' : '';
    return `${baseUrl}?challenge=prophetic-names${langParam}`;
  };

  // Handle native share (Web Share API)
  const handleNativeShare = async () => {
    const shareUrl = getShareUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title: t.shareTitle,
          text: t.shareText,
          url: shareUrl,
        });
        setShowShareModal(false);
      } catch (err) {
        // User cancelled or share failed - show fallback options
        console.log('Native share cancelled');
      }
    }
  };

  // Share via WhatsApp
  const shareWhatsApp = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(`${t.shareText}\n\n${shareUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
    setShowShareModal(false);
  };

  // Share via Telegram
  const shareTelegram = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(t.shareText);
    window.open(`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${text}`, '_blank');
    setShowShareModal(false);
  };

  // Share via Twitter/X
  const shareTwitter = () => {
    const shareUrl = getShareUrl();
    const text = encodeURIComponent(t.shareText);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(shareUrl)}`, '_blank');
    setShowShareModal(false);
  };

  // Copy link to clipboard
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

  // Load sessions from localStorage on mount
  useEffect(() => {
    const stored = getStoredSessions(challenge.id);
    setSessions(stored);
  }, [challenge.id]);

  // Calculate progress
  const completedSessions = sessions.reduce(
    (acc, s) => acc + (s.completed ? 1 : 0),
    0
  );
  const totalSessions = 7;
  const progressPercent = Math.round((completedSessions / totalSessions) * 100);
  const currentDayNumber = sessions.findIndex(s => !s.completed) + 1 || 7;
  const isComplete = completedSessions === totalSessions;

  // Toggle a session completion
  const toggleSession = (day: number) => {
    const newSessions = sessions.map(s => {
      if (s.day === day) {
        const newValue = !s.completed;
        return { ...s, completed: newValue };
      }
      return s;
    });
    setSessions(newSessions);
    storeSessionProgress(challenge.id, newSessions);

    // If marking as complete, also log it
    const session = sessions.find(s => s.day === day);
    if (session && !session.completed) {
      const sessionTag: SessionTag = 'Ḍuḥā / Morning';
      onLogSession(challenge.id, 1, sessionTag);
    }
  };

  // Start practice for a specific day
  const startPractice = (day: number) => {
    setCurrentDay(day);
    setShowPractice(true);
  };

  // Complete a practice session
  const completePractice = () => {
    toggleSession(currentDay);
    setShowPractice(false);
  };

  // Reset progress
  const resetProgress = () => {
    const defaultSessions = getDefaultSessions();
    setSessions(defaultSessions);
    storeSessionProgress(challenge.id, defaultSessions);
    setShowDeleteConfirm(false);
  };

  // Delete challenge
  const handleDelete = () => {
    localStorage.removeItem(`${SESSIONS_STORAGE_KEY}_${challenge.id}`);
    onRemove(challenge.id);
  };

  return (
    <>
      <div className="rounded-2xl border border-amber-200 dark:border-amber-800/50 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 overflow-hidden shadow-sm">
        {/* Header */}
        <div 
          className="p-4 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                    {t.title}
                  </h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    {t.subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isComplete && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  {t.complete}
                </span>
              )}
              {isExpanded ? (
                <ChevronUp className="w-5 h-5 text-slate-400" />
              ) : (
                <ChevronDown className="w-5 h-5 text-slate-400" />
              )}
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-600 dark:text-slate-400">
                {t.day} {currentDayNumber} / 7
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-medium">
                {completedSessions} / {totalSessions} {t.sessionsComplete}
              </span>
            </div>
            <div className="h-2 rounded-full bg-amber-200/50 dark:bg-amber-800/30 overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Expanded content */}
        {isExpanded && (
          <div className="px-4 pb-4 space-y-4">
            {/* 7-day grid */}
            <div className="grid grid-cols-7 gap-1.5">
              {sessions.map((session) => {
                const isCurrentDay = session.day === currentDayNumber;
                const dayComplete = session.completed;
                
                return (
                  <button 
                    key={session.day}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (!session.completed) {
                        startPractice(session.day);
                      } else {
                        toggleSession(session.day);
                      }
                    }}
                    className={`rounded-lg p-2 text-center transition-all ${
                      dayComplete 
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50'
                        : isCurrentDay
                          ? 'bg-amber-100 dark:bg-amber-900/30 border-2 border-amber-400 dark:border-amber-600 hover:bg-amber-200 dark:hover:bg-amber-800/40'
                          : 'bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                    }`}
                  >
                    <div className={`text-xs font-bold mb-1 ${
                      dayComplete ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {t.day[0]}{session.day}
                    </div>
                    
                    {/* Completion indicator */}
                    <div className={`flex items-center justify-center ${
                      session.completed
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-slate-400'
                    }`}>
                      {session.completed ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Sun className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Sun className="w-3 h-3" /> {t.onceDaily}
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {t.complete}
              </span>
            </div>

            {/* Start next session button */}
            {!isComplete && (
              <button
                onClick={() => {
                  const nextSession = sessions.find(s => !s.completed);
                  if (nextSession) {
                    startPractice(nextSession.day);
                  }
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
              >
                <Play className="w-4 h-4" />
                {t.startNext}
              </button>
            )}

            {/* Complete celebration */}
            {isComplete && (
              <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 text-center">
                <div className="text-3xl mb-2">🎉</div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300">
                  {t.congratulations}
                </h4>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                  {t.completedAllDays}
                </p>
                <button
                  onClick={resetProgress}
                  className="mt-3 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  {t.startAgain}
                </button>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-amber-200/50 dark:border-amber-800/30">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="text-xs text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  {t.remove}
                </button>
                <button
                  onClick={() => {
                    if (typeof navigator !== 'undefined' && 'share' in navigator) {
                      handleNativeShare();
                    } else {
                      setShowShareModal(true);
                    }
                  }}
                  className="text-xs text-slate-400 hover:text-amber-500 transition-colors flex items-center gap-1"
                >
                  <Share2 className="w-3 h-3" />
                  {t.share}
                </button>
              </div>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                {t.tradition}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Practice Modal */}
      {showPractice && (
        <PropheticNamesPractice
          isOpen={showPractice}
          onClose={() => setShowPractice(false)}
          onComplete={completePractice}
          day={currentDay}
          language={language}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              {t.removeChallenge}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {t.progressWillBeLost}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                {translations[language].common.cancel}
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-colors"
              >
                {t.remove}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl animate-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {t.shareInvite}
              </h3>
              <button
                onClick={() => setShowShareModal(false)}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Share description */}
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
              {t.shareText}
            </p>

            {/* Share options */}
            <div className="space-y-2">
              {/* WhatsApp */}
              <button
                onClick={shareWhatsApp}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{t.whatsapp}</span>
              </button>

              {/* Telegram */}
              <button
                onClick={shareTelegram}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-[#0088cc] flex items-center justify-center">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <span className="font-medium">{t.telegram}</span>
              </button>

              {/* Twitter/X */}
              <button
                onClick={shareTwitter}
                className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center">
                  <span className="text-white dark:text-black font-bold text-lg">𝕏</span>
                </div>
                <span className="font-medium">{t.twitter}</span>
              </button>

              {/* Copy Link */}
              <button
                onClick={copyLink}
                className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                  linkCopied 
                    ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400'
                    : 'bg-amber-100 dark:bg-amber-900/30 hover:bg-amber-200 dark:hover:bg-amber-900/50 text-amber-700 dark:text-amber-300'
                }`}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  linkCopied 
                    ? 'bg-emerald-500' 
                    : 'bg-amber-500'
                }`}>
                  {linkCopied ? (
                    <Check className="w-5 h-5 text-white" />
                  ) : (
                    <Link2 className="w-5 h-5 text-white" />
                  )}
                </div>
                <span className="font-medium">
                  {linkCopied ? t.linkCopied : t.copyLink}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PropheticNamesCard;
