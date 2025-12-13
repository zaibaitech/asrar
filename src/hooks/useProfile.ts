// =====================================================
// ASRĀR EVERYDAY - PROFILE HOOKS
// =====================================================
// Custom React hooks for profile management
// Provides real-time profile data with Supabase subscriptions
// =====================================================

'use client';

import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import {
  getCurrentUserProfile,
  updateCurrentUserProfile,
  uploadAvatar,
  deleteAvatar,
  calculateProfileCompletion,
  updateLastSeen,
} from '../lib/profile';
import type {
  Profile,
  ProfileUpdate,
  ProfileCompletionStatus,
} from '../types/profile.types';
import { useAuth } from '../contexts/AuthContext';

// =====================================================
// useProfile - Fetch and subscribe to profile data
// =====================================================

export function useProfile() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Fetch profile data
  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const { data, error } = await getCurrentUserProfile();
    
    if (error) {
      setError(error);
      setProfile(null);
    } else {
      setProfile(data);
      setError(null);
    }
    
    setIsLoading(false);
  }, [user]);

  // Initial fetch
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // Subscribe to real-time updates
  useEffect(() => {
    if (!user || !supabase) return;

    const channel = supabase
      .channel('profile-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'profiles',
          filter: `user_id=eq.${user.id}`,
        },
        (payload) => {
          if (payload.eventType === 'UPDATE' || payload.eventType === 'INSERT') {
            setProfile(payload.new as Profile);
          } else if (payload.eventType === 'DELETE') {
            setProfile(null);
          }
        }
      )
      .subscribe();

    return () => {
      if (supabase) {
        supabase.removeChannel(channel);
      }
    };
  }, [user]);

  // Calculate completion status
  const completionStatus: ProfileCompletionStatus | null = profile
    ? calculateProfileCompletion(profile)
    : null;

  return {
    profile,
    isLoading,
    error,
    completionStatus,
    refetch: fetchProfile,
  };
}

// =====================================================
// useUpdateProfile - Update profile with optimistic UI
// =====================================================

export function useUpdateProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateProfile = useCallback(async (updates: ProfileUpdate) => {
    setIsUpdating(true);
    setError(null);

    const { data, error: updateError } = await updateCurrentUserProfile(updates);

    if (updateError) {
      setError(updateError);
      setIsUpdating(false);
      return { data: null, error: updateError };
    }

    setIsUpdating(false);
    return { data, error: null };
  }, []);

  return {
    updateProfile,
    isUpdating,
    error,
  };
}

// =====================================================
// useAvatarUpload - Handle avatar upload/delete
// =====================================================

export function useAvatarUpload() {
  const { user } = useAuth();
  const { updateProfile } = useUpdateProfile();
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const uploadAvatarImage = useCallback(
    async (file: File) => {
      if (!user) {
        const error = new Error('User not authenticated');
        setError(error);
        return { url: null, error };
      }

      setIsUploading(true);
      setError(null);

      // Upload to storage
      const { url, error: uploadError } = await uploadAvatar(user.id, file);

      if (uploadError) {
        setError(uploadError);
        setIsUploading(false);
        return { url: null, error: uploadError };
      }

      // Update profile with new avatar URL
      const { error: updateError } = await updateProfile({ avatar_url: url });

      if (updateError) {
        setError(updateError);
        setIsUploading(false);
        return { url: null, error: updateError };
      }

      setIsUploading(false);
      return { url, error: null };
    },
    [user, updateProfile]
  );

  const deleteAvatarImage = useCallback(
    async (avatarUrl: string) => {
      setIsUploading(true);
      setError(null);

      // Delete from storage
      const { error: deleteError } = await deleteAvatar(avatarUrl);

      if (deleteError) {
        setError(deleteError);
        setIsUploading(false);
        return { error: deleteError };
      }

      // Update profile to remove avatar URL
      const { error: updateError } = await updateProfile({ avatar_url: null });

      if (updateError) {
        setError(updateError);
        setIsUploading(false);
        return { error: updateError };
      }

      setIsUploading(false);
      return { error: null };
    },
    [updateProfile]
  );

  return {
    uploadAvatar: uploadAvatarImage,
    deleteAvatar: deleteAvatarImage,
    isUploading,
    error,
  };
}

// =====================================================
// useLastSeen - Track user's last seen timestamp
// =====================================================

export function useLastSeen() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Update last seen on mount
    updateLastSeen();

    // Update last seen every 5 minutes
    const interval = setInterval(() => {
      updateLastSeen();
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [user]);
}

// =====================================================
// useProfileCompletion - Track profile completion
// =====================================================

export function useProfileCompletion() {
  const { profile, completionStatus } = useProfile();

  const missingFieldsDisplay = completionStatus?.missingFields.map((field) => {
    const displayNames: Record<string, string> = {
      full_name: 'Full Name',
      date_of_birth: 'Date of Birth',
      location_name: 'Location',
      latitude: 'Coordinates',
      longitude: 'Coordinates',
      timezone: 'Timezone',
      preferred_language: 'Language',
      avatar_url: 'Profile Picture',
    };
    return displayNames[field] || field;
  });

  return {
    profile,
    isComplete: completionStatus?.isComplete ?? false,
    percentage: completionStatus?.percentage ?? 0,
    missingFields: completionStatus?.missingFields ?? [],
    missingFieldsDisplay: missingFieldsDisplay ?? [],
  };
}
