'use client';

import { useReveal } from '@/lib/animations';

const groups = [
  {
    name: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    name: 'Backend',
    items: ['Express.js'],
  },
  {
    name: 'Database',
    items: ['MySQL', 'Supabase'],
  },
];

export default function SkillsSection() {
  const sectionRef = useReveal({ start: 'top 78%', stagger: 0.08 });

  return (
    <section ref={sectionRef} id="skills" className="border-t border-line py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <div data-reveal className="md:col-span-4">
            <p className="eyebrow">Technical Skills</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,4vw,3rem)] font-normal leading-[1.08] tracking-[-0.01em] text-ink">
              The tools I{' '}
              <span className="italic text-accent">build with</span>
            </h2>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-ink-soft">
              Fokus pada JavaScript modern dan ekosistem React — dari antarmuka
              sampai data, dipilih karena stabil dan cepat dikembangkan.
            </p>
          </div>

          <div className="md:col-span-8">
            {groups.map((group, index) => (
              <div
                key={group.name}
                data-reveal
                className="flex flex-col gap-5 border-t border-line py-7 sm:flex-row sm:items-start sm:gap-10 [&:last-child]:border-b"
              >
                <div className="shrink-0 sm:w-44">
                  <span className="font-display text-sm text-accent">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1.5 text-xs font-medium uppercase tracking-[0.22em] text-ink">
                    {group.name}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
