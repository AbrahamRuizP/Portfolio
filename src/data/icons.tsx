// icons.ts
import { FaReact, FaJava, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiSpringboot, SiPostgresql, SiMysql, SiHtml5, SiCss } from "react-icons/si";

export const skillIcons: Record<string, React.ReactNode> = {
  React: <FaReact />,
  Java: <FaJava />,
  Docker: <FaDocker />,
  Git: <FaGitAlt />,
  TypeScript: <SiTypescript />,
  "Spring Boot": <SiSpringboot />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
};