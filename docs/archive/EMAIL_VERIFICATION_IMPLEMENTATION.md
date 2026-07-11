# Email Verification Redirect Implementation

## 📋 Overview

This implementation provides a seamless email verification experience for Asrār users across both web and mobile platforms. When users click verification links in emails, they are intelligently routed to either the mobile app or web application based on their device.

## 🎯 Features

✅ **Device Detection** - Automatically detects iOS, Android, and Desktop devices  
✅ **Deep Linking** - Opens mobile app via `asrar://` scheme on mobile devices  
✅ **Fallback Mechanisms** - Multiple deep link methods with graceful fallbacks  
✅ **Profile Check** - Verifies if user has completed profile setup  
✅ **Smart Routing** - Redirects to profile setup or dashboard based on user state  
✅ **Beautiful UI** - Matches Asrār's purple gradient brand with glassmorphism effects  
✅ **Error Handling** - Comprehensive error handling with user-friendly messages  
✅ **Security** - Token handling without exposure in console logs  

---

## 📁 Files Created/Modified

### 1. `/public/auth/verify.html`
**Purpose:** Email verification redirect page (static HTML)  
**URL:** `https://asrar.app/auth/verify`

**Key Features:**
- Device detection (iOS/Android/Desktop)
- Token extraction from URL parameters
- Deep link attempts (3 different methods)
- Beautiful loading UI with spinner
- Manual "Open App" button fallback
- Automatic web redirect after 6 seconds
- Error handling for missing tokens

### 2. `/app/auth/callback/route.ts`
**Purpose:** Auth callback handler with profile verification  
**URL:** `https://asrar.app/auth/callback`

**Key Features:**
- Exchanges Supabase auth code for session
- Checks if user profile exists in database
- Routes to `/profile/setup` if no profile
- Routes to `/` (home) if profile exists
- Comprehensive error handling
- Support for `next` query parameter override

### 3. `/next.config.js`
**Purpose:** Routing configuration  

**Changes Made:**
- Added rewrite rule for `/auth/verify` → `/auth/verify.html`
- Ensures static HTML file is served at clean URL

---

## 🔄 User Flow

### Mobile Users (iOS/Android)

```
1. User signs up in mobile app
2. Receives verification email
3. Opens email on phone
4. Taps verification link
   ↓
5. Opens: https://asrar.app/auth/verify?token=xxx
   ↓
6. Page detects mobile device
   ↓
7. Attempts to open mobile app (3 methods):
   - Direct window.location redirect
   - Iframe approach (fallback)
   - Meta refresh (additional fallback)
   ↓
8a. App opens → User directed to profile setup or home
    OR
8b. App doesn't open → Shows manual button after 2.5s
    → Redirects to web after 6s
```

### Desktop Users

```
1. User signs up (web or mobile)
2. Receives verification email
3. Opens email on desktop
4. Clicks verification link
   ↓
5. Opens: https://asrar.app/auth/verify?token=xxx
   ↓
6. Page detects desktop device
   ↓
7. Immediately redirects to: /auth/callback
   ↓
8. Callback processes verification
   ↓
9. Checks for user profile
   ↓
10a. No profile → Redirect to /profile/setup?verified=true
     OR
10b. Profile exists → Redirect to /?verified=true
```

---

## 🔧 Configuration

### Supabase Settings

Ensure these settings are configured in your Supabase project:

**Site URL:**
```
https://asrar.app
```

**Redirect URLs (whitelist):**
```
https://asrar.app/auth/verify
https://asrar.app/auth/callback
asrar://auth/callback
```

**Email Template:**

Update your email template to use:
```html
<a href="{{ .ConfirmationURL }}">Verify Email</a>
```

The confirmation URL will automatically point to: `https://asrar.app/auth/verify?token=...`

### Deep Link Configuration (Mobile App)

Ensure your React Native app is configured with:

**Deep Link Scheme:**
```
asrar://
```

