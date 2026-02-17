# Asrār Mobile App Icon Guide

## 📱 Overview

This guide helps you create professional app icons for the Asrār mobile app for both iOS App Store and Google Play Store.

---

## 🎯 Quick Steps

### Method 1: Using the Logo Designer Page (Recommended) ⭐

1. **Open the Logo Designer**
   - Navigate to: `http://localhost:3000/logo-designer`
   - (Server should already be running)

2. **Configure the Logo**
   - Select **"Icon Only"** variant (no text for app icons)
   - Choose **"Aether"** element theme (purple/pink gradient - brand colors)
   - Uncheck "Animate Rotation" for static export
   - Uncheck "Show Sacred Grid" for clean export

3. **Export PNG**
   - Click **"PNG 1024×1024"** button
   - File will download as: `asrar-logo-icon-1024x1024.png`

4. **Create App Icons**
   - Make 2 copies of the downloaded file:
     - `icon.png` → iOS App Store & general use
     - `adaptive-icon.png` → Android Play Store foreground

---

## 📐 Technical Requirements

### iOS App Store (icon.png)

```
File name:    icon.png
Dimensions:   1024×1024 pixels
Format:       PNG
Transparency: NO (iOS doesn't support transparency in app icons)
Color space:  RGB
Bit depth:    24-bit or 32-bit
Purpose:      App Store listing + base for all iOS icon sizes
```

**Important Notes:**
- iOS will automatically round corners and apply effects
- Do NOT add rounded corners yourself
- Do NOT add shadows or gloss effects
- Keep important content away from edges (iOS safe area)

### Android Play Store (adaptive-icon.png)

```
File name:    adaptive-icon.png
Dimensions:   1024×1024 pixels
Format:       PNG
Transparency: YES (supports alpha channel)
Color space:  RGB
Bit depth:    32-bit (with alpha)
Purpose:      Foreground layer of adaptive icon
```

**Important Notes:**
- Android adaptive icons use 2 layers: foreground + background
- Foreground: Your logo (adaptive-icon.png)
- Background: Create separately (see below)
- Safe zone: Keep essential elements within central 66% circle

---

## 🎨 Design Recommendations

### For App Store Icons

#### ✅ DO:
- Use the **"Icon Only"** variant (symbol without text)
- Choose **Aether** element (matches brand identity)
- Ensure good contrast at small sizes
- Test visibility on both light and dark backgrounds
- Keep the sacred geometry design centered
- Use the full gradient for visual appeal

#### ❌ DON'T:
- Add text to the icon (too small to read)
- Use horizontal or wordmark variants
- Add additional borders or frames
- Use low contrast color schemes
- Place important details near edges

### Element Theme Comparison

| Element | Colors | Best For | Visibility |
|---------|--------|----------|------------|
| **Aether** ⭐ | Purple/Pink/Indigo | Brand identity | Excellent |
| Fire | Red/Orange/Yellow | Energy/Action | Very High |
| Water | Blue/Cyan | Calm/Trust | Good |
| Earth | Green/Lime | Growth/Nature | Good |
| Air | Indigo/Purple/Lavender | Wisdom/Spirit | Good |

**Recommendation:** Use **Aether** - it's your brand colors and has excellent visibility.

---

## 🤖 Android Adaptive Icon Setup

Android uses a 2-layer system for adaptive icons:

### Layer 1: Foreground (Your Logo)
```
File: adaptive-icon.png
Content: Asrār sacred geometry logo
Transparency: Yes
Safe zone: Keep logo within central 66% circle
```

### Layer 2: Background (Gradient)
```
File: adaptive-icon-background.png
Content: Solid gradient or color
Colors: #4F46E5 → #8B5CF6 → #EC4899
Transparency: No
```

### Creating the Background Layer

You can create this programmatically or use the logo designer:

**Option A: Solid Color**
- Use: `#4F46E5` (brand indigo)

**Option B: Gradient** (Recommended)
- Create a 1024×1024 PNG with gradient:
  - Top: `#4F46E5` (indigo)
  - Middle: `#8B5CF6` (purple)
  - Bottom: `#EC4899` (pink)
  - Angle: 135° (top-left to bottom-right)

### Safe Zone Guide
```
Icon canvas: 1024×1024px
Outer bounds: 1024×1024 (100%)
Trim zone: Should fit within 864×864 (84%)
Safe zone: Should fit within 676×676 (66%)
```

**Important:** The system will mask your icon into various shapes (circle, square, squircle). Keep essential elements within the central circle (66% safe zone).

---

## 🛠️ Alternative Methods

### Method 2: Using ImageMagick

If you have the SVG and want to convert it:

```bash
# Install ImageMagick (if not installed)
sudo apt-get install imagemagick

# Convert SVG to PNG (1024×1024)
convert -background transparent app-icons/asrar-icon.svg -resize 1024x1024 icon.png

# For iOS (with white background, no transparency)
convert -background white app-icons/asrar-icon.svg -resize 1024x1024 icon-ios.png

# For Android (with transparency)
convert -background transparent app-icons/asrar-icon.svg -resize 1024x1024 adaptive-icon.png
```

