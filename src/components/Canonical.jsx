import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import { canonicalUrl } from '../site'

/** Tells Google which URL is the official version of each page. */
export default function Canonical() {
  const { pathname } = useLocation()
  const href = canonicalUrl(pathname)

  return (
    <Helmet>
      <link rel="canonical" href={href} />
      <meta property="og:url" content={href} />
    </Helmet>
  )
}
