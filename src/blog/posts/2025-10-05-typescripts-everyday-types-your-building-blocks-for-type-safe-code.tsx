import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "TypeScript's Everyday Types: Your Building Blocks for Type-Safe Code",
  "slug": "2025-10-05-typescripts-everyday-types-your-building-blocks-for-type-safe-code",
  "date": "2025-10-05T12:08:26.788Z",
  "excerpt": "A practical guide to TypeScript's fundamental types, from primitives to objects, and how they form the foundation of type-safe development. Learn how to leverage these building blocks for more maintainable code.",
  "tags": [
    "typescript",
    "javascript",
    "types",
    "programming",
    "web development",
    "foundations"
  ],
  "persona": "Typey Tim",
  "cover": "/images/blog/covers/cover-typescript.svg",
  "references": [
    {
      "title": "TypeScript Handbook - Everyday Types",
      "url": "https://www.typescriptlang.org/docs/handbook/2/everyday-types.html",
      "source": "TypeScript Documentation"
    },
    {
      "title": "TypeScript Deep Dive - Types",
      "url": "https://basarat.gitbook.io/typescript/type-system",
      "source": "TypeScript Deep Dive"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "<p>In our last discussion about TypeScript's origins, we explored why static typing matters for large-scale applications. Today, let's dive into the practical building blocks you'll use daily: TypeScript's core types. Understanding these fundamentals is crucial for writing type-safe code that scales.</p>\n\n<h2>Starting with the Primitives</h2>\n\n<p>TypeScript builds upon JavaScript's primitive types, but adds explicit type annotations that help catch errors before runtime. The most common primitives you'll work with are:</p>\n\n<pre><code>// Type annotations in action\nlet message: string = \"Hello, TypeScript\";\nlet isActive: boolean = true;\nlet count: number = 42;\nlet notDefined: undefined = undefined;\nlet empty: null = null;\n\n// TypeScript can often infer these types\nlet inferredString = \"No explicit type needed\";\n// Type: string (inferred)</code></pre>\n\n<p>While these might look straightforward, TypeScript's type inference is doing heavy lifting behind the scenes. When possible, let TypeScript infer types for you - it keeps your code cleaner while maintaining type safety.</p>\n\n<h2>Objects and Interfaces: Where Types Shine</h2>\n\n<p>Objects are where TypeScript's type system really demonstrates its value. Instead of dealing with unexpected property access issues at runtime (as we often do in JavaScript), TypeScript helps us define clear contracts for our objects:</p>\n\n<p>When working with objects, you have two main approaches:</p>\n\n<ul>\n<li>Type aliases: Quick, simple object type definitions</li>\n<li>Interfaces: More powerful, extendable type definitions (we'll cover these in detail in a future post)</li>\n</ul>\n\n<p>Type aliases are particularly useful for simple object shapes and union types. They're my go-to for straightforward type definitions:</p>\n\n<h2>Type Aliases: Your Daily Companion</h2>\n\n<p>Type aliases help us define reusable types that make our code more maintainable. Think of them as variables for types:</p>\n\n<p>Here's a practical example I use often in real-world applications:</p>\n\n<p>A few key points about type aliases:</p>\n\n<ul>\n<li>They can represent any type, not just object types</li>\n<li>They're immutable - once defined, they can't be changed</li>\n<li>They can be composed together to build more complex types</li>\n</ul>\n\n<p>Remember: TypeScript's type system is structural, not nominal. This means two differently-named types with the same shape are compatible. This flexibility is powerful but requires careful consideration when designing your types.</p>\n\n<p>When working with these everyday types, keep in mind that they're tools for documentation as much as they are for validation. Well-named types serve as living documentation for your codebase, making it easier for team members to understand the expected shape and behavior of data throughout your application.</p>\n\n<p>In our next discussion, we'll explore how to combine these fundamental types into more complex structures using unions and intersections. For now, focus on mastering these everyday types - they're the foundation everything else builds upon.</p>" }}
  />
);

export default { meta, Content } satisfies PostModule;
