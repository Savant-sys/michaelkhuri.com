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

          I’m Michael Khuri, an 
          <strong> M.S. Artificial Intelligence</strong> student at 
           San José State University specializing in 
          <strong> computer vision</strong> and <strong>autonomous systems</strong>.
          <br /><br />

          I build systems for <strong>real-time perception</strong> using 
          <strong> Python</strong>, <strong>C++</strong>, <strong>OpenCV</strong>, and 
          I’m currently learning <strong>PyTorch</strong> for deep learning. 
          Recent projects include an <strong>autonomous lane detection system</strong> and 
          AI-powered applications with the <strong>OpenAI API</strong>, 
          <strong> TypeScript</strong>, and <strong>Next.js</strong>.
          <br /><br />

          I’m continually building new AI projects as I work toward roles in 
          <strong> autonomous driving</strong>, <strong>robotic perception</strong>, and 
          <strong> machine learning engineering</strong>.

        </motion.p>

      </motion.div>
    </motion.section>
  );
};

export default About;
