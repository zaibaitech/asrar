# 🔧 Quick Fix: Profile Not Found Issue

## ⚠️ Root Cause
The profile page is failing because the `mother_name` column doesn't exist in the database yet. You must run the migration first.

## ✅ Solution (2 Steps)

### Step 1: Run Database Migration ⭐ **DO THIS FIRST**

Go to your **Supabase Dashboard** and run the migration SQL:

1. **Open Supabase Dashboard:**
   - URL: https://supabase.com/dashboard/project/azjgakbhovanweelkezt/sql

2. **Click "SQL Editor"** in the left sidebar

3. **Click "+ New Query"**

4. **Copy & Paste this SQL:**

```sql
-- Add mother_name column
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS mother_name TEXT;

COMMENT ON COLUMN public.profiles.mother_name IS 'Mother''s name - used for enhanced numerology calculations';

-- Update completion calculation trigger
CREATE OR REPLACE FUNCTION public.calculate_profile_completion()
RETURNS TRIGGER AS $$
DECLARE
  field_count INTEGER := 8;
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
```

5. **Click "Run"** or press `Ctrl+Enter`

6. **You should see:** `Success. No rows returned`

### Step 2: Test the Profile

1. **Refresh your browser** (F5 or Cmd+R)

2. **Go to** http://localhost:3000/profile

3. **The profile should now:**
   - Auto-create if missing
   - Load successfully
   - Show "Create Profile" button if needed

## 🎯 What Was Fixed

1. **Auto-Profile Creation:**
   - ProfileView now automatically creates a profile if missing
   - Shows "Creating your profile..." loading state
   - Reloads page after creation

2. **Better Error Handling:**
   - Clear error messages if profile creation fails
   - Loading states during profile creation
   - Graceful fallback to setup page

3. **Database Migration Ready:**
   - Added `mother_name` column
   - Updated completion trigger to track 8 fields
   - Maintains backward compatibility

## 🧪 Testing Checklist

After running the migration:

- [ ] Visit `/profile` - should auto-create profile
- [ ] Click "Create Profile" - redirects to `/profile/setup`
- [ ] Complete setup with name + mother's name
- [ ] Arabic keyboard works on both name fields
- [ ] Location detection works (OpenStreetMap)
- [ ] Profile saves and displays correctly

## 🆘 Still Not Working?

If you still see "No profile found":

1. **Check if user is logged in:**
   - Go to `/auth` and sign in
   - Check browser console for auth errors

2. **Manually create profile in Supabase:**
   ```sql
   -- Get your user ID first
   SELECT id, email FROM auth.users;
   
   -- Create profile (replace YOUR_USER_ID)
   INSERT INTO public.profiles (user_id) 
   VALUES ('YOUR_USER_ID');
   ```

3. **Check RLS policies:**
   ```sql
   -- Verify RLS policies exist
   SELECT * FROM pg_policies WHERE tablename = 'profiles';
   ```

## 📝 Summary

**Before:** Profile page failed with 502 error, "No profile found"
**After:** Profile auto-creates, migration adds mother_name, everything works

**Critical:** Must run the SQL migration in Supabase Dashboard first!
