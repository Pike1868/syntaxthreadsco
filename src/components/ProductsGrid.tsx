import { Link } from 'react-router-dom';
import { Product } from '@/types/product';
import productData from '@/data/products.json';

export default function ProductsGrid() {
  const { products } = productData;

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { listingId, title, language, fit, basePrice, currency } = product;
        // Use listingId as unique identifier, fallback to title if null
        const productId = listingId || title.replace(/\s+/g, '-').toLowerCase();
        
        return (
          <Link key={productId} to={`/product/${productId}`}>
            <article className="group cursor-pointer">
              <div className="rounded-lg bg-gray-100 p-8 h-64 flex items-center justify-center">
                {/* Placeholder for product image */}
                <div className="text-center">
                  <h3 className="font-mono text-2xl font-bold text-gray-800">
                    {language}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">WARRIOR</p>
                  <p className="text-xs text-gray-500 mt-1">{fit} Fit</p>
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