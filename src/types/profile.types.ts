// =====================================================
// ASRĀR EVERYDAY - DATABASE TYPES
// =====================================================
// TypeScript types for Supabase database tables
// Generated for type-safe database queries
// =====================================================

import { Database as DatabaseGenerated } from './database.types';

// =====================================================
// Re-export generated types
// =====================================================

export type Database = DatabaseGenerated;

// =====================================================
// PROFILE TYPES
// =====================================================

/**
 * User Profile - Complete profile data from database
 */
export interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;  mother_name: string | null;  date_of_birth: string | null; // ISO date string
  location_name: string | null;
  latitude: number | null;
  longitude: number | null;
  timezone: string;
  preferred_language: 'en' | 'fr' | 'ar';
  avatar_url: string | null;
  metadata: Record<string, any>;
  profile_completed: boolean;
  profile_completion_percentage: number;
  created_at: string;
  updated_at: string;
  last_seen_at: string | null;
}

/**
 * Profile Insert - Data required to create a new profile
 */
export interface ProfileInsert {
  user_id: string;
  full_name?: string | null;
  mother_name?: string | null;
  date_of_birth?: string | null;
  location_name?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  timezone?: string;
  preferred_language?: 'en' | 'fr' | 'ar';
  avatar_url?: string | null;
  metadata?: Record<string, any>;
}

/**
 * Profile Update - Data that can be updated in a profile
 */
export interface ProfileUpdate {
  full_name?: string | null;
  mother_name?: string | null;
  date_of_birth?: string | null;
  location_name?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  timezone?: string;
  preferred_language?: 'en' | 'fr' | 'ar';
  avatar_url?: string | null;
  metadata?: Record<string, any>;
}

// =====================================================
// LOCATION TYPES
// =====================================================

/**
 * Geographic Location
 */
export interface Location {
  name: string;
  latitude: number;
  longitude: number;
  timezone: string;
}

// =====================================================
// METADATA TYPES
// =====================================================

/**
 * Profile Metadata - Flexible additional data
 */
export interface ProfileMetadata {
  // Islamic guidance preferences
  prayer_reminders_enabled?: boolean;
  blessed_days_notifications?: boolean;
  
  // App preferences
  theme?: 'light' | 'dark' | 'system';
  notifications_enabled?: boolean;
  
  // Privacy settings
  profile_visibility?: 'public' | 'private';
  
  // User-specific calculation preferences
  calculation_method?: string;
  
  // Any additional custom fields
  [key: string]: any;
}

// =====================================================
// RESPONSE TYPES
// =====================================================

/**
 * API Response for profile operations
 */
export interface ProfileResponse {
  data: Profile | null;
  error: Error | null;
}

/**
 * API Response for profile list operations
 */
export interface ProfileListResponse {
  data: Profile[] | null;
  error: Error | null;
}

// =====================================================
// HELPER TYPES
// =====================================================

/**
 * Profile completion status
 */
export interface ProfileCompletionStatus {
  isComplete: boolean;
  percentage: number;
  missingFields: string[];
}

/**
 * Profile form data (client-side form state)
 */
export interface ProfileFormData {
  fullName: string;
  dateOfBirth: Date | null;
  location: Location | null;
  preferredLanguage: 'en' | 'fr' | 'ar';
  avatarFile: File | null;
}
