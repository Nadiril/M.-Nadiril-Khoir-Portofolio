export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/5 animate-fade-in">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <a href="#home" className="text-sm font-semibold text-light">
          Nadiril <span className="text-accent">Dev</span>
        </a>
        <p className="text-xs text-muted/50">
          &copy; {new Date().getFullYear()} Nadiril Khoir. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
