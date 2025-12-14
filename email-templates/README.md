# 📧 Asrār Email Templates

Professional email templates for Asrār authentication flows.

## 📁 Templates Included

- `confirm-email.html` - Email confirmation template with Asrār branding

## 🎨 Features

- ✨ Asrār animated logo (8-pointed star)
- 🎨 Gradient branding matching app design
- 📱 Mobile-responsive design
- 🔒 Security notice
- 🌐 Social media links
- ♿ Accessible HTML structure

## 📤 How to Add to Supabase

### Step 1: Go to Email Templates

1. Open [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your **asrar** project
3. Go to **Authentication** → **Email Templates**

### Step 2: Customize Confirmation Email

1. Click on **"Confirm signup"** template
2. **Copy** the entire content from `confirm-email.html`
3. **Paste** it into the "Message (HTML)" field
4. Click **"Save"**

### Step 3: Template Variables

The template uses these Supabase variables:
- `{{ .ConfirmationURL }}` - Auto-replaced with the confirmation link
- `{{ .SiteURL }}` - Your site URL (configured in settings)
- `{{ .Email }}` - User's email address (optional, not used in current template)

### Step 4: Customize (Optional)

You can customize:
- **Social links**: Update Twitter/Instagram URLs (lines 198-206)
- **Colors**: Modify gradient colors in style attributes
- **Text**: Change welcome message and next steps
- **Logo**: Upload to a CDN and replace SVG with `<img>` tag

### 📝 Alternative: Using Image Logo

If you prefer using a hosted image instead of inline SVG:

1. Export logo as PNG (1024x1024)
2. Upload to Supabase Storage or a CDN
3. Replace the `<svg>...</svg>` block with:

```html
<img src="https://your-cdn.com/asrar-logo.png" 
     alt="Asrār Logo" 
     width="120" 
     height="120" 
     style="display: block; margin: 0 auto;" />
```

## 🧪 Testing

1. Sign up with a test email
2. Check inbox for confirmation email
3. Verify logo displays correctly
4. Test confirmation link
5. Check mobile rendering

## 📱 Email Client Support

Tested on:
- ✅ Gmail (Web, iOS, Android)
- ✅ Apple Mail (macOS, iOS)
- ✅ Outlook (Web, Desktop)
- ✅ Yahoo Mail
- ✅ ProtonMail

## 🎨 Customization Tips

### Change Gradient Colors

Replace these color codes:
```css
/* Header gradient */
background: linear-gradient(135deg, #4F46E5 0%, #8B5CF6 50%, #EC4899 100%);

/* Button gradient */
background: linear-gradient(135deg, #4F46E5 0%, #8B5CF6 100%);
```

### Update Logo Colors

Modify the SVG gradient stops:
```html
<stop offset="0%" style="stop-color:#FFFFFF;stop-opacity:1" />
<stop offset="50%" style="stop-color:#F0ABFC;stop-opacity:1" />
<stop offset="100%" style="stop-color:#FFFFFF;stop-opacity:1" />
```

## 📚 Resources

- [Supabase Email Templates Docs](https://supabase.com/docs/guides/auth/auth-email-templates)
- [Email Design Best Practices](https://www.campaignmonitor.com/css/)
- [Can I Email?](https://www.caniemail.com/) - CSS support reference

## 🔧 Troubleshooting

**Logo not showing?**
- Some email clients block SVG. Use PNG fallback.
- Ensure SVG code is properly escaped.

**Links not working?**
- Check Supabase redirect URLs are configured.
- Verify `{{ .ConfirmationURL }}` variable is present.

**Layout broken?**
- Use inline styles only (no external CSS).
- Test in [Litmus](https://www.litmus.com/) or similar tools.

## 📄 License

Part of the Asrār project. All rights reserved.
