import {
  FaJava,
  FaReact,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaRobot,
  FaBrain,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiMysql,
  SiJavascript,
  SiPostman,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
} from "react-icons/si";

// ---------------- AI Skills ----------------

const aiSkills = [
  {
    icon: <FaRobot />,
    name: "Artificial Intelligence",
    description: "Built AI-powered applications using Machine Learning.",
  },
  {
    icon: <FaBrain />,
    name: "Machine Learning",
    description: "Developed prediction models using Random Forest.",
  },
  {
    icon: <FaPython />,
    name: "Python",
    description: "Used for AI, data analysis, and backend development.",
  },
  {
    icon: <SiScikitlearn />,
    name: "Scikit-learn",
    description: "Trained and evaluated Machine Learning models.",
  },
  {
    icon: <SiPandas />,
    name: "Pandas",
    description: "Performed data cleaning and preprocessing.",
  },
  {
    icon: <SiNumpy />,
    name: "NumPy",
    description: "Used numerical operations for ML projects.",
  },
  {
    icon: <FaRobot />,
    name: "Prompt Engineering",
    description: "Created effective prompts for AI assistants.",
  },
];

// ---------------- Full Stack ----------------

const fullStackSkills = [
  {
    icon: <FaJava />,
    name: "Java",
    description: "Strong in OOP, Collections, Exception Handling and JDBC.",
  },
  {
    icon: <SiSpringboot />,
    name: "Spring Boot",
    description: "Built secure REST APIs using Spring Boot.",
  },
  {
    icon: <FaReact />,
    name: "React",
    description: "Developed responsive user interfaces using React.",
  },
  {
    icon: <SiJavascript />,
    name: "JavaScript",
    description: "Created interactive web applications using ES6+.",
  },
  {
    icon: <FaHtml5 />,
    name: "HTML5",
    description: "Structured modern and semantic web pages.",
  },
  {
    icon: <FaCss3Alt />,
    name: "CSS3",
    description: "Designed responsive layouts with Flexbox and Grid.",
  },
  {
    icon: <SiMysql />,
    name: "MySQL",
    description: "Designed databases and executed SQL queries.",
  },
];

// ---------------- Tools ----------------

const tools = [
  {
    icon: <FaGitAlt />,
    name: "Git & GitHub",
    description: "Version control and project collaboration.",
  },
  {
    icon: <SiPostman />,
    name: "Postman",
    description: "API testing and REST endpoint validation.",
  },
  {
    icon: "💻",
    name: "VS Code",
    description: "Primary code editor for frontend and backend development.",
  },
  {
    icon: "☕",
    name: "IntelliJ IDEA",
    description: "IDE used for Java and Spring Boot development.",
  },
  {
    icon: "🗄️",
    name: "MySQL Workbench",
    description: "Database design and SQL query management.",
  },
];

// ---------------- Reusable Skill Card ----------------

function SkillCard({ skill, color }) {
  return (
    <div className="group relative">
      <div
        className={`${color} flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer hover:scale-105 transition duration-300`}
      >
        <span className="text-xl">{skill.icon}</span>
        <span>{skill.name}</span>
      </div>

      {/* Tooltip */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 bg-slate-800 border border-slate-700 text-white text-sm rounded-lg p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 z-50 shadow-xl">
        {skill.description}
      </div>
    </div>
  );
}

// ---------------- Main Component ----------------

function Skills() {
  return (
    <section
  id="skills"
  data-aos="zoom-in"
>
      <h2 className="text-5xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto space-y-14">

        {/* AI Skills */}

        <div>
          <h3 className="text-3xl font-bold text-blue-400 mb-6">
            🤖 AI & Machine Learning
          </h3>

          <div className="flex flex-wrap gap-4">
            {aiSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                color="bg-blue-600"
              />
            ))}
          </div>
        </div>

        {/* Full Stack */}

        <div>
          <h3 className="text-3xl font-bold text-green-400 mb-6">
            ☕ Full Stack Development
          </h3>

          <div className="flex flex-wrap gap-4">
            {fullStackSkills.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                color="bg-green-600"
              />
            ))}
          </div>
        </div>

        {/* Tools */}

        <div>
          <h3 className="text-3xl font-bold text-yellow-400 mb-6">
            🛠️ Tools & Technologies
          </h3>

          <div className="flex flex-wrap gap-4">
            {tools.map((skill, index) => (
              <SkillCard
                key={index}
                skill={skill}
                color="bg-yellow-500 text-black"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;