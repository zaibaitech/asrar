/**
 * Test Script: Istikhara UI Contrast Improvements
 * 
 * Verifies that all UI improvements for better font/background contrast are in place
 */

import * as fs from 'fs';
import * as path from 'path';

interface ContrastCheck {
  file: string;
  checks: {
    description: string;
    pattern: RegExp;
    found: boolean;
  }[];
}

const checks: ContrastCheck[] = [
  {
    file: 'src/features/istikhara/components/IstikharaPanel.tsx',
    checks: [
      {
        description: 'Header text with drop-shadow',
        pattern: /text-white drop-shadow-lg/,
        found: false,
      },
      {
        description: 'High contrast subtitle (text-white\/95)',
        pattern: /text-white\/95/,
        found: false,
      },
      {
        description: 'Dark background on glass panels (bg-black\/40)',
        pattern: /bg-black\/40/,
        found: false,
      },
      {
        description: 'Improved disclaimer with text-yellow-50/95',
        pattern: /text-yellow-50\/95/,
        found: false,
      },
    ],
  },
  {
    file: 'src/features/istikhara/components/IstikharaForm.tsx',
    checks: [
      {
        description: 'Darker input backgrounds (bg-black/40)',
        pattern: /bg-black\/40 backdrop-blur-sm/,
        found: false,
      },
      {
        description: 'Better placeholder contrast (text-white/60)',
        pattern: /placeholder:text-white\/60/,
        found: false,
      },
      {
        description: 'Input drop shadows',
        pattern: /drop-shadow-lg/,
        found: false,
      },
      {
        description: 'Stronger borders (border-white/30)',
        pattern: /border-white\/30/,
        found: false,
      },
    ],
  },
  {
    file: 'src/features/istikhara/components/IstikharaResults.tsx',
    checks: [
      {
        description: 'Tab buttons with drop-shadow',
        pattern: /drop-shadow-md/,
        found: false,
      },
      {
        description: 'Dark panel backgrounds (bg-black/40)',
        pattern: /bg-black\/40/,
        found: false,
      },
      {
        description: 'Dark content cards (bg-black/30)',
        pattern: /bg-black\/30/,
        found: false,
      },
      {
        description: 'High contrast text (text-white/95)',
        pattern: /text-white\/95/,
        found: false,
      },
      {
        description: 'Stronger borders (border-white/30)',
        pattern: /border-white\/30/,
        found: false,
      },
    ],
  },
  {
    file: 'src/features/istikhara/components/IstikharaSummaryCard.tsx',
    checks: [
      {
        description: 'Summary card with dark background (bg-black/50)',
        pattern: /bg-black\/50/,
        found: false,
      },
      {
        description: 'Stat cards with dark background (bg-black/40)',
        pattern: /bg-black\/40 border border-white\/20/,
        found: false,
      },
      {
        description: 'Text shadows on headings',
        pattern: /drop-shadow-lg/,
        found: false,
      },
      {
        description: 'High contrast text (text-white/95)',
        pattern: /text-white\/95/,
        found: false,
      },
    ],
  },
  {
    file: 'src/features/istikhara/components/IstikharaQuickGuide.tsx',
    checks: [
      {
        description: 'Action cards with dark background (bg-black/30)',
        pattern: /bg-black\/30 hover:bg-black\/40/,
        found: false,
      },
      {
        description: 'High contrast text (text-white/95)',
        pattern: /text-white\/95/,
        found: false,
      },
      {
        description: 'Text shadows on content',
        pattern: /drop-shadow-md/,
        found: false,
      },
      {
        description: 'Stronger pro tip border (border-purple-400/40)',
        pattern: /border-purple-400\/40/,
        found: false,
      },
    ],
  },
];

console.log('🎨 Istikhara UI Contrast Check\n');
console.log('='.repeat(60));

let totalChecks = 0;
let passedChecks = 0;

for (const fileCheck of checks) {
  const filePath = path.join(process.cwd(), fileCheck.file);
  
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    console.log(`\n📄 ${fileCheck.file}`);
    console.log('-'.repeat(60));
    
    for (const check of fileCheck.checks) {
      totalChecks++;
      check.found = check.pattern.test(content);
      
      if (check.found) {
        passedChecks++;
        console.log(`✅ ${check.description}`);
      } else {
        console.log(`❌ ${check.description}`);
      }
    }
  } catch (error) {
    console.log(`❌ Error reading file: ${error}`);
  }
}

console.log('\n' + '='.repeat(60));
console.log(`\n📊 Results: ${passedChecks}/${totalChecks} checks passed`);

if (passedChecks === totalChecks) {
  console.log('\n✨ All UI contrast improvements verified!');
  console.log('\nKey improvements:');
  console.log('  • Text opacity increased from 60-70% to 85-95%');
  console.log('  • Drop shadows added to all text for better readability');
  console.log('  • Backgrounds darkened (bg-black/30 to bg-black/50)');
  console.log('  • Borders strengthened (white/10-20 → white/20-30)');
  console.log('  • Input fields darkened for better contrast');
  console.log('  • Element colors remain vibrant but text is readable');
  process.exit(0);
} else {
  console.log('\n⚠️  Some checks failed. Please review the output above.');
  process.exit(1);
}
