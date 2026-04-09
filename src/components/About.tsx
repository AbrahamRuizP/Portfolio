import Rotate from "./Rotate";
import { TitleTag } from "./TitleTag";

// About.tsx
const About = () => (
  <section className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <TitleTag title="About Me" />
      <p className="lead text-center">
        Software developer with experience building web applications and data-driven systems using Java and modern web technologies.
        Strong analytical mindset with a focus on solving complex problems and delivering scalable, maintainable solutions.
      </p>
      < Rotate />
    </div>
  </section>
);

export default About;