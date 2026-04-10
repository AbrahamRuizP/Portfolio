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
            <div key={s.category} className="col-md-6 col-lg-4 mb-4">

              <SkillCard
                category={s.category}
                items={s.items}
              />
              
            </div>

          );

        })}
      </div>

    </div>
  </section>
);

export default Skills;