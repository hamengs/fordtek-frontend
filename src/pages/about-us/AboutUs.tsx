import { ArrowRight, Building2, Globe2, ShieldCheck, Users2 } from 'lucide-react';
import {
  footerFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import hqBuildingImg from '../../assets/home/hq-building.jpg';
import receptionLoungeImg from '../../assets/home/reception-lounge.jpg';
import meetingRoomImg from '../../assets/home/meeting-room.jpg';
import rooftopGardenImg from '../../assets/home/rooftop-garden.jpg';
import firstFloorEntranceImg from '../../assets/home/firstFloorEntrance.jpg';
import talkingWithCustomersImg from '../../assets/home/talkingWithCustomers.jpg';
import hardworkImg from '../../assets/home/hardwork.jpg';
import pingguoIcon from '../../assets/images/about-us/pingguo.svg';
import yuerIcon from '../../assets/images/about-us/yuer.svg';
import yaopingIcon from '../../assets/images/about-us/yaoping.svg';
import kouhonIcon from '../../assets/images/about-us/kouhong.svg';
import incosPoster from '../../assets/images/about-us/incosPoster_cropped.png';

const quickLinks = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Purpose', href: '#purpose' },
  { label: 'Values', href: '#values' },
  { label: 'Business Units', href: '#business-units' },
];

const businessUnits = [
  {
    title: 'Human Nutrition',
    subtitle: 'Human Nutrition&others',
    icon: pingguoIcon,
    href: '/products/human-nutrition',
  },
  {
    title: 'Animal Health',
    subtitle: 'Animal Health&others',
    icon: yuerIcon,
    href: '/products/animal-health',
  },
  {
    title: 'Veterinary Drugs',
    subtitle: 'Veterinary Drugs&antibiotics',
    icon: yaopingIcon,
    href: '/products/veterinary-drugs',
  },
  {
    title: 'Cosmetics',
    subtitle: 'Cosmetic materials',
    icon: kouhonIcon,
    href: '/products/cosmetics',
  },
];

const strengths = [
  {
    icon: Building2,
    title: 'Founded in 2015',
    value: 'Global distributor',
  },
  {
    icon: Globe2,
    title: '10+ warehouses',
    value: 'Worldwide support',
  },
  {
    icon: ShieldCheck,
    title: '100+ suppliers',
    value: 'Reliable sourcing',
  },
  {
    icon: Users2,
    title: 'DDP capability',
    value: 'Cross-border delivery',
  },
];

type MosaicImage = {
  src: string;
  alt: string;
  className: string;
};

const introMosaicImages: MosaicImage[] = [
  {
    src: receptionLoungeImg,
    alt: 'Fordtek reception lounge',
    className: 'col-start-1 col-end-8 row-start-1 row-end-6',
  },
  {
    src: firstFloorEntranceImg,
    alt: 'Fordtek entrance',
    className: 'col-start-8 col-end-13 row-start-1 row-end-4',
  },
  {
    src: talkingWithCustomersImg,
    alt: 'Fordtek customer meeting',
    className: 'col-start-8 col-end-13 row-start-4 row-end-7',
  },
  {
    src: meetingRoomImg,
    alt: 'Fordtek meeting room',
    className: 'col-start-2 col-end-8 row-start-6 row-end-9',
  },
];

const purposeMosaicImages: MosaicImage[] = [
  {
    src: meetingRoomImg,
    alt: 'Fordtek purpose meeting',
    className: 'col-start-1 col-end-6 row-start-2 row-end-6',
  },
  {
    src: hardworkImg,
    alt: 'Fordtek team work',
    className: 'col-start-6 col-end-13 row-start-1 row-end-6',
  },
  {
    src: rooftopGardenImg,
    alt: 'Fordtek rooftop garden',
    className: 'col-start-2 col-end-8 row-start-6 row-end-9',
  },
  {
    src: receptionLoungeImg,
    alt: 'Fordtek office lounge',
    className: 'col-start-8 col-end-12 row-start-6 row-end-8',
  },
];

const futureMosaicImages: MosaicImage[] = [
  {
    src: rooftopGardenImg,
    alt: 'Fordtek future space',
    className: 'col-start-1 col-end-8 row-start-1 row-end-5',
  },
  {
    src: firstFloorEntranceImg,
    alt: 'Fordtek office entrance',
    className: 'col-start-8 col-end-13 row-start-1 row-end-4',
  },
  {
    src: hqBuildingImg,
    alt: 'Fordtek headquarters',
    className: 'col-start-2 col-end-7 row-start-5 row-end-9',
  },
  {
    src: talkingWithCustomersImg,
    alt: 'Fordtek team discussion',
    className: 'col-start-7 col-end-12 row-start-5 row-end-8',
  },
];

