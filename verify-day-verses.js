const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/burujData.json', 'utf8'));

// User's expected mapping
const expectedByDay = {
  'Sunday': 'Alhamdulillahi rabbil \'alamin',
  'Monday': 'Ar-Rahmani r-Rahim',
  'Tuesday': 'Maliki yawmi al-din',
  'Wednesday': 'Iyyaka na\'budu wa iyyaka nasta\'in',
  'Thursday': 'Ihdina al-sirata al-mustaqim',
  'Friday': 'Sirata alladhina an\'amta \'alayhim',
  'Saturday': 'Ghayri al-maghdubi \'alayhim wala al-dallin'
};

console.log('═══════════════════════════════════════════════════════════');
console.log('DAY-TO-VERSE MAPPING VERIFICATION');
console.log('═══════════════════════════════════════════════════════════\n');

const dayBurujMap = {};

// Group buruj by blessed day
for (let i = 1; i <= 12; i++) {
  const buruj = data.buruj_data[i.toString()];
  const day = buruj.blessed_day?.day?.en || 'NOT SET';
  if (!dayBurujMap[day]) dayBurujMap[day] = [];
  dayBurujMap[day].push({
    buruj: i,
    element: buruj.element,
    verse: buruj.spiritual_practice?.quranic_verse?.transliteration || 'NOT FOUND'
  });
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

days.forEach(day => {
  console.log(`\n${day.toUpperCase()}`);
  console.log(`Expected: ${expectedByDay[day]}`);
  console.log(`Buruj for this day:`);
  
  const burujs = dayBurujMap[day] || [];
  burujs.forEach(b => {
    const match = b.verse.toLowerCase().includes(expectedByDay[day].toLowerCase()) || 
                  expectedByDay[day].toLowerCase().includes(b.verse.toLowerCase());
    const status = match ? '✅' : '❌';
    console.log(`  ${status} Buruj ${b.buruj} (${b.element}): ${b.verse}`);
  });
});
