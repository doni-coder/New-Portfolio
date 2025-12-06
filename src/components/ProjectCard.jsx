import React from "react";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiDocker,
  SiTailwindcss,
  SiFramer,
  SiNextdotjs,
  SiPostgresql,
  SiStripe,
  SiGooglecloud,
  SiGithub,
} from "react-icons/si";

const techIcons = {
  React: <SiReact size={15} />,
  "Node.js": <SiNodedotjs size={15} />,
  Express: <SiExpress size={15} />,
  MongoDB: <SiMongodb size={15} />,
  Docker: <SiDocker size={15} />,
  Tailwind: <SiTailwindcss size={15} />,
  "Framer Motion": <SiFramer size={15} />,
  "Next.js": <SiNextdotjs size={15} />,
  PostgreSQL: <SiPostgresql size={15} />,
  Stripe: <SiStripe size={15} />,
  Gemini: <SiGooglecloud size={15} />,
};

const ProjectCard = ({ title, desc, tech, live, github }) => {
  return (
    <div className="bg-[#1515153a] border border-white/10 p-6 rounded-2xl shadow-xs hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{desc}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="flex items-center gap-1 bg-white/10 border border-white/10 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md"
          >
            {techIcons[t]} {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        <a
          href={live}
          target="_blank"
          className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all"
        >
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-white/10 border border-white/10 text-white rounded-full hover:bg-white/20 transition-all"
        >
          <SiGithub size={18} /> GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
