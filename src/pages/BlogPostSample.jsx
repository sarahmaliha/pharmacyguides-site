import BlogPostTemplate from '../components/BlogPostTemplate'

/**
 * Example blog post using the SEO-optimized template.
 * Meta title: "How to Transition from Retail Pharmacy to MSL"
 */
export default function BlogPostSample() {
  return (
    <BlogPostTemplate
      title="How to Transition from Retail Pharmacy to MSL"
      description="A practical guide for pharmacists considering a move from retail or clinical practice into a Medical Science Liaison (MSL) role. Steps, mindset, and resources from someone who made the pivot."
      image="/og-blog-default.jpg"
      publishedAt="2025-01-15T00:00:00.000Z"
      author={{
        name: 'Dr. Sarah',
        title: 'PharmD, RPh · PharmacyGuides, LLC',
        bio: 'Pharmacist turned MSL. I help pharmacy students and pharmacists navigate licensure, clinical rotations, and industry transitions.',
      }}
      keyTakeaways={[
        'Your clinical experience is an asset; frame it in outcomes and therapeutic expertise.',
        'Networking with current MSLs and Medical Affairs professionals is non-negotiable.',
        'Tailor your CV to industry language and highlight leadership and patient impact.',
        'Prepare a clear "why MSL" narrative for every interview.',
      ]}
      relatedResources={[
        { title: 'Industry Pivot Roadmap', url: '/industry-pivot' },
        { title: 'Book Mentorship', url: '/mentorship' },
        { title: 'Resource Vault', url: '/study-guides' },
      ]}
    >
      <p>
        Making the jump from retail pharmacy to Medical Science Liaison (MSL) can feel daunting — but it's a well-trodden path. I've walked it myself, and here’s how I think about the transition and what I tell pharmacists who are considering it.
      </p>

      <h2>Why MSL?</h2>
      <p>
        MSL roles let you use your clinical knowledge in a different way: educating and building relationships with key opinion leaders (KOLs), supporting clinical trials and medical strategy, and staying close to the science without the day-to-day dispensing grind. For many pharmacists, it’s a better fit for how they want to use their PharmD.
      </p>

      <h2>Where to Start</h2>
      <p>
        Start with a clear picture of your current skills and where the gaps are. Industry values communication, project management, and the ability to translate complex data into clear messages. Map your retail or clinical experience onto those competencies, then fill gaps through volunteering, committees, or side projects.
      </p>

      <h2>Networking That Actually Works</h2>
      <p>
        Reach out to MSLs and Medical Affairs professionals on LinkedIn with a short, genuine message. Ask for a 15-minute informational chat — not a job. Over time, those conversations build credibility and often lead to referrals when roles open up.
      </p>

      <h2>Your CV in Industry Language</h2>
      <p>
        Rewrite your CV so it speaks to hiring managers in pharma. Lead with impact: numbers, outcomes, and leadership. Use terms like "stakeholder," "cross-functional," and "therapeutic area" where they fit. A template designed for industry can help; we offer one in our Resource Vault.
      </p>

      <h2>Interview Prep</h2>
      <p>
        Be ready to answer: Why MSL? Why this company? Tell me about a time you had to explain complex information to a non-expert. Prepare a few STAR stories that show communication, resilience, and clinical depth. Practice out loud.
      </p>

      <p>
        The transition is doable. With a clear roadmap, consistent networking, and a tailored application, you can land your first industry role. If you want one-on-one guidance, consider a mentorship session — we can map your situation and next steps together.
      </p>
    </BlogPostTemplate>
  )
}
