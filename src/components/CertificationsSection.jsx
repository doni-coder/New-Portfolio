import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
  {
    img: "https://udemy-certificate.s3.amazonaws.com/image/UC-f27afbe8-9245-438f-928e-fa34e5085340.jpg?v=1763060556000", // Update with your file path
    title: "Full stack generative and Agentic AI with python Certification",
    provider: "Hitesh Choudhary , Piyush Garg",
    desc: "Complete AI & LLM Engineering Bootcamp – Python, Git, Docker, Pydantic, LLMs, Agents, RAG, LangChain, LangGraph, and Multi-Modal AI from the ground up.",
    link: "https://www.udemy.com/certificate/UC-f27afbe8-9245-438f-928e-fa34e5085340/",
  },
];

export default function CertificationsSection() {
  return (
    <section className="pt-8 pb-17 px-6" id="certifications">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        🏅 My Certifications
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certifications.map((cert, i) => (
          <div
            key={i}
            className="group bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-md shadow-md 
            hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Certificate Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition"
              />
            </div>

            {/* Certificate Info */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-blue-300 font-medium mt-1">
                {cert.provider}
              </p>
              <p className="text-white/60 text-sm mt-2">{cert.desc}</p>
            </div>

            {/* Optional Link */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-blue-400 text-sm mt-4"
              >
                Verify <FaExternalLinkAlt size={12} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
