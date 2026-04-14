import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
