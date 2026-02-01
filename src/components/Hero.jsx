import { Link } from 'react-router-dom'
import { CapsuleBullet } from './icons/PharmaIcons'
import { TESTIMONIALS } from '../data/etsyReviews'

const FADE_DURATION = 0.8
const FADE_DELAY_STAGGER = 1

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-mint via-brand-mintLight to-brand-skyPastel">
      {/* Top banner: blends into nav — Dr. Sarah / PharmacyGuides cover */}
      <div className="w-full">
        <img
          src="/hero-banner.png"
          alt="PharmacyGuides by Dr. Sarah, PharmD RPh — Hi, I'm Dr. Sarah. I support pharmacy students and pharmacists at every stage."
          className="w-full h-auto object-cover object-center"
          width={1200}
          height={400}
        />
      </div>

      {/* Main message + review column */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-8 xl:gap-10">
          <div className="max-w-2xl flex-shrink-0">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Master pharmacy school, licensure exams, and{' '}
              <span className="text-teal-600">beyond.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Concise guides on 65+ clinical topics, up-to-date NAPLEX & MPJE review, quick reference for rotations — and a clear path from pharmacist to industry roles like MSL.
            </p>
            <ul className="mt-8 space-y-3 text-slate-700">
              {[
                'Concise guides on 65+ clinical pharmacy topics',
                'Up-to-date NAPLEX & MPJE Review',
                'Quick reference for clinical rotations',
                'Guidance on Breaking into the Industry',
                'Created by a licensed pharmacist',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-teal-500 flex-shrink-0" aria-hidden="true">
                    <CapsuleBullet className="w-3 h-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/industry-pivot"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-600 text-white font-semibold text-base shadow-lg shadow-teal-600/25 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
              >
                Start Your Industry Journey
              </Link>
              <Link
                to="/study-guides"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-base hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                Browse Study Guides
              </Link>
            </div>
          </div>

          {/* 5 reviews — vertical column, staggered fade-in; wider to align with left section */}
          <div className="mt-12 lg:mt-0 lg:flex-1 lg:min-w-0 lg:max-w-xl flex flex-col gap-3 lg:min-h-0">
            {TESTIMONIALS.map((review, i) => (
              <blockquote
                key={i}
                className="bg-white/95 backdrop-blur-sm rounded-2xl border border-brand-skyPastel/80 shadow-sm p-3 sm:p-4 text-left opacity-0 flex-shrink-0"
                style={{
                  animation: `fade-in-up ${FADE_DURATION}s ease-out ${FADE_DELAY_STAGGER * i}s forwards`,
                }}
              >
                <div className="flex gap-0.5 mb-1.5" aria-label={`${review.rating} stars`}>
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-xs" aria-hidden>★</span>
                  ))}
                </div>
                <p className="text-slate-700 italic text-xs sm:text-sm leading-relaxed">
                  "{review.quote}"
                </p>
                <footer className="mt-1.5 text-[11px] font-medium text-slate-600">
                  — {review.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
