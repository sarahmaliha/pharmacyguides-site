import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Blog() {
  return (
    <main className="min-h-[60vh]">
      <Helmet>
        <title>Blog | PharmacyGuides LLC</title>
        <meta
          name="description"
          content="Practical pharmacy advice for APPEs, boards, mentorship, and career pivots from Dr. Sarah at PharmacyGuides."
        />
      </Helmet>

      <section className="relative overflow-hidden py-12 sm:py-16 bg-gradient-to-br from-brand-mintLight via-white to-brand-skyLight/50">
        <div
          className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-brand-skyPastel/40 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-teal-200/30 blur-2xl"
          aria-hidden
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="animate-review-in">
              <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">Blog</p>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
                Notes from the pharmacy path
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl">
                Practical tips for APPEs, boards, and the next chapter after pharmacy school, written by someone who has been there.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none animate-review-in [animation-delay:120ms]">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-teal-100/70 to-brand-skyPastel/40 blur-sm" aria-hidden />
              <img
                src="/blog-hero.svg"
                alt=""
                className="relative w-full rounded-3xl border border-white/80 shadow-sm"
                width={480}
                height={360}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">Latest post</h2>
              <p className="text-slate-600 mt-1">Start here for a quick win before your next rotation.</p>
            </div>
          </div>

          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={post.path}
                className="group grid grid-cols-1 md:grid-cols-[220px_1fr] gap-0 overflow-hidden rounded-3xl border border-brand-skyPastel/60 bg-gradient-to-br from-white via-brand-mintLight/40 to-brand-skyLight/30 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
              >
                <div className="relative min-h-[200px] md:min-h-full overflow-hidden bg-slate-100">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.imageAlt || ''}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-800" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-slate-900/10 to-transparent" aria-hidden />
                  <p className="absolute left-4 bottom-4 text-xs font-semibold uppercase tracking-wider text-white">
                    {post.tag || 'Pharmacy'}
                  </p>
                </div>

                <div className="p-6 sm:p-8">
                  <time dateTime={post.publishedAt} className="block text-sm text-slate-500 mb-2">
                    {formatDate(post.publishedAt)}
                  </time>
                  <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-5">
                    {post.excerpt || post.description}
                  </p>
                  <span className="inline-flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                    Read the full post
                    <span className="ml-1 transition-transform group-hover:translate-x-0.5" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
