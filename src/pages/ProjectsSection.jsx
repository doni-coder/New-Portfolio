import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "AI Content Recommender",
      desc: "A GenAI-powered dashboard that analyzes YouTube channel data and recommends new content ideas.",
      tech: ["React", "Node.js", "Express", "MongoDB", "LangChain", "Gemini"],
      live: "#",
      github:""
    },
    {
      title: "Learning Management System",
      desc: "Scalable LMS where teachers upload courses and students purchase and watch videos.",
      tech: ["Next.js", "Tailwind", "Stripe", "PostgreSQL", "Docker"],
      live: "https://lms-learning-management-system-blond.vercel.app/",
      github:"https://github.com/doni-coder/LMS-learning-management-system-"
    },
  ];

  return (
    <section className="pt-0 pb-10 md:px-6 px-5">
      <h2 className="text-3xl font-bold text-white text-center mb-10">
        🚀 My Projects
      </h2>

      <div className="grid md:grid-cols-2 pt-2 gap-8 max-w-[100vh] mx-auto">
        {projects.map((p, index) => (
          <ProjectCard key={index} {...p} />
        ))}
      </div>
    </section>
  );
}
