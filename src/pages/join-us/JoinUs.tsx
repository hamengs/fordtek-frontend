import { ArrowRight, Globe2, HeartHandshake, ShieldCheck, Sparkles, Trophy, Users2 } from 'lucide-react';
import {
  footerFallback,
  mainNavigationFallback,
  topBarFallback,
} from '../../content/homePage';
import { Footer } from '../../components/Footer';
import { MainNavigation } from '../../components/MainNavigation';
import { TopBar } from '../../components/TopBar';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import talkingWithCustomersImg from '../../assets/home/talkingWithCustomers.jpg';
import rooftopGardenImg from '../../assets/home/rooftop-garden.jpg';
import meetingRoomImg from '../../assets/home/meeting-room.jpg';
import receptionLoungeImg from '../../assets/home/reception-lounge.jpg';

const cultureHighlights = [
  {
    title: 'Team Philosophy',
    subtitle: 'Strengthening teams while enhancing services',
    description:
      'Fordtek has consistently adhered to this philosophy over the past years and intends to continue expanding its workforce worldwide in the years ahead.',
    icon: Users2,
  },
];

const benefits = [
  {
    title: 'Insurance',
    description:
      'We focus on the safety and health of our employees around the world, and provide multiple types of insurance.',
    icon: ShieldCheck,
  },
  {
    title: 'Garden Office Working Environment',
    description:
      'Freshly brewed coffee, global teas and fine wines for you to enjoy, plus outdoor and rooftop gardens for a pleasant work-leisure balance.',
    icon: Sparkles,
  },
  {
    title: 'Fitness Culture',
    description:
      'Free gym access and weekly football games help employees nurture mind and body in parallel.',
    icon: HeartHandshake,
  },
  {
    title: 'Multilingual Working Environment',
    description:
      'Seamless communication in Chinese, English, German, Spanish and Portuguese. Conversing with the world starts here.',
    icon: Globe2,
  },
  {
    title: 'Global Exhibitions & Overseas Assignments',
    description:
      'Join global events in spring and autumn. Outstanding talents are eligible for long-term postings in Europe and the US, with visa and career support.',
    icon: Trophy,
  },
  {
    title: 'Great Team',
    description:
      'Most of our members come from Fortune 500 companies, listed companies and manufacturers. Experienced and versatile, they are reliable partners to grow with.',
    icon: Users2,
  },
];

export default function JoinUs() {
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
            alt="Why choose Fordtek"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.8)_38%,rgba(30,41,59,0.64)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              Join Us
            </p>
            <div className="mt-6 max-w-[44rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Why Choose FORDTEK
              </h1>
              <p className="mt-5 text-lg font-medium text-sky-100 sm:text-xl">
                Great rewards, shared vision, poetry and boundless horizons, all here for you.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Team Culture
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                A company that keeps strengthening teams while improving service.
              </h2>
              <div className="mt-10 space-y-5">
                {cultureHighlights.map(({ icon: Icon, title, subtitle, description }) => (
                  <div
                    key={title}
                    className="rounded-[2rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                  >
                    <Icon className="h-5 w-5 text-sky-700" />
                    <p className="mt-4 text-lg font-semibold text-slate-950">{title}</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">
                      {subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:col-span-2">
                <img
                  src={talkingWithCustomersImg}
                  alt="Fordtek team building"
                  className="h-full min-h-[280px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <img
                  src={rooftopGardenImg}
                  alt="Fordtek rooftop garden"
                  className="h-full min-h-[220px] w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                <img
                  src={receptionLoungeImg}
                  alt="Fordtek office environment"
                  className="h-full min-h-[220px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f2f7fb_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Benefits
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                More than a job, a workplace with support, movement and global possibility.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article
                  key={title}
                  className="rounded-[2rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                >
                  <Icon className="h-5 w-5 text-sky-700" />
                  <p className="mt-4 text-lg font-semibold text-slate-950">{title}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_55%,#334155_100%)] p-8 text-white shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-200">
              Jobs
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              We&apos;re always looking for talent and good conversations over coffee.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg sm:leading-9">
              Fordtek is waiting for you. Explore our positions and find the path that
              fits your strengths, curiosity and long-term ambition.
            </p>
            <a
              href="/join-us/jobs"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5"
            >
              Explore our positions
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
