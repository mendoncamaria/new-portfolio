// utils/tailwindStyles.ts

// Common button styles
export const buttonStyles = {
  base: "!font-bold !py-2 !px-4 !rounded-full !shadow-lg !transition-all !duration-300 !transform hover:!scale-105 !z-40",
  primary: "!bg-blue-600 hover:!bg-blue-700 !text-white", // !important for override
};

// Skills section specific styles
export const skillsStyles = {
  section: "w-full py-16 px-4 bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center min-h-screen relative overflow-hidden",
  heading: "text-5xl md:text-6xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-fade-in-down",
  mainCategoriesContainer: "flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl animate-fade-in",

  // Main Skill Circles
  mainCircleBase: "relative flex items-center justify-center w-80 h-80 sm:w-96 sm:h-96 rounded-full shadow-2xl p-4 cursor-pointer transition-all duration-500 transform hover:scale-105",
  mainCircleHard: "bg-gradient-to-br from-gray-700 to-gray-800 animate-scale-in",
  mainCircleSoft: "bg-gradient-to-br from-purple-700 to-indigo-800 animate-scale-in delay-200",
  mainCircleInnerPulseBlue: "absolute inset-0 rounded-full border-4 border-blue-500 opacity-30 animate-pulse",
  mainCircleInnerPulsePurple: "absolute inset-0 rounded-full border-4 border-purple-500 opacity-30 animate-pulse-slow",
  mainCircleTextCenter: "text-center",
  mainCircleTitleHard: "text-3xl font-bold mb-2 text-blue-300",
  mainCircleTitleSoft: "text-3xl font-bold mb-2 text-purple-300",
  mainCircleDescription: "text-sm text-gray-300",

  // Detailed Skill Circles (Sub-categories)
  detailedSkillsContainer: "flex flex-col items-center justify-center w-full max-w-6xl animate-fade-in",
  detailedSkillsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8", // Adjusted for hard skills grid
  detailedSoftSkillsGrid: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8", // Specific for soft skills grid

  detailedCircleBase: "flex flex-col items-center justify-center w-48 h-48 rounded-full shadow-lg text-center p-4 text-sm transition-transform transform hover:scale-105 duration-300",
  detailedCircleHard: "bg-gray-700 border border-blue-400",
  detailedCircleSoft: "bg-purple-700 border border-purple-400",

  detailedCircleTitleHard: "font-semibold text-blue-200 text-lg mb-2",
  detailedCircleTitleSoft: "font-semibold text-purple-200 text-lg mb-2",
  detailedSkillList: "text-xs text-gray-300 list-none p-0 m-0 space-y-1",
  detailedSkillDescription: "text-xs text-gray-300",
};
