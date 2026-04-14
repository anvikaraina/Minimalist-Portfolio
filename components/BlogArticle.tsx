'use client';

import Lenis from '@studio-freight/lenis';
import { useEffect, useMemo, useState } from 'react';

type TocItem = {
  id: string;
  label: string;
  timestamp: string;
};

const tocItems: TocItem[] = [
  { id: 'introduction', label: 'Introduction', timestamp: '00:00' },
  { id: 'how-the-scam-works', label: 'How the Scam Works', timestamp: '02:12' },
  { id: 'deposit-trap', label: 'The Deposit Trap', timestamp: '04:08' },
  { id: 'accounts-compromised', label: 'How Accounts Get Compromised', timestamp: '05:47' },
  { id: 'final-thoughts', label: 'Final Thoughts', timestamp: '08:10' },
];

export default function BlogArticle() {
  const [activeId, setActiveId] = useState<string>(tocItems[0].id);

  const sectionIds = useMemo(() => tocItems.map((item) => item.id), []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
    });

    let rafId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.45, 0.7],
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (!href?.startsWith('#')) return;

      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;

      event.preventDefault();
      lenis.scrollTo(section, { offset: -96, duration: 1.05 });
      setActiveId(section.id);
    };

    const anchors = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-blog-toc-link="true"]'));
    anchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
      observer.disconnect();
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [sectionIds]);

  return (
    <article className="bg-white px-6 pb-24 pt-28 sm:pt-32">
      <div className="mx-auto grid w-full max-w-[1100px] gap-12 lg:grid-cols-[minmax(0,680px)_minmax(220px,1fr)]">
        <div>
          <header className="mb-14 border-b border-black/10 pb-10">
            <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2rem,4.8vw,3.6rem)] font-normal leading-[1.08] tracking-[-0.02em] text-black/95">
              The Massive MrBeast Casino Scam Exposed
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/65 sm:text-lg">
              A deep dive into how fake platforms exploit trust and scale.
            </p>
            <p className="mt-4 text-sm text-black/45">April 2026 • 8 min read</p>
          </header>

          <div className="space-y-14 text-black/75">
            <section id="introduction" className="scroll-mt-28">
              <h2 className="font-[family-name:var(--font-stix)] text-3xl font-normal tracking-[-0.01em] text-black/95">
                Introduction
              </h2>
              <p className="mt-5 max-w-[680px] text-base leading-8">
                The internet is rife with scams that borrow the trust of popular creators to make fake offers look
                legitimate. One of the most widespread versions uses MrBeast branding and fabricated casino bonuses to
                pressure people into risky deposits. These campaigns move fast through Discord, YouTube, Instagram, and
                TikTok, especially through compromised accounts.
              </p>
            </section>

            <div className="flex h-52 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">
              Image Placeholder
            </div>

            <section id="how-the-scam-works" className="scroll-mt-28">
              <h2 className="font-[family-name:var(--font-stix)] text-3xl font-normal tracking-[-0.01em] text-black/95">
                How the Scam Works
              </h2>
              <p className="mt-5 max-w-[680px] text-base leading-8">
                Fake casino pages promise oversized sign-up rewards and simulate account balances to create urgency.
                Victims are told they can unlock withdrawals after a quick verification step, but every action leads to
                another payment gate, another fake support response, and more pressure to continue.
              </p>
            </section>

            <div className="flex h-64 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">
              Image Placeholder
            </div>

            <section id="deposit-trap" className="scroll-mt-28">
              <h2 className="font-[family-name:var(--font-stix)] text-3xl font-normal tracking-[-0.01em] text-black/95">
                The Deposit Trap
              </h2>
              <p className="mt-5 max-w-[680px] text-base leading-8">
                Deposits usually begin with a small amount, then escalate through staged milestones such as verification,
                tax, or tier upgrades. The interface is designed to feel trustworthy while delaying withdrawals. By the
                time users realize it is fraudulent, the total loss can be severe.
              </p>
            </section>

            <div className="flex h-44 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">
              Image Placeholder
            </div>

            <section id="accounts-compromised" className="scroll-mt-28">
              <h2 className="font-[family-name:var(--font-stix)] text-3xl font-normal tracking-[-0.01em] text-black/95">
                How Accounts Get Compromised
              </h2>
              <p className="mt-5 max-w-[680px] text-base leading-8">
                Many scam links spread from stolen social accounts. Info-stealer malware can capture passwords, cookies,
                and session tokens from infected devices, allowing attackers to reuse trusted channels. Even when 2FA is
                enabled, token theft and session hijacking can still bypass protections.
              </p>
            </section>

            <div className="flex h-56 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">
              Image Placeholder
            </div>

            <section id="final-thoughts" className="scroll-mt-28">
              <h2 className="font-[family-name:var(--font-stix)] text-3xl font-normal tracking-[-0.01em] text-black/95">
                Final Thoughts
              </h2>
              <p className="mt-5 max-w-[680px] text-base leading-8">
                This type of fraud succeeds by combining social trust, fast distribution, and emotional urgency. Treat
                giveaway-style deposits as high risk, verify domains carefully, and reset compromised systems
                immediately. In scams like this, speed of response often determines the size of the loss.
              </p>
            </section>

            <div className="flex h-48 items-center justify-center rounded-2xl bg-black/[0.04] text-sm tracking-wide text-black/35">
              Image Placeholder
            </div>
          </div>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-xl border border-black/10 px-5 py-5">
            <p className="text-xs uppercase tracking-[0.12em] text-black/45">Timestamps</p>
            <nav className="mt-4" aria-label="Blog table of contents">
              <ul className="space-y-2">
                {tocItems.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        data-blog-toc-link="true"
                        href={`#${item.id}`}
                        className={`flex items-center justify-between gap-3 rounded-md px-2 py-1.5 text-sm transition-colors ${
                          isActive ? 'bg-black/5 text-black' : 'text-black/55 hover:text-black/75'
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="text-[11px] tabular-nums text-black/45">{item.timestamp}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </aside>
      </div>
    </article>
  );
}
