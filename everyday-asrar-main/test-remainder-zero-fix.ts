/**
 * COMPREHENSIVE VERIFICATION TEST FOR REMAINDER 0 BUG FIX
 * 
 * Tests that all modulo calculations properly handle the case where remainder = 0
 * Critical bug: When total % 4 = 0 or total % 12 = 0, must return base (4 or 12), NOT 0
 * 
 * Example: 376 % 4 = 0 → Should return 4 (Water), NOT 0 (undefined)
 */

import { modIndex } from './src/features/ilm-huruf/core';
import { getElementFromAbjadTotal } from './src/utils/relationshipCompatibility';

// ============================================================================
// TEST 1: CORE modIndex FUNCTION
// ============================================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('TEST 1: Core modIndex Function');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

interface TestCase {
  value: number;
  base: 4 | 12;
  expected: number;
  description: string;
}

const modIndexTests: TestCase[] = [
  // Mod 4 tests (Elements)
  { value: 100, base: 4, expected: 4, description: '100 % 4 = 0 → Water (4)' },
  { value: 376, base: 4, expected: 4, description: '376 % 4 = 0 → Water (4)' },
  { value: 1000, base: 4, expected: 4, description: '1000 % 4 = 0 → Water (4)' },
  { value: 101, base: 4, expected: 1, description: '101 % 4 = 1 → Fire (1)' },
  { value: 102, base: 4, expected: 2, description: '102 % 4 = 2 → Earth (2)' },
  { value: 103, base: 4, expected: 3, description: '103 % 4 = 3 → Air (3)' },
  { value: 4, base: 4, expected: 4, description: '4 % 4 = 0 → Water (4)' },
  { value: 8, base: 4, expected: 4, description: '8 % 4 = 0 → Water (4)' },
  { value: 12, base: 4, expected: 4, description: '12 % 4 = 0 → Water (4)' },
  
  // Mod 12 tests (Buruj/Zodiac)
  { value: 12, base: 12, expected: 12, description: '12 % 12 = 0 → Pisces (12)' },
  { value: 24, base: 12, expected: 12, description: '24 % 12 = 0 → Pisces (12)' },
  { value: 144, base: 12, expected: 12, description: '144 % 12 = 0 → Pisces (12)' },
  { value: 13, base: 12, expected: 1, description: '13 % 12 = 1 → Aries (1)' },
  { value: 25, base: 12, expected: 1, description: '25 % 12 = 1 → Aries (1)' },
  { value: 11, base: 12, expected: 11, description: '11 % 12 = 11 → Aquarius (11)' },
];

let modIndexPassed = 0;
let modIndexFailed = 0;

modIndexTests.forEach(test => {
  const result = modIndex(test.value, test.base);
  const passed = result === test.expected;
  
  if (passed) {
    console.log(`✅ PASS: ${test.description}`);
    console.log(`   Result: ${result}\n`);
    modIndexPassed++;
  } else {
    console.log(`❌ FAIL: ${test.description}`);
    console.log(`   Expected: ${test.expected}, Got: ${result}\n`);
    modIndexFailed++;
  }
});

console.log(`modIndex Tests: ${modIndexPassed} passed, ${modIndexFailed} failed\n`);

// ============================================================================
// TEST 2: ELEMENT CALCULATION FROM ABJAD TOTAL
// ============================================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('TEST 2: Element Calculation (getElementFromAbjadTotal)');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

interface ElementTestCase {
  total: number;
  expectedElement: 'fire' | 'water' | 'air' | 'earth';
  description: string;
}

const elementTests: ElementTestCase[] = [
  // Critical remainder 0 cases
  { total: 100, expectedElement: 'water', description: '100 (% 4 = 0) → Water 💧' },
  { total: 376, expectedElement: 'water', description: '376 (% 4 = 0) → Water 💧' },
  { total: 1000, expectedElement: 'water', description: '1000 (% 4 = 0) → Water 💧' },
  { total: 4, expectedElement: 'water', description: '4 (% 4 = 0) → Water 💧' },
  { total: 8, expectedElement: 'water', description: '8 (% 4 = 0) → Water 💧' },
  { total: 12, expectedElement: 'water', description: '12 (% 4 = 0) → Water 💧' },
  { total: 16, expectedElement: 'water', description: '16 (% 4 = 0) → Water 💧' },
  { total: 20, expectedElement: 'water', description: '20 (% 4 = 0) → Water 💧' },
  
  // Other elements
  { total: 101, expectedElement: 'fire', description: '101 (% 4 = 1) → Fire 🔥' },
  { total: 1, expectedElement: 'fire', description: '1 (% 4 = 1) → Fire 🔥' },
  { total: 5, expectedElement: 'fire', description: '5 (% 4 = 1) → Fire 🔥' },
  
  { total: 102, expectedElement: 'earth', description: '102 (% 4 = 2) → Earth 🌍' },
  { total: 2, expectedElement: 'earth', description: '2 (% 4 = 2) → Earth 🌍' },
  { total: 6, expectedElement: 'earth', description: '6 (% 4 = 2) → Earth 🌍' },
  
  { total: 103, expectedElement: 'air', description: '103 (% 4 = 3) → Air 💨' },
  { total: 3, expectedElement: 'air', description: '3 (% 4 = 3) → Air 💨' },
  { total: 7, expectedElement: 'air', description: '7 (% 4 = 3) → Air 💨' },
];

