import React from "react";
import SkillImg from "../assets/asset 2.png";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 94 },
    { name: "CSS", level: 94 },
    { name: "JavaScript", level: 85 },
    { name: "Bootstrap", level: 99 },
    { name: "Git & GitHub", level: 80 },
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 94 },
  ];

  return (
    <section id="skills" className="bg-white dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text and Skill Bars */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold text-center md:text-left text-purple-500 dark:text-purple-400 mb-8">
            Skills
          </h2>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-300 mb-1">
                  {skill.name}
                </h3>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-purple-600 dark:bg-purple-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={SkillImg}
            alt="Developer Illustration"
            className="max-w-xs sm:max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
