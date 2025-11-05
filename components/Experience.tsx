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
            <p className="text-gray-300">Full Stack Software Engineer (Contract)</p>
          </div>
          <p className="text-gray-300 md:pt-0 pt-2">Oct 2025 - Present · Remote (Irvine, CA)</p>
        </motion.div>

        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Engineering a full SaaS employee retention platform using <strong>Next.js</strong>, <strong>TailwindCSS</strong>, and a <strong>Flask REST API</strong>.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Implementing <strong>JWT authentication</strong>, multi-role access control, analytics dashboards, and secure user management.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Integrating <strong>PostgreSQL</strong>, <strong>AWS/Cloudinary</strong> file storage, and <strong>Stripe</strong> for subscription payments.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Researching integration of <strong>computer vision</strong>-based analytics for workforce insight automation.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Leading end-to-end product development, including UI/UX, API design, deployment, and maintenance.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Full Stack Development</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Next.js</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">TailwindCSS</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Flask</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">PostgreSQL</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">JWT Auth</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Stripe</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Cloudinary / AWS</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Analytics</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Computer Vision (Exploratory)</div>
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
          • Supported cyber insurance sales by identifying client security needs and recommending tailored coverage options using industry best practices.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Researched and integrated cybersecurity tools (e.g., dark web scanners, MDR solutions) to enhance client onboarding and internal audit capabilities.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Collaborated with the sales and tech teams to streamline intake forms, improving lead qualification and closing rates.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Cybersecurity Tools</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Technical Sales</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Client Needs Analysis</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Cyber Insurance</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">MDR Solutions</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Customer Onboarding</div>
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
          • Developed and deployed a full-stack quote system using a <strong>Python Flask</strong> API (Heroku) with a <strong>MySQL</strong> backend and GoDaddy-hosted frontend.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Automated PDF quote generation and delivery via email to increase sales team productivity.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Supported financial documentation, including sales/purchase orders and invoices using QuickBooks.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Full Stack Development</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Python</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Flask</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">MySQL</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">HTML</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">JavaScript</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">CSS</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">PDF Generation</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">API Development</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Heroku Deployment</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">QuickBooks Integration</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">PHP</div>
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
          • Enhanced website SEO and client engagement through WordPress development.
        </motion.p>
        <motion.p className="text-gray-300 pt-3 md:pt-5" variants={fadeInUp}>
          • Provided technical support and account management using Microsoft Azure and remote tools.
        </motion.p>

        {/* Skill Tags */}
        <motion.div className="mt-4 md:mt-5" variants={fadeInUp}>
          <div className="flex flex-wrap gap-2">
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">IT</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Customer Service</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Network Configuration</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Cabling and Hardware Setup</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">IP Address Management</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Network Monitoring</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Network Security</div>
            <div className="bg-transparent rounded-3xl text-white text-sm py-2 px-3 border border-[#2E2E2E] w-max">Remote Support</div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
