import React from "react";
import { skillsData } from "../assets/Data/skillsData";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1 },
  y: 0,
  transition: {
    duration: 1,
    staggerChildren: 0.5,
  },
};

const itemVariants = {
  hiddne: {
    opacity: 0,
    x: -20,
  },
  visible: 1,
  x: 0,
  transition: { duration: 0.5 },
};

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">Skills</h2>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once : true}}
        className="mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border boder-stone-50/38"
      >
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`py-6 flex items-center justify-between ${
              index !== skillsData.length - 1
                ? "border-b border-stone-50/30"
                : ""
            }`}
          >
            <div className="flex flex-center items-center">
              <img width={50} src={skill.img} alt={skill.skill_name} />
              <h3 className="px-6 text-lg lg:text-2xl">{skill.skill_name}</h3>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
