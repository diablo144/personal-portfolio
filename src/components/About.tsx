import { motion } from 'framer-motion'

const stats = [
  { value: '8.131/10', label: 'CGPA — B.E. Cyber Security' },
  { value: '80/6,744', label: 'HTB Cyber Apocalypse CTF' },
  { value: '5th', label: 'z0d1ak CTF Finale' },
  { value: '0', label: 'Dependencies in ENV-Warden' },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">About Sanjay</span>
          <div className="w-6 h-px bg-terminal mt-2" />
        </motion.div>

        {/* First Block */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="flex items-center order-2 lg:order-1">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Final-year Computer Science (Cyber Security) undergraduate at Dr.
              Mahalingam College of Engineering and Technology, Pollachi. Hands-on
              with Vulnerability Assessment &amp; Penetration Testing and a
              security-first approach to full-stack development — comfortable
              across the MERN stack.
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <p className="font-display text-[10vw] lg:text-large leading-none tracking-tight text-gray-300">
              BREAK THINGS.
              <br />
              <span className="text-terminal">UNDERSTAND</span>
              <br />
              HOW THEY WORK.
            </p>
          </motion.div>
        </div>

        {/* Quote / Achievement Block */}
        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            "RANKED <span className="text-white underline underline-offset-8">80TH OF 6,744</span> TEAMS<br />
            AT HACK THE BOX'S<br />
            CYBER APOCALYPSE CTF."
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            GLOBAL CTF<br />
            TEAM LEAD, INTERNATIONAL SQUAD
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 pt-6"
            >
              <p className="font-display text-4xl lg:text-6xl text-white leading-none">
                {stat.value}
              </p>
              <p className="mt-3 text-xs lg:text-sm text-gray-500 tracking-widest uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
