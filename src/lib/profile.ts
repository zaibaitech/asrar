// =====================================================
// ASRĀR EVERYDAY - PROFILE UTILITIES
// =====================================================
// Database operations for user profiles
// All functions include error handling and type safety
// =====================================================

import { supabase, AVATAR_BUCKET } from './supabase';
import type {
  Profile,
  ProfileInsert,
  ProfileUpdate,
  ProfileResponse,
  ProfileCompletionStatus,
} from '../types/profile.types';

// =====================================================
// PROFILE CRUD OPERATIONS
// =====================================================

/**
 * Get profile for the current authenticated user
 */
export async function getCurrentUserProfile(): Promise<ProfileResponse> {
  if (!supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return { data: null, error: authError || new Error('Not authenticated') };
    }

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();

    if (error) {
      return { data: null, error };
    }

    return { data: data as Profile, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Get profile by user ID
 */
export async function getProfileByUserId(userId: string): Promise<ProfileResponse> {
  if (!supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      return { data: null, error };
    }

    return { data: data as Profile, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Create a new profile (usually done automatically by trigger)
 */
export async function createProfile(profileData: ProfileInsert): Promise<ProfileResponse> {
  if (!supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  try {
    const { data, error } = await supabase
      .from('profiles')
      // @ts-expect-error - Supabase type inference issue with custom types
      .insert(profileData)
      .select()
      .single();

    if (error) {
      return { data: null, error };
    }

    return { data: data as Profile, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Update current user's profile
 */
export async function updateCurrentUserProfile(
  updates: ProfileUpdate
): Promise<ProfileResponse> {
  if (!supabase) {
    return { data: null, error: new Error('Supabase not configured') };
  }

  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return { data: null, error: authError || new Error('Not authenticated') };
    }

    const { data, error } = await supabase
      .from('profiles')
      // @ts-expect-error - Supabase type inference issue with custom types
      .update(updates)
      .eq('user_id', user.id)
      .select()
      .single();

    if (error) {
      return { data: null, error };
    }

    return { data: data as Profile, error: null };
  } catch (error) {
    return { data: null, error: error as Error };
  }
}

/**
 * Delete current user's profile
 */
export async function deleteCurrentUserProfile(): Promise<{ error: Error | null }> {
  if (!supabase) {
    return { error: new Error('Supabase not configured') };
  }

  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return { error: authError || new Error('Not authenticated') };
    }

    const { error } = await supabase
      .from('profiles')
      .delete()
      .eq('user_id', user.id);

    return { error };
  } catch (error) {
    return { error: error as Error };
  }
}

// =====================================================
// PROFILE COMPLETION HELPERS
// =====================================================

/**
 * Calculate profile completion status
 * This is also calculated server-side, but useful for UI
 */
export function calculateProfileCompletion(profile: Profile): ProfileCompletionStatus {
  const requiredFields = [
    'full_name',
    'date_of_birth',
    'location_name',
    'latitude',
    'longitude',
    'timezone',
    'preferred_language',
  ] as const;

  const missingFields: string[] = [];
  let filledCount = 0;

  requiredFields.forEach((field) => {
    const value = profile[field];
    if (value !== null && value !== undefined && value !== '' && value !== 'UTC') {
      filledCount++;
    } else {
      missingFields.push(field);
    }
  });

  // Include avatar as optional but counted
  if (profile.avatar_url) {
    filledCount++;
  } else {
    missingFields.push('avatar_url');
  }

  const totalFields = requiredFields.length + 1; // +1 for avatar
  const percentage = Math.round((filledCount / totalFields) * 100);
  const isComplete = percentage >= 80;

  return {
    isComplete,
    percentage,
    missingFields,
  };
}

/**
 * Get human-readable field names
 */
export function getFieldDisplayName(fieldName: string): string {
  const displayNames: Record<string, string> = {
    full_name: 'Full Name',
    date_of_birth: 'Date of Birth',
    location_name: 'Location',
    latitude: 'Latitude',
    longitude: 'Longitude',
    timezone: 'Timezone',
    preferred_language: 'Preferred Language',
    avatar_url: 'Profile Picture',
  };

  return displayNames[fieldName] || fieldName;
}

// =====================================================
// AVATAR UPLOAD HELPERS
// =====================================================

/**
 * Upload avatar image to Supabase Storage
 */
export async function uploadAvatar(
  userId: string,
  file: File
): Promise<{ url: string | null; error: Error | null }> {
  if (!supabase) {
    return { url: null, error: new Error('Supabase not configured') };
  }

  try {
    // Validate file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      return { url: null, error: new Error('File size must be less than 2MB') };
    }

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      return {
        url: null,
        error: new Error('File type must be JPEG, PNG, WebP, or GIF'),
      };
    }

    // Generate unique filename
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `${userId}/${fileName}`;

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from(AVATAR_BUCKET)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (uploadError) {
      return { url: null, error: uploadError };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(AVATAR_BUCKET)
      .getPublicUrl(filePath);

    return { url: urlData.publicUrl, error: null };
  } catch (error) {
    return { url: null, error: error as Error };
  }
}

/**
 * Delete avatar from Supabase Storage
 */
export async function deleteAvatar(avatarUrl: string): Promise<{ error: Error | null }> {
  if (!supabase) {
    return { error: new Error('Supabase not configured') };
  }

  try {
    // Extract file path from URL
    const url = new URL(avatarUrl);
    const pathParts = url.pathname.split('/');
    const filePath = pathParts.slice(pathParts.indexOf(AVATAR_BUCKET) + 1).join('/');

    const { error } = await supabase.storage.from(AVATAR_BUCKET).remove([filePath]);

    return { error };
  } catch (error) {
    return { error: error as Error };
  }
}

// =====================================================
// LAST SEEN TRACKING
// =====================================================

/**
 * Update user's last seen timestamp
 */
export async function updateLastSeen(): Promise<{ error: Error | null }> {
  if (!supabase) {
    return { error: new Error('Supabase not configured') };
  }

  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return { error: authError || new Error('Not authenticated') };
    }

    // Call the database function
    // @ts-expect-error - Supabase RPC type inference issue
    const { error } = await supabase.rpc('update_user_last_seen', {
      user_uuid: user.id,
    });

    return { error };
  } catch (error) {
    return { error: error as Error };
  }
}

// =====================================================
// LOCATION HELPERS
// =====================================================

/**
 * Get user's current location using browser geolocation
 */
export async function getCurrentLocation(): Promise<{
  latitude: number;
  longitude: number;
  error: Error | null;
}> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({
        latitude: 0,
        longitude: 0,
        error: new Error('Geolocation not supported'),
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => {
        resolve({
          latitude: 0,
          longitude: 0,
          error: new Error(error.message),
        });
      }
    );
  });
}

/**
 * Get timezone from coordinates using browser's Intl API
 */
export function getTimezoneFromCoordinates(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch {
    return 'UTC';
  }
}

/**
 * Reverse geocode coordinates to get location name
 * Uses Nominatim API (free, no API key required)
 */
export async function reverseGeocode(
  latitude: number,
  longitude: number
): Promise<{ name: string; error: Error | null }> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );

    if (!response.ok) {
      return { name: '', error: new Error('Failed to fetch location') };
    }

    const data = await response.json();
    const name = data.display_name || `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;

    return { name, error: null };
  } catch (error) {
    return { name: '', error: error as Error };
  }
}
