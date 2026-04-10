// About.tsx
import Rotate from "./Rotate";
import { TitleTag } from "./TitleTag";
import { motion } from "framer-motion";

const About = () => {
  const reveal = {
    initial: { opacity: 0, y: 30, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.9, ease: "easeOut" as const },
    viewport: { once: true }
  };

  return (
    <section className="py-5 bg-black bg-dots text-light">
      <div className="container">
        <TitleTag title="About Me" />

        <motion.p className="lead text-center" {...reveal}>
          Software developer with experience building web applications and data-driven systems using Java and modern web technologies.
          Strong analytical mindset with a focus on solving complex problems and delivering scalable, maintainable solutions.
        </motion.p>
        
        < Rotate />
      </div>
    </section>
  );
};

export default About;