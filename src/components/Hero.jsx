import { Link } from 'react-router-dom'

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
      </div>
    </section>
  )
}
