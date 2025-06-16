"use client";
import React from "react";
import { motion } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const About: React.FC<{}> = () =>
{
  return (
    <motion.section
      id="about"
      className="flex flex-col items-center justify-center h-full relative px-4 md:px-10 py-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.div
        className="flex flex-col justify-around flex-wrap items-center max-w-[900px]"
        variants={fadeInUp}
      >
        <motion.h1
          className="text-white font-semibold text-4xl md:text-6xl"
          variants={fadeInUp}
        >
          ABOUT ME
        </motion.h1>
        <motion.p
          className="tracking-[0.2em] md:tracking-[0.5em] text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
          variants={fadeInUp}
        >
          EXPLORE NOW
        </motion.p>
        <motion.p
          className="text-gray-300 text-center text-sm md:text-lg"
          variants={fadeInUp}
        >
          I’m a Technical Sales Engineer at CyberXTRST, where I bridge the gap between technical solutions and business 
          needs in the cybersecurity space. I have a strong passion for solving real-world problems, especially in AI/ML 
          and full-stack development. I thrive on building efficient, scalable systems while staying curious and 
          continuously learning new technologies.
          <br />
          <br />
          With a solid foundation in Python, TypeScript, C++, C#, JavaScript, Java, HTML, CSS, PHP, and R, I bring both 
          technical depth and client-oriented thinking to every project. I'm eager to apply my knowledge to create practical 
          solutions that drive real value and impact.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
