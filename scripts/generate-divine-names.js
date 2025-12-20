/**
 * Script to generate complete Divine Names data from Aladhan API
 * Source: https://api.aladhan.com/v1/asmaAlHusna
 */

const fs = require('fs');

// Read the API data
const apiData = require('/tmp/divine-names-api.json');

// French translations for the 99 Names
const frenchMeanings = {
  1: "Le Tout Miséricordieux", 2: "Le Très Miséricordieux", 3: "Le Roi",
  4: "Le Très Saint", 5: "La Paix", 6: "Le Fidèle", 7: "Le Gardien",
  8: "Le Tout-Puissant", 9: "Le Contraignant", 10: "Le Superbe",
  11: "Le Créateur", 12: "Celui qui donne un commencement à toute chose",
  13: "Le Formateur", 14: "Celui qui ne cesse de pardonner", 15: "Le Dominateur",
  16: "Le Donateur", 17: "Celui qui accorde la subsistance", 18: "Celui qui ouvre",
  19: "L'Omniscient", 20: "Celui qui restreint", 21: "Celui qui étend",
  22: "Celui qui abaisse", 23: "Celui qui élève", 24: "Celui qui donne la puissance",
  25: "Celui qui avilit", 26: "L'Audient", 27: "Le Clairvoyant",
  28: "Le Juge", 29: "Le Juste", 30: "Le Subtil", 31: "Le Bien Informé",
  32: "Le Longanime", 33: "Le Magnifique", 34: "Le Pardonneur",
  35: "Le Reconnaissant", 36: "Le Très Haut", 37: "Le Grand",
  38: "Le Préservateur", 39: "Le Gardien", 40: "Celui qui tient compte",
  41: "Le Majestueux", 42: "Le Généreux", 43: "Le Vigilant",
  44: "Celui qui exauce", 45: "L'Ample", 46: "Le Sage", 47: "Le Bien-Aimant",
  48: "Le Glorieux", 49: "Celui qui ressuscite", 50: "Le Témoin",
  51: "La Vérité", 52: "Le Garant", 53: "Le Fort", 54: "Le Très Fort",
  55: "Le Maître", 56: "Le Digne de louange", 57: "Celui qui compte toute chose",
  58: "Celui qui crée en premier", 59: "Celui qui redonne vie", 60: "Celui qui donne la vie",
  61: "Celui qui donne la mort", 62: "Le Vivant", 63: "Celui qui subsiste par Lui-même",
  64: "Celui qui trouve", 65: "Le Noble", 66: "L'Unique", 67: "L'Un",
  68: "Le Soutien universel", 69: "Le Puissant", 70: "Le Très Puissant",
  71: "Celui qui avance", 72: "Celui qui retarde", 73: "Le Premier",
  74: "Le Dernier", 75: "L'Apparent", 76: "Le Caché", 77: "Le Maître",
  78: "Le Très Elevé", 79: "Le Bon", 80: "Celui qui accepte le repentir",
  81: "Le Vengeur", 82: "Celui qui efface", 83: "Le Très Bienveillant",
  84: "Le Possesseur de la souveraineté", 85: "Le Majestueux et le Généreux",
  86: "L'Equitable", 87: "Celui qui réunit", 88: "Celui qui se suffit à Lui-même",
  89: "Celui qui enrichit", 90: "Celui qui empêche", 91: "Celui qui peut nuire",
  92: "Celui qui accorde le profit", 93: "La Lumière", 94: "Le Guide",
  95: "Le Novateur", 96: "Celui qui demeure", 97: "L'Héritier",
  98: "Celui qui dirige", 99: "Le Patient"
};

const output = apiData.data.map(name => {
  const num = name.number;
  const meaningFr = frenchMeanings[num] || name.en.meaning;
  
  // Escape single quotes for JavaScript string literals
  const escapeSingleQuotes = (str) => str.replace(/'/g, "\\'");
  
  return `  {
    number: ${num},
    arabic: '${escapeSingleQuotes(name.name)}',
    transliteration: '${escapeSingleQuotes(name.transliteration)}',
    meaningEn: '${escapeSingleQuotes(name.en.meaning)}',
    meaningFr: '${escapeSingleQuotes(meaningFr)}',
    meaningAr: '${escapeSingleQuotes(name.name)}',
    spiritualInfluence: '${escapeSingleQuotes(name.en.meaning)}',
    spiritualInfluenceFr: '${escapeSingleQuotes(meaningFr)}',
    spiritualInfluenceAr: '${escapeSingleQuotes(name.name)}',
    reflection: 'Reflect upon the Divine quality of ${escapeSingleQuotes(name.en.meaning)} in your life.',
    reflectionFr: 'Réfléchissez à la qualité divine de ${escapeSingleQuotes(meaningFr)} dans votre vie.',
    reflectionAr: 'تأمل في الصفة الإلهية ${escapeSingleQuotes(name.name)} في حياتك'
  }`;
}).join(',\n');

console.log(`export const DIVINE_NAMES_DATA: DivineName[] = [\n${output}\n];`);
