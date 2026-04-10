import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { NewsContent } from '../types/news';

export function NewsSection({ items }: NewsContent) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {items.map((item) => (
            <motion.div key={item.slug} whileHover={{ y: -5 }} className="space-y-6 group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src={item.coverImageUrl}
                  alt={item.coverImageAlt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-[#6fb64b]/0 transition-colors duration-500 group-hover:bg-[#6fb64b]/20" />
              </div>
              <div className="space-y-3">
                <h4 className="font-extrabold text-xl leading-tight text-slate-900 group-hover:text-green-600 transition-colors">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{item.summary}</p>
                <a
                  href={`/news/${item.slug}`}
                  className="cursor-pointer text-sm font-bold text-slate-900 flex items-center border-b-2 border-slate-200 pb-1 hover:border-green-600 transition-all"
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
