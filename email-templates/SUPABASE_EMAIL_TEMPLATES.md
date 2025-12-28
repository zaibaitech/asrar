# Supabase Email Templates for Asrār

## 📧 Email Verification Template

### How to Update in Supabase

1. Go to **Supabase Dashboard**
2. Navigate to **Authentication** → **Email Templates**
3. Select **Confirm signup**
4. Replace the template with the one below

---

## ✅ Confirm Signup Template

### Subject Line
```
Verify your email - Asrār
```

### HTML Body

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - Asrār</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif; background-color: #0F172A;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%); padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Container -->
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: rgba(30, 27, 75, 0.8); border-radius: 16px; padding: 40px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); border: 1px solid rgba(124, 58, 237, 0.2);">
          
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #7C3AED, #EC4899); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; color: white; box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);">
                أ
              </div>
            </td>
          </tr>

          <!-- Welcome Message -->
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; background: linear-gradient(135deg, #FFFFFF, #C4B5FD); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                Welcome to Asrār! 🌙
              </h1>
            </td>
          </tr>

          <!-- Body Text -->
          <tr>
            <td style="padding-bottom: 30px; color: #D1D5DB; font-size: 16px; line-height: 1.6; text-align: center;">
              <p style="margin: 0 0 20px 0;">
                Thank you for joining our community of spiritual seekers. We're excited to guide you on your journey through ʿIlm al-Ḥurūf.
              </p>
              <p style="margin: 0 0 20px 0;">
                Please verify your email address by clicking the button below:
              </p>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <a href="{{ .ConfirmationURL }}" 
                 style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #7C3AED, #8B5CF6); color: white; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);">
                Verify Email Address
              </a>
            </td>
          </tr>

          <!-- Alternative Link -->
          <tr>
            <td style="padding-bottom: 30px; color: #9CA3AF; font-size: 14px; text-align: center; border-top: 1px solid rgba(124, 58, 237, 0.2); padding-top: 30px;">
              <p style="margin: 0 0 15px 0;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>
              <p style="margin: 0; word-break: break-all;">
                <a href="{{ .ConfirmationURL }}" style="color: #8B5CF6; text-decoration: none;">
                  {{ .ConfirmationURL }}
                </a>
              </p>
            </td>
          </tr>

          <!-- Security Notice -->
          <tr>
            <td style="padding: 20px; background-color: rgba(124, 58, 237, 0.1); border-radius: 8px; border: 1px solid rgba(124, 58, 237, 0.3);">
              <p style="margin: 0; color: #C4B5FD; font-size: 13px; text-align: center;">
                🔒 This link will expire in 24 hours for your security.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top: 30px; color: #6B7280; font-size: 13px; text-align: center;">
              <p style="margin: 0 0 10px 0;">
                If you didn't create an account with Asrār, please ignore this email.
              </p>
              <p style="margin: 0;">
                © 2024 Asrār. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 🔄 Password Reset Template (Optional)

### Subject Line
```
Reset your password - Asrār
```

### HTML Body

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password - Asrār</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif; background-color: #0F172A;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background: linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%); padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: rgba(30, 27, 75, 0.8); border-radius: 16px; padding: 40px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4); border: 1px solid rgba(124, 58, 237, 0.2);">
          
          <!-- Logo -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <div style="width: 80px; height: 80px; background: linear-gradient(135deg, #7C3AED, #EC4899); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 40px; font-weight: bold; color: white; box-shadow: 0 10px 30px rgba(124, 58, 237, 0.3);">
                أ
              </div>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td align="center" style="padding-bottom: 20px;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; background: linear-gradient(135deg, #FFFFFF, #C4B5FD); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                Reset Your Password 🔑
              </h1>
            </td>
          </tr>

          <!-- Body Text -->
          <tr>
            <td style="padding-bottom: 30px; color: #D1D5DB; font-size: 16px; line-height: 1.6; text-align: center;">
              <p style="margin: 0 0 20px 0;">
                We received a request to reset your password for your Asrār account.
              </p>
              <p style="margin: 0 0 20px 0;">
                Click the button below to choose a new password:
              </p>
            </td>
          </tr>

          <!-- CTA Button -->
          <tr>
            <td align="center" style="padding-bottom: 30px;">
              <a href="{{ .ConfirmationURL }}" 
                 style="display: inline-block; padding: 16px 40px; background: linear-gradient(135deg, #7C3AED, #8B5CF6); color: white; text-decoration: none; border-radius: 12px; font-size: 16px; font-weight: 600; box-shadow: 0 4px 20px rgba(124, 58, 237, 0.4);">
                Reset Password
              </a>
            </td>
          </tr>

          <!-- Alternative Link -->
          <tr>
            <td style="padding-bottom: 30px; color: #9CA3AF; font-size: 14px; text-align: center; border-top: 1px solid rgba(124, 58, 237, 0.2); padding-top: 30px;">
              <p style="margin: 0 0 15px 0;">
                If the button doesn't work, copy and paste this link:
              </p>
              <p style="margin: 0; word-break: break-all;">
                <a href="{{ .ConfirmationURL }}" style="color: #8B5CF6; text-decoration: none;">
                  {{ .ConfirmationURL }}
                </a>
              </p>
            </td>
          </tr>

          <!-- Security Notice -->
          <tr>
            <td style="padding: 20px; background-color: rgba(239, 68, 68, 0.1); border-radius: 8px; border: 1px solid rgba(239, 68, 68, 0.3);">
              <p style="margin: 0; color: #FCA5A5; font-size: 13px; text-align: center;">
                ⚠️ This link will expire in 1 hour for your security.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top: 30px; color: #6B7280; font-size: 13px; text-align: center;">
              <p style="margin: 0 0 10px 0;">
                If you didn't request a password reset, please ignore this email or contact support if you have concerns.
              </p>
              <p style="margin: 0;">
                © 2024 Asrār. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 📝 Important Notes

### ⚠️ Template Variables

Supabase provides these variables for email templates:

- `{{ .ConfirmationURL }}` - The verification/reset link (REQUIRED)
- `{{ .Token }}` - The raw token (not recommended to use directly)
- `{{ .Email }}` - The user's email address
- `{{ .SiteURL }}` - Your site URL from Supabase settings

### ✅ Best Practices

1. **Always use {{ .ConfirmationURL }}** - This automatically includes the correct redirect URL
2. **Test in mobile email clients** - Gmail, Outlook, Apple Mail
3. **Keep images minimal** - Some email clients block images
4. **Use inline styles** - External CSS doesn't work in emails
5. **Include plain text version** - For accessibility and spam filters

### 🔧 Configuration Steps

**Step 1: Update Site URL**
```
Dashboard → Settings → Auth → Site URL
Set to: https://asrar.app
```

**Step 2: Add Redirect URLs**
```
Dashboard → Settings → Auth → Redirect URLs
Add:
- https://asrar.app/auth/verify
- https://asrar.app/auth/callback
- asrar://auth/callback
```

**Step 3: Update Email Template**
```
Dashboard → Authentication → Email Templates
Select template → Paste HTML → Save
```

**Step 4: Test Email**
```
Dashboard → Authentication → Users
Add test user → Check email
```

---

## 🧪 Testing the Template

### Send Test Email

1. Go to Supabase Dashboard
2. Navigate to **Authentication** → **Users**
3. Click **Invite User**
4. Enter test email
5. Check inbox

### Expected Email

- ✅ Beautiful purple gradient design
- ✅ Asrār logo (Arabic أ)
- ✅ Clear "Verify Email Address" button
- ✅ Alternative link for copy/paste
- ✅ Security notice about expiration
- ✅ Responsive on mobile devices

### Verify Link Format

The email link should look like:
```
https://asrar.app/auth/verify?token=xxx&type=signup
```

NOT like:
```
https://azjgakbhovanweelkezt.supabase.co/auth/v1/verify?...
```

If you see the Supabase domain, update your **Site URL** in Supabase settings.

---

## 🎨 Customization

### Change Colors

Replace these hex values in the template:

| Element | Current | Your Color |
|---------|---------|------------|
| Background Gradient Start | `#0F172A` | _________ |
| Background Gradient End | `#1E1B4B` | _________ |
| Primary Purple | `#7C3AED` | _________ |
| Secondary Purple | `#8B5CF6` | _________ |
| Pink Accent | `#EC4899` | _________ |

### Change Logo

Replace the `أ` character with:
- Your own Arabic character
- An emoji
- Or add an `<img>` tag with your logo URL

### Add Bilingual Support

For Arabic translations, add RTL sections:

```html
<tr>
  <td dir="rtl" style="color: #D1D5DB; font-size: 16px; text-align: right;">
    <p>شكراً لانضمامك إلى مجتمعنا من الباحثين الروحيين...</p>
  </td>
</tr>
```

---

## 📱 Mobile Optimization

The template is already mobile-responsive, but you can test:

### Gmail App (iOS/Android)
- Renders inline styles correctly
- Buttons are tappable
- Links work on first tap

### Apple Mail (iOS)
- Full CSS support
- Renders perfectly
- Deep links may open Safari first

### Outlook Mobile
- Limited CSS support
- Buttons may render as links
- Test thoroughly

---

## 🔐 Security Notes

### Link Expiration

By default, Supabase links expire in:
- Email verification: **24 hours**
- Password reset: **1 hour**

To change:
```
Dashboard → Settings → Auth → Email Link Expiry
```

### Rate Limiting

Supabase automatically rate limits:
- Max 4 emails per hour per email address
- Prevents spam and abuse
- Returns error if exceeded

---

## ✅ Checklist

Before going live:

- [ ] Email template updated in Supabase
- [ ] Site URL set to production domain
- [ ] Redirect URLs whitelisted
- [ ] Test email sent and received
- [ ] Email link opens verify page
- [ ] Verify page redirects correctly
- [ ] Mobile deep link works (if app installed)
- [ ] Desktop flow completes successfully
- [ ] Error cases handled gracefully

---

**Last Updated:** December 28, 2024  
**Compatible with:** Supabase Auth v2
