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
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl space-y-4 px-6 sm:px-10 lg:px-16">
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
              className={`w-full overflow-hidden rounded-[1.75rem] border border-slate-200/80 ${theme.panel} shadow-[0_14px_34px_rgba(15,23,42,0.045)]`}
            >
              <motion.a
                href={item.buttonLink}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className={`group relative flex min-h-[220px] flex-col justify-center px-6 py-10 sm:px-10 sm:py-12 lg:min-h-[250px] lg:px-12 lg:py-12 ${
                  isRightAligned ? 'text-right lg:items-end' : 'text-left lg:items-start'
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`pointer-events-none hidden select-none absolute top-1/2 hidden -translate-y-1/2
                    flex flex-col text-[72px] font-semibold uppercase tracking-[-0.06em] leading-none opacity-[0.16] sm:text-[94px] lg:flex lg:text-[104px] ${theme.ghost} ${
                    isRightAligned ? 'left-10' : 'right-10'
                  }`}
                  style={{ textShadow: '0 10px 10px rgba(15, 23, 42, 0.5)' }}
                >
                  <div className='flex flex-col items-center'>
                    <div>
                      {item.title}
                    </div>
                    <p className='text-[30px] tracking-[0.08em]'>
                      {item.subtitle}
                    </p>
                  </div>

                </div>

                <div
                  className={`relative z-10 flex max-w-2xl flex-col ${
                    isRightAligned ? 'lg:items-end' : 'lg:items-start'
                  }`}
                >
                  <div className={`mb-4 inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] ${theme.accent} ${theme.eyebrow}`}>
                    Product line
                  </div>
                  <div className="mb-4 flex items-center gap-4 text-slate-500">
                    <span className="text-sm font-medium tabular-nums">0{index + 1}</span>
                    <span className={`h-px w-16 transition-all duration-300 group-hover:w-24 ${theme.rule}`} />
                  </div>

                  <span className="mt-3 max-w-[32rem] text-sm leading-7 text-slate-800 sm:text-[15px] lg:text-base">
                    {item.description}
                  </span>
                  <span
                    className={`mt-6 inline-flex w-fit items-center gap-3 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 group-hover:gap-4 ${theme.button}`}
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
