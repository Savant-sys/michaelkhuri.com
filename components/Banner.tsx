"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Banner: React.FC<{}> = () =>
{
  return (
    <motion.div
      className="flex flex-col items-center justify-center px-4 md:px-20 mt-[50px] md:mt-[100px] z-[20]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <div className="flex flex-col justify-center text-center">
        <motion.div className="justify-center flex" variants={fadeInUp}>
          <Image
            priority
            src="/Me.png"
            height={150}
            width={150}
            alt="Michael Khuri"
            className="md:h-[250px] md:w-[250px] mt-5"
          />
        </motion.div>

        <motion.div
          className="flex flex-col gap-6 mt-4 md:mt-10 tracking-tighter text-4xl md:text-7xl font-semibold text-white max-w-[600px] animate-bounce"
          variants={fadeInUp}
        >
          Michael Khuri
        </motion.div>

        <motion.div className="flex justify-center mt-2 md:mt-4" variants={fadeInUp}>
          <p className="text-lg md:text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
            I Code, Eat, Sleep, &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 mr-2">
              Repeat
            </span>
          </p>
          <Image
            src="/catbongo.gif"
            height={50}
            width={50}
            alt="repeat"
            unoptimized
            className="md:w-[60px] md:h-auto h-auto"
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p className="text-base md:text-md text-gray-200 my-3 md:my-5 max-w-[600px]" variants={fadeInUp}>
          Technical Sales Engineer at CyberXTRST, with a passion for AI/ML, solving real-world challenges, and building efficient, scalable solutions.
        </motion.p>

        {/* Contact Button */}
        <motion.div className="text-base md:text-md flex justify-center mt-2" variants={fadeInUp}>
          <button
            onClick={() => window.open("mailto:michaelkhuri@gmail.com")}
            className="hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-2 md:py-3 px-6 md:px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Resume Button */}
        <motion.div className="text-base md:text-md flex justify-center mt-2" variants={fadeInUp}>
          <button
            onClick={() => window.open("Michael_Khuri_Resume.pdf")}
            className="hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-2 md:py-3 px-6 md:px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Resumé
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
