import BlogCard, { type BlogPost } from '@/components/BlogCard';

const posts: BlogPost[] = [
  {
    title: 'The Massive MrBeast Casino Scam Exposed',
    description:
      'A deep dive into how fake platforms exploit trust at scale, how accounts get compromised, and what practical steps actually protect users.',
    date: 'April 2026',
    tags: ['Cybersecurity', 'Scam Analysis', 'Awareness'],
    href: '/blogs/massive-mr-beast-casino-scam-exposed',
  },
  {
    title: 'How Interface Trust Gets Weaponized',
    description:
      'A breakdown of high-conversion scam UX patterns and why familiar visuals can override user caution in critical moments.',
    date: 'March 2026',
    tags: ['UX', 'Trust', 'Security'],
    href: '/blogs/interface-trust-weaponized',
  },
  {
    title: 'Cookie Theft and Session Hijacking Basics',
    description:
      'A practical primer on token abuse, compromised sessions, and lightweight hardening methods that reduce account takeover risk.',
    date: 'February 2026',
    tags: ['Web Security', 'Sessions', 'Auth'],
    href: '/blogs/cookie-theft-basics',
  },
];

export default function BlogPage() {
  return (
    <section className="mx-auto w-full max-w-[880px] px-4 pb-16 pt-24 sm:pt-28">
      <header className="mb-10">
        <h1 className="text-[clamp(2.6rem,6vw,4.1rem)] font-bold tracking-[-0.02em] text-black">Blog</h1>
      </header>

      <div className="space-y-5">
        {posts.map((post) => (
          <BlogCard key={post.title} post={post} />
        ))}
      </div>
    </section>
  );
}
