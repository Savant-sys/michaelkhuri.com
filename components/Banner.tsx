"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants for different elements
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Banner: React.FC<{}> = () => {
  return (
    <motion.div
      className="flex flex-row items-center justify-center px-20 mt-[100px] z-[20]"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <div className="flex flex-col justify-center text-center">
        {/* Image with animation */}
        <motion.div className="justify-center flex" variants={fadeInUp}>
          <Image
            priority
            src="/Me.png"
            height={250}
            width={250}
            alt="Michael Khuri"
          />
        </motion.div>

        {/* Name with animation */}
        <motion.div
          className="flex flex-col gap-6 mt-10 animate-bounce tracking-tighter text-7xl font-semibold text-white max-w-[600px] w-auto h-auto"
          variants={fadeInUp}
        >
          Michael Khuri!
        </motion.div>

        {/* Bouncing text with animation */}
        <motion.div className="flex justify-center" variants={fadeInUp}>
          <p className="text-2xl font-medium tracking-tighter text-gray-300 max-w-[600px]">
            I Code, Eat, Sleep, &{" "}
            <span className="text-transparent font-semibold bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 mr-2">
              Repeat
            </span>
          </p>
          <Image src="/catbongo.gif" height={50} width={50} alt="repeat" />
        </motion.div>

        {/* Subtitle */}
        <motion.p className="text-md text-gray-200 my-5 max-w-[600px]" variants={fadeInUp}>
          Passionate about becoming a Software Engineer, with a strong interest in AI/ML and a focus on learning and building efficient solutions.
        </motion.p>

        {/* Contact Button */}
        <motion.div className="text-md flex justify-center" variants={fadeInUp}>
          <button
            onClick={() => window.open("mailto:michaelkhuri@gmail.com")}
            className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Resume Button */}
        <motion.div className="text-md flex justify-center" variants={fadeInUp}>
          <button
            onClick={() => window.open("Michael_Khuri_Resume.pdf")}
            className="z-[1] hover:bg-white rounded-3xl text-white font-semibold hover:text-black py-3 px-10 border-[0.1px] border-white hover:border-transparent mt-2"
          >
            Résumé
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Banner;
