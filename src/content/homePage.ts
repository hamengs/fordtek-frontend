import forestImg from '../assets/home/home-hero.png';
import humanImg from '../assets/home/human.png';
import animalImg from '../assets/home/animal.jpg';
import veterinaryImg from '../assets/home/veterinary.jpg';
import cosmeticImg from '../assets/home/cosmetic.png';
import brieflyImg from '../assets/home/briefly.jpg';
import vietShrimpImg from '../assets/home/viet-shrimp.jpg';
import hardworkImg from '../assets/home/hardwork.jpg';
import slogan from '../assets/home/slogan.svg'
import type { HeroContent } from '../types/hero';
import type { NewsContent } from '../types/news';
import type { ServicesContent } from '../types/services';
import type {
  FooterContent,
  MainNavigationContent,
  TopBarContent,
} from '../types/site-settings';

const productLineLinks = [
  { label: 'Human Nutrition', link: '/products/human-nutrition' },
  { label: 'Animal Health', link: '/products/animal-health' },
  { label: 'Veterinary Drugs', link: '/products/veterinary-drugs' },
  { label: 'Cosmetics', link: '/products/cosmetics' },
];

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
      label: 'Products',
      link: '',
      children: productLineLinks,
    },
    {
      label: 'About Us',
      link: '',
      children: [
        { label: 'Our Company', link: '/about-us/our-company' },
        { label: 'Our Locations', link: '/about-us/our-locations' },
        { label: 'Certificates', link: '/about-us/certificates' },
      ],
    },
    {
      //暂时屏蔽，目前不需要下拉菜单
      label: 'News',
      link: '/news',
      // children: [
      //   { label: 'Fordtek News', link: '/news/company-news' },
      //   { label: 'Trade Shows', link: '/news/trade-shows' },
      // ],
    },
    { label: 'Contact Us', link: '/contact' },
    { label: 'Join Us', link: '/join-us' },
  ],
  rightLinks: [],
};

export const mainNavigationFallback: MainNavigationContent = {
  loginText: '',
  loginLink: '#',
  showSearch: false,
  logoAlt: 'Fordtek logo',
  navlinks: [],
  productLinks: productLineLinks,
};

