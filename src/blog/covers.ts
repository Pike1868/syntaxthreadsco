import type { PostMeta } from '@/blog/types';

// Diversified cover pools per theme/persona
const pools: Record<string, string[]> = {
  history: [
    '/images/blog/covers/cover-history.svg',
    '/images/blog/covers/cover-history-2.svg',
    '/images/blog/covers/cover-history-3.svg',
  ],
  python: [
    '/images/blog/covers/cover-python.svg',
    '/images/blog/covers/cover-python-2.svg',
    '/images/blog/covers/cover-python-3.svg',
  ],
  typescript: [
    '/images/blog/covers/cover-typescript.svg',
    '/images/blog/covers/cover-typescript-2.svg',
    '/images/blog/covers/cover-typescript-3.svg',
  ],
  php: [
    '/images/blog/covers/cover-php.svg',
    '/images/blog/covers/cover-php-2.svg',
    '/images/blog/covers/cover-php-3.svg',
  ],
  rust: [
    '/images/blog/covers/cover-rust.svg',
    '/images/blog/covers/cover-rust-2.svg',
    '/images/blog/covers/cover-rust-3.svg',
  ],
  java: [
    '/images/blog/covers/cover-java.svg',
    '/images/blog/covers/cover-java-2.svg',
    '/images/blog/covers/cover-java-3.svg',
  ],
  csharp: [
    '/images/blog/covers/cover-csharp.svg',
    '/images/blog/covers/cover-csharp-2.svg',
    '/images/blog/covers/cover-csharp-3.svg',
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

// Map persona display names to language keys used for color accents
const personaKeyMap: Record<string, 'python'|'typescript'|'php'|'rust'|'java'|'csharp'> = {
  'Monty Python': 'python',
  'Typey Tim': 'typescript',
  'Hypertext Harry': 'php',
  'Ferris Rustman': 'rust',
  'Java the Hut': 'java',
  'Dotnet Dave': 'csharp',
};

function getThemeFromMeta(meta: PostMeta): 'history' | 'foundations' | 'advanced' | 'frameworks' | 'generic' {
  const tags = (meta.tags || []).map(t => t.toLowerCase());
  if (tags.includes('history')) return 'history';
  if (tags.includes('foundations')) return 'foundations';
  if (tags.includes('advanced')) return 'advanced';
  if (tags.includes('frameworks')) return 'frameworks';
  return 'generic';
}

// Return subtle Tailwind overlay classes to tint covers per persona/theme
export function getCoverOverlayClass(meta: PostMeta): string {
  const personaKey = personaKeyMap[meta.persona] || 'python';
  const theme = getThemeFromMeta(meta);
  const base = 'pointer-events-none absolute inset-0';
  // persona accent classes
  const accent: Record<string, string> = {
    python: 'from-cyan-400/10',
    typescript: 'from-blue-400/10',
    php: 'from-fuchsia-400/10',
    rust: 'from-orange-400/10',
    java: 'from-emerald-400/10',
    csharp: 'from-indigo-400/10',
  };
  const a = accent[personaKey];
  // theme direction/intensity tweaks
  const themeDir: Record<string, string> = {
    history: 'bg-gradient-to-tr',
    foundations: 'bg-gradient-to-t',
    advanced: 'bg-gradient-to-br',
    frameworks: 'bg-gradient-to-r',
    generic: 'bg-gradient-to-tr',
  };
  const to = 'to-transparent';
  return `${base} ${themeDir[theme]} ${a} ${to}`;
}
