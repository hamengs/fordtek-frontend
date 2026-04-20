import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { ServicesContent, ServiceItem } from '../types/services';

function getThemeClasses(theme: ServiceItem['theme']) {
  if (theme === 'blue') {
    return {
      panel: 'bg-[#f8fafc]',
      accent: 'bg-sky-100',
      eyebrow: 'text-sky-900/70',
      button:
        'border-slate-300 bg-white text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white',
      ghost: 'text-slate-950',
      rule: 'bg-slate-300',
    };
  }

  return {
    panel: 'bg-[#f8fafc]',
    accent: 'bg-lime-100',
    eyebrow: 'text-lime-950/70',
    button:
      'border-slate-300 bg-white text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white',
    ghost: 'text-slate-950',
    rule: 'bg-slate-300',
  };
}

export function ServicesSection({ items }: ServicesContent) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl space-y-5 px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl pb-3">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            Product Line
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
            Four focused product lines with clear descriptions up front.
          </h2>
        </div>
        {items.map((item, index) => {
          const theme = getThemeClasses(item.theme);
          const isRightAligned = index % 2 === 1;

          return (
            <div
              key={item.title}
              className={`w-full overflow-hidden rounded-[2.5rem] border border-slate-200/80 ${theme.panel} shadow-[0_18px_45px_rgba(15,23,42,0.05)]`}
            >
              <motion.a
                href={item.buttonLink}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`group relative flex min-h-[320px] flex-col justify-center px-6 py-14 sm:px-10 sm:py-16 lg:min-h-[360px] lg:px-14 lg:py-18 ${
                  isRightAligned ? 'text-right lg:items-end' : 'text-left lg:items-start'
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none text-[88px] tracking-[0.01em] font-semibold uppercase tracking-[-0.08em] leading-none opacity-[0.3] sm:text-[118px] lg:block lg:text-[140px] ${theme.ghost} ${
                    isRightAligned ? 'left-12' : 'right-12'
                  }`}
                  style={{ textShadow: '0 10px 10px rgba(15, 23, 42, 0.5)' }}
                >
                  {item.title}
                </div>

                <div
                  className={`relative z-10 flex max-w-3xl flex-col ${
                    isRightAligned ? 'lg:items-end' : 'lg:items-start'
                  }`}
                >
                  <div className={`mb-5 inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] ${theme.accent} ${theme.eyebrow}`}>
                    Product line
                  </div>
                  <div className="mb-6 flex items-center gap-4 text-slate-500">
                    <span className="text-sm font-medium tabular-nums">0{index + 1}</span>
                    <span className={`h-px w-16 transition-all duration-300 group-hover:w-24 ${theme.rule}`} />
                  </div>
                  {/* <h2
                    className="max-w-3xl text-4xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-5xl lg:text-7xl"
                    style={{ textShadow: '0 8px 24px rgba(148, 163, 184, 0.35)' }}
                  >
                    {item.title}
                  </h2> */}
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-800 sm:text-xl lg:text-[1.7rem] lg:leading-[1.35]">
                    {item.subtitle}
                  </p>
                  <span className="mt-6 max-w-2xl text-sm leading-7 text-slate-800 sm:text-[15px] lg:text-base">
                    {item.description}
                  </span>
                  <span
                    className={`mt-8 inline-flex w-fit items-center gap-3 rounded-full border px-6 py-3 text-sm font-semibold transition-all duration-300 group-hover:gap-4 ${theme.button}`}
                  >
                    {item.buttonText}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </motion.a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
