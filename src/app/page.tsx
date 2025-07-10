import Footer from '@/components/Footer';

import About from '@/section/About';
import Contact from '@/section/Contact';
import HeroSection from '@/section/Hero';
import Project from '@/section/Projects';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeroSection />
      <About />
      <Project />
      <Contact />

      <Footer />
    </main>
  );
}
