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
        
        <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
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
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Available languages: Python • Java • Rust • TypeScript • C#</p>
        </div>
      </div>

      {/* Hero Visual */}
      <div className="hidden lg:block">
        <div className="relative">
          <div className="bg-gray-100 rounded-lg p-16 text-center">
            <div className="space-y-6">
              <div className="font-mono text-2xl font-bold text-gray-800">
                {'{ PYTHON WARRIOR }'}
              </div>
              <div className="font-mono text-lg text-gray-600">
                class Developer:
              </div>
              <div className="font-mono text-lg text-gray-600 ml-4">
                def wear_style(self):
              </div>
              <div className="font-mono text-lg text-gray-600 ml-8">
                return "SyntaxThreadsCo"
              </div>
            </div>
          </div>
          
          {/* Badge */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
            Premium Quality
          </div>
        </div>
      </div>
    </div>
  );
}