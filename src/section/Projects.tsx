const Project = () => {
  return (
    <section id="projects" className="relative w-full h-screen flex items-center justify-center text-center p-4">
      {/* Background image or video placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 opacity-90"></div>
      {/* You can replace the gradient with an image:
          <img src="/path/to/your/hero-bg.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover" />
      */}

      <div className="relative z-10 p-8 bg-opacity-40 rounded-lg shadow-xl max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-up">
          These are my projects
        </h1>
       
      </div>
    </section>
  );
};

export default Project;
