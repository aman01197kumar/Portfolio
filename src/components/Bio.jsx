import React from "react";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-3xl lg:text-4xl"
      >
        Bio
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-4 text-lg lg:text-xl"
      >
        I am filled with wonder and amazement when I witness the enchanting
        world created through live coding. It makes me feel like a magician who
        can perform incredible feats with just a few lines of code. When a
        magnificent virtual world comes to life, it showcases the brilliance of
        an independent and imaginative mind. It captivates the eyes and
        imagination of many, highlighting the true artistry behind the creation.
      </motion.div>
    </section>
  );
};

export default Bio;
