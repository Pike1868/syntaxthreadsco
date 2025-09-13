import { Link } from 'react-router-dom';
import { posts } from '@/blog/registry';
import NewsletterForm from '@/components/NewsletterForm';

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  return (
    <div className="align-element py-16">
      {/* Hero */}
      <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/60 via-card to-muted/60 p-8 md:p-12 text-center">
        <h1 className="display-heading text-4xl font-bold tracking-tight">The SyntaxThreads Journal</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Practical notes on Python, TypeScript, and PHP — clear, honest, and occasionally witty. Quality over quantity.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map(({ meta }) => (
          <Link
            key={meta.slug}
            to={`/blog/${meta.slug}`}
            className="group rounded-2xl border border-border p-5 bg-card hover:shadow-sm transition-shadow flex flex-col"
          >
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center rounded-full border border-border bg-background px-2 py-0.5">
                {meta.persona}
              </span>
              <span>{new Date(meta.date).toLocaleDateString()}</span>
            </div>
            <h2 className="mt-3 font-semibold text-foreground group-hover:text-muted-foreground text-lg">{meta.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{meta.excerpt}</p>
            {/* Tags */}
            {meta.tags?.length ? (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {meta.tags.slice(0, 3).map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground">
                    #{t}
                  </span>
                ))}
              </div>
            ) : null}
          </Link>
        ))}
      </div>

      {/* Newsletter */}
      <div className="mt-12 max-w-2xl mx-auto">
        <NewsletterForm />
      </div>
    </div>
  );
}
