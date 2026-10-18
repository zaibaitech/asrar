'use client';

import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';
import { useLanguage } from '@/src/contexts/LanguageContext';
import ProfileView from '@/src/components/ProfileView';
import AsrarLogo from '@/src/components/AsrarLogo';

export default function ProfilePage() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AsrarLogo size={40} variant="icon" element="aether" mono={true} />
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {t.profile.title}
            </h1>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <Home className="w-5 h-5" />
            <span className="hidden sm:inline">{language === 'fr' ? 'Accueil' : 'Home'}</span>
          </Link>
        </div>
        
        <ProfileView />
      </div>
    </div>
  );
}
