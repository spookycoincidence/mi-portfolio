// src/app/components/ContactCard.tsx
'use client';

import { useState } from 'react';

interface Heart {
  id: number;
  left: number;
  size: number;
  rotation: number;
  xMovement: number;
  duration: number;
}

export default function ContactCard() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [hearts, setHearts] = useState<Heart[]>([]);  // <-- acá

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newHearts: Heart[] = Array.from({ length: 20 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      size: 16 + Math.random() * 24,
      rotation: Math.random() * 360,
      xMovement: (Math.random() - 0.5) * 100,
      duration: 2000 + Math.random() * 1000,
    }));

    setHearts(newHearts);
    setTimeout(() => setHearts([]), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 md:p-12 md:rounded-3xl md:shadow-2xl max-w-4xl w-full mx-auto text-gray-900 text-center overflow-hidden">
      <h2 className="text-4xl font-bold mb-4">¿Querés contactarme?</h2>
      <p className="text-lg mb-8">
        Estoy disponible para proyectos freelance, propuestas laborales o simplemente para charlar sobre tech, música y cine. ¡Escribime!
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left relative">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
        <input
          type="email"
          name="email"
          placeholder="Tu email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
        />
        <textarea
          name="message"
          placeholder="Tu mensaje"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
          rows={4}
        />

        <button
          type="submit"
          className="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded shadow hover:bg-gray-100 transition w-full"
        >
          Enviar 💌
        </button>
      </form>

      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="absolute text-pink-500"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
            animation: `floatUp ${heart.duration}ms ease-out forwards`,
            transform: `rotate(${heart.rotation}deg)`,
            '--x-move': `${heart.xMovement}px`,
          } as React.CSSProperties}
        >
          ❤️
        </span>
      ))}

      <style>{`
        @keyframes floatUp {
          0% {
            opacity: 1;
            transform: translate(0, 0) rotate(0deg) scale(1);
          }
          50% {
            transform: translate(calc(var(--x-move)), -150px) rotate(180deg) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translate(calc(var(--x-move)), -300px) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
