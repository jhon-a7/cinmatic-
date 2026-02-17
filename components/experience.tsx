'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const experiences = [
  {
    company: 'Dawit Dreams Company',
    period: '2024 - Present',
    role: 'Videographer & Video Editor',
    description: 'Professional video recording, editing, and social media content management for creative clients.',
    tasks: ['Video Production', 'Post-Production Editing', 'Social Media Management'],
  },
  {
    company: 'IBEX Technology & Promotion',
    period: '2024 - 2025',
    role: 'Video Editor & Graphic Designer',
    description: 'Created high-quality visual content for digital campaigns and brand identity projects.',
    tasks: ['Video Editing', 'Graphic Design', 'Digital Content Creation'],
  },
  {
    company: 'Kenosis Ministry',
    period: '2024 - Present',
    role: 'Video Editor & Content Manager',
    description: 'Managing video content production, graphic design, and YouTube channel strategy.',
    tasks: ['YouTube Management', 'Video Editing', 'Social Media Design'],
  },
];

const education = [
  {
    school: 'School of Advanced Graphic Design',
    year: '2022 - 2023',
    program: 'Advanced Graphic Design',
  },
  {
    school: 'School of Videography & Photography (TOM)',
    year: '2022 - 2023',
    program: 'Videography & Photography',
  },
  {
    school: 'School of Interior Design (EMD)',
    year: '2021 - 2022',
    program: 'Interior Design',
  },
  {
    school: 'Merhatibeb School',
    year: '2017 - 2020',
    program: 'High School',
  },
];

export function Experience() {
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
            EXPERIENCE
          </h2>
          <div className="w-16 h-1 bg-yellow-500"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Work Experience */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-12 text-lg-tracking">WORK HISTORY</h3>
            <div className="space-y-8">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="border-l-2 border-yellow-500 pl-6 relative"
                >
                  <div className="absolute -left-3 -top-1 w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <p className="text-xs text-yellow-600 dark:text-yellow-500 font-bold text-sm-tracking mb-1">{exp.period}</p>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">{exp.role}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{exp.company}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tasks.map((task) => (
                      <span
                        key={task}
                        className="text-xs bg-yellow-500/10 border border-yellow-500/30 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded"
                      >
                        {task}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-12 text-lg-tracking">EDUCATION</h3>
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-700 p-6 rounded hover:border-yellow-500/30 transition-colors duration-300"
                >
                  <p className="text-xs text-yellow-600 dark:text-yellow-500 font-bold text-sm-tracking mb-2">{edu.year}</p>
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">{edu.program}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{edu.school}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
