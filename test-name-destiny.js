// Quick test for name "Destiny" calculations
const { ABJAD_MAGHRIBI } = require('./src/lib/abjad-constants');

// Simple transliteration for testing
const nameArabic = "ديستني"; // Destiny in Arabic

// Calculate Abjad value
function calculateKabir(name) {
  let total = 0;
  for (const char of name) {
    const value = ABJAD_MAGHRIBI[char] || 0;
    if (value > 0) {
      console.log(`${char} = ${value}`);
    }
    total += value;
  }
  return total;
}

// Digital root
function digitalRoot(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return n;
}

console.log("\n🌟 Name Destiny Calculation for 'Destiny' (ديستني)\n");
console.log("Letter-by-letter breakdown:");
console.log("─".repeat(40));

const kabir = calculateKabir(nameArabic);

console.log("─".repeat(40));
console.log(`\n📊 Results:`);
console.log(`Kabīr (Total): ${kabir}`);
console.log(`Ṣaghīr (Digital Root): ${digitalRoot(kabir)}`);
console.log(`Element (Mod 4): ${['Fire', 'Earth', 'Air', 'Water'][kabir % 4]}`);
console.log(`Burj (Mod 12): ${['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'][kabir % 12]}\n`);
