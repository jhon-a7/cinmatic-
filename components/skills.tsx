'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const skillCategories = [
  {
    title: 'Video Production',
    skills: ['Cinematography', 'Video Recording', 'Directing', 'Motion Design', 'Videography'],
  },
  {
    title: 'Post-Production',
    skills: ['Video Editing', 'Color Grading', 'Sound Design', 'VFX', 'Animation'],
  },
  {
    title: 'Design',
    skills: ['Graphic Design', 'Visual Identity', 'UI/UX', 'Web Design', 'Illustration'],
  },
  {
    title: 'Digital Strategy',
    skills: ['Social Media Management', 'Content Strategy', 'YouTube Management', 'Digital Marketing'],
  },
];

const languages = [
  { lang: 'Amharic', level: 'Native' },
  { lang: 'English', level: 'Fluent' },
  { lang: 'Tigrigna', level: 'Fluent' },
];

export function Skills() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-zinc-900 dark:text-white text-xl-tracking mb-4">
            SKILLS
          </h2>
          <div className="w-16 h-1 bg-yellow-500"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-white dark:bg-zinc-900/30 bg-gradient-to-br from-yellow-500/5 to-transparent border border-yellow-500/20 dark:border-yellow-500/20 p-8 rounded hover:border-yellow-500/40 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-yellow-600 dark:text-yellow-500 mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm bg-zinc-200/80 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 px-4 py-2 rounded hover:border-yellow-500/50 hover:text-yellow-600 dark:hover:text-yellow-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 text-lg-tracking">LANGUAGES</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {languages.map((lang) => (
              <motion.div
                key={lang.lang}
                variants={itemVariants}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-6 rounded text-center hover:border-yellow-500/30 transition-colors duration-300"
              >
                <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{lang.lang}</h4>
                <p className="text-sm text-yellow-600 dark:text-yellow-500 font-semibold">{lang.level}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
