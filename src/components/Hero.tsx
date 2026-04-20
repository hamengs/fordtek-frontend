import { motion } from 'motion/react';
import type { HeroContent } from '../types/hero';

// Hero renders the large homepage banner image, headline, supporting copy,
// and primary call-to-action button.
export function Hero({
  title,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  imageAlt,
}: HeroContent) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Controls the background image that fills the hero area. */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover brightness-[0.82]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.42)_0%,rgba(2,6,23,0.14)_26%,rgba(2,6,23,0.54)_100%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 text-white sm:px-10 lg:px-16"
      >
        <div className="max-w-4xl">
          <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] drop-shadow-2xl sm:text-6xl lg:text-8xl">
            {title}
          </h1>
        </div>
        <p className="mt-8 max-w-2xl text-lg leading-8 font-medium text-white/92 sm:text-xl sm:leading-9 lg:text-2xl">
          {description}
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={buttonLink}
          className="mt-10 inline-block cursor-pointer rounded-full border border-white/30 bg-white/14 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-900 sm:px-10 sm:py-4 sm:text-lg"
        >
          {buttonText}
        </motion.a>
      </motion.div>
    </section>
  );
}
