// src/app/components/UnifiedContent.tsx
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Spooky Snake Game',
    description:
      'Juego clásico de la serpiente con controles de teclado, pantalla de pausa y reinicio. Diseño minimalista y responsive con Next.js 13 y Tailwind CSS.',
    link: 'https://github.com/spookycoincidence/SpookySnakeGame',
    imageSrc: '/spooky-snake.png',
    imageAlt: 'Captura del juego Spooky Snake',
  },
  {
    title: 'Spookify',
    description:
      'Exploración de transiciones animadas usando View Transitions API en Next.js. Demo de efectos suaves y modernos en cambios de vista.',
    link: 'https://github.com/spookycoincidence/Spookyfi-ViewTransitions',
    imageSrc: '/spookify.png',
    imageAlt: 'Captura de Spookify',
  },
  {
    title: 'SpookyGallery',
    description:
      'Galería de imágenes interactiva construida con React y Tailwind CSS.',
    link: 'https://github.com/spookycoincidence/spooky-gallery',
    imageSrc: '/spooky-gallery.png',
    imageAlt: 'Captura de SpookyGallery',
  },
  {
    title: 'Technicolor Blog',
    description:
      'Blog sobre Technicolor, desarrollado con Next.js, con contenido educativo y multimedia.',
    link: 'https://github.com/spookycoincidence/cinecolor-blog',
    imageSrc: '/technicolor-blog.png',
    imageAlt: 'Captura del Technicolor Blog',
  },
  {
    title: 'Tetris Game',
    description:
      'Juego recreado con Next.js para una experiencia retro y divertida, con controles intuitivos y diseño responsive.',
    link: 'https://github.com/spookycoincidence/tetrisgame',
    imageSrc: '/tetris-game.png',
    imageAlt: 'Captura del Tetris Game',
  },
  {
    title: 'ToDo App',
    description:
      'Aplicación de tareas sencilla y funcional desarrollada con React y Tailwind, con funcionalidades básicas para gestión personal.',
    link: 'https://github.com/spookycoincidence/todoapp-2.0',
    imageSrc: '/todo-app.png',
    imageAlt: 'Captura de ToDo App',
  },
];

