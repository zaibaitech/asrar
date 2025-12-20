# Kotlin/KSP Fix - Quick Reference

## The Error

```
Failed to apply plugin 'expo-root-project'.
Can't find KSP version for Kotlin version '1.9.24'.
Supported versions are: 2.0.0, 2.0.10, 2.0.20, 2.0.21, 2.1.0, ..., 2.2.20
```

## The Fix (2 Changes)

### 1. `android/build.gradle` - Add Kotlin override

```gradle
buildscript {
  ext.kotlinVersion = "2.0.10"  // ADD THIS LINE
  
  repositories {
    google()
    mavenCentral()
  }
  dependencies {
    classpath('com.android.tools.build:gradle')
    classpath('com.facebook.react:react-native-gradle-plugin')
    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")  // ADD $kotlinVersion
  }
}
```

### 2. `android/app/build.gradle` - Comment out incompatible property

```gradle
react {
    // ... other config ...
    
    // Commented out - not supported in React Native 0.76.3
    // enableBundleCompression = (findProperty('android.enableBundleCompression') ?: false).toBoolean()
}
```

## Clean Build

```bash
cd asrar-mobile/android
./gradlew --stop
rm -rf .gradle build app/build
./gradlew :app:assembleDebug
```

## Verify Success

Look for this in build output:
```
[ExpoRootProject] Using the following versions:
  - kotlin:      2.0.10      ✅
  - ksp:         2.0.10-1.0.24  ✅
```

## Why It Works

- React Native 0.76.3 uses Kotlin **1.9.24**
- Expo SDK 54 needs Kotlin **2.0+** for KSP
- Override forces Kotlin **2.0.10**
- Expo auto-resolves KSP to **2.0.10-1.0.24**
- Build succeeds! ✅

## Don't Do This ❌

- ❌ Don't upgrade only Gradle
- ❌ Don't manually add KSP plugin  
- ❌ Don't edit node_modules
- ❌ Don't use random Kotlin versions (stick to 2.0.0 - 2.2.20)

---

**Status:** ✅ FIXED AND VERIFIED  
**Time to Fix:** ~2 minutes  
**Breaking Changes:** None
