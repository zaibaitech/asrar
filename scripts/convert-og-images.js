/**
 * Convert OG SVG images to JPG format
 * Requires: npm install sharp
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

const OG_DIR = path.join(__dirname, 'public', 'og');

const challenges = [
  'salawat',
  'istighfar',
  'divine-name',
  'prophetic-names',
  'custom',
  'default'
];

async function convertSvgToJpg(svgPath, jpgPath) {
  try {
    // Use ImageMagick convert command
    const cmd = `convert -density 300 -background white -flatten "${svgPath}" -resize 1200x630! -quality 90 "${jpgPath}"`;
    await execAsync(cmd);
    console.log(`✅ Converted: ${path.basename(jpgPath)}`);
  } catch (error) {
    console.error(`❌ Error converting ${path.basename(svgPath)}:`, error.message);
    console.log(`   Trying alternative method...`);
    
    // Alternative: try rsvg-convert
    try {
      const cmd = `rsvg-convert -w 1200 -h 630 -f png "${svgPath}" | convert png:- -quality 90 "${jpgPath}"`;
      await execAsync(cmd);
      console.log(`✅ Converted (alternative): ${path.basename(jpgPath)}`);
    } catch (altError) {
      console.error(`❌ Alternative method also failed for ${path.basename(svgPath)}`);
      throw altError;
    }
  }
}

async function convertAll() {
  console.log('🎨 Converting SVG OG images to JPG...\n');
  
  for (const challenge of challenges) {
    const svgPath = path.join(OG_DIR, `${challenge}.svg`);
    const jpgPath = path.join(OG_DIR, `${challenge}.jpg`);
    
    if (!fs.existsSync(svgPath)) {
      console.log(`⚠️  Skipping ${challenge}: SVG not found`);
      continue;
    }
    
    await convertSvgToJpg(svgPath, jpgPath);
  }
  
  console.log('\n✨ Conversion complete!');
  console.log('\nNext steps:');
  console.log('1. Check the images in /public/og/');
  console.log('2. Test on https://developers.facebook.com/tools/debug/');
  console.log('3. Share a challenge link to verify!');
}

// Check if ImageMagick is installed
execAsync('which convert').then(() => {
  convertAll().catch(console.error);
}).catch(() => {
  console.error('❌ ImageMagick not found. Installing...');
  console.log('\nPlease run one of these commands first:');
  console.log('  Ubuntu/Debian: sudo apt-get install imagemagick librsvg2-bin');
  console.log('  macOS: brew install imagemagick librsvg');
  console.log('\nThen run this script again: node scripts/convert-og-images.js');
});
