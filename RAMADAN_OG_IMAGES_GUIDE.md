# Ramadan Challenge Open Graph Images Guide

## Overview

This guide provides specifications for creating Open Graph (OG) images for Ramadan challenge deep links. These images are displayed when users share challenge links on social media platforms like WhatsApp, Twitter, Facebook, and LinkedIn.

## Technical Specifications

- **Dimensions**: 1200×630px (landscape)
- **Format**: JPG (optimized for web)
- **File size**: Aim for under 300KB
- **Color mode**: RGB
- **Location**: `/public/og/` directory

## Required Images

Create the following 6 images (used for both English and French):

1. `/public/og/salawat.jpg` — Ṣalawāt Challenge
2. `/public/og/istighfar.jpg` — Istighfār Challenge
3. `/public/og/divine-name.jpg` — Divine Name Challenge
4. `/public/og/prophetic-names.jpg` — 201 Prophetic Names Challenge
5. `/public/og/custom.jpg` — Custom Dhikr Challenge
6. `/public/og/default.jpg` — Default Ramadan page (no specific challenge)

**Language Note**: The same OG image is used for both English and French since the Arabic text is universal. Only the meta tag titles and descriptions change based on the `&lang=fr` parameter.

## Visual Design Guidelines

### Layout Structure

Each OG image should follow this layout:

```
┌─────────────────────────────────────────────────┐
│  🌙 Asrār Logo/Branding (top-left)              │
│                                                  │
│         ┌─────────────────────────┐              │
│         │  Arabic Text (Large)    │              │
│         │  Bismillāh or Dhikr     │              │
│         └─────────────────────────┘              │
│                                                  │
│         Transliteration (Medium)                 │
│                                                  │
│         English Translation (Small)              │
│                                                  │
│  "Ramadan Challenge" Badge (bottom-right)        │
└─────────────────────────────────────────────────┘
```

### Color Palette

Use warm, Ramadan-appropriate colors:

