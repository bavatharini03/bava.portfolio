import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition"
        >
          Bavatharini
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#certifications" className="hover:text-blue-400">Certificates</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 px-5 pb-5">
          <ul className="flex flex-col gap-5 text-lg">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
            <li><a href="#certifications" onClick={() => setMenuOpen(false)}>Certificates</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
