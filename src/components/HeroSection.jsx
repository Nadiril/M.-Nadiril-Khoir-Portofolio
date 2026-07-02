'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, fadeInRight, scaleIn, staggerContainer, staggerFast } from '@/lib/animations';

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="home"
      className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-accent/5 rounded-full blur-[150px] pointer-events-none will-animate"
        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none will-animate"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
          <motion.div className="md:col-span-6 relative z-10" variants={staggerContainer}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-light leading-tight tracking-tight"
            >
              Building digital products that deliver{' '}
              <span className="text-accent">real value.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-base md:text-lg text-muted max-w-xl leading-relaxed"
            >
              Building digital products that deliver real value.
Full-stack development studio focused on clean architecture, fast performance, and solutions that actually solve problems for small businesses and creators
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-accent text-dark font-semibold hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25"
              >
                Start a Project
              </a>
              <a
                href="#work"
                className="px-8 py-3.5 rounded-full border border-white/10 text-light/80 hover:bg-card hover:border-accent/30 transition-all duration-200"
              >
                View My Work
              </a>
            </motion.div>

            <motion.div
              variants={staggerFast}
              className="mt-10 flex flex-wrap gap-x-12 gap-y-3"
            >
              {[
                { value: '3+', label: 'Projects' },
                { value: 'Full', label: 'Stack Developer' },
                { value: 'UI/UX', label: 'Focus' },
              ].map((stat) => (
                <motion.div key={stat.label} variants={fadeInUp}>
                  <span className="text-2xl font-bold text-light">{stat.value}</span>
                  <p className="text-xs text-muted/70 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="md:col-span-6 relative"
            variants={fadeInRight}
          >
            <motion.div
              className="relative"
              variants={scaleIn}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -inset-6 bg-accent/8 rounded-[2rem] blur-2xl" />
              <div className="relative bg-card rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-1.5 px-6 py-4 bg-dark/40 border-b border-white/5">
                  <span className="w-3 h-3 rounded-full bg-red-400/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <span className="w-3 h-3 rounded-full bg-green-400/80" />
                  <span className="ml-3 text-xs text-muted/50 font-mono">dashboard.nadiril.studio</span>
                  <span className="ml-auto text-xs text-muted/30 font-mono">~/studio</span>
                </div>
                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="h-3 w-32 rounded-full bg-accent/15" />
                      <div className="h-3 w-20 rounded-full bg-accent/10" />
                    </div>
                    <div className="flex gap-2">
                      <div className="h-8 w-8 rounded-lg bg-accent/15 border border-accent/10" />
                      <div className="h-8 w-8 rounded-lg bg-accent/10 border border-accent/10" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-28 rounded-xl bg-gradient-to-b from-accent/20 to-accent/5 border border-accent/10 p-4 flex flex-col justify-end">
                      <div className="h-2 w-10 rounded-full bg-accent/30 mb-1" />
                      <div className="h-2 w-16 rounded-full bg-accent/20" />
                    </div>
                    <div className="h-28 rounded-xl bg-accent/8 border border-accent/10 p-4 flex flex-col justify-end">
                      <div className="h-2 w-8 rounded-full bg-accent/20 mb-1" />
                      <div className="h-2 w-12 rounded-full bg-accent/15" />
                    </div>
                    <div className="h-28 rounded-xl bg-accent/10 border border-accent/10 p-4 flex flex-col justify-end">
                      <div className="h-2 w-12 rounded-full bg-accent/25 mb-1" />
                      <div className="h-2 w-14 rounded-full bg-accent/15" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-accent/30" />
                      <div className="h-2.5 flex-1 rounded-full bg-accent/10" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-accent/20" />
                      <div className="h-2.5 w-3/4 rounded-full bg-accent/10" />
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-accent/15" />
                      <div className="h-2.5 w-5/6 rounded-full bg-accent/10" />
                    </div>
                  </div>
                  <div className="h-12 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center">
                    <span className="text-xs text-accent/60 font-mono tracking-wide">
                      www.nadiril.studio
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
