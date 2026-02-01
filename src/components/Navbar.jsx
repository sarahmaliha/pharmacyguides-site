import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/study-guides', label: 'Study Guides' },
  { to: '/industry-pivot', label: 'Industry Pivot' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/about', label: 'About' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-brand-mintLight/90 border-b border-brand-skyPastel/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          <Link to="/" className="font-display font-semibold text-slate-800 hover:text-teal-600 transition-colors" aria-label="PharmacyGuides, LLC — Home">
            PharmacyGuides, LLC
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === to
                    ? 'text-teal-600 bg-brand-mintLight'
                    : 'text-slate-600 hover:text-teal-600 hover:bg-brand-skyLight/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    location.pathname === to ? 'text-teal-600 bg-brand-mintLight' : 'text-slate-600 hover:bg-brand-skyLight/50'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
