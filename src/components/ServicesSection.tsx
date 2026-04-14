import type { ServicesContent, ServiceItem } from '../types/services';

// Returns the full-width panel and button styles for each service theme.
function getThemeClasses(theme: ServiceItem['theme']) {
  if (theme === 'blue') {
    return {
      panel: 'bg-[#d9eaf8]',
      button: 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
    };
  }

  return {
    panel: 'bg-[#e6f3d6]',
    button: 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white',
  };
}

// ServicesSection renders each service as a full-width color band.
export function ServicesSection({ items }: ServicesContent) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="w-full">
      {items.map((item, index) => {
        const theme = getThemeClasses(item.theme);
        const isRightAligned = index % 2 === 1;

        return (
          <div key={item.title} className={`w-full ${theme.panel}`}>
            <div
              className={`mx-auto flex min-h-[420px] max-w-7xl items-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 ${
                isRightAligned ? 'justify-end text-right' : 'justify-start text-left'
              }`}
            >
              <div className={`max-w-4xl space-y-6 ${isRightAligned ? 'ml-auto' : ''}`}>
                <h2 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
                  {item.title}
                </h2>
                <p className="max-w-3xl text-xl font-medium text-slate-800 sm:text-2xl lg:text-3xl">
                  {item.subtitle}
                </p>
                <a
                  href={item.buttonLink}
                  className={`inline-flex w-fit items-center rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${
                    isRightAligned ? 'ml-auto' : ''
                  } ${theme.button}`}
                >
                  {item.buttonText}
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
