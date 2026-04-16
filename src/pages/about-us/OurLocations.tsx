import { useState } from 'react';
import {
  footerFallback,
  mainNavigationFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { MainNavigation } from '../../components/MainNavigation';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import firstFloorEntrance from '../../assets/home/firstFloorEntrance.jpg';
import receptionLoungeImg from '../../assets/home/reception-lounge.jpg';
import worldMapImg from '../../assets/home/world-map.svg';
import cnFlag from '../../assets/flags/cn.png';
import usFlag from '../../assets/flags/us.png';
import deFlag from '../../assets/flags/de.png';
import vnFlag from '../../assets/flags/vn.png';
import scFlag from '../../assets/flags/sc.png';
import arFlag from '../../assets/flags/ar.png';
import uyFlag from '../../assets/flags/uy.png';
import brFlag from '../../assets/flags/br.png';
import nlFlag from '../../assets/flags/nl.png';

const countries = [
  {
    name: 'China',
    region: 'Asia',
    flagUrl: cnFlag,
  },
  {
    name: 'United States',
    region: 'North America',
    flagUrl: usFlag,
  },
  {
    name: 'Germany',
    region: 'Europe',
    flagUrl: deFlag,
  },
  {
    name: 'Vietnam',
    region: 'Asia',
    flagUrl: vnFlag,
  },
  {
    name: 'Seychelles',
    region: 'Africa',
    flagUrl: scFlag,
  },
  {
    name: 'Argentina',
    region: 'South America',
    flagUrl: arFlag,
  },
  {
    name: 'Uruguay',
    region: 'South America',
    flagUrl: uyFlag,
  },
  {
    name: 'Brazil',
    region: 'South America',
    flagUrl: brFlag,
  },
  {
    name: 'Netherlands',
    region: 'Europe',
    flagUrl: nlFlag,
  },
];

const mapPoints = [
  {
    country: 'United States',
    label: 'USA',
    region: 'Americas',
    status: 'Subsidiary',
    left: '12%',
    top: '29.8%',
    description: 'Fordtek established its United States subsidiary in 2017 and later expanded into a larger warehouse location in 2023.',
  },
  {
    country: 'Brazil',
    label: 'Brazil',
    region: 'Americas',
    status: 'Subsidiary',
    left: '36%',
    top: '70%',
    description: 'Fordtek established its Brazil subsidiary in 2024 as part of its continuing South American expansion.',
  },
  {
    country: 'Argentina',
    label: 'Argentina',
    region: 'Americas',
    status: 'Office',
    left: '32%',
    top: '90%',
    description: "Fordtek's Argentina sales office began operations in 2020 to support customers more directly in the region.",
  },
  {
    country: 'Uruguay',
    label: 'Uruguay',
    region: 'Americas',
    status: 'Subsidiary',
    left: '33%',
    top: '85%',
    description: 'Fordtek established its Uruguay subsidiary in 2022, strengthening its South American company network.',
  },
  {
    country: 'Netherlands',
    label: 'Netherlands',
    region: 'Europe',
    status: 'Planned',
    left: '49.2%',
    top: '20%',
    description: 'The Netherlands remains part of Fordtek’s forward-looking European market planning and layout.',
  },
  {
    country: 'Germany',
    label: 'Germany',
    region: 'Europe',
    status: 'Subsidiary',
    left: '51.3%',
    top: '20%',
    description: 'Fordtek relocated its European subsidiary to Germany in 2022, building a stronger localized base in Europe.',
  },
  {
    country: 'Chongqing, China',
    label: 'HQ',
    region: 'Asia',
    status: 'Headquarters',
    left: '82%',
    top: '35.1%',
    description: "Fordtek officially began operations in Chongqing in 2016, and the headquarters continues to anchor the company's global coordination.",
  },
  {
    country: 'Hong Kong, China',
    label: 'Hong Kong',
    region: 'Asia',
    status: 'Subsidiary',
    left: '84.5%',
    top: '41.5%',
    description: 'Fordtek established its Hong Kong subsidiary in 2016 as an early step in its international company layout.',
  },
  {
    country: 'Vietnam',
    label: 'Vietnam',
    region: 'Asia',
    status: 'Subsidiary',
    left: '84%',
    top: '48%',
    description: 'Fordtek established its Vietnam subsidiary in 2019 and began warehouse operations there the same year.',
  },
  {
    country: 'Seychelles',
    label: 'Seychelles',
    region: 'Africa',
    status: 'Subsidiary',
    left: '67%',
    top: '65%',
    description: 'Seychelles is part of Fordtek’s overseas subsidiary network within its broader global layout.',
  },
] as const;

const stats = [
  {
    eyebrow: 'Global Reach',
    value: '9 countries',
    description: 'Market presence in 9 countries, with continued expansion underway.',
  },
  {
    eyebrow: 'Global Services',
    value: '40+ countries',
    description: 'Customer service reaches 40+ countries across 5 continents.',
  },
];

export default function OurLocations() {
  const isHeaderVisible = useHeaderVisibility();
  const [selectedCountry, setSelectedCountry] = useState<(typeof mapPoints)[number]>(mapPoints[0]);

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
            src={firstFloorEntrance}
            alt="Fordtek locations hero"
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.72)_0%,rgba(17,24,39,0.54)_45%,rgba(30,41,59,0.36)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              ABOUT US
            </p>
            <div className="mt-6 max-w-[42rem] lg:max-w-[46rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Our Locations
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                From Chongqing to overseas markets, our growing network supports responsive
                collaboration, localized operations and long-term partnerships.
              </p>
            </div>
          </div>
        </section>

        <section
          id="introduction"
          className="mx-auto grid max-w-7xl gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[1fr_0.92fr] lg:px-16 lg:py-24"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Overseas Presence
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              Built in Chongqing, steadily invested in the world.
            </h2>
            <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              Based in Chongqing, China, Fordtek has consistently invested in overseas
              markets and has successfully established fully localized operations in the
              United States, Argentina and Germany.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <img
              src={receptionLoungeImg}
              alt="Fordtek overseas operations"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f2f7fb_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Country Footprint
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Nine markets in view, with room to keep growing.
              </h2>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-slate-200/80 bg-white px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                >
                  <div className="overflow-hidden rounded-md border border-slate-200 shadow-[0_6px_16px_rgba(15,23,42,0.08)]">
                    <img
                      src={country.flagUrl}
                      alt={`${country.name} flag`}
                      className="h-10 w-14 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-slate-900">
                      {country.name}
                    </p>
                    <p className="mt-1 text-sm font-medium uppercase tracking-[0.14em] text-slate-500">
                      {country.region}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="grid items-start gap-10 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="self-start rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fb_100%)] p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
                Global Layout
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl">
                A clearer view of Fordtek&apos;s international footprint.
              </h2>

              <div className="relative mt-10 overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,#eef6ff_0%,#f8fbff_34%,#ffffff_100%)] px-3 py-3 sm:px-4 sm:py-4">
                <div className="relative mx-auto max-w-[920px]">
                  <img
                    src={worldMapImg}
                    alt="World map showing Fordtek locations"
                    className="h-auto w-full scale-[1.16] transform"
                  />

                  {mapPoints.map((point) => {
                    const isSelected = selectedCountry.country === point.country;
                    return (
                      <button
                        key={point.country}
                        type="button"
                        onClick={() => setSelectedCountry(point)}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: point.left, top: point.top }}
                        aria-label={`Select ${point.country}`}
                      >
                        <span
                          className={`absolute left-1/2 top-1/2 -z-10 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                            isSelected ? 'bg-sky-400/30' : 'bg-sky-400/15'
                          }`}
                        />
                        <span
                          className={`block h-4 w-4 rounded-full border-2 border-white shadow-[0_4px_12px_rgba(15,23,42,0.18)] ${
                            isSelected ? 'bg-sky-600' : 'bg-sky-500'
                          }`}
                        />
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {mapPoints.map((point) => {
                    const isSelected = selectedCountry.country === point.country;
                    return (
                      <button
                        key={point.country}
                        type="button"
                        onClick={() => setSelectedCountry(point)}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold tracking-[0.12em] transition-colors ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-sky-300 hover:text-sky-700'
                        }`}
                      >
                        {point.country}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                  Selected Location
                </p>
                <p className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                  {selectedCountry.country}
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
                  {selectedCountry.region}
                </p>
                <p className="mt-3 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                  {selectedCountry.status}
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {selectedCountry.description}
                </p>
              </div>

              {stats.map((stat) => (
                <div
                  key={stat.eyebrow}
                  className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    {stat.eyebrow}
                  </p>
                  <p className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                    {stat.value}
                  </p>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {stat.description}
                  </p>
                </div>
              ))}

              <div className="rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,#f8fafc_0%,#eef5fb_100%)] p-8 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
                  Location Strategy
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  We keep expanding where logistics responsiveness, local service and
                  customer collaboration can create lasting operational value.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
