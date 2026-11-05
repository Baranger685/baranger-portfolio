import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'Technical Skills',
    items: ['Java', 'Kotlin', 'JavaScript', 'MERN Stack', 'Spring Boot'],
    imagePosition: '0%',
    discipline: 'Engineering',
  },
  {
    title: 'Design Tools',
    items: ['Figma', 'Stitch AI', 'Magic Patterns'],
    imagePosition: '50%',
    discipline: 'Creative practice',
  },
  {
    title: 'Tools & Platforms',
    items: ['Power BI', 'Git / GitHub', 'MS Office', 'AI Tools'],
    imagePosition: '100%',
    discipline: 'Digital toolkit',
  },
  {
    title: 'Core Skills',
    items: ['Business Analysis', 'Process Improvement', 'Quality Assurance', 'Team Management'],
    imagePosition: '50%',
    discipline: 'How I work',
  },
]

const languages = [
  { name: 'Sinhala', level: 'Native' },
  { name: 'Tamil', level: 'Fluent' },
  { name: 'English', level: 'Professional' },
]

const expertise = ['Management Skills', 'Creativity', 'Leadership', 'Negotiation']

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="skills-heading">
            <div>
              <p className="skills-eyebrow">MY TOOLKIT / 01—06</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
                Skills & <span className="gradient-text">Expertise</span>
              </h2>
            </div>
            <p className="skills-intro">
              A considered mix of technology, design, and the skills to bring ideas to life.
            </p>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full mb-12" />

          <div className="skills-grid">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.12 + i * 0.1, duration: 0.55 }}
                whileHover={{ y: -5 }}
                className="glass skill-card"
              >
                <div
                  className="skill-card-art"
                  style={{ '--skill-image-position': group.imagePosition }}
                  aria-hidden="true"
                >
                  <span className="skill-card-discipline">{group.discipline}</span>
                  <span className="skill-card-number">0{i + 1}</span>
                </div>
                <div className="skill-card-content">
                  <h3>{group.title}</h3>
                  <div className="skill-tags">
                    {group.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, y: 8 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.25 + i * 0.1 + skillIndex * 0.045 }}
                        whileHover={{ y: -3, scale: 1.035 }}
                        className="skill-tag"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="skills-secondary-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass skill-detail-card"
            >
              <div className="skill-detail-heading">
                <span className="skill-detail-index">05 / COMMUNICATION</span>
                <h3>Languages</h3>
              </div>
              <div className="language-list">
                {languages.map((lang) => (
                  <div key={lang.name} className="language-row">
                    <span>{lang.name}</span>
                    <span>{lang.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass skill-detail-card"
            >
              <div className="skill-detail-heading">
                <span className="skill-detail-index">06 / PEOPLE & PROCESS</span>
                <h3>Soft Skills</h3>
              </div>
              <div className="skill-tags skill-tags-secondary">
                {expertise.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ y: -3, scale: 1.035 }}
                    className="skill-tag"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
