import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

/**
 * SEO-optimized blog post template.
 * Use with react-helmet-async for meta tags, or pass meta as props and render in document head.
 *
 * Props:
 * - title: string (e.g. "How to Transition from Retail Pharmacy to MSL")
 * - description: string (meta description)
 * - image: string (high-res image URL for og:image)
 * - publishedAt: string (ISO date)
 * - author: { name, title, bio?, image? }
 * - keyTakeaways: string[]
 * - relatedResources: { title, url }[]
 * - children: post body (JSX)
 */
export default function BlogPostTemplate({
  title = 'Blog Post Title',
  description = 'Meta description for SEO and social sharing.',
  image = '/og-blog-default.jpg',
  publishedAt,
  author = { name: 'Dr. Sarah', title: 'PharmD, RPh · PharmacyGuides, LLC' },
  keyTakeaways = [],
  relatedResources = [],
  children,
}) {
  const canonical = typeof window !== 'undefined' ? window.location.href : ''
  const siteName = 'PharmacyGuides LLC'

  return (
    <>
      <Helmet>
        <title>{title} | {siteName}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="article" />
        {publishedAt && <meta property="article:published_time" content={publishedAt} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <header className="mb-10">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            {title}
          </h1>
          {publishedAt && (
            <time dateTime={publishedAt} className="block mt-4 text-slate-500 text-sm">
              {new Date(publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          )}
        </header>

        {/* High-res header image slot — replace with real image URL for production og:image */}
        <div className="aspect-video rounded-2xl bg-teal-100 mb-10 overflow-hidden">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover"
            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none' }}
          />
        </div>

        <div className="prose prose-slate prose-lg max-w-none">
          {children}
        </div>

        {keyTakeaways.length > 0 && (
          <section className="mt-12 p-6 rounded-2xl bg-teal-50 border border-teal-100">
            <h2 className="font-display font-semibold text-slate-900 text-xl mb-4">Key Takeaways</h2>
            <ul className="space-y-2 text-slate-700">
              {keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-teal-600 font-medium flex-shrink-0">•</span>
                  {takeaway}
                </li>
              ))}
            </ul>
          </section>
        )}

        {relatedResources.length > 0 && (
          <section className="mt-12">
            <h2 className="font-display font-semibold text-slate-900 text-xl mb-4">Related Resources</h2>
            <ul className="space-y-2">
              {relatedResources.map((resource) => (
                <li key={resource.url}>
                  <Link to={resource.url} className="text-teal-600 font-medium hover:text-teal-700 hover:underline">
                    {resource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-12 pt-8 border-t border-slate-200">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-display font-semibold text-lg flex-shrink-0">
              {author.name.charAt(0)}
            </div>
            <div>
              <p className="font-display font-semibold text-slate-900">{author.name}</p>
              <p className="text-sm text-slate-600">{author.title}</p>
              {author.bio && <p className="mt-2 text-slate-600 text-sm">{author.bio}</p>}
            </div>
          </div>
        </footer>
      </article>
    </>
  )
}
