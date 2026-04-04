// icons.ts
import { FaReact, FaJava, FaDocker, FaGitAlt, FaDatabase, FaLayerGroup } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiPostgresql, SiHtml5, SiCss } from "react-icons/si";

export const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact />,
  Hilla: <FaLayerGroup />,
  Java: <FaJava />,
  Docker: <FaDocker />,
  Git: <FaGitAlt />,
  TypeScript: <SiTypescript />,
  "Spring Boot": <SiSpringboot />,
  PostgreSQL: <SiPostgresql />,
  SQL: <FaDatabase />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
};