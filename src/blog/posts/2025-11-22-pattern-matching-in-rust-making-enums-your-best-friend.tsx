import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "Pattern Matching in Rust: Making Enums Your Best Friend",
  "slug": "2025-11-22-pattern-matching-in-rust-making-enums-your-best-friend",
  "date": "2025-11-22T12:09:02.296Z",
  "excerpt": "Let's explore how Rust's enum types and pattern matching create expressive, type-safe code that catches errors at compile time. It's like having a very meticulous friend who always helps you handle every case.",
  "tags": [
    "rust",
    "programming",
    "enums",
    "pattern-matching",
    "type-safety",
    "foundations"
  ],
  "persona": "Ferris Rustman",
  "cover": "/images/blog/covers/cover-rust.svg",
  "references": [
    {
      "title": "Rust Book - Chapter 6: Enums and Pattern Matching",
      "url": "https://doc.rust-lang.org/book/ch06-00-enums.html",
      "source": "The Rust Programming Language Book"
    },
    {
      "title": "Rust By Example - Pattern Matching",
      "url": "https://doc.rust-lang.org/rust-by-example/flow_control/match.html",
      "source": "Rust By Example"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "<p>In our previous discussions about Rust's safety features, we've explored how ownership rules help prevent memory issues. Today, let's add another powerful tool to our safety toolkit: enums and pattern matching. Together, they help us write code that's both expressive and exhaustive in handling different cases.</p>\n\n<h2>Enums: More Than Just Options</h2>\n\n<p>If you're coming from other languages, you might think of enums as simple sets of constants. In Rust, they're far more powerful. Each enum variant can hold different types of data, making them perfect for representing states or results that can take multiple forms.</p>\n\n<p>Remember how we discussed memory safety in our first post? Enums are another way Rust helps us write safer code, by making us explicitly handle different cases at compile time. Let's look at a practical example:</p>\n\n<pre><code>enum ConnectionState {\n    Disconnected,\n    Connecting { retry_count: u32 },\n    Connected(String),\n    Failed(Box<dyn Error>)\n}\n\nfn handle_connection(state: ConnectionState) {\n    match state {\n        ConnectionState::Disconnected => {\n            println!(\"Initiating connection...\");\n        }\n        ConnectionState::Connecting { retry_count } => {\n            println!(\"Attempt {}: Trying to connect...\", retry_count);\n        }\n        ConnectionState::Connected(url) => {\n            println!(\"Successfully connected to {}\", url);\n        }\n        ConnectionState::Failed(error) => {\n            println!(\"Connection failed: {}\", error);\n        }\n    }\n}</code></pre>\n\n<h2>Pattern Matching: The Compiler's Crystal Ball</h2>\n\n<p>The `match` expression is like having a very thorough assistant who insists on handling every possible case. This is where Rust's commitment to safety really shines - the compiler won't let you forget to handle any variant of your enum.</p>\n\n<p>Building on our ownership discussion from last time, pattern matching works seamlessly with Rust's ownership rules. When you match on an enum, you can move, borrow, or reference its contents while maintaining memory safety.</p>\n\n<h2>Results and Options: Enums in the Standard Library</h2>\n\n<p>The Rust standard library makes extensive use of enums through `Result` and `Option`. If you've been following along with our series, you might have noticed how these types eliminate many common sources of runtime errors:</p>\n\n<p>- `Option<T>` replaces null references (remember our chat about memory safety?)<br>\n- `Result<T, E>` makes error handling explicit and compiler-checked</p>\n\n<p>These aren't just types - they're a philosophy. They push us to think about and handle edge cases during development, not during 3 AM production incidents. The compiler becomes our pair programming buddy, gently (okay, sometimes not so gently) reminding us about unhandled cases.</p>\n\n<p>A key insight that ties back to our ownership discussion: pattern matching with enums gives us compile-time guarantees about exhaustive handling of cases, while ownership rules give us compile-time guarantees about memory safety. Together, they form a powerful safety net that catches issues before they become runtime problems.</p>\n\n<p>Next time, we'll explore how to combine these concepts with Rust's trait system to create flexible, reusable abstractions. Until then, happy pattern matching!</p>" }}
  />
);

export default { meta, Content } satisfies PostModule;
