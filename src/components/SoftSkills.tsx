// SoftSkills.tsx
import { FaBrain, FaComments, FaSearch, FaChess } from "react-icons/fa";

const softSkills = [
  { text: "Analytical thinking and problem-solving", icon: <FaBrain /> },
  { text: "Clear and structured communication", icon: <FaComments /> },
  { text: "Attention to detail", icon: <FaSearch /> },
  { text: "Strategic thinking", icon: <FaChess /> },
];

const SoftSkills = () => (
  <section className="py-5 bg-white">
    <div className="container">
      <h2 className="fw-bold mb-5 text-center">Soft Skills</h2>

      <div className="row justify-content-center">
        {softSkills.map((skill) => (
          <div key={skill.text} className="col-md-6 col-lg-3 mb-4">
            <div className="p-4 border rounded text-center h-100 soft-card">
              
              <div className="mb-3 fs-3 text-secondary">
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