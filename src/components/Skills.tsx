// Skills.tsx
import { skills } from '../data/skills';
import { skillIcons } from '../data/icons';
import { TitleTag } from './TitleTag';

const Skills = () => (
  <section className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <TitleTag title='Skills' />

      <div className="row justify-content-center">
        {skills.map((s) => {
          const color = "dark";

          return (
            <div key={s.category} className="col-md-6 col-lg-4 mb-4">
              <div className="p-4 bg-black rounded shadow-sm h-100 text-center skill-card" style={{border: "1px solid rgba(255, 255, 255, 0.3"}}>

                {/* Title */}
                <h5 className={`fw-semibold mb-3`}>
                  {s.category}
                </h5>

                {/* Items by Title */}
                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className={`badge rounded-pill bg-${color} px-3 py-2 d-flex align-items-center gap-2`}
                      style={{ fontSize: '1rem' }}
                    >
                      {skillIcons[item] && <span>{skillIcons[item]}</span>}
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;