/**
 * Pattern Recognition Module
 * Detects meaningful patterns in numerical values from Ilm al-Hurūf calculations
 * 
 * Patterns detected:
 * - Palindromes (121, 1331, 12321)
 * - Sequences (123, 234, 789)
 * - Repeated digits (111, 777, 888)
 * - Mirror numbers (12-21, 45-54)
 * - Sacred number multiples
 * - Angelic patterns (e.g., 11:11 style)
 */

export interface PatternMatch {
  type: 'palindrome' | 'sequence' | 'repeated' | 'mirror' | 'sacred_multiple' | 'angelic' | 'fibonacci' | 'golden';
  description: string;
  descriptionFr: string;
  significance: string;
  significanceFr: string;
  confidence: 'high' | 'medium' | 'low';
  icon: string;
}

export interface PatternAnalysis {
  value: number;
  patterns: PatternMatch[];
  hasPatterns: boolean;
  spiritualMessage?: string;
  spiritualMessageFr?: string;
}

// Sacred numbers from Islamic tradition
const SACRED_NUMBERS = [7, 12, 19, 28, 40, 70, 99, 114, 313, 786, 1001];

// Fibonacci sequence (first 20 numbers)
const FIBONACCI = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765];

/**
 * Check if a number is a palindrome
 */
function isPalindrome(num: number): boolean {
  const str = num.toString();
  return str === str.split('').reverse().join('');
}

/**
 * Check if digits form an ascending sequence
 */
function isAscendingSequence(num: number): boolean {
  const str = num.toString();
  if (str.length < 3) return false;
  
  for (let i = 0; i < str.length - 1; i++) {
    const current = parseInt(str[i]);
    const next = parseInt(str[i + 1]);
    if (next !== current + 1) return false;
  }
  return true;
}

/**
 * Check if digits form a descending sequence
 */
function isDescendingSequence(num: number): boolean {
  const str = num.toString();
  if (str.length < 3) return false;
  
  for (let i = 0; i < str.length - 1; i++) {
    const current = parseInt(str[i]);
    const next = parseInt(str[i + 1]);
    if (next !== current - 1) return false;
  }
  return true;
}

/**
 * Check if all digits are the same
 */
function isRepeatedDigits(num: number): boolean {
  const str = num.toString();
  if (str.length < 2) return false;
  return str.split('').every(digit => digit === str[0]);
}

/**
 * Check if number has significant digit repetition (e.g., 1110, 7777)
 */
function hasSignificantRepetition(num: number): boolean {
  const str = num.toString();
  if (str.length < 3) return false;
  
  const digitCount: Record<string, number> = {};
  for (const digit of str) {
    digitCount[digit] = (digitCount[digit] || 0) + 1;
  }
  
  // At least one digit appears 3+ times
  return Object.values(digitCount).some(count => count >= 3);
}

/**
 * Check if number is a multiple of sacred numbers
 */
function getSacredMultiples(num: number): number[] {
  return SACRED_NUMBERS.filter(sacred => num % sacred === 0 && num !== sacred);
}

/**
 * Check if number is in Fibonacci sequence
 */
function isFibonacci(num: number): boolean {
  return FIBONACCI.includes(num);
}

/**
 * Check if number relates to golden ratio (phi ≈ 1.618)
 */
function isGoldenRatio(num: number): boolean {
  const phi = 1.618033988749;
  // Check if number divided by another common number is close to phi
  const ratios = [89/55, 144/89, 233/144, 377/233]; // Fibonacci ratios approaching phi
  return ratios.some(ratio => Math.abs((num / 100) - ratio) < 0.01);
}

/**
 * Check for angelic patterns (repeating pairs: 11, 22, 33, etc.)
 */
function hasAngelicPattern(num: number): boolean {
  const str = num.toString();
  // Check for repeating pairs like 11, 22, 1111, 1212, etc.
  const patterns = [
    /^(\d)\1+$/, // All same digit (11, 111, 1111)
    /^(\d\d)\1+$/, // Repeating pairs (1212, 3434)
    /^(\d)\1(\d)\2$/, // Double pairs (1122, 3344)
  ];
  return patterns.some(pattern => pattern.test(str));
}

/**
 * Get mirror of a number (reverse digits)
 */
function getMirror(num: number): number {
  return parseInt(num.toString().split('').reverse().join(''));
}

/**
 * Analyze a number for patterns
 */
