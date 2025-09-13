
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, ShieldCheck, Leaf, Code2 } from 'lucide-react';
import ImageStrip from '@/components/ImageStrip';

export default function About() {
  return (
    <div className="align-element py-24 space-y-16">
      {/* Hero */}
      <section className="text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
          <Code2 className="h-3.5 w-3.5" /> Built by devs, worn by devs
        </div>
        <h1 className="display-heading mt-4 text-4xl font-bold tracking-tight sm:text-6xl">
          Clean code. Clean tees.
        </h1>
        <p className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-muted-foreground">
          Minimalist apparel for people who ship. Authentic materials, considerate fits,
          and a small wink now and then. No dark patterns—just dark tees.
        </p>
      </section>

      <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-20">
        {/* Our Story */}
        <div>
          <h2 className="display-heading text-3xl font-bold tracking-tight text-foreground">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We’re developers who care about the details. We design shirts the same way we write code:
            thoughtfully, iteratively, and with a bias for quality.
          </p>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            The Warrior collection nods to the languages that move the world—Python, Java, Rust, TypeScript, and C#—
            with quietly confident prints and comfortable fits.
          </p>
        </div>

        {/* Promise */}
        <div>
          <h2 className="display-heading text-3xl font-bold tracking-tight text-foreground">Our Promise</h2>
          <div className="mt-6 grid gap-4">
            <div className="rounded-lg border border-border bg-card p-5 flex items-start gap-3">
              <Sparkles className="h-5 w-5 text-primary" />
              <p className="text-lg leading-7 text-muted-foreground">Minimalist, tasteful designs that work at meetups, conferences, or coffee shops.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <p className="text-lg leading-7 text-muted-foreground">Durable construction and consistent quality—made to survive refactors and laundry cycles.</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-5 flex items-start gap-3">
              <Leaf className="h-5 w-5 text-primary" />
              <p className="text-lg leading-7 text-muted-foreground">Comfort-first materials (100% carded cotton core) with a clean, modern fit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Image strip for breathing room */}
      <ImageStrip />

      {/* Values Section */}
      <div className="bg-muted/60 rounded-lg p-8 lg:p-12">
        <div className="text-center">
          <h2 className="display-heading text-3xl font-bold tracking-tight text-foreground">Why We Code</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We believe that developers are the modern-day architects of our digital future. 
            Every line of code shapes the world we live in, and every developer deserves 
            apparel that reflects their passion and expertise.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="text-center">
            <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-foreground">Clean Design</h3>
            <p className="mt-2 text-muted-foreground">Like well-written code, our designs are elegant and purposeful.</p>
          </div>
          
          <div className="text-center">
            <Code2 className="h-6 w-6 text-primary mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-foreground">Community First</h3>
            <p className="mt-2 text-muted-foreground">Built by developers, for developers, celebrating our shared culture.</p>
          </div>
          
          <div className="text-center">
            <ShieldCheck className="h-6 w-6 text-primary mx-auto mb-2" />
            <h3 className="text-lg font-semibold text-foreground">Quality Focused</h3>
            <p className="mt-2 text-muted-foreground">No bugs in our products — just premium materials and craftsmanship.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="display-heading text-3xl font-bold tracking-tight text-foreground">Ready to ship your look?</h2>
        <p className="mt-4 text-lg text-muted-foreground">Subtle, comfortable, dev-approved. The rest is just deployment.</p>
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
