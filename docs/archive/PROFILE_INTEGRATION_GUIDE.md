# 🎨 Profile UI Integration Guide

## Current Status

✅ **Created** (Ready to Use):
- ✅ 4 UI Components (`ProfileSetup`, `ProfileView`, `ProfileEdit`, `ProfilePictureUpload`)
- ✅ 5 Custom Hooks (`useProfile`, `useUpdateProfile`, `useAvatarUpload`, etc.)
- ✅ Database migrations (all 4 completed)
- ✅ TypeScript types
- ✅ Utility functions

❌ **NOT Yet Integrated** into your app pages

---

## 🚀 How to Integrate Profile Components

### Option 1: Add Profile Setup After Signup (Recommended)

Modify your `AuthModal.tsx` to show profile setup after successful signup:

```tsx
// In AuthModal.tsx, after successful signup:
else if (mode === 'signup') {
  const { error } = await signUpWithEmail(email, password);
  if (error) {
    setError(error.message || 'Failed to create account');
  } else {
    // Instead of just showing success message:
    setSuccess('Account created! Setting up your profile...');
    setTimeout(() => {
      onClose();
      // Redirect to profile setup page or show ProfileSetup modal
      window.location.href = '/profile/setup';
    }, 1500);
  }
}
```

### Option 2: Create Profile Pages

Create these new pages:

#### 1. Profile Setup Page
**File:** `app/profile/setup/page.tsx`

```tsx
'use client';

import { useRouter } from 'next/navigation';
import ProfileSetup from '@/src/components/ProfileSetup';

export default function ProfileSetupPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12">
      <ProfileSetup 
        onComplete={() => router.push('/dashboard')}
        skipEnabled={true}
      />
    </div>
  );
}
```

#### 2. Profile View Page
**File:** `app/profile/page.tsx`

```tsx
'use client';

import ProfileView from '@/src/components/ProfileView';

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <ProfileView />
      </div>
    </div>
  );
}
```

#### 3. Profile Edit Page
**File:** `app/profile/edit/page.tsx`

```tsx
'use client';

import { useRouter } from 'next/navigation';
import ProfileEdit from '@/src/components/ProfileEdit';

export default function ProfileEditPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <ProfileEdit onCancel={() => router.push('/profile')} />
      </div>
    </div>
  );
}
```

### Option 3: Auto-Fill Forms with Profile Data

Use profile data anywhere in your app:

```tsx
'use client';

import { useProfile } from '@/src/hooks/useProfile';

export default function SomeFormComponent() {
  const { profile, isLoading } = useProfile();

  if (isLoading) return <div>Loading...</div>;

  return (
    <form>
      <input 
        type="text" 
        defaultValue={profile?.full_name || ''} 
        placeholder="Full Name"
      />
      <input 
        type="text" 
        defaultValue={profile?.location_name || ''} 
        placeholder="Location"
      />
      {/* Auto-filled with saved profile data! */}
    </form>
  );
}
```

### Option 4: Add to Navigation Menu

Update your `UserMenu.tsx` to include profile link:

```tsx
// Add this to your UserMenu component
<Link href="/profile" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700">
  My Profile
</Link>
```

---

## ✅ Quick Integration Checklist

- [ ] Create `app/profile/setup/page.tsx` (Profile setup page)
- [ ] Create `app/profile/page.tsx` (Profile view page)
- [ ] Create `app/profile/edit/page.tsx` (Profile edit page)
- [ ] Update `AuthModal.tsx` to redirect to `/profile/setup` after signup
- [ ] Add "My Profile" link to navigation menu
- [ ] Test: Signup → Profile Setup → Profile View → Profile Edit
- [ ] Enable Realtime in Supabase Dashboard (Database → Replication → profiles → Enable)

---

## 🧪 Testing Flow

1. **Sign up a new user**
2. **Auto-redirect to `/profile/setup`**
3. **Complete 4-step profile wizard**
4. **View profile at `/profile`**
5. **Edit profile at `/profile/edit`**
6. **Check Supabase Dashboard**: Table Editor → profiles (should see 1 row)

---

## 📦 What You Have vs What's Missing

| Component | Status | Location | Integrated? |
|-----------|--------|----------|-------------|
| ProfileSetup | ✅ Created | `src/components/ProfileSetup.tsx` | ❌ No page yet |
| ProfileView | ✅ Created | `src/components/ProfileView.tsx` | ❌ No page yet |
| ProfileEdit | ✅ Created | `src/components/ProfileEdit.tsx` | ❌ No page yet |
| ProfilePictureUpload | ✅ Created | `src/components/ProfilePictureUpload.tsx` | ✅ Used in other components |
| useProfile hook | ✅ Created | `src/hooks/useProfile.ts` | ❌ Not imported anywhere |
| Database | ✅ Migrations run | Supabase | ✅ Ready |
| Auth | ✅ Working | `src/components/AuthModal.tsx` | ✅ Yes |

---

## 🎯 Recommended Next Step

**Create the 3 profile pages** (setup, view, edit) using the templates above. This takes ~5 minutes and makes all your components accessible!

**Command to create all pages at once:**

```bash
# Create profile directory structure
mkdir -p app/profile/setup app/profile/edit

# Then create the 3 page.tsx files with the templates above
```

Want me to create these pages for you?
