import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/home/logo.svg';
import type { TopBarContent } from '../types/site-settings';
import type { NavLink } from '../types/site-settings';

function renderNavAnchor(item: NavLink, className: string) {
  if (item.link.startsWith('/')) {
    return (
      <Link to={item.link} className={className}>
        {item.label}
      </Link>
    );
  }

  return (
    <a href={item.link} className={className}>
      {item.label}
    </a>
  );
}

// Renders the upper navigation row used for company-level links such as
// Home, About Us, Join Us, News, and Contact Us. Items can optionally
// include dropdown children, and the row also keeps the language switcher
// aligned on the right side of the header.
export function TopBar({
  leftLinks,
  rightLinks,
  isEnabled,
  variant = 'default',
}: TopBarContent & { variant?: 'default' | 'overlay' }) {
  if (!isEnabled) {
    return null;
  }

  const isOverlay = variant === 'overlay';
  const rootClass = isOverlay
    ? 'border-b border-slate-200 bg-white text-slate-900'
    : 'bg-white text-slate-900';
  const navClass = isOverlay
    ? 'text-slate-700 transition-colors hover:text-sky-600'
    : 'text-slate-700 transition-colors hover:text-sky-600';
  const utilityClass = isOverlay
    ? 'text-slate-700 transition-colors hover:text-slate-950'
    : 'text-slate-700 transition-colors hover:text-slate-950';

  return (
    <div className={rootClass}>
      {/* Controls the overall top bar background and default text color. */}
      {/* Controls the usable width of the top bar content and the left/right padding. */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8">
        {/* Controls the layout of the top bar: the main menu group and the language switcher. */}
        <div className="flex min-h-[56px] items-center justify-around gap-5">
          {isOverlay ? (
            <Link to="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
              <img src={logoImg} alt="Fordtek logo" className="h-8 w-auto" />
            </Link>
          ) : (
            <Link to="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
              <img src={logoImg} alt="Fordtek logo" className="h-8 w-auto" />
            </Link>
          )}

          {/* Controls the main top bar menu text: Home, About Us, Join Us, News, Contact Us. */}
          <div className="flex flex-wrap items-center justify-end gap-y-1 text-[12.5px] font-semibold tracking-[0.04em]">
            {leftLinks.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isClickable = Boolean(item.link);

              return (
                <div
                  key={`${item.label}-${item.link}`}
                  className={`group relative ${hasChildren ? 'mr-6' : 'mr-7'} last:mr-0`}
                >
                  {/* Controls each visible top-level menu label and its hover color. */}
                  {isClickable && item.link.startsWith('/') ? (
                    <Link
                      to={item.link}
                      className={`flex items-center gap-1 whitespace-nowrap py-2 ${navClass}`}
                    >
                      {item.label}
                      {hasChildren ? <ChevronDown className="h-2.5 w-2.5" /> : null}
                    </Link>
                  ) : isClickable ? (
                    <a
                      href={item.link}
                      className={`flex items-center gap-1 whitespace-nowrap py-2 ${navClass}`}
                    >
                      {item.label}
                      {hasChildren ? <ChevronDown className="h-2.5 w-2.5" /> : null}
                    </a>
                  ) : (
                    <span
                      className={`flex cursor-default items-center gap-1 whitespace-nowrap py-2 ${navClass}`}
                    >
                      {item.label}
                      {hasChildren ? <ChevronDown className="h-2.5 w-2.5" /> : null}
                    </span>
                  )}

                  {hasChildren ? (
                    <div className="invisible absolute left-0 top-full z-40 w-64 translate-y-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {/* Controls the dropdown box appearance and hover reveal behavior. */}
                      <div className="mt-2 rounded-xl border border-slate-200 bg-white p-3 text-slate-900 shadow-2xl">
                        {item.children?.map((child) => (
                          <div key={`${child.label}-${child.link}`}>
                            {renderNavAnchor(
                              child,
                              'block rounded-lg px-3 py-2.5 text-[12px] font-medium tracking-[0.02em] transition-colors hover:bg-slate-100 hover:text-sky-600',
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Controls the right-side utility area, including optional links and the language switch button. */}
          <div className="flex items-center gap-2">
            {rightLinks.map((item) => (
              <a
                key={`${item.label}-${item.link}`}
                href={item.link}
                className={utilityClass}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
