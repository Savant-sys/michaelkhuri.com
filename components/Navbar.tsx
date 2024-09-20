"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

// Fade-in and slide-down effect for the Navbar
const fadeInDown = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Navbar: React.FC<{}> = () => {
  const scrollToSection = (id: string, offset: number) => {
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.pageYOffset - offset,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      className="w-full h-[65px] fixed backdrop-blur-sm z-50 px-10"
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
    >
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <div
          onClick={scrollToTop}
          className="h-auto w-auto flex flex-row items-center cursor-pointer"
        >
          <Image
            src="/logo.svg"
            alt="Michael Khuri Logo"
            width={100}
            height={100}
            layout="intrinsic"
            className="w-[100px] h-auto"
          />
        </div>

        <div className="flex flex-row gap-5">
          <motion.div
            onClick={() => scrollToSection("#about", 50)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            About
          </motion.div>

          <motion.div
            onClick={() => scrollToSection("#projects", 50)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Projects
          </motion.div>

          <motion.div
            onClick={() => scrollToSection("#experience", 50)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.div>

          <motion.div
            onClick={() => scrollToSection("#education", 50)}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.div>

          <motion.div
            onClick={() => window.open("mailto:michaelkhuri@gmail.com")}
            className="z-[1] bg-transparent cursor-pointer bg-black hover:bg-[#2E2E2E] rounded-xl text-white py-2 px-5 text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
