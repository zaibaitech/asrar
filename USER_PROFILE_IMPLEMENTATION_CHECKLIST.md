# User Profile System - Implementation Checklist

## 📋 Pre-Implementation

- [ ] Review [USER_PROFILE_SETUP_GUIDE.md](USER_PROFILE_SETUP_GUIDE.md)
- [ ] Review [USER_PROFILE_TECHNICAL_SUMMARY.md](USER_PROFILE_TECHNICAL_SUMMARY.md)
- [ ] Review [USER_PROFILE_QUICK_REFERENCE.md](USER_PROFILE_QUICK_REFERENCE.md)
- [ ] Ensure @supabase/supabase-js is installed: `npm install @supabase/supabase-js`

---

## 🔧 Supabase Setup

### Create Project

- [ ] Go to https://app.supabase.com
- [ ] Click "New Project"
- [ ] Project Name: `asrar-everyday` (or your choice)
- [ ] Database Password: Strong password (save securely)
- [ ] Region: Choose closest to users
- [ ] Click "Create new project"
- [ ] Wait for project provisioning (~2 minutes)

### Get API Credentials

- [ ] Go to Project Settings (⚙️ icon)
- [ ] Click "API" in sidebar
- [ ] Copy **Project URL** (starts with https://)
- [ ] Copy **anon public** key (long string)
- [ ] Add to `.env.local`:
  ```
  NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
  ```
- [ ] Restart dev server: `npm run dev`

---

## 🗃️ Database Migrations

### Run SQL Migrations

Go to Supabase Dashboard → SQL Editor

#### Migration 1: Create Profiles Table

- [ ] Click "New query"
- [ ] Open `supabase/migrations/001_create_profiles_table.sql`
- [ ] Copy entire contents
- [ ] Paste into SQL Editor
- [ ] Click "Run" (▶️)
- [ ] Verify success message
- [ ] Go to Table Editor → `profiles` table should exist

#### Migration 2: Create RLS Policies

- [ ] New query in SQL Editor
- [ ] Open `supabase/migrations/002_create_rls_policies.sql`
- [ ] Copy and paste
- [ ] Click "Run"
- [ ] Verify success
- [ ] Check `profiles` table has 🔒 icon (RLS enabled)

#### Migration 3: Create Triggers

- [ ] New query in SQL Editor
- [ ] Open `supabase/migrations/003_create_triggers.sql`
- [ ] Copy and paste
- [ ] Click "Run"
- [ ] Verify success

#### Migration 4: Create Storage Bucket

- [ ] New query in SQL Editor
- [ ] Open `supabase/migrations/004_create_storage_bucket.sql`
- [ ] Copy and paste
- [ ] Click "Run"
- [ ] Verify success
- [ ] Go to Storage → `avatars` bucket should exist

### Verify Database Setup

- [ ] Table Editor → `profiles` table exists
- [ ] `profiles` table has RLS enabled (🔒 icon)
- [ ] Authentication → Policies → `profiles` has 4 policies:
  - [ ] "Users can view own profile"
  - [ ] "Users can create own profile"
  - [ ] "Users can update own profile"
  - [ ] "Users can delete own profile"
- [ ] Storage → `avatars` bucket exists
- [ ] Storage → `avatars` bucket is public
- [ ] Database → Functions → `handle_new_user` exists
- [ ] Database → Functions → `handle_updated_at` exists
- [ ] Database → Functions → `calculate_profile_completion` exists

---

## 🔄 Enable Realtime

- [ ] Go to Database → Replication
- [ ] Find `profiles` table
- [ ] Toggle "Enable Replication" ON
- [ ] Click "Save"
- [ ] Verify: Green checkmark next to `profiles`

---

## 📦 Verify File Structure

### Database Files

- [ ] `supabase/migrations/001_create_profiles_table.sql` exists
- [ ] `supabase/migrations/002_create_rls_policies.sql` exists
- [ ] `supabase/migrations/003_create_triggers.sql` exists
- [ ] `supabase/migrations/004_create_storage_bucket.sql` exists

### Type Files

- [ ] `src/types/profile.types.ts` exists
- [ ] `src/types/database.types.ts` exists

### Library Files

- [ ] `src/lib/supabase.ts` updated with TypeScript types
- [ ] `src/lib/profile.ts` exists (350+ lines)

### Hook Files

- [ ] `src/hooks/useProfile.ts` exists (250+ lines)

### Component Files

- [ ] `src/components/ProfileSetup.tsx` exists
- [ ] `src/components/ProfileView.tsx` exists
- [ ] `src/components/ProfileEdit.tsx` exists
- [ ] `src/components/ProfilePictureUpload.tsx` exists

### Documentation Files

- [ ] `USER_PROFILE_SETUP_GUIDE.md` exists
- [ ] `USER_PROFILE_TECHNICAL_SUMMARY.md` exists
- [ ] `USER_PROFILE_QUICK_REFERENCE.md` exists
- [ ] `USER_PROFILE_IMPLEMENTATION_CHECKLIST.md` exists (this file)
- [ ] `.env.example` updated with Supabase config

---

## 🧪 Testing

### Test Profile Creation

- [ ] Sign up a new user via your auth system
- [ ] Go to Supabase Dashboard → Table Editor → `profiles`
- [ ] Verify: New row created with user's `user_id`
- [ ] Verify: `created_at` and `updated_at` populated
- [ ] Verify: `profile_completion_percentage` is 0

### Test Profile Setup Component

- [ ] Create a test page: `app/profile/setup/page.tsx`
  ```tsx
  import ProfileSetup from '@/components/ProfileSetup';
  export default function Page() {
    return <ProfileSetup />;
  }
  ```
- [ ] Visit `/profile/setup`
- [ ] Complete all steps:
  - [ ] Step 1: Enter name and language
  - [ ] Step 2: Enter birth date
  - [ ] Step 3: Get location (or enter manually)
  - [ ] Step 4: Upload avatar
- [ ] Click "Complete Setup"
- [ ] Verify: Redirected to home
- [ ] Check Supabase → `profiles` → Profile data saved
- [ ] Check Supabase → Storage → `avatars` → Avatar uploaded

### Test Profile View Component

- [ ] Create test page: `app/profile/page.tsx`
  ```tsx
  import ProfileView from '@/components/ProfileView';
  export default function Page() {
    return <ProfileView />;
  }
  ```
- [ ] Visit `/profile`
- [ ] Verify: Profile data displays correctly
- [ ] Verify: Avatar displays
- [ ] Verify: Completion percentage shows
- [ ] Verify: "Edit Profile" button appears

### Test Profile Edit Component

- [ ] Create test page: `app/profile/edit/page.tsx`
  ```tsx
  import ProfileEdit from '@/components/ProfileEdit';
  export default function Page() {
    return <ProfileEdit />;
  }
  ```
- [ ] Visit `/profile/edit`
- [ ] Verify: Form pre-filled with current data
- [ ] Change name
- [ ] Click "Save Changes"
- [ ] Verify: Success message appears
- [ ] Verify: Redirected to `/profile`
- [ ] Verify: Updated data displays

### Test Real-time Updates

- [ ] Open `/profile` in two browser tabs
- [ ] Edit profile in Tab 1
- [ ] Verify: Profile updates in Tab 2 automatically (no refresh)

### Test Avatar Upload

- [ ] Go to `/profile/edit`
- [ ] Click "Upload Picture"
- [ ] Select image (JPEG/PNG, under 2MB)
- [ ] Verify: Preview shows immediately
- [ ] Click "Save Changes"
- [ ] Verify: Avatar saved and displays
- [ ] Check Supabase Storage → `avatars/{user_id}/` → File exists

### Test Avatar Delete

- [ ] Go to `/profile/edit`
- [ ] Click "Remove current picture"
- [ ] Click "Save Changes"
- [ ] Verify: Avatar removed from profile
- [ ] Check Supabase Storage → File deleted

### Test Location Detection

- [ ] Go to `/profile/edit`
- [ ] Click "Update to Current Location"
- [ ] Allow browser location permission
- [ ] Verify: Location name, coordinates, timezone populated
- [ ] Click "Save Changes"
- [ ] Verify: Location data saved

### Test Profile Completion

- [ ] Go to `/profile`
- [ ] Note completion percentage
- [ ] Go to `/profile/edit`
- [ ] Fill in one more field
- [ ] Save changes
- [ ] Verify: Completion percentage increased
- [ ] Fill all fields
- [ ] Verify: Completion reaches 100% and shows ✓

### Test Security (RLS)

- [ ] Sign in as User A
- [ ] Note User A's user_id (from Supabase → Authentication → Users)
- [ ] Sign out
- [ ] Sign in as User B
- [ ] Open browser console
- [ ] Try to fetch User A's profile:
  ```js
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', 'USER_A_ID');
  ```
- [ ] Verify: Returns empty array (RLS blocks access)

### Test Error Handling

- [ ] Disconnect internet
- [ ] Try to update profile
- [ ] Verify: Error message displays
- [ ] Reconnect internet
- [ ] Try again
- [ ] Verify: Works correctly

---

## 🎨 Integration

### Add to Navigation

- [ ] Add "Profile" link to main navigation
- [ ] Add "Edit Profile" link to user menu
- [ ] Add "Settings" → "Profile" menu item

### Add to Auth Flow

- [ ] After signup → Redirect to `/profile/setup`
- [ ] Show "Complete Profile" banner if < 80% complete
- [ ] Add profile completion widget to dashboard

### Auto-Fill Forms

Example for Name Destiny Calculator:

- [ ] Import `useProfile` hook
- [ ] Get profile data
- [ ] Pre-fill form fields from profile
- [ ] Show "Using profile data" indicator
- [ ] Allow override if needed

```tsx
const { profile } = useProfile();

useEffect(() => {
  if (profile) {
    setFormData({
      name: profile.full_name || '',
      birthDate: profile.date_of_birth || '',
    });
  }
}, [profile]);
```

### Add Profile Prompts

- [ ] Show "Complete your profile" prompt on relevant pages
- [ ] Add tooltips: "This will be saved to your profile"
- [ ] Add quick-edit buttons: "Update profile" in forms

---

## 🚀 Deployment

### Environment Variables

- [ ] Add to Vercel/hosting platform:
  ```
  NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
  ```
- [ ] Verify environment variables in production dashboard
- [ ] Test in production environment

### Final Checks

- [ ] All migrations run in production Supabase project
- [ ] Realtime enabled in production
- [ ] Storage bucket exists in production
- [ ] RLS policies active in production
- [ ] Environment variables set correctly
- [ ] Build passes: `npm run build`
- [ ] No TypeScript errors
- [ ] Test signup flow in production
- [ ] Test profile edit in production
- [ ] Test avatar upload in production

---

## 📊 Analytics (Optional)

### Track Profile Events

- [ ] Track profile creation events
- [ ] Track profile completion percentage
- [ ] Track time to complete profile
- [ ] Track which fields are most filled
- [ ] Track avatar upload success rate

### Monitor Performance

- [ ] Monitor profile fetch times
- [ ] Monitor avatar upload times
- [ ] Monitor real-time subscription health
- [ ] Set up alerts for high error rates

---

## 🎓 User Onboarding

### First-Time User Experience

- [ ] After signup → Show profile setup wizard
- [ ] Explain benefits of completing profile
- [ ] Allow skip, but remind later
- [ ] Track completion rate
- [ ] Send email reminder if profile incomplete (optional)

### Returning User Experience

- [ ] Auto-fetch profile on login
- [ ] Auto-fill forms with profile data
- [ ] Show "Update profile" link in navigation
- [ ] Prompt to update stale data (e.g., location)

---

## ✅ Production Checklist

- [ ] All database migrations run successfully
- [ ] RLS policies tested and working
- [ ] Realtime subscriptions working
- [ ] Storage bucket configured correctly
- [ ] All components render without errors
- [ ] All hooks work as expected
- [ ] TypeScript compiles without errors
- [ ] Build succeeds: `npm run build`
- [ ] Environment variables set in production
- [ ] Profile creation works in production
- [ ] Profile updates work in production
- [ ] Avatar uploads work in production
- [ ] Real-time updates work in production
- [ ] Security tested (users can't access other profiles)
- [ ] Error handling works correctly
- [ ] Mobile responsive verified
- [ ] Dark mode support verified
- [ ] Accessibility checked
- [ ] Performance acceptable
- [ ] Documentation complete

---

## 🐛 Known Issues / Limitations

- [ ] Profile completion calculated client-side AND server-side (intentional redundancy)
- [ ] Avatar upload limited to 2MB (can be increased if needed)
- [ ] Location detection requires browser permission
- [ ] Reverse geocoding uses free API (Nominatim) with rate limits
- [ ] No image cropping/editing (future enhancement)
- [ ] No offline support (future enhancement)

---

## 📞 Support

If you encounter issues:

1. **Check Documentation**:
   - [USER_PROFILE_SETUP_GUIDE.md](USER_PROFILE_SETUP_GUIDE.md)
   - [USER_PROFILE_TECHNICAL_SUMMARY.md](USER_PROFILE_TECHNICAL_SUMMARY.md)
   - [USER_PROFILE_QUICK_REFERENCE.md](USER_PROFILE_QUICK_REFERENCE.md)

2. **Check Supabase Dashboard**:
   - Database → Tables → `profiles`
   - Storage → `avatars`
   - Authentication → Policies
   - Database → Replication

3. **Check Browser Console**:
   - Network tab for API errors
   - Console tab for JavaScript errors

4. **Common Fixes**:
   - Clear browser cache
   - Restart dev server
   - Re-run migrations
   - Verify environment variables
   - Check Supabase project status

---

**Status**: Ready for Implementation  
**Estimated Time**: 30-60 minutes  
**Difficulty**: Intermediate  
**Last Updated**: December 12, 2025

---

## 🎉 Next Steps After Completion

1. **Customize**: Add custom fields to match your app needs
2. **Enhance**: Add features like profile themes, privacy settings
3. **Optimize**: Add image compression, lazy loading
4. **Monitor**: Set up analytics and error tracking
5. **Iterate**: Collect user feedback and improve UX

**Your user profile system is now complete and production-ready! 🚀**
