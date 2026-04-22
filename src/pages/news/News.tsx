import { ArrowLeft, ArrowRight, CalendarDays } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { getNewsContent } from '../../api/news';
import { Footer } from '../../components/Footer';
import { TopBar } from '../../components/TopBar';
import { footerFallback, newsFallback, topBarFallback } from '../../content/homePage';
import { useHeaderVisibility } from '../../hooks/useHeaderVisibility';
import type { NewsItem } from '../../types/news';
import worldMapImg from '../../assets/home/world-map.svg';
import hqBuildingImg from '../../assets/home/hq-building.jpg';

type NewsCategory = 'all' | 'exhibition' | 'company' | 'trade';

const categories: Array<{ id: NewsCategory; label: string }> = [
  { id: 'all', label: 'All news' },
  { id: 'exhibition', label: 'Exhibition news' },
  { id: 'company', label: 'Company dynamics' },
  { id: 'trade', label: 'Trade news' },
];

const NEWS_PAGE_SIZE = 5;
const NEWS_SCROLL_KEY = 'fordtek.news.scrollY';
const NEWS_CATEGORY_KEY = 'fordtek.news.category';
const NEWS_PAGE_KEY = 'fordtek.news.page';

function isNewsCategory(value: string | null): value is NewsCategory {
  return categories.some((category) => category.id === value);
}

function getStoredNewsCategory() {
  const category = window.sessionStorage.getItem(NEWS_CATEGORY_KEY);

  return isNewsCategory(category) ? category : null;
}

function getStoredNewsPage() {
  const page = Number(window.sessionStorage.getItem(NEWS_PAGE_KEY));

  return Number.isFinite(page) && page > 0 ? page : null;
}

function saveNewsListState(activeCategory: NewsCategory, currentPage: number) {
  window.sessionStorage.setItem(NEWS_SCROLL_KEY, String(window.scrollY));
  window.sessionStorage.setItem(NEWS_CATEGORY_KEY, activeCategory);
  window.sessionStorage.setItem(NEWS_PAGE_KEY, String(currentPage));
}

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

function getNewsCategory(item: NewsItem): Exclude<NewsCategory, 'all'> {
  const text = `${item.title} ${item.summary}`.toLowerCase();

  if (
    text.includes('cosmetics') ||
    text.includes('vietshrimp') ||
    text.includes('ippe') ||
    text.includes('exhibition') ||
    text.includes('booth') ||
    text.includes('event')
  ) {
    return 'exhibition';
  }

  if (
    text.includes('sourcing') ||
    text.includes('delivery') ||
    text.includes('market') ||
    text.includes('customer')
  ) {
    return 'trade';
  }

  return 'company';
}

function useNewsItems() {
  const [items, setItems] = useState<NewsItem[]>(newsFallback.items);

  useEffect(() => {
    let isCancelled = false;

    getNewsContent(newsFallback)
      .then((content) => {
        if (!isCancelled) {
          setItems(content.items);
        }
      })
      .catch((error) => {
        console.error('Failed to load news page content:', error);
      });

    return () => {
      isCancelled = true;
    };
  }, []);

  return items;
}

