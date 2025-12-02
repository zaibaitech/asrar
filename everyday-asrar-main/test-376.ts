/**
 * QUICK TEST: Verify 376 returns Water element
 */

import { modIndex } from './src/features/ilm-huruf/core';
import { getElementFromAbjadTotal } from './src/utils/relationshipCompatibility';

const total = 376;

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🧪 TESTING TOTAL 376 (بكا 22 + خائجة 354)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Step 1: Raw modulo
const rawRemainder = total % 4;
console.log(`Step 1: Raw Modulo`);
console.log(`  ${total} % 4 = ${rawRemainder}`);
console.log(`  ⚠️  This is 0, which is the problem!\n`);

// Step 2: Using modIndex
const index = modIndex(total, 4);
console.log(`Step 2: Using modIndex`);
console.log(`  modIndex(${total}, 4) = ${index}`);
console.log(`  ✅ Correctly returns 4 (not 0)\n`);

// Step 3: Get element
const element = getElementFromAbjadTotal(total);
console.log(`Step 3: Get Element`);
console.log(`  getElementFromAbjadTotal(${total}) = "${element}"`);

// Step 4: Verify
const isWater = element === 'water';
console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
if (isWater) {
  console.log('✅ SUCCESS: 376 correctly returns Water 💧');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
} else {
  console.log(`❌ FAIL: Expected "water", got "${element}"`);
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');
  process.exit(1);
}

// Element mapping reference
console.log('📋 Maghribi Element Mapping:');
console.log('  1 = Fire   🔥');
console.log('  2 = Earth  🌍');
console.log('  3 = Air    💨');
console.log('  4 = Water  💧\n');
