
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="align-element py-20">
      <section className="text-center">
        <h1 className="flex flex-wrap items-center justify-center gap-2 text-4xl font-bold leading-none tracking-wide sm:gap-x-6 sm:text-6xl">
          Compile Your <span className="px-4 py-2 tracking-widest text-white rounded-lg bg-primary">Style</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 tracking-wide text-gray-600">
          Welcome to SyntaxThreadsCo, where technology meets fashion in a unique blend of style and substance. 
          Born from a passion for clean code and clever design, our apparel celebrates the languages and tools 
          that developers love most.
        </p>
      </section>

      <div className="mt-20 grid gap-16 lg:grid-cols-2 lg:gap-x-20">
        {/* Our Story */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every developer knows the feeling of mastering a new language or solving a complex problem. 
            That pride, that sense of accomplishment - we wanted to capture that in wearable form.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Our "Warrior" collection celebrates the languages that power our digital world: Python, Java, 
            Rust, TypeScript, and C#. Each design is crafted with the same attention to detail that goes 
            into writing clean, efficient code.
          </p>
        </div>

        {/* Quality Promise */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Quality Promise</h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
            <div className="flex items-start">
              <span className="font-mono text-primary mr-3">•</span>
              <p>Premium cotton blends for maximum comfort during long coding sessions</p>
            </div>
            <div className="flex items-start">
              <span className="font-mono text-primary mr-3">•</span>
              <p>Minimalist designs that look great in the office or at conferences</p>
            </div>
            <div className="flex items-start">
              <span className="font-mono text-primary mr-3">•</span>
              <p>Durable construction that withstands countless wash cycles</p>
            </div>
            <div className="flex items-start">
              <span className="font-mono text-primary mr-3">•</span>
              <p>Available in Classic and Premium fits to suit your style</p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-20 bg-gray-50 rounded-lg p-8 lg:p-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Why We Code</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We believe that developers are the modern-day architects of our digital future. 
            Every line of code shapes the world we live in, and every developer deserves 
            apparel that reflects their passion and expertise.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-primary mb-2">{'{ }'}</div>
            <h3 className="text-lg font-semibold text-gray-900">Clean Design</h3>
            <p className="mt-2 text-gray-600">Like well-written code, our designs are elegant and purposeful.</p>
          </div>
          
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-primary mb-2">{'<>'}</div>
            <h3 className="text-lg font-semibold text-gray-900">Community First</h3>
            <p className="mt-2 text-gray-600">Built by developers, for developers, celebrating our shared culture.</p>
          </div>
          
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-primary mb-2">{'[]'}</div>
            <h3 className="text-lg font-semibold text-gray-900">Quality Focused</h3>
            <p className="mt-2 text-gray-600">No bugs in our products - just premium materials and craftsmanship.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Ready to Code Your Style?</h2>
        <p className="mt-4 text-lg text-gray-600">
          Join thousands of developers who wear their programming pride with SyntaxThreadsCo.
        </p>
        <div className="mt-8">
          <Link to="/products">
            <Button size="lg" className="px-8">
              Shop Warrior Collection
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
