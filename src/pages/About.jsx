import { Link } from 'react-router-dom'
import { TESTIMONIALS, ETSY_SHOP_REVIEWS_URL } from '../data/etsyReviews'

export default function About() {
  return (
    <main className="min-h-[60vh]">
      <section className="py-12 sm:py-20 bg-gradient-to-b from-brand-mintLight to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-8 mb-8">
            <img
              src="/logo-dr-sarah.png"
              alt="PharmacyGuides by Dr. Sarah, PharmD RPh"
              className="w-40 h-auto mx-auto sm:mx-0 flex-shrink-0 rounded-2xl shadow-md"
              width={160}
              height={160}
            />
            <div>
              <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
                About
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                How It All Began
              </h1>
            </div>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              I'm Dr. Sarah, PharmD, RPh — and I built PharmacyGuides because I remember exactly how overwhelming pharmacy school, licensing exams, and clinical training can feel. I've been in those late-night study sessions, high-pressure rotations, and moments of doubt where you wonder if you're on the right path — or if there's something more out there for you.
            </p>
            <p>
              My journey didn't follow a straight line. I started in clinical pharmacy and later transitioned into a Medical Science Liaison role in industry. That pivot showed me something important: the gap between traditional pharmacy roles and industry isn't a wall — it's a bridge. You just need the right guidance, clear steps, and someone who understands both sides.
            </p>
            <p>
              PharmacyGuides is built on real experience, not just theory. My goal is to make complex topics simpler, more practical, and easier to apply. Whether you're preparing for NAPLEX or MPJE, exploring new career paths, or looking for mentorship from someone who's been through it, I'm here to support your next step forward.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/mentorship"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
            >
              Let's Connect
            </Link>
            <Link
              to="/industry-pivot"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold hover:border-teal-500 hover:text-teal-600 transition-colors"
            >
              Industry Pivot Roadmap
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-16 sm:py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/how-i-help-banner.png')" }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
            How I Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">Clear, Practical Study Guides</h3>
              <p className="text-slate-600 text-sm">
                Concise pharmacy resources designed to simplify complex topics for pharmacy school, licensure exams, and clinical rotations.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">Personalized Mentorship</h3>
              <p className="text-slate-600 text-sm">
                One-on-one virtual guidance for students and pharmacists navigating burnout, career pivots, or industry transitions.
              </p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">Real-Life Pharmacy Perspective</h3>
              <p className="text-slate-600 text-sm">
                Education rooted in lived experience — beyond textbooks and the "perfect path."
              </p>
            </div>
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
              What pharmacists and students are saying about the study guides — 5-star reviews from our Etsy shop.
            </p>
            <a
              href={ETSY_SHOP_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 hover:text-teal-700 font-medium text-sm"
            >
              View all reviews on Etsy →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(({ quote, author, rating }, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-teal-100 p-6 text-left shadow-sm"
              >
                <div className="flex gap-0.5 mb-3" aria-label={`${rating} stars`}>
                  {Array.from({ length: rating }).map((_, j) => (
                    <span key={j} className="text-amber-400" aria-hidden>★</span>
                  ))}
                </div>
                <p className="text-slate-600 italic mb-4">"{quote}"</p>
                <p className="text-sm font-medium text-slate-800">— {author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
