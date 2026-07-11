# 🚀 Email Verification - Quick Reference

## 📍 URLs

| Purpose | URL | Device |
|---------|-----|--------|
| **Email Link** | `https://asrar.app/auth/verify?token=xxx` | All |
| **Web Callback** | `https://asrar.app/auth/callback` | Desktop |
| **Mobile Deep Link** | `asrar://auth/callback` | Mobile |

## 📂 Files

```
/public/auth/verify.html          ← Email verification redirect page
/app/auth/callback/route.ts       ← Auth callback with profile check
/next.config.js                   ← Routing configuration
```

## 🔄 Quick Test Commands

### Test Verify Page (Desktop)
```bash
# Open in browser
open https://asrar.app/auth/verify?token=test123
```

### Test Mobile Flow (Chrome DevTools)
```bash
1. F12 → Device Toolbar (Ctrl+Shift+M)
2. Select "iPhone 14 Pro"
3. Visit: https://asrar.app/auth/verify?token=test
```

### Test Deep Link (Android)
```bash
adb shell am start -a android.intent.action.VIEW \
  -d "asrar://auth/callback?access_token=test"
```

### Test Deep Link (iOS Simulator)
```bash
xcrun simctl openurl booted "asrar://auth/callback?access_token=test"
```

## 🎯 User Flows

### Mobile → App Opens
```
Email link → /auth/verify → Deep link → Mobile app → Profile/Home
```

### Mobile → App NOT Installed
```
Email link → /auth/verify → Button (2.5s) → Web redirect (6s) → /auth/callback → Profile/Home
```

### Desktop
```
Email link → /auth/verify → /auth/callback → Profile/Home
```

## 🔧 Configuration Checklist

### Supabase Dashboard
- [ ] Site URL: `https://asrar.app`
- [ ] Redirect URLs:
  - [ ] `https://asrar.app/auth/verify`
  - [ ] `https://asrar.app/auth/callback`
  - [ ] `asrar://auth/callback`
- [ ] Email template uses `{{ .ConfirmationURL }}`

### Next.js
- [ ] Rewrite rule in `next.config.js`
- [ ] Environment variables set
- [ ] Dev server restarted

### Mobile App
- [ ] Deep link scheme: `asrar://`
- [ ] Auth callback handler implemented
- [ ] Linking configured

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| 404 on /auth/verify | Restart dev server: `npm run dev` |
| Deep link doesn't work | Verify app installed + scheme configured |
| "no-code" error | Check Supabase email template |
| Profile check fails | Regenerate DB types, check RLS policies |

## 📊 Expected Redirects

| User State | Redirect Destination |
|------------|---------------------|
| **New user, no profile** | `/profile/setup?verified=true` |
| **Existing user, has profile** | `/?verified=true` |
| **Error in verification** | `/auth?error=...` |

## 🔍 Debug Console

Look for these logs in browser console:

```
✅ [Asrār Verify] === Email Verification Started ===
✅ [Asrār Verify] Is Mobile: true/false
✅ [Asrār Verify] Tokens extracted: {hasTokens: true}
✅ [Asrār Verify] Attempting to open mobile app...
```

## 🚀 Deploy Checklist

```bash
# 1. Commit changes
git add .
git commit -m "Add email verification redirect system"

# 2. Push to deploy (Vercel auto-deploys)
git push origin main

# 3. Test on production
curl -I https://asrar.app/auth/verify

# 4. Send test email from Supabase dashboard
# 5. Verify flows on real devices
```

## 📱 Mobile App Setup

### Expo (app.json)
```json
{
  "expo": {
    "scheme": "asrar",
    "ios": {
      "associatedDomains": ["applinks:asrar.app"]
    }
  }
}
```

### React Navigation
```typescript
const linking = {
  prefixes: ['asrar://'],
  config: {
    screens: {
      Auth: {
        screens: {
          Callback: 'auth/callback'
        }
      }
    }
  }
};
```

## 📞 Need Help?

1. Check [EMAIL_VERIFICATION_IMPLEMENTATION.md](./EMAIL_VERIFICATION_IMPLEMENTATION.md) for full docs
2. Review browser console logs
3. Check Supabase dashboard for auth events
4. Test with device emulators first

---

**Last Updated:** December 28, 2024
