import { motion } from 'framer-motion'

const projects = [
  {
    title: 'ENV-Warden',
    tagline: 'Environment Variable Validator — Node.js CLI',
    description:
      'A zero-production-dependency CLI (4 commands) that validates, type-checks, and secures environment variables before an application starts. Sensitive values like API keys and database URLs are redacted so credentials never leak into logs or serialized output.',
    tech: ['Node.js', 'CLI', 'Security'],
    link: 'https://github.com/diablo144/env-warden',
  },
  {
    title: 'imageAnalyser',
    tagline: 'Image analysis tool',
    description:
      'A TypeScript-based tool for analysing images — built as part of an ongoing exploration of how automated analysis can support security workflows.',
    tech: ['TypeScript'],
    link: 'https://github.com/diablo144/imageAnalyser',
  },
  {
    title: 'Issue-reporting',
    tagline: 'Full-stack issue tracker',
    description:
      'A JavaScript application for reporting and tracking issues, built to practice full-stack workflows and REST API design.',
    tech: ['JavaScript', 'REST APIs'],
    link: 'https://github.com/diablo144/Issue-reporting',
  },
  {
    title: 'Password-Generator',
    tagline: 'Secure password generator',
    description:
      'A small web tool for generating strong passwords — where security and frontend work meet.',
    tech: ['JavaScript', 'CSS'],
    link: 'https://github.com/diablo144/Password-Generator',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 1, ease: 'easeOut' }
}

export function Work() {
  return (
    <section id="work" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">GitHub — diablo144</span>
          <div className="w-6 h-px bg-terminal mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          PROJECTS
        </motion.h2>

        {/* Projects */}
        <div className="space-y-0">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
              className="block border-t border-gray-800 py-8 md:py-12 lg:py-16 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-12">
                <div className="lg:w-1/3">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-white mb-2 group-hover:text-terminal transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500">{project.tagline}</p>
                </div>

                <div className="lg:flex-1 lg:max-w-xl">
                  <p className="text-gray-400 leading-relaxed mb-6 text-sm lg:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs text-gray-500 border border-gray-800 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="text-gray-600 group-hover:text-white transition-colors hidden lg:block">
                  ↗
                </span>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* View All */}
        <motion.div {...fadeInUp} className="mt-12">
          <a
            href="https://github.com/diablo144?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-terminal transition-colors tracking-widest uppercase"
          >
            View all repositories on GitHub ↗
          </a>
        </motion.div>
      </div>
    </section>
  )
}
