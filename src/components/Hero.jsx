import { Link } from 'react-router-dom'
import { CapsuleBullet } from './icons/PharmaIcons'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-sage-50">
      {/* Pharmacy-themed background: subtle pill/capsule shapes */}
      <div className="absolute inset-0 opacity-[0.05]" aria-hidden="true">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pills" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <ellipse cx="20" cy="40" rx="12" ry="4" fill="#0d9488" />
              <ellipse cx="60" cy="15" rx="12" ry="4" fill="#0d9488" />
              <ellipse cx="45" cy="65" rx="12" ry="4" fill="#0d9488" />
              <circle cx="70" cy="50" r="4" fill="#0d9488" />
              <circle cx="10" cy="20" r="3" fill="#0d9488" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pills)" />
        </svg>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Logo: Dr. Sarah as the face of the brand — prominent on all screens */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 mb-10 lg:mb-0 lg:order-2">
            <img
              src="/logo-dr-sarah.png"
              alt="PharmacyGuides by Dr. Sarah, PharmD RPh — your guide to pharmacy school, licensure, and industry"
              className="w-56 h-auto sm:w-72 lg:w-80 xl:w-96 max-w-full drop-shadow-lg"
              width={384}
              height={384}
            />
          </div>
          <div className="max-w-2xl lg:order-1">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
              Master pharmacy school, licensure exams, and{' '}
              <span className="text-teal-600">beyond.</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl">
              Concise guides on 65+ clinical topics, up-to-date NAPLEX & MPJE review, quick reference for rotations — and a clear path from pharmacist to industry roles like MSL.
            </p>
            <ul className="mt-8 space-y-3 text-slate-700">
              {[
                'Concise guides on 65+ clinical pharmacy topics',
                'Up-to-date NAPLEX & MPJE Review',
                'Quick reference for clinical rotations',
                'Created by a licensed pharmacist',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-teal-500 flex-shrink-0" aria-hidden="true">
                    <CapsuleBullet className="w-3 h-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/industry-pivot"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-teal-600 text-white font-semibold text-base shadow-lg shadow-teal-600/25 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
              >
                Start Your Industry Journey
              </Link>
              <Link
                to="/study-guides"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl border-2 border-slate-300 text-slate-700 font-semibold text-base hover:border-teal-500 hover:text-teal-600 transition-colors"
              >
                Browse Study Guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
