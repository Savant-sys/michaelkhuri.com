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
          <strong>autonomous systems</strong>.
          <br /><br />

          I build <strong>full-stack and AI-driven systems</strong>, including scalable SaaS platforms,
          REST APIs, and real-time computer vision pipelines using
          <strong> Python</strong>, <strong>Flask</strong>, <strong>Next.js</strong>,
          <strong> TypeScript</strong>, and <strong>PostgreSQL</strong>.
          <br /><br />

          My recent work includes developing
          <strong> multi-tenant SaaS applications</strong>,
          <strong> AI-powered learning platforms</strong>, and
          <strong> computer vision systems</strong> using
          <strong> PyTorch</strong>, <strong>OpenCV</strong>, and <strong>YOLO</strong>.
          <br /><br />

          I’m focused on building production-level systems and working toward roles in
          <strong> software engineering</strong>,
          <strong> AI/ML engineering</strong>, and
          <strong> autonomous systems</strong>.
        </motion.p>

      </motion.div>
    </motion.section>
  );
};

export default About;