- **Primary**: Amber/Gold (#f59e0b, #d97706)
- **Secondary**: Deep orange (#ea580c, #c2410c)
- **Accent**: Teal/Turquoise (#14b8a6, #0d9488)
- **Background**: Gradient from cream to light amber (#fef3c7 to #fed7aa)
- **Text**: Dark brown/charcoal (#1c1917, #292524)
- **Arabic text**: Keep high contrast for readability

### Typography

- **Arabic Text**: Use a clear, readable Arabic font like:
  - Amiri
  - Scheherazade New
  - Traditional Arabic
  - Noto Naskh Arabic
- **Transliteration**: Use a serif font (e.g., Crimson Text, Merriweather)
- **English**: Use a clean sans-serif (e.g., Inter, Plus Jakarta Sans)
- **Branding**: Match the Asrār logo font

## Content for Each Challenge

### 1. Ṣalawāt Challenge (`/public/og/salawat.jpg`)

**Arabic Text** (Large, centered):
```
صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ
```

**Transliteration** (Medium):
```
Ṣallā Llāhu ʿalayhi wa-sallam
```

**English** (Small):
```
Blessings and peace be upon him
```

**Badge** (Bottom-right):
```
Ṣalawāt Challenge • Asrār
```

**Theme**: Use gold and teal colors with a soft glow around the Arabic text

---

### 2. Istighfār Challenge (`/public/og/istighfar.jpg`)

**Arabic Text** (Large, centered):
```
أَسْتَغْفِرُ اللهَ
```

**Transliteration** (Medium):
```
Astaghfiru Llāh
```

**English** (Small):
```
I seek forgiveness from Allah
```

**Badge** (Bottom-right):
```
Istighfār Challenge • Asrār
```

**Theme**: Use gentle greens and blues to convey peace and renewal

---

### 3. Divine Name Challenge (`/public/og/divine-name.jpg`)

**Arabic Text** (Large, centered):
```
الرَّحْمَٰنُ الرَّحِيمُ
```

**Transliteration** (Medium):
```
Ar-Raḥmān Ar-Raḥīm
```

**English** (Small):
```
The Most Merciful, The Most Compassionate
```

**Badge** (Bottom-right):
```
Divine Names • Asrār
```

**Theme**: Rich purple and gold with elegant styling, emphasizing divine majesty

---

### 4. Prophetic Names Challenge (`/public/og/prophetic-names.jpg`)

**Arabic Text** (Large, centered):
```
ٱلنَّبِيُّ ٱلْأُمِّيُّ
```

**Transliteration** (Medium):
```
An-Nabiyyu l-Ummiyy
```

**English** (Small):
```
The Unlettered Prophet
```

**Badge** (Bottom-right):
```
201 Names • Asrār
```

**Theme**: Deep emerald and gold, with subtle geometric Islamic patterns

**Additional Note**: Add subtle text "Dalāʾilu l-Khayrāt" in small font

---

### 5. Custom Challenge (`/public/og/custom.jpg`)

**Arabic Text** (Large, centered):
```
ذِكْرُ اللهِ
```

**Transliteration** (Medium):
```
Dhikru Llāh
```

**English** (Small):
```
Remembrance of Allah
```

**Badge** (Bottom-right):
```
Custom Dhikr • Asrār
```

**Theme**: Versatile gradient with warm tones, welcoming and personal feel

---

### 6. Default Ramadan Page (`/public/og/default.jpg`)

**Arabic Text** (Large, centered):
```
رَمَضَانَ مُبَارَك
```

**Transliteration** (Medium):
```
Ramaḍān Mubārak
```

**English** (Small):
```
Blessed Ramadan
```

**Badge** (Bottom-right):
```
Spiritual Challenges • Asrār
```

**Theme**: Celebratory Ramadan colors with crescent moon and star motifs

---

## Branding Elements

### Logo Placement

- **Position**: Top-left corner
- **Size**: ~120-150px wide
- **Padding**: 40px from edges
- **Style**: Use the Asrār logo SVG with optional drop shadow for depth

### Challenge Badge

- **Position**: Bottom-right corner
- **Style**: Rounded rectangle or pill shape
- **Background**: Semi-transparent white/cream (80% opacity)
- **Border**: 2px solid accent color
- **Padding**: 12px horizontal, 8px vertical
- **Font**: Medium weight, ~16-18px

## Design Tips

### Visual Hierarchy

1. **Most prominent**: Arabic text (the dhikr itself)
2. **Secondary**: Transliteration (helps non-Arabic readers)
3. **Tertiary**: English translation
4. **Supporting**: Logo and badge

### Contrast & Readability

- Ensure the Arabic text has a contrast ratio of at least 4.5:1 with the background
- Add subtle shadows or glows to improve legibility on social media previews
- Test images at smaller sizes (Facebook preview is ~476×249px)

### Cultural Sensitivity

- Keep designs respectful and dignified
- Avoid overly decorative or "orientalist" stereotypes
- Focus on clarity and spiritual beauty
- Ensure proper Arabic diacritical marks (tashkīl)

## Creating the Images

### Tools Recommended

- **Figma** (free, web-based): Great for prototyping and exporting
- **Canva** (template-based): Quick and beginner-friendly
- **Adobe Photoshop/Illustrator**: Professional tools for advanced users
- **Inkscape** (free): Open-source vector editor

### Workflow

1. Create a 1200×630px canvas
2. Add gradient background
3. Import Asrār logo
4. Add Arabic text (ensure proper font with full Unicode support)
5. Add transliteration and translation
6. Add challenge badge
7. Export as JPG (quality 85-90%)
8. Optimize with tools like TinyPNG or ImageOptim
9. Save to `/public/og/` directory

## Testing

After creating the images, test them using:

1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **WhatsApp**: Share a link in a test chat to see the preview

## Implementation Status

✅ **Code Implementation**: Complete
- OG meta tags dynamically generated based on `?challenge=` parameter
- Metadata configured in [`/src/lib/seoConfig.ts`](/src/lib/seoConfig.ts)
- Server-side rendering in [`/app/ramadan/page.tsx`](/app/ramadan/page.tsx)

⏳ **Image Creation**: Pending
- 6 OG images need to be designed and created
- Follow specifications in this guide
- Place in `/public/og/` directory

## URL Structure

When users share challenge links, the URLs will look like:

**English:**
```
https://www.asrar.app/ramadan?challenge=salawat
https://www.asrar.app/ramadan?challenge=istighfar
https://www.asrar.app/ramadan?challenge=divine-name
https://www.asrar.app/ramadan?challenge=prophetic-names
https://www.asrar.app/ramadan?challenge=custom
```

**French:**
```
https://www.asrar.app/ramadan?challenge=salawat&lang=fr
https://www.asrar.app/ramadan?challenge=istighfar&lang=fr
https://www.asrar.app/ramadan?challenge=divine-name&lang=fr
https://www.asrar.app/ramadan?challenge=prophetic-names&lang=fr
https://www.asrar.app/ramadan?challenge=custom&lang=fr
```

Each will display its corresponding OG image with language-appropriate text in the meta tags.

## Metadata Preview

### English Example
When a user shares `https://www.asrar.app/ramadan?challenge=salawat`:

**Title**: Ṣalawāt Challenge — Asrār Ramadan

**Description**: Join me in reciting Ṣalawāt this Ramadan. Track your daily dhikr with Asrār.

**Image**: `/og/salawat.jpg` (1200×630px)

**Locale**: en_GB

---

### French Example
When a user shares `https://www.asrar.app/ramadan?challenge=salawat&lang=fr`:

**Title**: Défi Ṣalawāt — Asrār Ramadan

**Description**: Rejoignez-moi pour réciter les Ṣalawāt ce Ramadan. Suivez votre dhikr quotidien avec Asrār.

**Image**: `/og/salawat.jpg` (1200×630px) — *Same image, different text*

**Locale**: fr_FR

---

## Next Steps

1. **Create the 6 OG images** following this guide
2. **Optimize and save** to `/public/og/` directory
3. **Test** using Facebook Debugger and Twitter Card Validator
4. **Deploy** and verify on production

---

**Need help?** Refer to the [SEO Configuration](/src/lib/seoConfig.ts) and [Ramadan Page Implementation](/app/ramadan/page.tsx).
