import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
  { to: '/', label: '主页' },
  { to: '/about', label: '我们的团队' },
  { to: '/why-choose-us', label: '为什么选择我们' },
  { to: '/contact', label: '联系我们' },
]

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const bgColor = scrolled
    ? 'rgba(255,255,255,1)'
    : 'rgba(255,255,255,0.55)'

  return (
    <>
      <header
        className="w-full fixed top-0 left-0 z-50 text-black px-16 transition-colors duration-300"
        style={{
          background: bgColor,
          backdropFilter: 'saturate(180%) blur(8px)',
          WebkitBackdropFilter: 'saturate(180%) blur(8px)',
          boxShadow: '0 2px 12px 0 rgba(0,0,0,0.20)',
        }}
      >
        <nav className="flex items-center justify-between w-full h-16 px-2">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-light text-[var(--color-primary)]">
              Maple CELPIP
            </Link>
          </div>
          {/* Desktop Menu */}
          <ul className="menu menu-horizontal gap-6 hidden md:flex ml-auto">
            {menuItems.map((item) => (
              <li key={item.to} className="relative">
                <Link
                  to={item.to}
                  className="text-black font-medium uppercase px-2 py-1 transition-colors duration-200
                    after:content-[''] after:block after:h-1 after:bg-[var(--color-primary)] after:w-0 after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-0.5
                    hover:after:w-full focus:after:w-full
                    hover:bg-transparent focus:bg-transparent active:bg-transparent"
                  style={{
                    position: 'relative',
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden"
            style={{ marginRight: '-70px', zIndex: 50 }}>
            <button
              className="btn btn-ghost text-black"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Slide-out Menu OUTSIDE header */}
      <div
        className={`fixed top-0 right-0 h-full w-64 shadow-lg z-[100] transform transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } text-black bg-white`}
        style={{
          willChange: 'transform',
        }}
      >
        <button
          className="btn btn-ghost absolute top-4 right-0 text-black"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="menu menu-vertical gap-4 mt-20 px-6 text-black">
          {menuItems.map((item) => (
            <li key={item.to} className="relative">
              <Link
                to={item.to}
                className="!text-black font-medium uppercase px-2 py-2 transition-colors duration-200
                  after:content-[''] after:block after:h-0.5 after:bg-[var(--color-primary)] after:w-0 after:transition-all after:duration-300 after:absolute after:left-0 after:-bottom-1
                  hover:after:w-full focus:after:w-full"
                style={{
                  position: 'relative',
                  transition: 'color 0.2s',
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Overlay for mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  )
}

export default Navbar