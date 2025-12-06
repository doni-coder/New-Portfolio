import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0B0E14] text-white py-10 px-6 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <div>
          <h2 className="text-xl font-semibold tracking-wide">
            Om Prakash — Doni
          </h2>
          <p className="text-white/60 text-sm mt-1">
            Frontend Developer • Freelancer • React & Node.js
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 text-xl">
          <a
            href="https://github.com/doni-coder"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/om-prakash-sahu"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:omprakashsahu9853@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-white/40 text-xs mt-8">
        © {new Date().getFullYear()} Doni | All rights reserved.
      </div>
    </footer>
  );
}
