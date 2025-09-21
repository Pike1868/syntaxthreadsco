import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'TypeScript #1 — Types Without Tears',
  slug: 'typescript-beginner-types',
  date: "2025-08-19T16:45:00.000Z",
  excerpt: 'Practical types for real-world code — start small, win daily.',
  tags: ['typescript', 'beginners', 'types'],
  persona: 'Typey Tim' as const,
  cover: '/images/blog/covers/cover-typescript.svg',
  references: [
    {
      title: 'TypeScript Handbook — Everyday Types',
      url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
      source: 'typescriptlang.org',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      TypeScript’s promise is simple: make what you meant explicit. Start with primitives, then model small objects.
      You get better editor hints now and far fewer surprises later.
    </p>

    <h2>Primitives and objects</h2>
    <pre><code>{`let count: number = 3;
let name: string = 'Ada';
let active: boolean = true;

let person: { name: string; active: boolean } = { name, active };`}</code></pre>
    <p>
      Inline object types are fine for quick sketches, but a name (alias) turns a shape into a reusable contract.
    </p>

    <h2>Type aliases</h2>
    <pre><code>{`type Person = { name: string; active: boolean };

function toggle(p: Person): Person {
  return { ...p, active: !p.active };
}

const lin: Person = { name: 'Lin', active: false };
const flipped = toggle(lin);`}</code></pre>
    <p>
      Aliases are your most common tool; save interfaces for declaration merging or library surfaces. Keep property
      names literal and avoid over‑generic shapes at the start.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
