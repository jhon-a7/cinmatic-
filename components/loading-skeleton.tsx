'use client';

import { motion } from 'framer-motion';

export function LoadingSkeleton() {
  return (
    <motion.div
      className="space-y-4"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 1.5, repeat: Infinity }}
    >
      <div className="h-12 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 rounded w-3/4"></div>
      <div className="h-4 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 rounded w-full"></div>
      <div className="h-4 bg-gradient-to-r from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 rounded w-5/6"></div>
    </motion.div>
  );
}

export function LoadingCircle() {
  return (
    <motion.div
      className="w-12 h-12 rounded-full border-4 border-orange-200 dark:border-orange-900 border-t-orange-600 dark:border-t-orange-500"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    ></motion.div>
  );
}

export function LoadingDots() {
  return (
    <div className="flex gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 rounded-full bg-orange-600 dark:bg-orange-500"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}
