import { Link } from 'react-router-dom'

const TIKTOK = 'https://www.tiktok.com/@pharmacytoks'
const INSTAGRAM = 'https://www.instagram.com/pharmacytoks'

const linkButtonClass =
  'flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-brand-skyPastel/90 bg-white/90 text-slate-800 font-semibold text-sm sm:text-base shadow-sm hover:border-teal-400 hover:text-teal-800 hover:bg-white transition-colors'

const primaryButtonClass =
  'flex w-full items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-teal-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-600/20 hover:bg-teal-700 transition-colors'

function TikTokIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88 6.24v-7a6.1 6.1 0 0 0 4.94 6.17 4.12 4.12 0 0 0 3.48-1.07V9.4a2.86 2.86 0 0 1 2.2-2.71V6.69z" />
    </svg>
  )
}

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mint via-brand-mintLight to-white">
      <div
        className="pointer-events-none absolute top-1/4 -left-24 h-72 w-72 rounded-full bg-brand-skyPastel/30 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-10 right-0 h-64 w-64 rounded-full bg-teal-200/20 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 text-center">
        <div className="relative mx-auto mb-7 w-32 h-32 sm:w-40 sm:h-40">
          <div
            className="absolute -inset-3 rounded-full bg-gradient-to-br from-teal-200/70 to-brand-skyPastel/50 blur-md"
            aria-hidden
          />
          <img
            src="/sarah-headshot.png?v=6"
            alt="Dr. Sarah, Traveling PharmD"
            className="relative w-full h-full object-contain drop-shadow-md"
            width={160}
            height={160}
          />
        </div>

        <p className="text-teal-700 font-medium text-sm sm:text-base mb-4 animate-review-in">
          Dr. Sarah · Traveling PharmD · @pharmacytoks
        </p>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight tracking-tight animate-review-in [animation-delay:80ms] opacity-0 [animation-fill-mode:forwards]">
          Master pharmacy school, licensure exams, and{' '}
          <span className="text-teal-600">beyond.</span>
        </h1>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 leading-relaxed animate-review-in [animation-delay:160ms] opacity-0 [animation-fill-mode:forwards]">
          High-yield pharmacy. Real life beyond the white coat. Study guides and tips from the same Dr. Sarah you know on social — built to make pharmacy school, rotations, and boards feel lighter.
        </p>

        <div className="mt-8 sm:mt-10 max-w-sm mx-auto space-y-3 animate-review-in [animation-delay:240ms] opacity-0 [animation-fill-mode:forwards]">
          <Link to="/study-guides" className={primaryButtonClass}>
            Browse Study Guides
          </Link>
          <a
            href={TIKTOK}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
          >
            <TikTokIcon />
            TikTok
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className={linkButtonClass}
          >
            <InstagramIcon />
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
