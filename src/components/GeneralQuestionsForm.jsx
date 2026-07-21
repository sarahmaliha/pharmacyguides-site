import { useState } from 'react'

const GENERAL_QUESTIONS_EMAIL = 'pharmacyguidesllc@gmail.com'
const GENERAL_QUESTIONS_ENDPOINT = `https://formsubmit.co/ajax/${GENERAL_QUESTIONS_EMAIL}`

export default function GeneralQuestionsForm({ idPrefix = 'question' }) {
  const [generalQuestion, setGeneralQuestion] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    const { name, email, message } = generalQuestion
    if (!name.trim() || !email.trim() || !message.trim()) return

    setStatus('submitting')
    try {
      const response = await fetch(GENERAL_QUESTIONS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `General question from PharmacyGuides: ${name}`,
          _template: 'table',
          _replyto: email,
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setStatus('success')
      setGeneralQuestion({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5"
    >
      <div>
        <label htmlFor={`${idPrefix}-name`} className="block text-sm font-medium text-slate-700 mb-1.5">
          Name
        </label>
        <input
          id={`${idPrefix}-name`}
          type="text"
          required
          value={generalQuestion.name}
          onChange={(e) => setGeneralQuestion((q) => ({ ...q, name: e.target.value }))}
          placeholder="Your name"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-email`} className="block text-sm font-medium text-slate-700 mb-1.5">
          Email
        </label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          required
          value={generalQuestion.email}
          onChange={(e) => setGeneralQuestion((q) => ({ ...q, email: e.target.value }))}
          placeholder="your@email.com"
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-message`} className="block text-sm font-medium text-slate-700 mb-1.5">
          Your question
        </label>
        <textarea
          id={`${idPrefix}-message`}
          required
          rows={4}
          value={generalQuestion.message}
          onChange={(e) => setGeneralQuestion((q) => ({ ...q, message: e.target.value }))}
          placeholder="Type your question here..."
          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-y min-h-[100px]"
        />
      </div>
      {status === 'success' && (
        <p className="text-sm text-teal-600 font-medium">
          Thank you! Your question has been sent. I’ll respond at my earliest convenience.
        </p>
      )}
      {status === 'error' && (
        <p className="text-sm text-red-600 font-medium">
          Something went wrong sending your question. Please try again in a moment.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-shimmer w-full py-3 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Submit question'}
      </button>
    </form>
  )
}
