// This tells Next.js to treat this component as a client-side component
"use client";
// Import animation utilities from framer-motion
import { motion, Variants } from "framer-motion";
// Import star icon for rating
import { FiStar } from "react-icons/fi";
// Array of feedback objects from different clients
const feedbacks = [
  {
    name: "Sarah Khan", // Client name
    position: "Founder, Designify", // Job title or company
    feedback: "Working with Bisma was a game-changer! Her designs are modern, clean, and delivered exactly what we needed.",// Client's comment
    rating: 5, // Star rating (out of 5)
    avatar: "/clients/sarah.jpg",  // Image of the client
    project: "E-commerce Redesign" // Project name
  },
  {
    name: "Ali Raza",
    position: "CTO, TechNova",
    feedback: "Excellent work and timely delivery. The UI was flawless and responsiveness was top-notch!",
    rating: 5,
    avatar: "/clients/ali.jpg",
    project: "SaaS Dashboard"
  },
  {
    name: "Ayesha Siddiqui",
    position: "Marketing Lead, Foodies",
    feedback: "We were amazed by the attention to detail and creative thinking. Highly recommend her services!",
    rating: 4,
    avatar: "/clients/ayesha.avif",
    project: "Food Delivery App"
  },
];

// Animation settings for the outer container
const containerVariants: Variants = {
  hidden: { opacity: 0 }, // Start hidden
  visible: {
    opacity: 1, // Fully visible
    transition: {
      staggerChildren: 0.2, // Animate children one after another
      delayChildren: 0.3, // Start delay
    },
  },
};
// Animation settings for each testimonial card
const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 }, // Start lower and invisible
  visible: {
    y: 0,  // Move up to original position
    opacity: 1, // Make visible
    transition: {
      duration: 0.6, // How long the animation lasts
      ease: "easeOut", // Smooth exit animation
    },
  },
};
// Main component for displaying client feedback
export default function ClientFeedback() {
  return (
    // Section container with padding and background gradient
    <section className="pt-2 py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading with fade-in animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          {/* Section title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Client <span className="text-blue-600 dark:text-blue-400">Testimonials</span>
          </h2>
          {/* Section subtitle */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Testimonials grid container with animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* Loop through each feedback item */}
          {feedbacks.map((item, index) => (
            // Animated card for each testimonial
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Avatar and info section */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900/30">
                  {/* Client avatar image */}
                  <img
                    src={item.avatar}
                    alt={item.name}
                   
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name, position, and project */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{item.name}</h4>
                  <p className="text-blue-600 dark:text-blue-400 text-sm">{item.position}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">Project: {item.project}</p>
                </div>
              </div>
              {/* Feedback text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">"{item.feedback}"</p>

              {/* Star rating display */}
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={i < item.rating ? "fill-current" : "text-gray-300 dark:text-gray-600"}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