### Method 3: Online Conversion

1. Visit: https://cloudconvert.com/svg-to-png
2. Upload: `app-icons/asrar-icon.svg`
3. Set dimensions: 1024×1024
4. Download and rename appropriately

---

## 📱 Icon Specifications Summary

### iOS Requirements

| Purpose | File | Size | Format |
|---------|------|------|--------|
| App Store | icon.png | 1024×1024 | PNG (no alpha) |
| App Icon | Auto-generated from icon.png | Various | iOS handles |

iOS automatically generates these sizes from your 1024×1024:
- 180×180 (iPhone 3x)
- 120×120 (iPhone 2x)
- 167×167 (iPad Pro)
- 152×152 (iPad 2x)
- 76×76 (iPad 1x)
- And more...

### Android Requirements

| Purpose | File | Size | Format |
|---------|------|------|--------|
| Play Store | adaptive-icon.png (foreground) | 1024×1024 | PNG (with alpha) |
| Play Store | adaptive-icon-background.png | 1024×1024 | PNG |
| App Icon | Auto-generated from adaptive icon | Various | Android handles |

Android automatically generates:
- xxxhdpi: 192×192
- xxhdpi: 144×144
- xhdpi: 96×96
- hdpi: 72×72
- mdpi: 48×48

---

## ✅ Checklist

Before submitting to app stores:

- [ ] Created icon.png (1024×1024) for iOS
- [ ] Created adaptive-icon.png (1024×1024) for Android foreground
- [ ] Created adaptive-icon-background.png for Android background
- [ ] Tested icon on light backgrounds
- [ ] Tested icon on dark backgrounds
- [ ] Verified icon is visible at small sizes (48×48)
- [ ] Confirmed no transparency in iOS icon
- [ ] Confirmed transparency in Android foreground
- [ ] Verified safe zone compliance for Android
- [ ] Checked icon in iOS App Store preview
- [ ] Checked icon in Google Play Store preview

---

## 🎨 Logo Designer Features

The logo designer at `/logo-designer` offers:

- **Variants:**
  - Icon Only ← **Use this for app icons**
  - With Wordmark
  - Horizontal

- **Element Themes:**
  - Aether (Purple/Pink) ← **Recommended**
  - Fire (Red/Orange)
  - Water (Blue/Cyan)
  - Earth (Green)
  - Air (Indigo/Lavender)

- **Export Options:**
  - SVG (scalable vector)
  - PNG 1024×1024 ← **Use this**
  - PNG 512×512
  - PNG 192×192
  - Apple Touch (180×180)
  - Favicon sizes (32×32, 16×16)

---

## 📊 Testing Your Icons

### Visual Tests

1. **Small Size Test** (48×48)
   - Resize to 48×48 and check if recognizable
   - Verify all elements are visible
   - Confirm colors have good contrast

2. **Background Test**
   - View on white background
   - View on black background
   - View on colored backgrounds

3. **Platform Preview**
   - iOS: Use Xcode Asset Catalog preview
   - Android: Use Android Studio Resource Manager

### App Store Previews

- **iOS App Store:** Upload to App Store Connect and check preview
- **Google Play:** Upload to Play Console and check listing preview

---

## 🚀 Quick Start Commands

```bash
# Start the development server (if not running)
npm run dev

# Open logo designer in browser
# Navigate to: http://localhost:3000/logo-designer

# Generate app icons guide
node generate-app-icons.js
```

---

## 💡 Pro Tips

1. **Icon Consistency**: Use the same element theme (Aether) across all platform icons

2. **Safe Zones**: For Android, keep the logo within the central 66% circle to avoid clipping

3. **Testing**: Always test your icon at actual size (48×48) to ensure readability

4. **Backgrounds**: Test on various backgrounds - the gradient version works well on both light and dark

5. **Updates**: If you update the app icon, update it everywhere:
   - iOS App Store
   - Google Play Store
   - Website favicon
   - PWA manifest
   - Social media assets

6. **Branding**: The Asrār logo incorporates sacred geometry:
   - 8-pointed star (octagram) = divine order
   - 3 concentric rings = أسرار numerology (462 → 12 → 3)
   - 3 dots = trinity of body, soul, spirit
   - Center eye with Ayn (ع) = source/spring

---

## 📞 Need Help?

If you encounter issues:

1. Check the logo designer page is accessible: http://localhost:3000/logo-designer
2. Verify the exported PNG is exactly 1024×1024 pixels
3. Use online validators for icon compliance
4. Test on actual devices when possible

---

## 📚 Additional Resources

- [iOS Human Interface Guidelines - App Icon](https://developer.apple.com/design/human-interface-guidelines/app-icons)
- [Android Adaptive Icons Guidelines](https://developer.android.com/develop/ui/views/launch/icon_design_adaptive)
- [Google Play Store Icon Specifications](https://support.google.com/googleplay/android-developer/answer/9866151)

---

**Version:** 1.0.0  
**Last Updated:** January 2026  
**Created For:** Asrār Mobile App Development
