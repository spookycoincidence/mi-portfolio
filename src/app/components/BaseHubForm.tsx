'use client';

import { useRef, useTransition } from "react";
import { submitForm } from "../actions/submitForm";
import { createConfetti } from "../utils/confetti";

interface BaseHubFormProps {
  ingestKey: string;
  schema: any[];
}

export function BaseHubForm({ ingestKey, schema }: BaseHubFormProps) {
  const [isPending, startTransition] = useTransition();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitForm(ingestKey, schema, formData);
      
      if (result.success && canvasRef.current) {
        // confetti animation
        createConfetti(canvasRef.current);
      } else if (!result.success && result.error) {
        console.error('Form submission error:', result.error);
      }
    });
  };

  return (
    <div className="relative md:bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 md:p-12 md:rounded-3xl md:shadow-2xl max-w-4xl w-full mx-auto text-gray-900 text-center overflow-hidden">
      {/* confeti en primer plano*/}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-30"
      />
      
      <h2 className="text-2xl md:text-4xl font-bold mb-4 relative z-20">
        ¿Querés que hablemos?
      </h2>
      <p className="text-base md:text-lg mb-8 relative z-20">
        Estoy disponible para proyectos freelance, propuestas laborales o 
        para charlar sobre tech, música y cine. Escribime!
      </p>
      
      <form
        className="space-y-4 max-w-md mx-auto text-left relative z-20"
        action={handleSubmit}
      >
        {schema.map((field) => {
          const Input = field.type === "textarea" ? "textarea" : "input";
          return (
            <label key={field.id} className="flex gap-x-2">
              <span className="sr-only">{field.label}</span>
              <Input
                {...field}
                rows={4}
                className="w-full border border-gray-300 rounded p-2 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </label>
          );
        })}
        
        <button
          type="submit"
          disabled={isPending}
          className="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded shadow hover:bg-gray-100 transition w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Enviando...' : 'Enviar 💌'}
        </button>
      </form>
    </div>
  );
}