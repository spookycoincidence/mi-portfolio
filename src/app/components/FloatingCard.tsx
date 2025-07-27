// src/app/components/FloatingCard.tsx
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
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Huilén Vilches ✨</h1>
      <p className="text-xl md:text-3xl mb-6">Full Stack Developer — Golang | React | AWS</p>

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

      <div className="flex gap-4 mt-6 flex-wrap">
        <a href="mailto:huilenvilches@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition">Email 💌</a>
        <a href="https://github.com/spookycoincidence" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition">GitHub 🧚‍♀️</a>
        <a href="https://www.linkedin.com/in/huilenvilches/" target="_blank" rel="noopener noreferrer" className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition">LinkedIn 💜</a>
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-6 md:p-12 max-w-6xl w-full mx-auto mt-4 rounded-3xl shadow-2xl"
    >
      {isMobile ? (
        <div>{content}</div>
      ) : (
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="flex-1">{content}</div>

          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            src="/profile.jpg"
            alt="Huilén Vilches"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full border-4 border-white shadow-md object-cover self-start"
          />
        </div>
      )}
    </motion.div>
  );
}
