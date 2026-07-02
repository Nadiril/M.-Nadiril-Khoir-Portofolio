'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const projects = [
  {
    title: 'Buku Tamu Digital',
    type: 'Web App',
    year: '2026',
    desc: 'Aplikasi buku tamu digital berbasis web dengan fitur QR code checkin, dan dashboard real-time untuk acara dan kunjungan.',
    tech: ['Next.js', 'Tailwind CSS', 'MySQL'],
    image: '/Project Buku Tamu Digital.webp',
  },
  {
    title: 'Website UMKM Jajannya Mimitha',
    type: 'Business Website',
    year: '2026',
    desc: 'Website UMKM kuliner dengan sistem pemesanan online, manajemen menu dinamis, dan integrasi pembayaran digital.',
    tech: ['Next.js', 'Tailwind CSS', 'MySQL'],
    image: '/Project UMKM.webp',
    link: 'https://jajannya-mimitha.vercel.app',
  },
  {
    title: 'Portofolio Habib Rahman',
    type: 'Platform',
    year: '2026',
    desc: 'Platform komunitas untuk berbagi dan menemukan prompt AI terbaik. Fitur voting, kategori, dan pencarian lanjutan.',
    tech: ['HTML', 'CSS'],
    image: '/Project Portofolio Habib Rahman.webp',
  },
];

export default function SelectedWorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="work"
      className="py-20 md:py-24 bg-surface/30"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div className="max-w-xl">
            <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
              Selected Work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-light tracking-tight">
              Recent{' '}
              <span className="text-accent">projects</span>
            </h2>
          </div>
          <p className="mt-2 md:mt-0 text-muted text-sm max-w-xs">
            3+ projects shipped with modern tech stack and clean design.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="space-y-6"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 40, x: idx % 2 === 0 ? -20 : 20 },
                visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -4 }}
              className="group grid md:grid-cols-12 gap-0 bg-card rounded-[2rem] border border-white/5 overflow-hidden hover:border-accent/20 transition-colors duration-300 hover:shadow-xl hover:shadow-accent/5"
            >
              <div className="md:col-span-5 relative overflow-hidden">
                <div className="w-full h-56 md:h-full min-h-[240px] relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-dark/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.span
                        className="block text-6xl md:text-7xl font-bold text-light/20"
                        whileHover={{ scale: 1.1 }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </motion.span>
                      <span className="block text-xs text-accent/60 font-mono mt-2">
                        {project.type}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-accent/40" />
                    <span className="w-2 h-2 rounded-full bg-accent/20" />
                    <span className="w-2 h-2 rounded-full bg-accent/30" />
                  </div>
                </div>
              </div>

              <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.type}
                  </span>
                  <span className="text-xs text-muted/50">|</span>
                  <span className="text-xs text-muted/50 font-mono">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-light group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-muted leading-relaxed max-w-lg">
                  {project.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-dark/40 text-xs text-accent/80 border border-accent/10 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors duration-200 group/link"
                  >
                    <span>Lihat Demo</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
