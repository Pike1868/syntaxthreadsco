import type { PostModule } from '@/blog/types';

import python1 from '@/blog/posts/python-beginner-variables';
import ts1 from '@/blog/posts/typescript-beginner-types';
import php1 from '@/blog/posts/php-beginner-basics';

export const posts: PostModule[] = [python1, ts1, php1];

export const postsBySlug = new Map(posts.map(p => [p.meta.slug, p]));

