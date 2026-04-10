/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import forestImg from './Assets/Images/beautiful-shot-black-forest-germany.jpg';
import humanImg from './Assets/Images/human.png';
import animalImg from './Assets/Images/animal.jpg';
import veterinaryImg from './Assets/Images/Veterinary.jpg';
import cosmeticImg from './Assets/Images/cosmetic.png';
import brieflyImg from './Assets/Images/Briefly.jpg';
import vietShrimpImg from './Assets/Images/VietShrimp.jpg';
import hardworkImg from './Assets/Images/hardwork.jpg';
import { getServicesContent } from './api/home';
import { getHeroContent } from './api/hero';
import { getNewsContent } from './api/news';
import { getFooterContent } from './api/site-settings';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { MainNavigation } from './components/MainNavigation';
import { NewsSection } from './components/NewsSection';
import { ServicesSection } from './components/ServicesSection';
import { TopBar } from './components/TopBar';
import type { HeroContent } from './types/hero';
import type { NewsContent } from './types/news';
import type { ServicesContent } from './types/services';
import type { FooterContent, MainNavigationContent, TopBarContent } from './types/site-settings';

// Local fallback content keeps the homepage usable when Strapi is unavailable
// or when the deployed frontend has not been connected to a live CMS yet.
const heroFallback: HeroContent = {
  title: 'Welcome to Fordtek',
  description: 'Innovating in nutrition and chemicals to bring health to life.',
  buttonText: 'Explore our Impact',
  buttonLink: '#',
  imageUrl: forestImg,
  imageAlt: 'Forest background',
};

const topBarFallback: TopBarContent = {
  languageText: 'EN',
  languageIconText: 'Globe',
  isEnabled: true,
  leftLinks: [
    { label: 'Home', link: '/' },
    {
      label: 'About Us',
      link: '/about',
      children: [
        { label: 'Our Company', link: '/about/our-company' },
        { label: 'Our Locations', link: '/about/our-locations' },
        { label: 'Our Team', link: '/about/our-team' },
        { label: 'Certificates', link: '/about/certificates' },
        { label: 'Worldwide Warehouses', link: '/about/worldwide-warehouses' },
      ],
    },
    {
      label: 'Join Us',
      link: '/join-us',
      children: [
        { label: 'Why Choose Us', link: '/join-us/why-choose-us' },
        { label: 'Jobs', link: '/join-us/jobs' },
      ],
    },
    {
      label: 'News',
      link: '/news',
      children: [
        { label: 'Fordtek News', link: '/news/company-news' },
        { label: 'Trade Shows', link: '/news/trade-shows' },
      ],
    },
    { label: 'Contact Us', link: '/contact' },
  ],
  rightLinks: [],
};

const mainNavigationFallback: MainNavigationContent = {
  loginText: '',
  loginLink: '#',
  showSearch: false,
  logoAlt: 'Fordtek logo',
  navlinks: [],
  productLinks: [
    { label: 'Human Nutrition', link: '/products/human-nutrition' },
    { label: 'Animal Health', link: '/products/animal-health' },
    { label: 'Veterinary Drugs', link: '/products/veterinary-drugs' },
    { label: 'Cosmetics', link: '/products/cosmetics' },
  ],
};

const servicesFallback: ServicesContent = {
  items: [
    {
      title: 'Human',
      subtitle: 'Nutrition & others',
      buttonText: 'More',
      buttonLink: '#',
      imageUrl: humanImg,
      imageAlt: 'Human nutrition',
      theme: 'green',
    },
    {
      title: 'Animal',
      subtitle: 'Health & Others',
      buttonText: 'More',
      buttonLink: '#',
      imageUrl: animalImg,
      imageAlt: 'Animal health',
      theme: 'blue',
    },
    {
      title: 'Veterinary',
      subtitle: 'Drugs & Antibiotics',
      buttonText: 'More',
      buttonLink: '#',
      imageUrl: veterinaryImg,
      imageAlt: 'Veterinary products',
      theme: 'green',
    },
    {
      title: 'Cosmetic',
      subtitle: 'materials',
      buttonText: 'More',
      buttonLink: '#',
      imageUrl: cosmeticImg,
      imageAlt: 'Cosmetic materials',
      theme: 'blue',
      overlay: true,
    },
  ],
};

