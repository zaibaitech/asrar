-- =====================================================
-- ASRĀR EVERYDAY - DATABASE TRIGGERS
-- =====================================================
-- This migration creates database triggers for:
-- 1. Automatic profile creation on user signup
-- 2. Automatic updated_at timestamp
-- 3. Profile completion percentage calculation
-- 
-- Author: Asrār Everyday Team
-- Created: 2025-12-12
-- =====================================================

-- =====================================================
-- TRIGGER FUNCTION: Auto-update updated_at timestamp
-- =====================================================

CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for updated_at
DROP TRIGGER IF EXISTS set_updated_at ON public.profiles;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- =====================================================
-- TRIGGER FUNCTION: Auto-create profile on signup
-- =====================================================

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (user_id, created_at, updated_at)
  VALUES (
    NEW.id,
    NOW(),
    NOW()
  );
  RETURN NEW;
EXCEPTION
  WHEN unique_violation THEN
    -- Profile already exists, ignore
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger on auth.users
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- =====================================================
-- TRIGGER FUNCTION: Calculate profile completion percentage
-- =====================================================

CREATE OR REPLACE FUNCTION public.calculate_profile_completion()
RETURNS TRIGGER AS $$
DECLARE
  total_fields INTEGER := 7; -- Total trackable fields
  filled_fields INTEGER := 0;
  completion INTEGER;
BEGIN
  -- Count filled fields
  IF NEW.full_name IS NOT NULL AND NEW.full_name != '' THEN
    filled_fields := filled_fields + 1;
  END IF;
  
  IF NEW.date_of_birth IS NOT NULL THEN
    filled_fields := filled_fields + 1;
  END IF;
  
  IF NEW.location_name IS NOT NULL AND NEW.location_name != '' THEN
    filled_fields := filled_fields + 1;
  END IF;
  
  IF NEW.latitude IS NOT NULL AND NEW.longitude IS NOT NULL THEN
    filled_fields := filled_fields + 1;
  END IF;
  
  IF NEW.timezone IS NOT NULL AND NEW.timezone != 'UTC' THEN
    filled_fields := filled_fields + 1;
  END IF;
  
  IF NEW.preferred_language IS NOT NULL THEN
    filled_fields := filled_fields + 1;
  END IF;
  
  IF NEW.avatar_url IS NOT NULL AND NEW.avatar_url != '' THEN
    filled_fields := filled_fields + 1;
  END IF;
  
  -- Calculate percentage
  completion := ROUND((filled_fields::DECIMAL / total_fields) * 100);
  NEW.profile_completion_percentage := completion;
  
  -- Mark as completed if >= 80%
  IF completion >= 80 THEN
    NEW.profile_completed := true;
  ELSE
    NEW.profile_completed := false;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for profile completion calculation
DROP TRIGGER IF EXISTS calculate_completion ON public.profiles;
CREATE TRIGGER calculate_completion
  BEFORE INSERT OR UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.calculate_profile_completion();

-- =====================================================
-- TRIGGER FUNCTION: Update last_seen_at (optional)
-- =====================================================
-- This can be called manually when user opens the app

CREATE OR REPLACE FUNCTION public.update_last_seen()
RETURNS TRIGGER AS $$
BEGIN
  NEW.last_seen_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Note: This trigger is commented out by default to avoid updating
-- last_seen_at on every profile update. Call it explicitly when needed.
-- 
-- CREATE TRIGGER set_last_seen
--   BEFORE UPDATE ON public.profiles
--   FOR EACH ROW
--   WHEN (OLD.last_seen_at IS DISTINCT FROM NEW.last_seen_at)
--   EXECUTE FUNCTION public.update_last_seen();

-- =====================================================
-- HELPER FUNCTION: Manually update last seen
-- =====================================================

CREATE OR REPLACE FUNCTION public.update_user_last_seen(user_uuid UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.profiles
  SET last_seen_at = NOW()
  WHERE user_id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

COMMENT ON FUNCTION public.update_user_last_seen IS 'Manually update user last_seen_at timestamp';
