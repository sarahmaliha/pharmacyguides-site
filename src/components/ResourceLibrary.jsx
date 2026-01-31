import { useState, useMemo } from 'react'
import { RxPill } from './icons/PharmaIcons'

const CATEGORIES = ['All', 'Clinical Guides', 'Industry Pivot', 'Networking', 'Templates']

const INITIAL_RESOURCES = [
  { id: 1, title: 'NAPLEX Core Topics Summary', category: 'Clinical Guides', description: 'Concise review of high-yield NAPLEX topics with key drug facts and clinical pearls.', tags: ['NAPLEX', 'Clinical'] },
  { id: 2, title: 'MPJE State Law Overview', category: 'Clinical Guides', description: 'State-specific pharmacy law summaries for MPJE prep and licensure.', tags: ['MPJE', 'Law'] },
  { id: 3, title: 'From Pharmacist to MSL: First Steps', category: 'Industry Pivot', description: 'A practical guide to assessing fit and building your industry narrative.', tags: ['MSL', 'Industry'] },
  { id: 4, title: 'Industry Acronym Glossary', category: 'Industry Pivot', description: 'KPI, KOL, Medical Affairs, and 50+ terms every industry-bound pharmacist should know.', tags: ['Glossary', 'Industry'] },
  { id: 5, title: 'LinkedIn Outreach Templates', category: 'Networking', description: 'Professional message templates for connecting with MSLs and recruiters.', tags: ['LinkedIn', 'Networking'] },
  { id: 6, title: 'CV Template for Industry Roles', category: 'Templates', description: 'Resume/CV structure and wording optimized for Medical Affairs and MSL applications.', tags: ['CV', 'Resume'] },
  { id: 7, title: 'Day in the Life: MSL', category: 'Industry Pivot', description: 'What a typical week looks like for a Medical Science Liaison.', tags: ['MSL', 'Career'] },
  { id: 8, title: 'Pharma Fellowship Tracker', category: 'Templates', description: 'Timeline and checklist for fellowship applications and interviews.', tags: ['Fellowship', 'Applications'] },
]

export default function ResourceLibrary() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = useMemo(() => {
    return INITIAL_RESOURCES.filter((r) => {
      const matchCategory = category === 'All' || r.category === category
      const matchSearch =
        !search.trim() ||
        [r.title, r.description, ...r.tags].some((s) =>
          s.toLowerCase().includes(search.toLowerCase())
        )
      return matchCategory && matchSearch
    })
  }, [search, category])

  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Subtle pill pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="resource-pills" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <ellipse cx="15" cy="30" rx="8" ry="2.5" fill="#0d9488" />
              <ellipse cx="45" cy="10" rx="8" ry="2.5" fill="#0d9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#resource-pills)" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex w-12 h-12 rounded-xl bg-teal-100 text-teal-600 items-center justify-center mx-auto mb-4" aria-hidden="true">
            <RxPill className="w-6 h-6" />
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900">
            MSL & Industry Resource Vault
          </h2>
          <p className="mt-4 text-slate-600">
            Search and filter guides, templates, and tools for clinical prep and industry transition.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="search"
              placeholder="Search resources..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              aria-label="Search resources"
            />
          </div>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  category === cat
                    ? 'bg-teal-600 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-teal-300 hover:text-teal-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((resource) => (
            <article
              key={resource.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-teal-100 transition-all"
            >
              <span className="inline-block px-2.5 py-1 rounded-lg bg-teal-50 text-teal-700 text-xs font-medium mb-3">
                {resource.category}
              </span>
              <h3 className="font-display font-semibold text-slate-900 text-lg mb-2">
                {resource.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                {resource.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {resource.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                className="w-full py-2.5 rounded-xl border-2 border-teal-500 text-teal-600 font-semibold text-sm hover:bg-teal-50 transition-colors"
              >
                Learn More
              </button>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-slate-500 py-12">
            No resources match your search. Try a different term or category.
          </p>
        )}
      </div>
    </section>
  )
}
