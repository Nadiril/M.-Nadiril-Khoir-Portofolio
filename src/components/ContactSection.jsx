'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, scaleIn } from '@/lib/animations';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-16 md:py-20"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div
        variants={scaleIn}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent/10 via-card to-card border border-accent/10 p-10 md:p-16 lg:p-20 text-center"
      >
        <motion.div
          className="absolute top-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-[100px] pointer-events-none"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-[80px] pointer-events-none"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold text-light tracking-tight leading-tight"
          >
            Ready to make your brand look more{' '}
            <span className="text-accent">professional?</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-muted text-sm max-w-md mx-auto"
          >
            Let&apos;s discuss your project. No pressure, just a friendly chat
            about what you need.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="https://wa.me/6289508778539"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full bg-accent text-dark font-semibold hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/20"
            >
              Contact Me on WhatsApp
            </motion.a>
            <motion.a
              href="mailto:hello@nadiril.studio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full border border-white/10 text-light/80 hover:bg-card hover:border-accent/30 transition-all duration-200"
            >
              Send Email
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
