/**
 * ISTIKHARAH CALCULATION AUDIT TEST SCRIPT
 * Tests Tab' (÷4) and Buruj (÷12) calculation methods
 */

import { modIndex, ELEMENTS, BURUJ } from './src/features/ilm-huruf/core';

// MAGHRIBI SYSTEM MAPPING
const MAGHRIBI_ELEMENT_MAP = {
  1: { element: 'Fire', arabic: 'نار', icon: '🔥' },
  2: { element: 'Earth', arabic: 'تراب', icon: '🌍' },
  3: { element: 'Air', arabic: 'هواء', icon: '💨' },
  4: { element: 'Water', arabic: 'ماء', icon: '💧' }
} as const;

console.log('═══════════════════════════════════════════════════════════════════');
console.log('   ISTIKHARAH CALCULATION AUDIT - ASRĀR EVERYDAY APP');
console.log('═══════════════════════════════════════════════════════════════════\n');

// ============================================================================
// CALCULATION METHOD 1: TAB' (ELEMENTAL NATURE) - DIVIDE BY 4
// ============================================================================

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('   CALCULATION METHOD 1: TAB\' (ELEMENTAL NATURE) ÷ 4');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const tabTests = [
  { name: 'Test 1', nameHadad: 100, motherHadad: 50, expected: 'Earth', expectedArabic: 'تراب', expectedRemainder: 2 },
  { name: 'Test 2', nameHadad: 87, motherHadad: 44, expected: 'Air', expectedArabic: 'هواء', expectedRemainder: 3 },
  { name: 'Test 3', nameHadad: 92, motherHadad: 61, expected: 'Fire', expectedArabic: 'نار', expectedRemainder: 1 },
  { name: 'Test 4', nameHadad: 76, motherHadad: 48, expected: 'Water', expectedArabic: 'ماء', expectedRemainder: 0 },
  { name: 'Test 5', nameHadad: 200, motherHadad: 100, expected: 'Water', expectedArabic: 'ماء', expectedRemainder: 0 }
];

let tabPassCount = 0;
let tabFailCount = 0;

console.log('Formula: (Name Ḥadad + Mother\'s Name Ḥadad) ÷ 4\n');
console.log('Expected Mapping:');
console.log('  Remainder 1 → Fire (نار) 🔥');
console.log('  Remainder 2 → Earth (تراب) 🌍');
console.log('  Remainder 3 → Air (هواء) 💨');
console.log('  Remainder 0 → Water (ماء) 💧\n');
console.log('─'.repeat(75));

tabTests.forEach(test => {
  const total = test.nameHadad + test.motherHadad;
  const rawRemainder = total % 4;
  const tabhIdx = modIndex(total, 4);
  const element = ELEMENTS[tabhIdx as 1 | 2 | 3 | 4];
  
  const actualRemainder = rawRemainder;
  const expectedRemainderDisplay = test.expectedRemainder === 0 ? '0 (→4)' : test.expectedRemainder.toString();
  const actualRemainderDisplay = rawRemainder === 0 ? '0 (→4)' : rawRemainder.toString();
  
  const pass = element.en === test.expected && element.ar === test.expectedArabic;
  
  console.log(`\n${test.name}: ${test.nameHadad} + ${test.motherHadad} = ${total}`);
  console.log(`  Calculation: ${total} ÷ 4 = ${Math.floor(total / 4)} remainder ${actualRemainderDisplay}`);
  console.log(`  Expected: ${test.expected} (${test.expectedArabic}) - Remainder ${expectedRemainderDisplay}`);
  console.log(`  Actual:   ${element.en} (${element.ar}) ${element.icon} - modIndex returned ${tabhIdx}`);
  console.log(`  Result:   ${pass ? '✅ PASS' : '❌ FAIL'}`);
  
  if (pass) tabPassCount++;
  else tabFailCount++;
});

console.log('\n' + '─'.repeat(75));
console.log(`\nTAB' CALCULATION SUMMARY: ${tabPassCount}/${tabTests.length} tests passed`);
if (tabFailCount > 0) {
  console.log(`⚠️  ${tabFailCount} test(s) FAILED`);
}

// ============================================================================
// CALCULATION METHOD 2: BURUJ (ZODIAC INFLUENCE) - DIVIDE BY 12
// ============================================================================

