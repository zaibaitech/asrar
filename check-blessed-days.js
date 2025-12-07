const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./src/data/burujData.json', 'utf8'));

console.log('═══════════════════════════════════════════════════════════');
console.log('BURUJ BLESSED DAYS AND QURANIC VERSES');
console.log('═══════════════════════════════════════════════════════════\n');

for (let i = 1; i <= 12; i++) {
  const buruj = data.buruj_data[i.toString()];
  const blessedDay = buruj.blessed_day?.day?.en || 'NOT SET';
  const verse = buruj.spiritual_practice?.quranic_verse?.transliteration || 'NOT FOUND';
  const reference = buruj.spiritual_practice?.quranic_verse?.reference || '';
  
  console.log(`Buruj ${i} (${buruj.element.toUpperCase()})`);
  console.log(`  Blessed Day: ${blessedDay}`);
  console.log(`  Quranic Verse: ${verse}`);
  console.log(`  Reference: ${reference}`);
  console.log('');
}
