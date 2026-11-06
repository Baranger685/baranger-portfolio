import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import profileImage from '../assets/about-me-photo.png'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full mb-10" />

          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 }}
              className="relative mx-auto w-full max-w-sm overflow-hidden rounded-3xl border border-black/10 bg-white/50"
            >
              <img
                src={profileImage}
                alt="Baranger Benjamin"
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-12 text-sm font-medium text-white">
                Baranger Benjamin
              </figcaption>
            </motion.figure>

            <div className="space-y-8">
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  I have graduated with a <strong className="text-white">BSc (Hons) in Information Technology</strong> from SLIIT,
                  with a strong foundation in both software development and business analysis.
                </p>
                <p>
                  Currently working as an <strong className="text-white">Operations Executive at MedCube USA</strong>, I handle healthcare,
                  insurance, and billing records with high accuracy while identifying opportunities to improve operational efficiency.
                </p>
                <p>
                  In parallel, I serve as a <strong className="text-white">Part-Time Business Analyst at Merge Studio</strong>,
                  where I gather requirements, analyze processes, and bridge the gap between business stakeholders and technical teams.
                </p>
                <p>
                  I enjoy building end-to-end solutions — from designing clean UIs in Figma to developing robust backends with
                  Spring Boot and modern frontends with the MERN stack.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Years of Experience', value: '2+' },
                  { label: 'Projects Completed', value: '6+' },
                  { label: 'Technologies', value: '15+' },
                  { label: 'Languages', value: '3' },
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="glass rounded-2xl p-5 text-center hover:bg-white/10 transition-colors"
                  >
                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
