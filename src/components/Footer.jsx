import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-blue-400 mb-4">
          Thank You for Visiting!
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Thank you for taking the time to explore my portfolio.
          I am excited to begin my career as a Software Engineer and would
          love the opportunity to contribute to innovative projects.
          Feel free to connect with me!
        </p>

        

        

        <p className="text-gray-600 text-sm mt-2">
          © 2026 Bavatharini J. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;