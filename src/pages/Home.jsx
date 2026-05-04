import Hero from '../components/Hero';
import ProductMarquee from '../components/ProductMarquee';
import HeroIntro from '../components/HeroIntro';
import Features from '../components/Features';
import CategoryShowcase from '../components/CategoryShowcase';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductMarquee />
      <HeroIntro />
      <Features />
      <CategoryShowcase />
      <Testimonial />
    </>
  );
}
