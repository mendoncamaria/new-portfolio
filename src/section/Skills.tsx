import { hardSkillsData, softSkillsData } from '@/constants/ArrayConstants';
import { useState } from 'react';
// import { buttonStyles, skillsStyles } from '../app/tailwindStyles'; 

const Skill = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleBackClick = () => {
    setSelectedCategory(null);
  };
  return (
    <section
      id="skills"
className="min-w-full py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 text-gray-800 flex flex-col items-center min-h-screen relative overflow-hidden"    >
      {/* <div className="container mx-auto max-w-6xl"> */}
        <h1 className="self-center text-center text-gray-600 animate-fade-in-down section-header">
          MY SKILLS
        </h1>

        {selectedCategory && (
          <button
            onClick={handleBackClick}
            className="!bg-blue-600 hover:!bg-blue-700 !text-white !font-bold !py-2 !px-4 !rounded-full !shadow-lg !transition-all !duration-300 !transform hover:!scale-105 !z-40"
          >
            Back
          </button>
        )}

        {!selectedCategory && (
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl animate-fade-in">
            <div
              onClick={() => setSelectedCategory('hardSkills')}
              className="flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 shadow-2xl p-4 cursor-pointer transition-all duration-500 transform hover:scale-105 animate-scale-in"
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
              className="flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-purple-700 to-indigo-800 shadow-2xl p-4 cursor-pointer transition-all duration-500 transform hover:scale-105 animate-scale-in delay-200"
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

        {selectedCategory === 'hardSkills' && (
          <div className="flex flex-col items-center justify-center w-full max-w-6xl animate-fade-in">
            <h3 className="text-4xl font-bold mb-8 text-blue-300">
              Hard Skills Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {hardSkillsData.map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-gray-700 border border-blue-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300"
                >
                  <span className="font-semibold text-blue-200 text-lg mb-2">
                    {category.name}
                  </span>
                  <ul className="text-xs text-gray-300 list-none p-0 m-0 space-y-1">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedCategory === 'softSkills' && (
          <div className="flex flex-col items-center justify-center w-full max-w-6xl animate-fade-in">
            <h3 className="text-4xl font-bold mb-8 text-purple-300">
              Soft Skills Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {softSkillsData.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-48 h-48 rounded-full bg-purple-700 border border-purple-400 shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300"
                >
                  <span className="font-semibold text-purple-200 text-lg mb-2">
                    {skill.name}
                  </span>
                  <p className="text-xs text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      {/* </div> */}
    </section>
  );
};

export default Skill;
