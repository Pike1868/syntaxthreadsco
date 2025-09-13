import { Link } from 'react-router-dom';
import { posts } from '@/blog/registry';

export default function Blog() {
  const sorted = [...posts].sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  return (
    <div className="align-element py-20">
      <div className="text-center mb-10">
        <h1 className="display-heading text-4xl font-bold tracking-tight">Blog</h1>
        <p className="mt-3 text-muted-foreground">Practical notes from Python, TypeScript, and PHP — with a gentle wink.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map(({ meta }) => (
          <Link key={meta.slug} to={`/blog/${meta.slug}`} className="group rounded-xl border border-border p-5 bg-card hover:shadow-sm transition-shadow">
            <div className="text-xs uppercase tracking-wide text-muted-foreground">{meta.persona}</div>
            <h2 className="mt-2 font-semibold text-foreground group-hover:text-muted-foreground">{meta.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{meta.excerpt}</p>
            <div className="mt-4 text-xs text-muted-foreground">{new Date(meta.date).toLocaleDateString()}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

