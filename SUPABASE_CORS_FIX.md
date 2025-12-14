# Supabase CORS Configuration Fix

## Issue
CORS errors when trying to authenticate from the deployed Vercel site:
```
Access to fetch at 'https://azjgakbhovanweelkezt.supabase.co/auth/v1/signup?redirect_to=https%3A%2F%2Fwww.asrar.app' 
from origin 'https://www.asrar.app' has been blocked by CORS policy
```

## Solution

### Step 1: Configure Supabase Site URLs

1. Go to your Supabase Dashboard: https://app.supabase.com/
2. Select your project: `azjgakbhovanweelkezt`
3. Navigate to: **Authentication** → **URL Configuration**
4. Add the following URLs:

#### Site URL
```
https://www.asrar.app
```

#### Redirect URLs (add all of these)
```
https://www.asrar.app/**
https://www.asrar.app/auth/callback
https://asrar.app/**
https://asrar.app/auth/callback
http://localhost:3000/**
http://localhost:3000/auth/callback
```

### Step 2: Configure Email Templates (Optional but Recommended)

In **Authentication** → **Email Templates**, make sure the redirect URLs use:
```
{{ .SiteURL }}/auth/callback
```

### Step 3: Check Additional Auth Settings

In **Authentication** → **Settings**:
- ✅ Enable email confirmations (if you want)
- ✅ Enable "Secure email change" 
- ✅ Set "JWT expiry limit" to appropriate value (default: 3600)

### Step 4: Verify Environment Variables

Make sure your `.env.local` on Vercel has:
```bash
NEXT_PUBLIC_SUPABASE_URL=https://azjgakbhovanweelkezt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6amdha2Job3ZhbndlZWxrZXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDk5OTYsImV4cCI6MjA4MDYyNTk5Nn0.BL4qJKR3P8sevTOU5xaVGRqrM32cjDox592T7zGkg9E
```

### Step 5: Clear Cache and Redeploy

After making Supabase changes:
1. Clear your browser cache
2. Trigger a redeploy on Vercel (even without code changes)
3. Test the signup flow again

## Testing

After configuration, test:
1. ✅ Sign up with new email
2. ✅ Sign in with existing account
3. ✅ Password reset flow
4. ✅ Email confirmation (if enabled)

## Common Issues

### 502 Bad Gateway
- Check that Supabase project is not paused
- Verify the project URL is correct
- Check Supabase service status: https://status.supabase.com/

### Still Getting CORS Errors
- Wait 5-10 minutes for Supabase configuration to propagate
- Clear browser cache completely
- Try in incognito/private browsing mode
- Check browser console for exact error details

### Authentication Not Persisting
- Verify `persistSession: true` in supabase client config
- Check that cookies are enabled in browser
- Ensure your site is served over HTTPS

## Quick Fix Checklist

- [ ] Added `https://www.asrar.app` to Site URL
- [ ] Added all redirect URLs including wildcards
- [ ] Saved changes in Supabase dashboard
- [ ] Waited 5-10 minutes for propagation
- [ ] Cleared browser cache
- [ ] Tested signup/signin
- [ ] Verified environment variables on Vercel

## Additional Resources

- [Supabase Auth Configuration](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
- [Supabase CORS Documentation](https://supabase.com/docs/guides/api/cors)
- [Next.js Authentication Best Practices](https://nextjs.org/docs/authentication)
