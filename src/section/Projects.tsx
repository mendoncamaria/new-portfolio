import Image from 'next/image';
import ProjectList from '../assets/projectList.png';

const Project = () => {
  return (
    <section
      id="projects"
      className="relative w-full h-screen flex text-center p-4"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 opacity-90"></div>

      <h1 className="text-center text-blue-600 animate-fade-in-down section-header">
          PROJECTS
        </h1>

      <div className="">
        <Image
          src={ProjectList}
          alt="Hero Background"
          className="absolute top-3/12 left-1/6 inset-0 w-4/6 h-4/6 object-cover"
        />
      </div>
    </section>
  );
};

export default Project;
