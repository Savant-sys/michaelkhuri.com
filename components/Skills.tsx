"use client";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Skills: React.FC = () =>
{
  return (
    <motion.section
      id="skills"
      className="py-6 md:py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.h2
        className="text-white font-semibold text-center text-4xl md:text-6xl"
        variants={fadeInUp}
      >
        TECHNICAL SKILLS
      </motion.h2>
      <motion.p
        className="tracking-[0.2em] md:tracking-[0.5em] text-center text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
        variants={fadeInUp}
      >
        EXPERTISE & TOOLS
      </motion.p>

      <motion.div
        className="mx-auto max-w-screen-lg px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <SkillCard title="Languages" skills="Python, C++, JavaScript, TypeScript" />
        <SkillCard title="Machine Learning" skills="OpenCV, PyTorch, NumPy, Matplotlib" />
        <SkillCard title="Web Development" skills="Next.js, Flask, TailwindCSS, JWT" />
        <SkillCard title="Technology" skills="PostgreSQL, MySQL, AWS, Git, OpenAI API" />
      </motion.div>
    </motion.section>
  );
};

const SkillCard: React.FC<{ title: string; skills: string }> = ({ title, skills }) =>
{
  const skillList = skills.split(", ");
  
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-20 rounded-lg p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      variants={fadeInUp}
    >
      <h3 className="text-white font-semibold text-lg md:text-xl mb-3">{title}</h3>
      <div className="flex flex-wrap gap-1.5 md:gap-2">
        {skillList.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;
