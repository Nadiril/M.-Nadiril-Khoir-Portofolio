'use client';

import { useActionState } from 'react';
import {
  PiArrowUpRight,
  PiGithubLogo,
  PiLinkedinLogo,
  PiInstagramLogo,
} from 'react-icons/pi';
import { useReveal } from '@/lib/animations';
import { sendContactMessage } from '@/app/actions/contact';

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

const inputClass =
  'mt-2 min-h-12 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-paper outline-none transition-colors duration-200 placeholder:text-paper/35 focus:border-accent-light focus:bg-white/10';

const labelClass = 'block text-xs uppercase tracking-[0.18em] text-paper/60';

export default function ContactSection() {
  const sectionRef = useReveal({ start: 'top 80%', stagger: 0.07 });
  const [state, formAction, pending] = useActionState(sendContactMessage, {
    status: 'idle',
    message: '',
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-ink py-24 text-paper md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[680px] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="glass-dark mx-auto max-w-3xl rounded-[2rem] px-7 py-14 text-center md:px-14 md:py-16">
          <p data-reveal className="eyebrow text-accent-light">
            Contact
          </p>

          <h2
            data-reveal
            className="mt-6 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-normal leading-[1.08] tracking-[-0.01em] text-paper"
          >
            Ready to make your brand look more{' '}
            <span className="italic text-accent-light">professional?</span>
          </h2>

          <p
            data-reveal
            className="mx-auto mt-5 max-w-md text-base leading-relaxed text-paper/75"
          >
            Let&apos;s discuss your project. No pressure, just a friendly chat
            about what you need.
          </p>

          <form data-reveal action={formAction} className="mt-10 space-y-5 text-left">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="contact-email" className={labelClass}>
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  maxLength={200}
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                maxLength={5000}
                placeholder="Tell me about your project…"
                className={`${inputClass} resize-y py-3`}
              />
            </div>

            <div className="hidden" aria-hidden="true">
              <label htmlFor="contact-company">Company</label>
              <input
                id="contact-company"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-1 sm:flex-row sm:justify-between">
              <button
                type="submit"
                disabled={pending}
                className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {pending ? 'Sending…' : 'Send Message'}
                {!pending ? (
                  <PiArrowUpRight aria-hidden="true" className="h-4 w-4" />
                ) : null}
              </button>

              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${
                  state.status === 'error' ? 'text-red-300' : 'text-accent-light'
                }`}
              >
                {state.message}
              </p>
            </div>
          </form>

          <div
            data-reveal
            className="mt-9 flex flex-col items-center justify-center gap-3"
          >
            <a
              href="https://wa.me/6289508778539"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-200 hover:border-accent-light hover:text-accent-light sm:w-auto"
            >
              Contact Me on WhatsApp
              <PiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>

          <div
            data-reveal
            className="mt-10 flex items-center justify-center gap-3 border-t border-white/10 pt-8"
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-colors duration-200 hover:border-accent-light hover:text-accent-light"
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
