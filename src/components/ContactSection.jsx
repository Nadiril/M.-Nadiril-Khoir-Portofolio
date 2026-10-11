'use client';

import { useActionState } from 'react';
import {
  PiArrowUpRight,
  PiEnvelopeSimple,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiWhatsappLogo,
} from 'react-icons/pi';
import { useReveal } from '@/lib/animations';
import { sendContactMessage } from '@/app/actions/contact';

const accounts = [
  {
    icon: PiEnvelopeSimple,
    label: 'Email',
    value: 'mnadirilkhoir@gmail.com',
    href: 'mailto:mnadirilkhoir@gmail.com',
  },
  {
    icon: PiWhatsappLogo,
    label: 'WhatsApp',
    value: '+62 895-0877-8539',
    href: 'https://wa.me/6289508778539',
  },
  {
    icon: PiInstagramLogo,
    label: 'Instagram',
    value: '@mnadirilkhoir',
    href: 'https://www.instagram.com/mnadirilkhoir?igsh=NnczbXR6aWw3ZGpw',
  },
  {
    icon: PiGithubLogo,
    label: 'GitHub',
    value: 'github.com/Nadiril',
    href: 'https://github.com/Nadiril',
  },
  {
    icon: PiLinkedinLogo,
    label: 'LinkedIn',
    value: 'in/nadirilkhoir',
    href: 'https://www.linkedin.com/in/nadirilkhoir',
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
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5 lg:self-start">
            <p data-reveal className="eyebrow text-accent-light">
              Contact
            </p>

            <h2
              data-reveal
              className="mt-6 font-display text-[clamp(2rem,3.4vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.01em] text-paper"
            >
              Ready to make your brand look more{' '}
              <span className="italic text-accent-light">professional?</span>
            </h2>

            <p
              data-reveal
              className="mt-5 max-w-xl text-base leading-relaxed text-paper/75"
            >
              Let&apos;s discuss your project. No pressure, just a friendly
              chat about what you need — or reach me directly on any account
              below.
            </p>

            <ul data-reveal className="mt-9 border-t border-white/10">
              {accounts.map(({ icon: Icon, label, value, href }) => {
                const Wrapper = href ? 'a' : 'div';
                const external = Boolean(href) && !href.startsWith('mailto:');
                const linkProps = href
                  ? {
                      href,
                      target: external ? '_blank' : undefined,
                      rel: external ? 'noopener noreferrer' : undefined,
                    }
                  : {};

                return (
                  <li key={label} className="border-b border-white/10">
                    <Wrapper
                      {...linkProps}
                      className="group flex items-center gap-3 py-4 sm:gap-4"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-paper/70 transition-colors duration-200 group-hover:border-accent-light group-hover:text-accent-light">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[0.7rem] uppercase tracking-[0.2em] text-paper/50">
                          {label}
                        </span>
                        <span className="mt-1 block truncate text-sm text-paper transition-colors duration-200 group-hover:text-accent-light">
                          {value}
                        </span>
                      </span>

                      <PiArrowUpRight
                        aria-hidden="true"
                        className="h-4 w-4 shrink-0 text-paper/40 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-light"
                      />
                    </Wrapper>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-7 lg:self-start">
            <div
              data-reveal
              className="glass-dark rounded-[2rem] px-6 py-8 md:px-9 md:py-10"
            >
              <h3 className="font-display text-2xl leading-tight text-paper">
                Send me an <span className="italic text-accent-light">email</span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/60">
                Fill in the form and I&apos;ll get back to you as soon as
                possible — usually within a day.
              </p>

              <form action={formAction} className="mt-7 space-y-5 text-left">
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

                <div className="flex flex-col items-start gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
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
                      state.status === 'error'
                        ? 'text-red-300'
                        : 'text-accent-light'
                    }`}
                  >
                    {state.message}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
