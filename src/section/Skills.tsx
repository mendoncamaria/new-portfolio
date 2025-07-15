import SunburstChart from '@/components/SunburstChart';

const Skill = () => {
  const chartData = {
    name: 'MY SKILLS',
    color: '#f0f0f0',
    children: [
      {
        name: 'Technical Skills',
        color: '#4a90e2',
        children: [
          {
            name: 'Frontend',
            color: '#f39c12',
            children: [
              { name: 'React.js', size: 8, color: '#61dafb' },
              { name: 'Next.js', size: 7, color: '#000000' },
              { name: 'TypeScript', size: 6, color: '#007acc' },
              { name: 'Tailwind CSS', size: 5, color: '#06b6d4' },
              { name: 'HTML/CSS', size: 7, color: '#e44d26' },
            ],
          },
          {
            name: 'Backend',
            color: '#e67e22',
            children: [
              { name: 'Node.js', size: 7, color: '#8cc84b' },
              { name: 'Express.js', size: 6, color: '#f1c40f' },
              { name: 'RESTful APIs', size: 5, color: '#f39c12' },
              { name: 'Python', size: 4, color: '#3498db' },
            ],
          },
          {
            name: 'Databases',
            color: '#2ecc71',
            children: [
              { name: 'MongoDB', size: 6, color: '#4db6ac' },
              { name: 'PostgreSQL', size: 5, color: '#336791' },
              { name: 'Firebase', size: 4, color: '#ffca28' },
            ],
          },
          {
            name: 'Cloud & DevOps',
            color: '#9b59b6',
            children: [
              { name: 'AWS', size: 5, color: '#ff9900' },
              { name: 'Docker', size: 4, color: '#2496ed' },
              { name: 'Git', size: 6, color: '#f1502f' },
            ],
          },
        ],
      },
      {
        name: 'Soft Skills',
        color: '#8e44ad',
        children: [
          { name: 'Communication', size: 4, color: '#6a5acd' },
          { name: 'Adaptability', size: 4, color: '#6a5acd' },
          { name: 'Problem Solving', size: 4, color: '#6a5acd' },
          { name: 'Team Work', size: 4, color: '#6a5acd' },
          { name: 'Project Management', size: 4, color: '#6a5acd' },
        ],
      },
    ],
  };

  return (
    <section
      id="skills"
      className="min-w-full py-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 text-gray-800 flex flex-col items-center min-h-screen relative overflow-hidden"
    >
      {/* <div className="container mx-auto max-w-6xl"> */}
      <h1 className="self-center text-center text-gray-600 animate-fade-in-down section-header">
        MY SKILLS
      </h1>
      <SunburstChart data={chartData} />
    </section>
  );
};

export default Skill;
