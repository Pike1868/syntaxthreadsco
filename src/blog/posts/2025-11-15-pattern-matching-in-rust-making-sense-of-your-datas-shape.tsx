import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "Pattern Matching in Rust: Making Sense of Your Data's Shape",
  "slug": "2025-11-15-pattern-matching-in-rust-making-sense-of-your-datas-shape",
  "date": "2025-11-15T12:09:25.782Z",
  "excerpt": "Let's explore how Rust's pattern matching helps us handle different data shapes with confidence and compile-time safety. From simple enums to complex matches, we'll see how the compiler becomes our helpful assistant.",
  "tags": [
    "rust",
    "programming",
    "pattern-matching",
    "enums",
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
      "title": "Match Expressions - Rust By Example",
      "url": "https://doc.rust-lang.org/rust-by-example/flow_control/match.html",
      "source": "Rust By Example"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "In our previous discussions about Rust's safety guarantees, we've focused on memory management through ownership. Today, let's explore another pillar of Rust's type system: enums and pattern matching. These features help us express complex data relationships while letting the compiler verify we've handled all possible cases.\n\n<h2>Enums: More Than Just Options</h2>\n\nIf you're coming from other languages, you might think of enums as simple collections of constants. In Rust, they're far more powerful. An enum can hold different types of data in each of its variants, making it perfect for representing state machines or result types.\n\nLet's look at a practical example. Imagine we're building a command-line tool that processes files:\n\n```rust\nenum FileOperation {\n    Read(String),           // Holds a filename\n    Write(String, String),  // Filename and content\n    Delete(String),         // Filename to delete\n    ListDir,                // No associated data needed\n}\n\nfn process_operation(op: FileOperation) -> Result<(), String> {\n    match op {\n        FileOperation::Read(filename) => {\n            println!(\"Reading from {}\", filename);\n            Ok(())\n        },\n        FileOperation::Write(filename, content) => {\n            println!(\"Writing '{}' to {}\", content, filename);\n            Ok(())\n        },\n        FileOperation::Delete(filename) => {\n            println!(\"Deleting {}\", filename);\n            Ok(())\n        },\n        FileOperation::ListDir => {\n            println!(\"Listing current directory\");\n            Ok(())\n        },\n    }\n}\n```\n\n<h2>The Match Expression: Your Compiler's Best Friend</h2>\n\nNotice how the match expression above handles each variant of our FileOperation enum. This isn't just a switch statement – it's a powerful pattern matching construct that the compiler uses to ensure we've handled every possible case.\n\nIf we later add a new variant to FileOperation but forget to update our match expression, the compiler will politely refuse to compile our code. This is exactly the kind of help we want when maintaining large codebases!\n\n<h2>Results and Pattern Matching: A Perfect Partnership</h2>\n\nRemember our discussion about safety in the first post of this series? Pattern matching pairs beautifully with Rust's Result type to handle errors gracefully. Instead of throwing exceptions and hoping they're caught somewhere, we can use pattern matching to handle both success and error cases explicitly:\n\nWhen you're working with Results, pattern matching becomes your go-to tool for handling both the happy path and potential errors. The compiler ensures you've considered both cases, making it impossible to accidentally ignore an error condition.\n\nThis is where Rust's philosophy really shines: by making error handling explicit through types and pattern matching, we catch potential issues at compile time rather than having them surprise us at runtime. Our previous discussions about ownership and safety naturally extend to how we handle different states and outcomes in our programs.\n\nPattern matching in Rust isn't just a feature – it's a fundamental tool that helps us write more reliable code. By expressing our data's shape through enums and handling all cases with matches, we let the compiler help us catch potential issues before they become runtime problems.\n\nIn our next discussion, we'll explore how to combine these patterns with traits to create flexible, reusable abstractions. Until then, happy matching!" }}
  />
);

export default { meta, Content } satisfies PostModule;
