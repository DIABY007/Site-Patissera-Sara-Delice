import { Navbar } from '@/components/sections/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
}
