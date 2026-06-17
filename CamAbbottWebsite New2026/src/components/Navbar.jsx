import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { label: 'Home', link: '/' },
  {
    label: 'The Work',
    key: 'work',
    submenu: [
      { label: 'Research', link: '/research' },
      { label: 'Resources', link: '/resources' },
      { label: 'Essays', link: '/essays' },
    ],
  },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
]

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const toggle = (key) => setOpenMenu(openMenu === key ? null : key)
  const isActive = (link) => location.pathname === link

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-7">
        <div className="flex justify-between items-center h-[68px]">
          <Link to="/" className="font-display font-extrabold text-lg tracking-tight">
            Cam<span className="text-brand-orange">.</span>Abbott
          </Link>

          <div className="hidden md:flex items-center gap-7 text-[0.92rem] font-medium">
            {navItems.map((item) =>
              item.submenu ? (
                <div key={item.label} className="relative">
                  <button onClick={() => toggle(item.key)} className="flex items-center gap-1 text-ink-soft hover:text-ink transition">
                    {item.label}
                    {openMenu === item.key ? <FaChevronUp className="text-[0.6rem]" /> : <FaChevronDown className="text-[0.6rem]" />}
                  </button>
                  {openMenu === item.key && (
                    <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-line shadow-lg rounded-xl py-2">
                      {item.submenu.map((s) => (
                        <Link key={s.label} to={s.link} onClick={() => setOpenMenu(null)} className="block px-4 py-2 text-ink-soft hover:bg-blush hover:text-ink transition">
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.label} to={item.link} className={`transition ${isActive(item.link) ? 'text-brand-orange' : 'text-ink-soft hover:text-ink'}`}>
                  {item.label}
                </Link>
              )
            )}
          </div>

          <button className="md:hidden text-ink" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-line px-7 py-4 space-y-3 font-medium">
          {navItems.map((item) =>
            item.submenu ? (
              <div key={item.label}>
                <button onClick={() => toggle(item.key)} className="flex justify-between items-center w-full text-ink">
                  {item.label}
                  {openMenu === item.key ? <FaChevronUp className="text-xs" /> : <FaChevronDown className="text-xs" />}
                </button>
                {openMenu === item.key && (
                  <div className="mt-2 pl-4 space-y-2">
                    {item.submenu.map((s) => (
                      <Link key={s.label} to={s.link} onClick={() => setMobileOpen(false)} className="block text-ink-soft hover:text-ink">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.label} to={item.link} onClick={() => setMobileOpen(false)} className="block text-ink">
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  )
}