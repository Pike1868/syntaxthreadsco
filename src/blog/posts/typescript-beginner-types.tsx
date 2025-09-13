import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'TypeScript #1 — Types Without Tears',
  slug: 'typescript-beginner-types',
  date: new Date().toISOString(),
  excerpt: 'Practical types for real-world code — start small, win daily.',
  tags: ['typescript', 'beginners', 'types'],
  persona: 'TypeScript Strategist' as const,
  cover: '/images/hero-carousel/typescript-back-black.webp',
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      TypeScript protects your future self. Start with the basics: primitives and objects. No ceremony, just clarity.
    </p>
    <h2>Primitives and objects</h2>
    <pre><code>{`let count: number = 3;
let name: string = 'Ada';
let person: { name: string; active: boolean } = { name: 'Ada', active: true };`}</code></pre>
    <h2>Type aliases</h2>
    <pre><code>{`type Person = { name: string; active: boolean };
const p: Person = { name: 'Lin', active: false };`}</code></pre>
    <p>
      Aliases keep intent obvious. Use them early and often.
    </p>
    <hr />
    <p className="text-sm text-muted-foreground">
      Building confidently? See the TypeScript Warrior Premium — minimal design, quality build.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
