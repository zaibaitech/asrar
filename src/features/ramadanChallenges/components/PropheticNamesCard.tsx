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
  Moon,
  Trash2,
  Star
} from 'lucide-react';
import type { Challenge, SessionTag } from '../types';
import { RIZQ_PRACTICE_INFO } from '../propheticNames201';
import { PropheticNamesPractice } from './PropheticNamesPractice';

// ─── Types ───────────────────────────────────────────────────────────────────────

interface PropheticNamesCardProps {
  challenge: Challenge;
  onLogSession: (id: string, amount: number, session: SessionTag) => void;
  onRemove: (id: string) => void;
  language?: 'en' | 'fr';
}

interface DaySession {
  day: number;
  morning: boolean;
  evening: boolean;
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
    morning: false,
    evening: false,
  }));
}

// ─── Component ───────────────────────────────────────────────────────────────────

export function PropheticNamesCard({ 
  challenge, 
  onLogSession, 
  onRemove,
  language = 'en' 
}: PropheticNamesCardProps) {
  const [sessions, setSessions] = useState<DaySession[]>(getDefaultSessions());
  const [showPractice, setShowPractice] = useState(false);
  const [currentSession, setCurrentSession] = useState<'morning' | 'evening'>('morning');
  const [currentDay, setCurrentDay] = useState(1);
  const [isExpanded, setIsExpanded] = useState(true);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  // Load sessions from localStorage on mount
  useEffect(() => {
    const stored = getStoredSessions(challenge.id);
    setSessions(stored);
  }, [challenge.id]);

  // Calculate progress
  const completedSessions = sessions.reduce(
    (acc, s) => acc + (s.morning ? 1 : 0) + (s.evening ? 1 : 0),
    0
  );
  const totalSessions = 14;
  const progressPercent = Math.round((completedSessions / totalSessions) * 100);
  const currentDayNumber = sessions.findIndex(s => !s.morning || !s.evening) + 1 || 7;
  const isComplete = completedSessions === totalSessions;

  // Toggle a session completion
  const toggleSession = (day: number, sessionType: 'morning' | 'evening') => {
    const newSessions = sessions.map(s => {
      if (s.day === day) {
        const newValue = !s[sessionType];
        return { ...s, [sessionType]: newValue };
      }
      return s;
    });
    setSessions(newSessions);
    storeSessionProgress(challenge.id, newSessions);

    // If marking as complete, also log it
    const session = sessions.find(s => s.day === day);
    if (session && !session[sessionType]) {
      const sessionTag: SessionTag = sessionType === 'morning' ? 'Ḍuḥā / Morning' : 'Maghrib / Ifṭār';
      onLogSession(challenge.id, 1, sessionTag);
    }
  };

  // Start practice for a specific session
  const startPractice = (day: number, sessionType: 'morning' | 'evening') => {
    setCurrentDay(day);
    setCurrentSession(sessionType);
    setShowPractice(true);
  };

  // Complete a practice session
  const completePractice = () => {
    toggleSession(currentDay, currentSession);
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
                    {RIZQ_PRACTICE_INFO.title}
                  </h3>
                  <p className="text-xs text-amber-600 dark:text-amber-400 font-medium">
                    {RIZQ_PRACTICE_INFO.subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {isComplete && (
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  {language === 'fr' ? 'Terminé' : 'Complete'}
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
                {language === 'fr' ? 'Jour' : 'Day'} {currentDayNumber} / 7
              </span>
              <span className="text-amber-600 dark:text-amber-400 font-medium">
                {completedSessions} / {totalSessions} {language === 'fr' ? 'sessions' : 'sessions'}
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
                const dayComplete = session.morning && session.evening;
                
                return (
                  <div 
                    key={session.day}
                    className={`rounded-lg p-2 text-center ${
                      dayComplete 
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50'
                        : isCurrentDay
                          ? 'bg-amber-100 dark:bg-amber-900/30 border-2 border-amber-400 dark:border-amber-600'
                          : 'bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    <div className={`text-xs font-bold mb-1.5 ${
                      dayComplete ? 'text-emerald-700 dark:text-emerald-300' : 'text-slate-600 dark:text-slate-400'
                    }`}>
                      {language === 'fr' ? 'J' : 'D'}{session.day}
                    </div>
                    
                    {/* Morning checkbox */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!session.morning) {
                          startPractice(session.day, 'morning');
                        } else {
                          toggleSession(session.day, 'morning');
                        }
                      }}
                      className={`w-full flex items-center justify-center gap-0.5 p-1 rounded text-xs transition-colors ${
                        session.morning
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-400 hover:text-amber-500'
                      }`}
                      title={language === 'fr' ? 'Matin' : 'Morning'}
                    >
                      <Sun className="w-3 h-3" />
                      {session.morning ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Circle className="w-3 h-3" />
                      )}
                    </button>
                    
                    {/* Evening checkbox */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!session.evening) {
                          startPractice(session.day, 'evening');
                        } else {
                          toggleSession(session.day, 'evening');
                        }
                      }}
                      className={`w-full flex items-center justify-center gap-0.5 p-1 rounded text-xs transition-colors ${
                        session.evening
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-slate-400 hover:text-amber-500'
                      }`}
                      title={language === 'fr' ? 'Soir' : 'Evening'}
                    >
                      <Moon className="w-3 h-3" />
                      {session.evening ? (
                        <CheckCircle2 className="w-3 h-3" />
                      ) : (
                        <Circle className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1">
                <Sun className="w-3 h-3" /> {language === 'fr' ? 'Matin' : 'Morning'}
              </span>
              <span className="flex items-center gap-1">
                <Moon className="w-3 h-3" /> {language === 'fr' ? 'Soir' : 'Evening'}
              </span>
            </div>

            {/* Start next session button */}
            {!isComplete && (
              <button
                onClick={() => {
                  const nextSession = sessions.find(s => !s.morning);
                  if (nextSession) {
                    startPractice(nextSession.day, 'morning');
                  } else {
                    const eveningSession = sessions.find(s => !s.evening);
                    if (eveningSession) {
                      startPractice(eveningSession.day, 'evening');
                    }
                  }
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25"
              >
                <Play className="w-4 h-4" />
                {language === 'fr' ? 'Commencer la prochaine session' : 'Start Next Session'}
              </button>
            )}

            {/* Complete celebration */}
            {isComplete && (
              <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800/50 text-center">
                <div className="text-3xl mb-2">🎉</div>
                <h4 className="font-bold text-emerald-700 dark:text-emerald-300">
                  {language === 'fr' ? 'Félicitations!' : 'Congratulations!'}
                </h4>
                <p className="text-sm text-emerald-600 dark:text-emerald-400 mt-1">
                  {language === 'fr' 
                    ? 'Vous avez complété les 7 jours de pratique!'
                    : 'You have completed all 7 days of practice!'
                  }
                </p>
                <button
                  onClick={resetProgress}
                  className="mt-3 text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  {language === 'fr' ? 'Recommencer' : 'Start Again'}
                </button>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-between pt-2 border-t border-amber-200/50 dark:border-amber-800/30">
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="text-xs text-slate-400 hover:text-red-500 transition-colors flex items-center gap-1"
              >
                <Trash2 className="w-3 h-3" />
                {language === 'fr' ? 'Supprimer' : 'Remove'}
              </button>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                {RIZQ_PRACTICE_INFO.tradition}
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
          session={currentSession}
          language={language}
        />
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-in fade-in duration-200">
          <div className="w-full max-w-sm bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-xl animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              {language === 'fr' ? 'Supprimer ce défi?' : 'Remove this challenge?'}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              {language === 'fr' 
                ? 'Votre progression sera perdue.'
                : 'Your progress will be lost.'
              }
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                {language === 'fr' ? 'Annuler' : 'Cancel'}
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-colors"
              >
                {language === 'fr' ? 'Supprimer' : 'Remove'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PropheticNamesCard;
