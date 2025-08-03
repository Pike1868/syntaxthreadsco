import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SectionTitle } from '.';
import { getProductImages, getPlaceholderImage } from '@/utils/imageUtils';
import productData from '@/data/products.json';

export default function FeaturedProducts() {
  // Get featured products - let's show the first 4 products
  const featuredProducts = (productData.products as import('@/types/product').Product[]).slice(0, 4);

  return (
    <div className="pt-24">
      <SectionTitle text="Featured Warrior Collection" />
      
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => {
          const { listingId, title, language, fit, basePrice } = product;
          const productId = listingId || title.replace(/\s+/g, '-').toLowerCase();
          
          // Get the first image for featured display
          const productImages = getProductImages(product);
          const displayImage = productImages[0] || getPlaceholderImage(product);
          
          return (
            <Link key={productId} to={`/product/${productId}`}>
              <article className="group cursor-pointer">
                <div className="relative rounded-lg bg-gray-100 h-48 overflow-hidden">
                  <img 
                    src={displayImage}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="font-mono text-lg font-bold">
                        {language}
                      </h3>
                      <p className="text-sm mt-1">WARRIOR</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-3 text-center">
                  <h3 className="text-sm font-medium text-gray-900 group-hover:text-gray-700">
                    {language} Warrior
                  </h3>
                  <p className="text-lg font-semibold text-gray-900">
                    ${basePrice.toFixed(2)}
                  </p>
                </div>
              </article>
            </Link>
          );
        })}
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