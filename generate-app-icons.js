#!/usr/bin/env node

/**
 * Asrār Mobile App Icon Generator
 * 
 * Generates icons for iOS and Android app stores:
 * - icon.png (1024×1024) - iOS App Store & general use
 * - adaptive-icon.png (1024×1024) - Android foreground
 * 
 * Usage:
 *   node generate-app-icons.js
 */

const fs = require('fs');
const path = require('path');

// Import the logo component (we'll use the SVG directly)
const svgTemplate = `
<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
    </radialGradient>
    
    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FCD34D;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#FDE047;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FBBF24;stop-opacity:1" />
    </linearGradient>
    
    <filter id="glow">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  
  <!-- Background Circle -->
  <circle cx="512" cy="512" r="512" fill="url(#bgGradient)" />
  
  <!-- Outer Ring (Ring 1) -->
  <circle 
    cx="512" 
    cy="512" 
    r="340" 
    fill="none" 
    stroke="#E0E7FF" 
    stroke-width="2" 
    opacity="0.3"
  />
  
  <!-- Middle Ring (Ring 2) -->
  <circle 
    cx="512" 
    cy="512" 
    r="260" 
    fill="none" 
    stroke="#DDD6FE" 
    stroke-width="3" 
    opacity="0.4"
  />
  
  <!-- Inner Ring (Ring 3) -->
  <circle 
    cx="512" 
    cy="512" 
    r="180" 
    fill="none" 
    stroke="#C4B5FD" 
    stroke-width="4" 
    opacity="0.5"
  />
  
  <!-- 8-Pointed Star (Octagram) -->
  <g transform="translate(512, 512)" filter="url(#glow)">
    <!-- Star points -->
    <path
      d="M 0,-200 L 35,-35 L 200,0 L 35,35 L 0,200 L -35,35 L -200,0 L -35,-35 Z"
      fill="url(#starGradient)"
      opacity="0.9"
    />
    
    <!-- Inner star for depth -->
    <path
      d="M 0,-140 L 25,-25 L 140,0 L 25,25 L 0,140 L -25,25 L -140,0 L -25,-25 Z"
      fill="#FFFFFF"
      opacity="0.3"
    />
  </g>
  
  <!-- Three Dots (Trinity) in triangular formation -->
  <circle cx="512" cy="332" r="16" fill="#FFFFFF" opacity="0.8" />
  <circle cx="456" cy="432" r="16" fill="#FFFFFF" opacity="0.8" />
  <circle cx="568" cy="432" r="16" fill="#FFFFFF" opacity="0.8" />
  
  <!-- Center Eye with Ayn (ع) curve -->
  <circle cx="512" cy="512" r="80" fill="#1E1B4B" opacity="0.9" />
  <circle cx="512" cy="512" r="60" fill="url(#starGradient)" />
  
  <!-- Inner pupil/seed -->
  <circle cx="512" cy="512" r="24" fill="#1E1B4B" />
  <circle cx="512" cy="512" r="12" fill="#FFFFFF" opacity="0.9" />
  
  <!-- Subtle Ayn curve -->
  <path
    d="M 452,512 Q 452,540 482,550 Q 512,560 542,550 Q 572,540 572,512"
    fill="none"
    stroke="#FFFFFF"
    stroke-width="3"
    opacity="0.3"
  />
</svg>
`;

// Create output directory
const outputDir = path.join(__dirname, 'app-icons');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save the SVG
const svgPath = path.join(outputDir, 'asrar-icon.svg');
fs.writeFileSync(svgPath, svgTemplate.trim());

console.log('✅ App Icons Generated!');
console.log('');
console.log('📁 Output Directory: app-icons/');
console.log('');
console.log('Generated files:');
console.log('  ✓ asrar-icon.svg (1024×1024) - Source SVG');
console.log('');
console.log('🎯 Next Steps:');
console.log('');
console.log('1. USING WEB INTERFACE (Recommended):');
console.log('   • Open http://localhost:3000/logo-designer');
console.log('   • Select "Icon Only" variant');
console.log('   • Choose your preferred element theme (Aether is default)');
console.log('   • Click "PNG 1024×1024" button to download');
console.log('   • Rename the downloaded file to:');
console.log('     - icon.png (for iOS & general use)');
console.log('     - adaptive-icon.png (for Android foreground)');
console.log('');
console.log('2. USING IMAGE CONVERSION TOOLS:');
console.log('   • Install ImageMagick: sudo apt-get install imagemagick');
console.log('   • Convert SVG to PNG:');
console.log('     convert -background transparent app-icons/asrar-icon.svg -resize 1024x1024 icon.png');
console.log('');
console.log('3. ONLINE TOOLS:');
console.log('   • Visit: https://cloudconvert.com/svg-to-png');
console.log('   • Upload: app-icons/asrar-icon.svg');
console.log('   • Set dimensions: 1024×1024');
console.log('   • Download and rename appropriately');
console.log('');
console.log('📱 App Store Requirements:');
console.log('');
console.log('iOS App Store:');
console.log('  • File: icon.png');
console.log('  • Size: 1024×1024 pixels');
console.log('  • Format: PNG (no transparency for iOS)');
console.log('  • Purpose: App Store listing & app icon base');
console.log('');
console.log('Android Play Store:');
console.log('  • File: adaptive-icon.png (foreground)');
console.log('  • Size: 1024×1024 pixels');
console.log('  • Format: PNG with transparency');
console.log('  • Purpose: Adaptive icon foreground layer');
console.log('  • Note: Also create a background layer (solid color or gradient)');
console.log('');
console.log('💡 Recommendations:');
console.log('');
console.log('For best results:');
console.log('  ✓ Use the "Icon Only" variant (no text)');
console.log('  ✓ Consider the "Aether" element theme (purple/pink gradient)');
console.log('  ✓ Ensure high contrast for visibility at small sizes');
console.log('  ✓ Test on both light and dark backgrounds');
console.log('  ✓ For Android, create a complementary background layer');
console.log('');
console.log('Android Adaptive Icon Setup:');
console.log('  1. Foreground: Your logo (adaptive-icon.png)');
console.log('  2. Background: Solid gradient (#4F46E5 to #EC4899)');
console.log('  3. Safe zone: Keep important elements within central 66%');
console.log('');
