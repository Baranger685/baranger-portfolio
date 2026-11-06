import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, Building2 } from 'lucide-react'

const experiences = [
  {
    title: 'Operations Executive',
    company: 'MedCube USA',
    period: '2024 – Present',
    type: 'Full-time',
    points: [
      'Process and validate healthcare, insurance, and billing records with high accuracy.',
      'Resolve data discrepancies and maintain organized, audit-ready documentation.',
      'Coordinate with management teams to improve data quality and operational efficiency.',
    ],
  },
  {
    title: 'Part-Time Business Analyst',
    company: 'Merge Studio (Pvt) Ltd',
    period: '2025 – Present',
    type: 'Part-time',
    points: [
      'Gather business requirements and document stakeholder needs.',
      'Analyze business processes and identify areas for improvement.',
      'Support communication between business and technical teams to optimize workflows.',
    ],
  },
  {
    title: 'MERCH Team Lead',
    company: 'D-VOICE',
    period: '2024',
    type: 'Leadership',
    points: [],
  },
  {
    title: 'Western Music Guitarist',
    company: '',
    period: '2014 – 2022',
    type: 'Music',
    points: [],
  },
  {
    title: 'CYIA Mission Compressor',
    company: 'CEF',
    period: '2018',
    type: 'Community',
    points: [],
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="section-padding section-muted">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full mb-12" />

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/40 via-white/15 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.15 }}
                  className="relative pl-12 sm:pl-20"
                >
                  {/* Dot */}
                  <div className="absolute left-2.5 sm:left-6.5 top-2 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-white to-gray-400 shadow-lg shadow-white/20" />

                  <motion.div
                    className="glass rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                          <Briefcase size={18} className="text-white/80" />
                          {exp.title}
                        </h3>
                        {exp.company && (
                          <p className="text-white/75 flex items-center gap-1.5 mt-1">
                            <Building2 size={15} />
                            {exp.company}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-gray-400">{exp.period}</span>
                        <div className="mt-1">
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/80">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {exp.points.length > 0 && (
                      <ul className="space-y-2 mt-4">
                        {exp.points.map((point, idx) => (
                          <li key={idx} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
                            <span className="text-white/70 mt-1.5">▹</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
