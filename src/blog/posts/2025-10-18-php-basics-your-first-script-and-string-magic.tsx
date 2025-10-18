import type { PostModule, PostMeta } from '@/blog/types';

export const meta = {
  "title": "PHP Basics: Your First Script and String Magic",
  "slug": "2025-10-18-php-basics-your-first-script-and-string-magic",
  "date": "2025-10-18T12:08:50.301Z",
  "excerpt": "Ready to write your first PHP script? Let's explore the fundamentals of variables, strings, and output - the building blocks that power millions of web pages.",
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
      "title": "PHP Manual: Types - String",
      "url": "https://www.php.net/manual/en/language.types.string.php",
      "source": "PHP.net Documentation"
    },
    {
      "title": "PHP Manual: Variables",
      "url": "https://www.php.net/manual/en/language.variables.basics.php",
      "source": "PHP.net Documentation"
    }
  ]
} satisfies PostMeta;

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert"
    dangerouslySetInnerHTML={{ __html: "Last time, we traced PHP's evolution from a simple templating tool to the powerhouse it is today. Now it's time to roll up our sleeves and write some actual code. Don't worry if you're new to programming - we'll start with the absolute basics.\n\n<p>The beauty of PHP is that you can start small. Really small. In fact, you can create a working web page with just a few lines of code. Let's dive in!</p>\n\n<h2>Your First PHP Script: Hello, Variables!</h2>\n\n<p>Remember how PHP started as a way to make HTML pages dynamic? That's still its superpower. Here's a simple script that shows how variables and strings work together:</p>\n\n<pre><code><?php\n$greeting = \"Hello, developer!\";  // Store a message in a variable\n$time = \"morning\";               // Store another string\n\necho \"$greeting It's a beautiful $time.\";  // Output both variables\n?></code></pre>\n\n<p>Let's break this down:</p>\n<ul>\n<li>Variables in PHP always start with a $ symbol (think of it as your variable's name tag)</li>\n<li>We can store text (strings) in variables using quotes</li>\n<li>The echo command displays text and variables in your browser</li>\n</ul>\n\n<p>Pro tip: Notice how we put the variables directly inside the quoted string? That's called string interpolation, and it's one of PHP's handy features that makes our code more readable.</p>\n\n<h2>Strings: More Than Just Text</h2>\n\n<p>In our journey from PHP's history to practical coding, one thing becomes clear: working with text is a huge part of web development. Strings in PHP are flexible and forgiving - you can use either single quotes ('') or double quotes (\"\"), though they behave slightly differently.</p>\n\n<p>Here's what makes double quotes special: they process variables and special characters (like \\n for new lines). Single quotes are literal - what you see is exactly what you get. Choose based on your needs:</p>\n\n<ul>\n<li>Use double quotes when you need variable interpolation</li>\n<li>Use single quotes for simple strings (they're slightly faster)</li>\n<li>When in doubt, readability trumps minor performance gains</li>\n</ul>\n\n<p>Think of single quotes as a plain text message, while double quotes are more like a template where you can plug things in. Both have their place in your coding toolkit.</p>\n\n<h2>Making It Work: The Development Loop</h2>\n\n<p>Here's a practical workflow that I use daily:</p>\n\n<ol>\n<li>Save your code in a .php file (like first-script.php)</li>\n<li>Run it through a local PHP server (php -S localhost:8000)</li>\n<li>View it in your browser at http://localhost:8000/first-script.php</li>\n<li>Make changes, save, refresh - that's the development loop!</li>\n</ol>\n\n<p>The immediate feedback you get from this cycle is invaluable. It's how we all learned - by trying things out, breaking them, and fixing them. Don't worry about perfection; focus on making things work first.</p>\n\n<p>Remember: Every complex PHP application you've ever used started with basic building blocks like variables and echo statements. Master these fundamentals, and you'll have a solid foundation for everything that follows.</p>" }}
  />
);

export default { meta, Content } satisfies PostModule;
