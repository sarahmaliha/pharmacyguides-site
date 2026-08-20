import BlogPostTemplate from '../components/BlogPostTemplate'
import { Link } from 'react-router-dom'

export default function BlogPostCareerLessons() {
  return (
    <BlogPostTemplate
      title="4 Career Lessons I’d Give My Younger Self"
      description="Four career lessons from Dr. Sarah, PharmD: stay open to a different path, no experience is wasted, stop waiting until you feel ready, and redefine success on your own terms."
      image="/blog/career-lessons-cover.png"
      imageAlt="Dr. Sarah on a balcony overlooking a city skyline"
      imageClassName="object-[center_25%]"
      imageWrapperClassName="aspect-[3/4] max-h-[40rem]"
      publishedAt="2026-08-20T12:00:00.000Z"
      author={{
        name: 'Dr. Sarah',
        title: 'PharmD, RPh · PharmacyGuides, LLC',
        bio: 'Pharmacist, educator, and founder of PharmacyGuides. I help pharmacy students and pharmacists navigate school, careers, and the chapters that do not go as planned.',
      }}
      keyTakeaways={[
        'Have goals, but stay open. Your career may become bigger than the version you first imagined.',
        'Hard seasons still leave you with knowledge, skills, and perspective you can take into the next role.',
        'You do not always feel ready before the opportunity. Sometimes confidence comes after you walk through the door.',
        'Success can mean a career you love, work with purpose, and a community you get to help, not just the next title.',
      ]}
      relatedResources={[
        { title: 'Industry Pivot Roadmap', url: '/industry-pivot' },
        { title: 'Browse Study Guides', url: '/study-guides' },
        { title: 'Book Mentorship', url: '/mentorship' },
      ]}
    >
      <p>
        If I could sit down with younger me, I would not hand her a perfect five-year plan. I would hand her a few reminders I had to learn the hard way.
      </p>
      <p>
        Younger me was all-in on the clinical pharmacy path. That was the definition of success I had in my head: specialize, climb, land the title. I worked for it. I planned for it. And then my career stopped looking like the plan.
      </p>
      <p>
        What came next was retail, becoming a pharmacist-in-charge earlier than I expected, pivoting into my dream industry role as an MSL, and slowly building{' '}
        <Link to="/study-guides">PharmacyGuides</Link> in the background. None of that was the original checklist. All of it is mine.
      </p>

      <h2>1. Stay open to a different path</h2>
      <p>
        I spent years working toward becoming a clinical pharmacy specialist because I thought that was the path that defined success as a pharmacist.
      </p>
      <p>
        Some of the best parts of my career came from opportunities I never planned for. Industry. Building study guides that actually help students. Mentoring people through chapters that feel messy. The version of success I was chasing would have kept me on one track. Staying open is what let the rest show up.
      </p>
      <p>
        Have goals, but stay open. Your career might become bigger than the version you originally imagined.
      </p>

      <h2>2. No experience is wasted</h2>
      <p>
        The hardest chapter of my career felt like a setback at the time. It was sudden, it hurt, and it forced me to rebuild when I thought I already knew where I was going.
      </p>
      <p>
        Even that experience gave me knowledge, skills, and perspective I carried into every role after it. Retail taught me pace and people. Being PIC taught me leadership before I felt “seasoned.” Industry asked me to use my clinical brain in a completely different way. PharmacyGuides grew out of wanting to make the path clearer for someone else.
      </p>
      <p>
        Your path does not have to be perfect to be valuable. Learn from every chapter, leverage what it taught you, and take it with you into the next one.
      </p>

      <h2>3. Stop waiting until you feel ready</h2>
      <p>
        Some of the biggest opportunities in my career came before I felt completely ready for them. Stepping into PIC. Saying yes to industry. Building a business while still figuring out my own next step. I applied anyway. I said yes anyway. I figured things out along the way.
      </p>
      <p>
        Confidence is not always what gets you through the door. Sometimes it comes after you walk through it.
      </p>
      <p>
        That does not mean being reckless. It means not letting “I’m not ready yet” become the reason you never start.
      </p>

      <h2>4. Redefine success on your own terms</h2>
      <p>
        For me, success is no longer about chasing the next clinical title. It is about building a career I love, a business with purpose, and a community that lets me help others every day.
      </p>
      <p>
        My career looks nothing like the one I once planned. And that is exactly what made it mine.
      </p>

      <h2>If you are in the middle of rewriting your path</h2>
      <p>
        You do not have to have it all figured out to take the next step. If you are exploring industry, the{' '}
        <Link to="/industry-pivot">Industry Pivot</Link> roadmap is a place to start. If school or boards still feel heavy, the{' '}
        <Link to="/study-guides">study guides</Link> are there. And if you want to talk through a chapter that feels messy, you can{' '}
        <Link to="/mentorship">book a 30-minute mentorship session</Link>.
      </p>
    </BlogPostTemplate>
  )
}
