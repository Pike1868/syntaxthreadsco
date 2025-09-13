import { useParams, Link } from 'react-router-dom';
import { posts, postsBySlug } from '@/blog/registry';
import { getDiversifiedCover, getCoverOverlayClass } from '@/blog/covers';
import { PERSONAS } from '@/blog/personas';
import { Avatar, NewsletterForm } from '@/components';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const mod = slug ? postsBySlug.get(slug) : undefined;

  if (!mod) {
    return (
      <div className="align-element py-20">
        <p className="text-center text-muted-foreground">Post not found.</p>
        <div className="text-center mt-4">
          <Link to="/blog" className="underline">Back to blog</Link>
        </div>
      </div>
    );
  }

  const { meta, Content } = mod;
  const sorted = [...posts].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  const idx = sorted.findIndex(p => p.meta.slug === meta.slug);
  const prev = idx > 0 ? sorted[idx - 1] : undefined;
  const next = idx >= 0 && idx < sorted.length - 1 ? sorted[idx + 1] : undefined;
  const alsoFromPersona = sorted.filter(p => p.meta.persona === meta.persona && p.meta.slug !== meta.slug).slice(0, 2);

  return (
    <article className="align-element py-16">
      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <Avatar name={meta.persona} initials={PERSONAS[meta.persona].initials} src={PERSONAS[meta.persona].avatar} />
            <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted-foreground">
              {PERSONAS[meta.persona].display}
            </span>
            {meta.tags?.length ? (
              <div className="flex flex-wrap gap-1.5">
                {meta.tags.slice(0, 4).map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground">#{t}</span>
                ))}
              </div>
            ) : null}
          </div>
          <div className="text-sm text-muted-foreground">{new Date(meta.date).toLocaleDateString()} • ≈5 min read</div>
        </div>

        <h1 className="display-heading text-3xl sm:text-4xl font-bold tracking-tight mt-3">{meta.title}</h1>
        <div className="mt-1 text-sm text-muted-foreground">By {PERSONAS[meta.persona].display}</div>
        {meta.cover && (
          <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-muted relative">
            <img src={getDiversifiedCover(meta)} alt="Cover" className="w-full h-72 md:h-80 object-cover" />
            <div className={getCoverOverlayClass(meta)} />
          </div>
        )}
      </header>

      <div className="mx-auto max-w-3xl blog-content">
        <Content />
      </div>

      {/* Subtle persona blurb */}
      <div className="mx-auto max-w-3xl mt-8">
        <div className="rounded-xl border border-border bg-card/60 p-4 flex items-start gap-3">
          <Avatar name={meta.persona} initials={PERSONAS[meta.persona].initials} src={PERSONAS[meta.persona].avatar} />
          <div className="text-sm">
            <div className="font-medium text-foreground">{PERSONAS[meta.persona].display}</div>
            {PERSONAS[meta.persona].blurb && (
              <p className="text-muted-foreground mt-1">{PERSONAS[meta.persona].blurb}</p>
            )}
          </div>
        </div>
      </div>

      {/* References */}
      {meta.references?.length ? (
        <section className="mx-auto max-w-3xl mt-10">
          <h3 className="text-sm font-semibold tracking-wide uppercase text-muted-foreground">References</h3>
          <ul className="mt-3 list-disc list-inside space-y-1 text-sm">
            {meta.references.map((ref) => (
              <li key={ref.url}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline">
                  {ref.title}
                </a>
                {ref.source ? <span className="text-muted-foreground"> — {ref.source}</span> : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* Footer navigation */}
      <footer className="mt-12 pt-6 border-t border-border">
        <div className="flex items-center justify-between text-sm">
          <div>
            {prev ? (
              <Link to={`/blog/${prev.meta.slug}`} className="underline text-muted-foreground hover:text-foreground">
                ← {prev.meta.title}
              </Link>
            ) : <span />}
          </div>
          <Link to="/blog" className="underline text-muted-foreground hover:text-foreground">Back to blog</Link>
          <div>
            {next ? (
              <Link to={`/blog/${next.meta.slug}`} className="underline text-muted-foreground hover:text-foreground">
                {next.meta.title} →
              </Link>
            ) : <span />}
          </div>
        </div>
        {/* More from persona */}
        {alsoFromPersona.length ? (
          <div className="mt-6 text-sm">
            <div className="text-muted-foreground mb-2">More from {meta.persona}:</div>
            <ul className="list-disc list-inside space-y-1">
              {alsoFromPersona.map(p => (
                <li key={p.meta.slug}>
                  <Link to={`/blog/${p.meta.slug}`} className="underline text-muted-foreground hover:text-foreground">{p.meta.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </footer>

      {/* Newsletter (render only if configured) */}
      {import.meta.env.VITE_FORMSPREE_ID ? (
        <div className="mt-12 max-w-2xl mx-auto">
          <NewsletterForm />
        </div>
      ) : null}
    </article>
  );
}
