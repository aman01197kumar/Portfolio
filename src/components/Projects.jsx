import React from "react";
import { projectsData } from "../assets/Data/projectsData";
import { MdArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center txt-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projectsData.map((project) => (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          key={project.id}
          className="relative overflow-hidden rounded-3xl bg-gray-800 shadow-lg h-56"
        >
          <motion.img
            whileHover={{ scale: 1.1 }}
            src={project.img}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            
            className=" absolute inset-0 flex flex-col items-center justify-center p-6 text-white bg-black bg-opacity-60 backdrop-blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          >
            <h3 className="mb-3 text-2xl font-semibold">{project.title}</h3>
            <p className="mb-3 text-sm">{project.desc}</p>
            <a
              href={project.git_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-full bg-white px-4 py-2 text-black hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="mr-2">View on GitHub</span>
              <MdArrowOutward />
            </a>
          </motion.div>
        </motion.div>
      ))}
    </div>
    </section>
  );
};

export default Projects;
