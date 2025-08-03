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
        ? 'C# Warrior Classic Fit Mockups'
        : 'C# Warrior Premium Mockups';
    default:
      return '';
  }
};

// Get all images for a product, filtered and prioritized
export const getProductImages = (product: Product): string[] => {
  const folderName = getLanguageFolderName(product.language, product.fit);
  if (!folderName) return [];

  const basePath = `${MOCKUPS_BASE_PATH}/${folderName}`;
  
  // Define image patterns based on actual file structure observed
  // Only using .jpeg files and excluding 'Small' thumbnails
  const imagePatterns: string[] = [];
  
  // Language and fit specific patterns based on actual file names
  switch (product.language) {
    case 'Python':
      if (product.fit === 'Classic') {
        imagePatterns.push(
          'Front, Black, Person 1, Python Warrior Classic Fit.jpeg',
          'Front, Black, Person 2, Python Warrior Classic Fit.jpeg',
          'Back, Black, Person 1, Python Warrior Classic Fit.jpg',
          'Back, Black, Person 2, Python Warrior Classic Fit.jpg'
        );
      } else {
        imagePatterns.push(
          'Back, Black Python Warrior Mockup .jpeg', // Note: space before .jpeg in actual filename
          'Person Back, Black Python Warrior Mockup.jpeg'
        );
      }
      break;
      
    case 'Java':
      if (product.fit === 'Classic') {
        imagePatterns.push(
          'Front, Black Java Warrior Classic Fit.jpeg',
          'Front, Black, Person 1, Java Warrior Classic Fit.jpeg',
          'Front, Black, Person 2, Java Warrior Classic Fit.jpeg',
          'Back,  Black, Person 1, Java Warrior Classic Fit.jpg',
          'Back,  Black, Person 2, Java Warrior Classic Fit.jpg'
        );
      } else {
        imagePatterns.push(
          'Back, Black Java Warrior Heavyweight Mockup.jpeg',
          'Person Back, Black Java Warrior Heavyweight Mockup.jpeg'
        );
      }
      break;
      
    case 'Rust':
      if (product.fit === 'Classic') {
        imagePatterns.push(
          'Front,Black, Person 1, Rust Warrior.jpeg',
          'Front,Black, Person 2, Rust Warrior.jpeg',
          'Back,Black, Person 1, Rust Warrior.jpg',
          'Back,Black, Person 2, Rust Warrior.jpg'
        );
      } else {
        imagePatterns.push(
          'Back, Black Heavyweight Mockup.jpeg',
          'Person Back, Black Rust Warior Heavyweight Mockup.jpeg' // Note: typo in actual filename
        );
      }
      break;
      
    case 'TypeScript':
      if (product.fit === 'Classic') {
        imagePatterns.push(
          'Front,Black, Person 1, Typescript Warrior Mockup.jpeg',
          'Front,Black, Person 2, Typescript Warrior Mockup.jpeg',
          'Back,Black, Person 1, Typescript Warrior Mockup.jpg',
          'Back, Black, Person 2, Typescript Warrior Mockup.jpg'
        );
      } else {
        imagePatterns.push(
          'Back, Black,Premium Heavyweight TypeScript Mockup.jpeg',
          'Person Back, Black,Premium Heavyweight TypeScript Mockup.jpeg'
        );
      }
      break;
      
    case 'C#':
      if (product.fit === 'Classic') {
        imagePatterns.push(
          'Front,Black, Person 1, C# Warrior Mockup.jpeg',
          'Front,Black, Person 2, C# Warrior Mockup.jpeg'
        );
      } else {
        imagePatterns.push(
          'Back, Black C# Warrior Mockup.jpeg',
          'Person Back, Black C# Warrior Mockup.jpeg'
        );
      }
      break;
  }

  // Filter out 'Small' images and only return .jpeg files
  const validImages: string[] = [];
  
  for (const pattern of imagePatterns) {
    // Skip any patterns that contain 'Small' (thumbnails)
    if (pattern.toLowerCase().includes('small')) continue;
    
    // Only include .jpeg files for high quality
    if (pattern.endsWith('.jpeg')) {
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