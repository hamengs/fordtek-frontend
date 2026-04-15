import { ArrowRight, Building2, Globe2, ShieldCheck, Users2 } from 'lucide-react';
import {
  footerFallback,
  mainNavigationFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { MainNavigation } from '../../components/MainNavigation';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import brieflyImg from '../../assets/images/briefly.jpg';
import hardworkImg from '../../assets/images/hardwork.jpg';
import blackForestImg from '../../assets/images/black-forest.jpg';

const quickLinks = [
  { label: 'Introduction', href: '#introduction' },
  { label: 'Purpose', href: '#purpose' },
  { label: 'Values', href: '#values' },
  { label: 'Business Units', href: '#business-units' },
];

const businessUnits = [
  {
    title: 'Human Nutrition',
    description:
      'Nutritional ingredients for health food, dietary supplements and pharmaceutical applications.',
    href: '/products/human-nutrition',
  },
  {
    title: 'Animal Health',
    description:
      'Reliable nutritional and functional ingredients for livestock, aquaculture and companion animals.',
    href: '/products/animal-health',
  },
  {
    title: 'Veterinary Drugs',
    description:
      'Safe, compliant veterinary APIs, antibiotics and pharmaceutical support for global animal care.',
    href: '/products/veterinary-drugs',
  },
  {
    title: 'Cosmetics',
    description:
      'Functional and active cosmetic ingredients designed for safe, effective personal care products.',
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
        <MainNavigation {...mainNavigationFallback} />
      </header>

      <main>
        <section className="relative overflow-hidden bg-slate-900">
          <img
            src={hardworkImg}
            alt="Fordtek company overview"
            className="absolute inset-0 h-full w-full object-cover opacity-46"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.62)_0%,rgba(30,41,59,0.48)_42%,rgba(51,65,85,0.28)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              About Us
            </p>
            <div className="mt-6 max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-7xl">
                Our Company
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                Always focus on you. Fordtek is a global provider of nutritional ingredients
                and comprehensive chemicals built on dependable sourcing, international reach
                and responsive service.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
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
                className="rounded-[1.75rem] border border-slate-200 bg-slate-50 px-6 py-6"
              >
                <Icon className="h-5 w-5 text-slate-500" />
                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
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
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Introduction
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              A professional distributor connecting high-quality ingredients with global demand.
            </h2>
            <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Founded in 2015, Fordtek is a global provider of nutritional ingredients and
              comprehensive chemicals. We are committed to bringing high quality and safe
              products to our customers around the world. With cooperation from over one
              hundred reliable suppliers and support from more than ten overseas warehouses,
              we offer efficient and time-competitive service to our customers.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
            <img
              src={brieflyImg}
              alt="Fordtek introduction"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </section>

        <section
          id="purpose"
          className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef6fb_100%)]"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-24">
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-100">
              <img
                src={hardworkImg}
                alt="Fordtek purpose"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>

            <div className="max-w-2xl lg:ml-auto">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Purpose
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                Growing globally alongside “Made in China”.
              </h2>
              <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                Since the establishment, Fordtek has remained committed to its original
                vision of expanding globally alongside “Made in China”, achieving the
                capability to deliver goods to end users across multiple countries and
                regions under DDP terms. We continue to build the operational foundation
                needed to make international supply more direct, more reliable and more
                responsive for our partners.
              </p>
            </div>
          </div>
        </section>

        <section
          id="values"
          className="mx-auto grid max-w-7xl gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[1fr_1fr] lg:px-16 lg:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
              Values
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
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

          <div className="rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#f5f8fc_0%,#eef3f8_100%)] p-8 text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:p-10 lg:p-12">
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
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Business Units
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
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
                  className="group rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
                    Fordtek
                  </p>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em] text-slate-950">
                    {unit.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{unit.description}</p>
                  <span className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="grid gap-8 rounded-[2.5rem] border border-slate-200 bg-[linear-gradient(180deg,#f6f9fc_0%,#eef5fa_100%)] px-8 py-10 text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:px-10 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-14 lg:py-16">
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                Global Presence
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] sm:text-4xl">
                Built in Chongqing, connected to customers around the world.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Market Presence
                </p>
                <p className="mt-4 text-3xl font-semibold">9 countries</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Continuing to expand our international investment footprint.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-slate-200 bg-white/90 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Customer Reach
                </p>
                <p className="mt-4 text-3xl font-semibold">40+ countries</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Serving customers across five continents with responsive support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 lg:grid-cols-[1fr_auto] lg:px-16 lg:py-20">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
                Next Sections
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950">
                Locations, team, certificates and warehouses can branch out from here.
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                This first pass focuses on the overall About Us tone and structure. We can
                keep extending it into dedicated subpages once you like the visual direction.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-[2rem] bg-slate-200">
              <img
                src={blackForestImg}
                alt="Fordtek future sections"
                className="h-full min-h-[220px] w-full object-cover lg:w-[360px]"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