export default function News() {
  const location = useLocation();
  const locationState = location.state as
    | { restoreFromDetail?: boolean; activeCategory?: NewsCategory; currentPage?: number }
    | null;
  const items = useNewsItems();
  const [activeCategory, setActiveCategory] = useState<NewsCategory>(
    locationState?.activeCategory ??
      (locationState?.restoreFromDetail ? getStoredNewsCategory() : null) ??
      'all',
  );
  const [currentPage, setCurrentPage] = useState(
    locationState?.currentPage ??
      (locationState?.restoreFromDetail ? getStoredNewsPage() : null) ??
      1,
  );

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') {
      return items;
    }

    return items.filter((item) => getNewsCategory(item) === activeCategory);
  }, [activeCategory, items]);
  const totalPages = Math.max(1, Math.ceil(filteredItems.length / NEWS_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const paginatedItems = filteredItems.slice(
    (safePage - 1) * NEWS_PAGE_SIZE,
    safePage * NEWS_PAGE_SIZE,
  );

  const handleCategoryChange = (category: NewsCategory) => {
    setActiveCategory(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (locationState?.restoreFromDetail) {
      const storedScrollY = Number(window.sessionStorage.getItem(NEWS_SCROLL_KEY));

      if (Number.isFinite(storedScrollY)) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            window.scrollTo({ top: storedScrollY, behavior: 'auto' });
          });
        });
      }
    }
  }, [locationState?.restoreFromDetail]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <Header />

      <main>
        <section className="relative overflow-hidden bg-slate-950">
          <img
            src={hqBuildingImg}
            alt="Fordtek news"
            className="absolute inset-0 z-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(120deg, rgba(2, 6, 23, 0.86) 0%, rgba(15, 23, 42, 0.72) 42%, rgba(30, 41, 59, 0.42) 100%)',
            }}
          />
          
          <div className="relative z-20 mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-200">
              Fordtek News
            </p>
            <div className="mt-6 max-w-[42rem]">
              <h1 className="text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.5rem]">
                Our industry dynamics
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl sm:leading-9">
                Follow Fordtek updates across exhibitions, company milestones and global trade
                activity.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-18 sm:px-10 lg:px-16 lg:py-24">
          <div className="flex flex-col gap-8 border-b border-slate-200 pb-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                News List
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-4xl lg:text-5xl">
                Time, title and a clear path to read more.
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = category.id === activeCategory;

                return (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategoryChange(category.id)}
                    className={`cursor-pointer rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'border-slate-950 bg-slate-950 text-white'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-sky-700 hover:text-sky-700'
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="divide-y divide-slate-200">
            {paginatedItems.map((item) => (
              <article
                key={item.slug}
                className="grid gap-6 py-8 md:grid-cols-[180px_1fr_auto] md:items-center lg:py-10"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                  <CalendarDays className="h-4 w-4 text-sky-700" />
                  {item.publishedDate}
                </div>

                <Link
                  to={`/news/${item.slug}`}
                  onClick={() => saveNewsListState(activeCategory, safePage)}
                  state={{
                    activeCategory,
                    currentPage: safePage,
                  }}
                  className="group block"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                    {categories.find((category) => category.id === getNewsCategory(item))?.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 transition-colors group-hover:text-sky-700 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {item.summary}
                  </p>
                </Link>

                <Link
                  to={`/news/${item.slug}`}
                  onClick={() => saveNewsListState(activeCategory, safePage)}
                  state={{
                    activeCategory,
                    currentPage: safePage,
                  }}
                  className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-sky-700 md:justify-self-end"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </article>
            ))}
          </div>

          {totalPages > 1 ? (
            <div className="mt-10 flex flex-row items-center justify-between gap-4 border-t border-slate-200 py-5">
              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                disabled={safePage === 1}
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, index) => {
                  const page = index + 1;
                  const isActive = page === safePage;

                  return (
                    <button
                      key={page}
                      type="button"
                      onClick={() => setCurrentPage(page)}
                      className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-slate-950 text-white'
                          : 'bg-white text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
                disabled={safePage === totalPages}
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          ) : null}
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}

export function NewsDetail() {
  const { slug } = useParams();
  const location = useLocation();
  const locationState = location.state as
    | { activeCategory?: NewsCategory; currentPage?: number }
    | null;
  const items = useNewsItems();
  const item = items.find((newsItem) => newsItem.slug === slug) ?? items[0];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 selection:bg-green-100">
      <Header />

      <main>
        <section className="mx-auto max-w-4xl px-6 py-18 sm:px-10 lg:py-24">
          <Link
            to="/news"
            state={{
              restoreFromDetail: true,
              activeCategory: locationState?.activeCategory ?? getStoredNewsCategory() ?? 'all',
              currentPage: locationState?.currentPage ?? getStoredNewsPage() ?? 1,
            }}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-sky-700"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to news
          </Link>

          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.28em] text-sky-700">
            Fordtek News
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.06] tracking-[-0.05em] text-slate-950 sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-5 flex items-center gap-3 text-sm font-semibold text-slate-500">
            <CalendarDays className="h-4 w-4 text-sky-700" />
            {item.publishedDate}
          </p>

          <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <img
              src={item.coverImageUrl}
              alt={item.coverImageAlt}
              className="h-[280px] w-full object-cover sm:h-[420px]"
            />
          </div>

          <p className="mt-10 text-lg leading-9 text-slate-600">{item.summary}</p>
        </section>
      </main>

      <Footer {...footerFallback} />
    </div>
  );
}
