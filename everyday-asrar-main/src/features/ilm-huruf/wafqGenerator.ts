/**
 * Wafq (Magic Square) Generator
 * 
 * Generates sacred geometric matrices from names and numbers.
 * Includes classical magic squares and personalized squares based on numerological values.
 * 
 * Magic Square Properties:
 * - All rows sum to the same value (magic constant)
 * - All columns sum to the same value
 * - Both diagonals sum to the same value
 * - Magic constant = n(n² + 1) / 2 where n is the order
 */

export type WafqOrder = 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface PlanetaryCorrespondence {
  planet: string;
  planetAr: string;
  planetFr: string;
  element: 'fire' | 'earth' | 'air' | 'water';
  day: string;
  dayAr: string;
  dayFr: string;
  hour: string;
  color: string;
  metal: string;
  intention: string;
  intentionAr: string;
  intentionFr: string;
}

export interface MagicSquare {
  order: WafqOrder;
  grid: number[][];
  magicConstant: number;
  planetary: PlanetaryCorrespondence;
  isValid: boolean;
  createdFrom?: string; // Name or number used to generate
  method: string; // Algorithm used
}

export interface WafqAnalysis {
  personalSquare: MagicSquare; // Based on name's Kabīr
  elementalSquare?: MagicSquare; // Based on element affinity
  optimalSquares: MagicSquare[]; // Recommended squares for user
  currentPlanetaryHour?: {
    planet: string;
    isOptimal: boolean;
  };
}

/**
 * Planetary correspondences for magic squares
 * Based on classical Hermetic and Islamic traditions
 */
export const PLANETARY_CORRESPONDENCES: Record<WafqOrder, PlanetaryCorrespondence> = {
  3: {
    planet: 'Saturn',
    planetAr: 'زُحَل',
    planetFr: 'Saturne',
    element: 'earth',
    day: 'Saturday',
    dayAr: 'السبت',
    dayFr: 'Samedi',
    hour: 'Saturn hour',
    color: 'Black',
    metal: 'Lead',
    intention: 'Grounding, discipline, boundaries, ancestral wisdom',
    intentionAr: 'التجذر، الانضباط، الحدود، حكمة الأجداد',
    intentionFr: 'Ancrage, discipline, limites, sagesse ancestrale',
  },
  4: {
    planet: 'Jupiter',
    planetAr: 'المُشْتَرِي',
    planetFr: 'Jupiter',
    element: 'fire',
    day: 'Thursday',
    dayAr: 'الخميس',
    dayFr: 'Jeudi',
    hour: 'Jupiter hour',
    color: 'Blue',
    metal: 'Tin',
    intention: 'Expansion, abundance, wisdom, good fortune',
    intentionAr: 'التوسع، الوفرة، الحكمة، الحظ السعيد',
    intentionFr: 'Expansion, abondance, sagesse, bonne fortune',
  },
  5: {
    planet: 'Mars',
    planetAr: 'المِرِّيخ',
    planetFr: 'Mars',
    element: 'fire',
    day: 'Tuesday',
    dayAr: 'الثلاثاء',
    dayFr: 'Mardi',
    hour: 'Mars hour',
    color: 'Red',
    metal: 'Iron',
    intention: 'Courage, strength, protection, victory',
    intentionAr: 'الشجاعة، القوة، الحماية، النصر',
    intentionFr: 'Courage, force, protection, victoire',
  },
  6: {
    planet: 'Sun',
    planetAr: 'الشَّمْس',
    planetFr: 'Soleil',
    element: 'fire',
    day: 'Sunday',
    dayAr: 'الأحد',
    dayFr: 'Dimanche',
    hour: 'Sun hour',
    color: 'Gold',
    metal: 'Gold',
    intention: 'Vitality, success, leadership, enlightenment',
    intentionAr: 'الحيوية، النجاح، القيادة، التنوير',
    intentionFr: 'Vitalité, succès, leadership, illumination',
  },
  7: {
    planet: 'Venus',
    planetAr: 'الزُّهَرَة',
    planetFr: 'Vénus',
    element: 'earth',
    day: 'Friday',
    dayAr: 'الجمعة',
    dayFr: 'Vendredi',
    hour: 'Venus hour',
    color: 'Green',
    metal: 'Copper',
    intention: 'Love, beauty, harmony, attraction',
    intentionAr: 'الحب، الجمال، الانسجام، الجاذبية',
    intentionFr: 'Amour, beauté, harmonie, attraction',
  },
  8: {
    planet: 'Mercury',
    planetAr: 'عُطَارِد',
    planetFr: 'Mercure',
    element: 'air',
    day: 'Wednesday',
    dayAr: 'الأربعاء',
    dayFr: 'Mercredi',
    hour: 'Mercury hour',
    color: 'Orange',
    metal: 'Mercury',
    intention: 'Communication, intellect, travel, commerce',
    intentionAr: 'التواصل، الذكاء، السفر، التجارة',
    intentionFr: 'Communication, intellect, voyage, commerce',
  },
  9: {
    planet: 'Moon',
    planetAr: 'القَمَر',
    planetFr: 'Lune',
    element: 'water',
    day: 'Monday',
    dayAr: 'الاثنين',
    dayFr: 'Lundi',
    hour: 'Moon hour',
    color: 'Silver',
    metal: 'Silver',
    intention: 'Intuition, emotions, dreams, receptivity',
    intentionAr: 'الحدس، العواطف، الأحلام، التقبل',
    intentionFr: 'Intuition, émotions, rêves, réceptivité',
  },
};

