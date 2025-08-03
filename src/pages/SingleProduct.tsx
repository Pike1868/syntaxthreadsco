import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { ImageCarousel } from '@/components';
import { getProductImages, getPlaceholderImage } from '@/utils/imageUtils';
import productData from '@/data/products.json';

export default function SingleProduct() {
  const { id } = useParams<{ id: string }>();
  
  // Find product by listingId or generated slug
  const product = (productData.products as Product[]).find((p) => {
    const productId = p.listingId || p.title
      .replace(/[^\w\s]/g, '') // Remove special characters
      .replace(/\s+/g, '-')    // Replace spaces with dashes
      .toLowerCase();
    return productId.toString() === id;
  });

  if (!product) {
    return (
      <div className="align-element py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/products">
          <Button>View All Products</Button>
        </Link>
      </div>
    );
  }

  const { title, language, fit, basePrice, currency, etsyUrl } = product;

  // Get product images
  const productImages = getProductImages(product);
  const imagesToShow = productImages.length > 0 ? productImages : [getPlaceholderImage()];

  const handleBuyOnEtsy = () => {
    window.open(etsyUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="align-element py-20">
      <div className="grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* Product Images Carousel */}
        <div className="lg:order-2">
          <ImageCarousel 
            images={imagesToShow}
            alt={title}
            className="w-full"
          />
        </div>

        {/* Product Info */}
        <div className="lg:order-1">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          
          <div className="mt-6">
            <p className="text-3xl font-bold text-foreground">
              ${basePrice.toFixed(2)} {currency}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground">Description</h3>
            <div className="mt-4 prose prose-sm text-muted-foreground">
              <p>
                Premium {fit.toLowerCase()} fit T-shirt celebrating {language} developers. 
                Comfortable, durable, and perfect for coding sessions or casual wear.
              </p>
              <ul className="mt-4">
                <li>High-quality cotton blend</li>
                <li>{fit} everyday fit</li>
                <li>Soft, comfortable feel</li>
                <li>Pre-shrunk for perfect fit</li>
                <li>Machine washable</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <Button 
              onClick={handleBuyOnEtsy}
              size="lg" 
              className="w-full"
            >
              Buy on Etsy - ${basePrice.toFixed(2)}
            </Button>
            
            <p className="text-xs text-muted-foreground text-center">
              You'll be redirected to our Etsy store to complete your purchase
            </p>
          </div>

          <div className="mt-8">
            <Link to="/products">
              <Button variant="outline" size="sm">
                ← Back to Products
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
