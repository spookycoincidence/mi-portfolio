'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMail } from "react-icons/hi"; 
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

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
        Soy programadora semi senior con más de 4 años de experiencia en el desarrollo de software. Trabajé en fintechs, e-commerce y logística, y también participé como freelancer en proyectos que combinan desarrollo, diseño, estrategia digital y branding.
        <br /><br />
        Me siento muy cómoda trabajando con Golang y React, disfruto construir productos con arquitecturas limpias, microservicios y buenas prácticas de testing y CI/CD.
        <br /><br />
        Me apasiona formar parte de equipos que buscan innovar, mejorar constantemente y generar impacto. Soy muy curiosa y me encanta aprender, por eso siento que el mundo IT es el lugar ideal para mí: siempre hay algo nuevo para descubrir.
        <br /><br />
        Además soy fanática de los Beatles y del cine en technicolor.
      </p>

      {/* Botones o iconos según pantalla */}
      <div className="flex gap-3 mt-4 flex-wrap items-center">
        {isMobile ? (
          <>
            <a
              href="mailto:huilenvilches@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-gray-900"
            >
              <HiOutlineMail />
            </a>
            <a
              href="https://github.com/spookycoincidence"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-gray-900"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/huilenvilches/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-700 hover:text-gray-900"
            >
              <FaLinkedinIn />
            </a>
          </>
        ) : (
          <>
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
          </>
        )}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        ${isMobile
          ? 'p-3'
          : 'bg-gradient-to-br from-[#c6e6f5] via-[#fdd8e5] to-[#e7d3f5] p-3 rounded-3xl shadow-2xl md:p-12'}
        max-w-full mx-auto mt-4 md:max-w-6xl
      `}
    >
      {isMobile ? (
        <div className="flex flex-col items-start gap-4">{content}</div>
      ) : (
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
          <div className="flex-1 max-w-full">{content}</div>
          <motion.img
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            src="/profile.jpeg"
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
