import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import GeneralQuestionsForm from '../components/GeneralQuestionsForm'

const CALENDLY_SCRIPT_URL = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_URL = 'https://calendly.com/pharmacyguidesllc/30min'

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
        <title>Pharmacy Mentorship Sessions: 1:1 Student Support</title>
        <meta name="description" content="Book a one-on-one pharmacy mentorship session for study strategy, career guidance, and exam support." />
      </Helmet>
      <section className="relative max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-10 sm:mb-12">
          <p className="eyebrow mb-2">
            Personalized Mentorship
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Book a Session
          </h1>
          <p className="text-slate-600">
            One-on-one virtual guidance for pharmacy students and pharmacists navigating burnout, career pivots, or industry transitions. Select a time below to book your 30-minute call.
          </p>
        </div>

        <div className="w-full max-w-[560px] mx-auto mb-2">
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
                Initial mentorship sessions are $20.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Payment is collected at booking. (secure checkout via PayPal)
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
          Your session will be confirmed by email. Questions? Reach out before booking if you’d like to discuss fit.
        </p>
        <p className="mt-4 text-center text-xs text-slate-500 italic">
          Mentorship and career strategy only. Not medical advice.
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
