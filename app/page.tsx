import Navbar from '@/components/Navbar';
import ProjectsArchive from '@/components/ProjectsArchive';

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <ProjectsArchive />
      </main>
    </div>
  );
}
