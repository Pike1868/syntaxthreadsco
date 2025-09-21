import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'Java — Write Once, Run Anywhere (and Everywhere)',
  slug: 'java-history-overview',
  date: "2025-08-28T10:45:00.000Z",
  excerpt: 'From Oak and set‑top boxes to the JVM that powers massive enterprise systems and modern Android apps.',
  tags: ['java', 'history'],
  persona: 'Java the Hut' as const,
  cover: '/images/blog/covers/cover-history.svg',
  references: [
    {
      title: 'The Java Tutorials — The Java Technology',
      url: 'https://docs.oracle.com/javase/tutorial/getStarted/intro/definition.html',
      source: 'docs.oracle.com',
    },
    {
      title: 'OpenJDK — About',
      url: 'https://openjdk.org/',
      source: 'openjdk.org',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      Java began as “Oak,” a language for embedded devices. Its big idea—bytecode on a virtual machine—meant software
      could target the JVM and run on any platform with a compatible runtime. The slogan was cheeky, the impact real.
    </p>

    <h2>Origins and portability</h2>
    <p>
      Early Java delivered a familiar C‑style syntax with automatic memory management and a well‑specified class
      library. The portability bet paid off in servers, tooling, and eventually Android; “run anywhere” looked less
      like a tagline and more like a practical standard.
    </p>
    <pre><code>{`// A tiny taste of modern Java
record User(String name, boolean active) {}

User flip(User u) { return new User(u.name(), !u.active()); }`}</code></pre>
    <p>
      Modern Java added records, var, improved generics, and stronger concurrency primitives. The core promise
      remains: a stable platform, predictable performance, and powerful tooling.
    </p>

    <h2>How it endured</h2>
    <p>
      Backward compatibility, strong libraries, and a mature ecosystem kept Java relevant. From web and enterprise to
      data engineering, the JVM has been the quiet constant behind a lot of reliable software.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
