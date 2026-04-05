// Projects.tsx
import { projects } from '../data/projects';
import { skillIcons } from '../data/icons';

const Projects = () => (
  <section id="projects" className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <h2 className="fw-bold mb-4 text-center">Projects</h2>
        {projects.map((p) => (
          <div key={p.title} className="row g-4 py-4 align-items-start project-row">
            
            {/* Left Column */} 
            <div className="col-md-4 fw-bold fs-5">
                {p.title}
            </div>

            {/* Right Column */}
            <div className='col-md-8 d-flex flex-column gap-3'>
              <div className="mb-2">
                {p.description}
              </div>
              <div className='d-flex flex-wrap gap-2 justify-content-center'>
                {p.tech.map((tech) => (
                  <span
                  key={tech}
                  className="badge rounded-pill bg-dark px-3 py-2 d-flex align-items-center gap-2"
                  style={{ fontSize: '0.7rem' }}
                >
                  {skillIcons[tech] && skillIcons[tech]}
                  {tech}
                </span>
                ))}
              </div>
              <div className="mt-2">
                <a href={p.link} className='text-decoration-none d-inline-flex align-items-center gap-1 project-link text-light'>
                  View Project
                  <span className='arrow'>→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  </section>
);

export default Projects;