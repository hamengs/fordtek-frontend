import { ChevronDown } from 'lucide-react';
import logoImg from '../Assets/Images/blogo.svg';
import type { MainNavigationContent } from '../types/site-settings';

// Renders the second header row beneath the top bar. This row keeps the
// logo on the left and shows the product-category navigation on the right,
// such as Food, Feed, Veterinary, and Cosmetics.
export function MainNavigation({ logoAlt, productLinks }: MainNavigationContent) {
  return (
    <div className="border-t border-slate-300 border-b border-slate-200 bg-white/94 backdrop-blur">
      {/* Controls the full second-row navigation background and the divider lines. */}
      {/* Controls the content width and horizontal padding of the product navigation row. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls the row layout: logo on the left, product links on the right, spacer at the end. */}
        <div className="flex min-h-[74px] items-center justify-between gap-8">
          {/* Controls the logo block on the left side of the product navigation row. */}
          <div className="flex shrink-0 items-center">
            <img src={logoImg} alt={logoAlt} className="h-10 w-auto" />
          </div>

          {/* Controls the product-category text: Food, Feed, Veterinary, Cosmetics. */}
          <nav className="flex flex-1 flex-wrap items-center justify-end pr-1 gap-x-10 gap-y-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-slate-800">
            {productLinks.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              return (
                <a
                  key={`${item.label}-${item.link}`}
                  href={item.link}
                  className="flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-sky-400"
                >
                  {item.label}
                  {hasChildren ? <ChevronDown className="h-4 w-4 opacity-60" /> : null}
                </a>
              );
            })}
          </nav>

          {/* Small spacer used to nudge the product menu slightly away from the far right edge. */}
          <div className="hidden w-[70px] shrink-0 lg:block" />
        </div>
      </div>
    </div>
  );
}