function PhotoMosaic({
  images,
  className = '',
}: {
  images: MosaicImage[];
  className?: string;
}) {
  return (
    <div
      className={`grid h-[340px] grid-cols-12 grid-rows-8 gap-2 overflow-visible bg-transparent sm:h-[390px] lg:h-[440px] ${className}`}
    >
      {images.map((image) => (
        <div
          key={image.alt}
          className={`overflow-hidden ${image.className}`}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export default function AboutUs() {
  const isHeaderVisible = useHeaderVisibility();

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <header
        className={`sticky top-0 z-50 w-full shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 ${
          isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <TopBar {...topBarFallback} />
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-900">
          <img
            src={hqBuildingImg}
            alt="Fordtek company overview"
            className="absolute inset-0 h-full w-full object-cover opacity-46"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.62)_0%,rgba(30,41,59,0.48)_42%,rgba(51,65,85,0.28)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              About Us
            </p>
            <div className="mt-6 max-w-[34rem] lg:max-w-[38rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Our Company
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                Always focus on you. Fordtek is a global provider of nutritional ingredients
                and comprehensive chemicals built on dependable sourcing, international reach
                and responsive service.
              </p>
            </div>

            <div className="mt-12 flex max-w-2xl flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/24 bg-white/12 px-5 py-2.5 text-sm font-medium text-white/92 backdrop-blur-sm transition-colors hover:bg-white/18"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:px-10 lg:grid-cols-4 lg:px-16 lg:py-12">
            {strengths.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="rounded-[1.75rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
              >
                <Icon className="h-5 w-5 text-sky-700" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {title}
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="introduction"
          className="mx-auto grid max-w-7xl gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-16 lg:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Introduction
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              A professional distributor connecting high-quality ingredients with global demand.
            </h2>
            <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Founded in 2015, Fordtek is a global supplier of nutritional ingredients and specialty chemicals, 
              providing high-quality, safe products and efficient services to customers worldwide through over 
              100 reliable suppliers and 10 overseas warehouses.
            </p>
          </div>

          <PhotoMosaic images={introMosaicImages} />
        </section>

        <section
          id="purpose"
          className="bg-[linear-gradient(180deg,#ffffff_0%,#f4f8fb_100%)]"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-24">
            <PhotoMosaic images={purposeMosaicImages} />

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Purpose
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                Growing globally alongside "Made in China"
              </h2>
              <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                Since its founding, Fordtek has stayed true to its vision of global growth alongside "Made in China", 
                enabling DDP delivery to end-users across multiple countries and regions.
              </p>
            </div>
          </div>
        </section>

        <section
          id="values"
          className="mx-auto grid max-w-7xl gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-16 lg:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Values
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              Long-termism as both a value and a way of working.
            </h2>
            <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Long-termism is the integration of core values and strategic methodology.
              It requires us to weigh not just immediate interests in our decisions,
              but to anchor our choices in long-term goals and sustainable results. To
              this end, we build trust through high-standard product selection, enhance
              customer experience through rigorous refinement, and commit to a reputation
              moat for Fordtek through high-investment operations.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fb_100%)] p-8 text-slate-900 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
              What it means in practice
            </p>
            <div className="mt-8 space-y-6">
              <div className="border-b border-slate-200 pb-6">
                <p className="text-lg font-semibold">High-standard product selection</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Prioritising dependable quality, compliance and supplier stability over
                  short-term convenience.
                </p>
              </div>
              <div className="border-b border-slate-200 pb-6">
                <p className="text-lg font-semibold">Rigorous service refinement</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Improving communication, delivery and collaboration details to strengthen
                  the customer experience over time.
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold">A reputation built to last</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Investing in global operations and trustworthy partnerships that create
                  durable confidence in the Fordtek name.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="business-units"
          className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]"
        >
          <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Business Units
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                Expanding ingredient categories, one reliable portfolio at a time.
              </h2>
              <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                With the ever-expanding product range, we provide nutrition ingredients and
                other chemicals for your selection.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {businessUnits.map((unit) => (
                <a
                  key={unit.title}
                  href={unit.href}
                  className="group flex flex-col items-center rounded-[2rem] border border-slate-200 bg-white px-7 py-8 text-center shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <img
                    src={unit.icon}
                    alt={unit.title}
                    className="h-18 w-18 object-contain opacity-90 transition-transform duration-300 group-hover:scale-105"
                  />
                  <h3 className="mt-8 text-[15px] font-medium tracking-[0.02em] text-slate-700 sm:text-base">
                    {unit.subtitle}
                  </h3>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_100%)]">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Looking Ahead
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                Locations, team, certificates and warehouses can grow from this foundation.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                This first pass focuses on the overall About Us tone and structure. We can
                keep extending it into dedicated subpages once you like the visual direction.
              </p>
            </div>
            <img className='max-w-100 rounded-[2rem]'
            src = {rooftopGardenImg} />
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
