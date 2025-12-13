-- =====================================================
-- ASRĀR EVERYDAY - ROW LEVEL SECURITY POLICIES
-- =====================================================
-- This migration sets up Row Level Security (RLS) policies
-- to ensure users can only access their own profile data.
-- 
-- Security Model:
-- - Users can read/update ONLY their own profile
-- - Users can insert their profile only once (on signup)
-- - Service role can bypass RLS for admin operations
-- 
-- Author: Asrār Everyday Team
-- Created: 2025-12-12
-- =====================================================

-- Enable Row Level Security on profiles table
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- =====================================================
-- SELECT POLICY - Users can view their own profile
-- =====================================================

CREATE POLICY "Users can view own profile"
ON public.profiles
FOR SELECT
USING (auth.uid() = user_id);

-- =====================================================
-- INSERT POLICY - Users can create their own profile (once)
-- =====================================================

CREATE POLICY "Users can create own profile"
ON public.profiles
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- UPDATE POLICY - Users can update their own profile
-- =====================================================

CREATE POLICY "Users can update own profile"
ON public.profiles
FOR UPDATE
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- =====================================================
-- DELETE POLICY - Users can delete their own profile
-- =====================================================

CREATE POLICY "Users can delete own profile"
ON public.profiles
FOR DELETE
USING (auth.uid() = user_id);

-- =====================================================
-- OPTIONAL: ADMIN POLICY (Commented out by default)
-- =====================================================
-- Uncomment if you need admin users to access all profiles
-- 
-- CREATE POLICY "Admins can view all profiles"
-- ON public.profiles
-- FOR SELECT
-- USING (
--   EXISTS (
--     SELECT 1 FROM public.profiles
--     WHERE user_id = auth.uid()
--     AND (metadata->>'is_admin')::boolean = true
--   )
-- );

-- =====================================================
-- GRANT PERMISSIONS
-- =====================================================

-- Grant usage on schema to authenticated users
GRANT USAGE ON SCHEMA public TO authenticated;

-- Grant table permissions to authenticated users
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;

-- Grant sequence usage if needed
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;
