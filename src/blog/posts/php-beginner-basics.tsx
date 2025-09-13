import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'PHP #1 — A Gentle First Script',
  slug: 'php-beginner-basics',
  date: new Date().toISOString(),
  excerpt: 'Spin up a tiny PHP script and print something real.',
  tags: ['php', 'beginners', 'basics'],
  persona: 'PHP Builder' as const,
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
      PHP ships fast. Let’s start with a single file and a single idea.
    </p>
    <h2>Hello, server</h2>
    <pre><code>{`<?php
echo "Hello, SyntaxThreadsCo!";
?>`}</code></pre>
    <p>
      Save as <code>index.php</code>, drop it into your local server, and you’re live.
    </p>
    <h2>Variables and strings</h2>
    <pre><code>{`$name = 'Ada';
echo "Hi, $name";`}</code></pre>
    <p>
      Interpolation is straightforward. Keep it readable, keep it simple.
    </p>
    <hr />
    <p className="text-sm text-muted-foreground">
      Building the basics? The PHP Warrior Premium keeps it minimal and comfortable while you ship.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