export function analyzePatterns(value: number): PatternAnalysis {
  const patterns: PatternMatch[] = [];
  
  // 1. Check for palindrome
  if (isPalindrome(value)) {
    patterns.push({
      type: 'palindrome',
      description: `Palindrome - reads same forwards and backwards`,
      descriptionFr: `Palindrome - se lit de la même manière dans les deux sens`,
      significance: 'Balance and symmetry - your path has natural harmony. What appears different from various angles is fundamentally the same.',
      significanceFr: 'Équilibre et symétrie - votre chemin a une harmonie naturelle. Ce qui paraît différent sous différents angles est fondamentalement identique.',
      confidence: 'high',
      icon: '🔄'
    });
  }
  
  // 2. Check for ascending sequence
  if (isAscendingSequence(value)) {
    patterns.push({
      type: 'sequence',
      description: `Ascending sequence - digits increase in order`,
      descriptionFr: `Séquence ascendante - les chiffres augmentent dans l'ordre`,
      significance: 'Progressive growth - your journey is one of steady upward development. Each step builds naturally on the previous.',
      significanceFr: 'Croissance progressive - votre voyage est une évolution ascendante constante. Chaque étape s\'appuie naturellement sur la précédente.',
      confidence: 'high',
      icon: '📈'
    });
  }
  
  // 3. Check for descending sequence
  if (isDescendingSequence(value)) {
    patterns.push({
      type: 'sequence',
      description: `Descending sequence - digits decrease in order`,
      descriptionFr: `Séquence descendante - les chiffres diminuent dans l'ordre`,
      significance: 'Refinement and distillation - your path involves releasing the unnecessary to reach essence. Simplification leads to clarity.',
      significanceFr: 'Raffinement et distillation - votre chemin implique de libérer l\'inutile pour atteindre l\'essence. La simplification mène à la clarté.',
      confidence: 'high',
      icon: '📉'
    });
  }
  
  // 4. Check for all repeated digits
  if (isRepeatedDigits(value)) {
    const digit = value.toString()[0];
    patterns.push({
      type: 'repeated',
      description: `Pure repetition - all digits are ${digit}`,
      descriptionFr: `Répétition pure - tous les chiffres sont ${digit}`,
      significance: `Amplified energy of ${digit} - this number carries intensified spiritual significance. The universe emphasizes this message.`,
      significanceFr: `Énergie amplifiée de ${digit} - ce nombre porte une signification spirituelle intensifiée. L'univers souligne ce message.`,
      confidence: 'high',
      icon: '✨'
    });
  } else if (hasSignificantRepetition(value)) {
    // Partial repetition
    patterns.push({
      type: 'repeated',
      description: `Significant repetition detected in digits`,
      descriptionFr: `Répétition significative détectée dans les chiffres`,
      significance: 'Emphasis and reinforcement - certain energies in your path are being highlighted and strengthened.',
      significanceFr: 'Accent et renforcement - certaines énergies de votre chemin sont mises en évidence et renforcées.',
      confidence: 'medium',
      icon: '🔁'
    });
  }
  
  // 5. Check for angelic patterns
  if (hasAngelicPattern(value)) {
    patterns.push({
      type: 'angelic',
      description: `Angelic number pattern - repeating sequence`,
      descriptionFr: `Motif de nombre angélique - séquence répétitive`,
      significance: 'Divine attention - this pattern often appears when spiritual guidance is near. Pay attention to synchronicities.',
      significanceFr: 'Attention divine - ce motif apparaît souvent lorsque la guidance spirituelle est proche. Soyez attentif aux synchronicités.',
      confidence: 'high',
      icon: '👼'
    });
  }
  
  // 6. Check for sacred number multiples
  const sacredMultiples = getSacredMultiples(value);
  if (sacredMultiples.length > 0) {
    const multiples = sacredMultiples.join(', ');
    patterns.push({
      type: 'sacred_multiple',
      description: `Multiple of sacred number(s): ${multiples}`,
      descriptionFr: `Multiple de nombre(s) sacré(s): ${multiples}`,
      significance: `Connected to Islamic sacred numerology (${multiples}). Your value resonates with traditional spiritual significance.`,
      significanceFr: `Connecté à la numérologie sacrée islamique (${multiples}). Votre valeur résonne avec une signification spirituelle traditionnelle.`,
      confidence: 'medium',
      icon: '🕌'
    });
  }
  
  // 7. Check if in Fibonacci sequence
  if (isFibonacci(value)) {
    patterns.push({
      type: 'fibonacci',
      description: `Fibonacci number - part of nature's sequence`,
      descriptionFr: `Nombre de Fibonacci - partie de la séquence de la nature`,
      significance: 'Natural growth pattern - your value aligns with the mathematical pattern found throughout creation, from flowers to galaxies.',
      significanceFr: 'Modèle de croissance naturelle - votre valeur s\'aligne avec le motif mathématique trouvé dans toute la création, des fleurs aux galaxies.',
      confidence: 'high',
      icon: '🌻'
    });
  }
  
  // 8. Check for mirror relationship with another meaningful number
  const mirror = getMirror(value);
  if (mirror !== value && (
    SACRED_NUMBERS.includes(mirror) ||
    FIBONACCI.includes(mirror) ||
    isPalindrome(mirror)
  )) {
    patterns.push({
      type: 'mirror',
      description: `Mirror number ${mirror} is significant`,
      descriptionFr: `Le nombre miroir ${mirror} est significatif`,
      significance: `Your value (${value}) mirrors ${mirror}, creating a hidden connection. What you seek may be found by looking at things in reverse.`,
      significanceFr: `Votre valeur (${value}) reflète ${mirror}, créant une connexion cachée. Ce que vous cherchez peut être trouvé en regardant les choses à l'envers.`,
      confidence: 'medium',
      icon: '🪞'
    });
  }
  
  // Generate overall spiritual message if patterns found
  let spiritualMessage: string | undefined;
  let spiritualMessageFr: string | undefined;
  
  if (patterns.length > 0) {
    const patternTypes = patterns.map(p => p.type);
    
    if (patternTypes.includes('palindrome') && patternTypes.includes('repeated')) {
      spiritualMessage = 'Your number carries perfect symmetry and amplification - a rare spiritual alignment indicating mastery and completion.';
      spiritualMessageFr = 'Votre nombre porte une symétrie parfaite et une amplification - un alignement spirituel rare indiquant maîtrise et achèvement.';
    } else if (patternTypes.includes('sequence') && patternTypes.includes('sacred_multiple')) {
      spiritualMessage = 'Progressive spiritual development aligned with sacred tradition - you are on a well-trodden path of enlightenment.';
      spiritualMessageFr = 'Développement spirituel progressif aligné avec la tradition sacrée - vous êtes sur un chemin bien tracé d\'illumination.';
    } else if (patternTypes.includes('angelic')) {
      spiritualMessage = 'The angels speak through numbers - this is a sign to trust your intuition and pay attention to subtle messages.';
      spiritualMessageFr = 'Les anges parlent à travers les nombres - c\'est un signe pour faire confiance à votre intuition et prêter attention aux messages subtils.';
    } else if (patterns.length >= 3) {
      spiritualMessage = 'Multiple patterns converge in your number - this indicates a pivotal moment of spiritual significance in your journey.';
      spiritualMessageFr = 'Plusieurs motifs convergent dans votre nombre - cela indique un moment crucial de signification spirituelle dans votre voyage.';
    }
  }
  
  return {
    value,
    patterns,
    hasPatterns: patterns.length > 0,
    spiritualMessage,
    spiritualMessageFr
  };
}

