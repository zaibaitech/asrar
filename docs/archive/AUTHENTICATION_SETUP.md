# Supabase Authentication Setup Guide

## Overview

Optional Supabase authentication has been integrated into the Asrār Everyday application. Users can choose to create an account or use the app without authentication.

## Features

✅ **Optional Authentication** - The app works perfectly without an account
✅ **Email/Password Sign Up & Sign In**
✅ **Password Reset Flow**
✅ **User Menu with Sign Out**
✅ **Persistent Sessions**
✅ **Clean UI Integration**

## Setup Instructions

### 1. Create a Supabase Project

1. Go to [https://app.supabase.com/](https://app.supabase.com/)
2. Create a new account or sign in
3. Click "New Project"
4. Choose an organization and fill in project details:
   - **Name**: asrar-everyday (or your preferred name)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest to your users
   - **Pricing Plan**: Free tier is sufficient to start

### 2. Get Your Supabase Credentials

1. Once your project is created, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (e.g., `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (this is safe to use in the browser)

### 3. Configure Environment Variables

1. Create a `.env.local` file in the root of your project (or use `.env`):

```bash
# Supabase Configuration (Optional - for user authentication)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-url.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

2. Replace the placeholder values with your actual Supabase credentials

### 4. Configure Email Templates (Optional but Recommended)

1. In Supabase Dashboard, go to **Authentication** → **Email Templates**
2. Customize the following templates:
   - **Confirm signup**: Sent when users create an account
   - **Reset password**: Sent when users request password reset
   - **Magic Link**: If you want to enable passwordless login

### 5. Configure Authentication Settings

1. Go to **Authentication** → **Settings**
2. Configure the following:
   - **Site URL**: Your production URL (e.g., `https://asrar-everyday.vercel.app`)
   - **Redirect URLs**: Add your URLs:
     - `http://localhost:3000/**` (for development)
     - `https://your-domain.com/**` (for production)

### 6. Test the Integration

1. Start your development server:
```bash
npm run dev
```

2. Open your app and look for the "Sign In" button in the header
3. Try creating an account with a test email
4. Check your email for the confirmation link
5. Test sign in, sign out, and password reset flows

## File Structure

```
src/
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── contexts/
│   └── AuthContext.tsx          # Authentication context and hooks
└── components/
    ├── AuthModal.tsx            # Sign in/Sign up modal
    └── UserMenu.tsx             # User menu dropdown

app/
└── layout.tsx                   # AuthProvider wrapper added
```

## Using Authentication in Your Code

### Get Current User

```tsx
import { useAuth } from '@/src/contexts/AuthContext';

function MyComponent() {
  const { user, isLoading, isConfigured } = useAuth();
  
  if (!isConfigured) {
    // Auth is not set up
    return <div>Auth not configured</div>;
  }
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (user) {
    return <div>Welcome, {user.email}</div>;
  }
  
  return <div>Not signed in</div>;
}
```

### Sign In/Sign Up/Sign Out

```tsx
import { useAuth } from '@/src/contexts/AuthContext';

function MyComponent() {
  const { signInWithEmail, signUpWithEmail, signOut } = useAuth();
  
  const handleSignIn = async () => {
    const { error } = await signInWithEmail('user@example.com', 'password');
    if (error) {
      console.error('Error signing in:', error.message);
    }
  };
  
  // Similar for signUpWithEmail and signOut
}
```

## Database Setup (Optional - for User Data)

If you want to store user-specific data (like saved calculations, favorites, etc.):

### 1. Create Tables

In Supabase SQL Editor, run:

```sql
-- Enable Row Level Security
alter table auth.users enable row level security;

-- Create a user_profiles table
create table public.user_profiles (
  id uuid references auth.users on delete cascade primary key,
  email text,
  full_name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on user_profiles
alter table public.user_profiles enable row level security;

-- Create policy: Users can view their own profile
create policy "Users can view own profile"
  on public.user_profiles for select
  using ( auth.uid() = id );

-- Create policy: Users can update their own profile
create policy "Users can update own profile"
  on public.user_profiles for update
  using ( auth.uid() = id );

-- Create a saved_calculations table (example)
create table public.saved_calculations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users on delete cascade not null,
  input_text text not null,
  kabir integer,
  saghir integer,
  hadath_element text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS on saved_calculations
alter table public.saved_calculations enable row level security;

-- Create policies for saved_calculations
create policy "Users can view own calculations"
  on public.saved_calculations for select
  using ( auth.uid() = user_id );

create policy "Users can insert own calculations"
  on public.saved_calculations for insert
  with check ( auth.uid() = user_id );

create policy "Users can delete own calculations"
  on public.saved_calculations for delete
  using ( auth.uid() = user_id );
```

### 2. Use in Your App

```tsx
import { supabase } from '@/src/lib/supabase';
import { useAuth } from '@/src/contexts/AuthContext';

function SaveCalculation() {
  const { user } = useAuth();
  
  const saveCalculation = async (data) => {
    if (!user || !supabase) return;
    
    const { error } = await supabase
      .from('saved_calculations')
      .insert({
        user_id: user.id,
        input_text: data.input,
        kabir: data.kabir,
        saghir: data.saghir,
        hadath_element: data.element,
      });
      
    if (error) {
      console.error('Error saving:', error);
    }
  };
  
  return <button onClick={saveCalculation}>Save</button>;
}
```

## Security Best Practices

1. ✅ **Never commit `.env.local` or `.env` files** - They're in `.gitignore`
2. ✅ **Use Row Level Security (RLS)** - Always enable RLS on tables
3. ✅ **Validate on the server** - Don't trust client-side validation alone
4. ✅ **Use the anon key** - Never expose the service role key in the browser
5. ✅ **Set up proper redirect URLs** - Prevent authentication bypass

## Troubleshooting

### "Invalid API key" Error
- Check that your environment variables are set correctly
- Make sure you're using the `anon` key, not the `service_role` key
- Restart your development server after adding environment variables

### Email Confirmation Not Received
- Check your spam folder
- Verify email templates are configured in Supabase
- Check the Supabase logs for email delivery issues

### Redirect Not Working
- Verify redirect URLs are configured in Supabase Auth Settings
- Check that your Site URL is set correctly

### Authentication Not Showing
- The authentication UI only shows if Supabase is configured
- Check that `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are set
- Check browser console for any errors

## Next Steps

1. **Customize Email Templates** - Make them match your brand
2. **Add Social Providers** - Enable Google, GitHub, etc. in Supabase
3. **Implement User Profiles** - Let users customize their experience
4. **Save User Data** - Store calculations, favorites, preferences
5. **Add Premium Features** - Gate features behind authentication

## Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Docs](https://supabase.com/docs/guides/auth)
- [Next.js Integration Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Row Level Security](https://supabase.com/docs/guides/auth/row-level-security)

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Review the Supabase logs in the dashboard
3. Verify your environment variables are correct
4. Ensure your Supabase project is active (not paused)
