import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const videos = [
  { title: 'Video 01', src: '/media/video-01.mp4' },
  { title: 'Video 02', src: '/media/video-02.mp4' },
]

export default function Media() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="media" className="section-padding">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Media <span className="gradient-text">&amp; Editing</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full mb-4" />
          <p className="text-gray-400 mb-12 max-w-2xl">
            A selection of video work and visual storytelling.
          </p>

          <div className="media-grid">
            {videos.map((video, index) => (
              <motion.article
                key={video.src}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.12, duration: 0.5 }}
                className="glass media-card"
              >
                <video
                  className="media-video"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support MP4 video.
                </video>
                <h3 className="media-title">{video.title}</h3>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
