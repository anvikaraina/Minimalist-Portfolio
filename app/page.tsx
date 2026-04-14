import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TimelineSection from '@/components/TimelineSection';
import ContactFooterSection from '@/components/ContactFooterSection';

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
        <TimelineSection />
        <ContactFooterSection />
      </main>
    </div>
  );
}
