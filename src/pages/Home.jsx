import Hero from '../components/Hero';
import HeroIntro from '../components/HeroIntro';
import Features from '../components/Features';
import CategoryShowcase from '../components/CategoryShowcase';
import Testimonial from '../components/Testimonial';

export default function Home() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <Features />
      <CategoryShowcase />
      <Testimonial />
    </>
  );
}
