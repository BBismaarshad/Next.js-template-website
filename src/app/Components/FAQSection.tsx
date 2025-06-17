"use client";  // Enables client-side rendering in Next.js

import { useState } from "react"; // useState hook to manage local state
import { motion, AnimatePresence } from "framer-motion"; // Framer Motion for animations
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Chevron icons for toggle


// List of FAQs with question and answer
const faqs = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in modern frontend technologies including React.js, Next.js, Tailwind CSS, and TypeScript. I also have experience with backend development using Python and Node.js, along with database management.",
  },
  {
    question: "Do you take freelance projects?",
    answer:
      "Yes! I'm actively taking on freelance projects and would love to collaborate on your idea. I offer end-to-end solutions from design to deployment, ensuring high-quality results.",
  },
  {
    question: "Can you build responsive and mobile-friendly designs?",
    answer:
      "Absolutely. I prioritize responsive design and mobile-first development. All my projects are thoroughly tested across various devices and screen sizes to ensure perfect functionality.",
  },
  {
    question: "How can I contact you?",
    answer:
      "You can reach me through the contact form on this website, via email at hello@example.com, or through my LinkedIn profile. I typically respond within 24 hours.",
  },
  {
    question: "What's your development process like?",
    answer:
      "I follow an agile methodology with clear milestones and regular updates. The process includes planning, design, development, testing, and deployment phases with client feedback at each stage.",
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle open/close for a particular FAQ
  const toggleIndex = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-2 bg-gray-50 dark:bg-gray-900" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="text-blue-600 dark:text-blue-400">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about my services and process
          </p>
        </motion.div>
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-800 hover:shadow-md transition-all duration-300"
            >
              {/* Button to toggle answer */}
              <button
                onClick={() => toggleIndex(index)}
                className="flex justify-between items-center w-full text-left p-6 focus:outline-none"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                {/* Question Text */}
                <span className="text-lg md:text-xl font-medium text-gray-800 dark:text-white">
                  {faq.question}
                </span>
                {/* Icon toggle (up/down arrow) */}
                <span className="text-blue-600 dark:text-blue-400">
                  {activeIndex === index ? (
                    <FiChevronUp className="w-6 h-6" />
                  ) : (
                    <FiChevronDown className="w-6 h-6" />
                  )}
                </span>
              </button>

              {/* Answer animation using AnimatePresence */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    id={`faq-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    {/* Answer Text */}
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}