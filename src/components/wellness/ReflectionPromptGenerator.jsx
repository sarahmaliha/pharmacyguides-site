import { useState, useCallback } from 'react'

const PROMPTS = [
  'What is one win from this week?',
  'What felt heavier than expected today?',
  'What would you say to a friend in your position?',
  'What actually matters most right now?',
  'What can wait until tomorrow?',
  'Where did you show resilience recently?',
  'What did you handle better than last time?',
  'What support would help you most right now?',
  'What is one small next step?',
  'What are you learning about yourself this season?',
  'What progress are you overlooking?',
  'What would "good enough" look like today?',
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
      className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm"
      aria-labelledby="reflection-heading"
    >
      <h2 id="reflection-heading" className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        Reflection Prompt Generator
      </h2>
      <p className="text-slate-600 text-sm sm:text-base mb-6">
        Get a gentle prompt to reflect on. Use it in a journal, during a walk, or just in your head.
      </p>

      <div className="min-h-[120px] flex flex-col justify-center">
        {prompt ? (
          <p
            key={fadeKey}
            className="text-slate-700 text-base sm:text-lg italic mb-6 animate-[fade-in-up_0.5s_ease-out]"
            role="status"
          >
            "{prompt}"
          </p>
        ) : (
          <p className="text-slate-500 text-sm mb-6" aria-hidden>
            Click the button below to get a prompt.
          </p>
        )}

        <button
          type="button"
          onClick={showNewPrompt}
          className="w-full sm:w-auto py-3 px-6 rounded-xl bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
        >
          Generate a Reflection Prompt
        </button>
      </div>
    </section>
  )
}
