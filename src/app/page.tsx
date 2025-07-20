// src/app/page.tsx
import Navbar from './components/Navbar';
import FloatingCard from './components/FloatingCard';
import ExperienceCard from './components/AboutCard';
import ProjectsCard from './components/ProjectsCard';
import ContactCard from './components/ContactCard';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#F0F4FF] via-[#E9F3F0] to-[#FDF0F6] text-gray-900 relative overflow-hidden">
      <Navbar />

      <section className="flex flex-col items-center justify-center h-screen px-4 md:px-0">
        <FloatingCard />
      </section>

      <section id="experience" className="min-h-screen flex flex-col items-center justify-center p-10">
        <ExperienceCard />
      </section>

      <section id="projects" className="min-h-screen flex flex-col items-center justify-center p-10">
        <ProjectsCard />
      </section>

      <section id="contact" className="min-h-screen flex flex-col items-center justify-center p-10">
        <ContactCard />
      </section>
    </main>
  );
}
