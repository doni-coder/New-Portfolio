import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full px-8 md:px-20 py-10">
      <nav
        className="
          fixed top-7 left-1/2 -translate-x-1/2 
          w-[90%] md:w-[70%]
          px-10 py-4
          rounded-2xl
          bg-white/5
          backdrop-blur-md
          border border-white/20
          shadow-md shadow-black/20
          flex justify-between items-center
          z-50
        "
      >
        {/* Logo */}
        <Link to={"/"}>
          <MdHome size={25} className="text-white" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-neutral-200">
          <li className="cursor-pointer hover:text-gray-400">Works</li>
          <li className="cursor-pointer hover:text-gray-400">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-400">
            <a href="https://forms.gle/xwMdMWqf6eECqWvb9" target="_blank">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}

        {menuOpen ? (
          <IoClose
            size={28}
            className="md:hidden cursor-pointer text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <HiMenuAlt3
            size={28}
            className="md:hidden cursor-pointer text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className="
      fixed top-24 left-1/2 -translate-x-1/2
      w-[90%]
      bg-white/10 backdrop-blur-xl
      border border-white/20
      shadow-lg shadow-black/30
      rounded-xl
      py-6
      flex flex-col gap-6 text-lg text-neutral-200
      md:hidden
      z-40

      /* Animation */
      transition-all duration-300 ease-out
      transform 
      animate-[dropdown_.3s_ease-out]
    "
        >
          <style>{`
      @keyframes dropdown {
        0% { opacity: 0; transform: translateY(-12px); }
        100% { opacity: 1; transform: translateY(0); }
      }
    `}</style>

          <Link
            to={"/"}
            onClick={() => setMenuOpen(false)}
            className="text-center hover:text-gray-300"
          >
            Works
          </Link>

          <Link
            to={"/services"}
            onClick={() => setMenuOpen(false)}
            className="text-center hover:text-gray-300"
          >
            Services
          </Link>

          <a
            href="https://forms.gle/xwMdMWqf6eECqWvb9"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="text-center hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Navbar;
