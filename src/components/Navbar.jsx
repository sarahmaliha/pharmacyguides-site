import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/study-guides', label: 'Study Guides' },
  { to: '/blog', label: 'Blog' },
  { to: '/industry-pivot', label: 'Industry Pivot' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/wellness', label: 'Wellness Hub' },
]

function isActivePath(pathname, to) {
  if (to === '/') return pathname === '/'
  return pathname === to || pathname.startsWith(`${to}/`)
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm bg-brand-mintLight/95 border-b border-brand-skyPastel/50">
      <nav className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-6">
        <div className="flex items-center gap-3 sm:gap-5 min-h-[5.5rem] sm:min-h-[6.25rem] py-2">
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 min-w-0 hover:opacity-90 transition-opacity"
            aria-label="PharmacyGuides, LLC Home"
          >
            <img
              src="/logo-circle.png?v=2"
              alt="PharmacyGuides by Dr. Sarah, PharmD RPh"
              className="h-[4.75rem] w-[4.75rem] sm:h-[5.5rem] sm:w-[5.5rem] rounded-full object-cover shrink-0"
              width={88}
              height={88}
            />
            <span className="md:hidden flex flex-col justify-center leading-tight min-w-0">
              <span className="font-display font-bold text-[1.15rem] tracking-tight">
                <span className="text-slate-900">Pharmacy</span>
                <span className="text-teal-600">Guides</span>
              </span>
              <span className="mt-0.5 text-[0.7rem] font-medium text-slate-500 tracking-wide">
                by Dr. Sarah
              </span>
            </span>
          </Link>

          {/* Desktop nav - fills remaining width */}
          <div className="hidden md:flex flex-1 items-center justify-between gap-1 min-w-0">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-2 lg:px-3 py-2.5 rounded-lg text-sm lg:text-[0.95rem] font-medium whitespace-nowrap transition-colors ${
                  isActivePath(location.pathname, to)
                    ? 'text-teal-700 bg-white/80'
                    : 'text-slate-700 hover:text-teal-700 hover:bg-white/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden ml-auto p-2 rounded-lg text-slate-600 hover:bg-white/60"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-3 border-t border-brand-skyPastel/60">
            <div className="flex flex-col gap-0.5">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium ${
                    isActivePath(location.pathname, to)
                      ? 'text-teal-700 bg-white/80'
                      : 'text-slate-700 hover:bg-white/50'
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
