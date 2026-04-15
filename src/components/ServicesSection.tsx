import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { ServicesContent, ServiceItem } from '../types/services';

function getThemeClasses(theme: ServiceItem['theme']) {
  if (theme === 'blue') {
    return {
      panel: 'bg-[#d7ebf6]',
      accent: 'bg-sky-100/80',
      eyebrow: 'text-sky-900/70',
      button:
        'border-slate-900/70 bg-white/80 text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white',
      ghost: 'text-sky-950/8',
      rule: 'bg-sky-950/14',
    };
  }

  return {
    panel: 'bg-[#e2f0d1]',
    accent: 'bg-lime-100/75',
    eyebrow: 'text-lime-950/70',
    button:
      'border-slate-900/70 bg-white/80 text-slate-900 hover:border-slate-900 hover:bg-slate-900 hover:text-white',
    ghost: 'text-lime-950/8',
    rule: 'bg-lime-950/14',
  };
}

export function ServicesSection({ items }: ServicesContent) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="w-full bg-white">
      {items.map((item, index) => {
        const theme = getThemeClasses(item.theme);
        const isRightAligned = index % 2 === 1;

        return (
          <div key={item.title} className={`w-full overflow-hidden ${theme.panel}`}>
            <motion.a
              href={item.buttonLink}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className={`group relative mx-auto flex min-h-[360px] max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:min-h-[420px] lg:px-16 lg:py-24 ${
                isRightAligned ? 'text-right lg:items-end' : 'text-left lg:items-start'
              }`}
            >
              <div
                aria-hidden="true"
                className={`pointer-events-none absolute top-1/2 hidden -translate-y-1/2 select-none text-[120px] font-semibold uppercase tracking-[-0.08em] leading-none sm:text-[160px] lg:block lg:text-[220px] ${theme.ghost} ${
                  isRightAligned ? 'left-12' : 'right-12'
                }`}
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
                <h2 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-6xl lg:text-8xl">
                  {item.title}
                </h2>
                <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-800 sm:text-2xl lg:text-[2rem] lg:leading-[1.35]">
                  {item.subtitle}
                </p>
                <span className="mt-8 max-w-xl text-sm leading-7 text-slate-600 sm:text-[15px] lg:text-base">
                  Explore certified ingredients, dependable sourcing and a product portfolio built for global nutrition and chemical supply.
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
    </section>
  );
}
