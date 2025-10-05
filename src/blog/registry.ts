import p0 from '@/blog/posts/2025-09-13-pythons-quest-for-the-holy-grail-of-readability.tsx';
import p1 from '@/blog/posts/2025-09-14-why-typescript-a-brief-history-of-scaling-javascript.tsx';
import p2 from '@/blog/posts/2025-09-20-phps-journey-from-simple-scripts-to-modern-powerhouse.tsx';
import p3 from '@/blog/posts/2025-09-21-why-rust-a-tale-of-safety-and-performance.tsx';
import p4 from '@/blog/posts/2025-09-28-from-c-to-cross-platform-the-fascinating-evolution-of-c-and-net.tsx';
import p5 from '@/blog/posts/2025-09-28-from-oak-to-java-how-a-coffee-fueled-language-changed-computing.tsx';
import p6 from '@/blog/posts/2025-10-04-and-now-for-something-completely-variable-pythons-naming-conventions.tsx';
import p7 from '@/blog/posts/2025-10-05-typescripts-everyday-types-your-building-blocks-for-type-safe-code.tsx';
import p8 from '@/blog/posts/csharp-history-overview.tsx';
import p9 from '@/blog/posts/java-history-overview.tsx';
import p10 from '@/blog/posts/php-beginner-basics.tsx';
import p11 from '@/blog/posts/php-history-overview.tsx';
import p12 from '@/blog/posts/python-beginner-variables.tsx';
import p13 from '@/blog/posts/python-history-overview.tsx';
import p14 from '@/blog/posts/rust-history-overview.tsx';
import p15 from '@/blog/posts/typescript-beginner-types.tsx';
import p16 from '@/blog/posts/typescript-history-overview.tsx';

export const posts = [p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16];

export const postsBySlug = new Map(posts.map(p => [p.meta.slug, p]));
