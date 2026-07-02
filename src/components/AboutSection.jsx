'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerFast } from '@/lib/animations';

const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS', 'Express.js', 'MySQL', ];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="about"
      className="py-16 md:py-20"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div className="md:col-span-5" variants={fadeInLeft}>
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-xl" />
              <motion.div
                className="relative aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-accent/20 to-card border border-accent/10 overflow-hidden flex items-center justify-center"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/Profile.webp"
                  alt="Nadiril Khoir"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  preload
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-dark/60 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="md:col-span-7" variants={staggerContainer}>
            <motion.p
              variants={fadeInUp}
              className="text-accent text-sm font-semibold tracking-widest uppercase mb-4"
            >
              About
            </motion.p>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-bold text-light tracking-tight"
            >
              M. Nadiril{' '}
              <span className="text-accent">Khoir</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-2 text-base text-muted font-medium"
            >
              Full Stack Developer
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mt-6 space-y-4 text-muted leading-relaxed"
            >
              <p>
                Saya adalah mahasiswa D3 Manajemen Informatika yang fokus
                membangun website modern menggunakan JavaScript, React, Next.js,
                Tailwind CSS, Express, dan database seperti MySQL/Supabase.
              </p>
              <p>
                Saya percaya website yang baik adalah gabungan antara desain
                yang bersih, performa cepat, dan user experience yang
                menyenangkan. Setiap project saya kerjakan dengan perhatian pada
                detail kecil yang membuat perbedaan besar.
              </p>
            </motion.div>
            <motion.div
              variants={staggerFast}
              className="mt-6 flex flex-wrap gap-2.5"
            >
              {skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={fadeInUp}
                  className="px-3.5 py-1.5 rounded-full bg-card border border-white/5 text-xs text-accent font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              variants={staggerFast}
              className="mt-6 flex items-center gap-4"
            >
              {[
                { icon: FiGithub, href: 'https://github.com/Nadiril' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/nadirilkhoir' },
                { icon: FiInstagram, href: 'https://www.instagram.com/nadirilkhoir?igsh=NnczbXR6aWw3ZGpw' },
              ].map(({ icon: Icon, href }) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-card border border-white/5 flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
