# Kotlin/KSP Compatibility Fix - Complete Guide

## Problem Summary

Your Expo Android build failed with:

```
Failed to apply plugin 'expo-root-project'.
Can't find KSP version for Kotlin version '1.9.24'. 
You're probably using an unsupported version of Kotlin.
Supported Kotlin versions are: 2.2.20, 2.2.10, 2.2.0, 2.1.21, 2.1.20, 
2.1.10, 2.1.0, 2.0.21, 2.0.20, 2.0.10, 2.0.0
```

---

## Why This Happens (Simple Explanation)

1. **Expo's `expo-root-project` Gradle plugin** automatically configures KSP (Kotlin Symbol Processing) for code generation
2. **KSP versions MUST exactly match Kotlin compiler versions** - there's no cross-version compatibility
3. Your project inherited **Kotlin 1.9.24** from React Native 0.76.3's version catalog
4. **Expo SDK 54's KSP resolver** only supports **Kotlin 2.0.0 through 2.2.20**
5. Since no compatible KSP version exists for Kotlin 1.9.24, the build fails during Gradle configuration (before compilation even starts)

---

## Root Cause

React Native 0.76.3 ships with Kotlin 1.9.24 defined in:
```
node_modules/react-native/gradle/libs.versions.toml
```

But Expo SDK 54 requires Kotlin 2.0+. This version mismatch causes the error.

---

## The Correct Fix

### ✅ What We Fixed

**File: `android/build.gradle`**

```gradle
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
  // Override React Native's Kotlin version (1.9.24) with a version supported by Expo SDK 54's KSP
  ext.kotlinVersion = "2.0.10"
  
  repositories {
    google()
    mavenCentral()
  }
  dependencies {
    classpath('com.android.tools.build:gradle')
    classpath('com.facebook.react:react-native-gradle-plugin')
    classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlinVersion")
  }
}

allprojects {
  repositories {
    google()
    mavenCentral()
    maven { url 'https://www.jitpack.io' }
  }
}

apply plugin: "expo-root-project"
apply plugin: "com.facebook.react.rootproject"
```

**Key Changes:**
1. Added `ext.kotlinVersion = "2.0.10"` to override React Native's Kotlin 1.9.24
2. Updated Kotlin plugin classpath to use `$kotlinVersion` variable
3. Chose **Kotlin 2.0.10** (lowest stable 2.x version) to minimize breaking changes

### Why Kotlin 2.0.10?

- ✅ Supported by Expo SDK 54's KSP resolver
- ✅ Lowest stable Kotlin 2.x version (less likely to introduce breaking changes)
- ✅ Well-tested and widely adopted
- ✅ Compatible with Android Gradle Plugin 8.6.0

---

## Build Commands (Clean Rebuild)

### For CI/CD or Fresh Build:

```bash
# Navigate to mobile project
cd asrar-mobile

# 1. Stop all Gradle daemons
cd android
./gradlew --stop

# 2. Clean all build artifacts
rm -rf .gradle build app/build

# 3. (Optional) Clean Gradle caches if issues persist
rm -rf ~/.gradle/caches/transforms-*

# 4. Build debug APK
./gradlew :app:assembleDebug

# Success! APK location: app/build/outputs/apk/debug/app-debug.apk
```

### For Development (if android/ folder doesn't exist):

```bash
# Navigate to mobile project
cd asrar-mobile

# 1. Generate Android native project
npx expo prebuild --clean --platform android

# 2. Apply the fix above to android/build.gradle

# 3. Build
cd android
./gradlew :app:assembleDebug
```

---

## Common Mistakes to Avoid

### ❌ Don't Do These:

1. **Don't upgrade only Gradle** - This error is about **Kotlin ↔ KSP compatibility**, not Gradle version

2. **Don't manually add KSP plugin** - Expo manages KSP automatically; adding it manually can cause conflicts

3. **Don't use random KSP versions** - KSP versions MUST match the exact Kotlin version:
   - Kotlin 2.0.0 → KSP 2.0.0-1.0.21
   - Kotlin 2.0.10 → KSP 2.0.10-1.0.24
   - Kotlin 2.0.20 → KSP 2.0.20-1.0.25
   
   (Expo handles this automatically when you use a supported Kotlin version)

4. **Don't modify node_modules** - Changes will be lost on `npm install`

5. **Don't skip cleaning** - Old Kotlin 1.9.24 artifacts can cause mysterious errors

