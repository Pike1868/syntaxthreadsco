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

const normalizeImagePath = (path: string): string => {
  if (!path) return '';
  const trimmed = path.trim();
  if (!trimmed) return '';
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
};

const dedupeByFileName = (paths: string[]): string[] => {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const rawPath of paths) {
    const normalized = normalizeImagePath(rawPath);
    if (!normalized) continue;
    const filename = normalized.split('/').pop()?.split(/[?#]/)[0];
    if (!filename) continue;
    if (seen.has(filename)) continue;
    seen.add(filename);
    unique.push(normalized);
  }
  return unique;
};

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

  const all = [...productImages, ...genericImages];
  return dedupeByFileName(all);
};

export const getProductImages = (product: Product, collection: keyof typeof COLLECTIONS = 'warrior-series'): string[] => {
  if (Array.isArray(product.images) && product.images.length > 0) {
    return dedupeByFileName(product.images);
  }
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

// Get curated back design images for hero carousel
export const getBackDesignImages = (): string[] => {
  // Curated selection of 6 different back designs (mix of both collections)
  return [
    '/images/hero-carousel/java-back-black.webp',           // Java Warrior
    '/images/products/hexcode-series/python/gallery/back-black.webp',  // Python Hexcode
    '/images/hero-carousel/rust-back-black.webp',           // Rust Warrior
    '/images/products/hexcode-series/typescript/gallery/back-black.webp', // TypeScript Hexcode
    '/images/hero-carousel/csharp-back-black.webp',         // C# Warrior
    '/images/products/hexcode-series/php/gallery/back-black.webp',      // PHP Hexcode
  ];
};

export const getPlaceholderImage = (collection: keyof typeof COLLECTIONS = 'warrior-series'): string => {
  if (collection === 'hexcode-series') {
    return '/images/products/hexcode-series/generic/gallery/front--black.webp';
  }
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
