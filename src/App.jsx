import React from "react";
import HeroSection from "./pages/HeroSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import EducationTimeline from "./pages/EducationTimeline";
import ProjectsSection from "./pages/ProjectsSection";
import ElementScroll from "./components/ElementScroll";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import AchievementsSection from "./components/AchievementsSection";
import CertificationsSection from "./components/CertificationsSection";

function App() {
  return (
    <>
      <div>
        <div
          className="relative w-full min-h-screen px-0 md:px-0 font-sans 
                    bg-linear-to-br from-[#020617] via-[#0a1227] to-black 
                    text-white overflow-hidden"
        >
          {/* 🔵 Blurry Glow Background */}
          <div className="absolute top-20 md:left-10 left-1 w-72 h-72 bg-blue-600/30 blur-3xl rounded-full"></div>
          <div className="absolute top-130 md:top-50 right-25 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>

          {/* CONTENT WRAPPER (keeps text above blur) */}
          <div className="relative z-10">
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <HeroSection />
                    <EducationTimeline />
                    <ProjectsSection />
                    <AchievementsSection/>
                    <CertificationsSection/>
                    <ElementScroll />
                  </>
                }
              />
              <Route path="/services" element={<Services />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
