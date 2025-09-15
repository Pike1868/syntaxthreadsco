import { Product } from '@/types/product';

// Collection configurations
const COLLECTIONS = {
  'warrior-series': {
    basePath: '/images/products/warrior-series',
    usesFitFolder: true,
    specificImageFiles: {
      classic: ['front-person1-black.webp', 'front-person2-black.webp', 'front-black.webp'],
      premium: ['back-person-black.webp', 'back-black.webp'],
    },
    genericImageFiles: {
      classic: ['back-shirt-only-black.webp', 'back-person-1-black.webp', 'back-person-2-black.webp'],
      premium: ['front-generic-black.webp', 'front-person-black.webp', 'front-person-generic-closeup-black.webp'],
    },
  },
  'hexcode-series': {
    basePath: '/images/products/hexcode-series',
    usesFitFolder: false,
    specificImageFiles: {
      premium: ['back-person-black.webp', 'back-black.webp'],
    },
    genericImageFiles: {
      premium: ['front--black.webp', 'person-front--black.webp', 'person-closeup--black.webp'],
    },
  },
} as const;

const getProductImagePaths = (product: Product, imageType: 'gallery' | 'thumbnails', collection: keyof typeof COLLECTIONS = 'warrior-series') => {
  const { language, fit } = product;
  const lang = language.toLowerCase().replace('#', 'sharp');
  const config = COLLECTIONS[collection];
  
  let specificPath: string;
  let genericPath: string;
  
  if (config.usesFitFolder) {
    specificPath = `${config.basePath}/${fit.toLowerCase()}/${lang}/${imageType}`;
    genericPath = `${config.basePath}/${fit.toLowerCase()}/generic/${imageType}`;
  } else {
    specificPath = `${config.basePath}/${lang}/${imageType}`;
    genericPath = `${config.basePath}/generic/${imageType}`;
  }

  const fitKey = fit.toLowerCase() as keyof typeof config.specificImageFiles;
  const specificFiles = config.specificImageFiles[fitKey] || [];
  const genericFiles = config.genericImageFiles[fitKey] || [];

  const productImages = specificFiles.map((file) => `${specificPath}/${file}`);
  const genericImages = genericFiles.map((file) => `${genericPath}/${file}`);

  // Deduplicate to avoid repeated files in UI carousels
  const all = [...productImages, ...genericImages];
  const unique = Array.from(new Set(all));
  return unique;
};

export const getProductImages = (product: Product, collection: keyof typeof COLLECTIONS = 'warrior-series'): string[] => {
  return getProductImagePaths(product, 'gallery', collection);
};

export const getProductThumbnails = (product: Product, collection: keyof typeof COLLECTIONS = 'warrior-series'): string[] => {
  return getProductImagePaths(product, 'thumbnails', collection);
};

// New functions specifically for hexcode series
export const getHexcodeProductImages = (product: Product): string[] => {
  return getProductImagePaths(product, 'gallery', 'hexcode-series');
};

export const getHexcodeProductThumbnails = (product: Product): string[] => {
  return getProductImagePaths(product, 'thumbnails', 'hexcode-series');
};

// Get back design images for hero carousel
export const getBackDesignImages = (): string[] => {
  const warriorBackImages = [
    '/images/hero-carousel/csharp-back-black.webp',
    '/images/hero-carousel/java-back-black.webp',
    '/images/hero-carousel/python-back-black.webp',
    '/images/hero-carousel/rust-back-black.webp',
    '/images/hero-carousel/typescript-back-black.webp',
  ];
  
  const hexcodeBackImages = [
    '/images/products/hexcode-series/csharp/gallery/back-black.webp',
    '/images/products/hexcode-series/java/gallery/back-black.webp',
    '/images/products/hexcode-series/python/gallery/back-black.webp',
    '/images/products/hexcode-series/rust/gallery/back-black.webp',
    '/images/products/hexcode-series/typescript/gallery/back-black.webp',
    '/images/products/hexcode-series/php/gallery/back-black.webp',
  ];
  
  return [...warriorBackImages, ...hexcodeBackImages];
};

export const getPlaceholderImage = (): string => {
  return '/images/products/warrior-series/classic/generic/gallery/front-generic-black.webp';
};

export const checkImageExists = async (imagePath: string): Promise<boolean> => {
  try {
    const response = await fetch(imagePath, { method: 'HEAD' });
    return response.ok;
  } catch {
    return false;
  }
};
