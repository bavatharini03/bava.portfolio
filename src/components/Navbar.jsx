function Navbar() {
  return (
    <nav className="bg-gray-950 text-white px-8 py-5 flex justify-between items-center shadow-lg sticky top-0 z-50">

      <a
        href="#home"
        className="text-2xl font-bold text-blue-500 hover:text-blue-400 transition"
      >
        
      </a>

      <ul className="flex gap-8 text-lg">

        <li>
          <a
            href="#about"
            className="hover:text-blue-400 transition"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className="hover:text-blue-400 transition"
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#experience"
            className="hover:text-blue-400 transition"
          >
            Experience
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>
        </li>

        <li>
           <a
            href="#education"
            className="hover:text-blue-400 transition"
          >
            Education
           </a>
       </li>
       <li>
           <a
             href="#certifications"
             className="hover:text-blue-400 transition"
           >
             Certifications
          </a>
         </li>

      </ul>

    </nav>
  );
}

export default Navbar;