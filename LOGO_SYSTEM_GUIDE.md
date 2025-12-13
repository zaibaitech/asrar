# Asrār Logo System - Implementation Guide

## 🎨 Overview

The Asrār logo incorporates sacred geometry and Islamic numerology principles:

- **8-Pointed Star (Octagram)**: Divine order and balance
- **3 Concentric Rings**: أسرار = 462 → 4+6+2 = 12 → 3 (sacred reduction)
- **3 Dots in Triangle**: Trinity of body, soul, and spirit
- **Center Eye with ع (Ayn)**: Source/spring - the divine well
- **Rotating Layers**: Representing planetary hours and cosmic cycles

---

## 📦 Components Created

### 1. **AsrarLogo Component** (`/src/components/AsrarLogo.tsx`)

Reusable React component with TypeScript support.

**Props:**
```typescript
interface AsrarLogoProps {
  size?: number;              // Size in pixels (default: 120)
  variant?: 'icon' | 'wordmark' | 'horizontal';
  element?: 'fire' | 'water' | 'earth' | 'air' | 'aether';
  mono?: boolean;             // Use monochrome (for light/dark mode)
  showBackground?: boolean;   // Show gradient background (for app icons)
  animate?: boolean;          // Enable subtle rotation animation
  className?: string;         // Additional CSS classes
  showGrid?: boolean;         // Show sacred geometry grid
}
```

**Usage Examples:**
```tsx
// Simple icon
<AsrarLogo size={48} />

// Animated header logo
<AsrarLogo size={48} variant="icon" element="aether" animate={true} />

// Horizontal wordmark
<AsrarLogo size={120} variant="horizontal" element="fire" />

// Monochrome for dark/light mode
<AsrarLogo size={32} mono={true} />

// With background for app icon
<AsrarLogo size={512} showBackground={true} />
```

---

### 2. **Logo Designer Page** (`/app/logo-designer/page.tsx`)

Interactive preview and export tool accessible at `/logo-designer`

**Features:**
- Live preview of all variants
- Element theme switcher (Fire, Water, Earth, Air, Aether)
- Light/Dark/Gradient mode preview
- Animation toggle
- Sacred geometry grid toggle
- Export functionality:
  - SVG (scalable vector)
  - PNG (multiple sizes: 1024×1024, 512×512, 192×192, 180×180, 32×32, 16×16)
- Asset previews (app icon, social card, favicon, light mode)

**To access:** Navigate to `http://localhost:3000/logo-designer` in your browser

---

### 3. **Static Assets** (`/public/`)

Pre-generated logo files for immediate use:

- **asrar-logo.svg**: Full-color logo (512×512)
- **favicon.svg**: Simplified favicon version (64×64)
- **og-image.svg**: Open Graph image for social sharing (1200×630)

---

## 🎨 Element Color Palettes

Each element has a unique color gradient:

```typescript
const elementPalettes = {
  aether: {
    primary: '#4F46E5',    // Indigo
    secondary: '#8B5CF6',  // Purple
    tertiary: '#EC4899'    // Pink
  },
  fire: {
    primary: '#DC2626',    // Red
    secondary: '#F97316',  // Orange
    tertiary: '#FCD34D'    // Yellow
  },
  water: {
    primary: '#1E40AF',    // Dark Blue
    secondary: '#3B82F6',  // Blue
    tertiary: '#67E8F9'    // Cyan
  },
  earth: {
    primary: '#166534',    // Dark Green
    secondary: '#22C55E',  // Green
    tertiary: '#A3E635'    // Lime
  },
  air: {
    primary: '#6366F1',    // Indigo
    secondary: '#A78BFA',  // Purple
    tertiary: '#E0E7FF'    // Lavender
  }
};
```

---

## 🚀 Integration Points

### Header Integration

The logo has been integrated into the main app header:

**Mobile Header:**
```tsx
<AsrarLogo size={32} variant="icon" element="aether" mono={true} />
```

**Desktop Header:**
```tsx
<AsrarLogo size={48} variant="icon" element="aether" animate={true} />
```

### Future Integration Points

1. **Splash Screen** (when user first loads the app)
   ```tsx
   <AsrarLogo size={200} variant="wordmark" element="aether" animate={true} />
   ```

2. **About/Settings Page**
   ```tsx
   <AsrarLogo size={120} variant="horizontal" element="aether" />
   ```

3. **Loading States**
   ```tsx
   <AsrarLogo size={60} animate={true} />
   ```

4. **Email Templates**
   ```html
   <img src="/asrar-logo.svg" alt="Asrār Logo" width="80" height="80" />
   ```

---

## 📱 App Icon Generation

To generate app icons for iOS/Android:

1. Visit `/logo-designer` page
2. Select "Icon Only" variant
3. Choose your element theme
4. Click the PNG export buttons:
   - **1024×1024**: iOS App Store
   - **512×512**: Android Play Store
   - **192×192**: PWA manifest
   - **180×180**: Apple Touch Icon
   - **32×32**: Favicon
   - **16×16**: Favicon (small)

### Manual Icon Generation (Alternative)

If you prefer to generate icons programmatically:

