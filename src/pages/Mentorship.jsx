import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import GeneralQuestionsForm from '../components/GeneralQuestionsForm'

const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_URL = 'https://calendly.com/pharmacyguidesllc/30min'

const TOPICS = [
  'Navigating pharmacy school and rotations',
  'Residency questions and preparation',
  'Exploring pharmaceutical industry careers',
  'Career transitions and figuring out your next step',
  'Burnout, confidence, and finding balance',
  'General pharmacy career advice',
]

const STEPS = [
  {
    title: 'Pick a time',
    body: 'Choose any open slot on the calendar below. Everything is virtual.',
  },
  {
    title: 'Tell me what’s on your mind',
    body: 'Share your main question when you book so I can come prepared for you.',
  },
  {
    title: 'We talk',
    body: 'A relaxed 30-minute call. Bring as many questions as you want.',
  },
]

export default function Mentorship() {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    const parent = document.getElementById('calendly-embed')
    if (!parent) return

    function initWidget() {
      if (!parent || !window.Calendly) return
      parent.innerHTML = ''
      initialized.current = true
      window.Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: parent,
        prefill: {},
        utm: {},
      })
    }

    if (window.Calendly) {
      initWidget()
      return
    }

    if (document.querySelector(`script[src="${CALENDLY_SCRIPT_URL}"]`)) {
      const checkCalendly = setInterval(() => {
        if (window.Calendly) {
          clearInterval(checkCalendly)
          initWidget()
        }
      }, 100)
      return () => clearInterval(checkCalendly)
    }

    const script = document.createElement('script')
    script.src = CALENDLY_SCRIPT_URL
    script.async = true
    script.onload = initWidget
    document.body.appendChild(script)
  }, [])

  return (
    <main
      className="relative min-h-[60vh] py-12 sm:py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/how-i-help-banner.png')" }}
    >
      <Helmet>
        <title>Pharmacy Mentorship Sessions: 1:1 Guidance with Dr. Sarah</title>
        <meta name="description" content="Book a $50, 30-minute pharmacy mentorship session for student guidance, residency, industry careers, and general career advice. Not tutoring." />
      </Helmet>
      <section className="relative max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left sm:gap-8 mb-8 sm:mb-10 animate-review-in">
          <div className="relative flex-shrink-0 w-36 h-36 sm:w-44 sm:h-44 mb-5 sm:mb-0">
            <div
              className="pointer-events-none absolute -inset-3 rounded-full bg-gradient-to-br from-teal-100/70 to-brand-blush/50 blur-lg"
              aria-hidden
            />
            <img
              src="/sarah-headshot.png?v=6"
              alt="Dr. Sarah, PharmD, RPh, pharmacy mentor and founder of PharmacyGuides"
              className="relative w-full h-full object-contain drop-shadow-md"
              width={176}
              height={176}
            />
          </div>
          <div>
            <p className="eyebrow mb-2">
              Personalized Mentorship
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
              Book a Session
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Hi, I’m Dr. Sarah. Let’s spend 30 minutes on whatever is weighing on you: school, residency, industry, or figuring out what comes next.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-teal-100 bg-white/80 px-5 py-5 sm:px-7 sm:py-6 shadow-sm mb-8 sm:mb-10">
          <p className="text-slate-600 leading-relaxed">
            I’ve been through pharmacy school, APPEs, residency, retail, management, and a pivot into industry, and at almost every step I wished I had someone I could just ask. That’s what this is. Come as you are, bring the messy questions, and we’ll talk it through together. There’s no such thing as a question that’s too small.
          </p>
          <p className="mt-3 text-sm font-medium text-accent-700">
            - Dr. Sarah, PharmD, RPh
          </p>
        </div>

        <div className="mb-8 sm:mb-10">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            What we can talk about
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
            {TOPICS.map((topic) => (
              <li key={topic} className="flex items-start gap-2.5 text-slate-600 text-sm sm:text-base">
                <span
                  className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {topic}
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-xs mt-4 leading-relaxed">
            Mentorship and career strategy only: not tutoring, clinical instruction, job placement, or medical advice.
          </p>
        </div>

        <div className="mb-8 sm:mb-10">
          <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-4">
            How it works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STEPS.map((step, i) => (
              <div
                key={step.title}
                className="hover-lift h-full rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-sm"
              >
                <span className="inline-flex w-7 h-7 rounded-full bg-accent-100 text-accent-700 font-bold text-sm items-center justify-center mb-3">
                  {i + 1}
                </span>
                <h3 className="font-display font-semibold text-slate-900 text-base mb-1">
                  {step.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[560px] mx-auto mb-6">
          <div className="rounded-xl border border-teal-200/80 bg-teal-50/70 px-4 py-3 sm:px-5 sm:py-4 flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-teal-100 text-teal-600 flex items-center justify-center" aria-hidden="true">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <div>
              <h3 className="font-display font-semibold text-slate-900 text-sm sm:text-base">
                Session Rate
              </h3>
              <p className="text-slate-600 text-sm mt-0.5">
                $50 for a 30-minute mentorship session.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Payment is collected at booking (secure checkout via PayPal).
              </p>
            </div>
          </div>
        </div>

        <div className="w-full max-w-[900px] mx-auto mt-2 mb-8 sm:mb-10">
          <div
            id="calendly-embed"
            className="w-full"
            style={{ minWidth: '320px', height: '700px' }}
          />
        </div>

        <p className="mt-8 sm:mt-10 text-center text-sm text-slate-500">
          Your session will be confirmed by email. Not sure if this is the right fit? Reach out before booking and just ask. I’m happy to help you decide.
        </p>

        <section className="mt-16 sm:mt-20 pt-12 sm:pt-16 border-t border-slate-200/80">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 text-center mb-2">
              General Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base text-center mb-8">
              Have a question? Submit the form below and I’ll respond at my earliest convenience.
            </p>
            <GeneralQuestionsForm idPrefix="mentorship-question" />
          </div>
        </section>
      </section>
    </main>
  )
}