**Auth Callback Path:**
```
asrar://auth/callback
```

**Example React Navigation Configuration:**
```typescript
const config = {
  screens: {
    Auth: {
      screens: {
        Callback: 'auth/callback',
      },
    },
  },
};

const linking = {
  prefixes: ['asrar://'],
  config,
};
```

---

## 🧪 Testing Guide

### Test 1: Verify Page Loads

**Desktop:**
```bash
# Open in browser
https://asrar.app/auth/verify
```

**Expected:**
- See loading page with purple gradient background
- See spinner animation
- See "Verifying Your Email" title
- Console shows device detection logs

### Test 2: Desktop Redirect Flow

**Steps:**
1. Open on desktop: `https://asrar.app/auth/verify?token=test123&type=signup`
2. Watch for immediate redirect to `/auth/callback`
3. Check console for logs

**Expected Console Output:**
```
[Asrār Verify] === Email Verification Started ===
[Asrār Verify] User Agent: Mozilla/5.0...
[Asrār Verify] Is Mobile: false
[Asrār Verify] Desktop device detected
[Asrār Verify] Redirecting to web application...
[Asrār Verify] Redirecting to web callback
```

### Test 3: Mobile Deep Link Flow

**Steps:**
1. Send test URL to your phone via email/SMS
2. Click: `https://asrar.app/auth/verify?token=test123&type=signup`
3. Watch for app to open
4. Check fallback button appears after 2.5s
5. Observe web redirect after 6s if app doesn't open

**Expected (if app installed):**
- Page loads briefly
- Mobile app opens automatically
- App processes authentication

**Expected (if app NOT installed):**
- Page loads
- Shows "Opening Asrār app..." message
- Manual button appears after 2.5 seconds
- Redirects to web after 6 seconds

### Test 4: Full Signup Flow

**New User (No Profile):**
```
1. Sign up at /auth with new email
2. Check email inbox
3. Click verification link
4. Should redirect to /profile/setup?verified=true
```

**Existing User (Has Profile):**
```
1. Sign up with existing user email (or reset password)
2. Click verification link
3. Should redirect to /?verified=true
```

### Test 5: Error Handling

**Missing Token:**
```
Visit: https://asrar.app/auth/verify
Expected: Error message "No verification token found..."
```

**Invalid Code in Callback:**
```
Visit: https://asrar.app/auth/callback?code=invalid
Expected: Redirect to /auth?error=email-confirmation-failed
```

### Test 6: Mobile Device Simulation (Chrome DevTools)

**Steps:**
1. Open Chrome DevTools (F12)
2. Click device toolbar (Ctrl+Shift+M)
3. Select "iPhone 14 Pro" or "Pixel 7"
4. Visit: `https://asrar.app/auth/verify?token=test`

**Expected:**
- Mobile flow triggers
- Deep link attempts logged in console
- Manual button appears
- Web redirect happens

---

## 🔍 Debugging

### Console Logs

The verify page provides detailed console logs:

```javascript
// Device detection
[Asrār Verify] === Email Verification Started ===
[Asrār Verify] User Agent: Mozilla/5.0...
[Asrār Verify] Is Mobile: true
[Asrār Verify] Is iOS: true

// Token extraction
[Asrār Verify] Extracting tokens from URL
[Asrār Verify] Search params: ?token=xxx&type=signup
[Asrār Verify] Tokens extracted: {hasTokens: true, type: "signup"}

// Deep link attempts
[Asrār Verify] Attempting to open mobile app...
[Asrār Verify] Method 1: Direct navigation attempted
[Asrār Verify] Method 2: Iframe approach attempted

// Status updates
[Asrār Verify] Opening Asrār app...
[Asrār Verify] App did not open, redirecting to web callback
```

### Common Issues & Solutions

**Issue 1: /auth/verify shows 404**
- **Cause:** Rewrite rule not applied
- **Solution:** Restart dev server: `npm run dev`
- **Verify:** Check `next.config.js` has rewrites section