```bash
# Install sharp for image processing
npm install sharp

# Run this script (create it in scripts/generate-icons.js)
node scripts/generate-icons.js
```

---

## 🌐 Metadata Integration

Update your app metadata to use the new logo assets:

### Next.js App Directory (`app/layout.tsx`)

```tsx
export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ]
  },
  openGraph: {
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Asrār Everyday - ʿIlm al-Ḥurūf Explorer'
      }
    ]
  }
};
```

### PWA Manifest (`public/manifest.json`)

```json
{
  "name": "Asrār Everyday",
  "short_name": "Asrār",
  "icons": [
    {
      "src": "/asrar-logo.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    },
    {
      "src": "/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

---

## ✨ Sacred Geometry Symbolism

### Encoded Meanings

1. **8-Pointed Star (Octagram)**
   - Two overlapping squares, one rotated 45°
   - Represents divine order and cosmic balance
   - 8 points = 8 directions, completeness

2. **3 Concentric Rings**
   - أسرار (Asrār) = 462 in Abjad
   - 4 + 6 + 2 = 12 → 1 + 2 = 3
   - Sacred number reduction

3. **3 Dots in Triangular Formation**
   - Trinity of body, soul, and spirit
   - Past, present, future
   - Beginning, middle, end

4. **Center Eye with ع (Ayn)**
   - ع = Ayn = "eye" or "source/spring"
   - The divine well of knowledge
   - The pupil represents focused intention

5. **Rotating Layers**
   - Planetary hours cycle
   - Cosmic movement
   - Time as a sacred dimension

---

## 🎯 Best Practices

### When to Use Each Variant

- **Icon Only**: Headers, buttons, loading states, favicons
- **Wordmark**: Landing pages, about sections, footers
- **Horizontal**: Wide spaces, banners, email signatures

### Element Selection

Match the element to the user's context when possible:
```tsx
// Get user's dominant element from profile
const userElement = user?.dominantElement || 'aether';

<AsrarLogo element={userElement} />
```

### Performance

- Use `animate={false}` for static pages or print media
- Use `mono={true}` for better performance on simple themes
- SVG scales infinitely - prefer over PNG when possible

### Accessibility

Always include descriptive alt text:
```tsx
<div role="img" aria-label="Asrār sacred geometry logo">
  <AsrarLogo size={48} />
</div>
```

---

## 🔄 Animation Guidelines

The logo includes subtle animations:
- Concentric rings rotate slowly (20-30s per rotation)
- Outer square rotates at different speed (counter-rotation)
- Main star has gentle pulse effect (4s cycle)

**When to disable animations:**
- `prefers-reduced-motion` is enabled
- Print media
- Static email templates
- Performance-critical contexts

```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<AsrarLogo animate={!prefersReducedMotion} />
```

---

## 📚 Additional Resources

### Design Rationale

The logo design is inspired by:
- Traditional Islamic geometric patterns
- ʿIlm al-Ḥurūf (Science of Letters) principles
- Sacred numerology (Abjad values)
- Tijani West African Islamic aesthetics

### Typography Pairing

The logo pairs well with these font families:
- **Arabic**: Noto Sans Arabic, Amiri, Cairo
- **Latin**: Inter, Poppins, Montserrat

### File Locations

```
/src/components/AsrarLogo.tsx       # Main component
/app/logo-designer/page.tsx         # Interactive designer
/public/asrar-logo.svg              # Static logo asset
/public/favicon.svg                 # Favicon
/public/og-image.svg                # Social sharing image
```

---

## 🛠️ Troubleshooting

### Logo not displaying

1. Check import path: `import AsrarLogo from '@/src/components/AsrarLogo'`
2. Verify component is in a client component (`'use client'`)
3. Check console for SVG rendering errors

### Animations not working

1. Ensure `animate={true}` is set
2. Check if CSS animations are disabled globally
3. Verify browser supports CSS animations

### Export not working (Logo Designer)

1. Check browser console for errors
2. Ensure browser supports Blob API and downloads
3. Try different export sizes
4. Check if SVG ref is properly attached

---

## 📝 Future Enhancements

Potential additions to the logo system:

1. **React Native Version**: Port to `react-native-svg` for mobile apps
2. **Lottie Animation**: Create animated JSON version
3. **3D Version**: Three.js or WebGL implementation
4. **Sound Integration**: Audio feedback on interaction
5. **Color Picker**: Custom element color palettes
6. **Preset Themes**: Season-based or event-specific variants

---

## ✅ Checklist

Use this checklist to ensure complete logo integration:

- [x] AsrarLogo component created
- [x] Logo Designer page created
- [x] Static SVG assets generated
- [x] Header integration complete (mobile & desktop)
- [ ] Favicon updated in metadata
- [ ] OG image configured in metadata
- [ ] PWA manifest icons added
- [ ] Apple touch icon generated
- [ ] About/Settings page integration
- [ ] Splash screen implementation
- [ ] Email template integration
- [ ] Print stylesheet considerations

---

**Questions or Issues?**

Visit `/logo-designer` to experiment with the logo system interactively, or check the component source code for detailed implementation examples.

**Version**: 1.0.0  
**Last Updated**: December 2025  
**Created by**: AI-assisted design incorporating traditional Islamic sacred geometry
