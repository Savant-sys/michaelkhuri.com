"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const Education: React.FC<{}> = () =>
{
  return (
    <motion.section
      id="education"
      className="py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
      }}
    >
      {/* Heading */}
      <motion.h2
        className="text-white font-semibold text-center text-4xl md:text-6xl"
        variants={fadeInUp}
      >
        EDUCATION
      </motion.h2>
      <motion.p
        className="tracking-[0.5em] text-center text-transparent font-light pb-5 bg-clip-text bg-gradient-to-r from-purple-700 to-blue-500 text-1xl"
        variants={fadeInUp}
      >
        EXPLORE NOW
      </motion.p>

      <motion.div
        className="container mx-auto max-w-screen-lg px-4 md:px-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* California State University Fullerton */}
        <motion.div className="md:flex md:flex-row md:justify-between pt-5" variants={fadeInUp}>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-3">
              <Image src="/csuf_logo.svg" height={30} width={30} alt="CSUF" />
              <p className="text-gray-300 font-semibold">
                California State University, Fullerton
              </p>
            </div>
            <p className="text-gray-300">
              Bachelor of Science in Computer Science
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">Aug 2022 - May 2024</p>
        </motion.div>
        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Activities: Association for Computing Machinery Club
        </motion.p>
        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Participated in two 24-hour hackathon events at CSUF and developed the projects below:
        </motion.p>
        <motion.p className="text-gray-300 pt-1 ml-3" variants={fadeInUp}>
          • SmartTuffy
        </motion.p>
        <motion.p className="text-gray-300 pt-1 ml-3" variants={fadeInUp}>
          • Project Green Tusk
        </motion.p>

        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Dean&apos;s List - Cum Laude
        </motion.p>

        {/* Saddleback College */}
        <motion.div className="md:flex md:flex-row md:justify-between pt-5" variants={fadeInUp}>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-3">
              <Image src="/saddleback_logo.svg" height={30} width={30} alt="Saddleback College" />
              <p className="text-gray-300 font-semibold">Saddleback College</p>
            </div>
            <p className="text-gray-300">
              Associate of Arts in Liberal Arts and Sciences
            </p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">Jun 2020 - May 2022</p>
        </motion.div>
        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Through my degree in Liberal Arts, my primary focus was on Computer Science coursework.
        </motion.p>

        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Activities: Society of Asian Scientists & Engineers Club (Director
          of Social Media)
        </motion.p>
        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Certificate: IGETC (Certificate of Achievement)
        </motion.p>
        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Dean&apos;s List
        </motion.p>

        {/* El Toro High School */}
        <motion.div className="md:flex md:flex-row md:justify-between pt-5" variants={fadeInUp}>
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-3">
              <Image src="/ElToro_logo.svg" height={30} width={30} alt="El Toro High School" />
              <p className="text-gray-300 font-semibold">El Toro High School</p>
            </div>
            <p className="text-gray-300">High School Diploma</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-3">Aug 2016 - Jun 2020</p>
        </motion.div>
        <motion.p className="text-gray-300 pt-5" variants={fadeInUp}>
          • Activities: Robotic Rescue Club, UNICEF Club, Astronomy Club, Charger
          Wellness Club, Esports Club
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Education;
