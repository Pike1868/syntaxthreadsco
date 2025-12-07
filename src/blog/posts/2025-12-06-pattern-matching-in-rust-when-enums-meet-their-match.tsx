import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "Pattern Matching in Rust: When Enums Meet Their Match",
  "slug": "2025-12-06-pattern-matching-in-rust-when-enums-meet-their-match",
  "date": "2025-12-06T12:09:42.245Z",
  "excerpt": "Let's explore how Rust's enum types and pattern matching create expressive, type-safe code that catches errors at compile time. It's like having a very pedantic but helpful friend checking your work.",
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
      "title": "Pattern Syntax - The Rust Reference",
      "url": "https://doc.rust-lang.org/reference/patterns.html",
      "source": "Rust Official Documentation"
    },
    {
      "title": "Error Handling - The Rust Programming Language",
      "url": "https://doc.rust-lang.org/book/ch09-00-error-handling.html",
      "source": "The Rust Book"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "In our previous chats about Rust's safety features, we've seen how ownership helps prevent memory issues. Today, let's explore another pillar of Rust's type system: enums and pattern matching. Together, they help us write code that's both expressive and impossible to break in subtle ways.\n\n<h2>Enums: More Than Just Options</h2>\n\nIf you're coming from other languages, you might think of enums as simple lists of values like {RED, GREEN, BLUE}. Rust's enums are far more powerful – they're more like algebraic data types (if you're into that sort of thing) or tagged unions (if you prefer C terminology).\n\nWhat makes Rust's enums special is that each variant can hold different types of data. This makes them perfect for representing states that might contain different information:\n\n```rust\nenum OrderStatus {\n    Pending,\n    Shipped(String),  // Tracking number\n    Delivered { time: DateTime, signature: String },\n    Failed(Error)\n}\n```\n\nNotice how some variants carry no data (Pending), some carry a single value (Shipped), and others can even have named fields (Delivered). This flexibility lets us model our domain precisely.\n\n<h2>Pattern Matching: The Swiss Army Knife of Control Flow</h2>\n\nNow, here's where things get interesting. Rust's match expression forces us to handle all possible cases of an enum. It's like having a very thorough code reviewer built into the compiler:\n\nThe compiler won't let us forget to handle any variant – a feature that's prevented countless bugs in my own code. And unlike a switch statement in other languages, match is an expression, meaning it returns a value. This leads to incredibly concise yet readable code.\n\n<h2>Results: Where Enums Meet Error Handling</h2>\n\nRemember our discussion about safety? Rust's Result enum is where pattern matching really shines in practice. Instead of throwing exceptions (which can be caught... or not), Rust encodes possible failures in the type system:\n\nResult<T, E> is an enum with two variants: Ok(T) for success and Err(E) for errors. The compiler ensures we handle both cases, making it impossible to accidentally ignore error conditions.\n\nThis might seem strict at first – and it is! But this strictness is exactly what prevents many common bugs. It's like having a very pedantic friend who always insists on considering what could go wrong. Annoying sometimes? Perhaps. Helpful in the long run? Absolutely.\n\nThe beauty of this system becomes apparent when you combine it with other Rust features we've discussed. The ownership system ensures we handle resources properly, while pattern matching ensures we handle all possible states of our data. Together, they create a safety net that catches issues at compile time rather than runtime.\n\nOf course, there's much more to explore with pattern matching – destructuring, guards, bindings, and more. But these foundations will serve you well as you continue your Rust journey. Remember: the compiler isn't being difficult; it's being thorough. And in systems programming, thorough is exactly what we want." }}
  />
);

export default { meta, Content } satisfies PostModule;
