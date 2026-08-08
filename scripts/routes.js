/**
 * Canonical site routes — shared by sitemap generation and prerender.
 * Keep this list in sync with src/App.jsx.
 */
import { BASE_URL } from '../src/site.js'

export { BASE_URL }

export const ROUTES = [
  '/',
  '/study-guides',
  '/industry-pivot',
  '/wellness',
  '/mentorship',
  '/blog',
  '/blog/top-5-appe-disease-states',
  '/blog/retail-pharmacy-to-msl',
  '/about',
]

/** Higher priority for pages that drive sales. */
export function routePriority(path) {
  if (path === '/') return '1.0'
  if (path === '/study-guides' || path === '/mentorship') return '0.9'
  if (path.startsWith('/blog/')) return '0.7'
  if (path === '/wellness' || path === '/about') return '0.6'
  return '0.8'
}
