import { ChevronDown } from 'lucide-react';
import type { MainNavigationContent } from '../types/site-settings';

// Renders the second header row beneath the top bar. This row keeps the
// logo on the left and shows the product-category navigation on the right,
// such as Food, Feed, Veterinary, and Cosmetics.
export function MainNavigation({
  logoAlt,
  productLinks,
  variant = 'default',
}: MainNavigationContent & { variant?: 'default' | 'overlay' }) {
  const isOverlay = variant === 'overlay';
  const rootClass = isOverlay
    ? 'border-b border-white/18 bg-transparent'
    : 'border-t border-slate-200 border-b border-slate-200 bg-white';
  const linkClass = isOverlay
    ? 'flex items-center gap-1.5 whitespace-nowrap text-white transition-colors hover:text-white/70'
    : 'flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-sky-400';
  return (
    <div className={rootClass}>
      {/* Controls the full second-row navigation background and the divider lines. */}
      {/* Controls the content width and horizontal padding of the product navigation row. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Controls the row layout:  product links on the right, spacer at the end. */}
        <div className="flex min-h-[56px] items-center justify-between gap-8">
          <div className="hidden w-[180px] shrink-0 lg:block" />

          {/* Controls the product-category text: Food, Feed, Veterinary, Cosmetics. */}
          <nav
            className={`flex flex-1 flex-wrap items-center justify-end pr-1 gap-x-10 gap-y-3 text-[14px] font-semibold uppercase tracking-[0.12em] ${
              isOverlay ? 'text-white' : 'text-slate-800'
            }`}
          >
            {productLinks.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              return (
                <a
                  key={`${item.label}-${item.link}`}
                  href={item.link}
                  className={linkClass}
                >
                  {item.label}
                  {hasChildren ? <ChevronDown className="h-4 w-4 opacity-60" /> : null}
                </a>
              );
            })}
          </nav>

          {/* Small spacer used to nudge the product menu slightly away from the far right edge. */}
          <div className="hidden w-[180px] shrink-0 lg:block" />
        </div>
      </div>
    </div>
  );
}
