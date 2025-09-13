import type { PostModule } from '@/blog/types';

export const meta = {
  title: 'Rust — Why Safety and Speed Found Common Ground',
  slug: 'rust-history-overview',
  date: new Date().toISOString(),
  excerpt: 'From a side project at Mozilla to a modern systems language with fearless concurrency and a friendly compiler.',
  tags: ['rust', 'history'],
  persona: 'Ferris Rustman' as const,
  cover: '/images/blog/covers/cover-history.svg',
  references: [
    {
      title: 'The Rust Programming Language (Book) — Introduction',
      url: 'https://doc.rust-lang.org/book/ch00-00-introduction.html',
      source: 'doc.rust-lang.org',
    },
    {
      title: 'Announcing Rust 1.0',
      url: 'https://blog.rust-lang.org/2015/05/15/Rust-1.0.html',
      source: 'blog.rust-lang.org',
    },
  ],
};

export const Content = () => (
  <div className="prose prose-neutral dark:prose-invert">
    <p>
      Rust started at Mozilla as a bold experiment: can we get C‑like performance without C‑like footguns? The
      answer arrived with a precise ownership model, a borrow checker that trades a bit of up‑front thinking for
      long‑term safety, and a compiler that acts like a teammate instead of a gatekeeper.
    </p>

    <h2>Origins and design bets</h2>
    <p>
      Early Rust explored garbage collection, then doubled down on affine types and explicit lifetimes. The core
      insight: make aliasing and mutation explicit and you can eliminate whole classes of bugs while keeping native
      speed. The community refined this into friendly ergonomics—pattern matching, helpful errors, and great tooling.
    </p>
    <pre><code>{`// Ownership in one minute
fn main() {
    let s = String::from("hello");
    takes_ownership(s); // moved here; s is no longer valid
    let x = 5;
    makes_copy(x);      // Copy types stay usable
}

fn takes_ownership(msg: String) { println!("{}", msg); }
fn makes_copy(n: i32) { println!("{}", n); }`}</code></pre>
    <p>
      That little move/copy difference is the foundation for fearless concurrency: the compiler proves who owns what
      so data races can’t sneak in.
    </p>

    <h2>From experiment to ecosystem</h2>
    <p>
      With Rust 1.0 in 2015, stability guarantees and Cargo (the package manager) set the stage for real projects.
      Today you’ll find Rust in CLIs, backend services, embedded code, and performance‑critical components across
      companies and OSS. The theme is consistent: predictable performance with fewer production surprises.
    </p>

    <h2>Where it shines</h2>
    <p>
      Systems code, performance‑sensitive services, and any place where correctness matters. Rust’s learning curve
      is a front‑loaded investment that pays back every time your code compiles and stays compiled.
    </p>
  </div>
);

export default { meta, Content } satisfies PostModule;
