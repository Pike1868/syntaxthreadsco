import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductImages, getPlaceholderImage } from '@/utils/imageUtils';
import { formatCurrency } from '@/utils';
import productData from '@/data/products.json';
import { Button } from '@/components/ui/button';
import { Leaf, ShieldCheck, Filter } from 'lucide-react';
import type { CollectionType } from '@/types/product';

export default function ProductsGrid() {
  const [selectedCollection, setSelectedCollection] = useState<CollectionType | 'all'>('all');
  const { products } = productData;
  
  // Only show Premium fit products on the listing page
  const premiumProducts = (products as import('@/types/product').Product[]).filter(
    (p) => p.fit !== 'Classic'
  );
  
  // Filter by collection
  const visibleProducts = selectedCollection === 'all' 
    ? premiumProducts 
    : premiumProducts.filter(p => p.collection === selectedCollection);

  return (
    <div className="pt-12">
      {/* Collection Filter */}
      <div className="mb-8 flex flex-wrap gap-2 justify-center">
        <Button
          variant={selectedCollection === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCollection('all')}
          className="text-xs"
        >
          <Filter className="h-3 w-3 mr-1" />
          All Collections
        </Button>
        <Button
          variant={selectedCollection === 'warrior-series' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCollection('warrior-series')}
          className="text-xs"
        >
          Warrior Series
        </Button>
        <Button
          variant={selectedCollection === 'hexcode-series' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedCollection('hexcode-series')}
          className="text-xs"
        >
          Hexcode Series
        </Button>
      </div>
      
      {/* Products Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => {
          return <ProductCard key={product.listingId || product.title} product={product} />;
        })}
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: import('@/types/product').Product }) {
  const { listingId, title, language, fit, basePrice, currency, collection } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use listingId as unique identifier, fallback to title if null
  const productId = listingId || title
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-')    // Replace spaces with dashes
    .toLowerCase();
  
  // Get all images for this product based on collection
  const productImages = getProductImages(product, collection);
  const validImages = productImages.length > 0 ? productImages : [getPlaceholderImage(collection)];
  
  // Auto-rotate images every 5 seconds if there are multiple images
  useEffect(() => {
    if (validImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [validImages.length]);
  
  const currentImage = validImages[currentImageIndex];
  
  const openEtsy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    window.open(product.etsyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <article className="group cursor-pointer rounded-xl border border-border overflow-hidden bg-card hover:shadow-sm transition-shadow">
      <Link to={`/product/${productId}`} className="block">
        <div className="relative bg-muted h-64">
          <img
            src={currentImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />

          {/* Overlay with product info + CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
            <div className="text-white">
              <h3 className="font-mono text-lg font-bold leading-none">{language}</h3>
              <p className="text-[11px] opacity-80 mt-1">{collection === 'warrior-series' ? 'WARRIOR' : 'HEXCODE'} • {fit} Fit</p>
            </div>
            <Button size="sm" onClick={openEtsy} className="bg-white text-black hover:bg-white/90">
              Buy on Etsy
            </Button>
          </div>

          {/* Image indicator dots */}
          {validImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {validImages.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </Link>

      <div className="px-3 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-medium text-foreground hover:text-muted-foreground">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground">{fit} • {language}</p>
          </div>
          <p className="text-base font-semibold text-foreground whitespace-nowrap">
            {formatCurrency(basePrice, currency)}
          </p>
        </div>
        {/* Mini highlights */}
        <div className="mt-2 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] text-muted-foreground">
            <Leaf className="h-3 w-3 text-primary" /> 100% cotton
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] text-muted-foreground">
            <ShieldCheck className="h-3 w-3 text-primary" /> Quality build
          </span>
        </div>
      </div>
    </article>
  );
}
