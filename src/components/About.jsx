import { motion } from "framer-motion";

function About() {
  return (
    <section
  id="about"
  data-aos="fade-up"
>
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-bold text-center mb-16"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-slate-800 rounded-3xl p-10 shadow-xl"
        >

          <p className="text-lg leading-9 text-gray-300">
            I am a passionate Computer Science Engineering graduate with a strong interest in Java Full Stack Development, Artificial Intelligence, and modern web technologies. I have gained practical experience through internships and academic projects, where I developed responsive web applications and AI-based solutions.

My technical skills include Java, Spring Boot, React.js, MySQL, Python, and Machine Learning. I enjoy solving real-world problems, learning new technologies, and continuously improving my development skills.

As a motivated fresher, I am seeking an opportunity to start my career as a Software Engineer, contribute to innovative projects, and grow alongside experienced professionals.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default About;