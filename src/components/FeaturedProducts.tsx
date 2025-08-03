import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { SectionTitle } from '.';
import productData from '@/data/products.json';

export default function FeaturedProducts() {
  // Get featured products - let's show the first 4 products
  const featuredProducts = productData.products.slice(0, 4);

  return (
    <div className="pt-24">
      <SectionTitle text="Featured Warrior Collection" />
      
      <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => {
          const { listingId, title, language, fit, basePrice, currency } = product;
          const productId = listingId || title.replace(/\s+/g, '-').toLowerCase();
          
          return (
            <Link key={productId} to={`/product/${productId}`}>
              <article className="group cursor-pointer">
                <div className="rounded-lg bg-gray-100 p-6 h-48 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <div className="text-center">
                    <h3 className="font-mono text-xl font-bold text-gray-800">
                      {language}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">WARRIOR</p>
                    <p className="text-xs text-gray-500">{fit}</p>
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