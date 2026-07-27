import { useState } from 'react'

const MOOD_OPTIONS = [
  { value: 'great', label: 'Doing okay today', emoji: '☀️' },
  { value: 'good', label: 'Holding steady', emoji: '🌤️' },
  { value: 'meh', label: 'A bit low', emoji: '⛅' },
  { value: 'heavy', label: 'Heavy right now', emoji: '🌧️' },
]

const MOOD_CONTENT = {
  great: {
    message: "Glad you have a little light today. That matters, even on busy rotations or long shifts.",
    actionStep: "Take one small moment to notice what feels supportive right now.",
  },
  good: {
    message: "Thanks for checking in. Steady is still a win when the days keep stacking up.",
    actionStep: "Pick one thing you can do in the next 10 minutes that would feel kind to yourself.",
  },
  meh: {
    message: "It is okay to feel this way. School, residency, and practice can all wear you down without asking permission.",
    actionStep: "Try a 2-minute reset below, or step away for a short walk or sip of water.",
  },
  heavy: {
    message: "Thank you for being here. You are not alone in this, whether you are a student, resident, or pharmacist carrying too much.",
    actionStep: "Choose one gentle action: a short reset, a slow breath, or reaching out to someone you trust.",
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
      className="rounded-2xl border border-teal-100/80 bg-white/85 p-6 sm:p-8 shadow-sm"
      aria-labelledby="mood-check-heading"
    >
      <h2 id="mood-check-heading" className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        How are you, really?
      </h2>
      <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
        No performance review. Just a quiet check-in for wherever you are in pharmacy life.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {MOOD_OPTIONS.map(({ value, label, emoji }) => (
          <button
            key={value}
            type="button"
            onClick={() => handleSelect(value)}
            className={`flex flex-col items-center justify-center gap-2 py-4 px-3 rounded-2xl border-2 text-sm font-medium transition-colors ${
              selected === value
                ? 'border-accent-300 bg-accent-50 text-accent-800'
                : 'border-teal-100/80 bg-brand-mintLight/40 text-slate-600 hover:border-accent-200 hover:bg-accent-50/60'
            }`}
            aria-pressed={selected === value}
          >
            <span className="text-2xl" aria-hidden>{emoji}</span>
            <span className="text-center leading-snug">{label}</span>
          </button>
        ))}
      </div>

      {content && (
        <div
          className="rounded-2xl border border-accent-100 bg-accent-50/70 px-4 py-4 text-slate-700 text-sm sm:text-base animate-[fade-in-up_0.4s_ease-out] space-y-2"
          role="status"
        >
          <p>{content.message}</p>
          <p className="text-accent-700 font-medium">{content.actionStep}</p>
        </div>
      )}

      {selected && (
        <button
          type="button"
          onClick={handleClear}
          className="mt-4 text-slate-500 hover:text-slate-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2 rounded-lg px-2 py-1"
        >
          Clear selection
        </button>
      )}
    </section>
  )
}
