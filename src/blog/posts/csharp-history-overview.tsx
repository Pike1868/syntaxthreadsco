import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'C# — Modern .NET from Windows Roots to Cross‑Platform',
  slug: 'csharp-history-overview',
  date: new Date().toISOString(),
  excerpt: 'From .NET’s early days to open‑source, cross‑platform tooling and a language that kept getting nicer to write.',
  tags: ['csharp', 'history'],
  persona: 'Dotnet Dave' as const,
  cover: '/images/blog/covers/cover-history.svg',
  references: [
    {
      title: 'Tour of C#',
      url: 'https://learn.microsoft.com/dotnet/csharp/tour-of-csharp/',
      source: 'learn.microsoft.com',
    },
    {
      title: 'What is .NET?',
      url: 'https://learn.microsoft.com/dotnet/fundamentals/',
      source: 'learn.microsoft.com',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      C# launched with .NET as a modern, strongly typed, object‑oriented language for Windows development. Over time
      it turned into a cross‑platform, open‑source ecosystem with a language that kept absorbing good ideas without
      losing its clarity.
    </p>

    <h2>Origins and evolution</h2>
    <p>
      Led by Anders Hejlsberg, C# balanced familiarity with productivity: generics, LINQ, async/await, records,
      pattern matching, and a steady cadence of quality‑of‑life features. The result is a language that feels modern
      without being fussy.
    </p>
    <pre><code>{`// LINQ makes intent obvious
record User(string Name, bool Active);

var activeNames = users
  .Where(u => u.Active)
  .Select(u => u.Name)
  .ToList();`}</code></pre>
    <p>
      The wider .NET platform and tooling completed the story: predictable builds, fast runtimes, and a first‑class
      developer experience across Windows, Linux, and macOS.
    </p>

    <h2>Where it fits</h2>
    <p>
      Web backends, desktop and mobile with .NET MAUI, game development via Unity, and cloud services. C# remains a
      solid choice when you want strong typing and great tooling with few surprises.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
