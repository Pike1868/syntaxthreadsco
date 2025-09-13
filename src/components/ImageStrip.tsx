type StripImage = { src: string; alt: string };

const defaultImages: StripImage[] = [
  { src: '/images/products/warrior-series/premium/generic/gallery/front-person-black.webp', alt: 'Premium tee on model' },
  { src: '/images/products/warrior-series/premium/generic/gallery/front-generic-black.webp', alt: 'Premium tee flat lay' },
  { src: '/images/products/warrior-series/premium/generic/gallery/front-person-generic-closeup-black.webp', alt: 'Close-up fabric and print' },
  { src: '/images/hero-carousel/rust-back-black.webp', alt: 'Back print detail' },
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

