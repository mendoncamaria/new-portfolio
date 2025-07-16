import Image from 'next/image';
import ProjectList from '../assets/projectList.png';
import { commonStyles } from '@/app/tailwindStyles';

const Project = () => {
  return (
    <section id="projects" className={commonStyles.container}>

      <h1 className={commonStyles.sectionHeader}>PROJECTS</h1>

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
