'use client';

import React, { useState } from 'react';
import { User, LogOut, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';

export function UserMenu() {
  const { user, isLoading, isConfigured, signOut } = useAuth();
  const { t } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Don't show anything while loading
  if (isLoading) {
    return null;
  }
  
  // Show sign-in link even if not configured (will show message on auth page)
  if (!isConfigured) {
    return (
      <Link
        href="/auth"
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all text-xs sm:text-sm font-medium shadow-lg shadow-indigo-500/30"
      >
        <User className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden xs:inline">Sign In</span>
      </Link>
    );
  }

  const handleSignOut = async () => {
    await signOut();
    setIsDropdownOpen(false);
  };

  if (!user) {
    return (
      <Link
        href="/auth"
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all text-xs sm:text-sm font-medium shadow-lg shadow-indigo-500/30"
      >
        <User className="w-4 h-4 sm:w-5 sm:h-5" />
        <span className="hidden xs:inline">Sign In</span>
      </Link>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 rounded-lg transition-colors min-h-[40px] touch-manipulation"
      >
        <UserCircle className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 hidden sm:inline truncate max-w-[80px] md:max-w-[120px]">
          {user.email?.split('@')[0]}
        </span>
      </button>

      {isDropdownOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="fixed top-16 right-3 left-3 sm:left-auto sm:absolute sm:top-auto sm:right-0 sm:mt-2 sm:w-72 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 z-50 overflow-hidden">
            <div className="p-5 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/40 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Signed in as
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                    {user.email}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-2">
              <Link
                href="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors font-medium"
              >
                <UserCircle className="w-5 h-5" />
                {t.profile.title}
              </Link>
              
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors font-medium"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