---

## Verification Steps

After building successfully:

```bash
# 1. Verify Kotlin version
cd android
./gradlew -q app:dependencies | grep "org.jetbrains.kotlin:kotlin-stdlib"

# Expected output should show: 2.0.10

# 2. Check APK was created
ls -lh app/build/outputs/apk/debug/app-debug.apk

# 3. (Optional) Install on device/emulator
adb install -r app/build/outputs/apk/debug/app-debug.apk
```

---

## Technical Details

### What is KSP?

**KSP (Kotlin Symbol Processing)** is Kotlin's replacement for KAPT (annotation processing). It's used by:
- Room (Database)
- Moshi (JSON serialization)
- Expo Modules API
- Many other libraries

### Version Compatibility Matrix

| Kotlin Version | KSP Version | Expo SDK 54 Support |
|---------------|-------------|---------------------|
| 1.9.24 | ❌ Not supported | ❌ No |
| 2.0.0 | 2.0.0-1.0.21 | ✅ Yes |
| 2.0.10 | 2.0.10-1.0.24 | ✅ Yes (Recommended) |
| 2.0.20 | 2.0.20-1.0.25 | ✅ Yes |
| 2.0.21 | 2.0.21-1.0.28 | ✅ Yes |
| 2.1.0 | 2.1.0-1.0.29 | ✅ Yes |
| 2.2.0 | 2.2.0-1.0.31 | ✅ Yes |

### Why Expo Doesn't Auto-Fix This

- React Native's version catalog takes precedence over Expo's defaults
- Expo SDK 54 was released before React Native 0.76.3 stabilized
- You're using a newer React Native version than Expo SDK 54 was tested with

---

## Alternative Solutions (if 2.0.10 causes issues)

If Kotlin 2.0.10 introduces breaking changes, try:

1. **Kotlin 2.0.0** (most conservative):
   ```gradle
   ext.kotlinVersion = "2.0.0"
   ```

2. **Latest stable** (if you want newest features):
   ```gradle
   ext.kotlinVersion = "2.0.21"
   ```

3. **Check Expo's recommendation**:
   ```bash
   npx expo-doctor
   ```

---

## Troubleshooting

### Build still fails?

```bash
# 1. Ensure no lingering Gradle processes
ps aux | grep gradle
kill -9 <PID>  # if any found

# 2. Nuclear clean
cd asrar-mobile
rm -rf android
npx expo prebuild --clean --platform android
# Then reapply the fix to android/build.gradle

# 3. Check your Java version
java -version
# Expected: Java 17 or 21 (11 may have issues)
```

### Kotlin compilation errors after upgrade?

```bash
# Check for deprecated Kotlin APIs
cd android
./gradlew :app:assembleDebug --warning-mode all
```

---

## CI/CD Integration

**GitHub Actions Example:**

```yaml
- name: Build Android Debug APK
  run: |
    cd asrar-mobile/android
    ./gradlew --stop
    rm -rf .gradle build app/build
    ./gradlew :app:assembleDebug --no-daemon --stacktrace
```

**GitLab CI Example:**

```yaml
build-android:
  script:
    - cd asrar-mobile/android
    - ./gradlew --stop || true
    - rm -rf .gradle build app/build
    - ./gradlew :app:assembleDebug --no-daemon
  artifacts:
    paths:
      - asrar-mobile/android/app/build/outputs/apk/debug/*.apk
```

---

## Success Indicators

✅ Build completes without KSP errors  
✅ APK file generated at `android/app/build/outputs/apk/debug/app-debug.apk`  
✅ App installs and runs on device/emulator  
✅ No Kotlin version warnings in build output  

---

## References

- [KSP Releases](https://github.com/google/ksp/releases)
- [Expo SDK 54 Release Notes](https://expo.dev/changelog/2024/12-12-sdk-54)
- [React Native 0.76 Breaking Changes](https://github.com/facebook/react-native/releases/tag/v0.76.0)
- [Kotlin 2.0 Migration Guide](https://kotlinlang.org/docs/whatsnew20.html)

---

## Summary

**The Issue:** React Native 0.76.3 uses Kotlin 1.9.24, but Expo SDK 54 requires Kotlin 2.0+

**The Fix:** Add `ext.kotlinVersion = "2.0.10"` to `android/build.gradle` to override the inherited version

**The Result:** Build succeeds because Expo can now find a compatible KSP version for Kotlin 2.0.10
