# User Profile System - Complete Implementation Guide

## Overview

This document provides complete setup and usage instructions for the user profile management system in **Asrār Everyday** using **Supabase**.

## ✅ What's Included

### Database Layer
- ✅ `profiles` table with complete schema
- ✅ Row Level Security (RLS) policies
- ✅ Database triggers for automation
- ✅ Supabase Storage bucket for avatars
- ✅ Helper functions for common operations

### TypeScript Layer
- ✅ Complete type definitions
- ✅ Profile CRUD utilities
- ✅ Avatar upload/delete helpers
- ✅ Location and geocoding helpers

### React Layer  
- ✅ Custom hooks (`useProfile`, `useUpdateProfile`, `useAvatarUpload`)
- ✅ Profile setup component (onboarding)
- ✅ Profile view component
- ✅ Profile edit component
- ✅ Profile picture upload component
- ✅ Real-time updates with Supabase subscriptions

---

## 🚀 Quick Start

### Step 1: Set Up Supabase Project

1. **Create Supabase Project**:
   - Go to https://app.supabase.com
   - Click "New Project"
   - Name: `asrar-everyday` (or your choice)
   - Set database password and region

2. **Get API Credentials**:
   - Go to Project Settings → API
   - Copy:
     - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
     - `anon/public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

3. **Add to Environment Variables**:
   ```bash
   # .env.local
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

### Step 2: Run Database Migrations

Run the SQL migrations in order:

1. **Create Profiles Table**:
   - Go to Supabase Dashboard → SQL Editor
   - Open `supabase/migrations/001_create_profiles_table.sql`
   - Copy and paste the SQL
   - Click "Run"

2. **Create RLS Policies**:
   - Open `supabase/migrations/002_create_rls_policies.sql`
   - Run the SQL

3. **Create Triggers**:
   - Open `supabase/migrations/003_create_triggers.sql`
   - Run the SQL

4. **Create Storage Bucket**:
   - Open `supabase/migrations/004_create_storage_bucket.sql`
   - Run the SQL

**Alternative: Use Supabase CLI**:
```bash
# Install Supabase CLI
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref your-project-ref

# Run migrations
supabase db push
```

### Step 3: Verify Database Setup

Check that everything is created:

1. **Tables**: Go to Table Editor → `profiles` table should exist
2. **RLS**: Table should have 🔒 icon (RLS enabled)
3. **Storage**: Go to Storage → `avatars` bucket should exist
4. **Policies**: Check Authentication → Policies → `profiles` has 4 policies

### Step 4: Install Dependencies

```bash
npm install @supabase/supabase-js
```

### Step 5: Test the System

1. **Sign up a test user** through your auth system
2. **Check profiles table** - a profile should auto-create
3. **Navigate to profile setup** page
4. **Complete the profile**
5. **Verify data saved** in Supabase dashboard

---

## 📁 File Structure

```
/workspaces/asrar/
├── supabase/
│   └── migrations/
│       ├── 001_create_profiles_table.sql
│       ├── 002_create_rls_policies.sql
│       ├── 003_create_triggers.sql
│       └── 004_create_storage_bucket.sql
│
├── src/
│   ├── types/
│   │   ├── profile.types.ts
│   │   └── database.types.ts
│   │
│   ├── lib/
│   │   ├── supabase.ts (updated)
│   │   └── profile.ts (new)
│   │
│   ├── hooks/
│   │   └── useProfile.ts
│   │
│   └── components/
│       ├── ProfileSetup.tsx
│       ├── ProfileView.tsx
│       ├── ProfileEdit.tsx
│       └── ProfilePictureUpload.tsx
```

---

## 🎯 Usage Examples

### Example 1: Display Profile in App

```tsx
'use client';

import { useProfile } from '@/hooks/useProfile';

export default function MyComponent() {
  const { profile, isLoading, completionStatus } = useProfile();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {profile?.full_name || 'User'}!</h1>
      <p>Profile {completionStatus?.percentage}% complete</p>
    </div>
  );
}
```

