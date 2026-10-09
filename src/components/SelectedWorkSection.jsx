"use client";

import { useEffect } from "react";
import Image from "next/image";
import { PiArrowUpRight } from "react-icons/pi";
import { gsap, useReveal, NO_MOTION_QUERY } from "@/lib/animations";

const projects = [
  {
    title: "Tamuin",
    type: "Web App",
    year: "2026",
    desc: "Aplikasi berbasis web dengan fitur QR code check-in dan dashboard real-time untuk acara dan kunjungan.",
    tech: ["Next.js", "Tailwind CSS", "Supabase"],
    image: "/Project Buku Tamu Digital.webp",
  },
  {
    title: "E-commerce Jajannya Mimitha",
    type: "Business Website",
    year: "2026",
    desc: "E-commerce UMKM kuliner dengan sistem pemesanan online, manajemen menu dinamis, dan integrasi pembayaran digital.",
    tech: ["Next.js", "Tailwind CSS", "MySQL"],
    image: "/Project UMKM.webp",
    link: "https://jajannya-mimitha.vercel.app",
  },
  {
    title: "Portofolio Habib Rahman",
    type: "Platform",
    year: "2026",
    desc: "Website portofolio pribadi yang menampilkan proyek, keterampilan, dan pengalaman profesional dengan desain responsif dan interaktif.",
    tech: ["HTML", "CSS"],
    image: "/Project Portofolio Habib Rahman.webp",
  },
];

function ProjectCard({ project, index, featured = false }) {
  const interactive = Boolean(project.link);
  const Wrapper = interactive ? "a" : "article";
  const linkProps = interactive
    ? { href: project.link, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const media = (
    <div
      className={`relative overflow-hidden bg-paper ${
        featured
          ? "aspect-[16/10] md:col-span-7 md:aspect-auto md:min-h-[400px]"
          : "aspect-[16/10]"
      }`}
    >
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        fill
        sizes={
          featured
            ? "(max-width: 768px) 100vw, 58vw"
            : "(max-width: 768px) 100vw, 46vw"
        }
        className="object-cover"
        data-project-image={interactive ? "" : undefined}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent"
      />
    </div>
  );

  const body = (
    <div
      className={`flex flex-col justify-center p-7 md:p-9 ${
        featured ? "md:col-span-5" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.2em]">
        <span className="font-display text-sm normal-case tracking-normal text-accent">
          0{index + 1}
        </span>
        <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
        <span className="text-ink-soft">{project.type}</span>
        <span aria-hidden="true" className="h-3 w-px bg-line-strong" />
        <span className="text-muted">{project.year}</span>
      </div>

      <h3
        className={`mt-4 font-display text-2xl leading-tight text-ink transition-colors duration-200 md:text-[1.75rem] ${
          interactive ? "group-hover:text-accent" : ""
        }`}
      >
        {project.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {project.desc}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-muted"
          >
            {tech}
          </li>
        ))}
      </ul>

      {interactive && (
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent">
          View live site
          <PiArrowUpRight
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      )}
    </div>
  );

  return (
    <div data-reveal className={featured ? "md:col-span-12" : "h-full"}>
      <Wrapper
        {...linkProps}
        data-project-hover={interactive ? "" : undefined}
        className={`group h-full overflow-hidden rounded-[1.75rem] border border-line bg-surface transition-[border-color,box-shadow] duration-300 ${
          featured ? "grid md:grid-cols-12" : "block"
        } ${
          interactive
            ? "hover:border-accent/40 hover:shadow-[0_24px_48px_-32px_rgba(21,23,26,0.45)] focus-within:border-accent"
            : ""
        }`}
      >
        {media}
        {body}
      </Wrapper>
    </div>
  );
}

export default function SelectedWorkSection() {
  const sectionRef = useReveal({ start: "top 78%", stagger: 0.09 });

  useEffect(() => {
    const scope = sectionRef.current;
    if (!scope) return undefined;

    const media = gsap.matchMedia();

    media.add(
      `${NO_MOTION_QUERY} and (hover: hover) and (pointer: fine)`,
      () => {
        const cards = scope.querySelectorAll("[data-project-hover]");
        const cleanups = [];

        cards.forEach((card) => {
          const image = card.querySelector("[data-project-image]");
          const lift = gsap.quickTo(card, "y", {
            duration: 0.45,
            ease: "power2.out",
          });
          const zoom = (value) =>
            image &&
            gsap.to(image, {
              scale: value,
              duration: 0.7,
              ease: "power2.out",
              overwrite: "auto",
            });

          const onEnter = () => {
            lift(-6);
            zoom(1.05);
          };
          const onLeave = () => {
            lift(0);
            zoom(1);
          };

          card.addEventListener("pointerenter", onEnter);
          card.addEventListener("pointerleave", onLeave);
          cleanups.push(() => {
            card.removeEventListener("pointerenter", onEnter);
            card.removeEventListener("pointerleave", onLeave);
          });
        });

        return () => cleanups.forEach((cleanup) => cleanup());
      },
    );

    return () => media.revert();
  }, [sectionRef]);

  const [featured, ...rest] = projects;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="border-y border-line bg-paper-alt py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div data-reveal className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow">Selected Work</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
              Recent <span className="italic text-accent">projects</span>
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-muted md:col-span-5 md:text-right">
            3+ projects shipped with a modern tech stack, clean design, and a
            focus on performance.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          <ProjectCard project={featured} index={0} featured />

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
