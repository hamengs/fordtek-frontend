import type { ServicesContent, ServiceItem } from '../types/services';

// Returns the paired background and button colors for each service theme.
function getThemeClasses(theme: ServiceItem['theme']) {
  if (theme === 'blue') {
    return {
      panel: 'bg-[#d9eaf8]',
      button: 'bg-[#42a5f5] hover:bg-[#2196f3]',
    };
  }

  return {
    panel: 'bg-[#e6f3d6]',
    button: 'bg-[#8bc34a] hover:bg-[#7cb342]',
  };
}

// ServicesSection renders the four homepage service blocks with alternating
// image/text layouts and one final overlay-style panel.
export function ServicesSection({ items }: ServicesContent) {
  const [first, second, third, fourth] = items;

  if (items.length < 4) {
    return null;
  }

  const firstTheme = getThemeClasses(first.theme);
  const secondTheme = getThemeClasses(second.theme);
  const thirdTheme = getThemeClasses(third.theme);
  const fourthTheme = getThemeClasses(fourth.theme);

  return (
    // Controls the overall width and spacing of the services area.
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      {/* Controls the alternating two-column layout for the first three service items. */}
      <div className="overflow-hidden bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className={`min-h-[420px] p-12 md:p-20 flex flex-col justify-center ${firstTheme.panel}`}>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">{first.title}</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-10">{first.subtitle}</h3>
            <a
              href={first.buttonLink}
              className={`cursor-pointer w-fit text-white px-8 py-3 rounded-full flex items-center font-bold text-sm transition-all shadow-md hover:shadow-lg ${firstTheme.button}`}
            >
              {first.buttonText} <span className="ml-3 text-lg">→</span>
            </a>
          </div>
          <div className="min-h-[420px] overflow-hidden bg-white">
            <img src={first.imageUrl} alt={first.imageAlt} className="w-full h-full object-cover" />
          </div>

          <div className="min-h-[420px] overflow-hidden bg-white md:order-3">
            <img src={second.imageUrl} alt={second.imageAlt} className="w-full h-full object-cover" />
          </div>
          <div className={`min-h-[420px] p-12 md:p-20 flex flex-col justify-center md:order-4 ${secondTheme.panel}`}>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">{second.title}</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-10">{second.subtitle}</h3>
            <a
              href={second.buttonLink}
              className={`cursor-pointer w-fit text-white px-8 py-3 rounded-full flex items-center font-bold text-sm transition-all shadow-md hover:shadow-lg ${secondTheme.button}`}
            >
              {second.buttonText} <span className="ml-3 text-lg">→</span>
            </a>
          </div>

          <div className={`min-h-[420px] p-12 md:p-20 flex flex-col justify-center md:order-5 ${thirdTheme.panel}`}>
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">{third.title}</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-10">{third.subtitle}</h3>
            <a
              href={third.buttonLink}
              className={`cursor-pointer w-fit text-white px-8 py-3 rounded-full flex items-center font-bold text-sm transition-all shadow-md hover:shadow-lg ${thirdTheme.button}`}
            >
              {third.buttonText} <span className="ml-3 text-lg">→</span>
            </a>
          </div>
          <div className="min-h-[420px] overflow-hidden bg-white md:order-6">
            <img src={third.imageUrl} alt={third.imageAlt} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Controls the final wide service block that uses text over an image. */}
        <div className="relative min-h-[420px] overflow-hidden bg-white">
          <img src={fourth.imageUrl} alt={fourth.imageAlt} className="w-full h-full object-cover object-center" />
          <div className="absolute inset-y-0 left-0 w-full md:w-[42%] bg-white/70 backdrop-blur-[1px] p-12 md:p-20 flex flex-col justify-center">
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">{fourth.title}</h2>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-800 mb-10">{fourth.subtitle}</h3>
            <a
              href={fourth.buttonLink}
              className={`cursor-pointer w-fit text-white px-8 py-3 rounded-full flex items-center font-bold text-sm transition-all shadow-md hover:shadow-lg ${fourthTheme.button}`}
            >
              {fourth.buttonText} <span className="ml-3 text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
