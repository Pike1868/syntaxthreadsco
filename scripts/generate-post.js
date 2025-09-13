// ESM Node 20 script to generate a blog post via OpenRouter
// Usage: node scripts/generate-post.js

import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const personasPath = path.join(ROOT, 'content/personas.json');
const memoryDir = path.join(ROOT, 'content/memory');
const postsDir = path.join(ROOT, 'src/blog/posts');
const registryPath = path.join(ROOT, 'src/blog/registry.ts');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const OPENROUTER_REFERER = process.env.OPENROUTER_REFERER || 'https://www.syntaxthreads.com';
const OPENROUTER_TITLE = process.env.OPENROUTER_TITLE || 'SyntaxThreadsCo';
// Default to a high-quality consistent model unless overridden
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'anthropic/claude-3.5-sonnet';
const OPENROUTER_TEMPERATURE = process.env.OPENROUTER_TEMPERATURE || '0.6';

if (!OPENROUTER_API_KEY) {
  console.error('Missing OPENROUTER_API_KEY');
  process.exit(0);
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf-8'));
}
function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(obj, null, 2));
}

function todaySlug() {
  const d = new Date();
  const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
  const dd = String(d.getUTCDate()).padStart(2, '0');
  return `${d.getUTCFullYear()}-${mm}-${dd}`;
}

function slugify(s) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

async function main() {
  const personas = readJson(personasPath);
  const rotation = personas.rotation;
  const personaIdx = personas.cursor % rotation.length;
  const personaName = rotation[personaIdx];
  const persona = personas.personas[personaName];
  const safeKey = (persona.key || personaName)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .split('-')[0];
  const personaMemoryPath = path.join(memoryDir, `${safeKey}.json`);
  const memory = readJson(personaMemoryPath);

  const moduleIdx = persona.cursor % persona.modules.length;
  const module = persona.modules[moduleIdx];

  // Model and temperature selection: persona override -> env -> default
  const personaModel = persona.model || OPENROUTER_MODEL;
  const personaTemp = typeof persona.temperature === 'number' ? persona.temperature : Number(OPENROUTER_TEMPERATURE);

  // Build prompt
  const system = `You are a brand writer for SyntaxThreadsCo. Voice is authentic, humble, lightly witty, developer-respectful.
Write a 5-minute technical blog post (~800–1100 words). Structure with: a short lead, 2–3 H2 sections, exactly one focused code block if relevant, and a References list with at least 1 credible link (prefer official docs).
Tone: useful first, promotional second; avoid hype and clickbait. No product photos.
Output strictly as compact JSON with keys: title, excerpt, tags (array), html (article body in HTML), references (array of {title,url,source}). Do not include any commentary before or after JSON.`;

  const memorySummary = (memory.recent || [])
    .slice(-3)
    .map((p) => `- ${p.title}: ${p.excerpt}`)
    .join('\n');

  const personaVoice = persona.voice || '';
  const user = `Persona: ${personaName}\nPersona voice: ${personaVoice}\nModule: ${module.title} (${module.category})\nHint: ${module.hint}\nDo not repeat recent posts; build upon them.\nRecent posts:\n${memorySummary || '(none)'}\nConstraints: 800–1100 words, at least 1 reference, include 2–3 H2 headings, include 1 code block if relevant.`;

  const body = {
    model: personaModel,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ],
    temperature: personaTemp,
  };

  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
      'HTTP-Referer': OPENROUTER_REFERER,
      'X-Title': OPENROUTER_TITLE,
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    console.error('OpenRouter error:', await res.text());
    process.exit(1);
  }
  const data = await res.json();
  const content = data.choices?.[0]?.message?.content || '';
  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (e) {
    console.error('Failed to parse JSON content:', content.slice(0, 200));
    process.exit(1);
  }

  // Validate
  const title = String(parsed.title || '').trim();
  const excerpt = String(parsed.excerpt || '').trim();
  const tags = Array.isArray(parsed.tags) ? parsed.tags.slice(0, 6).map(String) : [];
  const html = String(parsed.html || '').trim();
  const references = Array.isArray(parsed.references) ? parsed.references.filter(r => r && r.url) : [];

  if (!title || !html || references.length === 0) {
    console.error('Invalid generation: missing title/html/references');
    process.exit(1);
  }
  // Ensure at least one credible reference (allowlist by persona)
  function hostname(u){ try { return new URL(u).hostname; } catch { return ''; } }
  const DOMAIN_ALLOWLIST = {
    'Monty Python': ['python.org', 'docs.python.org', 'peps.python.org'],
    'Typey Tim': ['typescriptlang.org', 'www.typescriptlang.org', 'tc39.es', 'nodejs.org'],
    'Hypertext Harry': ['php.net', 'www.php.net'],
    'Ferris Rustman': ['rust-lang.org', 'doc.rust-lang.org'],
    'Java the Hut': ['docs.oracle.com', 'openjdk.org'],
    'Dotnet Dave': ['learn.microsoft.com', 'docs.microsoft.com', 'dotnet.microsoft.com'],
  };
  const allowed = DOMAIN_ALLOWLIST[personaName] || [];
  const hasCredible = references.some(r => allowed.some(domain => hostname(r.url).endsWith(domain)));
  if (!hasCredible) {
    console.error('No credible reference found for persona:', personaName, 'References:', references.map(r=>r.url));
    process.exit(1);
  }
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  if (words < 700 || words > 1400) {
    console.warn('Generated word count out of target range:', words);
  }

  const dateISO = new Date().toISOString();
  const baseSlug = slugify(title);
  const slug = `${todaySlug()}-${baseSlug}`;
  const cover = module.category === 'history' ? '/images/blog/covers/cover-history.svg' : persona.cover;

  // Write post file
  const meta = {
    title,
    slug,
    date: dateISO,
    excerpt,
    tags,
    persona: personaName,
    cover,
    references,
  };

  const tsx = `import type { PostModule } from '@/blog/types';\n\nexport const meta = ${JSON.stringify(meta, null, 2)} as const;\n\nexport const Content = () => (\n  <div className=\"prose prose-neutral dark:prose-invert\"\n    dangerouslySetInnerHTML={{ __html: ${JSON.stringify(html)} }}\n  />\n);\n\nexport default { meta, Content } satisfies PostModule;\n`;

  fs.mkdirSync(postsDir, { recursive: true });
  const outPath = path.join(postsDir, `${slug}.tsx`);
  fs.writeFileSync(outPath, tsx);
  console.log('Wrote post:', outPath);

  // Rebuild registry.ts by listing posts directory
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.tsx'));
  const imports = files.map((f, i) => `import p${i} from '@/blog/posts/${f.replace(/\\.tsx$/, '')}';`).join('\n');
  const arr = files.map((_, i) => `p${i}`).join(', ');
  const registry = `${imports}\n\nexport const posts = [${arr}];\n\nexport const postsBySlug = new Map(posts.map(p => [p.meta.slug, p]));\n`;
  fs.writeFileSync(registryPath, registry);
  console.log('Updated registry:', registryPath);

  // Update memory
  const newRecent = (memory.recent || []).concat([{ title, excerpt, slug, tags }]).slice(-3);
  writeJson(personaMemoryPath, { recent: newRecent });

  // Advance cursors
  persona.cursor = moduleIdx + 1;
  personas.personas[personaName] = persona;
  personas.cursor = personaIdx + 1;
  writeJson(personasPath, personas);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
