export const BASE_URL = 'https://pharmacyguides.net'

/** Build a canonical URL for a path like `/study-guides` or `/`. */
export function canonicalUrl(pathname = '/') {
  const clean = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  return `${BASE_URL}${clean}`
}
