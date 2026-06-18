import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/educate', label: 'Educate' },
  { to: '/engage', label: 'Engage' },
  { to: '/empower', label: 'Empower' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `font-mono text-[0.78rem] font-bold uppercase tracking-[0.08em] transition ${
      isActive ? 'text-brand-orange-deep' : 'text-ink hover:text-brand-orange-deep'
    }`

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto px-7 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-extrabold text-lg tracking-tight" onClick={() => setOpen(false)}>
          Cam<span className="text-brand-orange">.</span>Abbott
        </Link>

        {/* desktop */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => <NavLink key={l.to} to={l.to} className={linkClass}>{l.label}</NavLink>)}
        </div>

        {/* mobile toggle */}
        <button className="md:hidden font-mono text-xs font-bold uppercase tracking-wider" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? '✕ Close' : '☰ Menu'}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-cream px-7 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink>
          ))}
        </div>
      )}
    </header>
  )
}