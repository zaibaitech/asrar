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

  // Don't show anything while loading or if not configured
  if (isLoading || !isConfigured) {
    return null;
  }

  const handleSignOut = async () => {
    await signOut();
    setIsDropdownOpen(false);
  };

  if (!user) {
    return (
      <Link
        href="/auth"
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg transition-all text-sm font-medium shadow-lg shadow-indigo-500/30"
      >
        <User className="w-5 h-5" />
        <span>Sign In</span>
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
            className="fixed inset-0 z-40"
            onClick={() => setIsDropdownOpen(false)}
          />
          
          {/* Dropdown Menu */}
          <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 z-50">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Signed in as
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 truncate">
                {user.email}
              </p>
            </div>

            <div className="p-2">
              <Link
                href="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
              >
                <UserCircle className="w-4 h-4" />
                {t.profile.title}
              </Link>
              
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
