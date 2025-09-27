import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Leaf, ShieldCheck } from 'lucide-react';
import { formatCurrency } from '@/utils';
import { SectionTitle } from '.';
import { getProductImages, getPlaceholderImage } from '@/utils/imageUtils';
import productData from '@/data/products.json';

export default function FeaturedProducts() {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [sharedImageIndex, setSharedImageIndex] = useState(0);
  
  // All available products grouped by fit type
  const allProducts = productData.products as import('@/types/product').Product[];
  // Only feature Premium products, excluding PHP from warrior series (doesn't exist)
  const orderedProducts = allProducts.filter(p => 
    p.fit === 'Premium' && !(p.collection === 'warrior-series' && p.language === 'PHP')
  );
  
  // Get 4 products starting from startIndex, wrapping around if needed
  const getFeaturedProducts = () => {
    const featured = [];
    for (let i = 0; i < 4; i++) {
      const index = (startIndex + i) % orderedProducts.length;
      featured.push(orderedProducts[index]);
    }
    return featured;
  };
  
  const featuredProducts = getFeaturedProducts();

  // Auto-rotate through products every 6 seconds (pause on hover)
  useEffect(() => {
    if (isPaused || orderedProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % orderedProducts.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [orderedProducts.length, isPaused]);

  // Sync all product images to cycle together every 4 seconds (pause on hover)
  useEffect(() => {
    if (isPaused || orderedProducts.length === 0) return;
    
    const interval = setInterval(() => {
      // Cycle through max 3 images (most products have 2-4 images)
      setSharedImageIndex((prev) => (prev + 1) % 3);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPaused, orderedProducts.length]);

  return (
    <div className="pt-24">
      <SectionTitle text="Featured Collections" />
      
      <div 
        className="mt-16 relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* 4-product carousel */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product, index) => (
            <FeaturedProductCard 
              key={`${product.listingId || product.title}-${startIndex}-${index}`} 
              product={product}
              sharedImageIndex={sharedImageIndex}
            />
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {orderedProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setStartIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-600 ${
                index === startIndex ? 'bg-primary w-6' : 'bg-muted-foreground/30'
              }`}
              aria-label={`Start from ${orderedProducts[index].language} ${orderedProducts[index].fit} product`}
            />
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <Link to="/products">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </Link>
      </div>
    </div>
  );
}

function FeaturedProductCard({ 
  product, 
  sharedImageIndex 
}: { 
  product: import('@/types/product').Product;
  sharedImageIndex: number;
}) {
  const { listingId, title, language, fit, basePrice, collection } = product;
  
  const productId = listingId || title
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-')    // Replace spaces with dashes
    .toLowerCase();
  
  // Get all images for this product based on collection
  const productImages = getProductImages(product, collection);
  const validImages = productImages.length > 0 ? productImages : [getPlaceholderImage(collection)];
  
  // Use shared image index, but stay within bounds of this product's images
  const currentImageIndex = sharedImageIndex % validImages.length;
  const currentImage = validImages[currentImageIndex];
  
  return (
    <Link to={`/product/${productId}`}>
      <article className="group cursor-pointer transition-all duration-500 ease-in-out">
        <div className="relative rounded-lg bg-muted h-48 overflow-hidden">
          <img 
            src={currentImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          
          {/* Fit badge */}
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium">
            {fit}
          </div>
          
          {/* Image indicator dots - only show if multiple images */}
          {validImages.length > 1 && (
            <div className="absolute bottom-2 right-2 flex space-x-1">
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
          
          {/* Hover overlay with CTA */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
            <div className="text-white">
              <h3 className="font-mono text-lg font-bold">{language}</h3>
              <p className="text-xs opacity-80">{collection === 'warrior-series' ? 'WARRIOR' : 'HEXCODE'} • {fit}</p>
            </div>
            <Button
              size="sm"
              className="bg-white text-black hover:bg-white/90"
              onClick={(e) => {
                e.preventDefault();
                window.open(product.etsyUrl, '_blank', 'noopener,noreferrer');
              }}
            >
              Buy on Etsy
            </Button>
          </div>
        </div>
        
        <div className="mt-3 text-center">
          <h3 className="text-sm font-medium text-foreground group-hover:text-muted-foreground">
            {language} {collection === 'warrior-series' ? 'Warrior' : 'Hexcode'}
          </h3>
          <p className="text-xs text-muted-foreground mb-1">{fit} Fit</p>
          <p className="text-lg font-semibold text-foreground">
            {formatCurrency(basePrice, 'USD')}
          </p>
          {/* Mini highlights */}
          <div className="mt-2 flex items-center justify-center gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] text-muted-foreground">
              <Leaf className="h-3 w-3 text-primary" /> Cotton
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-2.5 py-0.5 text-[10px] text-muted-foreground">
              <ShieldCheck className="h-3 w-3 text-primary" /> Made well
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
