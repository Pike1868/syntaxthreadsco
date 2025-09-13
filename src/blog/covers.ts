import type { PostMeta } from '@/blog/types';

// Diversified cover pools per theme/persona
const pools: Record<string, string[]> = {
  history: [
    '/images/blog/covers/cover-history.svg',
    '/images/blog/covers/cover-history-2.svg',
  ],
  python: [
    '/images/blog/covers/cover-python.svg',
    '/images/blog/covers/cover-python-2.svg',
  ],
  typescript: [
    '/images/blog/covers/cover-typescript.svg',
    '/images/blog/covers/cover-typescript-2.svg',
  ],
  php: [
    '/images/blog/covers/cover-php.svg',
    '/images/blog/covers/cover-php-2.svg',
  ],
  rust: [
    '/images/blog/covers/cover-rust.svg',
    '/images/blog/covers/cover-rust-2.svg',
  ],
  java: [
    '/images/blog/covers/cover-java.svg',
    '/images/blog/covers/cover-java-2.svg',
  ],
  csharp: [
    '/images/blog/covers/cover-csharp.svg',
    '/images/blog/covers/cover-csharp-2.svg',
  ],
};

function simpleHash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h >>> 0;
}

export function getDiversifiedCover(meta: PostMeta): string | undefined {
  const base = meta.cover;
  if (!base) return undefined;
  const lower = base.toLowerCase();
  let key: keyof typeof pools | undefined;
  if (lower.includes('history')) key = 'history';
  else if (lower.includes('python')) key = 'python';
  else if (lower.includes('typescript')) key = 'typescript';
  else if (lower.includes('php')) key = 'php';
  else if (lower.includes('rust')) key = 'rust';
  else if (lower.includes('java')) key = 'java';
  else if (lower.includes('csharp')) key = 'csharp';

  if (!key) return base;
  const pool = pools[key];
  if (!pool || pool.length === 0) return base;
  const idx = simpleHash(meta.slug) % pool.length;
  return pool[idx];
}