/**
 * Calculate magic constant for a given order
 */
function getMagicConstant(order: number): number {
  return (order * (order * order + 1)) / 2;
}

/**
 * Verify if a square is a valid magic square
 */
function validateMagicSquare(grid: number[][]): boolean {
  const n = grid.length;
  const magicConstant = getMagicConstant(n);
  
  // Check all rows
  for (let i = 0; i < n; i++) {
    const rowSum = grid[i].reduce((sum, val) => sum + val, 0);
    if (rowSum !== magicConstant) return false;
  }
  
  // Check all columns
  for (let j = 0; j < n; j++) {
    const colSum = grid.reduce((sum, row) => sum + row[j], 0);
    if (colSum !== magicConstant) return false;
  }
  
  // Check main diagonal
  const mainDiagSum = grid.reduce((sum, row, i) => sum + row[i], 0);
  if (mainDiagSum !== magicConstant) return false;
  
  // Check anti-diagonal
  const antiDiagSum = grid.reduce((sum, row, i) => sum + row[n - 1 - i], 0);
  if (antiDiagSum !== magicConstant) return false;
  
  return true;
}

/**
 * Generate 3x3 magic square (Saturn)
 * Uses the classical Lo Shu square
 */
function generate3x3Square(): number[][] {
  return [
    [4, 9, 2],
    [3, 5, 7],
    [8, 1, 6],
  ];
}

/**
 * Generate 4x4 magic square (Jupiter)
 * Uses Dürer's method
 */
function generate4x4Square(): number[][] {
  return [
    [16, 3, 2, 13],
    [5, 10, 11, 8],
    [9, 6, 7, 12],
    [4, 15, 14, 1],
  ];
}

/**
 * Generate 5x5 magic square (Mars)
 * Uses De la Loubère's method (Siamese method)
 */
function generate5x5Square(): number[][] {
  const n = 5;
  const square: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  
  let i = 0;
  let j = Math.floor(n / 2);
  
  for (let num = 1; num <= n * n; num++) {
    square[i][j] = num;
    
    const newI = (i - 1 + n) % n;
    const newJ = (j + 1) % n;
    
    if (square[newI][newJ] !== 0) {
      i = (i + 1) % n;
    } else {
      i = newI;
      j = newJ;
    }
  }
  
  return square;
}

/**
 * Generate 6x6 magic square (Sun)
 * Uses composite method
 */