export default function UnifiedContent() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 md:bg-gray-100 w-full text-gray-900">
      <section className="p-4 md:p-12 md:rounded-3xl md:shadow-2xl max-w-6xl w-full mt-6 mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Huilén Vilches ✨</h1>
            <p className="text-2xl md:text-3xl mb-6">Full Stack Developer — Golang / React / AWS</p>
            <p className="mb-4">
              Desarrolladora fullstack con más de 4 años de experiencia en fintechs, e-commerce y logística, especializada en Golang y tecnologías cloud. Con conocimientos en React.
              <br /><br />
              Participé en proyectos de alto impacto como validación de identidad (KYC), prevención de fraude, y desarrollo de pasarelas de pago.
              <br /><br />
              Trabajo con arquitecturas limpias, microservicios y prácticas modernas de testing y CI/CD.
              <br /><br />
              Me motiva contribuir a soluciones con impacto social y ser parte de equipos que priorizan la innovación, la mejora continua y el aprendizaje colaborativo.
            </p>
            <p className="mb-4">
              Además soy fanática de los Beatles, del cine en Technicolor, y disfruto pasar tiempo con mi familia y amigos.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="mailto:huilenvilches@gmail.com" className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition">Email 💌</a>
              <a href="https://github.com/spookycoincidence" className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition">GitHub 🧚‍♀️</a>
              <a href="https://www.linkedin.com/in/huilenvilches/" className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition">LinkedIn 💜</a>
            </div>
          </div>
          <img src="/profile.jpg" alt="Huilén Vilches" className="hidden md:block w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-white shadow-md object-cover self-start" />
        </div>
      </section>

      <section id="experience" className="p-4 md:p-12 md:rounded-3xl md:shadow-2xl max-w-6xl w-full mt-12 mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-left">Experiencia Profesional</h2>
        <div className="space-y-6 text-left">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Software Engineer – Mercado Libre</h3>
            <p>📅 Enero 2020 – Julio 2021 | 📍 Argentina</p>
            <ul className="list-disc list-inside">
              <li>Desarrollo en el equipo de KYC y Prevención de Fraude: validación de identidad, manejo de datos biométricos y protección de información sensible.</li>
              <li>Implementación de middleware en Golang que conectaba frontend y backend para procesos críticos.</li>
              <li>Migración de servicios de Java a Golang.</li>
              <li>Automatización de pipelines DevSecOps, logrando un incremento del 50% en productividad del equipo.</li>
              <li>Monitoreo y detección de loops de fraude mediante métricas personalizadas (Datadog).</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Full Stack Developer – Andreani</h3>
            <p>📅 Agosto 2021 - Octubre 2021 | 📍 Argentina</p>
            <ul className="list-disc list-inside">
              <li>Desarrollo de sistemas de trazabilidad y monitoreo logístico para la distribución de vacunas COVID-19.</li>
              <li>Refactor del sitio institucional y la plataforma de envíos.</li>
              <li>Implementación de herramientas de monitoreo que mejoraron la estabilidad y redujeron tiempos de respuesta ante fallas.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Software Engineer – UALA</h3>
            <p>📅 Octubre 2021 - Diciembre 2022 | 📍 Argentina</p>
            <ul className="list-disc list-inside">
              <li>Desarrollo backend para la solución de cobros Ualá Bis: links de pago, QR, acreditación inmediata.</li>
              <li>Automatización del flujo de validación de identidad durante el onboarding, reduciendo el tiempo en un 50% y mejorando la experiencia de más de 1 millón de usuarios.</li>
              <li>Implementación y optimización de APIs REST para medios de pago.</li>
              <li>Se abordó una deuda técnica significativa y se optimizó el código no funcional.</li>
              <li>Participación en la expansión regional de la billetera virtual.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Golang & React Developer – Freelancer</h3>
            <p>📅 Enero 2023 – Actualidad | 📍 United States</p>
            <ul className="list-disc list-inside">
              <li>Desarrollo de aplicaciones web y APIs REST con arquitectura hexagonal y principios SOLID.</li>
              <li>Implementación de lógica de negocio, interfaces accesibles y experiencias de usuario optimizadas.</li>
              <li>Creación de e-commerce, landings y backoffice administrativo para ONGs y marcas.</li>
              <li>Automatización de procesos, integración con servicios de terceros, y despliegue en Vercel y AWS.</li>
              <li>Asesoramiento integral en branding, identidad digital y diseño gráfico.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Stack</h3>
            <p>Golang, React, TypeScript, Next.js, MySQL, AWS, Docker, Tailwind, Postman</p>
          </div>

          <div className="mt-4">
            <a href="/CV-HuilenVilches.pdf" className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition" download>
              Descargar CV ⚛️
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="p-4 md:p-12 md:rounded-3xl md:shadow-2xl max-w-6xl w-full mt-12 mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-left">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      <section id="contact" className="p-4 md:p-12 md:rounded-3xl md:shadow-2xl max-w-4xl w-full mt-12 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">¿Querés contactarme?</h2>
        <p className="text-lg mb-8">
          Estoy disponible para proyectos freelance, propuestas laborales o simplemente para charlar sobre tech, música y cine. ¡Escribime!
        </p>

        <div className="flex justify-center gap-6">
          <a href="mailto:huilenvilches@gmail.com" className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-100 transition">
            Email 💌
          </a>
          <a href="https://www.linkedin.com/in/huilenvilches/" className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition">
            LinkedIn 💜
          </a>
        </div>
      </section>

      <footer className="text-center py-4 mt-12">
        <p>© 2025 Made with ❤️ by Huilén Vilches</p>
      </footer>
    </div>
  );
}
