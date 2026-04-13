import forestImg from '../assets/images/home-hero.jpg';
import humanImg from '../assets/images/human.png';
import animalImg from '../assets/images/animal.jpg';
import veterinaryImg from '../assets/images/veterinary.jpg';
import cosmeticImg from '../assets/images/cosmetic.png';
import brieflyImg from '../assets/images/briefly.jpg';
import vietShrimpImg from '../assets/images/viet-shrimp.jpg';
import hardworkImg from '../assets/images/hardwork.jpg';
import type { HeroContent } from '../types/hero';
import type { NewsContent } from '../types/news';
import type { ServicesContent } from '../types/services';
import type {
  FooterContent,
  MainNavigationContent,
  TopBarContent,
} from '../types/site-settings';

// Local fallback content keeps the homepage usable when Strapi is unavailable
// or when the deployed frontend has not been connected to a live CMS yet.
export const heroFallback: HeroContent = {
  title: 'Welcome to Fordtek',
  description: 'Innovating in nutrition and chemicals to bring health to life.',
  buttonText: 'Explore our Impact',
  buttonLink: '#',
  imageUrl: forestImg,
  imageAlt: 'Forest background',
};

export const topBarFallback: TopBarContent = {
  languageText: 'EN',
  languageIconText: 'Globe',
  isEnabled: true,
  leftLinks: [
    { label: 'Home', link: '/' },
    {
      label: 'About Us',
      link: '/about-us',
      children: [
        { label: 'Our Company', link: '/about-us/our-company' },
        { label: 'Our Locations', link: '/about-us/our-locations' },
        { label: 'Our Team', link: '/about-us/our-team' },
        { label: 'Certificates', link: '/about-us/certificates' },
        { label: 'Worldwide Warehouses', link: '/about-us/worldwide-warehouses' },
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

export const mainNavigationFallback: MainNavigationContent = {
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

export const servicesFallback: ServicesContent = {
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

export const newsFallback: NewsContent = {
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

export const footerFallback: FooterContent = {
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
