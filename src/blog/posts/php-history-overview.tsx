import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'PHP — From Personal Home Page to Modern Web Workhorse',
  slug: 'php-history-overview',
  date: "2025-08-22T09:30:00.000Z",
  excerpt: 'Born as a simple tool by Rasmus Lerdorf, PHP grew into a pragmatic, widely deployed server-side language.',
  tags: ['php', 'history'],
  persona: 'Hypertext Harry' as const,
  cover: '/images/blog/covers/cover-history.svg',
  references: [
    {
      title: 'PHP: A fractal of bad design? (historical debate)',
      url: 'https://eev.ee/blog/2012/04/09/php-a-fractal-of-bad-design/',
      source: 'eev.ee',
    },
    {
      title: 'PHP Manual — History of PHP',
      url: 'https://www.php.net/manual/en/history.php.php',
      source: 'php.net',
    }
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      PHP began in 1995 as Rasmus Lerdorf’s practical scripts for tracking visits to his personal website. It quickly
      evolved—first as PHP/FI, then through community‑driven revisions—into a general‑purpose server‑side language
      that powers a large portion of the web.
    </p>

    <h2>Why it spread</h2>
    <p>
      The web rewarded pragmatism. PHP let you start with a single file, echo HTML, talk to a database, and ship.
      Over time, extensions, community libraries, and frameworks like Laravel and Symfony gave it structure without
      losing that quick iteration loop.
    </p>
    <pre><code>{`<?php
// Still the fastest way to see something on screen
echo date('c');
?>`}</code></pre>
    <p>
      Modern PHP (7.x and 8.x) brought substantial performance and language features (scalar type hints, return types,
      attributes) while composer standardized package management. The result: familiar pragmatism with a more robust core.
    </p>

    <h2>Where it shines</h2>
    <p>
      Rapid prototyping, content‑heavy sites, and frameworks with strong batteries are PHP’s home turf. It remains a
      practical choice for teams who value fast feedback, predictable hosting, and a massive ecosystem.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
