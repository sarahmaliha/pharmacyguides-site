import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-62DX28B646'

function ensureGtag() {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') return false
  if (window.gtag) return true

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  return true
}

/** Tracks page views in Google Analytics for React Router navigations. */
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (!ensureGtag()) return

    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: location.pathname + location.search,
    })
  }, [location])

  return null
}
