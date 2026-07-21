import { useRef, useEffect, useState } from 'react'
import ResourceLibrary from '../components/ResourceLibrary'
import Reveal from '../components/Reveal'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ETSY_SHOP_URL, RELAYED_SHOP_URL } from '../data/etsyStudyGuides'
import { TESTIMONIALS } from '../data/etsyReviews'

const REVIEW_HOLD_MS = 3500
const FADE_MS = 500

const WHATS_INSIDE = [
  {
    title: '80+ clinical topics',
    description: 'An organized compilation of disease-state one-pagers, from PK/PD and ID to cardiology, psych, endocrine, and more.',
  },
  {
    title: 'High-yield layouts',
    description: 'Tables, algorithms, and bullet points that help you quiz, cram, and retain without drowning in textbooks.',
  },
  {
    title: 'Built for NAPLEX & rotations',
    description: 'Designed for pharmacy school, clinical rotations, and board prep when you need clarity fast.',
  },
  {
    title: 'Digital & ready anywhere',
    description: 'Download once, study on your laptop or tablet. No shipping, no waiting.',
  },
  {
    title: 'Created by a PharmD',
    description: 'Crafted from lived student and pharmacist experience: what actually helps when time is short.',
  },
]

function ShopButtons({ className = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={RELAYED_SHOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shimmer inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
      >
        Shop on RelayED
        <ExternalIcon />
      </a>
      <a
        href={ETSY_SHOP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-teal-500 text-teal-700 font-semibold text-sm hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all hover:-translate-y-0.5"
      >
        Shop on Etsy
        <ExternalIcon />
      </a>
    </div>
  )
}

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

export default function StudyGuides() {
  const { hash } = useLocation()
  const [mounted, setMounted] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [sampleOpen, setSampleOpen] = useState(false)
  const reviewsRef = useRef(null)

  useEffect(() => {
    const sectionId =
      hash === '#shop-study-guides-on-etsy' || hash === '#shop-study-guides'
        ? 'shop-study-guides'
        : hash === '#pharmacy-law-mpje-resources'
          ? 'pharmacy-law-mpje-resources'
          : hash === '#ultimate-bundle'
            ? 'ultimate-bundle'
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
    if (reviewsRef.current) observer.observe(reviewsRef.current)
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
      <Helmet>
        <title>Pharmacy Study Guides: Ultimate Bundle on RelayED & Etsy</title>
        <meta
          name="description"
          content="Shop PharmacyGuides study tools on RelayED and Etsy. Featured: the Ultimate Pharmacy Bundle, high-yield clinical guides for NAPLEX, rotations, and pharmacy school."
        />
      </Helmet>

      {sampleOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60"
          role="dialog"
          aria-modal="true"
          aria-labelledby="sample-guide-modal-title"
          onClick={() => setSampleOpen(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-7xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-slate-200 flex items-center justify-between shrink-0 flex-wrap gap-2">
              <h2 id="sample-guide-modal-title" className="font-display font-semibold text-slate-900 text-lg">
                Sample guide: Diabetes (Type 1 & Type 2)
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
                  onClick={() => setSampleOpen(false)}
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
                alt="Sample study guide: Diabetes (Type 1 & Type 2), covering definitions, risk factors, diagnosis, treatment algorithm, insulin and non-insulin options"
                className="max-w-full h-auto object-contain"
                style={{ minWidth: 0 }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 1. Hero */}
      <section className="relative py-12 sm:py-16 overflow-hidden bg-gradient-to-b from-brand-mintLight via-brand-skyLight/40 to-white">
        <div
          className="pointer-events-none absolute -top-12 right-[8%] h-52 w-52 rounded-full bg-brand-blush/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[4%] h-44 w-44 rounded-full bg-brand-peach/40 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="eyebrow mb-2">
            Digital Guides
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 max-w-3xl">
            Study Guides & Clinical Resources
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mb-8">
            Concise, high-yield pharmacy study tools for NAPLEX, MPJE, and rotations, available on RelayED and Etsy. Same guides, your choice of shop.
          </p>
          <ShopButtons />
          <button
            type="button"
                onClick={() => setSampleOpen(true)}
                className="link-underline mt-4 inline-flex items-center text-teal-600 font-semibold text-sm hover:text-teal-700"
              >
                Preview a free sample one-pager (Diabetes) →
          </button>
        </div>
      </section>

      {/* 2. Featured: Ultimate Pharmacy Bundle */}
      <section
        id="ultimate-bundle"
        className="py-14 sm:py-20 border-t border-slate-200/80 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="relative mx-auto lg:mx-0 w-full max-w-md">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-teal-100/80 to-brand-skyPastel/50 blur-sm" aria-hidden />
              <img
                src="/ultimate-bundle-cover.png"
                alt="Ultimate Pharmacy Bundle 2027 Edition cover by PharmacyGuides, Dr. Sarah, PharmD RPh"
                className="relative w-full rounded-2xl shadow-lg border border-slate-200/80 object-cover"
                width={800}
                height={1000}
              />
              <p className="relative z-10 mt-3 text-center">
                <span className="badge-berry">Bestseller · 2027 Edition</span>
              </p>
            </div>

            <div>
              <p className="eyebrow mb-2">
                Featured
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                The Ultimate Pharmacy Bundle
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Your all-in-one companion for pharmacy school and board prep. It's an organized compilation of disease-state one-pagers covering 80+ topics, so you can study smarter, quiz with classmates, and walk into exam day with less overwhelm.
              </p>
              <ul className="space-y-2.5 text-slate-700 mb-8">
                {[
                  'High-yield disease-state coverage in one download',
                  'Layouts built for quick review and quizzing',
                  'Trusted by students, including first-time NAPLEX passers',
                  'Updated 2027 edition',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-teal-500 shrink-0 mt-0.5" aria-hidden>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ShopButtons />
            </div>
          </div>
        </div>
      </section>

      {/* 3. What's inside */}
      <section className="py-14 sm:py-16 bg-brand-mintLight/50 border-y border-brand-skyPastel/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
            What&apos;s Inside
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            From infectious disease to cardiology, psychiatry, endocrine, and more, organized the way pharmacists actually need to learn it.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {WHATS_INSIDE.map((card, i) => (
              <Reveal key={card.title} delayMs={(i % 3) * 90}>
                <div className="hover-lift h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                  <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Origin story */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
            How This Bundle Came Together
          </h2>
          <div className="space-y-5 text-slate-600 leading-relaxed">
            <p>
              As a pharmacy student, I was drowning in dense textbooks and scattered notes, and I needed something clearer. So I started building my own study guides: visual, organized, and actually enjoyable to learn from.
            </p>
            <p>
              Classmates asked to use them. We quizzed each other from the pages, and study sessions became sharper and more collaborative. The results spoke for themselves, including a friend who used the Ultimate Bundle and passed the NAPLEX on the first try.
            </p>
            <p>
              That momentum became PharmacyGuides. Today these digital guides are designed to help you ace pharmacy school, rotations, and boards so you can study smarter, retain more, and move forward with confidence.
            </p>
          </div>
          <blockquote className="mt-8 rounded-2xl border border-teal-100 bg-teal-50/60 px-5 py-4 text-teal-900 italic">
            “I built these because I needed something clearer, too, and I still believe studying should feel doable, not draining.”
            <footer className="mt-2 text-sm not-italic font-medium text-teal-700">
              - Dr. Sarah, PharmD, RPh
            </footer>
          </blockquote>
        </div>
      </section>

      {/* 5. Sample + proof */}
      <section
        ref={reviewsRef}
        className="py-14 sm:py-16 bg-gradient-to-b from-white to-brand-skyLight/30 border-t border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                See a Sample
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mb-6">
                See how a disease-state one-pager actually looks. This Diabetes guide is the same format used throughout the Ultimate Pharmacy Bundle.
              </p>
              <button
                type="button"
                onClick={() => setSampleOpen(true)}
                className="btn-shimmer inline-flex items-center justify-center px-5 py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
              >
                View sample one-pager
              </button>
            </div>

            <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm flex flex-col">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                What Students Are Saying
              </h2>
              <div
                className="flex-1 min-h-[140px] flex flex-col justify-center transition-opacity duration-500 ease-in-out"
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
                          <span key={j} className="text-amber-400" aria-hidden>★</span>
                        ))}
                      </div>
                      <p className="text-slate-600 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
                      <p className="mt-3 text-sm font-medium text-slate-500">- {author}</p>
                    </>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Also available */}
      <section
        id="shop-study-guides"
        className="py-14 sm:py-20 border-t border-slate-200/80 scroll-mt-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-3">
            Looking for Something Specific?
          </h2>
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">
            Browse disease-state bundles, MPJE resources, and select one-pagers in either shop.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                Disease-State Bundles
              </h3>
              <p className="text-slate-600 text-sm flex-1 mb-4">
                Focused sets for cardio, pulmonary, ID, psych, endocrine, and more, available on RelayED and Etsy.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a href={RELAYED_SHOP_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-teal-600 hover:text-teal-700">
                  RelayED →
                </a>
                <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-teal-600 hover:text-teal-700">
                  Etsy →
                </a>
              </div>
            </div>

            <div
              id="pharmacy-law-mpje-resources"
              className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col scroll-mt-24"
            >
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                MPJE Resources
              </h3>
              <p className="text-slate-600 text-sm flex-1 mb-4">
                Virginia MPJE, DC MPJE, and the DC + Virginia bundle, plus federal law one-pagers in the shops.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a href={RELAYED_SHOP_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-teal-600 hover:text-teal-700">
                  RelayED →
                </a>
                <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-teal-600 hover:text-teal-700">
                  Etsy →
                </a>
              </div>
            </div>

            <div className="hover-lift rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col">
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                Select One-Pagers
              </h3>
              <p className="text-slate-600 text-sm flex-1 mb-4">
                Select clinical one-pagers on RelayED; the full one-pager library is easiest to browse on Etsy.
              </p>
              <div className="flex flex-wrap gap-3 text-sm font-semibold">
                <a href={RELAYED_SHOP_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-teal-600 hover:text-teal-700">
                  RelayED →
                </a>
                <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="link-underline text-teal-600 hover:text-teal-700">
                  Etsy →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final shop chooser */}
      <section className="py-12 sm:py-16 bg-teal-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
            Ready to Shop?
          </h2>
          <p className="text-teal-50/90 mb-8">
            Same PharmacyGuides resources. Pick the storefront that works for you.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={RELAYED_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white text-teal-800 font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              Shop RelayED
              <ExternalIcon />
            </a>
            <a
              href={ETSY_SHOP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/80 text-white font-semibold text-sm hover:bg-teal-600 transition-colors"
            >
              Shop Etsy
              <ExternalIcon />
            </a>
          </div>
          <p className="mt-6 text-xs text-teal-100/80">
            <a href={RELAYED_SHOP_URL} className="underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">myrelayed.com/pharmacyguides</a>
            {' · '}
            <a href={ETSY_SHOP_URL} className="underline-offset-2 hover:underline" target="_blank" rel="noopener noreferrer">etsy.com/shop/PharmacyGuides</a>
          </p>
        </div>
      </section>

      <ResourceLibrary />
    </main>
  )
}
