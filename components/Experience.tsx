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
          • Shipped Star4ce, a multi-tenant dealer retention platform (<strong>Next.js/TypeScript, Flask, PostgreSQL</strong>): 44 tables for employees, surveys, ATS, turnover, and billing, with store-level isolation and corporate portfolio access.
        </motion.p>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Built 250+ REST endpoints across 26 Flask blueprints with JWT + a 5-role / 50+ permission RBAC matrix (per-user overrides) so one store cannot read another&apos;s employees, surveys, or Stripe billing.
        </motion.p>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Modeled hiring, 90-day success plans, survey scoring, interview scorecards, and subscription state in Postgres and evolved the live schema with idempotent migrations across Railway dev/prod.
        </motion.p>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Built the dealer hub (90+ Next.js routes) for 90-day check-ins, survey dispatch, scorecards, turnover analytics, and LLM-backed candidate / command-center reports, backed by 80+ pytest files (400+ tests).
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
          <p className="text-gray-300 md:pt-0 pt-2">May 2025 - July 2025</p>
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
          • After a month of quoting, invoices, and purchases in <strong>QuickBooks</strong>, replaced spreadsheet quoting with a live selector on acuflow.com: sales enter ~30 flow/pressure/material/accessory fields; Flask matches a MySQL pump catalog (~50 spec columns) using manufacturer rules and picks the closest model at ≤2× requested flow.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Generated branded PDF quotes (ReportLab, sequential AQQ IDs) and emailed the customer plus quotes@acuflow.com so a quote left the site as a numbered artifact, not a spreadsheet export.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Shipped the API on Heroku behind a GoDaddy/WordPress form (PHP proxy); cut quote turnaround from days of manual catalog lookup to a same-session selector used in production at /auto-pump-selector/.
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
