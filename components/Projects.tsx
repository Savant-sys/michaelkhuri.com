"use client";
import Image from "next/image";
import Link from "next/link";
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

const Projects: React.FC<{}> = () =>
{
  return (
    <motion.section
      id="projects"
      className="py-6 md:py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.h2
        className="text-white font-semibold text-center text-4xl md:text-6xl"
        variants={fadeInUp}
      >
        PROJECTS
      </motion.h2>
      <motion.p
        className="tracking-[0.2em] md:tracking-[0.5em] text-center text-transparent font-light pb-3 md:pb-5 bg-clip-text bg-gradient-to-r from-purple-500 to-blue-400 text-sm md:text-1xl"
        variants={fadeInUp}
      >
        EXPLORE NOW
      </motion.p>

      {/* Projects Grid */}
      <motion.div
        className="mx-auto max-w-screen-lg px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
        >
          <ProjectCard
          title="Autonomous Lane Detection System"
          description="Real-time lane detection system for autonomous vehicles using computer vision techniques."
          skills={["Python", "OpenCV", "NumPy", "Computer Vision"]}
          link="https://github.com/Savant-sys/Acuflow-Quote-Generator"
          image="/TenthProject.png"
          githubLink="https://github.com/Savant-sys/Autonomous-Lane-Detection-System"
          youtubeLink="https://www.youtube.com/watch?v=yOJP7iISu4k"
        />

        <ProjectCard
          title="Acuflow Quote Generator"
          description="Full-stack web app for generating quotes with automated PDFs and email workflows."
          skills={["Flask", "MySQL", "JavaScript", "Python"]}
          link="https://github.com/Savant-sys/Acuflow-Quote-Generator"
          image="/NinethProject.png"
          githubLink="https://github.com/Savant-sys/Acuflow-Quote-Generator"
          youtubeLink="https://www.youtube.com/watch?v=JDMOYXBoGl0"
          websiteLink="https://www.acuflow.com/auto-pump-selector/"
        />

        <ProjectCard
          title="SmartTuffy"
          description="AI chatbot that helps students find class schedules and campus events. Built in 24 hours for CSUF Hackathon."
          skills={["Next.js", "TypeScript", "OpenAI API", "Tailwind CSS"]}
          link="https://github.com/Savant-sys/SmartTuffy"
          image="/SecondProject.png"
          githubLink="https://github.com/Savant-sys/SmartTuffy"
        />

        <ProjectCard
          title="SiblingAI"
          description="Intelligent chatbot with context-aware responses and adaptive personality."
          skills={["Next.js", "JavaScript", "Semantic Search"]}
          link="https://github.com/Savant-sys/siblingAI"
          image="/FourProject.png"
          githubLink="https://github.com/Savant-sys/siblingAI"
        />

        <ProjectCard
          title="Detection"
          description="Immersive VR first-person shooter game with physics-based mechanics and AI enemies."
          skills={["Unity", "C#", "VR Development"]}
          link="https://detectiongame.com/"
          image="/FirstProject.png"
          youtubeLink="https://www.youtube.com/watch?v=Dj0y_OX5fII"
          websiteLink="https://detectiongame.com/"
        />

        <ProjectCard
          title="MyClubBoard"
          description="University club management platform with authentication, CRUD operations, and role-based access."
          skills={["Next.js", "TypeScript", "MongoDB", "Prisma"]}
          link="https://github.com/anhduy1202/MyClubBoard"
          image="/ThirdProject.png"
          githubLink="https://github.com/anhduy1202/MyClubBoard"
          websiteLink="https://myclubboard-dev.vercel.app/"
        />
      </motion.div>
      <motion.div
        className="flex flex-col items-center mt-5"
        variants={fadeInUp}
      >
        <Link href="https://github.com/Savant-sys" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 mt-5">
          <motion.p
            className="animate-bounce tracking-[0.2em] md:tracking-[0.5em] text-center text-transparent font-light bg-clip-text text-white text-sm md:text-lg flex items-center space-x-1"
          >
            Explore additional projects on my GitHub →
          </motion.p>
          <Image
            src="/Github.svg"
            alt="GitHub"
            width={40}
            height={40}
            className="transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </Link>
      </motion.div>
    </motion.section>
  );
};

// ProjectCard Component with Scroll-Based Animation and bubble effect on logos
const ProjectCard: React.FC<{
  title: string;
  description: string;
  link: string;
  image: string;
  skills: string[];
  youtubeLink?: string;
  githubLink?: string;
  websiteLink?: string;
}> = ({ title, description, link, image, skills, youtubeLink, githubLink, websiteLink }) =>
{
  return (
    <motion.div
      className="relative transform hover:scale-105 hover:z-10 transition-all duration-300 ease-in-out"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="bg-gray-800 bg-opacity-20 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:scale-110">
        <Image
          src={image}
          height={150}
          width={250}
          alt={title}
          className="w-full object-cover"
        />
        <div className="p-3 md:p-4">
          <h3 className="text-white font-semibold text-lg md:text-xl mb-2">{title}</h3>
          <p className="text-gray-400 text-sm md:text-[14px] mb-3">{description}</p>
          
          {/* Skills Tags */}
          <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs md:text-sm bg-blue-500/20 text-blue-300 rounded-md border border-blue-500/30"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex space-x-3 md:space-x-4">
              {githubLink && (
                <Link href={githubLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/Github.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
              )}
              {websiteLink && (
                <Link href={websiteLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/website.svg"
                    alt="Website"
                    width={20}
                    height={20}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
              )}
              {youtubeLink && (
                <Link href={youtubeLink} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/youtube.svg"
                    alt="YouTube Demo"
                    width={20}
                    height={20}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
              )}
            </div>

            {/* "Check this out" text with arrow */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-300 text-lg md:text-xl"></span>
              <span className="text-gray-300 text-sm md:text-md animate-bounce">← Check this out</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;