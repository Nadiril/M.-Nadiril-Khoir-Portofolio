'use client';

import { Fragment, useRef } from 'react';
import { PiArrowUpRight, PiArrowDown } from 'react-icons/pi';
import { gsap, EASE, NO_MOTION_QUERY, useIsoLayoutEffect } from '@/lib/animations';

function WordMask({ children }) {
  return (
    <span className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em]">
      <span data-hero-word className="inline-block">
        {children}
      </span>
    </span>
  );
}

const stack = [
  'React Native',
  'Next.js',
  'Tailwind CSS',
  'Express.js',
  'MySQL',
  
];

function splitWords(text) {
  return text.split(' ').map((word, index, words) => (
    <Fragment key={`${word}-${index}`}>
      <WordMask>{word}</WordMask>
      {index < words.length - 1 ? ' ' : null}
    </Fragment>
  ));
}

export default function HeroSection() {
  const ref = useRef(null);

  useIsoLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add(NO_MOTION_QUERY, () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({ defaults: { ease: EASE } });
        timeline
          .from('[data-hero="eyebrow"]', { y: 12, opacity: 0, duration: 0.6 }, 0)
          .from('[data-hero-word]', { yPercent: 115, duration: 0.8, stagger: 0.03 }, 0.1)
          .from('[data-hero="sub"]', { y: 14, opacity: 0, duration: 0.65 }, 0.4)
          .from('[data-hero="stack"]', { y: 12, opacity: 0, duration: 0.5 }, 0.5)
          .from(
            '[data-hero="cta"]',
            { y: 12, opacity: 0, duration: 0.5, stagger: 0.07 },
            0.65
          )
          .from('[data-hero="scroll"]', { opacity: 0, duration: 0.55 }, 0.9);
      }, ref);

      return () => ctx.revert();
    });

    return () => media.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="hero relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32 lg:pt-44"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-16 h-[520px] w-[520px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-[360px] w-[360px] rounded-full bg-accent/5 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div
            data-hero="eyebrow"
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-ink-soft">
              M. Nadiril Khoir
            </span>
            <span aria-hidden="true" className="hidden h-px w-10 bg-line-strong sm:block" />
            <span className="text-xs font-medium uppercase tracking-[0.24em] text-accent">
              Full Stack Developer
            </span>
          </div>

          <h1 className="mt-7 font-display text-[clamp(2.6rem,6.5vw,4.6rem)] font-normal leading-[1.04] tracking-[-0.02em] text-ink">
            {splitWords('Building digital products that deliver')}{' '}
            <span className="italic text-accent">{splitWords('real value.')}</span>
          </h1>

          <p
            data-hero="sub"
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
          Helping businesses grow by developing digital products that are relevant, solution-oriented, and deliver long-term results.
          </p>

          <p
            data-hero="stack"
            className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs uppercase tracking-[0.2em] text-muted"
          >
            {stack.map((item, index) => (
              <Fragment key={item}>
                <span>{item}</span>
                {index < stack.length - 1 ? (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-line-strong" />
                ) : null}
              </Fragment>
            ))}
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              data-hero="cta"
              href="#contact"
              className="group inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-strong sm:w-auto"
            >
              Start a Project
              <PiArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              data-hero="cta"
              href="#work"
              className="inline-flex w-full min-h-12 items-center justify-center gap-2 rounded-full border border-line-strong bg-surface/60 px-7 py-3.5 text-sm font-medium text-ink transition-colors duration-200 hover:border-accent hover:text-accent sm:w-auto"
            >
              View Selected Work
            </a>
          </div>
        </div>

        <div className="mt-14 hidden justify-center md:flex">
          <a
            data-hero="scroll"
            href="#profile"
            className="flex min-h-11 items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted transition-colors duration-200 hover:text-accent"
          >
            <PiArrowDown aria-hidden="true" className="h-4 w-4" />
            Scroll to explore
          </a>
        </div>
      </div>
    </section>
  );
}
