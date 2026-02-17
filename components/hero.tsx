'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface HeroProps {
  cinematicMode?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function Hero({ cinematicMode }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 sm:py-32 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/20 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 transition-colors duration-300">
      <motion.div
        className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Text */}
        <motion.div className="space-y-8" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-zinc-900 dark:text-white leading-tight text-xl-tracking">
              STORIES IN MOTION
            </h1>
          </motion.div>

          <motion.p variants={itemVariants} className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 max-w-md leading-relaxed">
            Cinematic visuals that capture emotion. Every frame tells a story. Every edit breathes life.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-4">
            <motion.a
              href="#works"
              className="inline-flex items-center gap-3 px-8 py-4 bg-orange-600 dark:bg-orange-500 text-white font-black tracking-widest text-sm hover:shadow-lg hover:shadow-orange-600/50 dark:hover:shadow-orange-500/50 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPLORE WORKS
              <motion.span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-8 space-y-2 text-xs text-zinc-500 dark:text-zinc-400 text-sm-tracking">
            <p>+251 945 770 952</p>
            <p>yabetsassfa@gmail.com</p>
            <p>Addis Ababa, Ethiopia</p>
          </motion.div>
        </motion.div>

        {/* Right side - Image */}
        <motion.div variants={itemVariants} className="relative flex justify-center">
          {/* Animated rings background */}
          <motion.div
            className="absolute w-96 h-96 rounded-full border border-orange-200/40 dark:border-orange-600/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full border border-orange-200/30 dark:border-orange-600/20"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute w-64 h-64 rounded-full border border-orange-200/20 dark:border-orange-600/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />

          {/* Main circular image */}
          <motion.div
            className="relative w-72 h-72 rounded-full overflow-hidden shadow-2xl shadow-orange-200/40 dark:shadow-orange-600/30 z-10"
            whileHover={{ scale: 1.05 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0 }}
          >
            {/* Animated glow background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-transparent to-transparent opacity-0 z-10"
              animate={{
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />

            <Image
              src="/yab-g-hero.jpg"
              alt="Yabets Getachew - Videographer & Editor"
              fill
              priority
              className="object-cover"
              sizes="300px"
            />

            {/* Border accent with glow */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-orange-500/60"
              animate={{
                borderColor: ['rgba(234, 88, 12, 0.6)', 'rgba(234, 88, 12, 0.8)', 'rgba(234, 88, 12, 0.6)'],
                boxShadow: ['0 0 20px rgba(234, 88, 12, 0.3)', '0 0 40px rgba(234, 88, 12, 0.5)', '0 0 20px rgba(234, 88, 12, 0.3)'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </motion.div>

          {/* Floating text accent */}
          <motion.div
            className="absolute -bottom-16 -right-12 text-right space-y-2"
            animate={{ y: [0, -12, 0], x: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <p className="text-sm text-orange-600/60 dark:text-orange-500/40 text-sm-tracking font-semibold">PREMIUM</p>
            <p className="text-5xl font-black text-orange-500/20 dark:text-orange-600/10 tracking-tight">CRAFT</p>
          </motion.div>

          {/* Decorative element */}
          <motion.div
            className="absolute top-0 -left-20 w-40 h-40 bg-orange-200/10 dark:bg-orange-600/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-orange-600/50 dark:text-orange-500/40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
