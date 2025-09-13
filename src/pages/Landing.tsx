import {Hero, FeaturedProducts, BenefitsStrip} from "@/components"
import ImageStrip from '@/components/ImageStrip';

export default function Landing() {
  return (
    <div className="align-element py-24 space-y-16">
      <Hero/>
      <BenefitsStrip/>
      <ImageStrip/>
      <FeaturedProducts/>
    </div>
  )
}
