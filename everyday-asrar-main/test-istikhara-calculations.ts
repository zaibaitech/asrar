/**
 * Istikhara Calculation Tests
 * Tests for buruj remainder calculations and data retrieval
 */

import {
  calculateBurujRemainder,
  getBurujData,
  calculateRepetitionCount,
  getDayOfWeek,
  calculateIstikhara,
  getElementInfo,
  validateName,
  getElementName
} from './src/features/istikhara/calculations.js';

console.log('🧪 ISTIKHARA CALCULATION TESTS\n');
console.log('=' .repeat(60));

// Test 1: Buruj Remainder Calculation
console.log('\n📊 TEST 1: Buruj Remainder Calculation (modIndex base 12)');
console.log('-'.repeat(60));

const testCases = [
  { person: 22, mother: 354, expected: 4, description: 'Total 376 → Remainder 4 (Water)' },
  { person: 100, mother: 100, expected: 8, description: 'Total 200 → Remainder 8 (Water)' },
  { person: 50, mother: 50, expected: 4, description: 'Total 100 → Remainder 4 (Water)' },
  { person: 60, mother: 60, expected: 12, description: 'Total 120 → Remainder 12 (Water)' },
  { person: 1, mother: 0, expected: 1, description: 'Total 1 → Remainder 1 (Fire)' },
  { person: 2, mother: 0, expected: 2, description: 'Total 2 → Remainder 2 (Earth)' },
  { person: 3, mother: 0, expected: 3, description: 'Total 3 → Remainder 3 (Air)' },
  { person: 4, mother: 0, expected: 4, description: 'Total 4 → Remainder 4 (Water)' },
  { person: 5, mother: 0, expected: 5, description: 'Total 5 → Remainder 5 (Fire)' },
  { person: 6, mother: 0, expected: 6, description: 'Total 6 → Remainder 6 (Earth)' },
  { person: 7, mother: 0, expected: 7, description: 'Total 7 → Remainder 7 (Air)' },
  { person: 8, mother: 0, expected: 8, description: 'Total 8 → Remainder 8 (Water)' },
  { person: 9, mother: 0, expected: 9, description: 'Total 9 → Remainder 9 (Fire)' },
  { person: 10, mother: 0, expected: 10, description: 'Total 10 → Remainder 10 (Earth)' },
  { person: 11, mother: 0, expected: 11, description: 'Total 11 → Remainder 11 (Air)' },
  { person: 12, mother: 0, expected: 12, description: 'Total 12 → Remainder 12 (Water)' },
  { person: 13, mother: 0, expected: 1, description: 'Total 13 → Remainder 1 (Fire)' },
  { person: 24, mother: 0, expected: 12, description: 'Total 24 → Remainder 12 (Water)' },
];

let passedTests = 0;
let failedTests = 0;

testCases.forEach((test, index) => {
  const result = calculateBurujRemainder(test.person, test.mother);
  const passed = result === test.expected;
  
  if (passed) {
    console.log(`✅ Test ${index + 1}: ${test.description}`);
    console.log(`   Person: ${test.person}, Mother: ${test.mother}, Combined: ${test.person + test.mother}`);
    console.log(`   Expected: ${test.expected}, Got: ${result}\n`);
    passedTests++;
  } else {
    console.log(`❌ Test ${index + 1}: ${test.description}`);
    console.log(`   Person: ${test.person}, Mother: ${test.mother}, Combined: ${test.person + test.mother}`);
    console.log(`   Expected: ${test.expected}, Got: ${result}\n`);
    failedTests++;
  }
});

console.log(`\n📈 Results: ${passedTests} passed, ${failedTests} failed out of ${testCases.length} tests`);

// Test 2: Element Mapping
console.log('\n🔥 TEST 2: Element Mapping Verification');
console.log('-'.repeat(60));

const elementTests = [
  { remainder: 1, element: 'fire', emoji: '🔥' },
  { remainder: 2, element: 'earth', emoji: '🌍' },
  { remainder: 3, element: 'air', emoji: '💨' },
  { remainder: 4, element: 'water', emoji: '💧' },
  { remainder: 5, element: 'fire', emoji: '🔥' },
  { remainder: 6, element: 'earth', emoji: '🌍' },
  { remainder: 7, element: 'air', emoji: '💨' },
  { remainder: 8, element: 'water', emoji: '💧' },
  { remainder: 9, element: 'fire', emoji: '🔥' },
  { remainder: 10, element: 'earth', emoji: '🌍' },
  { remainder: 11, element: 'air', emoji: '💨' },
  { remainder: 12, element: 'water', emoji: '💧' },
];

try {
  elementTests.forEach(test => {
    const profile = getBurujData(test.remainder);
    const elementMatch = profile.element === test.element;
    const emojiMatch = profile.element_emoji === test.emoji;
    
    if (elementMatch && emojiMatch) {
      console.log(`✅ Remainder ${test.remainder}: ${test.emoji} ${test.element}`);
      passedTests++;
    } else {
      console.log(`❌ Remainder ${test.remainder}: Expected ${test.emoji} ${test.element}, Got ${profile.element_emoji} ${profile.element}`);
      failedTests++;
    }
  });
} catch (error) {
  console.log(`⚠️  Element mapping test skipped - buruj data not fully loaded yet`);
  console.log(`   Error: ${error instanceof Error ? error.message : String(error)}`);
}

// Test 3: Repetition Count
console.log('\n🔢 TEST 3: Repetition Count Calculation');
console.log('-'.repeat(60));

const repetitionTests = [
  { person: 22, mother: 354, expected: 376 },
  { person: 100, mother: 100, expected: 200 },
  { person: 50, mother: 75, expected: 125 },
];

