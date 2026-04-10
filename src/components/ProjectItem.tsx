// ProjectItem.tsx
import { skillIcons } from '../data/icons';
import { motion } from 'framer-motion';

type Props = {
  title: string,
  description: string,
  techs: string[],
  link: string
}

export const ProjectItem = ({ title, description, techs, link }: Props) => {
  const reveal = {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: "easeOut" as const },
    viewport: { once: true }
  };

  return (
    <div key={title} className="row g-4 align-items-start project-row py-3">

          {/* Left Column */}
          <motion.div className="col-md-4 fw-bold fs-5" {...reveal}>
            {title}
          </motion.div>

          {/* Right Column */}
          <div className='col-md-8 d-flex flex-column gap-3'>

            <motion.div className="mb-2" {...reveal}>
              {description}
            </motion.div>

            <div className='d-flex flex-wrap gap-2 justify-content-center'>
              {techs.map((tech) => (
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
            <motion.div className="mt-2" {...reveal}>
              <a
                href={link}
                target="_blank"
                rel='noopener noreferrer'
                className='text-decoration-none d-inline-flex align-items-center gap-1 project-link text-light'
              >
                View Project
                <span className='arrow'>→</span>
              </a>
            </motion.div>
          </div>
        </div>
  );
};