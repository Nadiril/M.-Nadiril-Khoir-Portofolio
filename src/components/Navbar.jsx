'use client';

import { useEffect, useRef, useState } from 'react';
import { PiList, PiX, PiArrowUpRight } from 'react-icons/pi';
import { gsap } from '@/lib/animations';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#profile', label: 'Profile' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('home');
  const menuRef = useRef(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      gsap.set(menu, { height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 });
      return undefined;
    }

    if (isOpen) {
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.35, ease: 'power2.out' }
      );
      gsap.fromTo(
        menu.querySelectorAll('[data-menu-item]'),
        { y: -8, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.04,
          delay: 0.1,
          ease: 'power2.out',
        }
      );
    } else {
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
    }

    return undefined;
  }, [isOpen]);

  return (
    <nav aria-label="Primary" className="fixed inset-x-0 top-0 z-50 glass-nav">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-6 md:h-[72px] lg:px-8">
        <a
          href="#home"
          className="flex items-baseline gap-2 py-3"
          aria-label="M. Nadiril Khoir — home"
        >
          <span className="font-display text-xl leading-none text-ink">Nadiril</span>
          <span className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-accent">
            Dev
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative block px-3.5 py-3 text-sm transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3.5 -bottom-px h-px origin-left bg-accent transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden min-h-11 items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-strong md:inline-flex"
          >
            Start Project
            <PiArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="relative flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-accent-soft md:hidden"
          >
            <span aria-hidden="true" className="relative block h-6 w-6">
              <PiList
                className={`absolute inset-0 h-6 w-6 transition-all duration-200 ease-out ${
                  isOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'
                }`}
              />
              <PiX
                className={`absolute inset-0 h-6 w-6 transition-all duration-200 ease-out ${
                  isOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!isOpen}
        style={{ height: 0 }}
        className="overflow-hidden border-t border-line bg-paper opacity-0 md:hidden"
      >
        <ul className="flex flex-col px-5 py-3 sm:px-6">
          {navLinks.map((link, index) => {
            const isActive = active === link.href.slice(1);
            return (
              <li data-menu-item key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'location' : undefined}
                  className={`flex min-h-12 items-center justify-between border-b border-line text-base font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent' : 'text-ink'
                  }`}
                >
                  {link.label}
                  <span aria-hidden="true" className="text-xs text-muted">
                    0{index + 1}
                  </span>
                </a>
              </li>
            );
          })}
          <li data-menu-item className="pt-5">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-white"
            >
              Start Project
              <PiArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
