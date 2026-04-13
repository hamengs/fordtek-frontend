import { Link } from 'react-router-dom';
import {
  footerFallback,
  mainNavigationFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { MainNavigation } from '../../components/MainNavigation';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';

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
        <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eff6ff_45%,#ecfeff_100%)]">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-600">About Fordtek</p>
            <div className="max-w-3xl space-y-6">
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Building trusted nutrition and chemical supply partnerships worldwide.
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                This page is now connected to the app router, so you can keep expanding it into the full About Us
                experience without changing the route structure again.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-slate-900">What this route does now</h2>
            <p className="text-base leading-8 text-slate-600">
              The page lives at <code>/about-us</code>, uses the same header and footer as the homepage, and is ready
              for you to split into company, locations, team, and certificates sections later.
            </p>
            <p className="text-base leading-8 text-slate-600">
              If you want, the next step can be turning the current dropdown items into real nested pages under the
              same About Us section.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Quick navigation</p>
            <div className="mt-6 space-y-4">
              <Link
                to="/"
                className="inline-flex items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
