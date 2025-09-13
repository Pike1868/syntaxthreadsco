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
    <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
      {/* Hero Text */}
      <div>
        <h1 className="display-heading max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          Dress like you <span className="font-mono text-primary">ship</span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Premium shirts for people who build things on the internet. Minimalist designs,
          honest quality, and a wink here and there. No dark patterns—just dark tees.
        </p>

        <div className="mt-8 flex items-center gap-x-4">
          <Link to="/products">
            <Button size="lg" className="px-7">
              Shop the Warrior Collection
            </Button>
          </Link>

          <Link to="/about">
            <Button variant="outline" size="lg">
              What makes them good?
            </Button>
          </Link>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p>
            Available languages: <span className="font-mono">Python • Java • Rust • TypeScript • C#</span>
          </p>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="hidden lg:block">
        <ImageCarousel images={heroImages} alt="Premium Warrior T-shirts" />
      </div>
    </div>
  );
}
