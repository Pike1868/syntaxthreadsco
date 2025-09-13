import { Link } from 'react-router-dom';
import { posts } from '@/blog/registry';
import { getDiversifiedCover, getCoverOverlayClass } from '@/blog/covers';
import NewsletterForm from '@/components/NewsletterForm';

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  return (
    <div className="align-element py-16">
      {/* Hero */}
      <div className="rounded-2xl border border-border bg-gradient-to-br from-muted/60 via-card to-muted/60 p-8 md:p-12 text-center">
        <h1 className="display-heading text-4xl font-bold tracking-tight">SyntaxThreads Journal</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
          Practical notes on Python, TypeScript, PHP, Rust, Java, and C# — clear, honest, and occasionally witty.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map(({ meta }) => (
          <Link
            key={meta.slug}
            to={`/blog/${meta.slug}`}
            className="group rounded-2xl border border-border bg-card hover:shadow-sm transition-shadow flex flex-col overflow-hidden"
          >
            {meta.cover && (
              <div className="relative h-44 w-full overflow-hidden">
                <img src={getDiversifiedCover(meta)} alt="Cover" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className={getCoverOverlayClass(meta)} />
              </div>
            )}
            <div className="p-5 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center rounded-full border border-border bg-background px-2 py-0.5">
                {meta.persona}
              </span>
              <span>{new Date(meta.date).toLocaleDateString()} • ≈5 min read</span>
            </div>
            <div className="px-5 pb-5 flex-1">
              <h2 className="font-semibold text-foreground group-hover:text-muted-foreground text-lg">{meta.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{meta.excerpt}</p>
            </div>
            {/* Tags */}
            {meta.tags?.length ? (
              <div className="px-5 pb-5 flex flex-wrap gap-1.5">
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

      {/* Newsletter (render only if configured) */}
      {import.meta.env.VITE_FORMSPREE_ID ? (
        <div className="mt-12 max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
      ) : null}
    </div>
  );
}
