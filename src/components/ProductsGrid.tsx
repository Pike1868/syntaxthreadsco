import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProductImages, getPlaceholderImage } from '@/utils/imageUtils';
import productData from '@/data/products.json';

export default function ProductsGrid() {
  const { products } = productData;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {(products as import('@/types/product').Product[]).map((product) => {
        return <ProductCard key={product.listingId || product.title} product={product} />;
      })}
    </div>
  );
}

function ProductCard({ product }: { product: import('@/types/product').Product }) {
  const { listingId, title, language, fit, basePrice, currency } = product;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Use listingId as unique identifier, fallback to title if null
  const productId = listingId || title
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, '-')    // Replace spaces with dashes
    .toLowerCase();
  
  // Get all images for this product
  const productImages = getProductImages(product);
  const validImages = productImages.length > 0 ? productImages : [getPlaceholderImage()];
  
  // Auto-rotate images every 5 seconds if there are multiple images
  useEffect(() => {
    if (validImages.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % validImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [validImages.length]);
  
  const currentImage = validImages[currentImageIndex];
  
  return (
    <Link to={`/product/${productId}`}>
      <article className="group cursor-pointer">
        <div className="relative rounded-lg bg-muted h-64 overflow-hidden">
          <img 
            src={currentImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
          {/* Overlay with product info */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="font-mono text-xl font-bold mb-1">
                {language}
              </h3>
              <p className="text-sm">WARRIOR</p>
              <p className="text-xs mt-1">{fit} Fit</p>
            </div>
          </div>
          
          {/* Image indicator dots - only show if multiple images */}
          {validImages.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
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
        
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-medium text-foreground group-hover:text-muted-foreground">
            {title}
          </h3>
          <p className="text-lg font-semibold text-foreground">
            ${basePrice.toFixed(2)} {currency}
          </p>
        </div>
      </article>
    </Link>
  );
}