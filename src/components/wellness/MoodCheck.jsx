import { useState } from 'react'

const MOOD_OPTIONS = [
  { value: 'great', label: 'Doing great', emoji: '☀️' },
  { value: 'good', label: 'Doing okay', emoji: '🌤️' },
  { value: 'meh', label: 'A bit low', emoji: '⛅' },
  { value: 'heavy', label: 'Heavy right now', emoji: '🌧️' },
]

const MOOD_CONTENT = {
  great: {
    message: "So glad to hear it. Keep doing what’s working for you.",
    actionStep: "Take one small moment to notice what feels good right now.",
  },
  good: {
    message: "Thanks for checking in. You’re doing fine — take it one step at a time.",
    actionStep: "Pick one thing you can do in the next 10 minutes that would feel supportive.",
  },
  meh: {
    message: "It’s okay to feel this way. A small break or a 2-minute reset might help.",
    actionStep: "Try one 2-minute reset below, or step away for a short walk or sip of water.",
  },
  heavy: {
    message: "Thanks for being here. You’re not alone. Consider a 2-minute reset below, or come back whenever you’re ready.",
    actionStep: "Choose one gentle action: a 2-minute reset, a breath, or reaching out to someone you trust.",
  },
}

export default function MoodCheck() {
  const [selected, setSelected] = useState(null)

  function handleSelect(value) {
    setSelected(value)
  }

  function handleClear() {
    setSelected(null)
  }

  const content = selected ? MOOD_CONTENT[selected] : null

  return (
    <section
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
      aria-labelledby="mood-check-heading"
    >
      <h2 id="mood-check-heading" className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        Mood Check
      </h2>
      <p className="text-slate-600 text-sm sm:text-base mb-6">
        How are you feeling right now? Pick what fits — no judgment, just a gentle check-in.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {MOOD_OPTIONS.map(({ value, label, emoji }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleSelect(value)}
            className={`flex flex-col items-center justify-center gap-2 py-4 px-3 rounded-xl border-2 text-sm font-medium transition-colors ${
              selected === value
                ? 'border-teal-500 bg-teal-50 text-teal-700'
                : 'border-slate-200 bg-slate-50/50 text-slate-600 hover:border-teal-200 hover:bg-teal-50/50'
            }`}
            aria-pressed={selected === value}
          >
            <span className="text-2xl" aria-hidden>{emoji}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {content && (
        <div
          className="rounded-xl border border-teal-100 bg-teal-50/70 px-4 py-4 text-slate-700 text-sm sm:text-base animate-[fade-in-up_0.4s_ease-out] space-y-2"
          role="status"
        >
          <p>{content.message}</p>
          <p className="text-teal-700 font-medium">{content.actionStep}</p>
        </div>
      )}

      {selected && (
        <button
          type="button"
          onClick={handleClear}
          className="mt-4 text-slate-500 hover:text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded-lg px-2 py-1"
        >
          Clear selection
        </button>
      )}
    </section>
  )
}
