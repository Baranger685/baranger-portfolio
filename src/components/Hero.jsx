import { motion } from 'framer-motion'
import { ArrowDownRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="editorial-hero">
      <div className="hero-intro">
        <div className="hero-heading-wrap">
          <motion.p
            className="hero-kicker"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            PORTFOLIO · 2025—26
          </motion.p>
          <motion.h1
            className="hero-heading"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            BENJAMIN
            <br />
            <span>BARANGER</span>
          </motion.h1>
        </div>

        <motion.div
          className="hero-summary"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <p>
            Hi, I’m Baranger Benjamin. I bring business thinking and thoughtful
            technology together to make useful digital experiences.
          </p>
          <a href="#about" className="hero-text-link">
            More about me <ArrowDownRight size={17} />
          </a>
        </motion.div>
      </div>

      <div className="showcase-strip" aria-label="Selected project disciplines">
        {[0, 1, 2].map((index) => {
          return (
            <motion.a
              key={index}
              href="#projects"
              className="showcase-tile showcase-photo-panel"
              aria-label="Explore selected projects"
              initial={{ opacity: 0, y: 22, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.25 + index * 0.1 }}
              whileHover={{ scale: 1.015 }}
            >
              <div className="showcase-art" aria-hidden="true">
                <img
                  src="/portfolio-showcase.png"
                  alt=""
                  className="showcase-photo"
                  style={{ '--showcase-image-offset': `${-index * 33.333333}%` }}
                />
              </div>
            </motion.a>
          )
        })}
      </div>

      <motion.div
        className="hero-statement"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <span>THOUGHTFUL DESIGN.</span>
        <span>MEASURABLE IMPACT.</span>
      </motion.div>
    </section>
  )
}
