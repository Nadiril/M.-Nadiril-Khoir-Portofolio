'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleIn } from '@/lib/animations';

const services = [
  {
    number: '01',
    title: 'Website Landing Page',
    desc: 'Landing page modern dan responsif untuk produk, jasa, atau personal brand. Optimasi konversi dan desain yang meyakinkan.',
  },
  {
    number: '02',
    title: 'Portfolio Website',
    desc: 'Website portfolio profesional dengan bento grid, case study layout, atau gallery visual, cocok untuk kreator dan pekerja kreatif.',
  },
  {
    number: '03',
    title: 'Business Website',
    desc: 'Website bisnis dengan halaman profil perusahaan, layanan, kontak, dan integrasi CMS untuk update konten mandiri.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id="services"
      className="py-16 md:py-20"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          className="max-w-xl"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            Services
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-light tracking-tight">
            What I can build{' '}
            <span className="text-accent">for you</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-10 grid md:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -4 }}
              className="group relative bg-card rounded-3xl border border-white/5 p-8 hover:border-accent/20 transition-colors duration-300 hover:shadow-lg hover:shadow-accent/5"
            >
              <span className="text-4xl font-bold text-accent/20 group-hover:text-accent/40 transition-colors duration-300">
                {service.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-light">
                {service.title}
              </h3>
              <p className="mt-3 text-base text-muted leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
