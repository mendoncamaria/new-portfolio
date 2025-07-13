import { useState } from 'react';

const Skill = () => {
  // State to manage which category is selected: 'hardSkills', 'softSkills', or null (none)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Function to reset the view to show both main circles
  const handleBackClick = () => {
    setSelectedCategory(null);
  };
  return (
    <section
      id="skills"
      className="relative w-full h-screen flex items-center justify-center text-center p-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 opacity-90 p-10">
        <h1 className="text-center text-blue-600 animate-fade-in-down section-header">
          MY SKILLS
        </h1>

        {/* Back Button - Conditionally rendered */}
        {selectedCategory && (
          <button
          style={{paddingTop: '250px'}}
            onClick={handleBackClick}
            className="absolute top-8 left-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 z-40"
          >
            &larr; Back
          </button>
        )}

        {/* Main Categories View */}
        {!selectedCategory && (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl animate-fade-in">
            {/* Hard Skills Main Circle */}
            <div
              onClick={() => setSelectedCategory('hardSkills')}
              className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl p-4 cursor-pointer transition-all duration-500 transform hover:scale-105 animate-scale-in"
            >
              <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-30 animate-pulse"></div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2 text-blue-300">
                  Hard Skills
                </h3>
                <p className="text-sm text-gray-300">Technical proficiency</p>
              </div>
            </div>

            {/* Soft Skills Main Circle */}
            <div
              onClick={() => setSelectedCategory('softSkills')}
              className="relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 shadow-2xl p-4 cursor-pointer transition-all duration-500 transform hover:scale-105 animate-scale-in delay-200"
            >
              <div className="absolute inset-0 rounded-full border-4 border-purple-500 opacity-30 animate-pulse-slow"></div>
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2 text-purple-300">
                  Soft Skills
                </h3>
                <p className="text-sm text-gray-300">Interpersonal strengths</p>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Hard Skills View */}
        {selectedCategory === 'hardSkills' && (
          <div className="flex flex-col items-center justify-center w-full max-w-6xl animate-fade-in">
            <h3 className="text-4xl font-bold mb-8 text-blue-300">
              Hard Skills Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Programming Languages */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gray-700 border border-blue-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-blue-200 text-lg mb-2">
                  Languages
                </span>
                <ul className="text-xs text-gray-300 list-none p-0 m-0 space-y-1">
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Go</li>
                  <li>JavaScript</li>
                </ul>
              </div>

              {/* Frontend */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gray-700 border border-blue-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-blue-200 text-lg mb-2">
                  Frontend
                </span>
                <ul className="text-xs text-gray-300 list-none p-0 m-0 space-y-1">
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>

              {/* Backend */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gray-700 border border-blue-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-blue-200 text-lg mb-2">
                  Backend
                </span>
                <ul className="text-xs text-gray-300 list-none p-0 m-0 space-y-1">
                  <li>Node.js / Express</li>
                  <li>RESTful APIs</li>
                  <li>GraphQL</li>
                  <li>WebSockets</li>
                </ul>
              </div>

              {/* Databases */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gray-700 border border-blue-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-blue-200 text-lg mb-2">
                  Databases
                </span>
                <ul className="text-xs text-gray-300 list-none p-0 m-0 space-y-1">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Firebase Firestore</li>
                </ul>
              </div>

              {/* Cloud & DevOps */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gray-700 border border-blue-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-blue-200 text-lg mb-2">
                  Cloud & DevOps
                </span>
                <ul className="text-xs text-gray-300 list-none p-0 m-0 space-y-1">
                  <li>AWS (S3, EC2)</li>
                  <li>Vercel / Netlify</li>
                  <li>Docker</li>
                  <li>Git / GitHub</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Detailed Soft Skills View */}
        {selectedCategory === 'softSkills' && (
          <div className="flex flex-col items-center justify-center w-full max-w-6xl animate-fade-in">
            <h3 className="text-4xl font-bold mb-8 text-purple-300">
              Soft Skills Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Communication */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-purple-700 border border-purple-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-purple-200 text-lg mb-2">
                  Communication
                </span>
                <p className="text-xs text-gray-300">
                  Clear, concise, and effective verbal & written communication.
                </p>
              </div>

              {/* Problem-Solving */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-purple-700 border border-purple-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-purple-200 text-lg mb-2">
                  Problem-Solving
                </span>
                <p className="text-xs text-gray-300">
                  Analytical and creative approach to complex challenges.
                </p>
              </div>

              {/* Teamwork & Collaboration */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-purple-700 border border-purple-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-purple-200 text-lg mb-2">
                  Teamwork
                </span>
                <p className="text-xs text-gray-300">
                  Collaborative and supportive team player.
                </p>
              </div>

              {/* Adaptability */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-purple-700 border border-purple-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-purple-200 text-lg mb-2">
                  Adaptability
                </span>
                <p className="text-xs text-gray-300">
                  Quick to learn new technologies and adjust to changing
                  environments.
                </p>
              </div>

              {/* Project Management (Optional) */}
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-purple-700 border border-purple-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300">
                <span className="font-semibold text-purple-200 text-lg mb-2">
                  Project Management
                </span>
                <p className="text-xs text-gray-300">
                  Organized and efficient in managing tasks and timelines.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skill;
