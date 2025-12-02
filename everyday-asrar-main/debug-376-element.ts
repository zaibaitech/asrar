/**
 * Debug Name Destiny calculation for 376
 */

import { modIndex, ELEMENTS, type ElementKey } from './src/features/ilm-huruf/core';

const total = 376;

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('🔍 DEBUG: Name Destiny Element Calculation for 376');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log(`Total (personKabir): ${total}`);
console.log(`Raw modulo: ${total} % 4 = ${total % 4}`);

const tabhIdx = modIndex(total, 4) as ElementKey;
console.log(`modIndex(${total}, 4) = ${tabhIdx}`);

const element = ELEMENTS[tabhIdx];
console.log(`\nELEMENTS[${tabhIdx}]:`);
console.log(`  en: "${element.en}"`);
console.log(`  fr: "${element.fr}"`);
console.log(`  ar: "${element.ar}"`);
console.log(`  icon: ${element.icon}`);
console.log(`  qualityEn: "${element.qualityEn}"`);

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
if (element.en === 'Water') {
  console.log('✅ CORRECT: Element is Water');
} else {
  console.log(`❌ WRONG: Element is ${element.en}, should be Water`);
}
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('📋 Full ELEMENTS mapping:');
for (let i = 1; i <= 4; i++) {
  const idx = i as ElementKey;
  console.log(`  ${idx}: ${ELEMENTS[idx].en} ${ELEMENTS[idx].icon}`);
}
console.log('');
