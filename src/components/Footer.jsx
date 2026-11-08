import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 py-10 px-4">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-display font-semibold">
            <span className="gradient-text">Baranger Benjamin</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            © {year}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Baranger685"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/baranger-benjamin-287324210"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:baranger369@gmail.com"
            className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