**Issue 2: Deep link doesn't open app**
- **Cause:** App not installed or deep link not configured
- **Solution:** 
  - Verify app is installed on device
  - Check React Native linking configuration
  - Test deep link with: `adb shell am start -a android.intent.action.VIEW -d "asrar://auth/callback"`

**Issue 3: Callback shows "no-code" error**
- **Cause:** PKCE flow requires code parameter
- **Solution:** Verify Supabase email template uses `{{ .ConfirmationURL }}`
- **Check:** Email link should have `?token=` or `#access_token=`

**Issue 4: Profile check fails**
- **Cause:** Database types mismatch or table permissions
- **Solution:** 
  - Regenerate types: `supabase gen types typescript`
  - Check RLS policies on `profiles` table
  - Verify column names match: `id`, `full_name`, `date_of_birth`

**Issue 5: CSP blocks inline scripts**
- **Cause:** Content Security Policy restrictions
- **Solution:** The verify.html is static and should work, but if issues persist, check browser console for CSP violations

---

## 🔒 Security Considerations

### Token Handling
- ✅ Tokens are never logged in production console (masked with `***`)
- ✅ Tokens passed via URL are standard for OAuth/PKCE flow
- ✅ HTTPS enforces encryption in transit
- ✅ Tokens are short-lived and single-use

### Best Practices Applied
- ✅ PKCE flow for authentication
- ✅ Server-side token exchange (not exposed to client)
- ✅ Secure session storage in Supabase
- ✅ RLS policies on database tables
- ✅ CORS properly configured
- ✅ CSP headers prevent XSS attacks

---

## 📱 Mobile App Integration

### Required Changes in React Native App

**1. Configure Deep Linking**

```typescript
// app.json (Expo)
{
  "expo": {
    "scheme": "asrar",
    "ios": {
      "bundleIdentifier": "com.asrar.app",
      "associatedDomains": ["applinks:asrar.app"]
    },
    "android": {
      "package": "com.asrar.app",
      "intentFilters": [
        {
          "action": "VIEW",
          "data": {
            "scheme": "asrar"
          }
        }
      ]
    }
  }
}
```

**2. Handle Auth Callback in App**

```typescript
// App.tsx or AuthCallback.tsx
import { useEffect } from 'react';
import { useURL } from 'expo-linking';
import { supabase } from './lib/supabase';

export function AuthCallbackHandler() {
  const url = useURL();

  useEffect(() => {
    if (url && url.includes('auth/callback')) {
      handleAuthCallback(url);
    }
  }, [url]);

  const handleAuthCallback = async (url: string) => {
    try {
      // Extract tokens from URL
      const urlObj = new URL(url);
      const accessToken = urlObj.searchParams.get('access_token');
      const refreshToken = urlObj.searchParams.get('refresh_token');

      if (accessToken && refreshToken) {
        // Set session in Supabase
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          console.error('Error setting session:', error);
          // Show error to user
          return;
        }

        // Check if user has profile
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', (await supabase.auth.getUser()).data.user?.id)
          .single();

        // Navigate to appropriate screen
        if (!profile) {
          navigation.navigate('ProfileSetup');
        } else {
          navigation.navigate('Home');
        }
      }
    } catch (error) {
      console.error('Error handling auth callback:', error);
    }
  };

  return null;
}
```

---

## 📊 Success Metrics

Implementation is successful when:

✅ `/auth/verify` page loads without errors  
✅ Device detection works correctly (test on iOS, Android, Desktop)  
✅ Deep links open mobile app on devices with app installed  
✅ Fallback buttons appear on mobile after 2.5 seconds  
✅ Desktop users redirect to web callback immediately  
✅ Auth callback establishes session correctly  
✅ Profile check logic determines correct redirect path  
✅ New users land on `/profile/setup`  
✅ Existing users land on `/` (home)  
✅ No console errors in any flow  
✅ Error messages display for edge cases (missing tokens, etc.)  

