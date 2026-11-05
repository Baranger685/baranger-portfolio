import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import './FlowingMenu.css'

export default function FlowingMenu({
  items = [],
  speed = 60,
  direction = 'left',
  duration = 0.5,
  bandInset = 3,
  bandRadius = 0,
  textColor = '#141414',
  marqueeBgColor = '#141414',
  marqueeTextColor = '#f7f7f5',
  borderColor = 'rgb(20 20 20 / 12%)',
  dividers = true,
  dimInactive = false,
  align = 'left',
  showIndex = true,
  showArrow = true,
  imageShape = 'rounded',
  activeIndex,
  onItemClick,
  ariaLabel = 'Menu',
  className = '',
  style,
}) {
  const [hoveredIndex, setHoveredIndex] = useState(-1)
  const selectedIndex = activeIndex ?? hoveredIndex

  return (
    <nav
      className={`flowing-menu ${className}`.trim()}
      aria-label={ariaLabel}
      data-align={align}
      data-shape={imageShape}
      style={{
        '--flowing-text-color': textColor,
        '--flowing-border-color': borderColor,
        ...style,
      }}
      onPointerLeave={() => setHoveredIndex(-1)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setHoveredIndex(-1)
      }}
    >
      <ul className="flowing-menu__list">
        {items.map((item, index) => {
          const active = selectedIndex === index
          const href = item.link || '#'
          const contents = (
            <>
              {showIndex && (
                <span className="flowing-menu__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
              )}
              <span className="flowing-menu__label">{item.text}</span>
              {item.meta && <span className="flowing-menu__meta">{item.meta}</span>}
              {showArrow && (
                <span className="flowing-menu__arrow" aria-hidden="true">
                  <ArrowUpRight size={17} strokeWidth={1.7} />
                </span>
              )}
            </>
          )

          return (
            <motion.li
              key={`${item.text}-${index}`}
              className="flowing-menu__item"
              data-active={active ? '' : undefined}
              data-dimmed={dimInactive && selectedIndex >= 0 && !active ? '' : undefined}
              data-dividers={dividers ? '' : undefined}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.045 }}
              style={{
                '--flowing-row-border': borderColor,
                '--flowing-active-color': marqueeTextColor,
              }}
              onPointerEnter={(event) => {
                if (event.pointerType !== 'touch') setHoveredIndex(index)
              }}
              onFocus={() => setHoveredIndex(index)}
            >
              {active && (
                <motion.div
                  className="flowing-menu__band"
                  layoutId="flowing-menu-band"
                  transition={{ duration, ease: [0.2, 0.9, 0.2, 1] }}
                  style={{
                    inset: `${bandInset}px`,
                    borderRadius: `${bandRadius}px`,
                    backgroundColor: marqueeBgColor,
                    color: marqueeTextColor,
                  }}
                  aria-hidden="true"
                >
                  <div
                    className={`flowing-menu__track flowing-menu__track--${direction}${direction === 'alternate' && index % 2 ? ' is-reversed' : ''}`}
                    style={{ '--flowing-duration': `${Math.max(5, (item.text.length * 240) / Math.max(1, speed))}s` }}
                  >
                    {Array.from({ length: 4 }, (_, copy) => (
                      <span className="flowing-menu__part" key={copy}>
                        <span>{item.marquee || item.text}</span>
                        {item.image && (
                          <span
                            className="flowing-menu__image"
                            style={{
                              backgroundImage: `url("${item.image}")`,
                              backgroundPosition: `${(index % 3) * 50}% center`,
                            }}
                          />
                        )}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              {item.link ? (
                <a
                  className="flowing-menu__link"
                  href={href}
                  aria-current={activeIndex === index ? 'page' : undefined}
                  onClick={(event) => onItemClick?.(item, index, event)}
                >
                  {contents}
                </a>
              ) : (
                <button
                  className="flowing-menu__link"
                  type="button"
                  onClick={(event) => onItemClick?.(item, index, event)}
                >
                  {contents}
                </button>
              )}
            </motion.li>
          )
        })}
      </ul>
    </nav>
  )
}
