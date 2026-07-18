import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import FeaturedBundle from '../components/FeaturedBundle'
import Reveal from '../components/Reveal'

const START_HERE = [
  {
    title: 'Study Guides',
    description: 'High-yield tools for NAPLEX, MPJE, rotations, and the Ultimate Pharmacy Bundle.',
    to: '/study-guides',
    cta: 'Explore guides',
  },
  {
    title: 'Blog',
    description: 'Practical tips for APPEs, boards, and the next chapter after pharmacy school.',
    to: '/blog',
    cta: 'Read posts',
  },
  {
    title: 'Industry Pivot',
    description: 'A clear path toward MSL and industry roles beyond retail or clinical practice.',
    to: '/industry-pivot',
    cta: 'See the roadmap',
  },
  {
    title: 'Wellness Hub',
    description: 'A calm reset for busy pharmacy days — mood checks and 2-minute tools.',
    to: '/wellness',
    cta: 'Take a pause',
  },
]

export default function Home() {
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
      <FeaturedBundle />

      {/* Explore */}
      <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-white via-brand-mintLight/35 to-brand-skyLight/20">
        <div
          className="pointer-events-none absolute top-10 right-[10%] h-40 w-40 rounded-full bg-brand-skyPastel/30 blur-3xl"
          aria-hidden
        />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
                Explore
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
                What do you need today?
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Guides, tips, career clarity, or a quick reset — come as you are.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {START_HERE.map((door) => (
                <Link
                  key={door.title}
                  to={door.to}
                  className="group flex flex-col justify-between rounded-2xl bg-white/80 border border-brand-skyPastel/50 px-6 py-7 sm:px-7 sm:py-8 shadow-sm hover:border-teal-300 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                      {door.title}
                    </h3>
                    <p className="mt-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                      {door.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center text-teal-600 font-semibold text-sm group-hover:translate-x-0.5 transition-transform">
                    {door.cta} →
                  </span>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-br from-teal-700 via-teal-600 to-teal-800 text-white">
        <div
          className="pointer-events-none absolute -top-20 left-1/4 h-48 w-48 rounded-full bg-teal-400/20 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-brand-skySoft/20 blur-3xl"
          aria-hidden
        />
        <Reveal>
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">
              Ready to study smarter?
            </h2>
            <p className="text-teal-50/90 mb-8">
              Explore the guides built by Dr. Sarah to make pharmacy school and boards feel lighter.
            </p>
            <Link
              to="/study-guides"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-white text-teal-800 font-semibold text-sm hover:bg-teal-50 transition-colors"
            >
              Browse Study Guides
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
