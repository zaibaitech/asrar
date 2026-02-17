#!/usr/bin/env node

/**
 * Create Android Adaptive Icon Background Layer
 * 
 * Generates a 1024×1024 PNG background for Android adaptive icons
 * with the Asrār brand gradient
 */

const fs = require('fs');
const path = require('path');

const svgBackground = `
<svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#4F46E5;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#EC4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Full background with brand gradient -->
  <rect width="1024" height="1024" fill="url(#brandGradient)" />
</svg>
`;

// Create output directory
const outputDir = path.join(__dirname, 'app-icons');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Save the background SVG
const bgPath = path.join(outputDir, 'adaptive-icon-background.svg');
fs.writeFileSync(bgPath, svgBackground.trim());

console.log('✅ Android Adaptive Icon Background Created!');
console.log('');
console.log('📁 File: app-icons/adaptive-icon-background.svg');
console.log('');
console.log('🎨 Gradient:');
console.log('   • Top-left: #4F46E5 (Indigo)');
console.log('   • Center: #8B5CF6 (Purple)');
console.log('   • Bottom-right: #EC4899 (Pink)');
console.log('');
console.log('📐 Specifications:');
console.log('   • Size: 1024×1024 pixels');
console.log('   • Format: SVG (convert to PNG for use)');
console.log('   • No transparency');
console.log('');
console.log('🔄 Convert to PNG:');
console.log('');
console.log('Method 1 - ImageMagick:');
console.log('   convert app-icons/adaptive-icon-background.svg -resize 1024x1024 adaptive-icon-background.png');
console.log('');
console.log('Method 2 - Online Tool:');
console.log('   • Visit: https://cloudconvert.com/svg-to-png');
console.log('   • Upload: app-icons/adaptive-icon-background.svg');
console.log('   • Download as: adaptive-icon-background.png');
console.log('');
console.log('Method 3 - Use Logo Designer:');
console.log('   • Open: http://localhost:3000/logo-designer');
console.log('   • Set background to gradient theme');
console.log('   • Take screenshot or export');
console.log('');
console.log('📱 Android Adaptive Icon Structure:');
console.log('');
console.log('   ┌─────────────────────────┐');
console.log('   │  Background Layer       │ ← adaptive-icon-background.png');
console.log('   │  (Gradient)             │');
console.log('   └─────────────────────────┘');
console.log('              +');
console.log('   ┌─────────────────────────┐');
console.log('   │  Foreground Layer       │ ← adaptive-icon.png');
console.log('   │  (Logo with alpha)      │');
console.log('   └─────────────────────────┘');
console.log('              =');
console.log('   ┌─────────────────────────┐');
console.log('   │  Final Icon             │');
console.log('   │  (System combines both) │');
console.log('   └─────────────────────────┘');
console.log('');
console.log('💡 Pro Tip:');
console.log('   The gradient background provides depth and ensures your');
console.log('   icon looks great regardless of the device shape mask!');
console.log('');
