import BlogCard, { type BlogPost } from '@/components/BlogCard';

const posts: BlogPost[] = [
  {
    title: 'The Massive MrBeast Casino Scam Exposed',
    description:
      'A deep investigation into fake casino funnels, social engineering loops, and how compromised creator trust gets weaponized at scale.',
    date: 'April 18, 2026',
    tags: ['Scam Analysis', 'Cybersecurity', 'Social Engineering'],
    href: '/blog/mrbeast-casino-scam',
  },
  {
    title: 'Why Interface Trust Fails Faster Than UX Teams Expect',
    description:
      'Patterns that look familiar can still be harmful. This piece breaks down trust signals, persuasive dark patterns, and practical UI safety checks.',
    date: 'April 10, 2026',
    tags: ['Design', 'UX Research', 'Product Safety'],
    href: '/blog/interface-trust-fails',
  },
  {
    title: 'The Quiet Cost of Weak Session Security',
    description:
      'From stolen cookies to session replay abuse, we map the most overlooked account takeover paths and how teams can harden defenses.',
    date: 'March 29, 2026',
    tags: ['Web Security', 'Auth', 'Engineering'],
    href: '/blog/session-security-cost',
  },
  {
    title: 'Writing Better Incident Reports for Public Audiences',
    description:
      'How to communicate technical incidents with clarity, empathy, and precision so people know what happened and what to do next.',
    date: 'March 14, 2026',
    tags: ['Communication', 'Incidents', 'Writing'],
    href: '/blog/incident-reporting',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] px-6 pb-20 pt-28 sm:pt-32">
      <section className="mx-auto w-full max-w-[880px]">
        <header className="mb-10">
          <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.6rem,6vw,4.1rem)] font-semibold tracking-[-0.02em] text-black">
            Blog
          </h1>
        </header>

        <div className="space-y-5">
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
