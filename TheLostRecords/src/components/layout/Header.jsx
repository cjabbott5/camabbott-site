import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'

const navItems = [
  {
    name: 'Project Overview',
    path: '/home',
    children: [],
  },
  {
    name: 'Contribute',
    path: '/collection',
    children: [
      { name: 'Share Your Story', path: '/collection/story' },
      { name: 'Share Your Stats', path: '/collection/stats' },
    ],
  },
  {
    name: 'The Records',
    path: '/responses',
    children: [
      { name: 'Narratives', path: '/responses/narratives' },
      { name: 'By the Numbers', path: '/responses/numbers' },
    ],
  },
  {
    name: 'The Case',
    path: '/case',
    children: [],
  },
  {
    name: 'The Vision',
    path: '/vision',
    children: [
      { name: 'About the Founder', path: '/vision/founder' },
      { name: 'About the Future', path: '/vision/future' },
    ],
  },
]

export default function Header() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 border-b border-zinc-800 bg-black/80 backdrop-blur-md z-50">
      <nav className="mx-auto max-w-7xl lg:max-w-9xl flex justify-between items-center px-6 py-4 text-md">
        <div className="text-sky-300 text-lg font-semibold tracking-wide uppercase">
           <Link to="/home" className="text-sky-300">
    The Lost Records
  </Link>
</div>

        {/* Mobile menu toggle button */}
        <button
          className="sm:hidden text-zinc-400 text-3xl p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex space-x-6 pr-12">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={clsx(
                  'transition-colors',
                  pathname === item.path
                    ? 'text-sky-300 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100'
                )}
              >
                {item.name}
              </Link>

           {item.children.length > 0 && (
 <div
  className="absolute left-0 top-full mt-2 w-56 bg-zinc-900 border border-zinc-700 rounded shadow-md scale-95 opacity-0 transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100 z-50"
>

    <div className="py-1">
      {item.children.map((child) => (
        <Link
          key={child.path}
          to={child.path}
          className={clsx(
            'block px-4 py-2 text-sm transition-colors',
            pathname === child.path
              ? 'text-sky-300 bg-zinc-800 font-medium'
              : 'text-zinc-300 hover:text-white hover:bg-zinc-800'
          )}
        >
          {child.name}
        </Link>
      ))}
    </div>
  </div>
)}

            </div>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden px-6 pb-4">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={clsx(
                    'block text-sky-300 font-medium',
                    pathname === item.path && 'text-sky-300'
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>

                {item.children.length > 0 && (
                  <ul className="mt-1 ml-4 space-y-2 border-l border-zinc-700 pl-4">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className={clsx(
                            'block text-sm text-zinc-400',
                            pathname === child.path && 'text-sky-300'
                          )}
                          onClick={() => setMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
