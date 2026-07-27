import { useState, useCallback } from 'react'

const PROMPTS = [
  'What is one win from this week, even a small one?',
  'What felt heavier than expected today: school, residency, or work?',
  'What would you say to a friend in your position?',
  'What actually matters most right now?',
  'What can wait until tomorrow?',
  'Where did you show resilience recently?',
  'What did you handle better than last time?',
  'What support would help you most right now?',
  'What is one small next step that would feel kind?',
  'What are you learning about yourself this season of pharmacy?',
  'What progress are you overlooking?',
  'What would "good enough" look like today?',
  'What do you need after a long shift or rotation day?',
  'If you could set one boundary this week, what would it be?',
]

function getRandomPrompt(current) {
  const others = current ? PROMPTS.filter((p) => p !== current) : PROMPTS
  return others[Math.floor(Math.random() * others.length)]
}

export default function ReflectionPromptGenerator() {
  const [prompt, setPrompt] = useState(null)
  const [fadeKey, setFadeKey] = useState(0)

  const showNewPrompt = useCallback(() => {
    const next = getRandomPrompt(prompt)
    setPrompt(next)
    setFadeKey((k) => k + 1)
  }, [prompt])

  return (
    <section
      className="rounded-2xl border border-teal-100/80 bg-white/85 p-6 sm:p-8 shadow-sm"
      aria-labelledby="reflection-heading"
    >
      <h2 id="reflection-heading" className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        A gentle prompt
      </h2>
      <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
        Sit with one question. Use it in a journal, on a walk, in the car after work, or just in your head.
      </p>

      <div className="min-h-[120px] flex flex-col justify-center">
        {prompt ? (
          <p
            key={fadeKey}
            className="text-slate-700 text-base sm:text-lg italic mb-6 animate-[fade-in-up_0.5s_ease-out] leading-relaxed"
            role="status"
          >
            "{prompt}"
          </p>
        ) : (
          <p className="text-slate-500 text-sm mb-6">
            When you are ready, grab a prompt.
          </p>
        )}

        <button
          type="button"
          onClick={showNewPrompt}
          className="w-full sm:w-auto py-3 px-6 rounded-full bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
        >
          Give me a prompt
        </button>
      </div>
    </section>
  )
}
