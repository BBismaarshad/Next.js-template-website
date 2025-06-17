// This is a Client Component in Next.js
"use client";
import Link from "next/link";
// Importing Image component from Next.js for optimized images
import Image from "next/image";

// Importing React hooks
import { useEffect, useState } from "react";
// Importing icons for skills and UI
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaFigma, FaGraduationCap } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript } from "react-icons/si";
import { motion, type Variants } from "framer-motion"; // Animation library
import { FiDownload, FiExternalLink } from "react-icons/fi"; // Icons for download and external link

// Animation variants for fade-in effect
const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // Start hidden and slightly down
  visible: (custom: number) => ({
    opacity: 1,
    y: 0, // Fade and move up
    transition: {
      delay: custom * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

// Main functional component for the About section
export default function About() {
  // Counter state for stats like experience, projects, techs
  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    techs: 0
  });
  // Effect runs once on mount to animate the counters
  useEffect(() => {
    // Function to animate a single counter from 0 to max
    const animateCounter = (key: keyof typeof counters, max: number, duration: number) => {
      let start = 0;
      const increment = max / (duration / 16); // Smooth increment
      const timer = setInterval(() => {
        start += increment;
        if (start >= max) {
          setCounters(prev => ({ ...prev, [key]: max })); // Set final value
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [key]: Math.floor(start) })); // Update value
        }
      }, 16);// Update every ~16ms
    };

    // Animate each stat
    animateCounter("experience", 2, 800);
    animateCounter("projects", 15, 600);
    animateCounter("techs", 10, 700);
  }, []);
  // List of technical skills with icon and color
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3Alt />, name: "CSS3", color: "text-blue-500" },
    { icon: <SiTailwindcss />, name: "Tailwind", color: "text-cyan-500" },
    { icon: <SiJavascript />, name: "JavaScript", color: "text-yellow-500" },
    { icon: <SiTypescript />, name: "TypeScript", color: "text-blue-600" },
    { icon: <FaReact />, name: "React", color: "text-sky-500" },
    { icon: <SiNextdotjs />, name: "Next.js", color: "text-gray-800 dark:text-gray-200" },
    { icon: <FaGitAlt />, name: "Git", color: "text-red-500" },
    { icon: <FaFigma />, name: "Figma", color: "text-pink-500" }
  ];
  // Work experiences
  const experiences = [
    {
      title: "Frontend Developer @ XYZ Tech",
      period: "Jan 2024 - Present",
      description: "Leading UI development for enterprise SaaS products using React and Next.js. Implemented design systems that improved development speed by 40%.",
      tags: ["React", "Next.js", "TypeScript", "Design Systems"]
    },
    {
      title: "Frontend Intern @ ABC Solutions",
      period: "Jun 2023 - Dec 2023",
      description: "Built responsive interfaces and contributed to open-source projects. Reduced bundle size by 25% through code optimization.",
      tags: ["React", "Tailwind CSS", "Performance"]
    }
  ];
  // Education data
  const education = [
    {
      degree: "BSc Computer Science",
      institution: "Tech University",
      period: "2020 - 2024",
      highlights: [
        "Specialized in Web Technologies",
        "GPA: 3.8/4.0",
        "Dean's List Honoree"
      ]
    }
  ];
  // Certifications list
  const certifications = [
    {
      title: "Advanced React Patterns",
      issuer: "Frontend Masters",
      year: "2023",
      link: "#"
    },
    {
      title: "TypeScript Fundamentals",
      issuer: "Udemy",
      year: "2022",
      link: "#"
    },
    {
      title: "Web Performance Optimization",
      issuer: "Coursera",
      year: "2022",
      link: "#"
    }
  ];
  // JSX render of the About section
  return (
    <section id="about" className="py-2 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col lg:flex-row gap-12 items-center mb-20"
        >
          <motion.div
            variants={fadeInVariants}
            custom={0}
            className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group"
          >
            <Image
              src="/officeimages.jpg"
              alt="Bisma Arshad"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div
            variants={fadeInVariants}
            custom={1}
            className="flex-1"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-sm font-medium">
              Frontend Specialist
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Me</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm Bisma Arshad, a passionate frontend developer with {counters.experience}+ years of experience crafting exceptional digital experiences.
              I specialize in building performant, accessible web applications using modern technologies.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#contact"
                className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all text-sm md:text-base"
              >
                Contact Me
              </Link>
              <Link
                href="/resume.pdf"
                download
                className="px-4 py-2 md:px-6 md:py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all flex items-center gap-2 text-sm md:text-base"
              >
                Download CV <FiDownload />
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {[{ value: counters.experience, label: "Years Experience" }, { value: counters.projects, label: "Projects Completed" }, { value: counters.techs, label: "Technologies" }].map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeInVariants}
              custom={i}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-5xl font-bold text-blue-600 mb-2">{stat.value}+</h3>
              <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInVariants}
            custom={0}
            className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            My <span className="text-blue-600 dark:text-blue-400">Technical</span> Skills
          </motion.h3>

          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                variants={fadeInVariants}
                custom={i}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3"
                whileHover={{ y: -5 }}
              >
                <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Experience */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeInVariants} custom={0} className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
            </motion.h3>

            <div className="space-y-8 relative before:absolute before:left-[17px] before:h-full before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700 before:top-0">
              {experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeInVariants} custom={i} className="relative pl-12">
                  <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-gray-800 flex items-center justify-center">
                    <span className="text-white text-sm font-bold">{i + 1}</span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mb-4">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.h3 variants={fadeInVariants} custom={0} className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">Education</span> Background
            </motion.h3>

            <div className="space-y-8">
              {education.map((edu, i) => (
                <motion.div key={i} variants={fadeInVariants} custom={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg text-blue-600 dark:text-blue-400">
                      <FaGraduationCap className="text-2xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-blue-600 dark:text-blue-400 mb-3">{edu.institution} • {edu.period}</p>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-blue-500">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.h3 variants={fadeInVariants} custom={1} className="text-3xl font-bold mt-12 mb-8 text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">Certifications</span> & Courses
            </motion.h3>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div key={i} variants={fadeInVariants} custom={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{cert.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer} • {cert.year}</p>
                  </div>
                  <Link href={cert.link} target="_blank" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    <FiExternalLink />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



