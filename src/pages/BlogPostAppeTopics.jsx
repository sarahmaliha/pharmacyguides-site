import BlogPostTemplate from '../components/BlogPostTemplate'
import { RELAYED_SHOP_URL } from '../data/etsyStudyGuides'

export default function BlogPostAppeTopics() {
  return (
    <BlogPostTemplate
      title="Top 5 Disease States to Know for APPEs"
      description="Focus your APPE prep on the five disease states you will encounter most often: hypertension, diabetes, anticoagulation, infectious diseases, and heart failure."
      publishedAt="2026-07-14T12:00:00.000Z"
      author={{
        name: 'Dr. Sarah',
        title: 'PharmD, RPh · PharmacyGuides, LLC',
        bio: 'Pharmacist and educator helping pharmacy students feel more confident on APPEs, boards, and the path beyond.',
      }}
      keyTakeaways={[
        'Prioritize hypertension, diabetes, anticoagulation, infectious diseases, and heart failure before rotations.',
        'Know first-line therapies, monitoring, and counseling points more than memorizing every drug.',
        'For antibiotics, focus on MRSA and Pseudomonas coverage plus why therapy is chosen or de-escalated.',
        'Preceptors do not expect you to know everything. Stay curious and ask questions.',
      ]}
      relatedResources={[
        { title: 'Browse Study Guides', url: '/study-guides' },
        { title: 'Book Mentorship', url: '/mentorship' },
        { title: 'Wellness Hub', url: '/wellness' },
      ]}
    >
      <p>
        Congratulations! You&apos;ve made it to APPEs. Now comes the fun part: realizing your preceptors somehow know exactly which topics you forgot to review.
      </p>
      <p>
        Instead of trying to review every disease state you&apos;ve ever learned, focus on building a strong foundation in the ones you&apos;ll encounter most often. No matter what rotation you&apos;re starting, whether it&apos;s ambulatory care, internal medicine, community pharmacy, or another specialty, these five topics will help you feel more confident when asked questions on the spot before your coffee has kicked in.
      </p>

      <h2>1. Hypertension</h2>
      <p>
        If there&apos;s one disease state you can&apos;t escape during pharmacy school or APPEs, it&apos;s hypertension.
      </p>
      <p>Before your rotation, make sure you&apos;re comfortable with:</p>
      <ul>
        <li>Blood pressure goals</li>
        <li>First-line medication classes</li>
        <li>Hypertensive urgency vs. hypertensive emergency</li>
        <li>Monitoring parameters</li>
        <li>Patient counseling points</li>
      </ul>
      <p>
        A solid understanding of hypertension also makes it easier to connect concepts across many other cardiovascular disease states.
      </p>

      <h2>2. Diabetes</h2>
      <p>Let&apos;s be real. You can&apos;t escape this one either.</p>
      <p>Focus on:</p>
      <ul>
        <li>The general treatment algorithm and first-line medication options</li>
        <li>Blood glucose goals (inpatient vs. outpatient) and A1c targets</li>
        <li>Insulin basics, including basal, bolus, and correctional insulin</li>
        <li>Recognition and management of hypoglycemia</li>
      </ul>
      <p>
        Rather than memorizing every medication, aim to understand how treatment decisions are made and why certain therapies are selected for different patients.
      </p>

      <h2>3. Anticoagulation</h2>
      <p>
        I can promise you that you&apos;ll be asked about anticoagulants at some point during your APPEs, so you might as well review that dreaded anticoagulation cascade now.
      </p>
      <p>Also be familiar with:</p>
      <ul>
        <li>Indications for warfarin and direct oral anticoagulants (DOACs)</li>
        <li>Monitoring and renal dose adjustments</li>
        <li>Reversal agents</li>
        <li>Major drug interactions</li>
        <li>Bleeding vs. clotting risks and patient counseling</li>
      </ul>
      <p>
        Understanding these fundamentals will help you feel much more comfortable participating in anticoagulation discussions during rotations.
      </p>

      <h2>4. Infectious Diseases</h2>
      <p>
        Many students worry about memorizing every antibiotic before rotations (trust me, I&apos;ve been there), but that&apos;s usually not what preceptors expect. They do, however, expect you to know what covers MRSA and Pseudomonas (and say it with confidence!).
      </p>
      <p>Additionally, focus on understanding:</p>
      <ul>
        <li>Common pathogens associated with frequently encountered infections</li>
        <li>Empiric treatment strategies</li>
        <li>When therapy should be narrowed or de-escalated</li>
        <li>Major adverse effects and monitoring parameters of commonly used antibiotics</li>
      </ul>
      <p>
        Learning to think through the &quot;why&quot; behind antibiotic selection is much more valuable than simply memorizing drug names.
      </p>

      <h2>5. Heart Failure</h2>
      <p>
        If there&apos;s one disease state that somehow ties together almost everything you&apos;ve learned in pharmacy school, it&apos;s heart failure.
      </p>
      <p>Review:</p>
      <ul>
        <li>Pathophysiology of heart failure (trust me on this)</li>
        <li>Guideline-directed medical therapy</li>
        <li>Monitoring parameters</li>
        <li>Volume status assessment</li>
        <li>Patient counseling points</li>
      </ul>
      <p>
        Even if your first rotation isn&apos;t cardiology, you&apos;ll likely encounter patients with heart failure in many different healthcare settings.
      </p>

      <h2>Final Thoughts</h2>
      <p>
        Starting APPEs can feel intimidating, but remember that your preceptors don&apos;t expect you to know everything. Focus on building a strong foundation in these core disease states, stay curious, and don&apos;t be afraid to ask questions.
      </p>
      <p>
        If you&apos;re looking for a concise way to review these topics before rotations, I created PharmacyGuides to make studying less overwhelming. Each one-page guide breaks down complex disease states into practical, high-yield references designed for pharmacy students, APPE rotations, and board preparation. You can{' '}
        <a href={RELAYED_SHOP_URL} target="_blank" rel="noopener noreferrer">
          explore my resources on RelayED
        </a>{' '}
        to find the guides that best fit your learning goals.
      </p>
      <p>
        Good luck on your APPEs! You&apos;ve worked hard to get here, and I hope these tips help you start your rotations with confidence.
      </p>
    </BlogPostTemplate>
  )
}
