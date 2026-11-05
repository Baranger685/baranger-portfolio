import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowLeft, ArrowRight, ExternalLink, Github, Layers, Play, X } from 'lucide-react'
import publicAsset from '../utils/publicAsset'

const projects = [
  {
    title: 'Garment Production Job Card System',
    category: 'Full-Stack · Workforce Management',
    description: 'A job-card system for garment production teams to record hourly output, calculate efficiency, review daily targets, and flag low-efficiency shifts.',
    tags: ['Next.js', 'React', 'TypeScript', 'Flask', 'Production'],
    color: 'from-white/15 to-gray-500/10',
    codeUrl: 'https://github.com/Baranger685/JOB-CARD',
    gallery: [
      publicAsset('job-card/job-card-01.png'),
      publicAsset('job-card/job-card-02.png'),
    ],
    video: publicAsset('job-card/job-card-demo.mp4'),
  },
  {
    title: 'ECO Fitness',
    category: 'React · Sustainable Fitness',
    description: 'A fitness platform for sustainable workout routines, progress tracking, eco-friendly metrics, and community.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Fitness'],
    color: 'from-white/15 to-gray-500/10',
    codeUrl: 'https://github.com/Baranger685/ECO-Fitness',
    gallery: [
      publicAsset('eco-fitness/eco-fitness-01.png'),
      publicAsset('eco-fitness/eco-fitness-02.png'),
      publicAsset('eco-fitness/eco-fitness-03.png'),
      publicAsset('eco-fitness/eco-fitness-04.png'),
    ],
    video: publicAsset('eco-fitness/eco-fitness-demo.mp4'),
  },
  {
    title: 'Fitness Tracking App UI/UX',
    category: 'Figma Design',
    description: 'Clean and user-friendly interface design for a modern fitness tracking application.',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    color: 'from-white/15 to-gray-500/10',
    gallery: [
      publicAsset('fitness-tracker/fitness-deck-01.png'),
      publicAsset('fitness-tracker/fitness-deck-02.png'),
      publicAsset('fitness-tracker/fitness-deck-03.png'),
      publicAsset('fitness-tracker/fitness-deck-04.png'),
      publicAsset('fitness-tracker/fitness-deck-05.png'),
    ],
    video: publicAsset('fitness-tracker/fitness-demo.mp4'),
  },
  {
    title: 'Bridal & Furniture E-Commerce',
    category: 'MERN Stack',
    description: 'Full-stack online stores featuring product catalogs, cart, and admin management dashboards.',
    tags: ['MERN', 'E-Commerce', 'Full-Stack'],
    color: 'from-white/15 to-gray-500/10',
    codeUrl: 'https://github.com/DineniDaundasekara/Bridal_Ware_project',
    gallery: [
      publicAsset('bridal-ware/homepage-ui.jpg'),
      publicAsset('bridal-ware/homepage-collection.jpg'),
      publicAsset('bridal-ware/homepage-highlight-01.jpg'),
      publicAsset('bridal-ware/homepage-highlight-02.jpg'),
      publicAsset('bridal-ware/homepage-highlight-03.jpg'),
    ],
  },
  {
    title: 'Dept. of Motor Traffic Web Redesign',
    category: 'Figma · Government Portal',
    description: 'Redesigned government portal experience with clearer service navigation, stronger accessibility, and a more modern citizen journey.',
    tags: ['Figma', 'UI/UX', 'Accessibility'],
    color: 'from-white/15 to-gray-500/10',
    gallery: [
      publicAsset('dmt-redesign/Pasted Image.png'),
      publicAsset('dmt-redesign/Pasted Image 2.png'),
      publicAsset('dmt-redesign/Screenshot 2026-11-04 193804.png'),
      publicAsset('dmt-redesign/Screenshot 2026-11-04 193840.png'),
      publicAsset('dmt-redesign/Screenshot 2026-11-04 193911.png'),
      publicAsset('dmt-redesign/Screenshot 2026-11-04 193947.png'),
      publicAsset('dmt-redesign/Screenshot 2026-11-04 194044.png'),
      publicAsset('dmt-redesign/Screenshot 2026-11-04 194151.png'),
    ],
    video: publicAsset('dmt-redesign/dmt-demo.mp4'),
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [activeTab, setActiveTab] = useState('screens')

  useEffect(() => {
    if (!selectedProject) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedProject(null)
      if (activeTab === 'screens' && selectedProject.gallery?.length && event.key === 'ArrowRight') {
        setActiveSlide((current) => (current + 1) % selectedProject.gallery.length)
      }
      if (activeTab === 'screens' && selectedProject.gallery?.length && event.key === 'ArrowLeft') {
        setActiveSlide((current) => (
          current - 1 + selectedProject.gallery.length
        ) % selectedProject.gallery.length)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeTab, selectedProject])

  const openProject = (project) => {
    setSelectedProject(project)
    setActiveSlide(0)
    setActiveTab(project.gallery?.length ? 'screens' : 'demo')
  }

  const projectViewer = selectedProject && createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-6"
      onClick={() => setSelectedProject(null)}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-viewer-title"
        className="relative flex max-h-[94vh] w-full max-w-6xl flex-col overflow-hidden rounded-xl border border-white/15 bg-neutral-950 text-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <header className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              {selectedProject.category}
            </p>
            <h2 id="project-viewer-title" className="mt-1 text-lg font-semibold sm:text-xl">
              {selectedProject.title}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Close project viewer"
            onClick={() => setSelectedProject(null)}
            className="rounded-full p-2 text-neutral-300 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </header>

        <div className="flex gap-2 border-b border-white/10 px-4 sm:px-6">
          {selectedProject.gallery?.length > 0 && (
            <button
              type="button"
              aria-pressed={activeTab === 'screens'}
              onClick={() => setActiveTab('screens')}
              className={`border-b-2 px-3 py-3 text-sm transition ${
                activeTab === 'screens'
                  ? 'border-white text-white'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              Screenshots <span className="ml-1 text-xs text-neutral-400">{selectedProject.gallery.length}</span>
            </button>
          )}
          {selectedProject.video && (
            <button
              type="button"
              aria-pressed={activeTab === 'demo'}
              onClick={() => setActiveTab('demo')}
              className={`flex items-center gap-2 border-b-2 px-3 py-3 text-sm transition ${
                activeTab === 'demo'
                  ? 'border-white text-white'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              <Play size={14} /> Demo video
            </button>
          )}
        </div>

        {activeTab === 'screens' && selectedProject.gallery?.length ? (
          <div className="min-h-0 overflow-y-auto p-4 sm:p-6">
            <div className="relative flex min-h-[220px] items-center justify-center rounded-lg bg-black sm:min-h-[380px]">
              <img
                src={selectedProject.gallery[activeSlide]}
                alt={`${selectedProject.title} screenshot ${activeSlide + 1}`}
                className="max-h-[58vh] w-full object-contain"
              />
              <button
                type="button"
                aria-label="Previous screenshot"
                onClick={() => setActiveSlide((activeSlide - 1 + selectedProject.gallery.length) % selectedProject.gallery.length)}
                className="absolute left-3 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                aria-label="Next screenshot"
                onClick={() => setActiveSlide((activeSlide + 1) % selectedProject.gallery.length)}
                className="absolute right-3 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
              >
                <ArrowRight size={20} />
              </button>
              <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-3 py-1 text-xs text-white">
                {activeSlide + 1} / {selectedProject.gallery.length}
              </span>
            </div>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
              {selectedProject.gallery.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  aria-label={`Show screenshot ${index + 1}`}
                  aria-pressed={activeSlide === index}
                  onClick={() => setActiveSlide(index)}
                  className={`shrink-0 overflow-hidden rounded-md border-2 transition ${
                    activeSlide === index ? 'border-white' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image}
                    alt=""
                    className="h-14 w-24 object-cover sm:h-16 sm:w-28"
                  />
                </button>
              ))}
            </div>
            <p className="mt-2 text-center text-xs text-neutral-500">
              Use the arrows or ← → keys to browse the design deck
            </p>
          </div>
        ) : activeTab === 'demo' && selectedProject.video ? (
          <div className="min-h-0 overflow-y-auto p-4 sm:p-6">
            <video
              controls
              autoPlay
              preload="metadata"
              className="mx-auto max-h-[68vh] w-full rounded-lg bg-black"
            >
              <source src={selectedProject.video} type="video/mp4" />
              Your browser does not support embedded video.
            </video>
          </div>
        ) : null}
      </section>
    </div>,
    document.body,
  )

  return (
    <section id="projects" className="section-padding section-muted">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Key <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white to-gray-500 rounded-full mb-4" />
          <p className="text-gray-400 mb-12 max-w-2xl">
            A selection of projects showcasing my work in full-stack development, AI systems, mobile apps, and UI/UX design.
            Live demos and source code will be added soon.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, type: 'spring', stiffness: 110, damping: 18 }}
                whileHover={{ y: -7, scale: 1.015 }}
                whileTap={{ scale: 0.99 }}
                className="group relative glass rounded-2xl overflow-hidden hover:bg-white/[0.07] transition-all duration-300"
              >
                {/* Gradient header */}
                <div className={`relative flex h-32 items-center justify-center overflow-hidden bg-gradient-to-br ${project.color}`}>
                  {project.gallery?.length ? (
                    <img
                      src={project.gallery[0]}
                      alt={`${project.title} project preview`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Layers size={40} className="text-white/40 group-hover:scale-110 transition-transform" />
                  )}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="p-5">
                  {project.gallery || project.video ? (
                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="block text-left text-xs font-medium text-white/70 uppercase tracking-wider"
                    >
                      {project.category}
                    </button>
                  ) : (
                    <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                      {project.category}
                    </span>
                  )}
                  {project.gallery || project.video ? (
                    <button
                      type="button"
                      onClick={() => openProject(project)}
                      className="block text-left"
                    >
                      <span className="mt-1 mb-2 block text-lg font-semibold text-white transition-colors group-hover:text-gray-300">
                        {project.title}
                      </span>
                    </button>
                  ) : (
                    <h3 className="text-lg font-semibold mt-1 mb-2 text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                  )}
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-md bg-white/5 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-500">
                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-black transition hover:text-neutral-600"
                      >
                        <Github size={14} /> Code
                      </a>
                    ) : (
                      <span className="flex items-center gap-1 opacity-60 cursor-not-allowed">
                        <Github size={14} /> Code
                      </span>
                    )}
                    {project.gallery || project.video ? (
                      <button
                        type="button"
                        onClick={() => openProject(project)}
                        className="project-view-button ml-auto flex items-center gap-1 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-700"
                      >
                        <ExternalLink size={13} /> View project
                      </button>
                    ) : (
                      <span className="flex items-center gap-1 opacity-60 cursor-not-allowed">
                        <ExternalLink size={14} /> Demo
                        <span className="ml-1 text-xs">Coming soon</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
      {projectViewer}
    </section>
  )
}
