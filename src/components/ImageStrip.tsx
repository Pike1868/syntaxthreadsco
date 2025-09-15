type StripImage = { src: string; alt: string };

const defaultImages: StripImage[] = [
  { src: '/images/hero-carousel/java-back-black.webp', alt: 'Java Warrior back design' },
  { src: '/images/products/hexcode-series/python/gallery/back-black.webp', alt: 'Python Hexcode back design' },
  { src: '/images/hero-carousel/rust-back-black.webp', alt: 'Rust Warrior back design' },
  { src: '/images/products/hexcode-series/typescript/gallery/back-black.webp', alt: 'TypeScript Hexcode back design' },
];

export default function ImageStrip({ images = defaultImages }: { images?: StripImage[] }) {
  return (
    <section aria-label="Product visuals" className="">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {images.map((img) => (
          <div key={img.src} className="rounded-xl overflow-hidden border border-border bg-muted/40">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-48 sm:h-56 md:h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

