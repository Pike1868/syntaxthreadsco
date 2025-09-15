export interface Product {
  listingId: number | null;
  title: string;
  language: 'Python' | 'Java' | 'Rust' | 'TypeScript' | 'C#' | 'PHP';
  fit: 'Classic' | 'Premium';
  collection: 'warrior-series' | 'hexcode-series';
  basePrice: number;
  currency: string;
  etsyUrl: string;
  images: string[];
}

export interface ProductData {
  products: Product[];
}

export type ProgrammingLanguage = Product['language'];
export type FitType = Product['fit'];
export type CollectionType = Product['collection'];