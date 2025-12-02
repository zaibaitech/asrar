const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/burujData.json', 'utf8'));

const expectedByDay = {
  'Sunday': { verse: 'Alhamdulillahi', ref: 'Al-Fatiha 1:2' },
  'Monday': { verse: 'Ar-Rahmani', ref: 'Al-Fatiha 1:3' },
  'Tuesday': { verse: 'Maliki yawmi', ref: 'Al-Fatiha 1:4' },
  'Wednesday': { verse: 'Iyyaka na\'budu', ref: 'Al-Fatiha 1:5' },
  'Thursday': { verse: 'Ihdina', ref: 'Al-Fatiha 1:6' },
  'Friday': { verse: 'Sirata alladhina', ref: 'Al-Fatiha 1:7a' },
  'Saturday': { verse: 'Ghayri', ref: 'Al-Fatiha 1:7b' }
};

console.log('═══════════════════════════════════════════════════════════');
console.log('✅ FINAL QURANIC VERSE VERIFICATION - ALL AL-FATIHA');
console.log('═══════════════════════════════════════════════════════════\n');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let allCorrect = true;

days.forEach(day => {
  const expected = expectedByDay[day];
  const burujs = [];
  
  for (let i = 1; i <= 12; i++) {
    const buruj = data.buruj_data[i.toString()];
    const blessedDay = buruj.blessed_day?.day?.en;
    if (blessedDay === day) {
      const verse = buruj.spiritual_practice?.quranic_verse?.transliteration || '';
      const ref = buruj.spiritual_practice?.quranic_verse?.reference || '';
      const match = verse.includes(expected.verse) && ref.includes(expected.ref);
      burujs.push({ num: i, element: buruj.element, verse, ref, match });
      if (!match) allCorrect = false;
    }
  }
  
  console.log(`${day}: ${expected.verse} (${expected.ref})`);
  burujs.forEach(b => {
    console.log(`  ${b.match ? '✅' : '❌'} Buruj ${b.num} (${b.element}): ${b.ref}`);
  });
  console.log('');
});

console.log('═══════════════════════════════════════════════════════════');
console.log(allCorrect ? '✅ ALL VERSES CORRECTLY MAPPED!' : '❌ SOME VERSES NEED FIXING');
console.log('═══════════════════════════════════════════════════════════');
