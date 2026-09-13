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
            <p className="text-gray-300">Founding Full-Stack Engineer</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">Oct 2025 - Present · Irvine, CA (Hybrid)</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Built and deployed a multi-tenant dealership retention platform using <strong>Next.js, TypeScript, Flask, and PostgreSQL</strong>, with 44 tables supporting employee surveys, hiring workflows, turnover analytics, and billing
        </motion.p>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Implemented 250+ <strong>REST</strong> endpoints with <strong>JWT</strong> authentication and a 5-role / 50+ permission <strong>RBAC</strong> model, enforcing store-level data access and corporate portfolio permissions
        </motion.p>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Designed <strong>PostgreSQL</strong> models for hiring, 90-day success plans, survey scoring, and subscriptions; maintained idempotent schema migrations across <strong>Railway</strong> development and production environments
        </motion.p>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Developed dealer workflows and LLM-backed candidate reports across 90+ <strong>Next.js</strong> routes; supported backend validation with a <strong>400+ test pytest suite</strong>
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
            <div className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30">Railway</div>
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
          <p className="text-gray-300 md:pt-0 pt-2">May 2025 - July 2025 · Huntington Beach, CA</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Integrated client onboarding tools (MDR, dark-web scan) and tightened intake so sales could qualify leads without a custom engineering build.
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
              <p className="text-gray-300 font-semibold">AcuFlow (Precision Flow Technologies)</p>
            </div>
            <p className="text-gray-300">Software Engineer Intern — pump quoting</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">February 2025 - April 2025 · Irvine, CA</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Built a production <strong>Flask/MySQL</strong> pump selector that replaced manual catalog lookup, reducing quote turnaround from days to a single session
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Translated manufacturer selection rules into catalog matching based on flow, pressure, materials, and accessories; automated branded PDF quotes and customer/sales email delivery using <strong>ReportLab</strong>
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Deployed the <strong>REST API</strong> on <strong>Heroku</strong> and integrated a WordPress form through a <strong>PHP</strong> proxy to support the live quoting workflow on acuflow.com
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
          <p className="text-gray-300 md:pt-0 pt-2">March 2023 - May 2024 · Costa Mesa, CA</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Configured customer networks (Cisco ASA, UniFi, IP cameras) and supported sites remotely, including Azure AD.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Shipped WordPress changes for client marketing sites.
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
