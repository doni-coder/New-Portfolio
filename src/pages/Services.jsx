import React, { useState } from "react";
import { FiSmartphone, FiGlobe, FiLayers, FiChevronDown } from "react-icons/fi";

const services = [
  {
    title: "Landing Page Development",
    icon: <FiLayers size={40} className="text-blue-400" />,
    price: "₹1,499 – ₹4,999",
    short:
      "Modern, fast, and conversion-focused landing pages to boost your online presence.",
    full: "• Fully responsive landing page\n• SEO optimized\n• Fast loading performance\n• Modern UI animations\n• Integrated forms & CTA\n• Deployment support",
  },
  {
    title: "Web Application Development",
    icon: <FiGlobe size={40} className="text-green-400" />,
    price: "₹5,000 – ₹25,000",
    short:
      "Full-stack dynamic web apps built with React, Node.js, Express, and powerful APIs.",
    full: "• React frontend + Node.js backend\n• Authentication system\n• Admin dashboard\n• Database setup (MongoDB/PostgreSQL)\n• Deployments (Docker/Render)\n• API integrations",
  },
  {
    title: "Mobile App Development",
    icon: <FiSmartphone size={40} className="text-purple-400" />,
    price: "₹10,000 – ₹40,000",
    short:
      "Cross-platform mobile apps with smooth UI/UX and backend integrations.",
    full: "• React Native mobile app\n• REST API integration\n• Push notifications\n• Login/Signup system\n• App Store & Play Store build\n• UI/UX friendly screens",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="py-15 md:py-20 px-6" id="services">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        💼 Services I Offer
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const open = openIndex === index;

          return ( 
            <div key={index}>
              {/* CARD */}
              <div className="bg-[#14151869] border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-md hover:shadow-blue-500/20 transition-all duration-300 relative">
                {/* Icon + Title */}
                <div className="flex flex-col items-center text-center">
                  <div className="">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mt-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-2">{service.short}</p>

                  <p className="text-lg text-blue-400 font-semibold mt-4">
                    {service.price}
                  </p>
                </div>

                {/* Arrow button */}
                <button
                  onClick={() => toggle(index)}
                  className="
                    absolute bottom-4 right-4 p-2 
                    bg-white/5 rounded-full hover:bg-white/20 
                    transition
                  "
                >
                  <FiChevronDown
                    size={20}
                    className={`text-white transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              </div>

              {/* DROPDOWN BELOW CARD */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  open ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-[#14151869] border border-white/10 rounded-xl p-5 text-white/80 text-sm leading-relaxed whitespace-pre-line">
                  {service.full}

                  {/* CTA Buttons */}
                  <div className="flex gap-3 mt-4">
                    <a
                      href="mailto:your-email@gmail.com"
                      className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition"
                    >
                      Hire Me
                    </a>
                    <a
                      href="https://forms.gle/xwMdMWqf6eECqWvb9"
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white text-sm hover:bg-white/20 transition"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