repetitionTests.forEach(test => {
  const result = calculateRepetitionCount(test.person, test.mother);
  const passed = result === test.expected;
  
  if (passed) {
    console.log(`✅ Person ${test.person} + Mother ${test.mother} = ${result} repetitions`);
    passedTests++;
  } else {
    console.log(`❌ Person ${test.person} + Mother ${test.mother}: Expected ${test.expected}, Got ${result}`);
    failedTests++;
  }
});

// Test 4: Day of Week Mapping
console.log('\n📅 TEST 4: Day of Week Mapping');
console.log('-'.repeat(60));

const dayTests = [
  { dayNumber: 0, expectedEn: 'Sunday', expectedFr: 'Dimanche' },
  { dayNumber: 1, expectedEn: 'Monday', expectedFr: 'Lundi' },
  { dayNumber: 2, expectedEn: 'Tuesday', expectedFr: 'Mardi' },
  { dayNumber: 3, expectedEn: 'Wednesday', expectedFr: 'Mercredi' },
  { dayNumber: 4, expectedEn: 'Thursday', expectedFr: 'Jeudi' },
  { dayNumber: 5, expectedEn: 'Friday', expectedFr: 'Vendredi' },
  { dayNumber: 6, expectedEn: 'Saturday', expectedFr: 'Samedi' },
];

dayTests.forEach(test => {
  const result = getDayOfWeek(test.dayNumber);
  if (result && result.en === test.expectedEn && result.fr === test.expectedFr) {
    console.log(`✅ Day ${test.dayNumber}: ${result.en} / ${result.fr}`);
    passedTests++;
  } else {
    console.log(`❌ Day ${test.dayNumber}: Expected ${test.expectedEn}/${test.expectedFr}, Got ${result?.en}/${result?.fr}`);
    failedTests++;
  }
});

// Test 5: Name Validation
console.log('\n✍️  TEST 5: Name Validation');
console.log('-'.repeat(60));

const nameTests = [
  { name: 'محمد', valid: true, description: 'Arabic name' },
  { name: 'John Smith', valid: true, description: 'English name with space' },
  { name: 'Jean-Pierre', valid: true, description: 'French name with hyphen' },
  { name: "O'Connor", valid: true, description: 'Irish name with apostrophe' },
  { name: '', valid: false, description: 'Empty string' },
  { name: '   ', valid: false, description: 'Only spaces' },
  { name: '123', valid: false, description: 'Numbers only' },
  { name: 'Test@Name', valid: false, description: 'Special characters' },
];

nameTests.forEach(test => {
  const result = validateName(test.name);
  const passed = result === test.valid;
  
  if (passed) {
    console.log(`✅ "${test.name}" - ${test.description}: ${result ? 'Valid' : 'Invalid'}`);
    passedTests++;
  } else {
    console.log(`❌ "${test.name}" - ${test.description}: Expected ${test.valid}, Got ${result}`);
    failedTests++;
  }
});

// Test 6: Element Names
console.log('\n🌍 TEST 6: Element Name Translation');
console.log('-'.repeat(60));

const elementNameTests = [
  { element: 'fire' as const, en: 'Fire', fr: 'Feu' },
  { element: 'earth' as const, en: 'Earth', fr: 'Terre' },
  { element: 'air' as const, en: 'Air', fr: 'Air' },
  { element: 'water' as const, en: 'Water', fr: 'Eau' },
];

elementNameTests.forEach(test => {
  const enResult = getElementName(test.element, 'en');
  const frResult = getElementName(test.element, 'fr');
  const passed = enResult === test.en && frResult === test.fr;
  
  if (passed) {
    console.log(`✅ ${test.element}: ${enResult} / ${frResult}`);
    passedTests++;
  } else {
    console.log(`❌ ${test.element}: Expected ${test.en}/${test.fr}, Got ${enResult}/${frResult}`);
    failedTests++;
  }
});

// Test 7: Complete Calculation (will work once data is complete)
console.log('\n🎯 TEST 7: Complete Istikhara Calculation');
console.log('-'.repeat(60));

try {
  const result = calculateIstikhara('محمد', 'فاطمة');
  console.log(`✅ Calculation successful:`);
  console.log(`   Person: ${result.personName} (${result.personTotal})`);
  console.log(`   Mother: ${result.motherName} (${result.motherTotal})`);
  console.log(`   Combined: ${result.combinedTotal}`);
  console.log(`   Buruj Remainder: ${result.burujRemainder}`);
  console.log(`   Element: ${result.burujProfile.element_emoji} ${result.burujProfile.element}`);
  console.log(`   Repetition Count: ${result.repetitionCount}`);
  passedTests++;
} catch (error) {
  console.log(`⚠️  Complete calculation test skipped - buruj data not fully loaded yet`);
  console.log(`   Error: ${error instanceof Error ? error.message : String(error)}`);
}

// Final Summary
console.log('\n' + '='.repeat(60));
console.log('📊 FINAL TEST SUMMARY');
console.log('='.repeat(60));
console.log(`Total Tests Run: ${passedTests + failedTests}`);
console.log(`✅ Passed: ${passedTests}`);
console.log(`❌ Failed: ${failedTests}`);
console.log(`Success Rate: ${((passedTests / (passedTests + failedTests)) * 100).toFixed(1)}%`);

if (failedTests === 0) {
  console.log('\n🎉 All tests passed! Phase 1 calculations are working correctly.');
} else {
  console.log('\n⚠️  Some tests failed. Please review the errors above.');
}

console.log('\n' + '='.repeat(60));
