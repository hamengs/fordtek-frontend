import { ArrowUpRight, BriefcaseBusiness, Mail } from 'lucide-react';
import {
  footerFallback,
  mainNavigationFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { MainNavigation } from '../../components/MainNavigation';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import meetingRoomImg from '../../assets/home/meeting-room.jpg';
import rooftopGardenImg from '../../assets/home/rooftop-garden.jpg';

const jobPlatforms = [
  {
    name: 'BOSS Zhipin',
    description: 'Browse Fordtek openings on a dedicated external recruitment platform.',
    href: 'https://www.zhipin.com/',
  },
  {
    name: 'Zhaopin',
    description: 'Explore current roles and broader hiring information through Zhaopin.',
    href: 'https://www.zhaopin.com/',
  },
];

const contactEmails = ['penny.tang@fordtek.com', 'judy.zhu@fordtek.com'];

export default function Jobs() {
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
        <section className="relative overflow-hidden bg-slate-950">
          <img
            src={meetingRoomImg}
            alt="Join us at Fordtek"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.8)_38%,rgba(30,41,59,0.64)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              Jobs
            </p>
            <div className="mt-6 max-w-[44rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Join Us
              </h1>
              <p className="mt-5 text-lg font-medium text-sky-100 sm:text-xl">
                We want you for FORDTEK.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Open Platforms
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              Explore Fordtek openings on external hiring platforms.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-rows-2">
              {jobPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-[2rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-[0_22px_55px_rgba(15,23,42,0.08)]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <BriefcaseBusiness className="h-5 w-5 text-sky-700" />
                      <p className="text-lg font-semibold text-slate-950">{platform.name}</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-colors group-hover:bg-sky-700 group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{platform.description}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-700">
                    Visit platform
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f2f7fb_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Other Delivery Options
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Send your resume directly by email.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {contactEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="rounded-[1.8rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] transition-all hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <Mail className="h-5 w-5 text-sky-700" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Email
                  </p>
                  <p className="mt-2 text-lg font-semibold text-slate-950">{email}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
