import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiFirebase,
  SiFramer,
} from "react-icons/si";
import { cn } from "../lib/utils";
import { Marquee } from "../components/ui/marquee";

const techIcons = [
  { icon: SiHtml5, label: "HTML", color: "text-orange-500" },
  { icon: SiCss3, label: "CSS", color: "text-blue-500" },
  { icon: SiJavascript, label: "JavaScript", color: "text-yellow-400" },
  { icon: SiReact, label: "React", color: "text-blue-400" },
  { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
  { icon: SiTailwindcss, label: "Tailwind", color: "text-cyan-400" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-500" },
  { icon: SiExpress, label: "Express", color: "text-gray-300" },
  { icon: SiMongodb, label: "MongoDB", color: "text-green-400" },
  { icon: SiPostgresql, label: "PostgreSQL", color: "text-blue-400" },
  { icon: SiFirebase, label: "Firebase", color: "text-yellow-500" },
  { icon: SiDocker, label: "Docker", color: "text-blue-500" },
  { icon: SiGit, label: "Git", color: "text-orange-500" },
  { icon: SiGithub, label: "GitHub", color: "text-white" },
];

const TechCard = ({ icon: Icon, label, color }) => {
  return (
    <div
      className={cn(
        "w-23 h-23 flex flex-col text-center justify-center items-center rounded-xl border",
        "bg-white/5 border-white/10 hover:bg-white/10 transition-all backdrop-blur-md"
      )}
    >
      <Icon size={35} className={color} />
      <span className="mt-2 text-sm text-white/80">{label}</span>
    </div>
  );
};

export default function ElementScroll() {
  const half = Math.ceil(techIcons.length / 2);
  const firstRow = techIcons.slice(0, half);
  const secondRow = techIcons.slice(half);

  return (
    <section className="pt-1 pb-18 relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8">
        🚀 My Tech Stack
      </h2>

      <Marquee pauseOnHover className="[--duration:20s] md:hidden flex gap-10">
        {firstRow.map((tech, i) => (
          <TechCard key={i} {...tech} />
        ))}
      </Marquee>

      <Marquee
        reverse
        pauseOnHover
        className="[--duration:40s] flex gap-10 mt-6"
      >
        {secondRow.map((tech, i) => (
          <TechCard key={i} {...tech} />
        ))}
      </Marquee>
    </section>
  );
}
