import { ExternalLink, FileText, ShieldCheck } from 'lucide-react';
import {
  footerFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import gateImg from '../../assets/home/gate.jpg';
import famiqsMarkLogo from '../../assets/images/about-us/certificates/famiqss.webp';
import fspcaLogo from '../../assets/images/about-us/certificates/FSPCA.png';
import gmpLogo from '../../assets/images/about-us/certificates/GMP.png';
import haccpLogo from '../../assets/images/about-us/certificates/haccpp.webp';
import halalLogo from '../../assets/images/about-us/certificates/HALAL.jpg';
import isoLogo from '../../assets/images/about-us/certificates/iso.png';

const certificateDisplays = [
  {
    name: 'FAMI-QS',
    subtitle: 'Feed safety and quality system certificate',
    logo: famiqsMarkLogo,
    documentUrl: '/certificates/fami-qs-2025.pdf',
  },
  {
    name: 'GMP+',
    subtitle: 'Feed chain assurance certificate',
    logo: gmpLogo,
    documentUrl: '/certificates/gmp-plus-2025.pdf',
  },
  {
    name: 'QMS',
    subtitle: 'Quality management system certificate',
    logo: isoLogo,
    documentUrl: '/certificates/qms-2025.pdf',
  },
  {
    name: 'FSPCA',
    subtitle: 'Preventive controls qualification',
    logo: fspcaLogo,
  },
  {
    name: 'HACCP',
    subtitle: 'Food safety management system mark',
    logo: haccpLogo,
  },
  {
    name: 'HALAL',
    subtitle: 'Market compliance certification mark',
    logo: halalLogo,
  },
];

const certificateFiles = certificateDisplays.filter((certificate) => certificate.documentUrl);

export default function Certificates() {
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
        <section className="relative overflow-hidden bg-slate-950">
          <img
            src={gateImg}
            alt="Fordtek certificates hero"
            className="absolute inset-0 h-full w-full object-cover opacity-46"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.84)_0%,rgba(15,23,42,0.66)_42%,rgba(30,41,59,0.36)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              About Us
            </p>
            <div className="mt-6 max-w-[44rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Certificates
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                To supply our every valuable customer with safe and high-quality products.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Certificate Display
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                All available qualification marks presented in one consistent view.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {certificateDisplays.map((certificate) => (
                <article
                  key={certificate.name}
                  className="flex min-h-[21rem] flex-col rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex h-44 items-center justify-center rounded-[1.35rem] bg-slate-50 px-6 py-6">
                    <img
                      src={certificate.logo}
                      alt={`${certificate.name} certificate mark`}
                      className="max-h-32 max-w-full object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <h3 className="mt-7 text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                      {certificate.name}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">
                      {certificate.subtitle}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
