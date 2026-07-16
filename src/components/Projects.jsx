import { useState } from "react";
import projects from "../data/projects";
import {
  FaGithub,
  FaImages,
  FaCheckCircle,
} from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
const [currentImage, setCurrentImage] = useState(0);

const nextImage = () => {
  setCurrentImage((prev) =>
    (prev + 1) % selectedProject.screenshots.length
  );
};

const prevImage = () => {
  setCurrentImage((prev) =>
    prev === 0
      ? selectedProject.screenshots.length - 1
      : prev - 1
  );
};
  return (
    <section
  id="projects"
  data-aos="fade-up"
>
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-500/40 hover:-translate-y-2 transition-all duration-300"
            >

              {/* Project Image */}

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-5">
                  {project.description}
                </p>


                {/* Features */}

                <div className="space-y-2 mb-6">

                  {project.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-3"
                    >

                      <FaCheckCircle className="text-green-400" />

                      <span>{feature}</span>

                    </div>

                  ))}

                </div>


                {/* Technologies */}

                <div className="flex flex-wrap gap-3 mb-6">

                  {project.technologies.map((tech, index) => (

                    <span
                      key={index}
                      className="bg-blue-600 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* Buttons */}

                <div className="flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-700 hover:bg-gray-600 px-5 py-3 rounded-lg flex items-center gap-2"
                  >
                    <FaGithub />
                    GitHub
                  </a>


                 <button
  onClick={() => {
    setSelectedProject(project);
    setCurrentImage(0);
  }}
  className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg flex items-center gap-2"
>
  <FaImages />
  View Screenshots
</button>
                </div>


              </div>

            </div>

          ))}

        </div>

      </div>
      {selectedProject && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
    <div className="bg-slate-900 p-6 rounded-2xl max-w-5xl w-full relative">

      <button
        onClick={() => setSelectedProject(null)}
        className="absolute top-4 right-4 text-3xl text-white hover:text-red-500"
      >
        ✕
      </button>

      <img
        src={selectedProject.screenshots[currentImage]}
        alt="Screenshot"
        className="w-full h-[500px] object-contain rounded-xl"
      />

      <div className="flex justify-between mt-6">

        <button
          onClick={prevImage}
          className="bg-gray-700 px-5 py-2 rounded-lg hover:bg-gray-600"
        >
          ◀ Previous
        </button>

        <span className="text-lg">
          {currentImage + 1} / {selectedProject.screenshots.length}
        </span>

        <button
          onClick={nextImage}
          className="bg-blue-600 px-5 py-2 rounded-lg hover:bg-blue-700"
        >
          Next ▶
        </button>

      </div>

    </div>
  </div>
)}
    </section>
  );
}

export default Projects;