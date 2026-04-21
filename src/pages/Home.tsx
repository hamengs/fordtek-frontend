import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  topBarFallback,
} from '../content/homePage';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { NewsSection } from '../components/NewsSection';
import { ServicesSection } from '../components/ServicesSection';
import { TopBar } from '../components/TopBar';
import { useHomePageData } from '../hooks/useHomePageData';

export default function Home() {
  const { footerContent, heroContent, newsContent, servicesContent } = useHomePageData();
  const [isNearTop, setIsNearTop] = useState(true);
  const [isFloatingHeaderVisible, setIsFloatingHeaderVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const nearTop = currentScrollY < 56;
      const scrollingUp = currentScrollY < lastScrollY;

      setIsNearTop(nearTop);

      if (nearTop) {
        setIsFloatingHeaderVisible(false);
      } else if (scrollingUp && currentScrollY > 160) {
        setIsFloatingHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsFloatingHeaderVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-transform duration-300 ${
          isFloatingHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <TopBar {...topBarFallback} />
      </header>

      <div className="relative">
        <header
          className={`absolute inset-x-0 top-0 z-40 w-full transition-opacity duration-300 ${
            isNearTop ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <TopBar {...topBarFallback} variant="overlay" />
        </header>

        <Hero
          title={heroContent.title}
          description={heroContent.description}
          buttonText={heroContent.buttonText}
          buttonLink={heroContent.buttonLink}
          imageUrl={heroContent.imageUrl}
          imageAlt={heroContent.imageAlt}
        />
      </div>

      <aside className="fixed right-0 top-[132px] z-30 hidden xl:block">
        <div className="group w-[344px] translate-x-[344px] transition-transform duration-300 hover:translate-x-0 focus-within:translate-x-0">
          <div className="relative">
            <div className="absolute left-0 top-16 z-10 flex h-24 w-6 -translate-x-full items-center justify-center rounded-l-2xl border border-r-0 border-slate-200/80 bg-white/92 shadow-[0_16px_40px_rgba(15,23,42,0.10)] backdrop-blur-sm">
              <span className="origin-center whitespace-nowrap text-xs font-bold uppercase tracking-[0.14em] text-slate-500 [backface-visibility:hidden] [transform:translateZ(0)_rotate(-90deg)]">
                News
              </span>
            </div>

            <div className="overflow-hidden rounded-l-[2rem] border border-r-0 border-slate-200/80 bg-white/96 shadow-[0_22px_55px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              <div className="w-[320px]">
                <div className="border-b border-slate-200/80 px-5 py-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                    Floating News
                  </p>
                  <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-slate-950">
                    Preview latest updates
                  </p>
                </div>

                <div className="max-h-[70vh] overflow-y-auto px-5 py-3">
                  {newsContent.items.slice(0, 5).map((item) => (
                    <a
                      key={item.slug}
                      href={`/news/${item.slug}`}
                      className="block border-b border-slate-200/80 py-4 last:border-b-0"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                        {item.publishedDate}
                      </p>
                      <p className="mt-2 text-base font-semibold leading-snug text-slate-950">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {item.summary}
                      </p>
                      <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-sky-700 transition-colors hover:text-slate-950">
                        Read more
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      <NewsSection {...newsContent} />

      <ServicesSection {...servicesContent} />
      <Footer {...footerContent} />
    </div>
  );
}
