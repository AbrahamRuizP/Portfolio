// Projects.tsx
import { projects } from '../data/projects';
import { TitleTag } from './TitleTag';
import { ProjectItem } from './ProjectItem';

const Projects = () => (
  <section id="projects" className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <TitleTag title="Projects" />

      {projects.map((p) => (

        <ProjectItem
          title={p.title}
          description={p.description}
          link={p.link}
          techs={p.tech}
        />

      ))}
    </div>
  </section>
);

export default Projects;