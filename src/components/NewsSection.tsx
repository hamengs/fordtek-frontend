import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { NewsContent } from '../types/news';

// NewsSection renders the homepage news cards, including image, title,
// summary, and the link to the future news detail page.
export function NewsSection({ items }: NewsContent) {
  if (!items.length) {
    return null;
  }

  return (
    // Controls the overall section background and vertical spacing for the news area.
    <section className="bg-slate-50 py-30">
      {/* Controls the readable content width and horizontal padding of the news cards. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls the three-column card layout for the homepage news items. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {items.map((item) => (
            // Controls the hover lift and the spacing inside each individual news card.
            <motion.div key={item.slug} whileHover={{ y: -5 }} className="space-y-8 group cursor-pointer">
              {/* Controls the image block, rounded corners, and image hover overlay. */}
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.coverImageUrl}
                  alt={item.coverImageAlt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[#6fb64b]/0 transition-colors duration-500 group-hover:bg-sky-400/20" />
              </div>
              {/* Controls the text content under each news image. */}
              <div className="flex min-h-[220px] flex-col">
                <h4 className="font-extrabold text-xl leading-tight text-slate-900 group-hover:text-sky-400 transition-colors">
                  {item.title}
                </h4>
                <p className="mt-3 text-slate-600 leading-relaxed">{item.summary}</p>
                <a
                  href={`/news/${item.slug}`}
                  className="mt-auto cursor-pointer text-sm font-bold text-slate-900 flex items-center border-b-2 border-slate-200 pb-1 hover:border-sky-400 transition-all"
                >
                  {item.buttonText} <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
