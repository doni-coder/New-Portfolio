import React from "react";
import TextType from "../components/TextType.jsx";

function HeroSection() {
  
  return (
    <div className="w-full px-9 md:px-20 md:pt-27 pt-14 pb-8 font-sans">
      {/* HERO SECTION */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        {/* LEFT TEXT */}
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Hi, I am Om prakash,
            <br />
            <TextType
              text={["Developer", "Engineer", "Freelancer"]}
              className="text-blue-400"
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="."
            />
          </h1>
          <p className="mt-6 text-gray-400 leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="flex sm:justify-start justify-center">
            <button className="mt-8 bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md text-base">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1Kpxn7qRqSoICwg-W_ISJH6LUonxJNWPe/view?usp=sharing"
              >
                Download Resume{" "}
              </a>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-0 w-72 h-72 flex items-center justify-center">
          {/* 🔥 Animated circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Blue slow zoom */}
            <div className="absolute w-30 h-30 rounded-full bg-blue-500/30 blur-3xl animate-zoomSlow"></div>

            {/* Purple medium zoom */}
            <div className="absolute w-40 h-40 rounded-full bg-purple-500/20 blur-3xl animate-zoomFast"></div>

            {/* Cyan faster zoom */}
            <div className="absolute w-70 h-70 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
          </div>

          {/* Main Image with Border */}
          <div className="relative w-60 h-60 border-8 border-blue-200/10 rounded-full overflow-hidden">
            <img
              src="/public/images/my_image.webp"
              alt="profile"
              className="w-full h-full  object-cover"
            />
            {/* <video
              src="src\assets\videos\screen.mp4" // << Update your video path
              autoPlay
              loop
              controls
              playsInline
              className="w-full h-full object-cover"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
