-- =====================================================
-- SIMPLIFIED VERSION - Try this first
-- =====================================================

-- Create profiles table (minimal version)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  date_of_birth DATE,
  location_name TEXT,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  timezone TEXT DEFAULT 'UTC',
  preferred_language TEXT DEFAULT 'en',
  avatar_url TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  profile_completed BOOLEAN DEFAULT false,
  profile_completion_percentage INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  last_seen_at TIMESTAMPTZ
);

-- Add basic index
CREATE INDEX idx_profiles_user_id ON public.profiles(user_id);