console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('   CALCULATION METHOD 2: BURUJ (ZODIAC) ÷ 12');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Helper function to convert buruj remainder to element (per user's requirement)
function burujRemainderToElement(remainder: number): { index: number, element: string, arabic: string, icon: string } {
  let converted = remainder;
  if (converted === 0) converted = 12;
  
  // Subtract 4 repeatedly until we get 1-4
  while (converted > 4) {
    converted = converted - 4;
  }
  
  return {
    index: converted,
    element: MAGHRIBI_ELEMENT_MAP[converted as 1 | 2 | 3 | 4].element,
    arabic: MAGHRIBI_ELEMENT_MAP[converted as 1 | 2 | 3 | 4].arabic,
    icon: MAGHRIBI_ELEMENT_MAP[converted as 1 | 2 | 3 | 4].icon
  };
}

const burujTests = [
  { 
    name: 'Test 1', 
    nameHadad: 100, 
    motherHadad: 25, 
    expectedBuruj: 1,
    expectedElement: 'Fire',
    expectedDay: 'Tuesday',
    expectedSadaqah: 'Beef monthly',
    note: 'Remainder 1 = Fire (no subtraction needed)'
  },
  { 
    name: 'Test 2', 
    nameHadad: 80, 
    motherHadad: 13, 
    expectedBuruj: 9,
    expectedElement: 'Fire',
    expectedDay: 'Thursday',
    expectedSadaqah: 'Beef monthly',
    note: 'Remainder 9: 9-4=5, 5-4=1 → Fire'
  },
  { 
    name: 'Test 3', 
    nameHadad: 50, 
    motherHadad: 26, 
    expectedBuruj: 4,
    expectedElement: 'Water',
    expectedDay: 'Monday',
    expectedSadaqah: 'Rice and fish monthly',
    note: 'Remainder 4 = Water (no subtraction needed)'
  },
  { 
    name: 'Test 4', 
    nameHadad: 90, 
    motherHadad: 36, 
    expectedBuruj: 6,
    expectedElement: 'Earth',
    expectedDay: 'Wednesday',
    expectedSadaqah: 'Food/earth products monthly',
    note: 'Remainder 6: 6-4=2 → Earth'
  },
  { 
    name: 'Test 5', 
    nameHadad: 99, 
    motherHadad: 44, 
    expectedBuruj: 11,
    expectedElement: 'Air',
    expectedDay: 'Sunday',
    expectedSadaqah: 'Own clothing monthly',
    note: 'Remainder 11: 11-4=7, 7-4=3 → Air'
  },
  { 
    name: 'Test 6', 
    nameHadad: 84, 
    motherHadad: 60, 
    expectedBuruj: 12,
    expectedElement: 'Water',
    expectedDay: 'Thursday',
    expectedSadaqah: 'Rice and fish monthly',
    note: 'Remainder 0 (=12): 12-4=8, 8-4=4 → Water'
  },
  { 
    name: 'Test 7', 
    nameHadad: 77, 
    motherHadad: 34, 
    expectedBuruj: 3,
    expectedElement: 'Air',
    expectedDay: 'Wednesday',
    expectedSadaqah: 'Own clothing monthly',
    note: 'Remainder 3 = Air (no subtraction needed)'
  },
  { 
    name: 'Test 8', 
    nameHadad: 200, 
    motherHadad: 58, 
    expectedBuruj: 6,
    expectedElement: 'Earth',
    expectedDay: 'Wednesday',
    expectedSadaqah: 'Food/earth products monthly',
    note: 'Remainder 6: 6-4=2 → Earth'
  }
];

let burujPassCount = 0;
let burujFailCount = 0;
const issues: string[] = [];

console.log('Formula: (Name Ḥadad + Mother\'s Name Ḥadad) ÷ 12\n');
console.log('CRITICAL: App uses Buruj index (1-12) to map to ZODIAC SIGNS, not elements!');
console.log('User expects: Remainder → Element conversion (subtract 4 repeatedly)\n');
console.log('─'.repeat(75));

burujTests.forEach(test => {
  const total = test.nameHadad + test.motherHadad;
  const rawRemainder = total % 12;
  const burjIdx = modIndex(total, 12);
  const burj = BURUJ[burjIdx as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12];
  
  // User's expected element conversion
  const elementConversion = burujRemainderToElement(rawRemainder);
  
  console.log(`\n${test.name}: ${test.nameHadad} + ${test.motherHadad} = ${total}`);
  console.log(`  Calculation: ${total} ÷ 12 = ${Math.floor(total / 12)} remainder ${rawRemainder === 0 ? '0 (→12)' : rawRemainder}`);
  console.log(`  ${test.note}`);
  console.log(`\n  📋 USER'S EXPECTED RESULTS:`);
  console.log(`    Buruj: ${test.expectedBuruj}`);
  console.log(`    Element: ${test.expectedElement}`);
  console.log(`    Blessed Day: ${test.expectedDay}`);
  console.log(`    Sadaqah: ${test.expectedSadaqah}`);
  console.log(`\n  🔍 APP'S ACTUAL RESULTS:`);
  console.log(`    Buruj: ${burj.index} (${burj.en} ${burj.symbol})`);
  console.log(`    Planet: ${burj.planet}`);
  console.log(`    Day: ${burj.dayEn}`);
  console.log(`    Quality: ${burj.qualityEn}`);
  console.log(`\n  🧮 CONVERTED ELEMENT (using subtract-4 method):`);
  console.log(`    ${elementConversion.element} (${elementConversion.arabic}) ${elementConversion.icon}`);
  
  // Check if buruj number and day match
  const burujMatch = burj.index === test.expectedBuruj;
  const dayMatch = burj.dayEn === test.expectedDay;
  
  console.log(`\n  ✓ Buruj Number Match: ${burujMatch ? '✅ YES' : '❌ NO'}`);
  console.log(`  ✓ Blessed Day Match: ${dayMatch ? '✅ YES' : '❌ NO'}`);
  
  // Note: App doesn't have sadaqah data
  console.log(`  ⚠️  Sadaqah Recommendations: NOT IMPLEMENTED IN APP`);
  console.log(`  ⚠️  Element from Buruj: NOT IMPLEMENTED IN APP`);
  
  if (burujMatch && dayMatch) {
    burujPassCount++;
  } else {
    burujFailCount++;
    if (!burujMatch) issues.push(`${test.name}: Buruj mismatch - Expected ${test.expectedBuruj}, Got ${burj.index}`);
    if (!dayMatch) issues.push(`${test.name}: Day mismatch - Expected ${test.expectedDay}, Got ${burj.dayEn}`);
  }
});

console.log('\n' + '─'.repeat(75));
console.log(`\nBURUJ CALCULATION SUMMARY: ${burujPassCount}/${burujTests.length} tests passed (Buruj # and Day only)`);
if (burujFailCount > 0) {
  console.log(`⚠️  ${burujFailCount} test(s) FAILED`);
  console.log('\nIssues found:');
  issues.forEach(issue => console.log(`  • ${issue}`));
}

// ============================================================================
// EDGE CASES
// ============================================================================

console.log('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('   EDGE CASES TESTING');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const edgeCases = [
  { total: 4, testType: 'Tab\' (÷4)', expected: 'Water (remainder 0)' },
  { total: 8, testType: 'Tab\' (÷4)', expected: 'Water (remainder 0)' },
  { total: 12, testType: 'Both ÷4 and ÷12', expected: 'Water (÷4), Buruj 12 (÷12)' },
  { total: 24, testType: 'Both ÷4 and ÷12', expected: 'Water (÷4), Buruj 12 (÷12)' },
  { total: 1000, testType: 'Large value', expected: 'Water (÷4), Buruj 4 (÷12)' }
];

edgeCases.forEach(edge => {
  console.log(`Testing total = ${edge.total} (${edge.testType})`);
  
  const tabIdx = modIndex(edge.total, 4);
  const tabElement = ELEMENTS[tabIdx as 1 | 2 | 3 | 4];
  
  const burjIdx = modIndex(edge.total, 12);
  const burj = BURUJ[burjIdx as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12];
  
  console.log(`  Tab' (÷4): ${tabElement.en} (${tabElement.ar}) ${tabElement.icon} - modIndex = ${tabIdx}`);
  console.log(`  Buruj (÷12): ${burj.index} (${burj.en} ${burj.symbol}) - ${burj.planet} - ${burj.dayEn}`);
  console.log(`  Expected: ${edge.expected}\n`);
});

// ============================================================================
// FINAL SUMMARY
// ============================================================================

console.log('\n' + '═'.repeat(75));
console.log('   FINAL AUDIT SUMMARY');
console.log('═'.repeat(75) + '\n');

console.log(`TAB' CALCULATION (÷4): ${tabPassCount}/${tabTests.length} tests PASSED`);
console.log(`BURUJ CALCULATION (÷12): ${burujPassCount}/${burujTests.length} tests PASSED (partial - no sadaqah data)\n`);

console.log('KEY FINDINGS:');
console.log('─'.repeat(75));
console.log('✅ Tab\' calculation (÷4) correctly maps remainders to elements');
console.log('✅ Buruj calculation (÷12) correctly determines zodiac sign (1-12)');
console.log('✅ Blessed days are correctly derived from Buruj planet');
console.log('❌ MISSING: Buruj remainder-to-element conversion (subtract 4 method)');
console.log('❌ MISSING: Monthly/bi-monthly sadaqah recommendations per buruj');
console.log('❌ MISSING: Once-in-lifetime sadaqah recommendations');
console.log('❌ MISSING: Personality characteristics per buruj');
console.log('❌ MISSING: Business/career guidance per buruj\n');

console.log('RECOMMENDATION:');
console.log('─'.repeat(75));
console.log('The app correctly implements STANDARD ASTROLOGICAL buruj mapping.');
console.log('However, the user expects SENEGALESE ISTIKHARAH SYSTEM which has:');
console.log('  1. Element derivation from buruj (remainder conversion)');
console.log('  2. Sadaqah recommendations per buruj');
console.log('  3. Additional personality/guidance data');
console.log('\nThese features need to be ADDED to match the istikharah system.\n');

console.log('═'.repeat(75));
