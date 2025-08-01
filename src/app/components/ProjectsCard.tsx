"use client";

import { useState } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
    title: 'Spookify',
    description:
      'Exploración de transiciones animadas usando View Transitions API en Next.js. Demo de efectos suaves y modernos en cambios de vista.',
    link: 'https://github.com/spookycoincidence/Spookyfi-ViewTransitions',
    imageSrc: '/spookify.pixel.png',
    imageAlt: 'Captura de Spookify',
  },
  {
    title: 'Spooky Snake Game',
    description:
      'Juego clásico de la serpiente con controles de teclado, pantalla de pausa y reinicio. Diseño minimalista y responsive con Next.js 13 y Tailwind CSS.',
    link: 'https://github.com/spookycoincidence/SpookySnakeGame',
    imageSrc: '/spooky-snake.pixel.png',
    imageAlt: 'Captura del juego Spooky Snake',
  },
  {
    title: 'SpookyGallery',
    description:
      'Galería de imágenes interactiva construida con React y Tailwind CSS.',
    link: 'https://github.com/spookycoincidence/spooky-gallery',
    imageSrc: '/gallery.pixel.png',
    imageAlt: 'Captura de SpookyGallery',
  },
  {
    title: 'Tetris Game',
    description:
      'Juego recreado con Next.js para una experiencia retro y divertida, con controles intuitivos y diseño responsive.',
    link: 'https://github.com/spookycoincidence/tetrisgame',
    imageSrc: '/tetris.pixel.png',
    imageAlt: 'Captura del Tetris Game',
  },
  {
    title: 'Technicolor Blog',
    description:
      'Blog sobre Technicolor, desarrollado con Next.js, con contenido educativo y multimedia.',
    link: 'https://github.com/spookycoincidence/cinecolor-blog',
    imageSrc: '/technicolor.pixel.png',
    imageAlt: 'Captura del Technicolor Blog',
  },
  {
    title: 'ToDo App',
    description:
      'Aplicación de tareas sencilla y funcional desarrollada con React y Tailwind, con funcionalidades básicas para gestión personal.',
    link: 'https://github.com/spookycoincidence/todoapp-2.0',
    imageSrc: '/todo.pixel.png',
    imageAlt: 'Captura de ToDo App',
  },
  {
    title: 'Go CRUD API',
    description:
      'API REST CRUD desarrollada en Go con arquitectura limpia. Ideal para gestionar recursos de forma eficiente y estructurada.',
    link: 'https://github.com/spookycoincidence/-go-crud-api-portfolio',
    imageSrc: '/go-crud.pixel.png',
    imageAlt: 'Código fuente de Go CRUD API',
  },
  {
    title: 'Go Workflow API',
    description:
      'API de workflows construida en Go para orquestar y gestionar procesos de negocio de forma modular.',
    link: 'https://github.com/spookycoincidence/go-workflow-api-portfolio',
    imageSrc: '/workflow.pixel.png',
    imageAlt: 'Código fuente de Go Workflow API',
  },
  {
    title: 'Go Password Generator',
    description: 'Generador de contraseñas en Go.',
    link: 'https://github.com/spookycoincidence/go-pass-portfolio',
    imageSrc: '/go-pass.pixel.png',
    imageAlt: 'Código fuente go pass',
  },
  {
    title: 'Go Clean Task API',
    description:
      'API en Go para gestión de tareas implementando Clean Architecture. Diseño mantenible y escalable.',
    link: 'https://github.com/spookycoincidence/go-clean-template-portfolio',
    imageSrc: '/cleantask.pixel.png',
    imageAlt: 'Código fuente de Go Clean Task API',
  },
  // se ven despues del boton de ver mas
  {
    title: 'Transport Challenge',
    description:
      'Servicio de rutas y distribución en Go con configuración robusta. Solución eficiente para logística y transporte.',
    link: 'https://github.com/spookycoincidence/transport-challenge/blob/main/config/config.go',
    imageSrc: '/transport.pixel.png',
    imageAlt: 'Configuración del Transport Challenge',
  },
  {
    title: 'HX Payments Web',
    description:
      'Frontend en React para el sistema HX Payments. Diseño simple para gestionar pagos y transacciones.',
    link: 'https://github.com/spookycoincidence/hx-payments-web',
    imageSrc: '/payments-web.pixel.png',
    imageAlt: 'Interfaz gráfica de HX Payments Web',
  },
  {
    title: 'HX Payments System',
    description:
      'Sistema de pagos robusto hecho en Go, orientado a transacciones seguras y procesamiento financiero.',
    link: 'https://github.com/spookycoincidence/hx-payments-system',
    imageSrc: '/hx-system.pixel.png',
    imageAlt: 'Código fuente de HX Payments System',
  },
  {
    title: 'Financial TX Challenge',
    description:
      'Challenge de transacciones financieras en Go. Simulación de movimientos, control y trazabilidad.',
    link: 'https://github.com/spookycoincidence/financial-tx-challenge',
    imageSrc: '/financial.pixel.png',
    imageAlt: 'Código del Financial TX Challenge',
  },
  {
    title: 'American Stone and Marble',
    description: 'Web para empresa de marmol en Estados Unidos.',
    link: 'https://americanstonemarble.com/',
    imageSrc: '/stone.pixel.png',
    imageAlt: 'foto de american stone and marble',
  },
  {
    title: 'Cafe Baires',
    description: 'Web para cafeteria en New Jersey.',
    link: 'https://cafebaires.com/',
    imageSrc: '/cafebaires.pixel.png',
    imageAlt: 'baires',
  },
];

export default function ProjectsCard() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 10);

  return (
    <div
      className={`
        w-full max-w-6xl mx-auto mt-12 text-gray-900
        md:p-12 md:rounded-3xl md:shadow-2xl md:bg-gradient-to-br md:from-purple-100 md:via-pink-100 md:to-blue-100
        p-0 shadow-none rounded-none
      `}
    >
      <h2 className="text-2xl font-bold mb-3 leading-tight px-4 md:text-4xl md:px-0 md:mb-8 text-left">
        Proyectos
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 px-2 md:px-0">
        {visibleProjects.map((project, i) => (
          <div key={i} className="w-full">
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
            />
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="flex justify-center mt-6 md:mt-8 px-4 md:px-0">
          <button
            onClick={() => setShowAll(true)}
            className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded shadow hover:bg-gray-100 transition text-xs md:text-sm"
          >
            Ver más 💜
          </button>
        </div>
      )}
    </div>
  );
}
