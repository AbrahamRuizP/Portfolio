import Rotate from "./Rotate";
import { TitleTag } from "./TitleTag";
import { motion } from "framer-motion";

// About.tsx
const About = () => (
  <section className="py-5 bg-black bg-dots text-light">
    <div className="container">
      <TitleTag title="About Me" />
      <motion.p

        className="lead text-center"

        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Software developer with experience building web applications and data-driven systems using Java and modern web technologies.
        Strong analytical mindset with a focus on solving complex problems and delivering scalable, maintainable solutions.
      </motion.p>
      < Rotate />
    </div>
  </section>
);

export default About;