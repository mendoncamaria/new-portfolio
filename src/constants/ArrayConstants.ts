export const navigationLinks = [
  { id: 'home', label: 'INDEX' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'contact', label: 'CONTACT' },
];

export const aboutContent = [
  {
    title: 'The Developer Behind the Code',
    text: "Hi there! I'm Maria Mendonca, a passionate and dedicated Full Stack Developer with a drive for crafting impactful and user-centric web applications. My journey into the world of code began with a fascination for how technology can solve real-world problems and enhance everyday experiences.",
  },
  {
    title: 'Architecting Digital Solutions',
    text: 'I specialize in building robust and scalable solutions using modern technologies like Next.js, React, and Node.js, complemented by strong proficiency in databases and cloud platforms. I thrive on the challenge of transforming complex ideas into elegant, efficient, and maintainable code.',
  },
  {
    title: 'My Professional Sandbox',
    text: 'Currently working as a Cloud Engineer - Full Stack Developer at Niveus Solutions Pvt Ltd. I am involved in developing and maintaining cloud-based applications, ensuring seamless integration and optimal performance across various platforms. My role allows me to leverage my expertise in both front-end and back-end development, contributing to the creation of innovative solutions that meet the needs of our clients.',
  },
  {
    title: 'Beyond the Desk',
    text: 'Exercism volunteer mentor, where I help aspiring developers enhance their coding skills and navigate the challenges of learning programming languages. I find great joy in sharing knowledge and supporting others on their coding journeys.',
  },
  {
    title: 'My Core Values',
    text: 'Beyond the technical aspects, I am a firm believer in continuous learning, clean code practices, and collaborative teamwork. I love diving into new technologies and adapting to evolving project requirements, always aiming to deliver high-quality results that exceed expectations.',
  },
  {
    title: 'Adventures Outside the IDE',
    text: "When I'm not coding, you might find me exploring new hiking trails, experimenting with digital art, or diving into a good book. I'm always eager to connect and discuss new opportunities or exciting projects!",
  },
];

export const chartData = {
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
