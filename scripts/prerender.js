/**
 * After `vite build`, visit each public route and write fully rendered HTML
 * into dist/ so crawlers receive real page content (not an empty #root shell).
 *
 * Usage: node scripts/prerender.js
 *
 * - On Vercel: uses @sparticuz/chromium (system Chrome is unavailable there)
 * - Locally: uses Google Chrome / Chromium if installed
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { preview } from 'vite'
import puppeteer from 'puppeteer-core'
import { ROUTES } from './routes.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const PORT = 4179
const SHELL_PATH = join(DIST, 'index.html')

/** Substring that must appear in document.title once Helmet has applied. */
const TITLE_HINTS = {
  '/': 'PharmacyGuides: Pharmacy Study Guides and Mentorship',
  '/study-guides': 'Ultimate Bundle',
  '/industry-pivot': 'Industry Pivot Roadmap',
  '/wellness': 'Pharmacy Wellness Hub',
  '/mentorship': 'Pharmacy Mentorship Sessions',
  '/blog': 'Blog | PharmacyGuides',
  '/blog/top-5-appe-disease-states': 'Top 5 Disease States',
  '/blog/how-i-paid-off-pharmacy-school-loans': 'Paid Off $220,000',
  '/blog/retail-pharmacy-to-msl': 'Retail Pharmacy to MSL',
  '/about': 'About PharmacyGuides',
}

const LOCAL_CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  process.env.PUPPETEER_EXECUTABLE_PATH,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
].filter(Boolean)

function outPathForRoute(route) {
  if (route === '/') return join(DIST, 'index.html')
  return join(DIST, route.replace(/^\//, ''), 'index.html')
}

async function launchBrowser() {
  if (process.env.VERCEL) {
    const chromium = (await import('@sparticuz/chromium')).default
    console.log('Launching @sparticuz/chromium (Vercel)')
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    })
  }

  for (const executablePath of LOCAL_CHROME_CANDIDATES) {
    if (!existsSync(executablePath)) continue
    console.log(`Launching local Chrome: ${executablePath}`)
    return puppeteer.launch({
      executablePath,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    })
  }

  throw new Error(
    'No Chrome/Chromium found for prerender. Install Google Chrome, or set CHROME_PATH.',
  )
}

async function waitForPageReady(page, route) {
  const titleHint = TITLE_HINTS[route]

  // Lazy routes show a spinner first — wait until real content + Helmet title.
  await page.waitForFunction(
    (hint) => {
      const root = document.getElementById('root')
      if (!root) return false
      if (root.querySelector('[aria-busy="true"]')) return false
      const text = (root.innerText || '').replace(/\s+/g, ' ').trim()
      if (text.length < 80) return false
      if (hint && !document.title.includes(hint)) return false
      return true
    },
    { timeout: 45000 },
    titleHint,
  )

  // Brief settle for any late meta tags.
  await new Promise((r) => setTimeout(r, 300))
}

async function prerenderRoute(browser, origin, route, spaShellHtml) {
  const page = await browser.newPage()
  const url = `${origin}${route === '/' ? '/' : route}`

  try {
    // Always start from the pristine Vite shell so prior prerenders don't
    // poison Helmet / the initial document title for the next route.
    writeFileSync(SHELL_PATH, spaShellHtml, 'utf8')

    await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 })
    await waitForPageReady(page, route)

    // Force scroll-reveal sections visible so saved HTML isn't opacity:0.
    await page.evaluate(() => {
      document.querySelectorAll('.opacity-0').forEach((el) => {
        el.classList.remove('opacity-0', 'translate-y-5')
        el.classList.add('opacity-100', 'translate-y-0')
      })
    })

    const html = await page.content()
    const filePath = outPathForRoute(route)
    mkdirSync(dirname(filePath), { recursive: true })
    writeFileSync(filePath, html, 'utf8')

    const title = await page.title()
    console.log(`  ✓ ${route} → ${filePath.replace(DIST, 'dist')} (${title})`)
  } finally {
    await page.close()
  }
}

async function main() {
  console.log('Starting preview server for prerender…')
  const spaShellHtml = readFileSync(SHELL_PATH, 'utf8')

  const server = await preview({
    preview: {
      port: PORT,
      strictPort: true,
      host: '127.0.0.1',
    },
  })

  const origin = `http://127.0.0.1:${PORT}`
  console.log(`Prerendering ${ROUTES.length} routes from ${origin}`)

  const browser = await launchBrowser()

  try {
    // Prerender `/` last so restoring the SPA shell between routes cannot
    // wipe the finished homepage file (both use dist/index.html).
    const ordered = [...ROUTES.filter((r) => r !== '/'), '/']
    for (const route of ordered) {
      await prerenderRoute(browser, origin, route, spaShellHtml)
    }
  } finally {
    await browser.close()
    await server.close()
  }

  console.log('Prerender complete.')
}

main().catch((err) => {
  console.error('Prerender failed:', err)
  process.exit(1)
})
