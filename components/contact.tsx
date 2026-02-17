'use client';

import { motion } from 'framer-motion';

interface ContactProps {
  cinematicMode?: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Contact({ cinematicMode }: ContactProps) {
  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-white via-orange-50/20 to-white dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 border-t border-orange-200/40 dark:border-zinc-800 transition-colors duration-300">
      <motion.div
        className="max-w-5xl mx-auto text-center space-y-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div className="space-y-6" variants={containerVariants}>
          <motion.h2 variants={itemVariants} className="text-5xl sm:text-6xl font-black text-zinc-900 dark:text-white text-xl-tracking leading-tight">
            LET'S CREATE SOMETHING <br />
            <span className="text-orange-600 dark:text-orange-500">EXTRAORDINARY</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's talk about your vision and bring it to life with cinematic excellence.
          </motion.p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-16"
        >
          {/* Email */}
          <motion.a
            variants={itemVariants}
            href="mailto:yabetsassfa@gmail.com"
            className="group px-8 py-8 border border-orange-300/40 dark:border-zinc-700 hover:border-orange-500/60 dark:hover:border-orange-500/50 bg-white/50 dark:bg-zinc-900/50 hover:bg-orange-500/10 dark:hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/20 transition-all duration-300 rounded"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-xs font-bold text-orange-600 dark:text-orange-500 text-sm-tracking uppercase mb-3">Email</p>
            <p className="text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors duration-300">
              yabetsassfa@gmail.com
            </p>
          </motion.a>

          {/* Phone */}
          <motion.a
            variants={itemVariants}
            href="tel:+251945770952"
            className="group px-8 py-8 border border-orange-300/40 dark:border-zinc-700 hover:border-orange-500/60 dark:hover:border-orange-500/50 bg-white/50 dark:bg-zinc-900/50 hover:bg-orange-500/10 dark:hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/20 transition-all duration-300 rounded"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="text-xs font-bold text-orange-600 dark:text-orange-500 text-sm-tracking uppercase mb-3">Phone</p>
            <p className="text-lg text-zinc-900 dark:text-zinc-100 group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors duration-300">
              +251 945 770 952
            </p>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          className="space-y-6 pt-12 border-t border-orange-200/40 dark:border-zinc-800"
          variants={itemVariants}
        >
          <p className="text-xs font-bold text-orange-600 dark:text-orange-500 text-sm-tracking uppercase">Connect</p>
          <motion.div
            className="flex items-center justify-center gap-8"
            variants={containerVariants}
          >
            {[
              { name: 'Instagram', href: '#', icon: '📸' },
              { name: 'LinkedIn', href: '#', icon: '💼' },
              { name: 'YouTube', href: '#', icon: '▶️' },
              { name: 'Twitter', href: '#', icon: '𝕏' },
            ].map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="text-xs font-bold text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-500 text-sm-tracking transition-colors duration-300 flex flex-col items-center gap-1"
                aria-label={social.name}
                variants={itemVariants}
                whileHover={{ scale: 1.2, y: -4 }}
              >
                <span className="text-2xl">{social.icon}</span>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div variants={itemVariants} className="pt-12">
          <motion.a
            href="mailto:yabetsassfa@gmail.com?subject=Let's%20Create%20Together"
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange-600 dark:bg-orange-500 text-white font-black text-sm-tracking hover:shadow-lg hover:shadow-orange-600/50 dark:hover:shadow-orange-500/50 transition-all duration-300 group rounded"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            START A PROJECT
            <motion.span
              className="group-hover:translate-x-1 transition-transform duration-300"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.div
        className="max-w-6xl mx-auto mt-24 pt-12 border-t border-orange-200/40 dark:border-zinc-800"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-zinc-600 dark:text-zinc-400 text-sm-tracking">
          <p>© 2026 Yabets Getachew. All rights reserved.</p>
          <span className="hidden sm:block text-orange-600 dark:text-orange-500">•</span>
          <p>Crafted with vision. Shot with passion. Edited with precision.</p>
        </div>
      </motion.div>
    </section>
  );
}
