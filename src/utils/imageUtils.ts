import { Product } from '@/types/product';

// Base path for mockups
const MOCKUPS_BASE_PATH = '/SyntaxThreads-WarriorSeries-Mockups/Mockups';

// Map product languages to their folder names
const getLanguageFolderName = (language: string, fit: string): string => {
  
  switch (language) {
    case 'Python':
      return fit === 'Classic' 
        ? 'Python Warrior Classic FIt Mockups' // Note: keeping the typo from actual folder name
        : 'Python Warrior Premium Mockups';
    case 'Java':
      return fit === 'Classic'
        ? 'Java Warrior Classic Fit Mockups'
        : 'Java Warrior Premium Mockups';
    case 'Rust':
      return fit === 'Classic'
        ? 'Rust Warrior Classic Fit'
        : 'Rust Warrior Premium Mockups';
    case 'TypeScript':
      return fit === 'Classic'
        ? 'TypeScript Warrior Classic Fit Mockups'
        : 'TypeScript Warrior Premium Mockups';
    case 'C#':
      return fit === 'Classic'
        ? 'CSharp Warrior Classic Fit Mockups'
        : 'CSharp Warrior Premium Mockups';
    default:
      return '';
  }
};

// Get all images for a product, filtered and prioritized
export const getProductImages = (product: Product): string[] => {
  const folderName = getLanguageFolderName(product.language, product.fit);
  if (!folderName) return [];

  const basePath = `${MOCKUPS_BASE_PATH}/${folderName}`;
  
  // Use standardized naming for Premium products, original logic for Classic
  if (product.fit === 'Premium') {
    return getPremiumImages(product, basePath);
  } else {
    return getClassicImages(product, basePath);
  }
};

// Get standardized Premium images (5 images each)
const getPremiumImages = (product: Product, basePath: string): string[] => {
  // Use "CSharp" instead of "C#" for file names
  const language = product.language === 'C#' ? 'CSharp' : product.language;
  
  const standardizedImages = [
    `Front Generic ${language} Warrior Premium.jpeg`,
    `Person Front Generic ${language} Warrior Premium.jpeg`, 
    `Person Closeup Generic ${language} Warrior Premium.jpeg`,
    `Back ${language} Warrior Premium.jpeg`,
    `Person Back ${language} Warrior Premium.jpeg`
  ];
  
  return standardizedImages.map(image => `${basePath}/${image}`);
};

// Get Classic images (original logic)
const getClassicImages = (product: Product, basePath: string): string[] => {
  const imagePatterns: string[] = [];
  
  switch (product.language) {
    case 'Python':
      imagePatterns.push(
        'Front, Black, Person 1, Python Warrior Classic Fit.jpeg',
        'Front, Black, Person 2, Python Warrior Classic Fit.jpeg',
        'Back, Black, Person 1, Python Warrior Classic Fit.jpg',
        'Back, Black, Person 2, Python Warrior Classic Fit.jpg'
      );
      break;
      
    case 'Java':
      imagePatterns.push(
        'Front, Black Java Warrior Classic Fit.jpeg',
        'Front, Black, Person 1, Java Warrior Classic Fit.jpeg',
        'Front, Black, Person 2, Java Warrior Classic Fit.jpeg',
        'Back,  Black, Person 1, Java Warrior Classic Fit.jpg',
        'Back,  Black, Person 2, Java Warrior Classic Fit.jpg'
      );
      break;
      
    case 'Rust':
      imagePatterns.push(
        'Front,Black, Person 1, Rust Warrior.jpeg',
        'Front,Black, Person 2, Rust Warrior.jpeg',
        'Back,Black, Person 1, Rust Warrior.jpg',
        'Back,Black, Person 2, Rust Warrior.jpg'
      );
      break;
      
    case 'TypeScript':
      imagePatterns.push(
        'Front,Black, Person 1, Typescript Warrior Mockup.jpeg',
        'Front,Black, Person 2, Typescript Warrior Mockup.jpeg',
        'Back,Black, Person 1, Typescript Warrior Mockup.jpg',
        'Back, Black, Person 2, Typescript Warrior Mockup.jpg'
      );
      break;
      
    case 'C#':
      imagePatterns.push(
        'Front,Black, Person 1, CSharp Warrior Mockup.jpeg',
        'Front,Black, Person 2, CSharp Warrior Mockup.jpeg'
      );
      break;
  }

  // Filter out 'Small' images and return both .jpeg and .jpg files
  const validImages: string[] = [];
  
  for (const pattern of imagePatterns) {
    if (pattern.toLowerCase().includes('small')) continue;
    if (pattern.endsWith('.jpeg') || pattern.endsWith('.jpg')) {
      const fullPath = `${basePath}/${pattern}`;
      validImages.push(fullPath);
    }
  }

  return validImages;
};


// Placeholder image for when mockups aren't available
export const getPlaceholderImage = (): string => {
  return '/SyntaxThreads-WarriorSeries-Mockups/Mockups/Front, Black Generic SyntaxThreads Mockup.jpeg';
};

// Check if an image exists (for graceful fallbacks)
export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};