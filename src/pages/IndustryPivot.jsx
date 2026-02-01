import { useEffect } from 'react'
import CareerPath from '../components/CareerPath'
import FunctionalAreas from '../components/FunctionalAreas'
import ResourceLibrary from '../components/ResourceLibrary'
import { Link, useLocation } from 'react-router-dom'

export default function IndustryPivot() {
  const { hash } = useLocation()

  // When navigating to this page without a hash (e.g. "Start Your Industry Journey" button), scroll to top
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [hash])

  useEffect(() => {
    const sectionId =
      hash === '#your-path-to-becoming-an-msl'
        ? 'your-path-to-becoming-an-msl'
        : hash === '#functional-areas'
          ? 'functional-areas'
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

  return (
    <main className="min-h-[60vh]">
      <section
        className="relative py-12 sm:py-16 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/how-i-help-banner.png')" }}
      >
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
            Industry Transition Roadmap
          </p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Start Your Industry Journey
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you're a pharmacy student or a practicing pharmacist with years of experience, there's a path to landing those highly sought-after industry roles. Use this page to <strong>plan your pivot</strong>!
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
      <FunctionalAreas />
      <CareerPath />
      <ResourceLibrary />
    </main>
  )
}
