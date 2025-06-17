"use client";  // Enables client-side interactivity in Next.js

import Image from "next/image"; // For optimized image rendering
import Link from "next/link"; // For internal page navigation
import { motion, type Variants } from "framer-motion"; // Animation library
import { FiArrowRight } from "react-icons/fi"; // Arrow icon
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Social icons

// Animation for parent container (staggered children)
const containerVariants: Variants = {
  hidden: { opacity: 0 },  // Hidden state
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Delay between children
      delayChildren: 0.2,  // Initial delay
    },
  },
};
// Animation for each child item
const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 }, // Start position and opacity
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Smooth ease
    },
  },
};

// List of social media links with icons
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/BBismaarshad",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bisma-arshad/",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaTwitter className="w-5 h-5" />,
  },
];

export default function Hero() {
  return (
    // Full-screen section with background gradient
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center lg:text-left"
        >
          {/* Developer role badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 mb-4">
              Frontend Developer
            </span>
          </motion.div>
          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300">
              Bisma Arshad
            </span>
          </motion.h1>
          {/* Short bio/intro */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            I craft exceptional digital experiences with modern web technologies. Specializing in React, Next.js, and TypeScript to build fast, accessible, and beautiful applications.
          </motion.p>
          {/* Buttons: View Projects and Contact */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            {/* View Projects button with icon */}
            <Link
              href="#projects"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              View Projects
              <FiArrowRight className="inline group-hover:translate-x-1 transition-transform" />
            </Link>
            {/* Contact Me button with border */}
            <Link

              href="#contact"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start gap-4 mt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-2"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block"
        >
          <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/officeimages.jpg"
                alt="Bisma Arshad"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
