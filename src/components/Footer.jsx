import { Link } from 'react-router-dom'
import NewsletterSignup from './NewsletterSignup'
import { PillBottle } from './icons/PharmaIcons'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 pb-8 border-b border-slate-700">
          <p className="text-white font-display font-semibold text-sm mb-2">MSL Insight — Newsletter</p>
          <p className="text-slate-400 text-sm mb-3">Weekly or monthly tips for industry-bound pharmacists.</p>
          <NewsletterSignup variant="footer" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <span className="w-9 h-9 rounded-lg bg-teal-800 text-teal-300 flex items-center justify-center shrink-0" aria-hidden="true">
              <PillBottle className="w-5 h-5" />
            </span>
            <img
              src="/logo-dr-sarah.png"
              alt="PharmacyGuides by Dr. Sarah, PharmD RPh"
              className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
            />
          </Link>
          <nav className="flex flex-wrap gap-6">
            <Link to="/" className="hover:text-teal-400 transition-colors">Home</Link>
            <Link to="/study-guides" className="hover:text-teal-400 transition-colors">Study Guides</Link>
            <a href="https://www.etsy.com/shop/PharmacyGuides" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors">Shop on Etsy</a>
            <Link to="/industry-pivot" className="hover:text-teal-400 transition-colors">Industry Pivot</Link>
            <Link to="/mentorship" className="hover:text-teal-400 transition-colors">Mentorship</Link>
            <Link to="/about" className="hover:text-teal-400 transition-colors">About</Link>
          </nav>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} by PharmacyGuides, LLC</p>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-teal-400 hover:text-teal-300 transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