### Example 2: Auto-Fill Form with Profile Data

```tsx
'use client';

import { useProfile } from '@/hooks/useProfile';
import { useEffect, useState } from 'react';

export default function CalculationForm() {
  const { profile } = useProfile();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    location: '',
  });

  // Auto-fill from profile
  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.full_name || '',
        birthDate: profile.date_of_birth || '',
        location: profile.location_name || '',
      });
    }
  }, [profile]);

  return <form>{/* Your form fields */}</form>;
}
```

### Example 3: Update Profile

```tsx
'use client';

import { useUpdateProfile } from '@/hooks/useProfile';

export default function UpdateNameButton() {
  const { updateProfile, isUpdating } = useUpdateProfile();

  const handleUpdate = async () => {
    const { error } = await updateProfile({
      full_name: 'New Name',
    });

    if (error) {
      console.error('Update failed:', error);
    } else {
      console.log('Profile updated!');
    }
  };

  return (
    <button onClick={handleUpdate} disabled={isUpdating}>
      {isUpdating ? 'Updating...' : 'Update Name'}
    </button>
  );
}
```

### Example 4: Upload Avatar

```tsx
'use client';

import { useAvatarUpload } from '@/hooks/useProfile';

export default function AvatarUploader() {
  const { uploadAvatar, isUploading, error } = useAvatarUpload();

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const { url, error } = await uploadAvatar(file);
    
    if (error) {
      console.error('Upload failed:', error);
    } else {
      console.log('Avatar uploaded:', url);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {isUploading && <p>Uploading...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
}
```

---

## 🔐 Security Features

### Row Level Security (RLS)

- ✅ Users can only view/edit their own profile
- ✅ Users cannot view other users' profiles
- ✅ Profile automatically created on signup
- ✅ Profile deleted when user account is deleted

### Storage Security

- ✅ Users can only upload to their own folder (`{user_id}/filename`)
- ✅ File size limit: 2MB
- ✅ Allowed types: JPEG, PNG, WebP, GIF
- ✅ Public bucket (images accessible via URL)

### Data Validation

- ✅ Server-side validation via database constraints
- ✅ Client-side validation in forms
- ✅ File type and size validation

---

## 🎨 UI Components

### ProfileSetup Component

**Location**: `src/components/ProfileSetup.tsx`

**Features**:
- Multi-step onboarding flow
- Progress bar
- Skip option
- Auto-location detection
- Avatar upload

**Usage**:
```tsx
<ProfileSetup
  onComplete={() => router.push('/')}
  onSkip={() => router.push('/')}
  showSkipButton={true}
/>
```

### ProfileView Component

**Location**: `src/components/ProfileView.tsx`

**Features**:
- Display profile information
- Profile completion status
- Edit button
- Responsive layout

**Usage**:
```tsx
<ProfileView />
```

### ProfileEdit Component

**Location**: `src/components/ProfileEdit.tsx`

**Features**:
- Edit all profile fields
- Auto-location detection
- Avatar upload/delete
- Real-time updates
- Validation

**Usage**:
```tsx
<ProfileEdit />
```

---

## 🔄 Real-Time Updates

The system uses Supabase Realtime subscriptions to automatically update the UI when profile data changes:

```typescript
// In useProfile hook
useEffect(() => {
  const channel = supabase
    .channel('profile-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'profiles',
        filter: `user_id=eq.${user.id}`,
      },
      (payload) => {
        // Profile automatically updates in UI
        setProfile(payload.new as Profile);
      }
    )
    .subscribe();

  return () => supabase.removeChannel(channel);
}, [user]);
```

**Benefits**:
- Changes sync across devices instantly
- No manual refresh needed
- Always up-to-date data

---

## 📊 Database Schema

