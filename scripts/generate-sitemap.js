/**
 * Generates sitemap.xml at public/sitemap.xml.
 * Run before build: npm run generate-sitemap
 * Vite serves public/ at root, so this becomes /sitemap.xml.
 */

import { writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const BASE_URL = 'https://pharmacyguides.net'

const ROUTES = [
  '/',
  '/wellness',
  '/mentorship',
  '/about',
]

const lastmod = new Date().toISOString().split('T')[0]

const urlEntries = ROUTES.map((path) => {
  const loc = path === '/' ? BASE_URL : `${BASE_URL}${path}`
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
}).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`

const outPath = join(__dirname, '..', 'public', 'sitemap.xml')
writeFileSync(outPath, sitemap, 'utf8')
console.log('Generated', outPath)
