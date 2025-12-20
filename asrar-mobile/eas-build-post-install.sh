#!/usr/bin/env bash

# EAS Build hook: Run after npm install, before build
set -e

echo "🔧 Post-install: Configuring Android project for Expo SDK 54..."

# Run expo prebuild to generate native folders
echo "📱 Running expo prebuild for Android..."
npx expo prebuild --platform android --clean

# Apply Kotlin 2.0.21 fix to android/build.gradle
if [ -f "android/build.gradle" ]; then
  echo "⬆️  Applying Kotlin 2.0.21 override..."
  
  # Check if ext block with kotlinVersion exists
  if grep -q 'ext {' android/build.gradle && grep -q 'kotlinVersion' android/build.gradle; then
    # Update existing kotlinVersion
    sed -i 's/kotlinVersion = "[^"]*"/kotlinVersion = "2.0.21"/' android/build.gradle
    echo "✅ Updated existing Kotlin version to 2.0.21"
  elif grep -q 'buildscript {' android/build.gradle; then
    # Add ext block with all required versions
    sed -i '/buildscript {/a\    ext {\n        buildToolsVersion = "34.0.0"\n        minSdkVersion = 23\n        compileSdkVersion = 34\n        targetSdkVersion = 34\n        kotlinVersion = "2.0.21"\n        ndkVersion = "26.1.10909125"\n    }' android/build.gradle
    
    # Update kotlin-gradle-plugin to use the variable
    sed -i "s/classpath('org.jetbrains.kotlin:kotlin-gradle-plugin')/classpath(\"org.jetbrains.kotlin:kotlin-gradle-plugin:\$kotlinVersion\")/" android/build.gradle
    
    echo "✅ Added ext block with Kotlin 2.0.21"
  fi
  
  echo "📄 Updated android/build.gradle:"
  head -30 android/build.gradle
fi

echo "✅ Post-install complete!"
