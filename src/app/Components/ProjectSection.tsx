'use client' // Enables client-side interactivity in Next.js


import React from 'react'
import { motion, Variants } from 'framer-motion' // For animations and transitions
import { FiExternalLink, FiGithub } from 'react-icons/fi' // External link and GitHub icons
import Image from 'next/image' // Next.js optimized image component
// Projects data
const projects = [
  {
    title: "LifeLink – Blood Donation Finder",
    description: "A platform to find nearby blood donors and request blood in emergencies with real-time notifications and donor matching algorithms.",
    tech: ["Next.js", "Tailwind CSS", "Python", "Firebase"],
    link: "#",
    github: "https://github.com/BBismaarshad",
    image: "/projects/Blood.jpg",
  },
  {
    title: "SkillSwap – Local Skill Exchange",
    description: "Peer-to-peer platform where users exchange skills with their local community, featuring geolocation and rating systems.",
    tech: ["Streamlit", "Python", "OOP", "PostgreSQL"],
    link: "#",
    github: "https://github.com/BBismaarshad",
    image: "/projects/skillswap.jpg",
  },
  {
    title: "RentMate – Student Rental App",
    description: "Helps students rent and lend items affordably with secure transactions and inventory management.",
    tech: ["Python", "Streamlit", "SQLite", "JWT Auth"],
    link: "#",
    github: "https://github.com/BBismaarshad",
    image: "/projects/rentmate.jpg",
  },
  {
    title: "FoodieBot – Food Chatbot",
    description: "AI chatbot that provides personalized food recipes based on dietary preferences and available ingredients.",
    tech: ["Chainlit", "OpenAI", "Python", "NLP"],
    link: "#",
    github: "https://github.com/BBismaarshad",
    image: "/projects/foodiebot.jpg",
  },
  {
    title: "Phone Price Checker",
    description: "Comprehensive OOP-based application to search, compare, and analyze smartphone prices across multiple retailers.",
    tech: ["Python", "Streamlit", "OOP", "Web Scraping"],
    link: "#",
    github: "https://github.com/BBismaarshad",
    image: "/projects/phonechecker.jpg",
  },
  {
    title: "MDCAT AI Agent",
    description: "Custom AI tutor for medical entrance exam students featuring adaptive learning and progress tracking.",
    tech: ["Python", "Agents SDK", "LLM", "RAG"],
    link: "#",
    github: "https://github.com/BBismaarshad",
    image: "/projects/mdcatagent.jpg",
  },
]

// Animation for whole grid container
const containerVariants: Variants = {
  hidden: { opacity: 0 }, // Hidden state
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between each child animation
      delayChildren: 0.3, // Start delay
    },
  },
}

// Animation for each item (project card)
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 }, // Start lower and invisible
  visible: {
    y: 0,
    opacity: 1, // Move up and fade in
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// Main component
export default function ProjectSection() {
  return (
    // Whole project section
    <section id="projects" className="py-2 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my featured projects. Each one was built to solve real problems.
          </p>
        </motion.div>
        {/* Project cards grid with container animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {/* Loop through projects */}
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:shadow-blue-600/40 dark:hover:shadow-blue-600/40 transition-all duration-300 h-full flex flex-col"
              whileHover={{ y: -5 }}
            >
              {/* Image section with hover gradient and links */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-900/80 hover:bg-gray-900 text-white p-2 rounded-full transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="text-lg" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" bg-blue-600/80 hover:bg-blue-600 text-white p-2 rounded-full transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink className="text-lg" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project title, description, and tech list */}
              <div className="p-6 flex-1 flex flex-col">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                </div>
                {/* Technology tags */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-pink-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


