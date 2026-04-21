import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import type { NewsContent } from '../types/news';

const FEATURED_COUNT = 2;
const LIST_PAGE_SIZE = 3;

export function NewsSection({ items }: NewsContent) {
  const [currentPage, setCurrentPage] = useState(1);

  if (!items.length) {
    return null;
  }

  const featuredItems = items.slice(0, FEATURED_COUNT);
  const listItems = items;
  const totalPages = Math.max(1, Math.ceil(listItems.length / LIST_PAGE_SIZE));
  const safePage = Math.min(currentPage, totalPages);
  const pageStart = (safePage - 1) * LIST_PAGE_SIZE;
  const paginatedItems = listItems.slice(pageStart, pageStart + LIST_PAGE_SIZE);

  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
            News
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.03em] text-slate-950 sm:text-4xl lg:text-5xl">
            Recent updates from Fordtek, presented before the product lines.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
            A homepage news view with visual highlights first, followed by a complete text list.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {featuredItems.map((item, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={item.slug}
                className={`grid items-center gap-8 lg:gap-12 ${
                  isReversed ? 'lg:grid-cols-[0.6fr_1.4fr]' : 'lg:grid-cols-[1.4fr_0.6fr]'
                }`}
              >
                <div className={isReversed ? 'lg:order-2' : ''}>
                  <div className="overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.06)]">
                    <img
                      src={item.coverImageUrl}
                      alt={item.coverImageAlt}
                      className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[500px]"
                    />
                  </div>
                </div>

                <div className={`max-w-md ${isReversed ? 'lg:order-1 lg:justify-self-end' : ''}`}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-400">
                    {item.publishedDate}
                  </p>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                    {item.title}
                  </h3>
                  <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                    {item.summary}
                  </p>
                  <a
                    href={`/news/${item.slug}`}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-sky-700"
                  >
                    {item.buttonText}
                    <ArrowRight className="h-4 w-4 transition-transform hover:translate-x-1" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-20 overflow-hidden rounded-[2.5rem] border border-slate-200/80 bg-[#f8fafc] text-slate-900 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
          <div className="grid gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[0.3fr_0.7fr] lg:px-12 lg:py-14">
            <div className="max-w-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-500">
                Latest News
              </p>
              <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg sm:leading-9">
                Stay up-to-date with exhibitions, market expansion and company milestones from Fordtek.
              </p>
            </div>

            <div className="space-y-6">
              {paginatedItems.map((item) => (
                <a
                  key={item.slug}
                  href={`/news/${item.slug}`}
                  className="block border-b border-slate-200/80 pb-6 last:border-b-0 last:pb-0"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                    {item.publishedDate}
                  </p>
                  <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                    {item.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition-colors hover:text-sky-700">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}

              <div className="flex items-center justify-between gap-4 border-t border-slate-200/80 pt-2">
                <button
                  type="button"
                  onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
                  disabled={safePage === 1}
                  className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ChevronLeft className="h-4 w-4" />
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
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
