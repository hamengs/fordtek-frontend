import { Globe2, MapPin, Users2 } from 'lucide-react';
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
import meetingRoomImg from '../../assets/home/meeting-room.jpg';
import worldMapImg from '../../assets/home/world-map.svg';
import founderPortrait from '../../assets/team/xiong-dong.png';
import stefanPortrait from '../../assets/team/stefan-uthmann.png';
import abinPortrait from '../../assets/team/abin-sebastian.png';
import kennyPortrait from '../../assets/team/kenny-mao.png';
import chenPeiPortrait from '../../assets/team/chen-pei.jpg';
import liuQinPortrait from '../../assets/team/liu-qin.jpg';
import tangXiaoniPortrait from '../../assets/team/tang-xiaoni.jpg';
import zhangBingPortrait from '../../assets/team/zhang-bing.jpg';
import zhangGuojuPortrait from '../../assets/team/zhang-guoju.jpg';

const quickLinks = [
  { label: 'Management', href: '#management' },
  { label: 'Team Intro', href: '#team-intro' },
  { label: 'Distribution', href: '#distribution' },
];

const founder = {
  mainName: 'Xiong Dong',
  nickname: 'Tony',
  title: 'CEO',
  portrait: founderPortrait,
  experience:
    "Founder and owner of Fordtek. With more than 10 years' experiences in production, technical research and sales in a top pharmaceutical company in China.",
  description:
    "He remains closely involved in Fordtek's overall sales direction and long-term business development.",
};

const managementMembers = [
  {
    mainName: 'Zhang Guoju',
    nickname: 'Frank',
    title: 'Head of Logistics HQ',
    portrait: zhangGuojuPortrait,
    experience: 'Joined Fordtek in 2014. Worked in a Singapore shipping company for years.',
    description: 'Supports export documentation and shipment coordination for headquarters logistics.',
  },
  {
    mainName: 'Liu Qin',
    nickname: 'Sunny',
    title: 'Head of KAM HQ',
    portrait: liuQinPortrait,
    experience:
      'Joined Fordtek in 2022. Former the dean of English Department in Southwest University of Science and Technology.',
    description:
      'Helps connect key-account communication with long-cycle service execution at headquarters.',
  },
  {
    mainName: 'Tang Xiaoni',
    nickname: 'Penny',
    title: 'Head of Finance HQ',
    portrait: tangXiaoniPortrait,
    experience:
      'Joined Fordtek in 2018. Former corporate banking supervisor in China Merchants Bank.',
    description:
      "Keeps Fordtek's finance-side coordination and daily operational support aligned at headquarters.",
  },
  {
    mainName: 'Zhang Bing',
    nickname: 'Alan',
    title: 'Head of Sourcing HQ',
    portrait: zhangBingPortrait,
    experience:
      "Joined Fordtek in 2016. More than 15 years' experience in vitamin factory.",
    description:
      'Leads sourcing coordination and supplier-side execution for headquarters procurement.',
  },
  {
    mainName: 'Chen Pei',
    nickname: 'Patrick',
    title: 'Head of Asian Market',
    portrait: chenPeiPortrait,
    experience:
      'Joined Fordtek in 2017. Worked in CUC for years, involved in manufacturing of DL-methionine and chemicals trading.',
    description:
      'Supports Fordtek’s Asian market development and regional commercial coordination.',
  },
  {
    mainName: 'Stefan Uthmann',
    title: 'Head of E.U. Market',
    portrait: stefanPortrait,
    experience:
      'Joined Fordtek in 2016. PHD of Chemical, 25 years in cosmetics industry.',
    description: "Represents Fordtek's leadership presence across the European market.",
  },
  {
    mainName: 'Abin Sebastian',
    title: 'Head of S.A. Market',
    portrait: abinPortrait,
    experience: 'Joined Fordtek in 2020. Formerly served in a European trading company based in Argentina.',
    description:
      "Supports Fordtek's South American commercial development and market expansion.",
  },
  {
    mainName: 'Kenny Mao',
    title: 'Deputy Head of U.S. Market',
    portrait: kennyPortrait,
    experience:
      'Joined Fordtek in 2024. Once the operations director of the US subsidiary of CSPC.',
    description:
      "Supports Fordtek's U.S. market growth and local operational coordination.",
  },
];

const distributionStats = [
  {
    label: 'Headquarters',
    value: 'Chongqing',
    description: 'The core team is anchored in Chongqing, China.',
  },
  {
    label: 'Global Team Reach',
    value: '9 countries',
    description: "Management and operations continue expanding across Fordtek's network.",
  },
  {
    label: 'Service Coverage',
    value: '40+ countries',
    description: 'Customer support extends across 5 continents.',
  },
];

const distributionPoints = [
  { label: 'CN', name: 'Chongqing', left: '82%', top: '35%' },
  { label: 'EU', name: 'Germany', left: '51.3%', top: '20%' },
  { label: 'US', name: 'United States', left: '12%', top: '29.8%' },
  { label: 'SA', name: 'South America', left: '33%', top: '83%' },
];

const distributionGroups = [
  {
    region: 'China Headquarters',
    detail: 'Founder, management and coordination hub',
  },
  {
    region: 'Europe',
    detail: 'Stefan Uthmann and local European operations',
  },
  {
    region: 'United States',
    detail: 'Kenny Mao and North American growth support',
  },
  {
    region: 'South America',
    detail: 'Abin Sebastian and regional commercial development',
  },
];

