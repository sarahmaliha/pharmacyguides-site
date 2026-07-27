import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { TESTIMONIALS, ETSY_SHOP_REVIEWS_URL } from '../data/etsyReviews'
import Reveal from '../components/Reveal'

export default function About() {
  return (
    <main className="min-h-[60vh]">
      <Helmet>
        <title>About PharmacyGuides: Student Support and Education Mission</title>
        <meta name="description" content="Learn about the mission behind PharmacyGuides and its commitment to mentoring and supporting pharmacy learners." />
      </Helmet>
      <section className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-b from-brand-mintLight to-white">
        <div
          className="pointer-events-none absolute -top-10 right-[6%] h-52 w-52 rounded-full bg-brand-blush/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[4%] h-40 w-40 rounded-full bg-brand-peach/40 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-8">
            <div className="mx-auto sm:mx-0 flex-shrink-0 w-40 h-40 sm:w-44 sm:h-44">
              <img
                src="/sarah-headshot.png?v=6"
                alt="Dr. Sarah, PharmD, RPh, founder of PharmacyGuides"
                className="w-full h-full object-contain drop-shadow-md"
                width={176}
                height={176}
              />
            </div>
            <div>
              <p className="eyebrow mb-2">
                About · Dr. Sarah | Traveling PharmD
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                How It All Began
              </h1>
            </div>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              I'm Dr. Sarah, PharmD, RPh, also known as the Traveling PharmD behind @pharmacytoks. I built PharmacyGuides because I remember exactly how overwhelming pharmacy school, licensing exams, and clinical training can feel. I've been in those late-night study sessions, high-pressure rotations, and moments of doubt where you wonder if you're on the right path, or if there's something more out there for you.
            </p>
            <p>
              My journey didn't follow a straight line. I started in clinical pharmacy and later transitioned into a Medical Science Liaison role in industry. That pivot showed me something important: the gap between traditional pharmacy roles and industry isn't a wall. It's a bridge. You just need the right guidance, clear steps, and someone who understands both sides.
            </p>
            <p>
              PharmacyGuides is built on real experience, not just theory. My goal is to make complex topics simpler, more practical, and easier to apply. Whether you're preparing for NAPLEX or MPJE, exploring new career paths, or looking for mentorship from someone who's been through it, I'm here to support your next step forward.
            </p>
            <p>
              Offline and on social, I share the fuller picture of pharmacy life, from study strategies to travel and balance, as Dr. Sarah | Traveling PharmD on{' '}
              <a
                href="https://www.tiktok.com/@pharmacytoks"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-teal-600 font-medium hover:text-teal-700"
              >
                TikTok
              </a>{' '}
              and{' '}
              <a
                href="https://www.instagram.com/pharmacytoks"
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-teal-600 font-medium hover:text-teal-700"
              >
                Instagram
              </a>
              .
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/mentorship"
              className="btn-shimmer inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
            >
              Let's Connect
            </Link>
            <a
              href="https://www.tiktok.com/@pharmacytoks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.16 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.73a8.22 8.22 0 0 0 4.79 1.52V6.79a4.85 4.85 0 0 1-1.04-.1z" />
              </svg>
              TikTok
            </a>
            <a
              href="https://www.instagram.com/pharmacytoks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/sarah214/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-all hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/how-i-help-banner.png')" }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
              How I Help
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal>
              <div className="hover-lift h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">Clear, Practical Study Guides</h3>
                <p className="text-slate-600 text-sm">
                  Concise pharmacy resources designed to simplify complex topics for pharmacy school, licensure exams, and clinical rotations.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={90}>
              <div className="hover-lift h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">Personalized Mentorship</h3>
                <p className="text-slate-600 text-sm">
                  One-on-one virtual guidance for students and pharmacists navigating burnout, career pivots, or industry transitions.
                </p>
              </div>
            </Reveal>
            <Reveal delayMs={180}>
              <div className="hover-lift h-full bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">Real-Life Pharmacy Perspective</h3>
                <p className="text-slate-600 text-sm">
                  Education rooted in lived experience, beyond textbooks and the "perfect path."
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-brand-mintLight/70 border-t border-brand-skyPastel/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Testimonials
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              What pharmacists and students are saying about the study guides, including 5-star reviews from our Etsy shop.
            </p>
            <a
              href={ETSY_SHOP_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-teal-600 hover:text-teal-700 font-medium text-sm"
            >
              View all reviews on Etsy →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, author, rating }, i) => (
              <Reveal key={i} delayMs={(i % 3) * 90}>
              <div
                className="hover-lift h-full bg-white rounded-2xl border border-teal-100 p-6 text-left shadow-sm"
              >
                <div className="flex gap-0.5 mb-3" aria-label={`${rating} stars`}>
                  {Array.from({ length: rating }).map((_, j) => (
                    <span key={j} className="text-amber-400" aria-hidden>★</span>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-4">"{quote}"</p>
                <p className="text-sm font-medium text-slate-800">- {author}</p>
              </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
