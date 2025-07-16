import { commonStyles } from '@/app/tailwindStyles';
import SunburstChart from '@/components/SunburstChart';
import { chartData } from '@/constants/ArrayConstants';

const Skill = () => {
  return (
    <section id="skills" className={commonStyles.container}>
      <h1 className={commonStyles.sectionHeader} style={{paddingBottom: '0.5rem'}}>MY SKILLS</h1>
      <SunburstChart data={chartData} />
    </section>
  );
};

export default Skill;
