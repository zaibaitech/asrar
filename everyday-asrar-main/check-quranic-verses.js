const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/burujData.json', 'utf8'));

// Day of week mapping based on planet rulers
// Sunday=0, Monday=1, Tuesday=2, Wednesday=3, Thursday=4, Friday=5, Saturday=6
const dayMapping = {
  0: 'Sunday (Sun - Fire)',
  1: 'Monday (Moon - Water)', 
  2: 'Tuesday (Mars - Fire)',
  3: 'Wednesday (Mercury - Air)',
  4: 'Thursday (Jupiter - Water)',
  5: 'Friday (Venus - Earth)',
  6: 'Saturday (Saturn - Earth)'
};

// Element cycle: 1=Fire, 2=Earth, 3=Air, 4=Water (repeating)
const burujToDay = {
  1: 0,  // Fire -> Sunday
  2: 6,  // Earth -> Saturday  
  3: 3,  // Air -> Wednesday
  4: 1,  // Water -> Monday
  5: 0,  // Fire -> Sunday
  6: 6,  // Earth -> Saturday
  7: 5,  // Air -> Friday (special case)
  8: 1,  // Water -> Monday
  9: 0,  // Fire -> Sunday
  10: 6, // Earth -> Saturday
  11: 4, // Air -> Thursday
  12: 1  // Water -> Monday
};

const expectedVerses = {
  0: 'Alhamdulillahi rabbil \'alamin',  // Sunday
  1: 'Ar-Rahmani r-Rahim',              // Monday
  2: 'Maliki yawmi al-din',             // Tuesday
  3: 'Iyyaka na\'budu wa iyyaka nasta\'in', // Wednesday
  4: 'Ihdina al-sirata al-mustaqim',    // Thursday
  5: 'Sirata alladhina an\'amta \'alayhim', // Friday (corrected)
  6: 'Ghayri al-maghdubi \'alayhim wala al-dallin' // Saturday
};

console.log('═══════════════════════════════════════════════════════════');
console.log('QURANIC VERSE AUDIT BY BURUJ AND DAY');
console.log('═══════════════════════════════════════════════════════════\n');

for (let i = 1; i <= 12; i++) {
  const buruj = data.buruj_data[i.toString()];
  const day = burujToDay[i];
  const dayName = dayMapping[day];
  const expected = expectedVerses[day];
  const actual = buruj.spiritual_practice?.quranic_verse?.transliteration || 'NOT FOUND';
  const match = actual.includes(expected) || expected.includes(actual) ? '✓' : '✗';
  
  console.log(`Buruj ${i} (${buruj.element}) -> ${dayName}`);
  console.log(`  Expected: ${expected}`);
  console.log(`  Actual:   ${actual}`);
  console.log(`  Status:   ${match === '✓' ? '✅ CORRECT' : '❌ MISMATCH'}`);
  console.log('');
}