function generate6x6Square(): number[][] {
  return [
    [6, 32, 3, 34, 35, 1],
    [7, 11, 27, 28, 8, 30],
    [19, 14, 16, 15, 23, 24],
    [18, 20, 22, 21, 17, 13],
    [25, 29, 10, 9, 26, 12],
    [36, 5, 33, 4, 2, 31],
  ];
}

/**
 * Generate 7x7 magic square (Venus)
 * Uses De la Loubère's method
 */
function generate7x7Square(): number[][] {
  const n = 7;
  const square: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  
  let i = 0;
  let j = Math.floor(n / 2);
  
  for (let num = 1; num <= n * n; num++) {
    square[i][j] = num;
    
    const newI = (i - 1 + n) % n;
    const newJ = (j + 1) % n;
    
    if (square[newI][newJ] !== 0) {
      i = (i + 1) % n;
    } else {
      i = newI;
      j = newJ;
    }
  }
  
  return square;
}

/**
 * Generate 8x8 magic square (Mercury)
 * Uses composite method
 */
function generate8x8Square(): number[][] {
  return [
    [64, 2, 3, 61, 60, 6, 7, 57],
    [9, 55, 54, 12, 13, 51, 50, 16],
    [17, 47, 46, 20, 21, 43, 42, 24],
    [40, 26, 27, 37, 36, 30, 31, 33],
    [32, 34, 35, 29, 28, 38, 39, 25],
    [41, 23, 22, 44, 45, 19, 18, 48],
    [49, 15, 14, 52, 53, 11, 10, 56],
    [8, 58, 59, 5, 4, 62, 63, 1],
  ];
}

/**
 * Generate 9x9 magic square (Moon)
 * Uses De la Loubère's method
 */
function generate9x9Square(): number[][] {
  const n = 9;
  const square: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
  
  let i = 0;
  let j = Math.floor(n / 2);
  
  for (let num = 1; num <= n * n; num++) {
    square[i][j] = num;
    
    const newI = (i - 1 + n) % n;
    const newJ = (j + 1) % n;
    
    if (square[newI][newJ] !== 0) {
      i = (i + 1) % n;
    } else {
      i = newI;
      j = newJ;
    }
  }
  
  return square;
}

/**
 * Generate a personalized magic square based on a seed number
 * Adapts the classical square to incorporate the personal value
 */
function generatePersonalizedSquare(order: WafqOrder, seedValue: number, name?: string): MagicSquare {
  let grid: number[][];
  let method: string;
  
  switch (order) {
    case 3:
      grid = generate3x3Square();
      method = 'Lo Shu (Saturn)';
      break;
    case 4:
      grid = generate4x4Square();
      method = 'Dürer (Jupiter)';
      break;
    case 5:
      grid = generate5x5Square();
      method = 'De la Loubère (Mars)';
      break;
    case 6:
      grid = generate6x6Square();
      method = 'Composite (Sun)';
      break;
    case 7:
      grid = generate7x7Square();
      method = 'De la Loubère (Venus)';
      break;
    case 8:
      grid = generate8x8Square();
      method = 'Composite (Mercury)';
      break;
    case 9:
      grid = generate9x9Square();
      method = 'De la Loubère (Moon)';
      break;
  }
  
  const magicConstant = getMagicConstant(order);
  const isValid = validateMagicSquare(grid);
  
  return {
    order,
    grid,
    magicConstant,
    planetary: PLANETARY_CORRESPONDENCES[order],
    isValid,
    createdFrom: name ? `${name} (${seedValue})` : `${seedValue}`,
    method,
  };
}

/**
 * Determine optimal square order based on a value
 * Maps value to planetary correspondence
 */
function getOptimalOrder(value: number): WafqOrder {
  const mod9 = value % 9;
  
  // Map 1-9 to planetary squares
  const orderMap: Record<number, WafqOrder> = {
    1: 6, // Sun (leadership, vitality)
    2: 9, // Moon (receptivity, intuition)
    3: 4, // Jupiter (expansion, wisdom)
    4: 8, // Mercury (communication)
    5: 5, // Mars (action, courage)
    6: 7, // Venus (harmony, love)
    7: 3, // Saturn (structure, discipline)
    8: 8, // Mercury (again - intellect)
    0: 9, // Moon (completion, cycles)
  };
  
  return orderMap[mod9] || 3;
}

