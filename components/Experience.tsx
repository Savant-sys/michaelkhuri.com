"use client";
import Image from "next/image";
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
        className="tracking-[0.2em] md:tracking-[0.5em] text-center text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
        variants={fadeInUp}
      >
        EXPLORE NOW
      </motion.p>

      {/* Content */}
      <div className="container mx-auto max-w-screen-lg px-4 md:px-8">
        {/* ===== Star4ce ===== */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between pt-3 md:pt-5"
          variants={fadeInUp}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={"/star4ce_logo.png"}
                height={40}
                width={40}
                alt={"Star4ce logo"}
              />
              <p className="text-gray-300 font-semibold">Star4ce</p>
            </div>
            <p className="text-gray-300">Lead Full Stack Software Engineer (Contract)</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">Oct 2025 - Present · Remote (Irvine, CA)</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Building a full SaaS employee retention platform with <strong>Next.js, TailwindCSS, and Flask REST API.</strong>
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Implementing JWT authentication, role-based access control, and analytics dashboards.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Integrating <strong>PostgreSQL, AWS/Cloudinary storage, and Stripe</strong> for subscription payments.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Researching <strong>computer vision-based analytics</strong> for automated workforce insights.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Leading end-to-end development from UI/UX design to deployment and maintenance.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Next.js</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">TailwindCSS</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Flask</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">PostgreSQL</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">JWT Auth</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Stripe</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">AWS</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Computer Vision</div>
          </div>
        </motion.div>

        {/* ===== TRSTXCYBER ===== */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between pt-6 md:pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={"/trstxcyber_logo.jpg"}
                height={40}
                width={40}
                alt={"TRSTXCYBER logo"}
              />
              <p className="text-gray-300 font-semibold">TRSTXCYBER</p>
            </div>
            <p className="text-gray-300">Technical Sales Engineer</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">May 2025 - July 2025</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Identified client security needs and recommended tailored cyber insurance coverage options.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Integrated cybersecurity tools including dark web scanners and MDR solutions for client onboarding.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Streamlined intake forms and improved lead qualification processes with sales and tech teams.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Cybersecurity</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Technical Sales</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Client Analysis</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">MDR Solutions</div>
          </div>
        </motion.div>

        {/* ===== AcuFlow ===== */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between pt-6 md:pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={"/acuflow_logo.jpg"}
                height={40}
                width={40}
                alt={"AcuFlow logo"}
              />
              <p className="text-gray-300 font-semibold">AcuFlow</p>
            </div>
            <p className="text-gray-300">Full Stack Software Developer &amp; Operations Analyst Intern</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">February 2025 - April 2025</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Built and deployed a full-stack quote system with <strong>Flask API, MySQL</strong> database, and frontend integration.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Automated PDF quote generation and email delivery to streamline sales workflows.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Managed financial documentation including sales orders and invoices with QuickBooks integration.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Python</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Flask</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">MySQL</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">JavaScript</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Heroku</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">QuickBooks</div>
          </div>
        </motion.div>

        {/* ===== InBlue IT Solutions ===== */}
        <motion.div
          className="flex flex-col md:flex-row md:justify-between pt-6 md:pt-8"
          variants={fadeInUp}
        >
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src={"/inblue_it_solutions_logo.jpg"}
                height={40}
                width={40}
                alt={"InBlue IT Solutions logo"}
              />
              <p className="text-gray-300 font-semibold">InBlue IT Solutions</p>
            </div>
            <p className="text-gray-300">Network Administrator</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">March 2023 - May 2024</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Configured secure network systems including Cisco ASA firewalls, Unifi switches, and IP cameras.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Improved website SEO and client engagement through WordPress development.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Provided technical support and account management using Microsoft Azure and remote tools.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-1.5 md:gap-2">
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Network Configuration</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Cisco ASA</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">WordPress</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Azure</div>
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">IT Support</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
