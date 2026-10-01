import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Security & VAPT',
    items: [
      'Vulnerability Assessment & Penetration Testing',
      'Web Application Security',
      'Network Reconnaissance',
      'Responsible Disclosure & Reporting',
    ],
  },
  {
    title: 'Security Tools',
    items: ['Metasploit', 'OWASP ZAP (Zaproxy)', 'Nmap', 'Wireshark', 'Sqlmap', 'Hydra', 'Maltego', 'Sysreptor'],
  },
  {
    title: 'Development',
    items: ['Java', 'JavaScript', 'Node.js', 'React.js', 'Express.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'Git', 'Postman'],
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Expertise</span>
          <div className="w-6 h-px bg-terminal mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          SKILLS
        </motion.h2>

        {/* Skills Groups */}
        <div className="space-y-16 lg:space-y-24">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12"
            >
              <h3 className="text-sm text-terminal tracking-widest uppercase">
                {group.title}
              </h3>
              <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
                {group.items.map((skill) => (
                  <div key={skill} className="border-b border-gray-800 pb-4">
                    <span className="text-base md:text-lg lg:text-xl text-gray-300 font-light">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
