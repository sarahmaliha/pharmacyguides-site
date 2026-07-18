import { Link, useLocation } from 'react-router-dom'

const HUB_LINKS = [
  { to: '/study-guides', label: 'Guides', match: '/study-guides' },
  { to: '/mentorship', label: 'Mentor', match: '/mentorship' },
  { to: '/wellness', label: 'Wellness', match: '/wellness' },
  { to: '/blog', label: 'Blog', match: '/blog' },
]

function isActive(pathname, match) {
  return pathname === match || pathname.startsWith(`${match}/`)
}

export default function MobileLinkHub() {
  const { pathname } = useLocation()

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-brand-skyPastel/70 bg-brand-mintLight/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
      aria-label="Quick links"
    >
      <div className="grid grid-cols-5 max-w-lg mx-auto">
        {HUB_LINKS.map(({ to, label, match }) => {
          const active = isActive(pathname, match)
          return (
            <Link
              key={to}
              to={to}
              className={`flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-semibold tracking-wide transition-colors ${
                active ? 'text-teal-700' : 'text-slate-500 hover:text-teal-700'
              }`}
            >
              <span
                className={`h-1 w-1 rounded-full mb-0.5 ${active ? 'bg-teal-600' : 'bg-transparent'}`}
                aria-hidden
              />
              {label}
            </Link>
          )
        })}
        <a
          href="https://www.tiktok.com/@pharmacytoks"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-semibold tracking-wide text-slate-500 hover:text-teal-700 transition-colors"
        >
          <span className="h-1 w-1 rounded-full mb-0.5 bg-transparent" aria-hidden />
          Socials
        </a>
      </div>
    </nav>
  )
}
