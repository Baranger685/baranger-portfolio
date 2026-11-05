import { useState, useEffect } from 'react'
import { MotionConfig } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Media from './components/Media'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [darkMode, setDarkMode] = useState(
    () => window.localStorage.getItem('portfolio-theme') === 'dark',
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode
    window.localStorage.setItem('portfolio-theme', nextDarkMode ? 'dark' : 'light')
    setDarkMode(nextDarkMode)
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className={`site-shell relative min-h-screen overflow-x-hidden${darkMode ? ' dark-mode' : ''}`}>
        <Navbar
          scrolled={scrolled}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Media />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}

export default App
