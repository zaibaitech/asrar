const fs = require('fs');

const filePath = './src/data/burujData.json';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Final cleanup...\n');

// Fix spacing after names (no space before parenthesis)
content = content.replace(/: (Ya [A-Za-z' ]+)\(/g, ': $1 (');

// Remove all duplicate French instructions
content = content.replace(/ \(répéter Hadad fois: votre nom \+ nom de la mère\) \(répéter Hadad fois: votre nom \+ nom de la mère\)/g, ' (répéter Hadad fois: votre nom + nom de la mère)');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Final cleanup complete!');
