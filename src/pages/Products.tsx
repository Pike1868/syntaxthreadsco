import { ProductsGrid, SectionTitle } from '@/components';

export default function Products() {
  return (
    <div className="align-element py-20">
      <SectionTitle text="Developer Warrior Collection" />
      <p className="mt-4 text-gray-600 leading-8 max-w-2xl mx-auto text-center">
        Premium apparel for developers who code with passion. Each design celebrates 
        the languages we love with minimalist style and comfortable fits.
      </p>
      <ProductsGrid />
    </div>
  );
}
