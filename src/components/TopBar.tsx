import { ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
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
  languageText,
  languageIconText,
  isEnabled,
  variant = 'default',
}: TopBarContent & { variant?: 'default' | 'overlay' }) {
  if (!isEnabled) {
    return null;
  }

  const isOverlay = variant === 'overlay';
  const rootClass = isOverlay
    ? 'border-b border-slate-200/70 bg-white/96 text-slate-900 backdrop-blur'
    : 'bg-white text-slate-900';
  const navClass = isOverlay
    ? 'text-slate-900 transition-colors hover:text-sky-500'
    : 'text-slate-900 transition-colors hover:text-sky-400';
  const utilityClass = isOverlay
    ? 'whitespace-nowrap text-slate-900 transition-colors hover:text-sky-500'
    : 'whitespace-nowrap text-slate-900 transition-colors hover:text-black';
  const languageClass = isOverlay
    ? 'flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-300 px-3 py-1.5 text-slate-900 transition-colors hover:border-slate-500'
    : 'flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-400 px-3 py-1.5 text-slate-900 transition-colors hover:border-slate-700 hover:text-black';

  return (
    <div className={rootClass}>
      {/* Controls the overall top bar background and default text color. */}
      {/* Controls the usable width of the top bar content and the left/right padding. */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-8">
        {/* Controls the layout of the top bar: the main menu group and the language switcher. */}
        <div className="flex min-h-12 items-center justify-between gap-7">
          {isOverlay ? (
            <Link to="/" className="flex shrink-0 items-center" aria-label="Go to homepage">
              <img src={logoImg} alt="Fordtek logo" className="h-10 w-auto" />
            </Link>
          ) : (
            <div className="hidden lg:block" />
          )}

          {/* Controls the main top bar menu text: Home, About Us, Join Us, News, Contact Us. */}
          <div className="flex flex-wrap items-center justify-end gap-y-2 text-[12px] font-semibold uppercase tracking-[0.14em]">
            {leftLinks.map((item) => {
              const hasChildren = Boolean(item.children?.length);

              return (
                <div
                  key={`${item.label}-${item.link}`}
                  className={`group relative ${hasChildren ? 'mr-10' : 'mr-15'} last:mr-0`}
                >
                  {/* Controls each visible top-level menu label and its hover color. */}
                  {item.link.startsWith('/') ? (
                    <Link
                      to={item.link}
                      className={`flex items-center gap-1.5 whitespace-nowrap py-3 ${navClass}`}
                    >
                      {item.label}
                      {hasChildren ? <ChevronDown className="h-3.5 w-3.5" /> : null}
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      className={`flex items-center gap-1.5 whitespace-nowrap py-3 ${navClass}`}
                    >
                      {item.label}
                      {hasChildren ? <ChevronDown className="h-3.5 w-3.5" /> : null}
                    </a>
                  )}

                  {hasChildren ? (
                    <div className="invisible absolute left-0 top-full z-40 w-64 translate-y-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                      {/* Controls the dropdown box appearance and hover reveal behavior. */}
                      <div className="mt-2 rounded-xl border border-slate-200 bg-white p-3 text-slate-900 shadow-2xl">
                        {item.children?.map((child) => (
                          <div key={`${child.label}-${child.link}`}>
                            {renderNavAnchor(
                              child,
                              'block rounded-lg px-3 py-2.5 text-[13px] font-medium tracking-[0.04em] transition-colors hover:bg-slate-100',
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
          <div className="flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.14em]">
            {rightLinks.map((item) => (
              <a
                key={`${item.label}-${item.link}`}
                href={item.link}
                className={utilityClass}
              >
                {item.label}
              </a>
            ))}

            {/* Controls the language switch button shown as EN plus the globe icon. */}
            <button
              type="button"
              className={languageClass}
            >
              <span>{languageText}</span>
              <Globe className="h-3.5 w-3.5" />
              <span className="sr-only">{languageIconText}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
