import { FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

function Certifications() {
  const certificates = [
    {
      title: "Fundamentals of Digital Marketing",
      provider: "Google",
      date: "2026",
      credential: "Certificate Available",
      link: "/certificates/google.pdf",
    },

    {
      title: "TCS iON Career Edge – Young Professional",
      provider: "Tata Consultancy Services",
      date: "2025",
      credential: "Certificate Completed",
      link: "/certificates/tcs-young.pdf",
    },

    {
      title: "TCS iON Certification",
      provider: "Tata Consultancy Services",
      date: "2025",
      credential: "Certificate Completed",
      link: "/certificates/tcs-ion.pdf",
    },

    {
      title: "Java Developer Internship",
      provider: "Billianz Academy",
      date: "2025",
      credential: "Internship Completion Certificate",
      link: "/certificates/billianz.pdf",
    },

    {
      title: "Full Stack Development Internship",
      provider: "The Mind IT",
      date: "2025",
      credential: "Internship Completion Certificate",
      link: "/certificates/mindit.pdf",
    },

    {
      title: "HTML5 Certification",
      provider: "Udemy",
      date: "2025",
      credential: "Certificate Available",
      link: "/certificates/udemy-html.pdf",
    },

    {
      title: "Web Development Bootcamp",
      provider: "Springboard",
      date: "2025",
      credential: "Certificate Available",
      link: "/certificates/springboard.pdf",
    },
  ];

  return (
    <section
      id="certifications"
      data-aos="zoom-in"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group bg-slate-900 rounded-2xl border border-slate-700 p-8 hover:border-red-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500"
            >
              <div className="flex justify-center mb-6">
                <FaFilePdf className="text-7xl text-red-500 group-hover:scale-110 transition duration-300" />
              </div>

              <h3 className="text-xl font-bold text-center mb-3">
                {certificate.title}
              </h3>

              <p className="text-blue-400 text-center mb-2">
                {certificate.provider}
              </p>

              <p className="text-gray-300 text-center mb-2">
                📅 {certificate.date}
              </p>

              <p className="text-gray-400 text-sm text-center mb-6">
                📜 {certificate.credential}
              </p>

              <div className="flex justify-center">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg font-semibold transition duration-300"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Certifications;