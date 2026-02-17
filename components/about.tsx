'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function CountUp({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = 0;
    const range = end - start;
    const increment = end / (duration * 60);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current < end) {
        setCount(Math.floor(current));
      } else {
        setCount(end);
        clearInterval(timer);
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
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

export default function About() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-orange-50/20 dark:from-zinc-950 dark:to-zinc-950/80 border-t border-orange-200/40 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-zinc-900 dark:text-white text-xl-tracking mb-4">
            ABOUT
          </h2>
          <div className="w-16 h-1 bg-orange-600 dark:bg-orange-500"></div>
        </motion.div>

        {/* Main About Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              Passionate about bringing ideas to life through compelling visuals. I specialize in videography, video editing, graphic design, and social media management with a keen eye for detail and deep understanding of digital trends.
            </p>
            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
              From concept to final production, I transform visions into impactful visual experiences that captivate audiences and elevate brand identity. Every frame tells a story.
            </p>
          </div>

          {/* Stats Grid */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-6">
            <motion.div variants={itemVariants} className="bg-white dark:bg-zinc-900 p-6 rounded border border-orange-200/40 dark:border-orange-900/40 hover:border-orange-400 dark:hover:border-orange-700 hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300">
              <div className="text-4xl font-black text-orange-600 dark:text-orange-500 mb-2">
                <CountUp end={3} />+
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-sm-tracking">YEARS EXPERIENCE</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-zinc-900 p-6 rounded border border-orange-200/40 dark:border-orange-900/40 hover:border-orange-400 dark:hover:border-orange-700 hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300">
              <div className="text-4xl font-black text-orange-600 dark:text-orange-500 mb-2">
                <CountUp end={50} />+
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-sm-tracking">PROJECTS COMPLETED</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-zinc-900 p-6 rounded border border-orange-200/40 dark:border-orange-900/40 hover:border-orange-400 dark:hover:border-orange-700 hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300">
              <div className="text-4xl font-black text-orange-600 dark:text-orange-500 mb-2">7</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-sm-tracking">SOFTWARE TOOLS</p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white dark:bg-zinc-900 p-6 rounded border border-orange-200/40 dark:border-orange-900/40 hover:border-orange-400 dark:hover:border-orange-700 hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300">
              <div className="text-4xl font-black text-orange-600 dark:text-orange-500 mb-2">3</div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 text-sm-tracking">LANGUAGES</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Software Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 text-lg-tracking">SOFTWARE MASTERY</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {['Premiere Pro', 'Photoshop', 'Blender', 'Illustration', 'Indesign', 'Sketch Up', 'Lumion', 'After Effects'].map((skill) => (
              <motion.div
                key={skill}
                variants={itemVariants}
                className="bg-gradient-to-br from-orange-500/10 dark:from-orange-600/10 to-transparent border border-orange-300/40 dark:border-orange-900/40 p-4 rounded hover:border-orange-500 dark:hover:border-orange-600 hover:bg-orange-500/10 dark:hover:bg-orange-600/10 hover:shadow-md hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300"
                whileHover={{ y: -2 }}
              >
                <p className="text-center text-sm font-semibold text-zinc-700 dark:text-zinc-300">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-black text-zinc-900 dark:text-white mb-8 text-lg-tracking">KEY STRENGTHS</h3>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { title: 'Creativity', desc: 'Innovative visual storytelling and concept development' },
              { title: 'Attention to Detail', desc: 'Meticulous approach to quality and precision' },
              { title: 'Problem-Solving', desc: 'Quick thinking and adaptive solutions' },
              { title: 'Communication', desc: 'Clear collaboration with clients and teams' },
              { title: 'Adaptability', desc: 'Flexible and responsive to changing needs' },
              { title: 'Time Management', desc: 'Efficient delivery without compromising quality' },
            ].map((skill) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                className="bg-white dark:bg-zinc-900 border border-orange-200/40 dark:border-orange-900/40 p-6 rounded hover:border-orange-400 dark:hover:border-orange-700 hover:shadow-lg hover:shadow-orange-200/30 dark:hover:shadow-orange-900/30 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <h4 className="text-lg font-bold text-orange-600 dark:text-orange-500 mb-2">{skill.title}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{skill.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
