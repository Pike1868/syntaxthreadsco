import { Link } from 'react-router-dom';
import { Button } from './ui/button';

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
        <div className="relative">
          <div className="bg-muted rounded-lg overflow-hidden border">
            <img
              src="/SyntaxThreads-WarriorSeries-Mockups/Mockups/Python Warrior Premium Mockups/Person Back Python Warrior Premium.jpeg"
              alt="Python Warrior Premium T-shirt - Premium developer apparel"
              className="w-full h-96 object-cover"
              loading="eager"
            />
          </div>
          
          {/* Badge */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Premium Quality
          </div>
          
          {/* Code footnote */}
          <div className="mt-4 text-center">
            <div className="font-mono text-xs text-muted-foreground opacity-70">
              class Developer: def wear_style(self): return "SyntaxThreadsCo"
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}