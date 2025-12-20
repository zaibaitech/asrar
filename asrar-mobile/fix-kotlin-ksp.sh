#!/bin/bash
set -e

echo "🔧 Fixing Kotlin/KSP Compatibility Issue"
echo "========================================"
echo ""

# Step 1: Navigate to mobile project
cd /workspaces/asrar/asrar-mobile

# Step 2: Clean any existing Android build artifacts
echo "📦 Cleaning existing builds..."
rm -rf android/.gradle android/build android/app/build
rm -rf ~/.gradle/caches/transforms-* 2>/dev/null || true

# Step 3: Generate fresh Android project with Expo prebuild
echo ""
echo "🏗️  Generating Android project with Expo prebuild..."
npx expo prebuild --clean --platform android

# Step 4: Update Kotlin version in android/build.gradle
echo ""
echo "⬆️  Upgrading Kotlin from 1.9.24 to 2.0.10..."

if [ -f "android/build.gradle" ]; then
    # Replace kotlinVersion in buildscript ext block
    sed -i 's/kotlinVersion = "1\.9\.24"/kotlinVersion = "2.0.10"/' android/build.gradle
    sed -i 's/ext\.kotlinVersion = "1\.9\.24"/ext.kotlinVersion = "2.0.10"/' android/build.gradle
    
    echo "✅ Updated android/build.gradle"
else
    echo "❌ android/build.gradle not found! Prebuild may have failed."
    exit 1
fi

# Step 5: Check if gradle.properties has Kotlin version
if [ -f "android/gradle.properties" ]; then
    if grep -q "kotlin.version" android/gradle.properties; then
        sed -i 's/kotlin\.version=1\.9\.24/kotlin.version=2.0.10/' android/gradle.properties
        echo "✅ Updated android/gradle.properties"
    fi
fi

# Step 6: Stop all Gradle daemons
echo ""
echo "🛑 Stopping Gradle daemons..."
cd android
./gradlew --stop

# Step 7: Clean build
echo ""
echo "🧹 Cleaning Gradle build..."
./gradlew clean

# Step 8: Assemble debug build
echo ""
echo "🚀 Building debug APK..."
./gradlew :app:assembleDebug

echo ""
echo "✅ BUILD SUCCESSFUL!"
echo "📱 Debug APK location: android/app/build/outputs/apk/debug/app-debug.apk"
