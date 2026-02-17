'use client';

import { motion } from 'framer-motion';

interface WorksProps {
  cinematicMode?: boolean;
}

export default function Works({ cinematicMode }: WorksProps) {
  const DAWIT_DREAMS_VIDEO =
    'https://player.cloudinary.com/embed/?cloud_name=dyzhbjom8&public_id=IMG_3810_zl9afg&autoplay=true&muted=true&loop=true&muted_default=true';

  const works = [
    {
      id: 1,
      name: 'Dawit Dreams',
      description: 'Cinematic brand storytelling and social content creation. Capturing authentic moments with premium production value.',
      role: 'Lead Videographer & Editor',
      tags: ['Cinematography', 'Social Media', 'Brand Content'],
      videoUrl: DAWIT_DREAMS_VIDEO,
    },
    {
      id: 2,
      name: 'Abay TV',
      description: 'High-quality broadcast content and digital storytelling. Crafting engaging narratives for diverse audiences.',
      role: 'Video Editor & Motion Designer',
      tags: ['Broadcast', 'Motion Graphics', 'Content Strategy']
    }
  ];

  return (
    <section id="works" className="px-4 sm:px-6 lg:px-8 py-32 bg-gradient-to-b from-orange-50/30 to-white dark:from-zinc-950 dark:to-zinc-900 border-t border-orange-200/40 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl sm:text-6xl font-black text-zinc-900 dark:text-white text-xl-tracking mb-4">
            FEATURED WORKS
          </h2>
          <div className="w-16 h-1 bg-orange-600 dark:bg-orange-500 mb-8"></div>
          <p className="text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 max-w-2xl leading-relaxed">
            Transforming visions into captivating visual experiences. Each project is a journey of creative excellence.
          </p>
        </motion.div>

        {/* Works grid */}
        <div className="space-y-24">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-x-24 lg:gap-y-12 items-stretch ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Video: Cloudinary embed for Dawit Dreams, placeholder for others */}
              <motion.div
                className={`relative aspect-video overflow-hidden bg-gradient-to-br from-orange-50 to-amber-50 dark:from-zinc-900 dark:to-zinc-800 border border-orange-300/40 dark:border-zinc-700 group rounded shadow-lg shadow-orange-200/20 dark:shadow-none ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                {'videoUrl' in work && work.videoUrl ? (
                  <iframe
                    src={work.videoUrl}
                    title={`${work.name} video`}
                    className="absolute inset-0 w-full h-full rounded"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-500/10 via-transparent to-white/30 dark:to-zinc-800/30 z-10"
                      animate={{ opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <div className="text-center space-y-4">
                        <motion.svg
                          className="w-16 h-16 mx-auto text-orange-600/50 dark:text-orange-500/50 group-hover:text-orange-600/70 dark:group-hover:text-orange-500/70 transition-colors duration-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <path d="M8 5v14l11-7z" />
                        </motion.svg>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 group-hover:text-orange-600/70 dark:group-hover:text-orange-500/70 transition-colors duration-300">
                          Video Placeholder
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      className="absolute inset-0 border border-orange-300/40 dark:border-zinc-600/40 group-hover:border-orange-500/60 dark:group-hover:border-orange-500/50 transition-colors duration-300 z-20 rounded"
                      animate={{ borderColor: ['rgba(234, 88, 12, 0.3)', 'rgba(234, 88, 12, 0.5)', 'rgba(234, 88, 12, 0.3)'] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />
                    <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 transition-colors duration-300" />
                  </>
                )}
              </motion.div>

              {/* Content */}
              <motion.div
                className={`flex flex-col justify-between py-4 ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}
                initial={{ opacity: 0, x: index % 2 === 1 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 + 0.1 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-4xl sm:text-5xl font-black text-zinc-900 dark:text-white mb-3 text-lg-tracking">
                      {work.name}
                    </h3>
                    <p className="text-xs font-bold text-orange-600 dark:text-orange-500 text-sm-tracking">
                      {work.role}
                    </p>
                  </div>

                  <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed max-w-md">
                    {work.description}
                  </p>

                  {/* Tags */}
                  <motion.div
                    className="flex flex-wrap gap-3 pt-4"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                        },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {work.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        className="px-4 py-2 border border-orange-400/40 dark:border-orange-500/40 text-xs text-orange-600 dark:text-orange-500 text-sm-tracking hover:border-orange-500 dark:hover:border-orange-400 hover:bg-orange-500/10 transition-all duration-300 rounded"
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-orange-600 dark:text-orange-500 text-sm-tracking hover:text-orange-700 dark:hover:text-orange-400 transition-colors duration-300 group/link"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>EXPLORE</span>
                  <motion.span
                    className="group-hover/link:translate-x-1 transition-transform duration-300"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="mt-32 pt-24 border-t border-orange-200/40 dark:border-zinc-800 grid grid-cols-1 lg:grid-cols-2 gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h4 className="text-sm font-bold text-orange-600 dark:text-orange-500 text-sm-tracking uppercase mb-4">
              Experience
            </h4>
            <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-600 dark:bg-orange-500" />
                Dawit Dreams Company (2024-Present)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-600 dark:bg-orange-500" />
                IBEX Technology & Promotion
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-orange-600 dark:bg-orange-500" />
                Kenosis Ministry
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-orange-600 dark:text-orange-500 text-sm-tracking uppercase mb-4">
              Software Expertise
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Photoshop', 'Blender', 'Final Cut Pro'].map((tool) => (
                <span key={tool} className="text-sm text-zinc-700 dark:text-zinc-300">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
