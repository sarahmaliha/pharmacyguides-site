import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MoodCheck from '../components/wellness/MoodCheck'
import TwoMinuteReset from '../components/wellness/TwoMinuteReset'
import ReflectionPromptGenerator from '../components/wellness/ReflectionPromptGenerator'

export default function Wellness() {
  return (
    <main className="min-h-[60vh]">
      <Helmet>
        <title>Pharmacy Wellness Hub: A Calm Reset for Students, Residents & Pharmacists</title>
        <meta
          name="description"
          content="A warm, quiet space for pharmacy students, residents, and pharmacists. Check in with your mood, take a 2-minute reset, or sit with a gentle reflection prompt."
        />
      </Helmet>

      <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-b from-brand-mintLight via-white to-brand-peach/20">
        <div
          className="pointer-events-none absolute -top-10 right-[8%] h-52 w-52 rounded-full bg-brand-blush/55 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-[6%] h-44 w-44 rounded-full bg-brand-peach/45 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-teal-100/40 blur-3xl"
          aria-hidden
        />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 animate-review-in">
          <p className="eyebrow mb-2">Wellness Hub</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            A calm space for you
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl">
            For pharmacy students, residents, and pharmacists who are running on empty. Take a quiet minute to check in, breathe, or reflect. You do not have to earn rest.
          </p>
        </div>
      </section>

      <section className="relative py-10 sm:py-14 border-t border-brand-skyPastel/50 bg-gradient-to-b from-brand-peach/10 to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-accent-100/80 bg-white/80 px-5 py-5 sm:px-7 sm:py-6 shadow-sm mb-8 sm:mb-10">
            <p className="text-slate-600 leading-relaxed">
              Pharmacy asks a lot of you, whether you are in school, residency, or already practicing. I built this page for the days that feel heavy: before a shift, after a tough rotation, or in the middle of burnout you keep pushing through. Stay as long as you need.
            </p>
            <p className="mt-3 text-sm font-medium text-accent-700">
              - Dr. Sarah, PharmD, RPh
            </p>
          </div>

          <div className="mb-8 sm:mb-10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2 text-center sm:text-left">
              A note on resilience
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-5 text-center sm:text-left">
              A short, personal reminder about setbacks, mental health, and keeping going. Turn your sound on.
            </p>
            <div className="mx-auto w-full max-w-[320px] sm:max-w-[360px]">
              <div className="relative overflow-hidden rounded-2xl border border-teal-100/80 bg-slate-900 shadow-md ring-1 ring-black/5">
                <video
                  className="block w-full aspect-[9/16] bg-slate-900"
                  controls
                  playsInline
                  preload="metadata"
                  poster="/videos/wellness-mental-health-poster.jpg"
                  aria-label="Dr. Sarah sharing a personal message about mental health, setbacks, and resilience"
                >
                  <source src="/videos/wellness-mental-health.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <p className="mt-3 text-center text-xs text-slate-500 leading-relaxed">
                Originally shared for Mental Health Awareness Month. Still a good reminder any day of the year.
              </p>
            </div>
          </div>

          <p className="text-sm font-medium text-teal-700 mb-6">
            Start wherever feels easiest.
          </p>

          <div className="space-y-8 sm:space-y-10">
            <MoodCheck />
            <TwoMinuteReset />
            <ReflectionPromptGenerator />
          </div>

          <div className="mt-10 sm:mt-12 rounded-2xl border border-accent-100/80 bg-accent-50/50 px-5 py-6 sm:px-7 sm:py-7 text-center">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Want to talk it through?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-5">
              Sometimes a quiet tool is enough. Other days it helps to talk with someone who has been through pharmacy school, residency, and practice. I offer 30-minute mentorship sessions for $50.
            </p>
            <Link
              to="/mentorship"
              className="btn-shimmer inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
            >
              Book a session
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-brand-mintLight/50 border-t border-brand-skyPastel/60">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm leading-relaxed">
            Educational wellness tools and encouragement only. Not medical or mental health advice. If you are in crisis, please reach out to local emergency services or a trusted professional.
          </p>
        </div>
      </section>
    </main>
  )
}
