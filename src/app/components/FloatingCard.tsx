'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function FloatingCard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full"
    >
      <h1 className="text-2xl font-bold mb-3 leading-tight md:text-6xl md:mb-4">
        Huilén Vilches ✨
      </h1>
      <p className="text-base mb-4 leading-snug md:text-3xl">
        Full Stack Developer — Golang | React | AWS
      </p>

      <p className="mb-3 text-xs leading-snug md:text-base">
        Desarrolladora fullstack con más de 4 años de experiencia en fintechs, e-commerce y logística, especializada en Golang y tecnologías cloud. Con conocimientos en React.
        <br /><br />
        Participé en proyectos de alto impacto como validación de identidad (KYC), prevención de fraude, y desarrollo de pasarelas de pago.
        <br /><br />
        Trabajo con arquitecturas limpias, microservicios y prácticas modernas de testing y CI/CD.
        <br /><br />
        Me motiva contribuir a soluciones con impacto social y ser parte de equipos que priorizan la innovación, la mejora continua y el aprendizaje colaborativo.
      </p>

      <p className="mb-3 text-xs leading-snug md:text-base">
        Además soy fanática de los Beatles, del cine en Technicolor, y disfruto pasar tiempo con mi familia y amigos.
      </p>

      <div className="flex gap-2 mt-4 flex-wrap md:gap-4">
        <a
          href="mailto:huilenvilches@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-300 text-gray-800 px-2 py-1 rounded shadow hover:bg-gray-100 transition text-xs md:text-sm"
        >
          Email 💌
        </a>
        <a
          href="https://github.com/spookycoincidence"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-300 text-gray-800 px-2 py-1 rounded shadow hover:bg-gray-100 transition text-xs md:text-sm"
        >
          GitHub 🧚‍♀️
        </a>
        <a
          href="https://www.linkedin.com/in/huilenvilches/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white border border-gray-300 text-gray-800 px-2 py-1 rounded shadow hover:bg-gray-100 transition text-xs md:text-sm"
        >
          LinkedIn 💜
        </a>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        ${isMobile ? 'p-3' : 'bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-3 rounded-3xl shadow-2xl md:p-12'}
        max-w-full mx-auto mt-4 md:max-w-6xl
      `}
    >
      {isMobile ? (
        <div className="flex flex-col items-start gap-4">
          {content}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          <div className="flex-1 max-w-full">{content}</div>
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            src="/profile.jpg"
            alt="Huilén Vilches"
            className="
              w-28 h-28 rounded-full border-4 border-white shadow-md object-cover self-start
              md:w-60 md:h-60
            "
          />
        </div>
      )}
    </motion.div>
  );
}
