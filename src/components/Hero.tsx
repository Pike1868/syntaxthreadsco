import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import ImageCarousel from './ImageCarousel';

const heroImages = [
  '/images/hero-carousel/csharp-back-black.webp',
  '/images/hero-carousel/java-back-black.webp',
  '/images/hero-carousel/python-back-black.webp',
  '/images/hero-carousel/rust-back-black.webp',
  '/images/hero-carousel/typescript-back-black.webp',
];

export default function Hero() {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* Hero Text */}
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Code Your Style with{' '}
          <span className="font-mono text-primary">SyntaxThreadsCo</span>
        </h1>
        
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Premium apparel for developers who code with passion. Express your programming 
          language pride with our minimalist "Warrior" collection.
        </p>
        
        <div className="mt-10 flex items-center gap-x-6">
          <Link to="/products">
            <Button size="lg" className="px-8">
              Shop Collection
            </Button>
          </Link>
          
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
        
        <div className="mt-8 text-sm text-muted-foreground">
          <p>Available languages: <span className="font-mono">Python • Java • Rust • TypeScript • C#</span></p>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="hidden lg:block">
        <ImageCarousel images={heroImages} alt="Premium Warrior T-shirts" />
      </div>
    </div>
  );
}