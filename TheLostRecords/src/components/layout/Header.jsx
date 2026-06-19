import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const navItems = [
  { name: 'Project Overview', path: '/home', children: [] },
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
  { name: 'The Case', path: '/case', children: [] },
  {
    name: 'The Vision',
    path: '/vision',
    children: [
      { name: 'About the Founder', path: '/vision/founder' },
      { name: 'About the Future', path: '/vision/future' },
    ],
  },
];

const linkBase = 'transition-colors hover:no-underline';

export default function Header() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-base/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl lg:max-w-9xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4 text-md">
        <div className="text-lg font-semibold uppercase tracking-wide">
          <Link to="/home" className="text-accent hover:text-accent-soft hover:no-underline">
            The Lost Records
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="text-3xl p-2 text-muted hover:text-ink sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex sm:items-center sm:gap-6">
          {navItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={clsx(
                  linkBase,
                  pathname === item.path
                    ? 'text-accent font-semibold'
                    : 'text-muted hover:text-ink'
                )}
              >
                {item.name}
              </Link>

              {item.children.length > 0 && (
                <div className="absolute left-0 top-full z-50 mt-2 w-56 origin-top scale-95 rounded-lg border border-hairline bg-surface opacity-0 shadow-lg transition-all duration-150 ease-out group-hover:scale-100 group-hover:opacity-100">
                  <div className="py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={clsx(
                          'block px-4 py-2 text-sm transition-colors hover:no-underline',
                          pathname === child.path
                            ? 'bg-raised font-medium text-accent'
                            : 'text-muted hover:bg-raised hover:text-ink'
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
        <div className="px-4 sm:px-6 pb-4 sm:hidden">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={clsx(
                    'block font-medium hover:no-underline',
                    pathname === item.path ? 'text-accent' : 'text-ink'
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.name}
                </Link>

                {item.children.length > 0 && (
                  <ul className="mt-2 ml-4 space-y-2 border-l border-hairline pl-4">
                    {item.children.map((child) => (
                      <li key={child.path}>
                        <Link
                          to={child.path}
                          className={clsx(
                            'block text-sm hover:no-underline',
                            pathname === child.path ? 'text-accent' : 'text-muted hover:text-ink'
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
  );
}