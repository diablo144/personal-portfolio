import { motion } from 'framer-motion'

const achievements = [
  {
    title: 'Hackathon — Peer-to-Peer Academic Support Platform',
    result: 'Winner',
    detail: 'Hackathon — Built a winning P2P academic support platform',
    year: '2024',
  },
  {
    title: 'z0d1ak CTF Finals',
    result: '5th Place',
    detail: 'CTFtime — 5,811 CTF points',
    year: '2026',
  },
  {
    title: 'Bushbash CTF',
    result: '13th Place',
    detail: 'CTFtime — International CTF',
    year: '2026',
  },
  {
    title: 'z0d1ak CTF Qualifiers',
    result: '16th Place',
    detail: 'CTFtime — 6,384 CTF points',
    year: '2026',
  },
  {
    title: 'Uni6 CTF',
    result: '22nd Place (National)',
    detail: 'National-level CTF',
    year: '2025',
  },
  {
    title: 'HTB Cyber Apocalypse CTF',
    result: '80th of 6,744 teams',
    detail: 'Hack The Box — Global CTF',
    year: '2025',
  },
  {
    title: 'H7CTF 2026 Quals',
    result: '117th Place',
    detail: 'CTFtime — 4,928 CTF points',
    year: '2026',
  },
  {
    title: 'UIUCTF 2026',
    result: '123rd Place',
    detail: 'CTFtime — 533 CTF points',
    year: '2026',
  },
  {
    title: 'COMPFEST CTF 2026',
    result: '182nd Place',
    detail: 'CTFtime — 310 CTF points',
    year: '2026',
  },
  {
    title: 'ASIS CTF Quals 2026',
    result: '192nd Place',
    detail: 'CTFtime — 337 CTF points',
    year: '2026',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Writing() {
  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Competitions</span>
          <div className="w-6 h-px bg-terminal mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          CTF
          <br />
          ACHIEVEMENTS
        </motion.h2>

        {/* Achievements List */}
        <div className="space-y-0">
          {achievements.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 py-6 md:py-8 group px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 md:mt-2">{item.detail}</p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="text-terminal text-sm tracking-widest uppercase">{item.result}</span>
                  <span className="text-sm text-gray-600">{item.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
