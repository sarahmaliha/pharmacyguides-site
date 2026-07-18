import { Link } from 'react-router-dom'

const TIKTOK = 'https://www.tiktok.com/@pharmacytoks'
const INSTAGRAM = 'https://www.instagram.com/pharmacytoks'

export default function TravelingPharmD() {
  return (
    <section className="relative overflow-hidden py-14 sm:py-20 border-y border-brand-skyPastel/50 bg-gradient-to-br from-brand-mintLight via-white to-brand-skyLight/40">
      <div
        className="pointer-events-none absolute -top-20 right-0 h-64 w-64 rounded-full bg-brand-skyPastel/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-teal-200/25 blur-3xl"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,240px)_1fr] gap-10 lg:gap-14 items-center">
          <div className="relative mx-auto w-48 sm:w-56 lg:w-full">
            <div
              className="absolute -inset-4 rounded-full bg-gradient-to-br from-teal-200/60 to-brand-skyPastel/50 blur-md"
              aria-hidden
            />
            <img
              src="/sarah-headshot.png?v=6"
              alt="Dr. Sarah, Traveling PharmD and founder of PharmacyGuides"
              className="relative w-full aspect-square object-contain drop-shadow-md"
              width={240}
              height={240}
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
              Dr. Sarah · Traveling PharmD
            </p>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 leading-tight">
              High-yield pharmacy. Real life beyond the white coat.
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              On @pharmacytoks I share study tips, career pivots, and the balanced lifestyle side of being a pharmacist who travels. Same Dr. Sarah who builds your guides. Just a little more of the human story.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a
                href={TIKTOK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 transition-colors"
              >
                Watch on TikTok
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl border-2 border-teal-500 text-teal-700 font-semibold text-sm hover:bg-teal-50 transition-colors"
              >
                Follow on Instagram
              </a>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-teal-700 transition-colors"
              >
                My story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
