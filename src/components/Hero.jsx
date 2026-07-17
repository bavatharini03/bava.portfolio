import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home"
className="min-h-screen bg-slate-950 text-white flex items-center px-5 md:px-10 py-16"
className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
className="text-4xl md:text-6xl font-bold leading-tight"            👋 Hey, I'm
          </p>

          <h1 className="text-6xl font-bold">
            Bavatharini J
          </h1>

className="text-xl md:text-3xl font-semibold text-gray-300 mt-5"
  <h2 className="text-xl md:text-3xl font-semibold text-gray-300 mt-5 leading-relaxed">
  Software Engineer <span className="text-blue-400">|</span> Full Stack Developer <span className="text-blue-400">|</span> AI Enthusiast
</h2>

<div className="text-lg md:text-xl text-blue-400 mt-5 min-h-[60px]">
  <TypeAnimation
    sequence={[
      "🚀 Building Modern Web Applications",
      2500,
      "🤖 Creating AI-Powered Solutions",
      2500,
      "☕ Java • Spring Boot • React • AI",
      2500,
      "💡 Solving Real-World Problems Through Code",
      2500,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</div>
</div>

          <p className="mt-8 text-base md:text-lg text-gray-400 leading-7 md:leading-8 max-w-xl">
Computer Science Engineering graduate passionate about Java Full Stack Development, AI, and modern web technologies, with hands-on experience through internships and projects. Eager to start my career as a Software Engineer.          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
  href="/resume.pdf"
  download="Bavatharini_J_Resume.pdf"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-semibold transition flex items-center gap-2 w-fit"
>
  📄 Resume
</a>
            <a
  href="#contact"
  className="bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
>
  Contact Me
</a>
          </div>

          <div className="className="flex gap-6 text-2xl md:text-3xl mt-8 justify-center md:justify-start">
            <a
  href=href="https://github.com/bavatharini03"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400 transition"
>
  <FaGithub />
</a>
            <a
  href="https://www.linkedin.com/in/bava-tharini-j-6a3685303/"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-blue-400 transition"
>
  <FaLinkedin />
</a>
            <a
  href="mailto:bavatharini1625@gmail.com"
  className="hover:text-blue-400 transition"
>
  <FaEnvelope />
</a>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="className="flex justify-center order-first md:order-last""
        >
          <img
  src="/avatar.png"
  alt="Bavatharini Avatar"
  className=className="w-64 sm:w-80 md:w-[500px] lg:w-[650px] hover:scale-105 transition duration-500"
/>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
