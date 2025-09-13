import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { ImageCarousel } from '@/components';
import { getProductImages, getPlaceholderImage } from '@/utils/imageUtils';
import productData from '@/data/products.json';
import { formatCurrency } from '@/utils';
import { 
  ArrowUpDown,
  Scissors,
  Leaf,
  Layers,
  Snowflake,
  FlaskConical,
  Wind,
  Flame,
  CircleSlash,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

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
          <h1 className="display-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {title}
          </h1>
          
          <div className="mt-6">
            <p className="text-3xl font-bold text-foreground">
              {formatCurrency(basePrice, currency)}
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              {fit === 'Premium' ? 'Premium heavyweight fit' : 'Classic everyday fit'}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs">
              <Leaf className="h-3.5 w-3.5 text-primary" /> 100% carded cotton
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs">
              <Scissors className="h-3.5 w-3.5 text-primary" /> Durable stitching
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Quality verified
            </span>
          </div>

          {/* Trust/benefits row */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-muted-foreground">
            <div className="rounded-md border border-border p-2">Secure Etsy checkout</div>
            <div className="rounded-md border border-border p-2">Fast production & shipping</div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium text-foreground">Description</h3>
            <div className="mt-4 prose prose-sm text-muted-foreground">
              <p>
                {fit === 'Premium' ? 'Premium heavyweight fit' : 'Classic everyday fit'} T-shirt celebrating {language} developers. 
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
              Buy on Etsy — {formatCurrency(basePrice, currency)}
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

      {/* About + Key Features + Care Instructions */}
      <div className="mt-20 space-y-12">
        {/* About */}
        <section>
          <h2 className="text-3xl font-bold tracking-tight text-center text-foreground">About</h2>
          <p className="mt-4 text-lg leading-8 text-center text-muted-foreground max-w-4xl mx-auto">
            Oversized means comfort in style and this shirt passes the coziness test with flying colors. Made with 100% carded cotton, it feels like a heavy, warm hug that is perfect for colder days. Meanwhile the dropped shoulders along with the boxy fit, make it the perfect choice for any casual setting.
          </p>
        </section>

        {/* Key Features */}
        <section>
          <h3 className="text-2xl font-bold tracking-tight text-center text-foreground">Key features</h3>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-border p-5 bg-card">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary"><ArrowUpDown className="h-5 w-5" /></div>
                <div>
                  <h4 className="font-semibold text-foreground">Dropped shoulders</h4>
                  <p className="text-sm text-muted-foreground mt-1">Dropped shoulders give the garment a relaxed fit and feel.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border p-5 bg-card">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary"><Layers className="h-5 w-5" /></div>
                <div>
                  <h4 className="font-semibold text-foreground">Shoulder-to-shoulder tape</h4>
                  <p className="text-sm text-muted-foreground mt-1">Self-fabric tape covers the shoulder and neck seams to stabilize the back of the shirt and prevent stretching.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border p-5 bg-card">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary"><Scissors className="h-5 w-5" /></div>
                <div>
                  <h4 className="font-semibold text-foreground">Double needle stitch on hems</h4>
                  <p className="text-sm text-muted-foreground mt-1">The hems are sewn around the edges with a double topstitch, making the garment long-lasting and durable.</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border p-5 bg-card">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary"><Leaf className="h-5 w-5" /></div>
                <div>
                  <h4 className="font-semibold text-foreground">100% Carded cotton</h4>
                  <p className="text-sm text-muted-foreground mt-1">Carded cotton has not had its fine top layer shaved off and is made from shorter fibers making it very durable. 15% viscose for Heather variants.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section>
          <h3 className="text-2xl font-bold tracking-tight text-center text-foreground">Care instructions</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-5">
            <div className="rounded-lg border border-border p-4 bg-card flex flex-col items-center text-center">
              <div className="p-2 rounded-md bg-primary/10 text-primary mb-2"><Snowflake className="h-5 w-5" /></div>
              <p className="text-xs text-muted-foreground">Machine wash: cold (max 30C / 90F)</p>
            </div>
            <div className="rounded-lg border border-border p-4 bg-card flex flex-col items-center text-center">
              <div className="p-2 rounded-md bg-primary/10 text-primary mb-2"><FlaskConical className="h-5 w-5" /></div>
              <p className="text-xs text-muted-foreground">Non-chlorine: bleach as needed</p>
            </div>
            <div className="rounded-lg border border-border p-4 bg-card flex flex-col items-center text-center">
              <div className="p-2 rounded-md bg-primary/10 text-primary mb-2"><Wind className="h-5 w-5" /></div>
              <p className="text-xs text-muted-foreground">Tumble dry: low heat</p>
            </div>
            <div className="rounded-lg border border-border p-4 bg-card flex flex-col items-center text-center">
              <div className="p-2 rounded-md bg-primary/10 text-primary mb-2"><Flame className="h-5 w-5" /></div>
              <p className="text-xs text-muted-foreground">Iron, steam or dry: low heat</p>
            </div>
            <div className="rounded-lg border border-border p-4 bg-card flex flex-col items-center text-center">
              <div className="p-2 rounded-md bg-primary/10 text-primary mb-2"><CircleSlash className="h-5 w-5" /></div>
              <p className="text-xs text-muted-foreground">Do not dryclean</p>
            </div>
          </div>
        </section>
      </div>

      {/* Size Guide Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold tracking-tight text-center text-foreground">Size Guide</h3>
        <p className="mt-2 text-center text-muted-foreground">All measurements in the table refer to product dimensions.</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border-b-2"></th>
                <th className="px-4 py-2 border-b-2">S</th>
                <th className="px-4 py-2 border-b-2">M</th>
                <th className="px-4 py-2 border-b-2">L</th>
                <th className="px-4 py-2 border-b-2">XL</th>
                <th className="px-4 py-2 border-b-2">2XL</th>
                <th className="px-4 py-2 border-b-2">3XL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border-b">Width, in</td>
                <td className="px-4 py-2 border-b">20.08</td>
                <td className="px-4 py-2 border-b">21.65</td>
                <td className="px-4 py-2 border-b">23.23</td>
                <td className="px-4 py-2 border-b">24.80</td>
                <td className="px-4 py-2 border-b">26.38</td>
                <td className="px-4 py-2 border-b">27.95</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border-b">Length, in</td>
                <td className="px-4 py-2 border-b">27.76</td>
                <td className="px-4 py-2 border-b">29.13</td>
                <td className="px-4 py-2 border-b">30.51</td>
                <td className="px-4 py-2 border-b">31.89</td>
                <td className="px-4 py-2 border-b">33.27</td>
                <td className="px-4 py-2 border-b">34.06</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Size tolerance, in</td>
                <td className="px-4 py-2">1.50</td>
                <td className="px-4 py-2">1.50</td>
                <td className="px-4 py-2">1.50</td>
                <td className="px-4 py-2">1.50</td>
                <td className="px-4 py-2">1.50</td>
                <td className="px-4 py-2">1.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* Sticky buy bar (mobile-first) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 p-3 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-xs text-muted-foreground">{language} Warrior {fit}</div>
            <div className="text-lg font-semibold">${basePrice.toFixed(2)} {currency}</div>
          </div>
          <Button size="lg" className="px-6" onClick={handleBuyOnEtsy}>
            Buy on Etsy
          </Button>
        </div>
      </div>
    </div>
  );
}
