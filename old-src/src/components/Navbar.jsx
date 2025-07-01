import React, { useState } from "react"
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"
import navBg from "../assets/nav-bg.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

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
  ]

  const toggleMenu = (key) => {
    setOpenMenu(openMenu === key ? null : key)
  }

  const isActive = (link) => location.pathname === link

  return (
    <nav
      className="shadow-md sticky top-0 z-50 bg-center bg-no-repeat bg-cover transition-shadow"
      style={{
        backgroundImage: `url(${navBg})`,
        backgroundColor: "#f3d1dc",
      }}
    >
      <div className="backdrop-blur-sm bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-black font-bold text-lg">
              Cam Abbott
            </Link>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-black focus:outline-none"
              >
                {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 items-center font-semibold text-black">
              {navItems.map(({ label, link, submenu, key }) =>
                submenu ? (
                  <div key={label} className="relative">
                    <button
                      onClick={() => toggleMenu(key)}
                      className="flex items-center hover:text-white transition duration-200"
                    >
                      {label}
                      {openMenu === key ? (
                        <FaChevronUp className="ml-1 text-xs" />
                      ) : (
                        <FaChevronDown className="ml-1 text-xs" />
                      )}
                    </button>
                    {openMenu === key && (
                      <div className="absolute top-full right-0 mt-2 w-64 bg-white shadow-md rounded-lg py-2 z-50">
                        {submenu.map((item) => (
                          <Link
                            key={item.label}
                            to={item.link}
                            className="block px-4 py-2 hover:bg-pink-300 hover:text-white transition duration-150"
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
                    className={`transition duration-200 ${
                      isActive(link)
                        ? "text-pink-600 underline"
                        : "text-black hover:text-white hover:drop-shadow-lg"
                    }`}
                  >
                    {label}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2 font-semibold">
          {navItems.map(({ label, link, submenu, key }) =>
            submenu ? (
              <div key={label}>
                <button
                  onClick={() => toggleMenu(key)}
                  className="flex justify-between items-center w-full text-left hover:text-white transition duration-150"
                >
                  {label}
                  {openMenu === key ? (
                    <FaChevronUp className="text-xs" />
                  ) : (
                    <FaChevronDown className="text-xs" />
                  )}
                </button>
                {openMenu === key && (
                  <div className="mt-2 pl-4 space-y-1">
                    {submenu.map((item) => (
                      <Link
                        key={item.label}
                        to={item.link}
                        className="block hover:text-white transition duration-150"
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
                className={`block transition duration-150 ${
                  isActive(link)
                    ? "text-pink-600"
                    : "text-black hover:text-white"
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
  )
}

export default Navbar
