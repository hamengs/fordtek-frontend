import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  FlaskConical,
  Globe2,
  PackageCheck,
  ShieldCheck,
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { TopBar } from '../../components/TopBar';
import { footerFallback, topBarFallback } from '../../content/homePage';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import animalImg from '../../assets/home/animal.jpg';
import cosmeticImg from '../../assets/home/cosmetic.png';
import humanImg from '../../assets/home/human.png';
import veterinaryImg from '../../assets/home/veterinary.jpg';

type ProductLine = {
  slug: string;
  eyebrow: string;
  title: string;
  heroText: string;
  introTitle: string;
  introText: string;
  portfolioTitle: string;
  portfolioSubtitle: string;
  image: string;
  imageAlt: string;
  products: string[];
};

const productLines: ProductLine[] = [
  {
    slug: 'human-nutrition',
    eyebrow: 'Human Nutrition',
    title: 'Premium Nutritional Ingredients for Health, Food and Dietary Supplements',
    heroText:
      'High-quality nutritional ingredients for food, beverages, dietary supplements and pharmaceuticals.',
    introTitle: 'Certified ingredients for global health applications.',
    introText:
      'FORDTEK provides premium nutritional ingredients for food, beverages, dietary supplements and pharmaceuticals. Our products include vitamins, amino acids, minerals, probiotics, plant extracts and functional raw materials. All products meet international quality standards and hold comprehensive certifications. We implement strict quality control from sourcing to delivery.',
    portfolioTitle: 'Our Human Nutrition Portfolio',
    portfolioSubtitle: 'Safe, certified ingredients for global health',
    image: humanImg,
    imageAlt: 'Human nutrition ingredients',
    products: [
      'Vitamins',
      'Amino acids',
      'Minerals',
      'Probiotics',
      'Plant extracts',
      'Functional ingredients',
      'Dietary supplement ingredients',
      'Pharmaceutical nutrition raw materials',
    ],
  },
  {
    slug: 'animal-health',
    eyebrow: 'Animal Health',
    title: 'Premium ingredients & reliable supply solutions for animal health & nutrition',
    heroText:
      'Nutritional and functional ingredients supporting livestock, aquaculture, poultry and companion animals.',
    introTitle: 'Nutritional solutions for sustainable livestock and aquaculture.',
    introText:
      'Animal health is essential for safe production and sustainable farming. FORDTEK delivers high-quality, certified nutritional and functional ingredients for livestock, aquaculture, poultry and companion animals. We ensure stable supply, strict quality control and professional support to enhance animal immunity, growth and overall health.',
    portfolioTitle: 'Our Animal Health Portfolio',
    portfolioSubtitle: 'Nutritional solutions for sustainable livestock & aquaculture',
    image: animalImg,
    imageAlt: 'Animal health ingredients',
    products: [
      'Feed additives',
      'Animal vitamins',
      'Amino acids',
      'Minerals',
      'Gut health ingredients',
      'Aquaculture nutrition',
      'Poultry nutrition',
      'Companion animal ingredients',
    ],
  },
  {
    slug: 'veterinary-drugs',
    eyebrow: 'Veterinary Drugs',
    title: 'Safe, reliable and compliant veterinary pharmaceutical solutions for global animal healthcare',
    heroText:
      'Veterinary drugs, APIs and antibiotic ingredients aligned with international pharmacopoeia standards.',
    introTitle: 'Safe, compliant pharmaceuticals for animal healthcare.',
    introText:
      'Animal healthcare requires safe, effective and fully compliant pharmaceuticals. FORDTEK supplies high-quality veterinary drugs, APIs and antibiotic ingredients that meet international pharmacopoeia standards. We ensure product safety, stable supply chains and complete regulatory support to safeguard animal health and farming safety.',
    portfolioTitle: 'Our Veterinary Drugs Portfolio',
    portfolioSubtitle: 'Safe, compliant pharmaceuticals for animal healthcare',
    image: veterinaryImg,
    imageAlt: 'Veterinary pharmaceutical ingredients',
    products: [
      'Veterinary APIs',
      'Antibiotic ingredients',
      'Antiparasitic ingredients',
      'Anti-inflammatory ingredients',
      'Premix raw materials',
      'Pharmacopoeia-grade materials',
      'Regulatory support materials',
      'Animal healthcare solutions',
    ],
  },
  {
    slug: 'cosmetics',
    eyebrow: 'Cosmetics',
    title: 'Premium cosmetic ingredients for safe, effective and innovative personal care',
    heroText:
      'High-quality raw materials, functional additives and active ingredients for personal care formulations.',
    introTitle: 'Premium ingredients for safe, effective personal care.',
    introText:
      'Safety, purity and stability are critical for cosmetic formulations. FORDTEK offers high-quality raw materials, functional additives and active ingredients for skincare, haircare, body care and personal care products. We ensure reliable supply, strict quality control and full compliance to drive product innovation and market competitiveness.',
    portfolioTitle: 'Our Cosmetics Portfolio',
    portfolioSubtitle: 'Premium ingredients for safe, effective personal care',
    image: cosmeticImg,
    imageAlt: 'Cosmetic raw materials',
    products: [
      'Active ingredients',
      'Functional additives',
      'Moisturizing ingredients',
      'Haircare raw materials',
      'Skincare raw materials',
      'Body care ingredients',
      'Personal cleansing ingredients',
      'Compliance-ready materials',
    ],
  },
];

