import CareerPath from '../components/CareerPath'
import ResourceLibrary from '../components/ResourceLibrary'
import { Link } from 'react-router-dom'

export default function IndustryPivot() {
  return (
    <main className="min-h-[60vh]">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
            Industry Transition Roadmap
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Start Your Industry Journey
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you're a P4 student or a retail pharmacist with years of experience, there's a path to roles like Medical Science Liaison (MSL). Use the roadmap and resources below to plan your pivot.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/mentorship"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-600 text-white font-semibold shadow-lg shadow-teal-600/25 hover:bg-teal-700 transition-colors"
            >
              Book a Mentorship Session
            </Link>
          </div>
        </div>
      </section>
      <CareerPath />
      <ResourceLibrary />
    </main>
  )
}
