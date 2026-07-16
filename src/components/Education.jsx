import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      year: "2022 - 2026",
      degree: "Bachelor of Engineering (Computer Science and Engineering)",
      institute: "Anna University Affiliated College",
      percentage: "CGPA: 8.06",
    },
    {
      year: "2020 - 2022",
      degree: "Higher Secondary Education",
      institute: "State Board",
      percentage: "79.0%",
    },
    {
      year: "2019 - 2020",
      degree: "Secondary School Leaving Certificate (SSLC)",
      institute: "State Board",
      percentage: "88.60%",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-800 text-white py-20 px-8"
    >
      <div className="max-w-5xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Education
        </h2>

        <div className="space-y-10">

          {education.map((item, index) => (

            <div
              key={index}
              className="flex gap-6 bg-slate-900 p-6 rounded-2xl shadow-lg hover:scale-[1.02] transition duration-300"
            >

              <div className="text-4xl text-blue-400 mt-2">
                <FaGraduationCap />
              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  {item.degree}
                </h3>

                <p className="text-blue-400 mt-2">
                  {item.year}
                </p>

                <p className="mt-2 text-gray-300">
                  {item.institute}
                </p>

                <p className="mt-2 font-semibold">
                  {item.percentage}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;