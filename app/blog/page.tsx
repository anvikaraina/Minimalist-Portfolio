export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white px-6 pb-16 pt-28 sm:pt-32">
      <section className="mx-auto w-full max-w-[780px]">
        <header className="text-center">
          <h1 className="font-[family-name:var(--font-stix)] text-[clamp(2.5rem,6vw,4rem)] font-normal leading-[1.05] tracking-[-0.02em] text-black">
            Blog
          </h1>
          <p className="mx-auto mt-5 max-w-[620px] text-base leading-relaxed text-black/60 sm:text-lg">
            A collection of thoughts, investigations, and ideas.
          </p>
        </header>

        <div className="mx-auto mt-10 h-px w-full max-w-[740px] bg-black/10" aria-hidden="true" />

        <main className="mx-auto flex max-w-[640px] flex-col items-center text-center">
          <div className="mt-20 animate-[fadeIn_600ms_ease-out_forwards] opacity-0">
            <p className="text-xl font-medium tracking-[-0.01em] text-black/70">No articles yet.</p>
            <p className="mt-3 text-base leading-relaxed text-black/55">
              This space will be used for writing and explorations.
            </p>
          </div>

          <div className="mt-12 flex w-full max-w-[520px] flex-col gap-3" aria-hidden="true">
            <span className="h-2 w-full rounded-full bg-black/5" />
            <span className="h-2 w-4/5 rounded-full bg-black/5" />
            <span className="h-2 w-2/3 rounded-full bg-black/5" />
          </div>
        </main>
      </section>
    </div>
  );
}
