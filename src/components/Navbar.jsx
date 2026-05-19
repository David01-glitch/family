import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/recipes', label: 'Recipes' },
  { to: '/blog', label: 'Blog' },
  { to: '/community', label: 'Community' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-cream2">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="w-9 h-9 rounded-full bg-vintage text-cream grid place-items-center font-heading font-bold">F</span>
          <span className="font-heading text-lg sm:text-xl font-semibold text-brown-dark">Family Recipe Legacy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive || loc.pathname === l.to ? 'text-vintage' : 'text-brown-dark hover:text-vintage'}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 text-brown-dark"
          onClick={() => setOpen(!open)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      <div className={`md:hidden expandable ${open ? 'open' : ''}`}>
        <div>
          <nav className="container-x py-3 flex flex-col gap-2 border-t border-cream2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 px-2 rounded-lg text-sm font-medium ${isActive ? 'bg-cream2 text-vintage' : 'text-brown-dark'}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
