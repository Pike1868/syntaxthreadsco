import { Product } from '@/types/product';

const BASE_PATH = '/images/products/warrior-series';

const getProductImagePaths = (product: Product, imageType: 'gallery' | 'thumbnails') => {
  const { language, fit } = product;
  const lang = language.toLowerCase().replace('#', 'sharp');

  const specificPath = `${BASE_PATH}/${fit.toLowerCase()}/${lang}/${imageType}`;
  const genericPath = `${BASE_PATH}/${fit.toLowerCase()}/generic/${imageType}`;

  // Define the image filenames we expect to find.
  const specificImageFiles = {
    classic: ['front-person1-black.webp', 'front-person2-black.webp', 'front-black.webp'],
    premium: ['back-person-black.webp', 'back-black.webp'],
  };

  const genericImageFiles = {
    classic: ['back-shirt-only-black.webp', 'back-person-1-black.webp', 'back-person-2-black.webp'],
    // Use actual filenames present in public assets (webp variants)
    premium: ['front-generic-black.webp', 'front-person-black.webp', 'front-person-generic-closeup-black.webp'],
  };

  const productImages = specificImageFiles[fit.toLowerCase() as keyof typeof specificImageFiles].map(
    (file) => `${specificPath}/${file}`
  );

  const genericImages = genericImageFiles[fit.toLowerCase() as keyof typeof genericImageFiles].map(
    (file) => `${genericPath}/${file}`
  );

  // Deduplicate to avoid repeated files in UI carousels
  const all = [...productImages, ...genericImages];
  const unique = Array.from(new Set(all));
  return unique;
};

export const getProductImages = (product: Product): string[] => {
  return getProductImagePaths(product, 'gallery');
};

export const getProductThumbnails = (product: Product): string[] => {
  return getProductImagePaths(product, 'thumbnails');
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
