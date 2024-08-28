import React from "react";
import { experienceData } from "../assets/Data/experienceData";
import { motion } from "framer-motion";

const WorkExperience = () => {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-lighter"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y p-10"
      >
        {experienceData.map((exp, index) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            key={index}
            className="mt-5 rounded-xl border boder-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{exp.profile}</h3>
            <p className="text-xl">{exp.company}</p>
            <p className="text-sm text-stone-300">{exp.duration}</p>
            <p className="mt-2 text-base">{exp.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkExperience;
