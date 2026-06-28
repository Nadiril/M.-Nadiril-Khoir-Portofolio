'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold text-light tracking-tight"
        >
          Nadiril <span className="text-accent">Dev</span>
        </a>

        <ul className="hidden md:flex items-center gap-10 text-base text-muted">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-accent transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2.5 rounded-full bg-accent text-dark text-sm font-semibold hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25"
        >
          Start Project
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-light p-2 relative z-50"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
              animate={isOpen ? { rotate: 90, opacity: 0 } : { rotate: 0, opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              animate={isOpen ? { rotate: 0, opacity: 1 } : { rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-surface border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-5">
              <ul className="flex flex-col gap-5 text-base text-muted">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block hover:text-accent transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.08, duration: 0.3 }}
                >
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-block px-6 py-2.5 rounded-full bg-accent text-dark text-sm font-semibold"
                  >
                    Start Project
                  </a>
                </motion.li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
