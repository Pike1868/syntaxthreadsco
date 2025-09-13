import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'Python — A Short History and Why It Stuck',
  slug: 'python-history-overview',
  date: new Date().toISOString(),
  excerpt: 'From ABC to the web to data science — a calm, readable arc.',
  tags: ['python', 'history'],
  persona: 'Monty Python' as const,
  cover: '/images/blog/covers/cover-history.svg',
  references: [
    {
      title: 'History of Python',
      url: 'https://www.python.org/doc/essays/blurb/',
      source: 'python.org',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      Python began as a winter‑holiday side project in the late 1980s. Guido van Rossum wanted the approachability
      of ABC without its limitations and the practicality of Unix scripting without the noise. The experiment
      centered on a simple bet: code should be easy to read, easy to reason about, and friendly enough that teams
      can move quickly without tripping over syntax.
    </p>

    <h2>Origins and design bets</h2>
    <p>
      The early inspirations show up everywhere: block indentation instead of braces, a small set of clear data types,
      and a standard library that feels like a well‑stocked toolbox. That readability focus wasn’t a marketing line—
      it was a constraint that shaped decisions, from comprehensions to the “one obvious way to do it” philosophy.
    </p>
    <pre><code>{`# Readable first: obvious names, obvious intent
from pathlib import Path

def read_lines(path: str) -> list[str]:
    return Path(path).read_text().splitlines()

if __name__ == "__main__":
    for line in read_lines("notes.txt"):
        print(line)`}</code></pre>
    <p>
      Even this tiny example illustrates the vibe: standard library for common tasks, minimal boilerplate, and clear
      naming that holds up months later.
    </p>

    <h2>From Python 2 to 3</h2>
    <p>
      By the mid‑2000s, Python needed fixes that couldn’t be squeezed in without breaking changes. Python 3 cleaned up
      Unicode handling, modernized the standard library, and removed long‑standing quirks. The transition was bumpy and
      took years, but it unlocked the ecosystem we rely on today—packaging, type hints, async, and the performance and
      ergonomics we now take for granted.
    </p>

    <h2>Why it stuck</h2>
    <p>
      Python’s appeal spans web, data, automation, and education. The throughline is ergonomics: approachable syntax,
      “batteries‑included” modules, and a culture that values code that reads like an explanation. Whether you’re
      scripting a server, cleaning a dataset, or teaching loops for the first time, Python tries to reduce ceremony
      so you can focus on the problem—not the scaffolding.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
