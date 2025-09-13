import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'Python #1 — Variables, Types, and a Calm Start',
  slug: 'python-beginner-variables',
  date: new Date().toISOString(),
  excerpt: 'A friendly intro to names, numbers, and strings — with zero drama.',
  tags: ['python', 'beginners', 'variables', 'types'],
  persona: 'Monty Python' as const,
  cover: '/images/blog/covers/cover-python.svg',
  references: [
    {
      title: 'Python Tutorial — An Informal Introduction to Python',
      url: 'https://docs.python.org/3/tutorial/introduction.html',
      source: 'docs.python.org',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      Python’s first win is clarity. Before classes and frameworks, you’ll spend most time with variables, numbers,
      and strings. This quick tour sets habits that scale: meaningful names, small steps, and readable formatting.
    </p>

    <h2>Names and assignment</h2>
    <p>
      Variables are created by assignment. No type annotations required—Python infers types at runtime—but you can add
      hints later as your projects grow.
    </p>
    <pre><code>{`count = 3
name = "Ada"
ratio = 3.14

# Optional type hints (helpful in larger codebases)
user_id: int = 42
greeting: str = f"Hello, {name}!"`}</code></pre>
    <p>
      Stick to <em>lowercase_with_underscores</em> for variable names and choose verbs/nouns that explain intent. Future‑you will
      thank present‑you.
    </p>

    <h2>Numbers and strings</h2>
    <p>
      Numeric operations behave as you expect, and f‑strings keep output tidy without awkward <code>"%s"</code> formatting.
    </p>
    <pre><code>{`total = count * 2  # 6
label = f"Hello, {name}!"  # 'Hello, Ada!'

# String methods read like English
clean = label.strip().lower().replace("hello", "hi")`}</code></pre>

    <h2>Small habits that scale</h2>
    <ul>
      <li><strong>One idea per variable:</strong> avoid reusing names for different meanings.</li>
      <li><strong>Prefer f‑strings:</strong> they’re faster to read and safer than manual concatenation.</li>
      <li><strong>Type hints as projects grow:</strong> add them when modules stabilize; they’re optional, not mandatory.</li>
    </ul>
  </div>
);

export default { meta, Content } satisfies PostModule;
