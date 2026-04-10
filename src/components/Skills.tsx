// Skills.tsx
import { skills } from '../data/skills';
import { TitleTag } from './TitleTag';
import { SkillCard } from './SkillCard';

const Skills = () => (
  <section className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <TitleTag title='Skills' />

      <div className="row justify-content-center">
        {skills.map((s) => {

          return (
            <SkillCard
              category={s.category}
              items={s.items}
            />
          );
          
        })}
      </div>

    </div>
  </section>
);

export default Skills;