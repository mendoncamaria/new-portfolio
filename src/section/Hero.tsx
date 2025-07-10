// HeroSection component - the first visible section on your homepage
const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center text-white p-4">
      {/* Background image or video placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-blue-900 opacity-90"></div>
      {/* You can replace the gradient with an image:
          <img src="/path/to/your/hero-bg.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
      */}

      <div className="relative z-10 p-8 bg-black bg-opacity-40 rounded-lg shadow-xl max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
          Hi, I&apos;m <span className="text-blue-300">Maria Mendonca</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-up delay-200">
          A passionate Web Developer | Mentor | Creator
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 animate-fade-in-up delay-400">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
