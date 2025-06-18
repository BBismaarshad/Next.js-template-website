"use client";// This tells Next.js that this component uses client-side interactivity
import { useEffect, useState } from "react"; // React hooks
import Link from "next/link"; // Navigation within the site
import { Menu, X } from "lucide-react"; // Icons for mobile menu (hamburger and close)
import clsx from "clsx"; // Utility to combine CSS class names conditionally


// Navigation links (for both desktop and mobile)
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false); // For tracking if the page is scrolled
  const [mobileOpen, setMobileOpen] = useState(false);  // For opening/closing the mobile menu

  useEffect(() => {
    // Function to detect scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // If scroll Y > 50px, mark as scrolled
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Remove scroll listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Navbar header container
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all backdrop-blur-lg",
        scrolled ? "" : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 py-5 flex items-center justify-between">
        {/* Site logo/title */}
        <h1 className="text-xl font-bold text-gray-800 dark:text-white">
          Frontend_Dev
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        {/* Mobile menu toggle button - only visible on small screens */}
        <button
          className="md:hidden text-gray-700 dark:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu links - only show if mobileOpen is true */}
      {mobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
