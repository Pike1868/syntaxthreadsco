import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'TypeScript — Why It Was Created and How It Won',
  slug: 'typescript-history-overview',
  date: "2025-08-18T11:15:00.000Z",
  excerpt: 'From JavaScript-at-scale headaches to a typed superset that reshaped front-end and Node tooling.',
  tags: ['typescript', 'history'],
  persona: 'Typey Tim' as const,
  cover: '/images/blog/covers/cover-history.svg',
  references: [
    {
      title: 'What is TypeScript',
      url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
      source: 'typescriptlang.org',
    },
    {
      title: 'TypeScript 1.0 announcement (archived blog)',
      url: 'https://devblogs.microsoft.com/typescript/announcing-typescript-1-0/',
      source: 'microsoft.com',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      TypeScript emerged at Microsoft to address a loud problem: teams shipping large JavaScript apps had no shared
      contracts. Refactors were fragile, tooling was limited, and scale made “just be careful” a risky strategy.
      The result was a typed superset of JavaScript—opt‑in types that compile down to plain JS.
    </p>

    <h2>Origins and motivation</h2>
    <p>
      Led by Anders Hejlsberg (of C# fame), TypeScript took a pragmatic path: preserve JavaScript’s runtime model,
      add a powerful static type system on top, and meet developers where they are. The compiler became an enabler
      for better editor assistance, navigation, and refactoring.
    </p>
    <pre><code>{`// A small contract goes a long way
type User = { id: string; name: string; active: boolean };

function rename(user: User, name: string): User {
  return { ...user, name };
}`}</code></pre>
    <p>
      Even tiny annotations unlock intent: consumers and maintainers know what a function expects and returns. The
      ecosystem rallied around this pattern—frameworks, libraries, and editors all leaned in.
    </p>

    <h2>How it took over</h2>
    <p>
      The tipping point was day‑to‑day ergonomics: better IntelliSense, faster feedback, and safer refactors. As React,
      Node, and build tools matured, TypeScript offered a shared language of contracts across teams. Today it’s a
      default choice for many front‑end and Node codebases.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
