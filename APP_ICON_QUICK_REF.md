# 📱 Asrār App Icon - Quick Reference

## 🎯 Instant Instructions

### Step 1: Open Logo Designer
```
URL: http://localhost:3000/logo-designer
```

### Step 2: Configure
- **Variant:** Icon Only ✓
- **Element:** Aether ✓
- **Options:** Uncheck Animation & Grid

### Step 3: Export
- Click: **"PNG 1024×1024"**
- Downloads: `asrar-logo-icon-1024x1024.png`

### Step 4: Rename for Each Platform
```bash
# Make 2 copies:
cp asrar-logo-icon-1024x1024.png icon.png                # iOS
cp asrar-logo-icon-1024x1024.png adaptive-icon.png       # Android
```

---

## 📐 Requirements at a Glance

| Platform | File | Size | Transparency | Use |
|----------|------|------|--------------|-----|
| **iOS** | `icon.png` | 1024×1024 | ❌ No | App Store |
| **Android** | `adaptive-icon.png` | 1024×1024 | ✅ Yes | Foreground |

---

## 🎨 Recommended Settings

```
✓ Variant: Icon Only
✓ Element: Aether (purple/pink)
✗ Animation: Off
✗ Grid: Off
```

---

## ⚡ One-Line Summary

**Go to [/logo-designer](http://localhost:3000/logo-designer) → Icon Only + Aether → PNG 1024×1024 → Rename to `icon.png` and `adaptive-icon.png`**

---

## 🤖 Android Adaptive Icon

Don't forget the background layer!

**Background file:** `adaptive-icon-background.png`
- Size: 1024×1024
- Content: Gradient (#4F46E5 → #EC4899)
- Or use solid: #4F46E5

---

## ✅ Quick Checklist

- [ ] Exported 1024×1024 PNG
- [ ] Created icon.png (iOS)
- [ ] Created adaptive-icon.png (Android)
- [ ] Created background for Android
- [ ] Tested at 48×48 size
- [ ] Ready to upload!

---

**Full Guide:** See `MOBILE_APP_ICON_GUIDE.md`
