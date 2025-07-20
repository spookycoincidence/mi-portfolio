// src/app/components/ProjectsCard.tsx
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
      'Blog  sobre Technicolor, desarrollado con Next.js, con contenido educativo y multimedia.',
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

export default function ProjectsCard() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-12 rounded-3xl shadow-2xl max-w-6xl w-full animate-float mt-12 mx-auto text-gray-900">
      <h2 className="text-4xl font-bold mb-8 text-left">Proyectos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
          />
        ))}
      </div>
    </div>
  );
}
