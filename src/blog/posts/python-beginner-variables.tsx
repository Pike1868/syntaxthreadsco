import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'Python #1 — Variables, Types, and a Calm Start',
  slug: 'python-beginner-variables',
  date: new Date().toISOString(),
  excerpt: 'A friendly intro to names, numbers, and strings — with zero drama.',
  tags: ['python', 'beginners', 'variables', 'types'],
  persona: 'Python Warrior' as const,
  cover: '/images/hero-carousel/python-back-black.webp',
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      Python likes clarity. Let’s set up a few simple building blocks: names, numbers, and strings.
      Nothing fancy — just the essentials that make real code possible.
    </p>
    <h2>Names and assignment</h2>
    <pre><code>{`count = 3
name = 'Ada'
ratio = 3.14`}</code></pre>
    <p>
      No type declarations. Readability first. Python infers the type and moves on with its day.
    </p>
    <h2>Numbers and strings</h2>
    <pre><code>{`total = count * 2  # 6
label = f"Hello, {name}!"`}</code></pre>
    <p>
      f-strings keep formatting tidy. You’ll reach for them a lot.
    </p>
    <h2>Small habit: naming</h2>
    <p>
      Use lowercase_with_underscores for variables. Future-you — and teammates — will thank you.
    </p>
    <hr />
    <p className="text-sm text-muted-foreground">
      Like the calm approach? See the Python Warrior Premium — durable, comfortable, shipping quickly.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
