'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Kami diskusi kebutuhan, target audiens, dan tujuan website kamu. Saya akan memahami brand dan visi kamu.',
  },
  {
    number: '02',
    title: 'Design',
    desc: 'Saya buat wireframe dan desain visual yang sesuai dengan identitas brand kamu. Fokus pada user experience.',
  },
  {
    number: '03',
    title: 'Build',
    desc: 'Mulai pengembangan dengan teknologi modern. Saya kode setiap halaman dengan performa dan aksesibilitas.',
  },
  {
    number: '04',
    title: 'Launch',
    desc: 'Deploy ke production, testing akhir, dan serah terima. Kamu siap tampil profesional secara online.',
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      className="py-16 md:py-20"
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-accent text-sm font-semibold tracking-widest uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-light tracking-tight">
            From idea to{' '}
            <span className="text-accent">launch</span>
          </h2>
          <p className="mt-4 text-muted text-sm max-w-md mx-auto">
            Proses sederhana dan transparan dari diskusi hingga website siap digunakan.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="mt-10 grid md:grid-cols-4 gap-6 relative"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative"
            >
              <div className="bg-card rounded-3xl border border-white/5 p-8 h-full hover:border-accent/20 transition-colors duration-300">
                <span className="text-5xl font-bold text-accent/15">
                  {step.number}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-light">
                  {step.title}
                </h3>
                <p className="mt-3 text-base text-muted leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
