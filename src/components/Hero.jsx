import { Link } from 'react-router-dom'

const SOCIALS = [
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@pharmacytoks',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88 6.24v-7a6.1 6.1 0 0 0 4.94 6.17 4.12 4.12 0 0 0 3.48-1.07V9.4a2.86 2.86 0 0 1 2.2-2.71V6.69z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/pharmacytoks',
    icon: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mint via-brand-mintLight to-white">
      <div className="w-full">
        <img
          src="/hero-banner.png"
          alt="PharmacyGuides by Dr. Sarah, PharmD RPh. Hi, I'm Dr. Sarah. I support pharmacy students and pharmacists at every stage."
          className="w-full h-auto object-cover object-center"
          width={1200}
          height={400}
        />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          Master pharmacy school, licensure exams, and{' '}
          <span className="text-teal-600">beyond.</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          High-yield study guides, one-on-one mentorship, and career guidance for pharmacy students and early professionals.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          <Link
            to="/study-guides"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-600 text-white font-semibold text-base shadow-lg shadow-teal-600/25 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          >
            Browse Study Guides
          </Link>
          <Link
            to="/mentorship"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-teal-500 text-teal-700 font-semibold text-base hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          >
            Book Mentorship
          </Link>
        </div>

        <div className="mt-8">
          <p className="text-sm text-slate-500 mb-3">
            Follow Dr. Sarah{' '}
            <span className="font-medium text-slate-700">@pharmacytoks</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {SOCIALS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-teal-700 hover:text-teal-800 transition-colors"
                aria-label={label}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
