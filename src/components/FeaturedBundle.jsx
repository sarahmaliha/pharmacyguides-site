import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { TESTIMONIALS } from '../data/etsyReviews'

const REVIEW_HOLD_MS = 4500
const FADE_MS = 500

export default function FeaturedBundle() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timeoutId = null
    const t = setInterval(() => {
      setIsVisible(false)
      timeoutId = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % TESTIMONIALS.length)
        setIsVisible(true)
      }, FADE_MS)
    }, FADE_MS + REVIEW_HOLD_MS + FADE_MS)
    return () => {
      clearInterval(t)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  const review = TESTIMONIALS[currentIndex]

  return (
    <section
      id="ultimate-bundle-home"
      className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-br from-brand-mintLight via-white to-brand-skyLight/50 border-y border-brand-skyPastel/40"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand-skyPastel/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-28 left-0 h-64 w-64 rounded-full bg-teal-200/25 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_1fr] gap-10 lg:gap-16 items-center">
            <div className="relative mx-auto w-full max-w-[240px] lg:max-w-none">
              <div
                className="absolute -inset-5 rounded-3xl bg-gradient-to-br from-teal-200/60 to-brand-skyPastel/40 blur-lg"
                aria-hidden
              />
              <img
                src="/ultimate-bundle-cover.png"
                alt="Ultimate Pharmacy Bundle 2027 Edition cover by Dr. Sarah, PharmacyGuides"
                className="relative w-full rounded-2xl shadow-xl shadow-teal-900/10 border border-white/90 object-cover"
                width={280}
                height={360}
              />
              <p className="relative mt-4 text-center text-xs font-semibold uppercase tracking-wider text-teal-600">
                Bestseller · 2027 Edition
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-3">
                Created by Dr. Sarah
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                The Ultimate Pharmacy Bundle
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4">
                The bestselling study resource from the Traveling PharmD behind @pharmacytoks - high-yield disease-state one-pagers built for pharmacy school, rotations, and boards.
              </p>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                Organized, concise, and made to make studying feel lighter so you can show up more confident.
              </p>
              <Link
                to="/study-guides#ultimate-bundle"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-teal-600 text-white font-semibold text-sm sm:text-base shadow-lg shadow-teal-600/25 hover:bg-teal-700 transition-colors"
              >
                See the Ultimate Bundle
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
            <div className="rounded-2xl bg-white/70 border border-brand-skyPastel/50 px-6 sm:px-10 py-8 sm:py-9 text-center shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-600/80 mb-4">
                Loved by pharmacy students
              </p>
              <div
                className="min-h-[7rem] flex flex-col justify-center transition-opacity duration-500 ease-in-out"
                style={{ opacity: isVisible ? 1 : 0 }}
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="flex justify-center gap-0.5 mb-3" aria-label={`${review.rating} stars`}>
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-amber-400 text-sm" aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <p className="mt-3 text-xs sm:text-sm font-medium text-slate-500">
                  - {review.author}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
