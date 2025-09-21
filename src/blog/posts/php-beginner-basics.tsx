import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'PHP #1 — A Gentle First Script',
  slug: 'php-beginner-basics',
  date: "2025-08-23T13:20:00.000Z",
  excerpt: 'Spin up a tiny PHP script and print something real.',
  tags: ['php', 'beginners', 'basics'],
  persona: 'Hypertext Harry' as const,
  cover: '/images/blog/covers/cover-php.svg',
  references: [
    {
      title: 'PHP Manual — Getting Started',
      url: 'https://www.php.net/manual/en/tutorial.firstpage.php',
      source: 'php.net',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      PHP is the web’s pragmatic toolkit. You can get something real on screen with a single file, then grow into
      routing, templating, and frameworks when you’re ready. Start with the smallest useful step.
    </p>

    <h2>Hello, server</h2>
    <pre><code>{`<?php
echo "Hello, SyntaxThreadsCo!";
?>`}</code></pre>
    <p>
      Save as <code>index.php</code> in your web root, hit it in a browser, and you’re live. No build step required.
    </p>

    <h2>Variables and strings</h2>
    <pre><code>{`$name = 'Ada';
echo "Hi, $name";            // interpolation
echo 'Length: ' . strlen($name); // concatenation + built-in`}</code></pre>
    <p>
      PHP’s standard library is practical and extensive. Learn a few built‑ins (like <code>strlen</code>, <code>json_encode</code>,
      and <code>array_map</code>) and you can accomplish a lot without dependencies.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
