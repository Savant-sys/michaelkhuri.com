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
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

const Experience: React.FC<{}> = () =>
{
  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="py-6 md:py-8"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Heading */}
      <motion.h2
        className="text-white font-semibold text-center text-4xl md:text-6xl"
        variants={fadeInUp}
      >
        EXPERIENCE
      </motion.h2>
      <motion.p
        className="tracking-[0.2em] md:tracking-[0.5em] text-center text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-blue-500 to-orange-400 text-sm md:text-1xl"
        variants={fadeInUp}
      >
        EXPLORE NOW
      </motion.p>

      {/* Content */}
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row md:justify-between pt-3 md:pt-5"
          variants={fadeInUp}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={"/InBlueITSolutions.svg"}
                height={30}
                width={30}
                alt={"experience"}
              />
              <p className="text-gray-300 font-semibold">InBlue IT Solutions</p>
            </div>
            <p className="text-gray-300">Network Administrator</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">March 2023 - May 2024</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Configured and installed network systems for client offices using Cisco ASA firewalls, Unifi switches, and IP security
          cameras, ensuring secure and efficient operations.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Developed a customer-focused website using WordPress, optimizing user experience and increasing client
          engagement through SEO and design enhancements.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Monitored and managed client login activities and security using Microsoft Azure, enhancing system reliability and
          preventing unauthorized access.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Provided remote technical support via AnyDesk, Quick Assist, and TeamViewer, resolving issues efficiently and
          ensuring minimal downtime.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              IT
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Customer Service
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Network Configuration
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Cabling and Hardware Setup
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              IP Address Management
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Network Monitoring
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Network Security
            </div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">
              Remote Support
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
