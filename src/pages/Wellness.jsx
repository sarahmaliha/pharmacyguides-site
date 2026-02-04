import MoodCheck from '../components/wellness/MoodCheck'
import TwoMinuteReset from '../components/wellness/TwoMinuteReset'
import ReflectionPromptGenerator from '../components/wellness/ReflectionPromptGenerator'

export default function Wellness() {
  return (
    <main className="min-h-[60vh]">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-brand-mintLight to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
            Wellness Hub
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            A Calm Space for You
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            A mental wellness support hub for pharmacy students and early professionals. Take a moment to check in, try a short reset, or reflect with a gentle prompt. You’re not alone.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14 border-t border-slate-200/80">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <MoodCheck />
          <TwoMinuteReset />
          <ReflectionPromptGenerator />
        </div>
      </section>

      <section className="py-10 sm:py-12 bg-brand-mintLight/50 border-t border-brand-skyPastel/60">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-600 text-sm">
            Educational wellness tools and encouragement only. Not medical or mental health advice.
          </p>
        </div>
      </section>
    </main>
  )
}
