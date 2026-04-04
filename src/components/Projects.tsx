// Projects.tsx
import { projects } from '../data/projects';

const Projects = () => (
  <section id="projects" className="py-5 bg-light">
    <div className="container">
      <h2 className="fw-bold mb-4 text-center">Projects</h2>
      <div className="row g-4">
        {projects.map((p) => (
          <div key={p.title} className="col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{p.title}</h5>
                <p className="card-text mt-2">{p.description}</p>
                <p className="text-muted small">{p.tech.join(', ')}</p>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;