/**
 * Generate a cover image for a blog post using OpenAI Images API.
 * Usage: node scripts/generate-cover.ts --title "Post Title" --persona "Monty Python" --out public/images/blog/covers/slug.webp
 * Requires: OPENAI_API_KEY env var.
 */

import fs from 'node:fs';
import path from 'node:path';

function arg(name: string, fallback?: string) {
  const idx = process.argv.indexOf(`--${name}`);
  return idx > -1 ? process.argv[idx + 1] : fallback;
}

const title = arg('title');
const persona = arg('persona', 'SyntaxThreads Journal');
const out = arg('out');
const apiKey = process.env.OPENAI_API_KEY;

if (!title || !out) {
  console.error('Usage: node scripts/generate-cover.ts --title "Post Title" --persona "Monty Python" --out public/images/blog/covers/slug.webp');
  process.exit(1);
}

if (!apiKey) {
  console.error('Missing OPENAI_API_KEY');
  process.exit(1);
}

const prompt = `Minimal, premium blog cover. Theme: ${title}. Persona: ${persona}. 
Clean abstract shapes, dark background with soft gradients, code-inspired accents. No text, no logos. 1200x630.`;

async function main() {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-image-1',
      prompt,
      size: '1200x630',
      response_format: 'b64_json',
    }),
  });
  if (!res.ok) {
    console.error('Generation failed', await res.text());
    process.exit(1);
  }
  const data = await res.json();
  const b64 = data.data?.[0]?.b64_json;
  if (!b64) {
    console.error('No image data received');
    process.exit(1);
  }
  const buf = Buffer.from(b64, 'base64');
  const outPath = path.resolve(out);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buf);
  console.log('Wrote', outPath);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
