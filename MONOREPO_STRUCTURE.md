# Asrar - Monorepo Structure

This repository contains both the web app and mobile app for Asrar.

## Repository Structure

```
asrar/
├── asrar-mobile/          # Expo mobile app (iOS/Android)
│   ├── android/           # Native Android code
│   ├── app/              # Expo Router screens
│   ├── src/              # Mobile app source code
│   ├── eas.json          # EAS Build configuration
│   └── package.json      # Mobile dependencies
│
├── app/                  # Next.js web app pages
├── src/                  # Web app source code
├── public/               # Web app static assets
└── package.json          # Web app dependencies
```

## Branches

- **main** - Production web app (deployed to Vercel)
- **mobile-app** - Mobile app development

## Development

### Web App (Next.js)
```bash
npm install
npm run dev
# Runs on http://localhost:3000
```

### Mobile App (Expo)
```bash
cd asrar-mobile
npm install

# Development
npx expo start

# iOS
npx expo start --ios

# Android
npx expo start --android
```

## Deployment

### Web App
- Branch: `main`
- Platform: Vercel
- Auto-deploys on push to main

### Mobile App
- Branch: `mobile-app`
- Platform: EAS Build (Expo Application Services)
- Build commands:
  ```bash
  cd asrar-mobile
  
  # Android
  eas build --platform android
  
  # iOS
  eas build --platform ios
  ```

## Key Technical Notes

### Mobile App - Kotlin/KSP Fix
The mobile app uses Expo SDK 54 with React Native 0.76.3, which requires Kotlin 2.0+ but RN ships with Kotlin 1.9.24. We've overridden this in `asrar-mobile/android/build.gradle`:

```gradle
buildscript {
  ext.kotlinVersion = "2.0.10"  // Override RN's 1.9.24
}
```

See [asrar-mobile/KOTLIN_FIX_QUICK_REF.md](asrar-mobile/KOTLIN_FIX_QUICK_REF.md) for details.

## Contributing

1. Web app changes → commit to `main`
2. Mobile app changes → commit to `mobile-app`
3. Shared logic/utilities → consider extracting to a shared package

## License

All rights reserved.
