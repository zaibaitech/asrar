// =====================================================
// ASRĀR EVERYDAY - PROFILE VIEW COMPONENT
// =====================================================
// Display user profile information
// =====================================================

'use client';

import React, { useEffect, useState } from 'react';
import { useProfile } from '../hooks/useProfile';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../lib/supabase';
import Image from 'next/image';

export default function ProfileView() {
  const router = useRouter();
  const { user } = useAuth();
  const { profile, isLoading, completionStatus } = useProfile();
  const [isCreating, setIsCreating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // Auto-create profile if missing
  useEffect(() => {
    async function ensureProfile() {
      if (!isLoading && !profile && user && !isCreating && supabase) {
        setIsCreating(true);
        setCreateError(null);
        
        try {
          // Try to create profile
          const { error } = await supabase
            .from('profiles')
            .insert({
              user_id: user.id,
            } as any);
          
          if (error && error.code !== '23505') { // Ignore duplicate error
            console.error('Failed to create profile:', error);
            setCreateError(error.message);
          } else {
            // Reload the page to fetch the new profile
            window.location.reload();
          }
        } catch (err: any) {
          console.error('Error creating profile:', err);
          setCreateError(err.message);
        } finally {
          setIsCreating(false);
        }
      }
    }
    
    ensureProfile();
  }, [isLoading, profile, user, isCreating]);

  if (isLoading || isCreating) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
          {isCreating && (
            <p className="text-gray-600 dark:text-gray-400">Creating your profile...</p>
          )}
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {createError ? `Error: ${createError}` : 'No profile found'}
        </p>
        <button
          onClick={() => router.push('/profile/setup')}
          className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          {createError ? 'Set Up Profile' : 'Create Profile'}
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      {/* Profile Header */}
      <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
        {/* Avatar */}
        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 border-4 border-gray-300 dark:border-gray-600">
          {profile.avatar_url ? (
            <Image
              src={profile.avatar_url}
              alt={profile.full_name || 'Profile'}
              width={96}
              height={96}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500 text-4xl">
              👤
            </div>
          )}
        </div>

        {/* Name and Completion */}
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            {profile.full_name || 'No name set'}
          </h1>
          
          {/* Completion Status */}
          <div className="flex items-center gap-3">
            <div className="flex-1 max-w-xs">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  Profile Completion
                </span>
                <span className="text-xs font-medium text-gray-900 dark:text-white">
                  {completionStatus?.percentage}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                <div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                  style={{ width: `${completionStatus?.percentage}%` }}
                ></div>
              </div>
            </div>
            {completionStatus?.isComplete && (
              <span className="text-green-600 dark:text-green-400 text-xl">✓</span>
            )}
          </div>
        </div>

        {/* Edit Button */}
        <button
          onClick={() => router.push('/profile/edit')}
          className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all"
        >
          Edit Profile
        </button>
      </div>

      {/* Profile Details */}
      <div className="space-y-6">
        {/* Personal Information */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Personal Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileField label="Full Name" value={profile.full_name} />
            <ProfileField label="Mother's Name" value={profile.mother_name} />
            <ProfileField
              label="Date of Birth"
              value={profile.date_of_birth ? new Date(profile.date_of_birth).toLocaleDateString() : null}
            />
            <ProfileField
              label="Preferred Language"
              value={
                profile.preferred_language === 'en'
                  ? 'English'
                  : profile.preferred_language === 'fr'
                  ? 'Français'
                  : 'العربية'
              }
            />
          </div>
        </div>

        {/* Location Information */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Location & Timezone
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileField label="Location" value={profile.location_name} />
            <ProfileField label="Timezone" value={profile.timezone} />
            {profile.latitude && profile.longitude && (
              <ProfileField
                label="Coordinates"
                value={`${profile.latitude.toFixed(4)}, ${profile.longitude.toFixed(4)}`}
              />
            )}
          </div>
        </div>

        {/* Account Information */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Account Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ProfileField
              label="Member Since"
              value={new Date(profile.created_at).toLocaleDateString()}
            />
            <ProfileField
              label="Last Updated"
              value={new Date(profile.updated_at).toLocaleDateString()}
            />
            {profile.last_seen_at && (
              <ProfileField
                label="Last Seen"
                value={new Date(profile.last_seen_at).toLocaleDateString()}
              />
            )}
          </div>
        </div>

        {/* Incomplete Profile Notice */}
        {!completionStatus?.isComplete && (
          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-300 mb-2">
              Complete Your Profile
            </h3>
            <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-3">
              Complete your profile to unlock all features and get personalized guidance.
            </p>
            <button
              onClick={() => router.push('/profile/edit')}
              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-all text-sm"
            >
              Complete Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Helper component for profile fields
function ProfileField({ label, value }: { label: string; value: string | null }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
        {label}
      </label>
      <p className="text-gray-900 dark:text-white">
        {value || <span className="text-gray-400 dark:text-gray-500 italic">Not set</span>}
      </p>
    </div>
  );
}
