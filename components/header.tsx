'use client';

import { motion } from 'framer-motion';
import { ThemeToggle } from './theme-toggle';

interface HeaderProps {
  cinematicMode: boolean;
  setCinematicMode: (value: boolean) => void;
}

export default function Header({ cinematicMode, setCinematicMode }: HeaderProps) {
  return (
    <motion.header
      className="sticky top-0 z-50 px-4 sm:px-6 lg:px-8 py-6 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border-b border-orange-200/40 dark:border-zinc-700/40 transition-colors duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <motion.div className="flex flex-col" whileHover={{ scale: 1.02 }}>
          <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white text-lg-tracking">
            YABETS GETACHEW
          </h1>
          <p className="text-xs text-orange-600 dark:text-orange-500 text-sm-tracking mt-1">
            VIDEOGRAPHER & EDITOR
          </p>
        </motion.div>

        {/* Controls */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Cinematic Mode Toggle */}
          <motion.button
            onClick={() => setCinematicMode(!cinematicMode)}
            className="group flex items-center gap-2 px-4 py-2 border border-orange-300 dark:border-orange-600 hover:border-orange-600 dark:hover:border-orange-400 text-xs text-zinc-600 dark:text-orange-300 hover:text-orange-600 dark:hover:text-orange-400 text-sm-tracking transition-all duration-300 rounded"
            aria-label={`Cinematic Mode ${cinematicMode ? 'On' : 'Off'}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-400"
              animate={{
                boxShadow: cinematicMode
                  ? ['0 0 0 0 rgba(234, 88, 12, 0.7)', '0 0 0 4px rgba(234, 88, 12, 0)']
                  : ['0 0 0 0 rgba(234, 88, 12, 0)', '0 0 0 0 rgba(234, 88, 12, 0)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>CINEMATIC</span>
            <motion.span
              className="text-orange-600 dark:text-orange-400 font-bold"
              animate={{ opacity: cinematicMode ? 1 : 0.5 }}
            >
              {cinematicMode ? 'ON' : 'OFF'}
            </motion.span>
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
