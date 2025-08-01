import Navbar from './components/Navbar';
import FloatingCard from './components/FloatingCard';
import ExperienceCard from './components/AboutCard';
import ProjectsCard from './components/ProjectsCard';
import { BaseHubForm } from './components/BaseHubForm';
import PlaylistCard from './components/PlaylistCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E9F3F0] to-[#FDF0F6] text-gray-900 relative overflow-auto">
      <Navbar />

      <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:px-0 pt-16 pb-8">
        <FloatingCard />
      </section>

      <section id="experience" className="flex flex-col items-center justify-center px-6 py-10 max-w-7xl mx-auto w-full">
        <ExperienceCard />
      </section>

      <section id="projects" className="flex flex-col items-center justify-center px-6 py-10 max-w-7xl mx-auto w-full">
        <ProjectsCard />
      </section>

      <section id="contact" className="flex flex-col items-center justify-center px-6 py-10 max-w-7xl mx-auto w-full">
        <BaseHubForm />
      </section>

      <section id="playlist" className="flex flex-col items-center justify-center px-6 py-10 max-w-7xl mx-auto w-full">
        <PlaylistCard />
      </section>
    </main>
  );
}
