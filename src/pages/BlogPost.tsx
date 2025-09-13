import { useParams, Link } from 'react-router-dom';
import { postsBySlug } from '@/blog/registry';

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

  return (
    <article className="align-element py-20">
      <header className="mb-8">
        <div className="text-xs uppercase tracking-wide text-muted-foreground">{meta.persona}</div>
        <h1 className="display-heading text-3xl sm:text-4xl font-bold tracking-tight mt-2">{meta.title}</h1>
        <div className="mt-2 text-sm text-muted-foreground">{new Date(meta.date).toLocaleDateString()}</div>
      </header>
      <Content />
      <footer className="mt-10 text-sm text-muted-foreground">
        <Link to="/blog" className="underline">← Back to blog</Link>
      </footer>
    </article>
  );
}

