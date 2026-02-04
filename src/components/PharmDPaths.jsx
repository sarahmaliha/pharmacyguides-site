const PATHS = [
  {
    id: 'community-retail',
    title: 'Community / Retail',
    subtitle: 'Patient-facing pharmacy practice',
    items: ['Independent pharmacy', 'Specialty pharmacy', 'Alternative medicine / integrative'],
    color: 'teal',
  },
  {
    id: 'clinical',
    title: 'Clinical',
    subtitle: 'Hospital and health system roles',
    items: ['Inpatient (acute care, ICU, etc.)', 'Outpatient (ambulatory care, clinics)'],
    color: 'teal',
  },
  {
    id: 'industry',
    title: 'Industry',
    subtitle: 'Pharma & biotech functions',
    items: ['Medical Affairs (e.g. MSL)', 'Commercial (sales, marketing)', 'R&D', 'Regulatory Affairs', 'Clinical Development', 'Pharmacovigilance'],
    color: 'teal',
  },
]

export default function PharmDPaths() {
  return (
    <section className="relative py-16 sm:py-24 bg-brand-mintLight/40 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-4">
          Paths a PharmD Can Take
        </h2>
        <p className="text-slate-600 text-center max-w-2xl mx-auto mb-12 text-sm sm:text-base">
          From community and clinical practice to industry — explore the breadth of career options.
        </p>

        {/* Flowchart: central PharmD node + three branches */}
        <div className="relative">
          {/* Central node */}
          <div className="flex justify-center mb-8 sm:mb-10">
            <div className="inline-flex items-center justify-center rounded-2xl bg-teal-600 text-white px-6 py-3 shadow-md border-2 border-teal-700/30">
              <span className="font-display font-bold text-lg sm:text-xl">PharmD</span>
            </div>
          </div>

          {/* Connector: vertical line from node to cards (visible on md+) */}
          <div className="hidden md:flex justify-center pointer-events-none" aria-hidden="true">
            <div className="w-0.5 h-8 bg-gradient-to-b from-teal-400 to-teal-200/80 rounded-full" />
          </div>
          <div className="hidden md:block h-4" aria-hidden="true" />

          {/* Three branch cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {PATHS.map((path) => (
              <div
                key={path.id}
                className="relative bg-white rounded-2xl border-2 border-teal-200/80 shadow-sm hover:shadow-md hover:border-teal-300/80 transition-all overflow-hidden"
              >
                <div className="bg-gradient-to-br from-teal-50 to-brand-mintLight/60 px-5 py-4 border-b border-teal-100">
                  <h3 className="font-display font-semibold text-slate-900 text-lg">
                    {path.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-0.5">
                    {path.subtitle}
                  </p>
                </div>
                <ul className="p-5 space-y-2">
                  {path.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="text-teal-500 mt-0.5 shrink-0" aria-hidden="true">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
