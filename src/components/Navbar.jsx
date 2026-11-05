import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import FlowingMenu from './FlowingMenu'
import publicAsset from '../utils/publicAsset'

const links = [
  { text: 'About', link: '#about', meta: 'PROFILE', image: publicAsset('portfolio-showcase.png') },
  { text: 'Experience', link: '#experience', meta: 'CAREER', image: publicAsset('portfolio-showcase.png') },
  { text: 'Skills', link: '#skills', meta: 'TOOLKIT', image: publicAsset('portfolio-showcase.png') },
  { text: 'Projects', link: '#projects', meta: 'SELECTED WORK', image: publicAsset('portfolio-showcase.png') },
  { text: 'Media & Editing', link: '#media', meta: 'VIDEO WORK', image: publicAsset('portfolio-showcase.png') },
  { text: 'Education', link: '#education', meta: 'BACKGROUND', image: publicAsset('portfolio-showcase.png') },
  { text: 'Contact', link: '#contact', meta: 'SAY HELLO', image: publicAsset('portfolio-showcase.png') },
]

export default function Navbar({ scrolled, darkMode, onToggleDarkMode }) {
  const [open, setOpen] = useState(false)

  return (
    <header className={`editorial-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#" className="editorial-logo" aria-label="Baranger Benjamin, home">
        B<span>.</span>
      </a>

      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={onToggleDarkMode}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          aria-pressed={darkMode}
          title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? <Sun size={18} strokeWidth={1.7} /> : <Moon size={18} strokeWidth={1.7} />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="site-menu"
        >
          <span>Menu</span>
          {open ? <X size={21} strokeWidth={1.6} /> : <Menu size={21} strokeWidth={1.6} />}
        </button>
        <a href="#contact" className="header-contact">
          Contact <ArrowRight size={18} />
        </a>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="site-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="editorial-menu"
          >
            <FlowingMenu
              items={links}
              speed={60}
              duration={0.45}
              textColor={darkMode ? '#f2f2ef' : '#141414'}
              marqueeBgColor={darkMode ? '#f2f2ef' : '#141414'}
              marqueeTextColor={darkMode ? '#141414' : '#f7f7f5'}
              borderColor={darkMode ? 'rgb(255 255 255 / 14%)' : 'rgb(20 20 20 / 12%)'}
              onItemClick={() => setOpen(false)}
              ariaLabel="Main navigation"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
