import { motion } from 'motion/react';
import type { HeroContent } from '../types/hero';

export function Hero({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
}: HeroContent) {
  return (
    <section className="relative h-[650px] flex items-center justify-center overflow-hidden">
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 w-full h-full object-cover brightness-[0.85]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center text-white px-4 max-w-4xl"
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-2xl">{title}</h1>
        <p className="text-xl md:text-2xl mb-10 font-medium max-w-2xl mx-auto opacity-95 leading-relaxed">
          {description}
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={buttonLink}
          className="inline-block cursor-pointer bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-2xl"
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}
