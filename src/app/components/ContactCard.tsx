// src/app/components/ContactCard.tsx
export default function ContactCard() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-12 rounded-3xl shadow-2xl max-w-4xl w-full animate-float mx-auto text-gray-900 text-center">
      <h2 className="text-4xl font-bold mb-4">¿Querés contactarme?</h2>
      <p className="text-lg mb-8">
        Si te gustaría trabajar conmigo, colaborar en un proyecto o simplemente charlar, escribime o contactame por mis redes. ¡Estoy siempre abierta a nuevas ideas!
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:huilenvilches@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-pink-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-pink-100 transition"
        >
          Email 💌
        </a>

        <a
          href="https://www.linkedin.com/in/huilenvilches/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-full shadow-md hover:bg-blue-100 transition"
        >
          LinkedIn 💜
        </a>
      </div>
    </div>
  );
}
