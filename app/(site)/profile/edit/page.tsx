'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/src/contexts/LanguageContext';
import ProfileEdit from '@/src/components/ProfileEdit';
import AsrarLogo from '@/src/components/AsrarLogo';

export default function ProfileEditPage() {
  const router = useRouter();
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AsrarLogo size={40} variant="icon" element="aether" mono={true} />
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              {t.profile.edit}
            </h1>
          </div>
          <Link
            href="/profile"
            className="flex items-center gap-2 px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'fr' ? 'Retour' : 'Back'}</span>
          </Link>
        </div>
        
        <ProfileEdit onCancel={() => router.push('/profile')} />
      </div>
    </div>
  );
}
