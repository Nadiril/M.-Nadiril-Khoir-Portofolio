'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className="py-10 border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-sm font-semibold text-light">
          Nadiril <span className="text-accent">Dev</span>
        </a>
        <p className="text-xs text-muted/50">
          &copy; {new Date().getFullYear()} Nadiril Khoir. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
