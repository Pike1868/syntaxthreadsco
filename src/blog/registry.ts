import type { PostModule } from '@/blog/types';

import python1 from '@/blog/posts/python-beginner-variables';
import pythonHistory from '@/blog/posts/python-history-overview';
import ts1 from '@/blog/posts/typescript-beginner-types';
import tsHistory from '@/blog/posts/typescript-history-overview';
import php1 from '@/blog/posts/php-beginner-basics';
import phpHistory from '@/blog/posts/php-history-overview';

export const posts: PostModule[] = [
  pythonHistory,
  tsHistory,
  phpHistory,
  python1,
  ts1,
  php1,
];

export const postsBySlug = new Map(posts.map(p => [p.meta.slug, p]));
