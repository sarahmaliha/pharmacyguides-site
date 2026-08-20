import BlogPostTemplate from '../components/BlogPostTemplate'
import { Link } from 'react-router-dom'

export default function BlogPostLoanPayoff() {
  return (
    <BlogPostTemplate
      title="How I Paid Off $220,000 of Pharmacy School Loans (While Still Having a Life)"
      description="I graduated in 2022 with close to $280,000 in pharmacy school loans and have already paid off about $220,000. How a 3-year internship, a study guide business, and very intentional money habits got me here."
      image="/blog/loan-payoff-cover.png"
      imageAlt="Dr. Sarah, PharmD, sitting on the steps in graduation cap and gown"
      imageClassName="object-[center_20%]"
      imageWrapperClassName="aspect-[3/4] max-h-[40rem]"
      publishedAt="2026-08-18T12:00:00.000Z"
      author={{
        name: 'Dr. Sarah',
        title: 'PharmD, RPh · PharmacyGuides, LLC',
        bio: 'Pharmacist, educator, and 2022 graduate. I help pharmacy students and pharmacists study smarter, pivot careers, and take care of themselves along the way.',
      }}
      keyTakeaways={[
        'I started with close to $280,000 and have paid off about $220,000 so far.',
        'I held a pharmacy internship throughout school and used that income to start paying loans early.',
        'I built PharmacyGuides before I graduated and sent that side hustle money to loans.',
        'I did not want PSLF to decide my career. I wanted room to leave a role if it was not right for me.',
        'In industry, higher income, covered expenses, and bonuses made it possible to pay more without putting life on pause.',
      ]}
      relatedResources={[
        { title: 'Browse Study Guides', url: '/study-guides' },
        { title: 'Industry Pivot Roadmap', url: '/industry-pivot' },
        { title: 'Book Mentorship', url: '/mentorship' },
      ]}
    >
      <p>
        I graduated in 2022 with close to <strong>$280,000</strong> in pharmacy school loans. Since then, I have paid off about <strong>$220,000</strong>.
      </p>
      <p>
        Everyone’s situation is different: income, family support, cost of living, interest rates, the whole picture. This is not a template. It is just what worked for me.
      </p>
      <p>
        I still went on mini trips. I still made time for friends. I still wanted a life that felt like mine, not a 10-year countdown to forgiveness.
      </p>

      <h2>Foundation (pharmacy school)</h2>
      <p>
        I started paying these loans back while I was still in school.
      </p>
      <p>
        I held a pharmacy internship throughout pharmacy school, and I treated that paycheck like it had a job: small, frequent payments so interest could not just sit there growing. If I had unused or excess loan money left at the end of a semester, it went right back. I did not “treat myself” with money that was never really mine.
      </p>
      <p>
        I also lived with roommates for the first three years to keep rent from eating me alive. I still budgeted for little trips and things with friends, because burnout is expensive too. Balance was not a reward I would maybe get later. It was part of how I survived school.
      </p>

      <h2>Momentum (graduation and residency)</h2>
      <p>
        Right before I graduated, I started a digital study guide business. That side hustle is{' '}
        <Link to="/study-guides">PharmacyGuides</Link>, the same guides students use now for school, rotations, and boards.
      </p>
      <p>
        During residency, my salary covered living expenses. Side hustle money went to loans. I kept paying even during the interest freeze, because I did not want to lose the habit the second it got slightly easier.
      </p>
      <p>
        That stretch was a lot: new graduate, residency, a new business, and a loan balance that still felt huge. I was tired. I was also very clear about where the money was going.
      </p>

      <h2>Why I did not want to wait on PSLF</h2>
      <p>
        Even when I was originally on the clinical route, I never wanted to depend on Public Service Loan Forgiveness. I did not want my career options to be tied to staying somewhere for 10 years just so the rest might get wiped.
      </p>
      <p>
        I have had so many people tell me they are only putting up with a clinical role they are not even happy in so they can have loans forgiven later. I get why that feels like the safer plan. It just was not the one I wanted. I wanted to be able to leave, pivot, or try something new without feeling stuck.
      </p>

      <h2>Acceleration (pharmacist-in-charge, then industry)</h2>
      <p>
        Then came the “big-girl” role: pharmacist-in-charge. Salary covered living expenses, savings and investments, and loans. I kept growing the study guide business and used that income for travel and fun, with everything else going to loans.
      </p>
      <p>
        After that, I pivoted into an industry / pharma role. Higher income, more expenses covered, and bonuses. Those extras went to the loans too. That is when I could pay more consistently without negotiating with myself every month.
      </p>
      <p>
        Once I started the industry job, most of my travel has been for work. I still get to keep the hotel and airline points, so the trips feel like a perk even when they are on the calendar for work.
      </p>
      <p>
        If you want the actual roadmap for that kind of move, I laid it out on the{' '}
        <Link to="/industry-pivot">Industry Pivot</Link> page.
      </p>

      <h2>Intentionality</h2>
      <p>
        I still put money into high-yield savings and retirement the entire time. Paying loans faster did not mean ignoring everything else.
      </p>
      <p>
        A large portion of my income (full-time plus the side hustle), plus extras like bonuses and tax refunds, went to the loans. If extra money showed up, it had a destination.
      </p>
      <p>
        Close to $280,000 to start. About $220,000 paid so far. No shortcuts. A 3-year internship I was lucky to have, a business I started before I had my degree, and enough balance to keep going.
      </p>

      <p>
        Those study guides I built as a side hustle live on the{' '}
        <Link to="/study-guides">Study Guides</Link> page. And if loans, residency, or “how do I even start?” is weighing on you, we can{' '}
        <Link to="/mentorship">talk it through in a 30-minute mentorship session</Link>.
      </p>
    </BlogPostTemplate>
  )
}