### Profiles Table

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key |
| `user_id` | UUID | Foreign key to `auth.users` |
| `full_name` | TEXT | User's full name |
| `date_of_birth` | DATE | Birth date for calculations |
| `location_name` | TEXT | Human-readable location |
| `latitude` | DECIMAL | Latitude coordinates |
| `longitude` | DECIMAL | Longitude coordinates |
| `timezone` | TEXT | IANA timezone |
| `preferred_language` | TEXT | 'en', 'fr', or 'ar' |
| `avatar_url` | TEXT | Public URL to avatar image |
| `metadata` | JSONB | Flexible additional data |
| `profile_completed` | BOOLEAN | Auto-calculated |
| `profile_completion_percentage` | INTEGER | 0-100, auto-calculated |
| `created_at` | TIMESTAMPTZ | Auto-set on insert |
| `updated_at` | TIMESTAMPTZ | Auto-updated |
| `last_seen_at` | TIMESTAMPTZ | Manually updated |

---

## 🔧 Customization

### Add Custom Profile Fields

1. **Update Database**:
   ```sql
   ALTER TABLE profiles ADD COLUMN favorite_prayer TEXT;
   ```

2. **Update Types**:
   ```typescript
   // src/types/profile.types.ts
   export interface Profile {
     // ... existing fields
     favorite_prayer: string | null;
   }
   ```

3. **Update Components**:
   ```tsx
   <input
     value={formData.favoritePrayer}
     onChange={(e) => handleChange('favoritePrayer', e.target.value)}
   />
   ```

### Modify Completion Calculation

Edit the trigger function in `003_create_triggers.sql`:

```sql
-- Add new field to completion calculation
IF NEW.favorite_prayer IS NOT NULL AND NEW.favorite_prayer != '' THEN
  filled_fields := filled_fields + 1;
END IF;
```

### Change Avatar Size Limit

Update in `004_create_storage_bucket.sql`:

```sql
INSERT INTO storage.buckets (id, name, public, file_size_limit)
VALUES ('avatars', 'avatars', true, 5242880); -- 5MB
```

And in `src/lib/profile.ts`:

```typescript
if (file.size > 5 * 1024 * 1024) { // 5MB
  return { url: null, error: new Error('File size must be less than 5MB') };
}
```

---

## 🐛 Troubleshooting

### Profile not auto-creating on signup

**Check**:
1. Trigger exists: `SELECT * FROM pg_trigger WHERE tgname = 'on_auth_user_created';`
2. Trigger is enabled
3. RLS allows INSERT for authenticated users

**Fix**:
Re-run `003_create_triggers.sql`

### Avatar upload fails

**Check**:
1. Storage bucket exists: Dashboard → Storage → `avatars`
2. RLS policies on `storage.objects`
3. File size and type validation

**Fix**:
Re-run `004_create_storage_bucket.sql`

### Profile not updating in real-time

**Check**:
1. Supabase Realtime enabled: Dashboard → Database → Replication
2. Enable replication for `profiles` table
3. Browser console for subscription errors

**Fix**:
Enable replication: Dashboard → Database → Replication → `profiles` → Enable

### Type errors

**Regenerate types**:
```bash
npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.types.ts
```

---

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)
- [Supabase Storage](https://supabase.com/docs/guides/storage)
- [Realtime Subscriptions](https://supabase.com/docs/guides/realtime)

---

## ✅ Checklist

Before going to production:

- [ ] All migrations run successfully
- [ ] RLS policies tested and working
- [ ] Storage bucket created with policies
- [ ] Environment variables set in production
- [ ] Test user signup → profile creation flow
- [ ] Test profile update → real-time sync
- [ ] Test avatar upload/delete
- [ ] Test location detection
- [ ] Error handling in all components
- [ ] Loading states in all components
- [ ] Mobile responsiveness verified
- [ ] Profile completion calculation working
- [ ] Last seen tracking (optional) implemented

---

**Created**: December 12, 2025  
**Status**: ✅ Production Ready  
**Version**: 1.0.0
