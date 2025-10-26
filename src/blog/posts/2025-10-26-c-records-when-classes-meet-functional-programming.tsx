import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "C# Records: When Classes Meet Functional Programming",
  "slug": "2025-10-26-c-records-when-classes-meet-functional-programming",
  "date": "2025-10-26T12:09:15.244Z",
  "excerpt": "Records in C# bring the best of object-oriented and functional worlds together. Let's explore how they make data modeling both cleaner and safer.",
  "tags": [
    "csharp",
    "dotnet",
    "records",
    "functional-programming",
    "data-modeling",
    "foundations"
  ],
  "persona": "Dotnet Dave",
  "cover": "/images/blog/covers/cover-csharp.svg",
  "references": [
    {
      "title": "C# Records",
      "url": "https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/tutorials/records",
      "source": "Microsoft Docs"
    },
    {
      "title": "Functional Programming Patterns with C# Records",
      "url": "https://docs.microsoft.com/en-us/dotnet/csharp/tutorials/patterns/patterns-with-records",
      "source": "Microsoft Docs"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "In our last exploration of C#'s evolution, we saw how the language grew from its C++ roots into a modern, cross-platform powerhouse. Today, let's dive into one of my favorite C# features that showcases this evolution: records. They're a perfect example of how C# keeps getting more expressive while staying true to its strongly-typed nature.\n\n<h2>Why Records? The Case for Immutable Data</h2>\n\nIf you've been writing C# for a while, you're probably familiar with creating classes to model your data. But sometimes, especially when working with data that shouldn't change after creation (like API responses or value objects), traditional classes feel a bit... verbose.\n\nConsider how often you've written code like this:\n\n<pre><code>public class CustomerInfo\n{\n    public string Name { get; init; }\n    public string Email { get; init; }\n    \n    public CustomerInfo(string name, string email)\n    {\n        Name = name;\n        Email = email;\n    }\n\n    public override bool Equals(object obj)\n    {\n        // Lengthy equality implementation\n    }\n\n    public override int GetHashCode()\n    {\n        // Hash code implementation\n    }\n}</code></pre>\n\nThat's a lot of ceremony for what's essentially just a data container! Records solve this by giving us a more concise, functional-programming-inspired way to model immutable data.\n\n<h2>Records: The Sweet Spot</h2>\n\nHere's that same customer info modeled as a record:\n\n<code>public record CustomerInfo(string Name, string Email);</code>\n\nThat's it! One line gives you:\n- Immutable properties\n- A constructor\n- Value-based equality (rather than reference-based)\n- Structural hash code generation\n- A nice ToString() implementation\n- Built-in with-expression support for non-destructive mutations\n\nBut records aren't just about writing less code—they help us think differently about our data. They encourage us to model our domain using immutable types, which can lead to fewer bugs and easier-to-understand code flows.\n\n<h2>LINQ: Records' Best Friend</h2>\n\nRecords really shine when combined with LINQ. Since records are immutable and have value-based equality, they work beautifully in data transformations and queries. For example:\n\n<code>var premiumCustomers = customers\n    .Where(c => c.Type == CustomerType.Premium)\n    .Select(c => new CustomerInfo(c.Name, c.Email))\n    .Distinct();</code>\n\nThe Distinct() call here works exactly as you'd expect because records implement equality comparison out of the box. No more overriding Equals() and GetHashCode() just to compare two objects with the same property values!\n\nRemember how we talked about C#'s evolution in our last post? Records are a perfect example of how the language keeps getting more expressive while maintaining its strong type system. They give us the safety of C#'s type system with the ergonomics of functional programming.\n\nWhether you're building APIs, working with domain models, or just trying to make your code more maintainable, records are a powerful tool in your C# toolkit. They're not just a syntax improvement—they represent a shift toward more functional programming patterns in C#, while staying true to the language's object-oriented roots." }}
  />
);

export default { meta, Content } satisfies PostModule;
