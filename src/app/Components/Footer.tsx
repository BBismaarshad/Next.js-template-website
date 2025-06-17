import Link from "next/link"; // Link component from Next.js for client-side navigation

export default function Footer() {
  return (
    // Footer main container with background, text color and top margin
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 mt-20">
      {/* Grid layout: max width, padding, and 3 columns on medium+ screens */}
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left section: Personal info */}
        <div>
          {/* Developer Name */}
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">Bisma Arshad</h3>
          {/* Short intro */}
          <p className="text-sm">
            Frontend Developer passionate about building accessible, responsive, and delightful web experiences.
          </p>
        </div>
        {/* Middle section: Quick navigation links */}
        <div>
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-white">Quick Links</h4>
          {/* Anchor links to sections in the same page */}
          <ul className="space-y-2">
            <li><Link href="#home" className="hover:underline">Home</Link></li>
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#projects" className="hover:underline">Projects</Link></li>
            <li><Link href="#blog" className="hover:underline">Blog</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        {/* Right section: Social media and contact */}
        <div>
          <h4 className="text-md font-semibold mb-2 text-gray-900 dark:text-white">Social</h4>
          <ul className="space-y-2">
            {/* External social links */}
            <li><Link href="https://linkedin.com" target="_blank" className="hover:underline">LinkedIn</Link></li>
            <li><Link href="https://github.com" target="_blank" className="hover:underline">GitHub</Link></li>
            <li><Link href="mailto:your@email.com" className="hover:underline">Email</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom line with copyright */}

      <div className="text-center py-6 text-sm border-t border-gray-200 dark:border-gray-700">
        {/* Shows current year automatically */}
        © {new Date().getFullYear()} Bisma Arshad. All rights reserved.
      </div>
    </footer>
  );
}
