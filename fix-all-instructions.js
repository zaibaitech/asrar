const fs = require('fs');

const filePath = './src/data/burujData.json';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the pattern - all should say the same thing
const patterns = [
  // Quranic verse
  {
    from: /"Recite the Quranic verse \(([^)]+)\)[^"]*"/g,
    to: '"Recite the Quranic verse ($1) (repeat Hadad times: your name + mother\'s name)"'
  },
  // Divine Names
  {
    from: /"Recite Divine Names \(([^)]+)\)[^"]*"/g,
    to: '"Recite Divine Names ($1) (repeat Hadad times: your name + mother\'s name)"'
  },
  // Angel - remove duplicate
  {
    from: /"Recite the Angel name: ([^(]+) \(the amount of the Hadad=name \+ mother\) \(the amount of the Hadad=name \+ mother\)"/g,
    to: '"Recite the Angel name: $1(repeat Hadad times: your name + mother\'s name)"'
  },
  // Angel - normal
  {
    from: /"Recite the Angel name: ([^(]+) \(the amount of the Hadad=name \+ mother\)"/g,
    to: '"Recite the Angel name: $1(repeat Hadad times: your name + mother\'s name)"'
  },
  // Angel - old format
  {
    from: /"Recite the Angel name: (Ya [^"\n]+)"/g,
    to: '"Recite the Angel name: $1 (repeat Hadad times: your name + mother\'s name)"'
  },
  // Jinn
  {
    from: /"Recite the Jinn name: ([^(]+) \(the amount of the Hadad=name \+ mother\)"/g,
    to: '"Recite the Jinn name: $1(repeat Hadad times: your name + mother\'s name)"'
  },
  // Jinn - old format
  {
    from: /"Recite the Jinn name: (Ya [^"\n]+)"/g,
    to: '"Recite the Jinn name: $1 (repeat Hadad times: your name + mother\'s name)"'
  }
];

console.log('Fixing all instruction formats...\n');

patterns.forEach((p, i) => {
  const before = content;
  content = content.replace(p.from, p.to);
  const matches = before.match(p.from);
  console.log(`${i + 1}. Pattern: ${matches ? matches.length : 0} matches`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('\n✅ All instructions updated!');