/**
 * Analyze multiple values and find cross-pattern relationships
 */
export function analyzeMultiplePatterns(values: Record<string, number>): {
  individual: Record<string, PatternAnalysis>;
  relationships: string[];
  relationshipsFr: string[];
} {
  const individual: Record<string, PatternAnalysis> = {};
  const relationships: string[] = [];
  const relationshipsFr: string[] = [];
  
  // Analyze each value individually
  for (const [key, value] of Object.entries(values)) {
    individual[key] = analyzePatterns(value);
  }
  
  // Look for relationships between values
  const valueArray = Object.entries(values);
  
  // Check for matching patterns across different values
  for (let i = 0; i < valueArray.length; i++) {
    for (let j = i + 1; j < valueArray.length; j++) {
      const [key1, val1] = valueArray[i];
      const [key2, val2] = valueArray[j];
      
      // Same pattern types
      const patterns1 = individual[key1].patterns.map(p => p.type);
      const patterns2 = individual[key2].patterns.map(p => p.type);
      const commonPatterns = patterns1.filter(p => patterns2.includes(p));
      
      if (commonPatterns.length > 0) {
        relationships.push(
          `${key1} and ${key2} share ${commonPatterns.join(', ')} patterns - aligned spiritual energies`
        );
        relationshipsFr.push(
          `${key1} et ${key2} partagent les motifs ${commonPatterns.join(', ')} - énergies spirituelles alignées`
        );
      }
      
      // Mirror relationship
      if (getMirror(val1) === val2) {
        relationships.push(
          `${key1} (${val1}) and ${key2} (${val2}) are mirror numbers - complementary spiritual forces`
        );
        relationshipsFr.push(
          `${key1} (${val1}) et ${key2} (${val2}) sont des nombres miroirs - forces spirituelles complémentaires`
        );
      }
      
      // Sum creates pattern
      const sum = val1 + val2;
      const sumAnalysis = analyzePatterns(sum);
      if (sumAnalysis.hasPatterns) {
        relationships.push(
          `${key1} + ${key2} = ${sum} which has ${sumAnalysis.patterns.length} pattern(s) - combined energy creates harmony`
        );
        relationshipsFr.push(
          `${key1} + ${key2} = ${sum} qui a ${sumAnalysis.patterns.length} motif(s) - l'énergie combinée crée l'harmonie`
        );
      }
    }
  }
  
  return {
    individual,
    relationships,
    relationshipsFr
  };
}
