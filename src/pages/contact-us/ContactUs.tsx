import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Mail,
  MapPin,
  Phone,
  Printer,
} from 'lucide-react';
import { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { TopBar } from '../../components/TopBar';
import { footerFallback, topBarFallback } from '../../content/homePage';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import firstFloorEntranceImg from '../../assets/home/firstFloorEntrance.jpg';
import hqBuildingImg from '../../assets/home/hq-building.jpg';
import worldMapImg from '../../assets/home/world-map.svg';

const contactMethods = [
  {
    label: 'Tel',
    value: '+86 23 67683887',
    href: 'tel:+862367683887',
    icon: Phone,
  },
  {
    label: 'Fax',
    value: '+86 23 63026176',
    href: null,
    icon: Printer,
  },
  {
    label: 'Email',
    value: 'Service@fordtek.com',
    href: 'mailto:Service@fordtek.com',
    icon: Mail,
  },
];

const formFields = [
  { label: 'First name', name: 'firstName', required: true },
  { label: 'Last name', name: 'lastName', required: true },
  { label: 'Email Address', name: 'email', type: 'email', required: true },
  { label: 'Telephone', name: 'telephone', type: 'tel' },
  { label: 'Company', name: 'company' },
  { label: 'Country / Region', name: 'country', required: true },
];

function Header() {
  const isHeaderVisible = useHeaderVisibility();

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <TopBar {...topBarFallback} />
    </header>
  );
}

export default function ContactUs() {
  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate('/contact/success');
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-slate-950">
          <img
            src={firstFloorEntranceImg}
            alt="Fordtek contact"
            className="absolute inset-0 h-full w-full object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.82)_0%,rgba(15,23,42,0.68)_42%,rgba(30,41,59,0.4)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              Contact Us
            </p>
            <div className="mt-6 max-w-[46rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Your global partner for nutritional & chemical ingredients.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                We're here to support you with product inquiries, orders and partnership
                opportunities across global markets.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Inquiry Form
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              Enter the details of your inquiry.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              For product inquiries, orders or partnership opportunities, our global team is
              ready to help. Items marked by * are required.
            </p>
          </div>

          <div className="mt-12 flex flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] lg:flex-row">
            <aside className="border-b border-slate-200/80 bg-[#f8fafc] p-6 sm:p-8 lg:w-[34%] lg:border-b-0 lg:border-r lg:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Direct Contact
              </p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-3xl">
                Reach the Fordtek team directly.
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Use the form for detailed inquiries, or contact us directly for product and
                order support.
              </p>

              <div className="mt-8 space-y-4">
                {contactMethods.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <article className="flex gap-4 rounded-[1.25rem] border border-slate-200/80 bg-white px-5 py-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                          {label}
                        </p>
                        <p className="mt-2 text-base font-semibold tracking-[-0.02em] text-slate-950">
                          {value}
                        </p>
                      </div>
                    </article>
                  );

                  return href ? (
                    <a key={label} href={href} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={label}>{content}</div>
                  );
                })}
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="flex-1 p-6 sm:p-8 lg:p-10">
              <div className="grid gap-5 sm:grid-cols-2">
                {formFields.map((field) => (
                  <label key={field.name} className="block">
                    <span className="text-sm font-semibold text-slate-700">
                      {field.label}
                      {field.required ? ' *' : ''}
                    </span>
                    <input
                      name={field.name}
                      type={field.type ?? 'text'}
                      required={field.required}
                      className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-[#f8fafc] px-4 text-sm text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:bg-white"
                    />
                  </label>
                ))}
              </div>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-slate-700">
                  Details of inquiry *
                </span>
                <textarea
                  name="details"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:bg-white"
                />
              </label>

              <label className="mt-5 block">
                <span className="text-sm font-semibold text-slate-700">
                  Comments / Notes
                </span>
                <textarea
                  name="comments"
                  rows={3}
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3 text-sm leading-7 text-slate-950 outline-none transition-colors placeholder:text-slate-400 focus:border-sky-500 focus:bg-white"
                />
              </label>

              <button
                type="submit"
                className="mt-7 inline-flex cursor-pointer items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-700"
              >
                Check the entered information
                <ClipboardCheck className="h-4 w-4" />
              </button>
            </form>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-16 lg:py-24">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-slate-100 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <img
              src={hqBuildingImg}
              alt="Fordtek headquarters"
              className="h-full min-h-[320px] w-full object-cover"
            />
          </div>

          <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8 lg:px-10">
            <img
              src={worldMapImg}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-0 h-full w-full object-contain object-right opacity-[0.05]"
            />
            <div className="relative">
              <MapPin className="h-6 w-6 text-sky-700" />
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Company Address
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Fordtek Headquarters
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                Based in Chongqing, China, Fordtek supports global nutritional and chemical
                ingredient cooperation through responsive sourcing, logistics and customer
                service.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-950">Headquarters</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">Chongqing, China</p>
                </div>
                <div className="border-t border-slate-200 pt-5">
                  <p className="text-sm font-semibold text-slate-950">Global support</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Nutritional & chemical ingredients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}

export function ContactSuccess() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <Header />

      <main className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center sm:px-10">
        <CheckCircle2 className="h-12 w-12 text-sky-700" />
        <p className="mt-6 text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
          Inquiry Received
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-5xl">
          Thank you for contacting Fordtek.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
          Your inquiry details have been checked. Our global team will review your message and
          follow up through the contact information provided.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:border-slate-950"
          >
            Back to contact
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
          >
            Return home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
