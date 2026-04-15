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
import { useHeaderVisibility } from '../hooks/useHeaderVisibility';
import { useHomePageData } from '../hooks/useHomePageData';

export default function Home() {
  const { footerContent, heroContent, newsContent, servicesContent } = useHomePageData();
  const isHeaderVisible = useHeaderVisibility();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <header
        className={`sticky top-0 z-50 w-full shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <TopBar {...topBarFallback} />
        <MainNavigation {...mainNavigationFallback} />
      </header>

      <Hero
        title={heroContent.title}
        description={heroContent.description}
        buttonText={heroContent.buttonText}
        buttonLink={heroContent.buttonLink}
        imageUrl={heroContent.imageUrl}
        imageAlt={heroContent.imageAlt}
      />

      <div className="py-14 sm:py-18 lg:py-20">
        <ServicesSection {...servicesContent} />
      </div>

      <div className="pb-16 sm:pb-20 lg:pb-24">
        <NewsSection {...newsContent} />
      </div>
      <Footer {...footerContent} />
    </div>
  );
}
