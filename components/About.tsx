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
          I&apos;m Michael Khuri, a recent Computer Science graduate with a strong foundation in software development, Unity game
          development, cybersecurity, and customer service. I&apos;m eager to gain hands-on experience in AI/ML, software engineering,
          or technical development roles.
          <br />
          <br />
          I&apos;m passionate about applying my skills to innovative, real-world projects that drive impact across industries. Whether
          it&apos;s building full-stack web apps, creating VR experiences in Unity, or supporting cybersecurity operations, I&apos;m always
          looking to grow, contribute, and solve meaningful problems.
          <br />
          <br />
          With a solid foundation in Python, TypeScript, C++, C#, JavaScript, Java, HTML, CSS, PHP, and R, I bring both
          technical depth and client-oriented thinking to every project. I&apos;m eager to apply my knowledge to create practical
          solutions that drive real value and impact.
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default About;
