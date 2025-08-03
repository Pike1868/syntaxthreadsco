export interface Product {
  listingId: number | null;
  title: string;
  language: 'Python' | 'Java' | 'Rust' | 'TypeScript' | 'C#';
  fit: 'Classic' | 'Premium';
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