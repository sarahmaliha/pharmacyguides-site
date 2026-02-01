import { useRef, useEffect, useState } from 'react'
import ResourceLibrary from '../components/ResourceLibrary'
import StudyGuideCatalog from '../components/StudyGuideCatalog'
import { Link, useLocation } from 'react-router-dom'
import { ETSY_SHOP_URL } from '../data/etsyStudyGuides'
import { TESTIMONIALS } from '../data/etsyReviews'
import { PillBottle } from '../components/icons/PharmaIcons'

const REVIEW_HOLD_MS = 3500
const FADE_MS = 500

export default function StudyGuides() {
  const { hash } = useLocation()
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [sampleGuideModalOpen, setSampleGuideModalOpen] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const sectionId =
      hash === '#shop-study-guides-on-etsy'
        ? 'shop-study-guides-on-etsy'
        : hash === '#pharmacy-law-mpje-resources'
          ? 'pharmacy-law-mpje-resources'
          : null
    if (sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        const timer = setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
        return () => clearTimeout(timer)
      }
    }
  }, [hash])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setMounted(true)
      },
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mounted) return
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
  }, [mounted])

  return (
    <main className="min-h-[60vh]">
      {sampleGuideModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sample-guide-modal-title"
          onClick={() => setSampleGuideModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-200 flex items-center justify-between shrink-0 flex-wrap gap-2">
              <h2 id="sample-guide-modal-title" className="font-display font-semibold text-slate-900 text-lg">
                Sample guide — Diabetes (Type 1 & Type 2)
              </h2>
              <div className="flex items-center gap-2">
                <a
                  href="/sample-guide.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  View full size
                </a>
                <button
                  type="button"
                  onClick={() => setSampleGuideModalOpen(false)}
                  className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="overflow-auto flex-1 p-4 flex justify-center bg-slate-50">
              <img
                src="/sample-guide.png"
                alt="Sample study guide: Diabetes (Type 1 & Type 2) — definitions, risk factors, diagnosis, treatment algorithm, insulin and non-insulin options"
                className="max-w-full h-auto object-contain"
                style={{ minWidth: 0 }}
              />
            </div>
          </div>
        </div>
      )}
      <section
        ref={sectionRef}
        className="relative py-12 sm:py-16 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/how-i-help-banner.png')" }}
      >
        {/* Subtle pill pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06]" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 12 24 L 52 24 A 8 8 0 0 1 52 40 L 12 40 A 8 8 0 0 1 12 24 Z" fill="#99f6e4" />
            <path d="M 8 13 L 24 13 A 3 3 0 0 1 24 19 L 8 19 A 3 3 0 0 1 8 13 Z" fill="#99f6e4" />
            <path d="M 40 45 L 56 45 A 3 3 0 0 1 56 51 L 40 51 A 3 3 0 0 1 40 45 Z" fill="#99f6e4" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
            {/* Left: main content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0" aria-hidden="true">
                  <PillBottle className="w-5 h-5" />
                </span>
                <div>
                  <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-1">
                    Digital Product Suite
                  </p>
                  <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                    Study Guides & Clinical Resources
                  </h1>
                </div>
              </div>
              <p className="text-slate-600 max-w-2xl mb-6">
                Concise guides on 65+ clinical pharmacy topics, NAPLEX & MPJE review, and quick reference for rotations. Shop by disease state, MPJE one-pagers, and bundles — all available in my Etsy shop with direct links below.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={ETSY_SHOP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
                >
                  Open my Etsy shop
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <button
                  type="button"
                  onClick={() => setSampleGuideModalOpen(true)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-teal-500 text-teal-600 font-semibold text-sm hover:bg-teal-50 transition-colors"
                >
                  Click/Tap here to view a sample guide
                </button>
              </div>
              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  to="/industry-pivot"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
                >
                  Industry pivot resources →
                </Link>
              </div>
            </div>

            {/* Right: single slot — reviews fade in, hold, fade out, next */}
            <div className="flex-shrink-0 w-full lg:max-w-sm xl:max-w-md mt-10 lg:mt-0 min-h-[120px] flex items-center">
              <div
                className="w-full rounded-xl border border-brand-skyPastel/60 bg-white/90 shadow-sm p-4 transition-opacity duration-500 ease-in-out"
                style={{ opacity: mounted ? (isVisible ? 1 : 0) : 0 }}
                aria-live="polite"
                aria-atomic="true"
              >
                {(() => {
                  const { quote, author, rating } = TESTIMONIALS[currentIndex]
                  return (
                    <>
                      <div className="flex gap-0.5 mb-2" aria-label={`${rating} stars`}>
                        {Array.from({ length: rating }).map((_, j) => (
                          <span key={j} className="text-amber-400 text-sm" aria-hidden>★</span>
                        ))}
                      </div>
                      <p className="text-slate-600 text-sm italic leading-snug">
                        "{quote}"
                      </p>
                      <p className="mt-2 text-xs font-medium text-slate-500">— {author}</p>
                    </>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StudyGuideCatalog />

      <ResourceLibrary />
    </main>
  )
}