const advantageItems = [
  {
    title: 'Certified quality',
    description: 'International quality standards and complete certification support.',
    icon: ShieldCheck,
  },
  {
    title: 'Stable supply',
    description: 'Reliable sourcing and delivery support for global customers.',
    icon: PackageCheck,
  },
  {
    title: 'Strict control',
    description: 'Quality control from sourcing to final delivery.',
    icon: ClipboardCheck,
  },
  {
    title: 'Global service',
    description: 'Responsive support across products, orders and cooperation needs.',
    icon: Globe2,
  },
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

function getProductLine(slug?: string) {
  return productLines.find((line) => line.slug === slug) ?? productLines[0];
}

export default function ProductPage() {
  const { productSlug } = useParams();
  const productLine = getProductLine(productSlug);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-slate-950">
          <img
            src={productLine.image}
            alt={productLine.imageAlt}
            className="absolute inset-0 h-full w-full object-cover opacity-36"
          />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.88)_0%,rgba(15,23,42,0.74)_42%,rgba(30,41,59,0.48)_100%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              {productLine.eyebrow}
            </p>
            <div className="mt-6 max-w-[52rem]">
              <h1 className="text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.25rem]">
                {productLine.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                {productLine.heroText}
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-18 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-16 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
              Product Line Advantage
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
              {productLine.introTitle}
            </h2>
            <p className="mt-8 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
              {productLine.introText}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {advantageItems.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-slate-200/80 bg-[#f8fafc] px-6 py-6 shadow-[0_14px_36px_rgba(15,23,42,0.04)]"
              >
                <Icon className="h-5 w-5 text-sky-700" />
                <p className="mt-5 text-lg font-semibold text-slate-950">{title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#f2f7fb_100%)]">
          <div className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                  Product Matrix
                </p>
                <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                  {productLine.portfolioTitle}
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                  {productLine.portfolioSubtitle}
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {productLine.products.map((product) => (
                <article
                  key={product}
                  className="group rounded-[1.25rem] border border-slate-200/80 bg-white px-5 py-5 shadow-[0_14px_34px_rgba(15,23,42,0.04)] transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-[0_20px_42px_rgba(15,23,42,0.07)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-50 text-sky-700">
                    <FlaskConical className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug tracking-[-0.02em] text-slate-950">
                    {product}
                  </h3>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors group-hover:text-sky-700">
                    Available for inquiry
                    <CheckCircle2 className="h-4 w-4" />
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
