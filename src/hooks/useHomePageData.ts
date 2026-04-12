import { useEffect, useState } from 'react';
import { getServicesContent } from '../api/home';
import { getHeroContent } from '../api/hero';
import { getNewsContent } from '../api/news';
import { getFooterContent } from '../api/site-settings';
import {
  footerFallback,
  heroFallback,
  newsFallback,
  servicesFallback,
} from '../content/homePage';
import type { HeroContent } from '../types/hero';
import type { NewsContent } from '../types/news';
import type { ServicesContent } from '../types/services';
import type { FooterContent } from '../types/site-settings';

export function useHomePageData() {
  const [footerContent, setFooterContent] = useState<FooterContent>(footerFallback);
  const [heroContent, setHeroContent] = useState<HeroContent>(heroFallback);
  const [newsContent, setNewsContent] = useState<NewsContent>(newsFallback);
  const [servicesContent, setServicesContent] = useState<ServicesContent>(servicesFallback);

  useEffect(() => {
    let isCancelled = false;

    const loadPageContent = async () => {
      try {
        const [footer, hero, news, services] = await Promise.all([
          getFooterContent(footerFallback),
          getHeroContent(heroFallback),
          getNewsContent(newsFallback),
          getServicesContent(servicesFallback),
        ]);

        if (!isCancelled) {
          setFooterContent(footer);
          setHeroContent(hero);
          setNewsContent(news);
          setServicesContent(services);
        }
      } catch (error) {
        console.error('Failed to load page content from Strapi:', error);
      }
    };

    loadPageContent();

    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    footerContent,
    heroContent,
    newsContent,
    servicesContent,
  };
}
