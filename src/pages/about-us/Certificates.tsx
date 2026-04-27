import { ExternalLink, FileText, ShieldCheck } from 'lucide-react';
import {
  footerFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import gateImg from '../../assets/home/gate.jpg';
import firstFloorHallImg from '../../assets/home/1stFloorHall.jpg';
import famiqsLogo from '../../assets/images/about-us/certificates/FAMIQS.webp';
import famiqsMarkLogo from '../../assets/images/about-us/certificates/FAMIQS2.webp';
import fspcaLogo from '../../assets/images/about-us/certificates/FSPCA.png';
import gmpLogo from '../../assets/images/about-us/certificates/GMP+.jpg';
import haccpLogo from '../../assets/images/about-us/certificates/HACCP.webp';
import halalLogo from '../../assets/images/about-us/certificates/HALAL.jpg';
import isoLogo from '../../assets/images/about-us/certificates/ISO.webp';
import qmsLogo from '../../assets/images/about-us/certificates/QMS.png';

const certificateDisplays = [
  {
    name: 'FAMI-QS',
    subtitle: 'Feed safety and quality system certificate',
    logo: famiqsLogo,
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
    logo: qmsLogo,
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
  {
    name: 'ISO',
    subtitle: 'International management system mark',
    logo: isoLogo,
  },
  {
    name: 'FAMI-QS Member',
    subtitle: 'Additional FAMI-QS qualification mark',
    logo: famiqsMarkLogo,
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

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fb_100%)] p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Certificate Files
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:text-4xl">
                  Current PDF certificates available for customer review.
                </h2>
              </div>

              <div className="space-y-4">
                {certificateFiles.map((certificate) => (
                  <a
                    key={certificate.name}
                    href={certificate.documentUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-5 rounded-[1.4rem] border border-slate-200 bg-white px-5 py-5 transition-all hover:border-sky-200 hover:shadow-[0_14px_35px_rgba(15,23,42,0.05)]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[1rem] bg-slate-50">
                        <FileText className="h-5 w-5 text-sky-700" />
                      </span>
                      <span>
                        <span className="block text-base font-semibold text-slate-950">
                          {certificate.name}
                        </span>
                        <span className="mt-1 block text-sm leading-6 text-slate-500">
                          {certificate.subtitle}
                        </span>
                      </span>
                    </span>
                    <ExternalLink className="h-5 w-5 flex-none text-slate-400 transition-colors group-hover:text-sky-700" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
