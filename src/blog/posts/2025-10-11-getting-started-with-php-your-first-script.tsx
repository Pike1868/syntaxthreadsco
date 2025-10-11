import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "Getting Started with PHP: Your First Script",
  "slug": "2025-10-11-getting-started-with-php-your-first-script",
  "date": "2025-10-11T12:08:32.057Z",
  "excerpt": "Ready to write your first PHP script? Let's build on what we learned about PHP's evolution and dive into the practical basics - from setting up a simple script to understanding how variables work.",
  "tags": [
    "php",
    "beginners",
    "web-development",
    "tutorial",
    "foundations"
  ],
  "persona": "Hypertext Harry",
  "cover": "/images/blog/covers/cover-php.svg",
  "references": [
    {
      "title": "PHP Manual: Variables",
      "url": "https://www.php.net/manual/en/language.variables.basics.php",
      "source": "PHP.net Official Documentation"
    },
    {
      "title": "PHP Manual: Types",
      "url": "https://www.php.net/manual/en/language.types.php",
      "source": "PHP.net Official Documentation"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "<p>In our last exploration of PHP's journey, we saw how it grew from a simple tool to a web powerhouse. Today, we're rolling up our sleeves and writing our first actual PHP code. No more history lessons - it's time to make something happen!</p>\n\n<h2>Setting Up Your First Script</h2>\n\n<p>The beauty of PHP is how it seamlessly blends with HTML. You don't need to build some complex application structure - you can start with a single file. Create a new file called `hello.php` and open it in your favorite text editor. The first thing you'll need is the PHP opening tag:</p>\n\n<pre><code>&lt;?php\n// Your first PHP script!\n$message = \"Hello, fellow developer\";\necho $message;\n?&gt;</code></pre>\n\n<p>Let's break down what's happening here:</p>\n<ul>\n<li>The `&lt;?php` tag tells the server \"Hey, PHP code coming up!\"</li>\n<li>We're creating a variable called `$message` (notice the $ - it's required for all variables in PHP)</li>\n<li>The `echo` statement outputs our message</li>\n</ul>\n\n<h2>Understanding Variables and Strings</h2>\n\n<p>Variables in PHP are like containers that hold your data. They always start with a $ symbol - it's PHP's way of saying \"this is a variable, not just some random text.\" Think of it as putting a label on a box so you know what's inside.</p>\n\n<p>When we write `$message = \"Hello, fellow developer\";`, we're:</p>\n<ul>\n<li>Creating a new variable container ($message)</li>\n<li>Using the = operator to put something in it</li>\n<li>Storing a string (text wrapped in quotes) inside</li>\n</ul>\n\n<p>Strings can use either single quotes ('like this') or double quotes (\"like this\"). There's a subtle but important difference: double quotes let PHP process special characters and variables inside the string, while single quotes take everything literally.</p>\n\n<h2>Making It Interactive</h2>\n\n<p>Now that we understand the basics, let's make our script a bit more dynamic. PHP really shines when it comes to working with variables and combining them in useful ways:</p>\n\n<p>You could expand the previous example to include:</p>\n<ul>\n<li>Different types of variables (numbers, strings)</li>\n<li>Combining variables with text (concatenation)</li>\n<li>Using variables inside strings (interpolation)</li>\n</ul>\n\n<p>The key thing to remember is that PHP is forgiving for beginners but powerful enough for complex applications. Start simple, experiment freely, and build on these foundations step by step.</p>\n\n<p>In our next lesson, we'll explore how to make decisions in your code with if statements and work with user input. For now, practice creating variables, outputting them in different ways, and getting comfortable with the basic syntax we've covered.</p>" }}
  />
);

export default { meta, Content } satisfies PostModule;
