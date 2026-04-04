// SoftSkills.tsx
import { softSkills } from "../data/softSkills";

const SoftSkills = () => (
  <section className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <h2 className="fw-bold mb-5 text-center">Soft Skills</h2>

      <div className="row justify-content-center">
        {softSkills.map((skill) => (
          <div key={skill.text} className="col-md-6 col-lg-3 mb-4">
            <div className="p-4 rounded text-center h-100 soft-card bg-black" style={{border: "1px solid rgba(255, 255, 255, 0.3)"}}>
              
              <div className="mb-3 fs-3 text-light">
                {skill.icon}
              </div>

              <p className="mb-0 fw-medium fs-5">
                {skill.text}
              </p>

            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SoftSkills;