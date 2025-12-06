import React from "react";

export default function EducationTimeline() {
  const education = [
    {
      year: "2021 — 2025",
      title: "B.Tech in Computer Science",
      place: "Nalanda Institute of Technology, Bhubaneswar",
      description:
        "Focused on software development, web technologies, AI/ML, and building real-world projects.",
    },
    {
      year: "2019 — 2021",
      title: "Higher Secondary (Science)",
      place: "BSE/CHSE Board",
      description:
        "Completed 12th with PCM. Built strong fundamentals in math & problem solving.",
    },
    {
      year: "2018 — 2019",
      title: "High School",
      place: "Secondary Education",
      description:
        "Developed early interest in computers & technology. Scored strong academic performance.",
    },
  ];

  return (
    <section className="w-full px-13 md:px-20 pt-7 pb-5 md:mt-13 mt-0 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
        My Education Journey
      </h2>

      <div className="relative border-l border-white/20 ml-6 md:ml-10">
        {education.map((item, index) => (
          <div key={index} className="mb-10 ml-6">
            {/* Dot */}
            <div className="w-4 h-4 bg-blue-500 rounded-full absolute -left-2.5"></div>

            {/* Card */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-all">
              <p className="text-sm text-blue-400 font-semibold">{item.year}</p>
              <h3 className="text-xl font-semibold mt-1">{item.title}</h3>
              <p className="text-white/70 text-sm mt-1">{item.place}</p>
              <p className="text-white/60 text-sm mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
