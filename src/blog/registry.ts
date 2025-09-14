import p0 from '@/blog/posts/2025-09-13-pythons-quest-for-the-holy-grail-of-readability.tsx';
import p1 from '@/blog/posts/2025-09-14-why-typescript-a-brief-history-of-scaling-javascript.tsx';
import p2 from '@/blog/posts/csharp-history-overview.tsx';
import p3 from '@/blog/posts/java-history-overview.tsx';
import p4 from '@/blog/posts/php-beginner-basics.tsx';
import p5 from '@/blog/posts/php-history-overview.tsx';
import p6 from '@/blog/posts/python-beginner-variables.tsx';
import p7 from '@/blog/posts/python-history-overview.tsx';
import p8 from '@/blog/posts/rust-history-overview.tsx';
import p9 from '@/blog/posts/typescript-beginner-types.tsx';
import p10 from '@/blog/posts/typescript-history-overview.tsx';

export const posts = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

export const postsBySlug = new Map(posts.map(p => [p.meta.slug, p]));