let elementPassed = 0;
let elementFailed = 0;

elementTests.forEach(test => {
  const result = getElementFromAbjadTotal(test.total);
  const passed = result === test.expectedElement;
  
  if (passed) {
    console.log(`✅ PASS: ${test.description}`);
    console.log(`   Result: ${result}\n`);
    elementPassed++;
  } else {
    console.log(`❌ FAIL: ${test.description}`);
    console.log(`   Expected: ${test.expectedElement}, Got: ${result}\n`);
    elementFailed++;
  }
});

console.log(`Element Tests: ${elementPassed} passed, ${elementFailed} failed\n`);

// ============================================================================
// TEST 3: MAGHRIBI SYSTEM ELEMENT ORDER
// ============================================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('TEST 3: Maghribi System Element Order Verification');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

console.log('MAGHRIBI SYSTEM (West/North African):');
console.log('  1 = Fire   (نار)   🔥');
console.log('  2 = Earth  (تراب)  🌍');
console.log('  3 = Air    (هواء)  💨');
console.log('  4 = Water  (ماء)   💧\n');

const maghribiTests = [
  { remainder: 1, element: 'fire' },
  { remainder: 2, element: 'earth' },
  { remainder: 3, element: 'air' },
  { remainder: 4, element: 'water' },
];

let maghribiPassed = 0;
let maghribiFailed = 0;

maghribiTests.forEach(test => {
  const result = getElementFromAbjadTotal(test.remainder);
  const passed = result === test.element;
  
  if (passed) {
    console.log(`✅ Remainder ${test.remainder} → ${test.element}`);
    maghribiPassed++;
  } else {
    console.log(`❌ Remainder ${test.remainder} → Expected ${test.element}, Got ${result}`);
    maghribiFailed++;
  }
});

console.log(`\nMaghribi Tests: ${maghribiPassed} passed, ${maghribiFailed} failed\n`);

// ============================================================================
// FINAL SUMMARY
// ============================================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('FINAL TEST SUMMARY');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const totalPassed = modIndexPassed + elementPassed + maghribiPassed;
const totalFailed = modIndexFailed + elementFailed + maghribiFailed;
const totalTests = totalPassed + totalFailed;

console.log(`Total Tests: ${totalTests}`);
console.log(`✅ Passed: ${totalPassed}`);
console.log(`❌ Failed: ${totalFailed}\n`);

if (totalFailed === 0) {
  console.log('🎉 ALL TESTS PASSED! Remainder 0 bug is FIXED! 🎉\n');
  console.log('✅ modIndex correctly handles 0 → base mapping');
  console.log('✅ Element calculations use 1-indexed system (1-4)');
  console.log('✅ Maghribi element order is correct (1=Fire, 2=Earth, 3=Air, 4=Water)');
  console.log('✅ Critical test case: 376 % 4 = 0 → Water (NOT undefined!)');
} else {
  console.log('⚠️  SOME TESTS FAILED - Please review the failures above\n');
  process.exit(1);
}

// ============================================================================
// SPECIFIC CRITICAL TEST CASE FROM USER
// ============================================================================

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('USER CRITICAL TEST CASE');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const criticalTotal = 376;
const criticalElement = getElementFromAbjadTotal(criticalTotal);
const criticalIndex = modIndex(criticalTotal, 4);

console.log(`Name: "Baka" (بكا) = 22`);
console.log(`Mother: "Khaija" (خائجة) = 354`);
console.log(`Total: ${criticalTotal}`);
console.log(`\nCalculation:`);
console.log(`  ${criticalTotal} % 4 = ${criticalTotal % 4}`);
console.log(`  modIndex(${criticalTotal}, 4) = ${criticalIndex}`);
console.log(`  Element: ${criticalElement}`);
console.log(`\nExpected: Water 💧`);
console.log(`Result: ${criticalElement === 'water' ? '✅ CORRECT' : '❌ WRONG'}`);

if (criticalElement === 'water') {
  console.log('\n🎯 Critical test case PASSED! The bug is fixed!\n');
} else {
  console.log('\n❌ Critical test case FAILED! Element should be Water!\n');
  process.exit(1);
}
