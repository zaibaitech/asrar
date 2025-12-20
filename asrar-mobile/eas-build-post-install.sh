#!/usr/bin/env bash

# EAS Build hook: Run after npm install, before build
set -e

echo "🔧 Post-install: Configuring Android project for Expo SDK 54..."

# Run expo prebuild to generate native folders
echo "📱 Running expo prebuild for Android..."
npx expo prebuild --platform android --clean

# Apply Kotlin 2.0.10 fix to android/build.gradle
if [ -f "android/build.gradle" ]; then
  echo "⬆️  Applying Kotlin 2.0.10 override..."
  
  # Check if kotlinVersion is already set
  if grep -q "ext.kotlinVersion" android/build.gradle; then
    echo "✅ Kotlin version already configured"
  else
    # Insert kotlinVersion before repositories
    sed -i '/buildscript {/a\  ext.kotlinVersion = "2.0.10"' android/build.gradle
    
    # Update kotlin-gradle-plugin to use the variable
    sed -i "s/classpath('org.jetbrains.kotlin:kotlin-gradle-plugin')/classpath(\"org.jetbrains.kotlin:kotlin-gradle-plugin:\$kotlinVersion\")/" android/build.gradle
    
    echo "✅ Kotlin 2.0.10 configured in android/build.gradle"
  fi
fi

echo "✅ Post-install complete!"
