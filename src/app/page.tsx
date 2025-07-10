import HeroSection from '@/section/Hero'; // Import your Hero section
// You will add more section imports here as you create them:
// import AboutSection from '@/components/AboutSection';
// import ProjectsSection from '@/components/ProjectsSection';
// import ContactSection from '@/components/ContactSection';

// The main Home Page component
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Each section will occupy its own vertical space */}
      <HeroSection />
      {/* Placeholder for other sections */}
      {/* <AboutSection /> */}
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}

      {/* Example of a simple footer */}
      <footer className="w-full bg-gray-800 text-white text-center p-4">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </main>
  );
}
