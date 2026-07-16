import { FaBriefcase, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      company: "Billianz Academy",
      duration: "Sep 2025",
      role: "Java Developer Intern",
      points: [
        "Developed Java applications using object-oriented programming concepts.",
        "Worked with Core Java and gained hands-on development experience.",
        "Improved debugging, testing, and problem-solving skills.",
        "Collaborated on real-world development tasks during the internship.",
      ],
    },

    {
      company: "The Mind IT",
      duration: "June 2025 - July 2025",
      role: "Full Stack Development Intern",
      points: [
        "Built responsive web applications using HTML, CSS, JavaScript, and React.",
        "Worked on frontend and backend development concepts.",
        "Learned API integration and database connectivity.",
        "Used Git and GitHub for version control and project collaboration.",
      ],
    },
  ];

  return (
    <section
  id="experience"
  data-aos="fade-left"
>

      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Experience
        </h2>


        <div className="space-y-10">

          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2
              }}
              className="bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-blue-500/30 hover:scale-[1.02] transition-all"
            >

              <div className="flex items-center gap-4 mb-6">

                <FaBriefcase className="text-4xl text-blue-400" />

                <div>

                  <h3 className="text-2xl font-bold">
                    {exp.role}
                  </h3>

                  <p className="text-blue-400 text-lg">
                    {exp.company}
                  </p>

                  <p className="text-gray-400">
                    {exp.duration}
                  </p>

                </div>

              </div>


              <div className="space-y-3">

                {exp.points.map((point, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3 text-gray-300"
                  >

                    <FaCheckCircle className="text-green-400" />

                    <span>{point}</span>

                  </div>

                ))}

              </div>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;