export default function OurTeam() {
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
            src={talkingWithCustomersImg}
            alt="Fordtek team hero"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.8)_38%,rgba(30,41,59,0.64)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              About Us
            </p>
            <div className="mt-6 max-w-[40rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Our Team
              </h1>
              <p className="mt-5 text-lg font-medium uppercase tracking-[0.18em] text-sky-100 sm:text-xl">
                Continuous Hardwork, Diligent Pursuit
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                A team built through persistent effort, practical execution and growing
                global collaboration.
              </p>
            </div>

            <div className="mt-12 flex max-w-2xl flex-wrap gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white/92 backdrop-blur-sm transition-colors hover:bg-white/16"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:px-10 lg:grid-cols-3 lg:px-16 lg:py-12">
            {distributionStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.9rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] px-6 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                  {stat.label}
                </p>
                <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-slate-950">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="management"
          className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Management
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              Management profiles presented with name, role, years and experience.
            </h2>
            <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              This section follows the proposal direction for the Our Team page: a visual
              introduction to Fordtek&apos;s management layer, supported by role, time
              context and practical background.
            </p>
          </div>

          <article className="mt-12 grid overflow-hidden rounded-[2.4rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)] shadow-[0_20px_50px_rgba(15,23,42,0.06)] lg:grid-cols-[0.78fr_1.22fr]">
            <div className="bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f9_100%)] p-6 sm:p-8">
              <img
                src={founder.portrait}
                alt={founder.mainName}
                className="mx-auto h-full w-full max-w-[24rem] rounded-[2rem] object-cover"
              />
            </div>
            <div className="px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
                Founder Profile
              </p>
              <div className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <p className="text-3xl font-semibold tracking-[-0.04em] text-slate-950">
                  {founder.mainName}
                </p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {founder.nickname}
                </p>
              </div>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                {founder.title}
              </p>
              <p className="mt-6 text-base leading-8 text-slate-600">{founder.experience}</p>
              <p className="mt-4 text-base leading-8 text-slate-600">{founder.description}</p>
            </div>
          </article>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {managementMembers.map((member) => (
              <article
                key={`${member.mainName}-${member.nickname ?? 'default'}`}
                className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="aspect-[4/4.3] overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef4f9_100%)]">
                  <img
                    src={member.portrait}
                    alt={member.mainName}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-6">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <p className="text-xl font-semibold tracking-[-0.03em] text-slate-950">
                      {member.mainName}
                    </p>
                    {member.nickname ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {member.nickname}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                    {member.title}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {member.experience}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="team-intro"
          className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fafc_100%)]"
        >
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-18 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16 lg:py-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
              <img
                src={meetingRoomImg}
                alt="Fordtek team introduction"
                className="h-full min-h-[340px] w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Team Introduction
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                Employees with unique experience, skills and multicultural backgrounds keep the business moving forward.
              </h2>
              <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                At Fordtek, our employees with their unique experience, skills and
                multicultural backgrounds make outstanding contributions to business growth.
                Therefore, we welcome highly qualified people with great passion to join us.
                Whether you have relevant experience or not, you will be provided a
                supportive and engaging workplace where everyone can thrive.
              </p>

              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                <div className="rounded-[1.8rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                  <Users2 className="h-5 w-5 text-sky-700" />
                  <p className="mt-4 text-lg font-semibold text-slate-950">
                    Diverse experience
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Team members contribute from different functions, backgrounds and
                    regions to support Fordtek&apos;s growth.
                  </p>
                </div>
                <div className="rounded-[1.8rem] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_14px_35px_rgba(15,23,42,0.04)]">
                  <Globe2 className="h-5 w-5 text-sky-700" />
                  <p className="mt-4 text-lg font-semibold text-slate-950">
                    Supportive workplace
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    The proposal emphasizes a supportive and engaging environment where
                    people can keep developing with the company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="distribution"
          className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Team Distribution
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              A simple view of where Fordtek&apos;s team presence is concentrated today.
            </h2>
          </div>

          <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.18fr_0.82fr]">
            <div className="rounded-[2.5rem] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#f5f8fb_100%)] p-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
              <div className="relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[radial-gradient(circle_at_top,#eef6ff_0%,#f8fbff_34%,#ffffff_100%)] px-3 py-3 sm:px-4 sm:py-4">
                <div className="relative mx-auto max-w-[920px]">
                  <img
                    src={worldMapImg}
                    alt="World map showing Fordtek team distribution"
                    className="h-auto w-full scale-[1.16] transform"
                  />

                  {distributionPoints.map((point) => (
                    <div
                      key={point.name}
                      className="absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: point.left, top: point.top }}
                    >
                      <span className="absolute left-1/2 top-1/2 -z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20" />
                      <span className="flex h-5 min-w-5 items-center justify-center rounded-full border-2 border-white bg-sky-600 px-1 text-[10px] font-bold tracking-[0.1em] text-white shadow-[0_4px_12px_rgba(15,23,42,0.18)]">
                        {point.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {distributionGroups.map((group) => (
                <div
                  key={group.region}
                  className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-sky-700" />
                    <p className="text-lg font-semibold text-slate-950">{group.region}</p>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{group.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