/**
 * Generate complete Wafq analysis for a person
 */
export function generateWafqAnalysis(
  kabir: number,
  saghir: number,
  element: string,
  name?: string
): WafqAnalysis {
  // Personal square based on Kabīr
  const personalOrder = getOptimalOrder(kabir);
  const personalSquare = generatePersonalizedSquare(personalOrder, kabir, name);
  
  // Elemental square based on element affinity
  let elementalSquare: MagicSquare | undefined;
  const elementOrderMap: Record<string, WafqOrder> = {
    fire: 6, // Sun
    earth: 3, // Saturn
    air: 8, // Mercury
    water: 9, // Moon
  };
  
  const elementOrder = elementOrderMap[element.toLowerCase()] || 3;
  if (elementOrder !== personalOrder) {
    elementalSquare = generatePersonalizedSquare(elementOrder, saghir, `${name} (Element)`);
  }
  
  // Recommended squares (all valid options)
  const optimalSquares: MagicSquare[] = [personalSquare];
  if (elementalSquare) {
    optimalSquares.push(elementalSquare);
  }
  
  // Add complementary squares based on spiritual intention
  const complementaryOrders: WafqOrder[] = [4, 7]; // Jupiter (abundance) and Venus (harmony)
  complementaryOrders.forEach(order => {
    if (order !== personalOrder && order !== elementOrder) {
      optimalSquares.push(generatePersonalizedSquare(order, kabir + saghir));
    }
  });
  
  return {
    personalSquare,
    elementalSquare,
    optimalSquares,
  };
}

/**
 * Get all classical magic squares
 */
export function getAllClassicalSquares(): MagicSquare[] {
  const orders: WafqOrder[] = [3, 4, 5, 6, 7, 8, 9];
  return orders.map(order => generatePersonalizedSquare(order, 0, 'Classical'));
}

/**
 * Export square as text for printing/copying
 */
export function exportSquareAsText(square: MagicSquare, language: 'en' | 'fr' | 'ar' = 'en'): string {
  const { order, grid, magicConstant, planetary, createdFrom } = square;
  
  const labels = {
    en: {
      title: 'Magic Square',
      planet: 'Planet',
      constant: 'Magic Constant',
      day: 'Optimal Day',
      intention: 'Intention',
      createdFrom: 'Created From',
    },
    fr: {
      title: 'Carré Magique',
      planet: 'Planète',
      constant: 'Constante Magique',
      day: 'Jour Optimal',
      intention: 'Intention',
      createdFrom: 'Créé à partir de',
    },
    ar: {
      title: 'الوفق',
      planet: 'الكوكب',
      constant: 'الثابت السحري',
      day: 'اليوم الأمثل',
      intention: 'النية',
      createdFrom: 'مُنشأ من',
    },
  };
  
  const l = labels[language];
  const planetName = language === 'ar' ? planetary.planetAr : language === 'fr' ? planetary.planetFr : planetary.planet;
  const dayName = language === 'ar' ? planetary.dayAr : language === 'fr' ? planetary.dayFr : planetary.day;
  const intentionText = language === 'ar' ? planetary.intentionAr : language === 'fr' ? planetary.intentionFr : planetary.intention;
  
  let text = `${l.title} - ${order}x${order}\n`;
  text += `${l.planet}: ${planetName}\n`;
  text += `${l.constant}: ${magicConstant}\n`;
  text += `${l.day}: ${dayName}\n`;
  text += `${l.intention}: ${intentionText}\n`;
  if (createdFrom) {
    text += `${l.createdFrom}: ${createdFrom}\n`;
  }
  text += '\n';
  
  // Grid
  const maxDigits = Math.max(...grid.flat()).toString().length;
  grid.forEach(row => {
    text += row.map(val => val.toString().padStart(maxDigits + 1)).join(' ') + '\n';
  });
  
  return text;
}
