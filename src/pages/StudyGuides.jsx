import ResourceLibrary from '../components/ResourceLibrary'
import StudyGuideCatalog from '../components/StudyGuideCatalog'
import { Link } from 'react-router-dom'
import { ETSY_SHOP_URL } from '../data/etsyStudyGuides'
import { PillBottle } from '../components/icons/PharmaIcons'

export default function StudyGuides() {
  return (
    <main className="min-h-[60vh]">
      <section className="py-12 sm:py-16 bg-gradient-to-b from-teal-50 to-white relative overflow-hidden">
        {/* Subtle pill pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06]" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="32" rx="20" ry="8" fill="#0d9488" />
            <ellipse cx="16" cy="16" rx="8" ry="3" fill="#0d9488" />
            <ellipse cx="48" cy="48" rx="8" ry="3" fill="#0d9488" />
          </svg>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0" aria-hidden="true">
              <PillBottle className="w-5 h-5" />
            </span>
            <div>
              <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-1">
                Digital Product Suite
              </p>
              <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
                Study Guides & Clinical Resources
              </h1>
            </div>
          </div>
          <p className="text-slate-600 max-w-2xl mb-6">
            Concise guides on 65+ clinical pharmacy topics, NAPLEX & MPJE review, and quick reference for rotations. Shop by disease state, MPJE one-pagers, and bundles — all available in my Etsy shop with direct links below.
          </p>
          <a
            href={ETSY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
          >
            Open my Etsy shop
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              to="/industry-pivot"
              className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700"
            >
              Industry pivot resources →
            </Link>
          </div>
        </div>
      </section>

      <StudyGuideCatalog />

      <ResourceLibrary />
    </main>
  )
}
