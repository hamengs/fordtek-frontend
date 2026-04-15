import { useEffect, useState } from 'react';
import {
  mainNavigationFallback,
  topBarFallback,
} from '../content/homePage';
import { Footer } from '../components/Footer';
import { Hero } from '../components/Hero';
import { MainNavigation } from '../components/MainNavigation';
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
        className={`fixed inset-x-0 top-0 z-50 w-full bg-white/96 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur transition-transform duration-300 ${
          isFloatingHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <TopBar {...topBarFallback} />
        <MainNavigation {...mainNavigationFallback} />
      </header>

      <div className="relative">
        <header
          className={`absolute inset-x-0 top-0 z-40 w-full transition-opacity duration-300 ${
            isNearTop ? 'opacity-100' : 'pointer-events-none opacity-0'
          }`}
        >
          <TopBar {...topBarFallback} variant="overlay" />
          <MainNavigation {...mainNavigationFallback} variant="overlay" />
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

      <div className="pb-16 sm:pb-20 lg:pb-24">
        <ServicesSection {...servicesContent} />
      </div>

      <div className="pb-16 sm:pb-20 lg:pb-24">
        <NewsSection {...newsContent} />
      </div>
      <Footer {...footerContent} />
    </div>
  );
}
