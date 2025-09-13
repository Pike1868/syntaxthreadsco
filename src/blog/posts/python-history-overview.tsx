import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'Python — A Short History and Why It Stuck',
  slug: 'python-history-overview',
  date: new Date().toISOString(),
  excerpt: 'From ABC to the web to data science — a calm, readable arc.',
  tags: ['python', 'history'],
  persona: 'Python Warrior' as const,
  cover: '/images/blog/covers/cover-history.svg',
  references: [
    {
      title: 'History of Python',
      url: 'https://www.python.org/doc/essays/blurb/',
      source: 'python.org',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      Python started in the late 1980s with Guido van Rossum, inspired by ABC, aiming for a language that made
      everyday tasks easier without sacrificing power. Its key bet was readability — code you could revisit months
      later and still understand.
    </p>
    <h2>The 2 → 3 transition</h2>
    <p>
      Python grew quickly in the 2000s, then made a breaking change to fix long‑standing design issues. The move
      from Python 2 to 3 took years, but it set the foundation for modern tooling and libraries we use today.
    </p>
    <h2>Why it stuck</h2>
    <p>
      Clear syntax, a batteries‑included standard library, and an ecosystem that spans web (Django/Flask), data
      science (NumPy/pandas), and automation. The throughline is ergonomics — Python lets you focus on the problem,
      not ceremony.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;

