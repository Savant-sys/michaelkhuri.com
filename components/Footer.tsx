"use client";
import React, { useEffect } from "react";
import { Social_Icons } from "@/constant"; // Make sure only GitHub and LinkedIn are in this array
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Fade-in and slide-up effect
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

const Footer: React.FC<{}> = () => {
  useEffect(() => {
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = process.env.NEXT_PUBLIC_TAWK_TO_ID ?? "";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <motion.div
      className="container mx-auto 2xl pt-[50px] pb-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp} // Apply fade-in animation
    >
      <motion.div
        className="pb-10 justify-center flex"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {Social_Icons.map((social) => (
          <motion.div key={social.alt} variants={fadeInUp}>
            <Link
              href={social.link}
              rel="noopener noreferrer"
              target="_blank"
              className="z-[1]"
            >
              <Image
                src={social.image}
                height={30}
                width={30}
                alt={social.alt}
                sizes="100vw"
                className="mx-5"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer Text with Current Year */}
      <motion.p className="text-gray-300 text-center text-sm" variants={fadeInUp}>
        Created with 💜 using Next.js © {new Date().getFullYear()}
      </motion.p>
    </motion.div>
  );
};

export default Footer;