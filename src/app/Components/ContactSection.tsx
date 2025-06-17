// This component will run on the client-side (not server-side)
'use client'
// Hooks and libraries import
import { useState } from 'react' // To manage form state
import { motion } from 'framer-motion' // For animations
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi' // Icons for the form fields

// Main Contact Section component
export default function ContactSection() {
  // Form data state: holds name, email, and message values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  // Track if form is being submitted
  const [isSubmitting, setIsSubmitting] = useState(false)
  // Track if form submission was successful
  const [submitSuccess, setSubmitSuccess] = useState(false)
  // Function to update form data when user types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })  // Update the specific field
  }


  // Function that runs when form is submitted
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault() // Prevent page reload
    setIsSubmitting(true) // Show loading spinner

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    console.log('Form submitted:', formData) // Log data to console (for testing)
    setSubmitSuccess(true) // Show success message
    setIsSubmitting(false) // Hide loading
    setFormData({ name: '', email: '', message: '' }) // Clear form


    // Hide success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    // Section container with gradient background
    <section id="contact" className="pt-2 py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading section with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Section title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          {/* Section description */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </motion.div>
        {/* Contact form with animation */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl"
        >

          {/* Name input */}
          <div className="space-y-1">
            <label htmlFor="name" className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <FiUser className="text-blue-600 dark:text-blue-400" /> {/* Icon */}
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Your name"
            />
          </div>
          {/* Email input */}
          <div className="space-y-1">
            <label htmlFor="email" className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <FiMail className="text-blue-600 dark:text-blue-400" /> {/* Icon */}
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>
          {/* Message textarea */}
          <div className="space-y-1">
            <label htmlFor="message" className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
              <FiMessageSquare className="text-blue-600 dark:text-blue-400" /> {/* Icon */}
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          {/* Submit button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                }`}
            >
              {/* If submitting, show spinner. Otherwise show icon and text */}
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <FiSend /> {/* Send icon */}
                  Send Message
                </>
              )}
            </button>
          </div>
          {/* Success message after submission */}
          {submitSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg"
            >
              Message sent successfully! I'll get back to you soon.
            </motion.div>
          )}
        </motion.form>

        {/* Bottom contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-gray-600 dark:text-gray-400"
        >
          <p>Prefer email? Reach me directly at <span className="text-blue-600 dark:text-blue-400">hello@example.com</span></p>
        </motion.div>
      </div>
    </section>
  )
}