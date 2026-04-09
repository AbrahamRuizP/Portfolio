// icons.tsx
import { FaReact, FaJava, FaDocker, FaGitAlt, FaDatabase, FaLayerGroup, FaKey, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiPostgresql, SiHtml5, SiCss } from "react-icons/si";
import { JpaIcon } from "./JpaIcon";
import { ClarisIcon } from "./ClarisIcon";
import { VaadinIcon } from "./VaadinIcon";

export const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact />,
  FileMaker: <ClarisIcon />,
  GitHub: <FaGithub />,
  Hilla: <FaLayerGroup />,
  Java: <FaJava />,
  JPA: <JpaIcon />,
  JWT: <FaKey />,
  Docker: <FaDocker />,
  Git: <FaGitAlt />,
  LinkedIn: <FaLinkedin />,
  TypeScript: <SiTypescript />,
  "Spring Boot": <SiSpringboot />,
  PostgreSQL: <SiPostgresql />,
  SQL: <FaDatabase />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  Vaadin: <VaadinIcon />
};