const newsFallback: NewsContent = {
  items: [
    {
      title: 'Briefly on 2024 in Cosmetics Global',
      summary: 'Fordtek makes every effort to distribute ingredients globally and in Germany and Vietnam with safety.',
      slug: 'briefly-on-2024-in-cosmetics-global',
      coverImageUrl: brieflyImg,
      coverImageAlt: 'Group photo.',
      buttonText: 'Read more',
      publishedDate: '2026-04-09',
    },
    {
      title: "Briefing: Fordtek's debut at VIETSHRIMP",
      summary: 'Fordtek makes every effort to distribute ingredients globally and in Germany and Vietnam with safety.',
      slug: 'briefing-fordtek-s-debut-at-vietshrimp',
      coverImageUrl: vietShrimpImg,
      coverImageAlt: '3 people talking.',
      buttonText: 'Read more',
      publishedDate: '2026-04-09',
    },
    {
      title: 'Continuous Hardwork, Diligent Pursuit',
      summary: 'Fordtek makes every effort to distribute ingredients globally and in Germany and Vietnam with safety.',
      slug: 'continuous-hardwork-diligent-pursuit',
      coverImageUrl: hardworkImg,
      coverImageAlt: 'Exhibit.',
      buttonText: 'Read more',
      publishedDate: '2026-04-09',
    },
  ],
};

const footerFallback: FooterContent = {
  copyrightText: '© 2017-2026 Fordtek.com, Inc',
  phone: '+66 2567883887',
  email: 'service@fordtek.com',
  tagline: 'Global Nutrition & Chemicals Excellence',
  socialLinks: [
    { platform: 'twitter', link: '/x.com' },
    { platform: 'youtube', link: '/youtube.com' },
    { platform: 'linkedin', link: '/linkedin.com' },
  ],
  footerColumns: [
    {
      links: [
        { label: 'What We Do', link: '/what-we-do', isTitle: true },
        { label: 'Human nutrition', link: '/human-nutrition', isTitle: false },
        { label: 'Animal health', link: '/animal-health', isTitle: false },
        { label: 'Veterinary drugs', link: '/veterinary-drugs', isTitle: false },
        { label: 'Cosmetics', link: '/cosmetics', isTitle: false },
      ],
    },
    {
      links: [
        { label: 'Who We Are', link: '/who-we-are', isTitle: true },
        { label: 'Our company', link: '/our-company', isTitle: false },
        { label: 'Our locations', link: '/our-locations', isTitle: false },
        { label: 'Our team', link: '/our-team', isTitle: false },
        { label: 'News', link: '/news', isTitle: false },
      ],
    },
    {
      links: [
        { label: 'How We Do It', link: '/how-we-do-it', isTitle: true },
        { label: 'Certificates', link: '/certificates', isTitle: false },
        { label: 'Worldwide warehouses', link: '/worldwide-warehouses', isTitle: false },
        { label: 'Join Us', link: '/join-us', isTitle: true },
        { label: 'Contact Us', link: '/contact', isTitle: true },
      ],
    },
  ],
};

export default function App() {
  const [footerContent, setFooterContent] = useState<FooterContent>(footerFallback);
  const [heroContent, setHeroContent] = useState<HeroContent>(heroFallback);
  const [newsContent, setNewsContent] = useState<NewsContent>(newsFallback);
  const [servicesContent, setServicesContent] = useState<ServicesContent>(servicesFallback);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const topBarContent = topBarFallback;
  const mainNavigationContent = mainNavigationFallback;

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

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isNearTop = currentScrollY < 240;
      const isScrollingUp = currentScrollY < lastScrollY;

      if (isNearTop || isScrollingUp) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white selection:bg-green-100">
      {/* This header wraps both navigation rows and handles the hide-on-scroll behavior. */}
      <header
        className={`sticky top-0 z-50 w-full shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <TopBar {...topBarContent} />
        <MainNavigation {...mainNavigationContent} />
      </header>

      {/* Hero is rendered immediately below the two-row header. */}
      <Hero
        title={heroContent.title}
        description={heroContent.description}
        buttonText={heroContent.buttonText}
        buttonLink={heroContent.buttonLink}
        imageUrl={heroContent.imageUrl}
        imageAlt={heroContent.imageAlt}
      />

      {/* These sections use fallback content first and then update from Strapi when configured. */}
      <ServicesSection {...servicesContent} />
      <NewsSection {...newsContent} />
      <Footer {...footerContent} />
    </div>
  );
}
