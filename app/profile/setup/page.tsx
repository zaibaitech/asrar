'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/src/contexts/LanguageContext';
import { useProfile } from '@/src/hooks/useProfile';
import ProfileSetupBilingual from '@/src/components/ProfileSetupBilingual';
import AsrarLogo from '@/src/components/AsrarLogo';

export default function ProfileSetupPage() {
  const router = useRouter();
  const { t } = useLanguage();
  const { profile, isLoading, completionStatus } = useProfile();

  // Redirect to profile if already complete
  useEffect(() => {
    if (!isLoading && profile && completionStatus?.isComplete) {
      router.push('/profile');
    }
  }, [isLoading, profile, completionStatus, router]);

  // Show loading while checking
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          <p className="text-slate-600 dark:text-slate-300">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-center">
          <div className="flex justify-center mb-4">
            <AsrarLogo size={56} variant="icon" element="aether" animate={true} />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            {profile ? t.profile.edit : t.profile.setup}
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            {profile 
              ? 'Update your profile information'
              : t.profile.setupWelcome
            }
          </p>
          {profile && completionStatus && (
            <p className="text-sm text-purple-600 dark:text-purple-400 mt-2">
              Profile {completionStatus.percentage}% complete
            </p>
          )}
        </div>
        
        <ProfileSetupBilingual 
          onComplete={() => router.push('/profile')}
          skipEnabled={true}
        />
      </div>
    </div>
  );
}
