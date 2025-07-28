
// src/app/components/ProjectsCard.tsx

"use client";

import { useState } from 'react';
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
    title: 'SpookyGallery',
    description:
      'Galería de imágenes interactiva construida con React y Tailwind CSS.',
    link: 'https://github.com/spookycoincidence/spooky-gallery',
    imageSrc: '/spooky-gallery.png',
    imageAlt: 'Captura de SpookyGallery',
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
    title: 'Tetris Game',
    description:
      'Juego recreado con Next.js para una experiencia retro y divertida, con controles intuitivos y diseño responsive.',
    link: 'https://github.com/spookycoincidence/tetrisgame',
    imageSrc: '/tetris-game.png',
    imageAlt: 'Captura del Tetris Game',
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
    title: 'ToDo App',
    description:
      'Aplicación de tareas sencilla y funcional desarrollada con React y Tailwind, con funcionalidades básicas para gestión personal.',
    link: 'https://github.com/spookycoincidence/todoapp-2.0',
    imageSrc: '/todo-app.png',
    imageAlt: 'Captura de ToDo App',
  },
  {
    title: 'Go CRUD API',
    description:
      'API REST CRUD desarrollada en Go con arquitectura limpia. Ideal para gestionar recursos de forma eficiente y estructurada.',
    link: 'https://github.com/spookycoincidence/-go-crud-api-portfolio',
    imageSrc: '/go-crud-api.png',
    imageAlt: 'Código fuente de Go CRUD API',
  },
  {
    title: 'Go Workflow API',
    description:
      'API de workflows construida en Go para orquestar y gestionar procesos de negocio de forma modular.',
    link: 'https://github.com/spookycoincidence/go-workflow-api-portfolio',
    imageSrc: '/go-workflow-api.png',
    imageAlt: 'Código fuente de Go Workflow API',
  },
  {
    title: 'Go Clean Task API',
    description:
      'API en Go para gestión de tareas implementando Clean Architecture. Diseño mantenible y escalable.',
    link: 'https://github.com/spookycoincidence/go-clean-template-portfolio',
    imageSrc: '/go-clean-task-api.png',
    imageAlt: 'Código fuente de Go Clean Task API',
  },
 {
    title: 'Go Password Generator',
    description:
      'Generador de contraseñas en Go.',
    link: 'https://github.com/spookycoincidence/go-pass-portfolio',
    imageSrc: '/go-pass.png',
    imageAlt: 'Código fuente go pass',
  },
  {
    title: 'Transport Challenge',
    description:
      'Servicio de rutas y distribución en Go con configuración robusta. Solución eficiente para logística y transporte.',
    link: 'https://github.com/spookycoincidence/transport-challenge/blob/main/config/config.go',
    imageSrc: '/transport-challenge.png',
    imageAlt: 'Configuración del Transport Challenge',
  },
    {
    title: 'HX Payments Web',
    description:
      'Frontend en React para el sistema HX Payments. Diseño simple para gestionar pagos y transacciones.',
    link: 'https://github.com/spookycoincidence/hx-payments-web',
    imageSrc: '/hx-payments-web.png',
    imageAlt: 'Interfaz gráfica de HX Payments Web',
  },
  {
    title: 'HX Payments System',
    description:
      'Sistema de pagos robusto hecho en Go, orientado a transacciones seguras y procesamiento financiero.',
    link: 'https://github.com/spookycoincidence/hx-payments-system',
    imageSrc: '/hx-payments-system.png',
    imageAlt: 'Código fuente de HX Payments System',
  },
   {
    title: 'Financial TX Challenge',
    description:
      'Challenge de transacciones financieras en Go. Simulación de movimientos, control y trazabilidad.',
    link: 'https://github.com/spookycoincidence/financial-tx-challenge',
    imageSrc: '/financial-tx.png',
    imageAlt: 'Código del Financial TX Challenge',
  },
     {
    title: 'American Stone and Marble',
    description:
      'Web para empresa de marmol en Estados Unidos. ',
    link: 'https://americanstonemarble.com/',
    imageSrc: '/stone.png',
    imageAlt: 'foto de american stone and marble',
  },
     {
    title: 'Cafe Baires',
    description:
      'Web para cafeteria en New Jersey. ',
    link: 'https://cafebaires.com/',
    imageSrc: '/baires.png',
    imageAlt: 'baires',
  },
];
export default function ProjectsCard() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 9);

  return (
    <div
      className="
        bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100
        p-4 rounded-none shadow-none
        md:p-12 md:rounded-3xl md:shadow-2xl
        max-w-6xl w-full mt-12 mx-auto text-gray-900
      "
    >
      <h2 className="text-4xl font-bold mb-8 text-left">Proyectos</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {visibleProjects.map((project, i) => (
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

      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
          >
            Ver más 💜
          </button>
        </div>
      )}
    </div>
  );
}
