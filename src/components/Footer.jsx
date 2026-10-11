const footerLinks = [
  { href: '#profile', label: 'Profile' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10 text-paper/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:px-6 md:flex-row lg:px-8">
        <a
          href="#home"
          className="flex items-baseline gap-2 py-3.5 text-paper"
          aria-label="M. Nadiril Khoir — home"
        >
          <span className="font-display text-lg leading-none">Nadiril</span>
          <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-accent-light">
            Dev
          </span>
        </a>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm transition-colors duration-200 hover:text-paper"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs text-paper/60">
          &copy; {new Date().getFullYear()} M. Nadiril Khoir. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
