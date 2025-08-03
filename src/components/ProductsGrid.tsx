import { Link } from 'react-router-dom';
import { getProductImages, getPlaceholderImage } from '@/utils/imageUtils';
import productData from '@/data/products.json';

export default function ProductsGrid() {
  const { products } = productData;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {(products as import('@/types/product').Product[]).map((product) => {
        const { listingId, title, language, fit, basePrice, currency } = product;
        // Use listingId as unique identifier, fallback to title if null
        const productId = listingId || title.replace(/\s+/g, '-').toLowerCase();
        
        // Get the first image for the grid
        const productImages = getProductImages(product);
        const displayImage = productImages[0] || getPlaceholderImage(product);
        
        return (
          <Link key={productId} to={`/product/${productId}`}>
            <article className="group cursor-pointer">
              <div className="relative rounded-lg bg-gray-100 h-64 overflow-hidden">
                <img 
                  src={displayImage}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              </div>
              
              <div className="mt-4 space-y-2">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                  {title}
                </h3>
                <p className="text-lg font-semibold text-gray-900">
                  ${basePrice.toFixed(2)} {currency}
                </p>
              </div>
            </article>
          </Link>
        );
      })}
    </div>
  );
}