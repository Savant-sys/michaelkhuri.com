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
  I&apos;m Michael Khuri, and I am working toward becoming an
  <strong> AI &amp; Autonomous Systems Engineer </strong>
  while pursuing my
  <strong> M.S. in Artificial Intelligence </strong>
  at <strong>San José State University</strong> starting Spring 2026.

  <br /><br />

  I enjoy building things that help computers understand the world, especially using
  <strong> computer vision </strong> and <strong> machine learning</strong>.
  I like working on real-time systems where AI, simulation, and software come together.

  <br /><br />

  I have a strong foundation in
  <strong> Python, C++, C#, JavaScript, and SQL</strong>. I’ve created
  <strong> full SaaS applications</strong>, built
  <strong> VR projects in Unity</strong>, and developed early
  <strong> autonomous driving vision</strong> features using
  <strong> OpenCV</strong>. I also enjoy working with tools like
  <strong> Next.js, TailwindCSS, Flask, and PostgreSQL</strong>.

  <br /><br />

  I’m always learning new technologies and working on projects that help shape the future of cars, robotics, and AI.
</motion.p>

      </motion.div>
    </motion.section>
  );
};

export default About;
