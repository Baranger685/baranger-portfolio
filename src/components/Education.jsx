import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const education = [
  {
    title: 'BSc (Hons) in Information Technology',
    institution: 'SLIIT',
    period: '2022 – Present',
    detail: '4th Year Undergraduate',
    icon: GraduationCap,
  },
  {
    title: 'GCE Advanced Level',
    institution: 'Engineering Technology Stream',
    period: '2019 – 2022',
    detail: '',
    icon: BookOpen,
  },
  {
    title: 'Certificate in Spoken & Upper Secondary English',
    institution: 'British Council, Sri Lanka',
    period: '2018',
    detail: 'Batch Top',
    icon: Award,
  },
  {
    title: 'GCE Ordinary Level',
    institution: '',
    period: '2017',
    detail: '',
    icon: BookOpen,
  },
]

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="education" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full mb-12" />

          <div className="grid sm:grid-cols-2 gap-5">
            {education.map((edu, i) => {
              const Icon = edu.icon
              return (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.1, type: 'spring', stiffness: 120, damping: 18 }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="glass rounded-2xl p-5 flex gap-4 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center">
                    <Icon size={22} className="text-white/85" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white leading-snug">{edu.title}</h3>
                    {edu.institution && (
                      <p className="text-sm text-white/75 mt-0.5">{edu.institution}</p>
                    )}
                    <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-400">
                      <span>{edu.period}</span>
                      {edu.detail && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-600" />
                          <span className="text-white/70">{edu.detail}</span>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
