import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "Mastering TypeScript Generics: From Basic Constraints to Design Patterns",
  "slug": "2026-03-29-mastering-typescript-generics-from-basic-constraints-to-design-patterns",
  "date": "2026-03-29T12:14:51.216Z",
  "excerpt": "Learn how to write flexible, reusable TypeScript code with generics. We'll explore type constraints, default type parameters, and practical patterns that make generic types both powerful and maintainable.",
  "tags": [
    "typescript",
    "generics",
    "type-safety",
    "software-design",
    "advanced"
  ],
  "persona": "Typey Tim",
  "cover": "/images/blog/covers/cover-typescript.svg",
  "references": [
    {
      "title": "TypeScript Handbook - Generics",
      "url": "https://www.typescriptlang.org/docs/handbook/2/generics.html",
      "source": "TypeScript Documentation"
    },
    {
      "title": "Generic Parameter Defaults",
      "url": "https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-3.html#generic-parameter-defaults",
      "source": "TypeScript Release Notes"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "<p>If you've been following our TypeScript journey, you've already learned about basic types and type narrowing. Today, we're leveling up with generics—TypeScript's powerful tool for writing flexible, reusable code that maintains type safety. But don't worry: while generics can seem daunting at first, we'll break them down into practical patterns you can start using today.</p>\n\n<h2>Beyond Any: Why Generics Matter</h2>\n\n<p>Remember how we discussed TypeScript's everyday types? While <code>any</code> gives us flexibility, it sacrifices type safety. Generics offer the best of both worlds: flexibility <em>with</em> type checking. They act like type variables, letting us capture types for reuse throughout our interfaces and functions.</p>\n\n<p>Think of generics as a way to tell TypeScript: \"I don't know the exact type yet, but once it's chosen, make sure it's used consistently.\" This is particularly powerful when building reusable components and data structures.</p>\n\n<h2>Constraints: Setting Boundaries for Better Design</h2>\n\n<p>One of the most practical features of generics is the ability to constrain what types they can work with. This helps us write more precise code while still maintaining flexibility. Here's a real-world example:</p>\n\n<pre><code>interface HasId {\n  id: string;\n}\n\nfunction findById<T extends HasId>(\n  items: T[],\n  id: string\n): T | undefined {\n  return items.find(item => item.id === id);\n}\n\n// This works\nconst users = [\n  { id: '1', name: 'Alice' },\n  { id: '2', name: 'Bob' }\n];\nconst user = findById(users, '1');\n\n// This won't compile - missing 'id' property\nconst numbers = [1, 2, 3];\nconst number = findById(numbers, '1'); // Error!</code></pre>\n\n<p>In this example, <code>T extends HasId</code> ensures we can only use our <code>findById</code> function with arrays of objects that have an <code>id</code> property. This constraint creates a better developer experience by catching errors at compile time rather than runtime.</p>\n\n<h2>Default Type Parameters: Making Generics More Ergonomic</h2>\n\n<p>Just like how we learned about default parameters in our function types lesson, generics can have defaults too. This is particularly useful when building APIs that should work with minimal configuration but remain customizable when needed.</p>\n\n<p>Consider a scenario where you're working with a data fetcher. Most of the time you want JSON, but occasionally you need something else:</p>\n\n<p>Instead of writing:</p>\n\n<p><code>const data = await fetchData<JsonResponse>('/api/users');</code></p>\n\n<p>You can set smart defaults:</p>\n\n<p><code>const data = await fetchData('/api/users'); // JsonResponse is the default</code></p>\n\n<p>This pattern of providing sensible defaults while maintaining extensibility is key to designing good TypeScript APIs. It's the same principle we saw with type narrowing, but applied at the generic level.</p>\n\n<p>Remember: the goal isn't to use generics everywhere, but to use them where they genuinely improve your code's flexibility and type safety. As we've learned throughout this series, TypeScript's best features shine brightest when they help us catch errors early while making our code more maintainable.</p>" }}
  />
);

export default { meta, Content } satisfies PostModule;
