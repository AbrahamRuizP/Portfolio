// Skills.tsx
import { skills } from '../data/skills';
import { skillIcons } from '../data/icons';
import { categoryColors } from '../data/categoryColors';

const Skills = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <h2 className="fw-bold mb-5 text-center">Skills</h2>

      <div className="row justify-content-center">
        {skills.map((s) => {
          const color = "secondary";

          return (
            <div key={s.category} className="col-md-6 col-lg-4 mb-4">
              <div className="p-4 bg-white rounded shadow-sm h-100 text-center skill-card">

                {/* Título con color */}
                <h5 className={`fw-semibold mb-3`}>
                  {s.category}
                </h5>

                <div className="d-flex flex-wrap justify-content-center gap-2">
                  {s.items.map((item) => (
                    <span
                      key={item}
                      className={`badge rounded-pill bg-${color} px-3 py-2 d-flex align-items-center gap-2`}
                      style={{ fontSize: '0.85rem' }}
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