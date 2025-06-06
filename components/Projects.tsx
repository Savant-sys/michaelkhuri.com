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
          title="Acuflow Quote Generator"
          description="Built and deployed a full-stack quote generation system for AcuFlow, with a Python Flask API on Heroku, MySQL backend, and HTML + JavaScript + CSS frontend hosted on GoDaddy."
          link="https://github.com/Savant-sys/Acuflow-Quote-Generator"
          image="/NinethProject.png"
          githubLink="https://github.com/Savant-sys/Acuflow-Quote-Generator"
          youtubeLink="https://www.youtube.com/watch?v=JDMOYXBoGl0"
          websiteLink="https://www.acuflow.com/auto-pump-selector/"
        />

        <ProjectCard
          title="SmartTuffy"
          description="Developed an AI-powered chatbot website in 24 hours at a CSUF hackathon that helps college students discover their class schedules and club events using JavaScript, OpenAI API, and Next.js."
          link="https://github.com/Savant-sys/SmartTuffy"
          image="/SecondProject.png"
          githubLink="https://github.com/Savant-sys/SmartTuffy"
        />

        <ProjectCard
          title="MyClubBoard"
          description="Developed a website for students to manage or join clubs and organizations easily at the university using JavaScript, TypeScript, React, Prisma, MongoDB, and Next.js."
          link="https://github.com/anhduy1202/MyClubBoard"
          image="/ThirdProject.png"
          githubLink="https://github.com/anhduy1202/MyClubBoard"
          websiteLink="https://myclubboard-dev.vercel.app/"
        />

        <ProjectCard
          title="SiblingAI"
          description="Designed a website that utilized the JS similarity API to recognize similar phrases with 60% accuracy, where users can have conversations with an AI chatbot using JavaScript, CSS, and Next.js."
          link="https://github.com/Savant-sys/siblingAI"
          image="/FourProject.png"
          githubLink="https://github.com/Savant-sys/siblingAI"
          websiteLink="https://sibling-ai.vercel.app/"
        />

        <ProjectCard
          title="Detection"
          description="Developed a virtual reality game in Unity using C# with a team of five. An immersive virtual reality first-person shooter where you need to scan your environment."
          link="https://detectiongame.com/"
          image="/FirstProject.png"
          youtubeLink="https://www.youtube.com/watch?v=Dj0y_OX5fII"
          websiteLink="https://detectiongame.com/"
        />

        <ProjectCard
          title="Project Green Tusk"
          description="Developed a website using HTML, CSS, PHP, JavaScript, and SQL for user login and registration during a CSUF hackathon. The site, built in under 24 hours, allows users to study environmental lessons and donate to charities of their choice through sidebar ads."
          link="https://github.com/kourosh-alasti/FULLYHACKS-2023-ENVIRONMENTALIST"
          image="/FiveProject.png"
          githubLink="https://github.com/kourosh-alasti/FULLYHACKS-2023-ENVIRONMENTALIST"
        />

        <ProjectCard
          title="Pirate Ship Game"
          description="Developed a JavaScript game on Code Studio where the player controls the wings using arrow keys on the keyboard."
          link="https://studio.code.org/projects/applab/9F9zA96PI2__OC4URjdyFGyobeXOxntitbp2-RlKtBE"
          image="/NineProject.png"
          websiteLink="https://studio.code.org/projects/applab/9F9zA96PI2__OC4URjdyFGyobeXOxntitbp2-RlKtBE"
        />

        <ProjectCard
          title="The Block Jumper"
          description="Developed a mobile game using the Unity game engine and C# with a team of five. The game features a slime that jumps to achieve the highest possible score."
          link="https://github.com/Savant-sys/The-Block-Jumper"
          image="/SixProject.png"
          githubLink="https://github.com/Savant-sys/The-Block-Jumper"
          websiteLink="https://evanjholsch.itch.io/blockjumper"
        />

        <ProjectCard
          title="Recipe Application"
          description="Developed a recipe application in Python using TheMealDB website's database for recipe information."
          link="https://github.com/Savant-sys/The-Recipe-Application"
          image="/SevenProject.png"
          githubLink="https://github.com/Savant-sys/The-Recipe-Application"
        />

        <ProjectCard
          title="Table Tennis Game"
          description="Developed a JavaScript game on Code Studio where two players can play using the same keyboard with arrow keys and WASD controls."
          link="https://studio.code.org/projects/applab/2JA08Nke9iuYcZUdZHtnTb27Yc67424NHQfQzAJwd4w"
          image="/EightProject.png"
          websiteLink="https://studio.code.org/projects/applab/2JA08Nke9iuYcZUdZHtnTb27Yc67424NHQfQzAJwd4w"
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
  youtubeLink?: string;
  githubLink?: string;
  websiteLink?: string;
}> = ({ title, description, link, image, youtubeLink, githubLink, websiteLink }) =>
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
          <p className="text-gray-400 text-sm md:text-[14px]">{description}</p>

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