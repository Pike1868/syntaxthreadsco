import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "From C++ to Cross-Platform: The Fascinating Evolution of C# and .NET",
  "slug": "2025-09-28-from-c-to-cross-platform-the-fascinating-evolution-of-c-and-net",
  "date": "2025-09-28T12:08:44.706Z",
  "excerpt": "Ever wonder why C# feels so polished right out of the gate? Let's explore how Anders Hejlsberg's experience with Delphi and TypeScript shaped C#'s DNA, and how .NET evolved from Windows-only to truly cross-platform.",
  "tags": [
    "dotnet",
    "csharp",
    "programming-history",
    "cross-platform",
    "history"
  ],
  "persona": "Dotnet Dave",
  "cover": "/images/blog/covers/cover-history.svg",
  "references": [
    {
      "title": "The History of C#",
      "url": "https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-version-history",
      "source": "Microsoft Docs"
    },
    {
      "title": "Anders Hejlsberg on Modern Compiler Construction",
      "url": "https://channel9.msdn.com/Events/Build/2014/3-642",
      "source": "Microsoft Channel 9"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "<p>Hey there, fellow developers! Dotnet Dave here. Before we dive into building cool stuff with C# and .NET, I think it's worth understanding how we got here. You know, sometimes looking back helps us better appreciate where we're heading.</p>\n\n<h2>The Delphi Connection: C#'s Secret Origin Story</h2>\n\n<p>Back in the late 90s, Microsoft had a problem. Java was gaining momentum, and Windows needed a modern, productive programming environment. Enter Anders Hejlsberg, the architect behind Turbo Pascal and Delphi at Borland. Microsoft brought him on board, and magic happened.</p>\n\n<p>What's fascinating is how much of Delphi's DNA lives on in C#. The focus on developer productivity, the clean syntax, and the balance between safety and expressiveness—these weren't accidents. They were hard-won lessons from years of language design. When you write something like this in C#:</p>\n\n<pre><code>public class Customer {\n    public string Name { get; set; }\n    public decimal Balance { get; set; }\n    \n    public void ProcessOrder(Order order) {\n        // Your business logic here\n    }\n}</code></pre>\n\n<p>You're using syntax that evolved from decades of thinking about how to make object-oriented programming more intuitive. Those property accessors? That's Delphi heritage right there, refined for the modern era.</p>\n\n<h2>Breaking Free: The Cross-Platform Journey</h2>\n\n<p>Here's where the story gets really interesting. For its first decade, .NET was basically Windows-only. Sure, there was Mono, but it was always playing catch-up. Then something remarkable happened: Microsoft embraced open source. Not just a little bit—they went all in.</p>\n\n<p>.NET Core (now just .NET) emerged as a complete reimagining of the platform. Cross-platform wasn't an afterthought; it was baked into the design from day one. Today, you can build and run .NET applications on:</p>\n\n<ul>\n    <li>Windows (naturally)</li>\n    <li>Linux (including in containers)</li>\n    <li>macOS</li>\n    <li>iOS and Android (via .NET MAUI)</li>\n    <li>WebAssembly (via Blazor)</li>\n</ul>\n\n<h2>Why It Matters Today</h2>\n\n<p>So why am I telling you all this? Because understanding this evolution helps you make better architectural decisions. When you see features like nullable reference types or record types in modern C#, you're seeing the culmination of decades of language design experience.</p>\n\n<p>The platform's history also explains why .NET excels in certain areas. The strong typing and performance optimizations come from its C++ heritage. The productive development experience traces back to Delphi. The modern cloud-native capabilities? Those emerged from the cross-platform rewrite.</p>\n\n<p>As we continue this journey together, we'll build on these foundations. We'll explore how C#'s type system keeps us safe, how .NET's cross-platform capabilities let us deploy anywhere, and how modern features make our code more expressive and maintainable.</p>\n\n<p>Next time, we'll start writing some actual code. But remember: you're not just learning another programming language—you're tapping into decades of evolution in software development. And trust me, that context will make you a better developer.</p>" }}
  />
);

export default { meta, Content } satisfies PostModule;
