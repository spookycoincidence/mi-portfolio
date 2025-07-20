'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="absolute top-6 right-6 z-50">
      <button onClick={() => setOpen(!open)} className="p-3 bg-white text-gray-900 rounded-full shadow-md">
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute right-0 mt-3 bg-white text-gray-900 rounded-lg shadow-lg p-5 space-y-3 w-48">
          <a href="#about" className="block hover:underline">Experiencia Profesional</a>
          <a href="#projects" className="block hover:underline">Proyectos</a>
          <a href="#contact" className="block hover:underline">Contacto</a>
        </div>
      )}
    </nav>
  );
}