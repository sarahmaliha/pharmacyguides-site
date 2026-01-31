import { useState } from 'react'

/**
 * Simple email signup for "MSL Insight" newsletter.
 * Hook up to your email provider (ConvertKit, Mailchimp, etc.) via form action or API.
 */
export default function NewsletterSignup({ variant = 'inline' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('loading')
    // TODO: POST to your email provider API or use form action
    setTimeout(() => setStatus('success'), 800)
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-teal-50 border border-teal-100 p-4 text-center text-teal-800 text-sm">
        Thanks! Check your inbox to confirm your subscription.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={variant === 'footer' ? 'flex flex-col sm:flex-row gap-2 max-w-md' : 'space-y-3'}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email for MSL Insight newsletter
      </label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        disabled={status === 'loading'}
        className="flex-1 w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-4 py-2.5 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 disabled:opacity-60 transition-colors"
      >
        {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
      </button>
    </form>
  )
}
