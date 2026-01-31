import Hero from '../components/Hero'
import CareerPath from '../components/CareerPath'
import ResourceLibrary from '../components/ResourceLibrary'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Hero />
      <CareerPath />
      <section className="py-16 sm:py-24 bg-teal-50/50 border-y border-teal-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Study Guides & Digital Resources
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-8">
            Clinical study guides, industry CV templates, and fellowship trackers — all in one place.
          </p>
          <Link
            to="/study-guides"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors"
          >
            Browse All Resources
          </Link>
        </div>
      </section>
      <ResourceLibrary />
    </>
  )
}
