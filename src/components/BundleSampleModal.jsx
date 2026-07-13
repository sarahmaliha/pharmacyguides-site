import { DIABETES_SAMPLE } from '../data/bundleSample'

export default function BundleSampleModal({ open, onClose }) {
  if (!open) return null

  const sample = DIABETES_SAMPLE

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bundle-sample-title"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col border border-teal-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-start justify-between gap-3 shrink-0 bg-gradient-to-r from-brand-mintLight to-white">
          <div>
            <p className="text-teal-600 text-xs font-semibold uppercase tracking-wider mb-1">
              Free sample preview
            </p>
            <h2 id="bundle-sample-title" className="font-display font-semibold text-slate-900 text-lg sm:text-xl">
              {sample.title}
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{sample.subtitle}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-colors shrink-0"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5 text-slate-700 text-sm sm:text-base">
          {sample.sections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-display font-semibold text-teal-800 text-base mb-2">
                {section.heading}
              </h3>
              {section.body && <p className="text-slate-600 leading-relaxed">{section.body}</p>}
              {section.bullets && (
                <ul className="mt-2 space-y-1.5">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-teal-500 mt-1.5 shrink-0" aria-hidden>
                        <span className="block w-1.5 h-1.5 rounded-full bg-teal-500" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.table && (
                <div className="mt-3 overflow-x-auto rounded-xl border border-slate-200">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-teal-50 text-teal-800">
                      <tr>
                        {section.table.headers.map((h) => (
                          <th key={h || 'blank'} className="px-3 py-2 font-semibold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.table.rows.map((row) => (
                        <tr key={row[0]} className="border-t border-slate-100">
                          {row.map((cell, i) => (
                            <td key={`${row[0]}-${i}`} className="px-3 py-2 text-slate-700">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {section.notes && (
                <ul className="mt-2 space-y-1 text-slate-600 text-sm">
                  {section.notes.map((n) => (
                    <li key={n}>• {n}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <p className="text-xs text-slate-500 italic border-t border-slate-100 pt-4">
            {sample.footerNote}
          </p>
        </div>
      </div>
    </div>
  )
}