export const servicesFallback: ServicesContent = {
  items: [
    {
      title: 'Human',
      subtitle: 'Nutrition & others',
      description:
        'We supply certified high-grade nutritional ingredients for food, supplements and healthcare, with stable global supply.',
      buttonText: 'More',
      buttonLink: '#',
      imageUrl: humanImg,
      imageAlt: 'Human nutrition',
      theme: 'green',
    },
    {
      title: 'Animal',
      subtitle: 'Health & Others',
      description:
        'We offer certified nutritional additives and feed materials, delivering reliable solutions for global animal farming.',
      buttonText: 'More',
      buttonLink: '#',
      imageUrl: animalImg,
      imageAlt: 'Animal health',
      theme: 'blue',
    },
    {
      title: 'Veterinary',
      subtitle: 'Drugs & Antibiotics',
      description:
        'We distribute compliant veterinary raw materials and APIs, meeting global pharmacopoeia standards to ensure animal health.',
      buttonText: 'More',
      buttonLink: '#',
      imageUrl: veterinaryImg,
      imageAlt: 'Veterinary products',
      theme: 'green',
    },
    {
      title: 'Cosmetic',
      subtitle: 'Materials',
      description:
        'We provide high-purity cosmetic and functional ingredients, ensuring stable supply for global care brands.',
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
      summary: 'Fordtek unveiled its newly upgraded booth at In-cosmetics 2024, with the largest exhibition team in the company\'s history.',
      slug: 'briefly-on-2024-in-cosmetics-global',
      coverImageUrl: brieflyImg,
      coverImageAlt: 'Group photo.',
      buttonText: 'Read more',
      publishedDate: '2026-04-09',
    },
    {
      title: "Briefing: Fordtek's debut at VIETSHRIMP",
      summary: 'Fordtek has made remarkable progress in expanding the Southeast Asian market and has been reported in VietFish magazine as an emerging industry representative.',
      slug: 'briefing-fordtek-s-debut-at-vietshrimp',
      coverImageUrl: vietShrimpImg,
      coverImageAlt: '3 people talking.',
      buttonText: 'Read more',
      publishedDate: '2026-04-09',
    },
    {
      title: 'Continuous Hardwork, Diligent Pursuit',
      summary: 'Fordtek made its fourth appearance at IPPE, further strengthened its market layout in Latin America, and is set to establish a new branch in Brazil.',
      slug: 'continuous-hardwork-diligent-pursuit',
      coverImageUrl: hardworkImg,
      coverImageAlt: 'Exhibit.',
      buttonText: 'Read more',
      publishedDate: '2026-04-09',
    },
    {
      title: 'Fordtek expands coordination for European market support',
      summary: 'Fordtek continues strengthening local coordination in Europe to improve response speed, account support and market-facing execution across the region.',
      slug: 'fordtek-expands-coordination-for-european-market-support',
      coverImageUrl: brieflyImg,
      coverImageAlt: 'Exhibition discussion.',
      buttonText: 'Read more',
      publishedDate: '2026-04-08',
    },
    {
      title: 'New sourcing alignment improves delivery planning at headquarters',
      summary: 'Cross-functional collaboration between sourcing, logistics and key-account teams is helping Fordtek improve planning rhythm for major customer programs.',
      slug: 'new-sourcing-alignment-improves-delivery-planning-at-headquarters',
      coverImageUrl: hardworkImg,
      coverImageAlt: 'Team at exhibition booth.',
      buttonText: 'Read more',
      publishedDate: '2026-04-07',
    },
    {
      title: 'Fordtek highlights long-term investment in overseas operations',
      summary: 'Recent company updates continue to emphasize Fordtek\'s long-term approach to overseas warehousing, local service capability and regional market presence.',
      slug: 'fordtek-highlights-long-term-investment-in-overseas-operations',
      coverImageUrl: vietShrimpImg,
      coverImageAlt: 'Business conversation.',
      buttonText: 'Read more',
      publishedDate: '2026-04-06',
    },
    {
      title: 'Global exhibition calendar supports closer customer engagement',
      summary: 'By participating in international industry events, Fordtek keeps expanding face-to-face communication with customers, suppliers and market partners.',
      slug: 'global-exhibition-calendar-supports-closer-customer-engagement',
      coverImageUrl: brieflyImg,
      coverImageAlt: 'Trade show moment.',
      buttonText: 'Read more',
      publishedDate: '2026-04-05',
    },
    {
      title: 'Operational updates continue across core Fordtek regions',
      summary: 'Teams in China, the United States, Europe and South America are continuing to improve coordination standards and commercial support across markets.',
      slug: 'operational-updates-continue-across-core-fordtek-regions',
      coverImageUrl: hardworkImg,
      coverImageAlt: 'Fordtek event activity.',
      buttonText: 'Read more',
      publishedDate: '2026-04-04',
    },
    {
      title: 'Fordtek strengthens supplier review standards for key ingredients',
      summary: 'Updated supplier review routines are helping teams align quality expectations, documentation and delivery planning for core nutritional and chemical materials.',
      slug: 'fordtek-strengthens-supplier-review-standards-for-key-ingredients',
      coverImageUrl: brieflyImg,
      coverImageAlt: 'Supplier discussion moment.',
      buttonText: 'Read more',
      publishedDate: '2026-04-03',
    },
    {
      title: 'Trade service coordination supports faster customer response',
      summary: 'Fordtek is refining communication between commercial, sourcing and logistics teams to improve response speed for customer inquiries and order follow-up.',
      slug: 'trade-service-coordination-supports-faster-customer-response',
      coverImageUrl: vietShrimpImg,
      coverImageAlt: 'Customer conversation.',
      buttonText: 'Read more',
      publishedDate: '2026-04-02',
    },
    {
      title: 'Company dynamics: Fordtek upgrades internal planning workflow',
      summary: 'A refreshed internal planning workflow is helping teams keep product information, inquiry status and regional priorities more visible across departments.',
      slug: 'company-dynamics-fordtek-upgrades-internal-planning-workflow',
      coverImageUrl: hardworkImg,
      coverImageAlt: 'Team planning workflow.',
      buttonText: 'Read more',
      publishedDate: '2026-04-01',
    },
    {
      title: 'Exhibition news: global booth preparation continues for spring events',
      summary: 'Fordtek teams continue preparing exhibition materials and customer communication plans for upcoming global industry events.',
      slug: 'exhibition-news-global-booth-preparation-continues-for-spring-events',
      coverImageUrl: brieflyImg,
      coverImageAlt: 'Exhibition booth preparation.',
      buttonText: 'Read more',
      publishedDate: '2026-03-31',
    },
    {
      title: 'Market support update focuses on regional ingredient demand',
      summary: 'Recent market support work highlights changing demand across nutrition, animal health and cosmetic raw material categories.',
      slug: 'market-support-update-focuses-on-regional-ingredient-demand',
      coverImageUrl: vietShrimpImg,
      coverImageAlt: 'Regional market support.',
      buttonText: 'Read more',
      publishedDate: '2026-03-30',
    },
    {
      title: 'Fordtek expands documentation alignment for export cooperation',
      summary: 'Cross-team documentation alignment continues to support smoother cooperation for export customers and regional service partners.',
      slug: 'fordtek-expands-documentation-alignment-for-export-cooperation',
      coverImageUrl: hardworkImg,
      coverImageAlt: 'Export cooperation documentation.',
      buttonText: 'Read more',
      publishedDate: '2026-03-29',
    },
  ],
};

export const footerFallback: FooterContent = {
  copyrightText: '© 2017-2026 Fordtek.com, Inc',
  phone: '+86 2367683887',
  email: 'service@fordtek.com',
  tagline: 'Ingredients you can trust',
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
        { label: 'News', link: '/news', isTitle: false },
      ],
    },
    {
      links: [
        { label: 'How We Do It', link: '/how-we-do-it', isTitle: true },
        { label: 'Certificates', link: '/certificates', isTitle: false },
        { label: 'Join Us', link: '/join-us', isTitle: true },
        { label: 'Contact Us', link: '/contact', isTitle: true },
      ],
    },
  ],
};
