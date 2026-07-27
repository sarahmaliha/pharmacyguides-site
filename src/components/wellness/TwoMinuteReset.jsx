import { useState, useEffect, useRef } from 'react'

const TOTAL_SECONDS = 2 * 60 // 2 minutes

function formatTime(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

const cardShell =
  'rounded-2xl border border-teal-100/70 bg-brand-mintLight/30 p-5 sm:p-6 h-full flex flex-col'

function TimerCard() {
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isRunning) return
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false)
          return 0
        }
        return prev - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [isRunning])

  function handleStart() {
    if (secondsLeft === 0) setSecondsLeft(TOTAL_SECONDS)
    setIsRunning(true)
  }

  function handlePause() {
    setIsRunning(false)
  }

  function handleReset() {
    setIsRunning(false)
    setSecondsLeft(TOTAL_SECONDS)
  }

  return (
    <div className={cardShell}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" aria-hidden>⏱️</span>
        <h3 className="font-display font-semibold text-slate-900 text-lg">Two quiet minutes</h3>
      </div>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        Step away from the inbox, the chart, or the study guide. Just two minutes.
      </p>
      <div className="mt-auto space-y-3">
        <p className="font-mono text-3xl font-semibold text-teal-700 tabular-nums" aria-live="polite">
          {formatTime(secondsLeft)}
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={isRunning ? handlePause : handleStart}
            className="py-2.5 px-4 rounded-full bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="py-2.5 px-4 rounded-full border-2 border-teal-100 text-slate-700 font-semibold text-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

const BOX_STEPS = [
  { id: 'inhale', label: 'Inhale', count: 4 },
  { id: 'hold1', label: 'Hold', count: 4 },
  { id: 'exhale', label: 'Exhale', count: 4 },
  { id: 'hold2', label: 'Hold', count: 4 },
]

function BoxBreathingCard() {
  const [stepIndex, setStepIndex] = useState(0)
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!isActive) return
    const step = BOX_STEPS[stepIndex]
    const target = step.count
    if (count >= target) {
      const next = (stepIndex + 1) % BOX_STEPS.length
      setStepIndex(next)
      setCount(0)
      return
    }
    intervalRef.current = setInterval(() => setCount((c) => c + 1), 1000)
    return () => clearInterval(intervalRef.current)
  }, [isActive, stepIndex, count])

  function handleStart() {
    setStepIndex(0)
    setCount(0)
    setIsActive(true)
  }

  function handleStop() {
    setIsActive(false)
    setStepIndex(0)
    setCount(0)
  }

  const step = BOX_STEPS[stepIndex]
  const progress = step ? Math.min(count / step.count, 1) : 0

  return (
    <div className={cardShell}>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl" aria-hidden>🌬️</span>
        <h3 className="font-display font-semibold text-slate-900 text-lg">Box breathing</h3>
      </div>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">
        Inhale 4, hold 4, exhale 4, hold 4. A simple reset between patients, lectures, or long days.
      </p>
      <div className="mt-auto space-y-3">
        {isActive ? (
          <>
            <p className="text-sm font-medium text-teal-700" aria-live="polite">
              Step {stepIndex + 1} of 4: {step.label} ({count} of {step.count})
            </p>
            <div className="h-2 rounded-full bg-white/80 overflow-hidden">
              <div
                className="h-full bg-teal-500 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
            <button
              type="button"
              onClick={handleStop}
              className="py-2.5 px-4 rounded-full border-2 border-teal-100 text-slate-700 font-semibold text-sm hover:bg-white/70 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
            >
              Stop
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={handleStart}
            className="py-2.5 px-4 rounded-full bg-teal-600 text-white font-semibold text-sm hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors"
          >
            Start breathing
          </button>
        )}
      </div>
    </div>
  )
}

const QUICK_TIPS = [
  {
    icon: '🌿',
    title: 'Ground yourself',
    description: 'Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste.',
  },
  {
    icon: '💧',
    title: 'Pause and sip',
    description: 'Get a glass of water. Drink slowly and notice the temperature and taste.',
  },
]

export default function TwoMinuteReset() {
  return (
    <section
      className="rounded-2xl border border-teal-100/80 bg-white/85 p-6 sm:p-8 shadow-sm"
      aria-labelledby="reset-heading"
    >
      <h2 id="reset-heading" className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
        Take 2 minutes
      </h2>
      <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
        Short practices for between classes, before a shift, or after a hard day. Pick one and give yourself a couple of minutes.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        <TimerCard />
        <BoxBreathingCard />
        {QUICK_TIPS.map(({ icon, title, description }) => (
          <div key={title} className={cardShell}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl" aria-hidden>{icon}</span>
              <h3 className="font-display font-semibold text-slate-900 text-lg">{title}</h3>
            </div>
            <p className="text-slate-600 text-sm mt-auto leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
