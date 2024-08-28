import React from "react";
import { educationData } from "../assets/Data/myData";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section className="py-8" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -28 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-3xl font-bold"
      >
        Education
      </motion.h2>
      {educationData.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="p-8"
        >
          <h3 className="text-xl font-semibold">{edu.degree}</h3>
          <p className="text-lg">{edu.institute}</p>
          <p className="text-sm text-stone-300">{edu.course}</p>
          <p className="text-sm text-stone-300">{edu.course_year}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default Education;
