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
        className="mx-auto max-w-screen-lg px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        <SkillCard title="Languages" skills="Python, C++, C#, JavaScript, TypeScript, Java, R, HTML, CSS, SQL, PHP" />
        <SkillCard title="Frameworks/Technologies" skills="Next.js, TailwindCSS, React, Node.js, JWT, ChatGPT API, Heroku, Flask" />
        <SkillCard title="IDEs" skills="Unity, Git, GitHub, Git LFS, Visual Studio, VS Code, PyCharm, GNS3, Vercel" />
        <SkillCard title="Databases" skills="SQLite, MySQL, MongoDB" />
        <SkillCard title="Libraries" skills="pandas, NumPy, Matplotlib, Chart.js, Express.js, ReportLab" />
        <SkillCard title="Operating Systems" skills="Windows, Ubuntu, Kali Linux, CentOS, Linux" />
      </motion.div>
    </motion.section>
  );
};

const SkillCard: React.FC<{ title: string; skills: string }> = ({ title, skills }) =>
{
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-20 rounded-lg p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
      variants={fadeInUp}
    >
      <h3 className="text-white font-semibold text-lg md:text-xl mb-2">{title}</h3>
      <p className="text-white text-sm md:text-[14px] py-1 px-3 rounded-lg shadow-md hover:bg-gray-600 transition">
        {skills}
      </p>

    </motion.div>
  );
};

export default Skills;
