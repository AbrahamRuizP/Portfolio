// Projects.tsx
import { projects } from '../data/projects';
import { skillIcons } from '../data/icons';
import { motion } from 'framer-motion';
import { TitleTag } from './TitleTag';

const Projects = () => (
  <section id="projects" className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <TitleTag title="Projects" />
      
      {projects.map((p, index) => (

        <motion.div
          key={p.title}
          className="row g-4 align-items-start project-row"

          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}

          viewport={{ once: true }}
        >

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
              <a
                href={p.link}
                target="_blank"
                rel='noopener noreferrer'
                className='text-decoration-none d-inline-flex align-items-center gap-1 project-link text-light'
              >
                View Project
                <span className='arrow'>→</span>
              </a>
            </div>
          </div>
        </motion.div>

      ))}
    </div>
  </section>
);

export default Projects;