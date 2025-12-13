-- =====================================================
-- ASRĀR EVERYDAY - USER PROFILES TABLE
-- =====================================================
-- This migration creates the profiles table to store user profile data
-- linked to Supabase Auth users.
-- 
-- Author: Asrār Everyday Team
-- Created: 2025-12-12
-- =====================================================

-- Create profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  -- Primary key
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Foreign key to auth.users (Supabase Auth)
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  
  -- Profile Information
  full_name TEXT,
  date_of_birth DATE,
  
  -- Location Data (for planetary hour calculations)
  location_name TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  timezone TEXT DEFAULT 'UTC',
  
  -- Preferences
  preferred_language TEXT DEFAULT 'en' CHECK (preferred_language IN ('en', 'fr', 'ar')),
  
  -- Profile Picture
  avatar_url TEXT,
  
  -- Additional Profile Data (flexible JSON for future fields)
  metadata JSONB DEFAULT '{}'::jsonb,
  
  -- Profile Completion Tracking
  profile_completed BOOLEAN DEFAULT false,
  profile_completion_percentage INTEGER DEFAULT 0 CHECK (profile_completion_percentage >= 0 AND profile_completion_percentage <= 100),
  
  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  
  -- Optional: Last seen
  last_seen_at TIMESTAMPTZ
);

-- =====================================================
-- INDEXES
-- =====================================================

-- Index on user_id for fast lookups (most common query)
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON public.profiles(user_id);

-- Index on created_at for sorting/analytics
CREATE INDEX IF NOT EXISTS idx_profiles_created_at ON public.profiles(created_at DESC);

-- Index on preferred_language for language-based queries
CREATE INDEX IF NOT EXISTS idx_profiles_language ON public.profiles(preferred_language);

-- GIN index on metadata JSONB for efficient JSON queries
CREATE INDEX IF NOT EXISTS idx_profiles_metadata ON public.profiles USING GIN (metadata);

-- =====================================================
-- COMMENTS (Documentation)
-- =====================================================

COMMENT ON TABLE public.profiles IS 'User profile data for Asrār Everyday application';
COMMENT ON COLUMN public.profiles.user_id IS 'Foreign key to auth.users - one profile per user';
COMMENT ON COLUMN public.profiles.date_of_birth IS 'Used for Name Destiny calculations';
COMMENT ON COLUMN public.profiles.latitude IS 'Latitude for planetary hour calculations';
COMMENT ON COLUMN public.profiles.longitude IS 'Longitude for planetary hour calculations';
COMMENT ON COLUMN public.profiles.timezone IS 'IANA timezone identifier (e.g., America/New_York)';
COMMENT ON COLUMN public.profiles.metadata IS 'Flexible JSONB field for additional profile data';
COMMENT ON COLUMN public.profiles.profile_completion_percentage IS 'Calculated field: 0-100 based on filled fields';
