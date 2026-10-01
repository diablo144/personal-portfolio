import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' }
}

const education = [
  {
    school: 'Dr. Mahalingam College of Engineering and Technology',
    place: 'Pollachi, Tamil Nadu',
    degree: 'B.E. Computer Science and Engineering (Cyber Security)',
    detail: 'CGPA: 8.131 / 10 — security-first coursework with hands-on VAPT labs and full-stack development.',
    period: '2023 — 2027',
  },
  {
    school: 'Saraswathi Vidhyashram Matric Hr. Sec. School',
    place: 'Kavindapadi, Tamil Nadu',
    degree: 'HSC — Higher Secondary Certificate',
    detail: 'Completed with 84%.',
    period: '2021 — 2023',
  },
  {
    school: 'Saraswathi Vidhyashram Matric Hr. Sec. School',
    place: 'Kavindapadi, Tamil Nadu',
    degree: 'SSLC — Secondary School Certificate',
    detail: 'Completed secondary education.',
    period: '— 2021',
  },
]

const certifications = [
  { name: 'HTB Certified Penetration Testing Specialist (CPTS)', issuer: 'Hack The Box', status: 'In Progress' },
  { name: 'Introduction to MCP', issuer: 'Anthropic', status: 'Completed' },
  { name: 'JavaScript Certification', issuer: 'HackerRank', status: 'Completed' },
]

export function Education() {
  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">Background</span>
          <div className="w-6 h-px bg-terminal mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          EDUCATION
        </motion.h2>

        {/* Education Items */}
        <div className="space-y-0 mb-24 lg:mb-32">
          {education.map((item, index) => (
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-t border-gray-800 py-8 md:py-10 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                <div className="lg:col-span-2">
                  <p className="text-sm text-gray-500 tracking-widest uppercase">{item.period}</p>
                </div>
                <div className="lg:col-span-6">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-light text-white mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">{item.school}</p>
                  <p className="text-sm text-gray-600 mt-1">{item.place}</p>
                </div>
                <div className="lg:col-span-4">
                  <p className="text-gray-500 leading-relaxed text-sm lg:text-base">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Certifications */}
        <motion.div {...fadeInUp}>
          <p className="text-sm text-terminal tracking-widest uppercase mb-8">Certifications</p>
          <div className="space-y-0">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-t border-gray-800 py-5 md:py-6"
              >
                <div>
                  <h4 className="text-base md:text-lg text-white font-light">{cert.name}</h4>
                  <p className="text-sm text-gray-500 mt-1">{cert.issuer}</p>
                </div>
                <span
                  className={
                    cert.status === 'In Progress'
                      ? 'text-xs text-terminal tracking-widest uppercase'
                      : 'text-xs text-gray-600 tracking-widest uppercase'
                  }
                >
                  {cert.status}
                </span>
              </div>
            ))}
            <div className="border-t border-gray-800" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
