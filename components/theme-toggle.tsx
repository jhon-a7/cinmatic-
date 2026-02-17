'use client';

import { useTheme } from '@/app/theme-provider';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative flex items-center gap-2 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded">
        <div className="w-4 h-4 bg-zinc-300 dark:bg-zinc-600 rounded-full animate-pulse" />
        <span className="text-xs font-semibold text-zinc-400">THEME</span>
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {theme === 'light' ? (
          <Sun className="w-4 h-4 text-orange-600" />
        ) : (
          <Moon className="w-4 h-4 text-blue-400" />
        )}
      </motion.div>
      <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
        {theme === 'light' ? 'LIGHT' : 'DARK'}
      </span>
    </motion.button>
  );
}