---

## 🚀 Deployment Checklist

Before deploying to production:

### Supabase Configuration
- [ ] Site URL set to `https://asrar.app`
- [ ] Redirect URLs whitelisted (verify, callback, mobile deep link)
- [ ] Email template updated with `{{ .ConfirmationURL }}`
- [ ] PKCE flow enabled
- [ ] RLS policies on `profiles` table configured

### Next.js Configuration
- [ ] `next.config.js` includes rewrites for `/auth/verify`
- [ ] Environment variables set:
  - [ ] `NEXT_PUBLIC_SUPABASE_URL`
  - [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Testing
- [ ] Test on actual iOS device
- [ ] Test on actual Android device  
- [ ] Test on desktop (Chrome, Safari, Firefox)
- [ ] Test with mobile app installed
- [ ] Test with mobile app NOT installed
- [ ] Test error cases (missing token, invalid code)

### Mobile App
- [ ] Deep link scheme configured (`asrar://`)
- [ ] Auth callback handler implemented
- [ ] App published to App Store / Play Store
- [ ] Universal Links configured (iOS)
- [ ] App Links configured (Android)

### DNS & Hosting
- [ ] Domain points to Vercel/hosting provider
- [ ] SSL certificate active
- [ ] HTTPS enforced

---

## 🛠️ Local Development

### Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open in browser
open http://localhost:3000/auth/verify
```

### Testing Email Verification Locally

**Option 1: Use Supabase Local Auth UI**
```bash
# Go to Supabase dashboard
# Navigate to Authentication > Users
# Click user > Send verification email
```

**Option 2: Manual URL Construction**
```
http://localhost:3000/auth/verify?token=test-token-123&type=signup
```

**Option 3: Use ngrok for Mobile Testing**
```bash
# Install ngrok
npm install -g ngrok

# Start Next.js
npm run dev

# In another terminal, expose localhost
ngrok http 3000

# Use ngrok URL for testing
# Update Supabase redirect URLs to include ngrok URL
```

---

## 📞 Support

### Common Questions

**Q: Why use static HTML instead of a React page?**  
A: Static HTML ensures the page loads instantly without JavaScript bundle loading, critical for immediate device detection and deep link attempts.

**Q: Can I customize the UI?**  
A: Yes! Edit `/public/auth/verify.html` - all styles are inline. Modify colors, text, or animation to match your brand.

**Q: What if deep link fails?**  
A: The page has 3 fallback mechanisms:
1. Manual "Open App" button (shown after 2.5s)
2. Automatic web redirect (after 6s)
3. Error messages for missing tokens

**Q: How do I track verification success?**  
A: Check the `verified=true` query parameter on redirect URLs:
- Profile setup: `/profile/setup?verified=true`
- Home: `/?verified=true`

### Need Help?

- Check browser console for detailed logs
- Verify Supabase dashboard for auth events
- Test with `curl` or Postman for API debugging
- Review Supabase logs for backend errors

---

## 📝 Version History

**v1.0.0** - Initial Implementation
- Email verification redirect page
- Auth callback with profile checks
- Device detection and deep linking
- Comprehensive error handling
- Beautiful branded UI

---

## 🎨 Design Assets

The verification page uses Asrār's brand colors:

- **Background Gradient:** `#0F172A` → `#1E1B4B`
- **Primary Purple:** `#7C3AED`
- **Secondary Purple:** `#8B5CF6`
- **Pink Accent:** `#EC4899`
- **Text White:** `#FFFFFF`
- **Text Gray:** `#9CA3AF`

Logo: Arabic letter "أ" (Alif) in gradient circle

---

## 📄 License

This implementation is part of the Asrār application. All rights reserved.

---

**Last Updated:** December 28, 2024  
**Maintained by:** Asrār Development Team
