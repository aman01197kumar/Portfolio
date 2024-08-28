import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialMedia = [
  {
    id: 1,
    title: "LinkedIn",
    icon: <FaLinkedinIn />, // Ensure this is valid JSX
    link: "https://www.linkedin.com/in/aman-kumar-451398183/",
  },
  {
    id: 2,
    title: "Facebook",
    icon: <FaFacebook />, // Ensure this is valid JSX
    link: "https://www.facebook.com/aman.tiwari.7140/",
  },
  {
    id: 3,
    title: "Instagram",
    icon: <FaInstagram />, // Ensure this is valid JSX
    link: "https://www.instagram.com/iam_t.i.w.a.ri.aman/",
  },
];

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <div className="flex items-center justify-center">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-white my-5"
        >
          Aman Kumar
        </motion.h3>
      </div>
      <div className="flex items-center justify-center gap-8">
        {socialMedia.map((item) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: item.id * 0.5 }}
            key={item.id}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.title}
          >
            {item.icon} {/* Render the icon directly */}
          </motion.a>
        ))}
      </div>
      <p className="mt-2 text-center text-sm tracking-wide text-gray-400">
        &copy; All rights reserved
      </p>
    </div>
  );
};

export default Footer;
