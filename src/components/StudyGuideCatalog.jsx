import { ETSY_SHOP_URL, STUDY_GUIDE_CATEGORIES } from '../data/etsyStudyGuides'
import { MortarPestle, PillBottle, RxPill, CapsuleBullet } from './icons/PharmaIcons'

const CATEGORY_ICONS = {
  'disease-state': MortarPestle,
  'mpje': PillBottle,
  'bundles': RxPill,
}

export default function StudyGuideCatalog() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-200 overflow-hidden">
      {/* Subtle pill/capsule pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pill-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <ellipse cx="8" cy="20" rx="6" ry="2" fill="currentColor" className="text-teal-600" />
              <ellipse cx="32" cy="8" rx="6" ry="2" fill="currentColor" className="text-teal-600" />
              <ellipse cx="24" cy="32" rx="6" ry="2" fill="currentColor" className="text-teal-600" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pill-pattern)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
          <div className="flex items-start gap-4">
            <span className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0" aria-hidden="true">
              <RxPill className="w-6 h-6" />
            </span>
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Shop Study Guides on Etsy
              </h2>
              <p className="mt-2 text-slate-600">
                Direct links to each guide by category. All digital downloads from my Etsy shop.
              </p>
            </div>
          </div>
          <a
            href={ETSY_SHOP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-teal-600 text-white font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors shrink-0"
          >
            <span>Open full shop on Etsy</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="space-y-10">
          {STUDY_GUIDE_CATEGORIES.map((category) => {
            const IconComponent = CATEGORY_ICONS[category.id] || RxPill
            return (
              <div key={category.id} className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
                <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-slate-100 bg-gradient-to-r from-teal-50/80 to-white flex items-center gap-4">
                  <span className="w-10 h-10 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-semibold text-slate-900 text-xl">
                      {category.name}
                    </h3>
                    {category.description && (
                      <p className="mt-0.5 text-slate-600 text-sm">
                        {category.description}
                      </p>
                    )}
                  </div>
                </div>
                <ul className="divide-y divide-slate-100">
                  {category.items.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between gap-4 px-6 py-3.5 sm:px-8 sm:py-4 hover:bg-teal-50/50 transition-colors group"
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-teal-500 group-hover:text-teal-600 transition-colors" aria-hidden="true">
                            <CapsuleBullet className="w-2.5 h-2.5" />
                          </span>
                          <span className="font-medium text-slate-800 group-hover:text-teal-700 transition-colors">
                            {item.title}
                          </span>
                        </span>
                        <span className="flex items-center gap-1.5 text-teal-600 text-sm font-medium shrink-0">
                          View on Etsy
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <p className="mt-10 text-center text-slate-500 text-sm">
          All links open in a new tab at{' '}
          <a href={ETSY_SHOP_URL} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-700 font-medium">
            Etsy.com/shop/PharmacyGuides
          </a>
        </p>
      </div>
    </section>
  )
}
