const fs = require('fs');

const filePath = './src/data/burujData.json';
let content = fs.readFileSync(filePath, 'utf8');

// Clean up duplicates first
content = content.replace(/\(repeat Hadad times: your name \+ mother's name\) \(repeat Hadad times: your name \+ mother's name\)(?: \(repeat Hadad times: your name \+ mother's name\))?/g, '(repeat Hadad times: your name + mother\'s name)');

// Fix spacing issues
content = content.replace(/Ya ([A-Z][a-z']+)\(repeat/g, 'Ya $1 (repeat');

// Now update French instructions
const frenchPatterns = [
  {
    from: /"Réciter le verset coranique \(([^)]+)\)[^"]*"/g,
    to: '"Réciter le verset coranique ($1) (répéter Hadad fois: votre nom + nom de la mère)"'
  },
  {
    from: /"Réciter les Noms Divins \(([^)]+)\)[^"]*"/g,
    to: '"Réciter les Noms Divins ($1) (répéter Hadad fois: votre nom + nom de la mère)"'
  },
  {
    from: /"Réciter le nom de l'Ange: ([^"\n]+)"/g,
    to: '"Réciter le nom de l\'Ange: $1 (répéter Hadad fois: votre nom + nom de la mère)"'
  },
  {
    from: /"Réciter le nom du Jinn: ([^"\n]+)"/g,
    to: '"Réciter le nom du Jinn: $1 (répéter Hadad fois: votre nom + nom de la mère)"'
  }
];

console.log('Cleaning and updating instructions...\n');

frenchPatterns.forEach((p, i) => {
  const matches = content.match(p.from);
  content = content.replace(p.from, p.to);
  console.log(`French ${i + 1}: ${matches ? matches.length : 0} updates`);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('\n✅ Instructions cleaned and updated!');
