import MentorshipForm from '../components/MentorshipForm'

export default function Mentorship() {
  return (
    <main className="min-h-[60vh] py-12 sm:py-16">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-teal-600 font-medium text-sm uppercase tracking-wider mb-2">
            Personalized Mentorship
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Book a Session
          </h1>
          <p className="text-slate-600">
            One-on-one virtual guidance for pharmacy students and pharmacists navigating burnout, career pivots, or industry transitions. Complete the intake form below so we can jump straight into strategy during our call.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <MentorshipForm />
        </div>
        <p className="mt-6 text-center text-sm text-slate-500">
          After submitting, you'll receive a link to book a time (e.g. Calendly) or a follow-up email to schedule.
        </p>
      </section>
    </main>
  )
}
