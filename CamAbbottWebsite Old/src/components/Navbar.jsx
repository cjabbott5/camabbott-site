import React, { useState } from "react";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", link: "/" },
    {
      label: "About Cam",
      key: "about",
      submenu: [
        { label: "Cam In Three Words", link: "/threewords" },
        { label: "My Story", link: "/story" },
        { label: "My Work", link: "/projects" },
      ],
    },
    {
      label: "Resources",
      key: "resources",
      submenu: [
        { label: "Essays & Thought Pieces", link: "/essays" },
        { label: "Guides & Tools", link: "/tools" },
      ],
    },
    { label: "Contact", link: "/contact" },
  ];

  const toggleMenu = (key) => setOpenMenu(openMenu === key ? null : key);
  const isActive = (link) => location.pathname === link;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link
            to="/"
            className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-accent-violet to-accent-pink"
          >
            Cam Abbott
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-expanded={mobileOpen}
              aria-label="Toggle navigation menu"
              className="text-text-primary focus:outline-none"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2 font-medium">
            {navItems.map(({ label, link, submenu, key }) =>
              submenu ? (
                <div key={label} className="relative">
                  <button
                    onClick={() => toggleMenu(key)}
                    className="flex items-center gap-1 px-2 py-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-background-light/60 transition"
                  >
                    {label}
                    {openMenu === key ? (
                      <FaChevronUp className="text-xs" />
                    ) : (
                      <FaChevronDown className="text-xs" />
                    )}
                  </button>

                  {openMenu === key && (
                    <div className="absolute top-full right-0 mt-2 w-64 rounded-xl border border-slate-800 bg-background-light/95 shadow-xl backdrop-blur">
                      {submenu.map((item) => (
                        <Link
                          key={item.label}
                          to={item.link}
                          className="block px-4 py-2 text-sm text-text-secondary hover:text-text-primary hover:bg-slate-800/60 rounded-xl transition"
                          onClick={() => setOpenMenu(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={label}
                  to={link}
                  className={`px-2 py-1 rounded-md transition ${
                    isActive(link)
                      ? "text-accent-sky"
                      : "text-text-secondary hover:text-text-primary hover:bg-background-light/60"
                  }`}
                >
                  {label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-800 bg-background-light/90 backdrop-blur px-4 py-4 space-y-2 font-medium">
          {navItems.map(({ label, link, submenu, key }) =>
            submenu ? (
              <div key={label}>
                <button
                  onClick={() => toggleMenu(key)}
                  className="flex w-full items-center justify-between text-left px-2 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-slate-800/50 transition"
                >
                  {label}
                  {openMenu === key ? (
                    <FaChevronUp className="text-xs" />
                  ) : (
                    <FaChevronDown className="text-xs" />
                  )}
                </button>
                {openMenu === key && (
                  <div className="mt-1 pl-3 space-y-1">
                    {submenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.link}
                        className="block px-2 py-2 rounded-md text-text-secondary hover:text-text-primary hover:bg-slate-800/50 transition"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={label}
                to={link}
                className={`block px-2 py-2 rounded-md transition ${
                  isActive(link)
                    ? "text-accent-sky"
                    : "text-text-secondary hover:text-text-primary hover:bg-slate-800/50"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
