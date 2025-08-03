import { Product } from '@/types/product';

// Base path for mockups
const MOCKUPS_BASE_PATH = '/SyntaxThreads-WarriorSeries-Mockups/Mockups';

// Map product languages to their folder names
const getLanguageFolderName = (language: string, fit: string): string => {
  const fitSuffix = fit === 'Classic' ? 'Classic Fit' : 'Premium';
  
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
  
  // Define image patterns based on the observed file structure
  const imagePatterns = [
    // Front views (prioritize .jpeg over .jpg)
    `Front,Black, Person 1, ${getImagePrefix(product)}.jpeg`,
    `Front,Black, Person 1, ${getImagePrefix(product)}.jpg`,
    `Front,Black, Person 2, ${getImagePrefix(product)}.jpeg`, 
    `Front,Black, Person 2, ${getImagePrefix(product)}.jpg`,
    `Front, Black ${getImagePrefix(product)}.jpeg`,
    `Front, Black ${getImagePrefix(product)}.jpg`,
    
    // Back views
    `Back, Black, Person 1, ${getImagePrefix(product)}.jpg`,
    `Back, Black, Person 2, ${getImagePrefix(product)}.jpg`,
    `Back, Black ${getImagePrefix(product)}.jpeg`,
    `Back, Black ${getImagePrefix(product)}.jpg`,
    
    // Person wearing (back views)
    `Person Back, Black ${getImagePrefix(product)}.jpeg`,
    `Person Back, Black ${getImagePrefix(product)}.jpg`,
  ];

  // Filter out duplicates by preferring .jpeg over .jpg
  const uniqueImages: string[] = [];
  const seenBasenames = new Set<string>();

  for (const pattern of imagePatterns) {
    const fullPath = `${basePath}/${pattern}`;
    const basename = pattern.replace(/\.(jpeg|jpg)$/, '');
    
    // If we haven't seen this image basename, or if this is a .jpeg version
    if (!seenBasenames.has(basename) || pattern.endsWith('.jpeg')) {
      if (pattern.endsWith('.jpeg')) {
        // Remove any .jpg version we might have added
        const jpgIndex = uniqueImages.findIndex(img => img.replace(/\.(jpeg|jpg)$/, '') === basename);
        if (jpgIndex !== -1) {
          uniqueImages[jpgIndex] = fullPath;
        } else {
          uniqueImages.push(fullPath);
        }
      } else if (!seenBasenames.has(basename)) {
        uniqueImages.push(fullPath);
      }
      seenBasenames.add(basename);
    }
  }

  return uniqueImages.slice(0, 6); // Limit to 6 best images
};

// Get the image prefix based on product details
const getImagePrefix = (product: Product): string => {
  switch (product.language) {
    case 'Python':
      return product.fit === 'Classic' ? 'Python Warrior Classic Fit' : 'Python Warrior Mockup';
    case 'Java':
      return product.fit === 'Classic' ? 'Java Warrior Classic Fit' : 'Java Warrior Heavyweight Mockup';
    case 'Rust':
      return product.fit === 'Classic' ? 'Rust Warrior' : 'Rust Warior Heavyweight Mockup'; // Note: keeping typo from folder
    case 'TypeScript':
      return product.fit === 'Classic' ? 'Typescript Warrior Mockup' : 'Premium Heavyweight TypeScript Mockup';
    case 'C#':
      return product.fit === 'Classic' ? 'C# Warrior Mockup' : 'C# Warrior Mockup';
    default:
      return '';
  }
};

// Placeholder image for when mockups aren't available
export const getPlaceholderImage = (product: Product): string => {
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