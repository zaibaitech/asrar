-- =====================================================
-- ASRĀR EVERYDAY - STORAGE BUCKET FOR PROFILE PICTURES
-- =====================================================
-- This migration creates a Supabase Storage bucket for
-- user profile pictures with appropriate RLS policies.
-- 
-- Author: Asrār Everyday Team
-- Created: 2025-12-12
-- =====================================================

-- Create storage bucket for avatars
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'avatars',
  'avatars',
  true, -- Public bucket (images are accessible via URL)
  2097152, -- 2MB file size limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- STORAGE RLS POLICIES
-- =====================================================

-- Policy: Users can upload to their own folder
CREATE POLICY "Users can upload own avatar"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'avatars' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy: Anyone can view avatars (public bucket)
CREATE POLICY "Anyone can view avatars"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'avatars');

-- Policy: Users can update their own avatar
CREATE POLICY "Users can update own avatar"
ON storage.objects
FOR UPDATE
TO authenticated
USING (
  bucket_id = 'avatars' AND
  (storage.foldername(name))[1] = auth.uid()::text
)
WITH CHECK (
  bucket_id = 'avatars' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- Policy: Users can delete their own avatar
CREATE POLICY "Users can delete own avatar"
ON storage.objects
FOR DELETE
TO authenticated
USING (
  bucket_id = 'avatars' AND
  (storage.foldername(name))[1] = auth.uid()::text
);

-- =====================================================
-- HELPER FUNCTION: Generate avatar path
-- =====================================================

CREATE OR REPLACE FUNCTION public.get_avatar_path(user_uuid UUID, filename TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN user_uuid::text || '/' || filename;
END;
$$ LANGUAGE plpgsql IMMUTABLE;

COMMENT ON FUNCTION public.get_avatar_path IS 'Generate storage path for user avatar: {user_id}/{filename}';

-- =====================================================
-- HELPER FUNCTION: Get avatar public URL
-- =====================================================

CREATE OR REPLACE FUNCTION public.get_avatar_url(user_uuid UUID, filename TEXT)
RETURNS TEXT AS $$
DECLARE
  supabase_url TEXT;
BEGIN
  -- Get Supabase URL from settings (adjust based on your project)
  -- This is a placeholder - update with your actual Supabase URL
  supabase_url := current_setting('app.supabase_url', true);
  
  IF supabase_url IS NULL THEN
    RETURN NULL;
  END IF;
  
  RETURN supabase_url || '/storage/v1/object/public/avatars/' || 
         user_uuid::text || '/' || filename;
END;
$$ LANGUAGE plpgsql STABLE;

COMMENT ON FUNCTION public.get_avatar_url IS 'Generate public URL for user avatar';
