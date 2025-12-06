import React, { useEffect, useRef } from "react";
import {
  FaTrophy,
  FaProjectDiagram,
  FaCertificate,
  FaRocket,
} from "react-icons/fa";
import { Confetti } from "../components/ui/confetti";
import { useInView } from "framer-motion";

const achievements = [
  {
    icon: <FaProjectDiagram size={35} className="text-blue-400" />,
    title: "5+ Successful Projects",
    desc: "Delivered modern and scalable web applications for different clients.",
  },
  {
    icon: <FaTrophy size={35} className="text-yellow-400" />,
    title: "Hackathon Participation",
    desc: "Competed in multiple college-level tech competitions & ideathons.",
  },
  {
    icon: <FaCertificate size={35} className="text-green-400" />,
    title: "Certified Developer",
    desc: "Completed software development & web tech certification courses.",
  },
  {
    icon: <FaRocket size={35} className="text-purple-400" />,
    title: "Performance Boosting Tech",
    desc: "Improved website speed and conversion with optimized UI/UX.",
  },
];

export default function AchievementsSection() {
  const confettiRef = useRef(null);
  const sectionRef = useRef(null);

  const isVisible = useInView(sectionRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isVisible) {
      confettiRef.current?.fire({});
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-15 relative px-6 " id="achievements">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        🚀 Achievements & Highlights
      </h2>
      <Confetti
        ref={confettiRef}
        className="absolute top-0 left-0 z-0 size-full"
      />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 border border-white/10 rounded-2xl text-center p-6 backdrop-blur-xl 
            hover:shadow-md hover:shadow-blue-500/30 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>

            <h3 className="text-lg font-semibold text-white mb-2">
              {item.title}
            </h3>

            <p className="text-white/60 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
