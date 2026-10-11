"use client";

import { useReveal } from "@/lib/animations";
import ProfileCarousel from "@/components/ProfileCarousel";

const education = [
  {
    period: "2025 — Sekarang",
    school: "STIKOM PGRI Banyuwangi",
    desc: "D3 Manajemen Informatika",
  },
  {
    period: "2023 — 2025",
    school: "MA. Ibrahimy Secang Kalipuro ",
    desc: "Ilmu pengetahuan Sosial (IPS)",
  },
];

export default function AboutSection() {
  const sectionRef = useReveal({ start: "top 78%", stagger: 0.1 });

  return (
    <section ref={sectionRef} id="profile" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-12 lg:gap-x-16">
          <div
            data-reveal
            className="order-1 md:col-span-7 md:col-start-6 md:row-start-1"
          >
            <p className="eyebrow">Profile</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
              M. Nadiril <span className="italic text-accent">Khoir</span>
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
            <ProfileCarousel />
          </div>

          <div className="order-3 md:col-span-7 md:col-start-6 md:row-start-2">
            <div
              data-reveal
              className="max-w-2xl space-y-5 text-base leading-8 text-ink-soft md:text-[1.0625rem] md:leading-[1.85]"
            >
              <p className="border-l-2 border-accent/40 pl-5 sm:pl-6">
                Saya adalah mahasiswa Manajemen Informatika yang berdedikasi
                dalam pengembangan web secara menyeluruh (full-stack). Saya
                menjembatani kebutuhan desain antarmuka yang modern dan nyaman
                digunakan dengan sistem pengelolaan data belakang layar yang
                aman serta efisien. Saya fokus membangun solusi digital yang
                tidak hanya estetis, tetapi juga memiliki performa tinggi dan
                siap pakai.
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
          </div>
        </div>
      </div>
    </section>
  );
}
