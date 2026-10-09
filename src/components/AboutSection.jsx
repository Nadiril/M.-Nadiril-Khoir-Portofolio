'use client';

import Image from 'next/image';
import { PiGithubLogo, PiLinkedinLogo, PiInstagramLogo } from 'react-icons/pi';
import { useReveal } from '@/lib/animations';

const socials = [
  { icon: PiGithubLogo, label: 'GitHub', href: 'https://github.com/Nadiril' },
  {
    icon: PiLinkedinLogo,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nadirilkhoir',
  },
  {
    icon: PiInstagramLogo,
    label: 'Instagram',
    href: 'https://www.instagram.com/nadirilkhoir?igsh=NnczbXR6aWw3ZGpw',
  },
];

const education = [
  {
    period: '2025 — Sekarang',
    school: 'STIKOM PGRI Banyuwangi',
    desc: 'D3 Manajemen Informatika',
  },
  {
    period: '2023 — 2025',
    school: 'MA. Ibrahimy Secang Kalipuro ',
    desc: 'Ilmu pengetahuan Sosial (IPS)',
  },
];

export default function AboutSection() {
  const sectionRef = useReveal({ start: 'top 78%', stagger: 0.1 });

  return (
    <section ref={sectionRef} id="profile" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-x-16 gap-y-10 md:grid-cols-12">
          <div
            data-reveal
            className="order-1 md:col-span-7 md:col-start-6 md:row-start-1"
          >
            <p className="eyebrow">Profile</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
              M. Nadiril{' '}
              <span className="italic text-accent">Khoir</span>
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted">
              Full Stack Developer
            </p>
          </div>

          <div
            data-reveal
            className="relative order-2 mx-auto w-full max-w-xs sm:max-w-sm md:col-span-5 md:col-start-1 md:row-span-2 md:row-start-1 md:mx-0 md:max-w-md md:self-start"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[2.5rem] bg-accent/15 blur-2xl"
            />
            <figure className="glass relative rounded-[2rem] p-2">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[1.75rem] bg-paper-alt">
                <Image
                  src="/Profile.webp"
                  alt="Portrait of M. Nadiril Khoir"
                  fill
                  sizes="(max-width: 768px) 80vw, 32vw"
                  className="object-cover"
                  preload
                />
              </div>
            </figure>
          </div>

          <div className="order-3 md:col-span-7 md:col-start-6 md:row-start-2">
            <div
              data-reveal
              className="space-y-5 text-base leading-relaxed text-ink-soft md:text-[1.0625rem]"
            >
              <p>
                Saya adalah mahasiswa D3 Manajemen Informatika yang fokus
                membangun website modern menggunakan JavaScript, React, Next.js,
                Tailwind CSS, Express, dan database seperti MySQL/Supabase.
              </p>
              <p>
                Saya percaya website yang baik adalah gabungan antara desain yang
                bersih, performa cepat, dan user experience yang menyenangkan.
                Setiap project saya kerjakan dengan perhatian pada detail kecil
                yang membuat perbedaan besar.
              </p>
            </div>

            <p data-reveal className="eyebrow mt-10">
              Education
            </p>
            <ul data-reveal className="mt-5 border-t border-line">
              {education.map((item) => (
                <li
                  key={item.school}
                  className="flex flex-col gap-1 border-b border-line py-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <span className="font-display text-sm tabular-nums text-accent sm:w-32 sm:shrink-0 sm:whitespace-nowrap">
                    {item.period}
                  </span>
                  <div>
                    <h3 className="text-[0.95rem] font-medium tracking-wide text-ink">
                      {item.school}
                    </h3>
                    {item.desc ? (
                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>

            <div data-reveal className="mt-10 flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors duration-200 hover:border-accent hover:text-accent"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
