const fs = require('fs');

const filePath = './src/data/burujData.json';
let content = fs.readFileSync(filePath, 'utf8');

// Pattern replacements for English instructions
const replacements = [
  // Quranic verse - add repetition count
  {
    from: /Recite the Quranic verse \(([^)]+)\) 3-7 times( with reflection)?/g,
    to: 'Recite the Quranic verse ($1) (the amount of the Hadad=name + mother)'
  },
  // Divine Names - standardize format
  {
    from: /Recite Divine Names \(([^)]+)\) (?:your calculated|the calculated ʿadad|the calculated) number of times/g,
    to: 'Recite Divine Names ($1) (the amount of the Hadad=name + mother)'
  },
  // Angel name - add repetition count
  {
    from: /Recite the Angel name: (Ya [^"\n]+)"/g,
    to: 'Recite the Angel name: $1 (the amount of the Hadad=name + mother)"'
  },
  // Jinn name - add repetition count (but check if already has it)
  {
    from: /Recite the Jinn name: (Ya [^"\n(]+)"/g,
    to: 'Recite the Jinn name: $1 (the amount of the Hadad=name + mother)"'
  }
];

console.log('Applying instruction format updates...\n');

replacements.forEach((r, i) => {
  const before = content;
  content = content.replace(r.from, r.to);
  const changes = (before.match(r.from) || []).length;
  console.log(`${i + 1}. Applied ${changes} replacements for: ${r.from}`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('\n✅ File updated successfully!');
