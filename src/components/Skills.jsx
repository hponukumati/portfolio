import React from "react";
import { motion } from "framer-motion";
import skills from "../data/skills"; // Adjust the path as necessary

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-24 pb-12">
      <h2 className="text-5xl font-bold text-center">My Skills</h2>
      <motion.div className="flex flex-wrap justify-between mt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 0, y: 80 },
            }}
            className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-110 cursor-pointer md:w-48 w-40"
          >
            <img alt={skill.name} src={skill.icon} className="w-12" />
            <h4 className="text-md ml-4">{skill.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
