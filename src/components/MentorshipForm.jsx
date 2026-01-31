import { useState } from 'react'

const CURRENT_ROLES = ['Student', 'Retail', 'Clinical', 'Other']
const PRIMARY_GOALS = ['Industry Pivot', 'Board Exams', 'Residency']

export default function MentorshipForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    currentRole: '',
    primaryGoal: '',
    biggestChallenge: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto p-8 rounded-2xl bg-teal-50 border border-teal-100 text-center">
        <div className="w-14 h-14 rounded-full bg-teal-500 text-white flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display font-semibold text-slate-900 text-xl mb-2">Thanks for submitting!</h3>
        <p className="text-slate-600 text-sm">
          I'll review your intake and get back to you within a few business days to schedule your session.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="First name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            placeholder="Last name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="currentRole" className="block text-sm font-medium text-slate-700 mb-1.5">
          Current Role
        </label>
        <select
          id="currentRole"
          name="currentRole"
          required
          value={form.currentRole}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select your role</option>
          {CURRENT_ROLES.map((role) => (
            <option key={role} value={role}>{role}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="primaryGoal" className="block text-sm font-medium text-slate-700 mb-1.5">
          Primary Goal
        </label>
        <select
          id="primaryGoal"
          name="primaryGoal"
          required
          value={form.primaryGoal}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
        >
          <option value="">Select your goal</option>
          {PRIMARY_GOALS.map((goal) => (
            <option key={goal} value={goal}>{goal}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="biggestChallenge" className="block text-sm font-medium text-slate-700 mb-1.5">
          What is your biggest challenge?
        </label>
        <textarea
          id="biggestChallenge"
          name="biggestChallenge"
          rows={4}
          required
          value={form.biggestChallenge}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-y"
          placeholder="A few sentences so we can jump straight into strategy during our call..."
        />
      </div>

      <p className="text-xs text-slate-500">
        This form is not intended for medical advice. For mentorship and career strategy only.
      </p>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-teal-600 text-white font-semibold text-base shadow-lg shadow-teal-600/25 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
      >
        Submit & Request a Call
      </button>
    </form>
  )
}
