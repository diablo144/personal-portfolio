import { motion } from 'framer-motion'
import heroImg from '@/assets/hero-cyber.jpg'
import portrait from '@/assets/sanjay-portrait.jpg'

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Responsive */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImg}
          alt="Cybersecurity workstation"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50 md:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end md:items-center pb-32 md:pb-0 px-4 sm:px-6 md:px-12 lg:px-16 md:pr-32 lg:pr-40">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-10 lg:gap-16">

          {/* Typography */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-[clamp(3rem,7.5vw,7.5rem)]">
              <span className="block text-white">SANJAY S</span>
              <span className="block text-terminal">CYBERSECURITY</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-6 md:mt-8 text-sm sm:text-base text-white/80 max-w-sm md:max-w-md leading-relaxed"
            >
              Final-year Computer Science (Cyber Security) undergraduate focused on
              VAPT and application security — building secure software by day and
              hunting vulnerabilities in CTFs by night.
            </motion.p>
          </motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            className="hidden md:block shrink-0"
          >
            <div className="relative w-52 lg:w-64">
              <img
                src={portrait}
                alt="Sanjay S"
                className="w-full aspect-[3/4] object-cover object-top rounded-2xl border border-terminal/40 shadow-[0_20px_70px_rgba(0,0,0,0.5),0_0_50px_rgba(34,197,94,0.16)]"
              />
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
