import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import { TESTIMONIALS } from '../data/etsyReviews'

const REVIEW_HOLD_MS = 4000
const FADE_MS = 500

const START_HERE = [
  {
    title: 'Study Guides',
    description: 'NAPLEX, MPJE, and the Ultimate Pharmacy Bundle: high-yield guides you can actually use.',
    to: '/study-guides',
    cta: 'Explore guides',
  },
  {
    title: 'Mentorship',
    description: 'One-on-one guidance for boards, burnout, and career moves from someone who has been there.',
    to: '/mentorship',
    cta: 'Book a call',
  },
  {
    title: 'Industry Pivot',
    description: 'A clear path toward MSL and industry roles beyond retail or clinical practice.',
    to: '/industry-pivot',
    cta: 'See the roadmap',
  },
]

export default function Home() {
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
    <>
      <Helmet>
        <title>PharmacyGuides: Pharmacy Study Guides and Mentorship</title>
        <meta
          name="description"
          content="Study guides, wellness tools, and one-on-one mentorship for pharmacy students and early professionals."
        />
      </Helmet>

      <Hero />

      {/* Proof strip */}
      <section className="py-8 sm:py-10 bg-brand-mintLight/70 border-y border-brand-skyPastel/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[120px] flex flex-col justify-center">
          <div
            className="transition-opacity duration-500 ease-in-out"
            style={{ opacity: isVisible ? 1 : 0 }}
            aria-live="polite"
            aria-atomic="true"
          >
            <div className="flex justify-center gap-0.5 mb-2" aria-label={`${review.rating} stars`}>
              {Array.from({ length: review.rating }).map((_, j) => (
                <span key={j} className="text-amber-400" aria-hidden>★</span>
              ))}
            </div>
            <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed">
              &ldquo;{review.quote}&rdquo;
            </p>
            <p className="mt-2 text-xs sm:text-sm font-medium text-slate-500">- {review.author}</p>
          </div>
        </div>
      </section>

      {/* Start Here */}
      <section className="py-14 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Start Here
            </h2>
            <p className="text-slate-600">
              Wherever you are in pharmacy, pick the path that fits.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {START_HERE.map((door) => (
              <Link
                key={door.title}
                to={door.to}
                className="group rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm hover:border-teal-300 hover:shadow-md transition-all flex flex-col"
              >
                <h3 className="font-display font-semibold text-slate-900 text-xl mb-2 group-hover:text-teal-700 transition-colors">
                  {door.title}
                </h3>
                <p className="text-slate-600 text-sm flex-1 mb-5 leading-relaxed">
                  {door.description}
                </p>
                <span className="text-teal-600 font-semibold text-sm">
                  {door.cta} →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">
            Need a calm second?{' '}
            <Link to="/wellness" className="text-teal-600 font-medium hover:text-teal-700">
              Visit the Wellness Hub →
            </Link>
          </p>
        </div>
      </section>

      {/* Ultimate Bundle teaser */}
      <section className="py-14 sm:py-16 bg-brand-skyLight/40 border-y border-brand-skyPastel/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,200px)_1fr] gap-8 sm:gap-10 items-center">
            <img
              src="/ultimate-bundle-cover.png"
              alt="Ultimate Pharmacy Bundle 2027 Edition cover"
              className="w-44 sm:w-full max-w-[200px] mx-auto rounded-xl shadow-md border border-slate-200/80"
              width={200}
              height={250}
            />
            <div className="text-center sm:text-left">
              <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
                Bestseller · 2027 Edition
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                The Ultimate Pharmacy Bundle
              </h2>
              <p className="text-slate-600 mb-6 max-w-xl mx-auto sm:mx-0">
                High-yield disease-state one-pagers, compiled and organized for pharmacy school, rotations, and boards.
              </p>
              <Link
                to="/study-guides#ultimate-bundle"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
              >
                See the Ultimate Bundle
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness nudge */}
      <section className="py-12 sm:py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Need a calm second?
          </h2>
          <p className="text-slate-600 mb-5">
            Quick mood checks and 2-minute resets built for pharmacy students and early professionals.
          </p>
          <Link
            to="/wellness"
            className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
          >
            Visit Wellness Hub →
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 bg-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Ready for your next step?
          </h2>
          <p className="text-teal-50/90 mb-8">
            Study smarter with the guides, or book time to talk through your path.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/study-guides"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-teal-800 font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              Browse Study Guides
            </Link>
            <Link
              to="/mentorship"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-white/80 text-white font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Book Mentorship
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
