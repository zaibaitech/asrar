-- =====================================================
-- ASRĀR EVERYDAY - ADD MOTHER NAME TO PROFILES
-- =====================================================
-- Add mother_name column to profiles table
-- =====================================================

ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS mother_name TEXT;

COMMENT ON COLUMN public.profiles.mother_name IS 'Mother''s name - used for enhanced numerology calculations';

-- Update completion calculation trigger to include mother_name
CREATE OR REPLACE FUNCTION public.calculate_profile_completion()
RETURNS TRIGGER AS $$
DECLARE
  field_count INTEGER := 8; -- Total number of tracked fields
  filled_count INTEGER := 0;
  completion DECIMAL;
BEGIN
  -- Count filled fields
  IF NEW.full_name IS NOT NULL AND NEW.full_name != '' THEN
    filled_count := filled_count + 1;
  END IF;
  
  IF NEW.mother_name IS NOT NULL AND NEW.mother_name != '' THEN
    filled_count := filled_count + 1;
  END IF;
  
  IF NEW.date_of_birth IS NOT NULL THEN
    filled_count := filled_count + 1;
  END IF;
  
  IF NEW.location_name IS NOT NULL AND NEW.location_name != '' THEN
    filled_count := filled_count + 1;
  END IF;
  
  IF NEW.latitude IS NOT NULL AND NEW.longitude IS NOT NULL THEN
    filled_count := filled_count + 1;
  END IF;
  
  IF NEW.timezone IS NOT NULL AND NEW.timezone != 'UTC' THEN
    filled_count := filled_count + 1;
  END IF;
  
  IF NEW.preferred_language IS NOT NULL AND NEW.preferred_language != 'en' THEN
    filled_count := filled_count + 1;
  END IF;
  
  IF NEW.avatar_url IS NOT NULL AND NEW.avatar_url != '' THEN
    filled_count := filled_count + 1;
  END IF;
  
  -- Calculate completion percentage
  completion := (filled_count::DECIMAL / field_count::DECIMAL) * 100;
  NEW.profile_completion_percentage := ROUND(completion);
  
  -- Set profile_completed flag
  IF NEW.profile_completion_percentage >= 100 THEN
    NEW.profile_completed := true;
  ELSE
    NEW.profile_completed := false;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
