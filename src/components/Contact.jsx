import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <section id="contact" className="section-padding section-muted">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4 text-center">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full mx-auto mb-4" />
          <p className="text-gray-400 text-center max-w-lg mx-auto mb-12">
            Looking for opportunities in development, business analysis, or freelance work. 
            Feel free to reach out — I'd love to hear from you.
          </p>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <a
                href="mailto:baranger369@gmail.com"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="text-white/85" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">baranger369@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+94773048589"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="text-white/85" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-medium">+94 77 304 8589</p>
                </div>
              </a>

              <div className="flex items-center gap-4 glass rounded-xl p-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <MapPin className="text-white/85" size={22} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">Gampola, Sri Lanka</p>
                </div>
              </div>

              <div className="flex gap-4 pt-2">
                <a
                  href="https://github.com/Baranger685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full glass hover:bg-white/10 transition text-sm"
                >
                  <Github size={18} /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/baranger-benjamin-287324210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full glass hover:bg-white/10 transition text-sm"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
