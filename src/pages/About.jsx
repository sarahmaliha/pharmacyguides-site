import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="min-h-[60vh]">
      <section className="py-12 sm:py-20 bg-gradient-to-b from-teal-50 to-white">
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
                Why I Do This
              </h1>
            </div>
          </div>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              I'm Dr. Sarah — PharmD, RPh — and I built PharmacyGuides because I know how overwhelming pharmacy school, licensure exams, and clinical rotations can be. I also know what it's like to wonder: <em>Is there more than the path I'm on?</em>
            </p>
            <p>
              <strong>My pivot story:</strong> I transitioned from practicing pharmacist to Medical Science Liaison (MSL). That journey taught me that the gap between "pharmacist" and "industry" isn't a wall — it's a bridge. You need clarity on the steps, someone who's walked them, and resources that speak your language.
            </p>
            <p>
              People buy into the mentor before the product. So here's the heart of it: education and content rooted in lived experience — beyond textbooks, titles, and the "perfect path." Whether you need study guides for NAPLEX/MPJE, a roadmap to industry, or one-on-one mentorship, I'm here to help you get there.
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

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <section className="py-16 sm:py-24 bg-teal-50/50 border-t border-teal-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
            Testimonials
          </h2>
          <p className="text-slate-600 text-sm mb-8">
            Success stories from pharmacists and students who've used the guides and mentorship to land industry roles. (Add your testimonials here.)
          </p>
          <div className="bg-white rounded-2xl border border-teal-100 p-6 text-left">
            <p className="text-slate-600 italic mb-4">
              "Dr. Sarah's roadmap and CV feedback were exactly what I needed. I landed my first MSL interview within three months."
            </p>
            <p className="text-sm font-medium text-slate-800">— Mentee name (role)</p>
          </div>
        </div>
      </section>
    </main>
  )
}
