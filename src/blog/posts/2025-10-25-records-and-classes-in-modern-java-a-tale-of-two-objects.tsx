import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "Records and Classes in Modern Java: A Tale of Two Objects",
  "slug": "2025-10-25-records-and-classes-in-modern-java-a-tale-of-two-objects",
  "date": "2025-10-25T12:08:41.947Z",
  "excerpt": "Let's explore how modern Java handles data representation through traditional classes and the newer record type - and why immutability might be your new best friend.",
  "tags": [
    "java",
    "oop",
    "records",
    "immutability",
    "classes",
    "foundations"
  ],
  "persona": "Java the Hut",
  "cover": "/images/blog/covers/cover-java.svg",
  "references": [
    {
      "title": "Records in Java",
      "url": "https://docs.oracle.com/en/java/javase/16/language/records.html",
      "source": "Oracle Java Documentation"
    },
    {
      "title": "State of the Java Language - 2023",
      "url": "https://www.jrebel.com/blog/java-tools-report-2023",
      "source": "JRebel Blog"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "<p>In our last journey through Java's history, we traced its evolution from Oak to the platform we know today. Now let's look at how Java's approach to representing data has evolved alongside it - from traditional classes to modern records.</p>\n\n<h2>The Class Classic: A Time-Tested Recipe</h2>\n\n<p>If Java were a restaurant, classes would be our tried-and-true house special. They're flexible, familiar, and can be prepared exactly how you like them. Let's start with a traditional class representing a coffee order (because some traditions are worth keeping):</p>\n\n<pre><code>public class CoffeeOrder {\n    private final String type;\n    private final int shots;\n    private final boolean iced;\n\n    public CoffeeOrder(String type, int shots, boolean iced) {\n        this.type = type;\n        this.shots = shots;\n        this.iced = iced;\n    }\n\n    // Getters\n    public String getType() { return type; }\n    public int getShots() { return shots; }\n    public boolean isIced() { return iced; }\n\n    // equals, hashCode, and toString\n    // ... (about 20-30 more lines of code)\n}</code></pre>\n\n<p>Notice how we made our fields final? That's our first step toward immutability - ensuring our coffee order won't mysteriously change from a latte to an espresso mid-service. But wow, that's a lot of boilerplate code just to represent some data!</p>\n\n<h2>Enter Records: The Modern Special</h2>\n\n<p>In Java 16, records arrived as a permanent feature, bringing with them a breath of fresh air. They're like our traditional class recipe, but with most of the prep work already done. Here's that same coffee order as a record:</p>\n\n<p><code>public record CoffeeOrder(String type, int shots, boolean iced) { }</code></p>\n\n<p>That's it. Really! One line gives us everything we had in our class version - constructor, getters, equals(), hashCode(), toString() - all generated automatically. Records are immutable by default, which means once you create your coffee order, it stays exactly as ordered. No more worrying about someone changing your double-shot espresso into a decaf behind your back.</p>\n\n<h2>When to Use What</h2>\n\n<p>Like choosing between a pour-over and an espresso machine, picking between classes and records depends on your needs:</p>\n\n<ul>\n    <li><strong>Use Records when:</strong> Your data is immutable, represents a simple group of values, and doesn't need custom behavior beyond basic data access.</li>\n    <li><strong>Stick with Classes when:</strong> You need mutable state, inheritance, or complex behavior beyond simple data representation.</li>\n</ul>\n\n<p>Records aren't replacing classes any more than espresso machines replaced pour-over coffee - they're different tools for different jobs. Records excel at being transparent carriers of immutable data, while classes continue to shine in scenarios requiring more complex object-oriented designs.</p>\n\n<p>Remember how we talked about Java's evolution in our last post? Records are a perfect example of how Java continues to adapt - maintaining its object-oriented foundations while embracing modern programming patterns. They're part of Java's ongoing effort to reduce boilerplate code while promoting immutability and clear design.</p>\n\n<p>And speaking of immutability - it's not just a fancy word to throw around at code reviews. In our increasingly concurrent world, immutable objects are like sealed coffee beans: their contents stay fresh and unchangeable, making them naturally thread-safe and easier to reason about.</p>\n\n<p>Whether you choose classes or records, remember: good data representation is like a well-crafted coffee blend - it should be clear, purposeful, and suited to its intended use. Next time, we'll explore how these concepts play into Java's collection framework, where both mutability and immutability have their place at the table.</p>" }}
  />
);

export default { meta, Content } satisfies PostModule;
