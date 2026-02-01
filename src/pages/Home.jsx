import Hero from '../components/Hero'
import ResourceLibrary from '../components/ResourceLibrary'

export default function Home() {
  return (
    <>
      <Hero />
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
      <ResourceLibrary />
    </>
  )
}
