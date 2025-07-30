export default function AboutCard() {
  return (
    <div
      className={`
        w-full max-w-6xl mx-auto mt-12 text-gray-900
        md:bg-gradient-to-br md:from-purple-100 md:via-pink-100 md:to-blue-100
        md:p-12 md:rounded-3xl md:shadow-2xl
        p-0 shadow-none rounded-none
      `}
    >
      <h2 className="text-2xl font-bold mb-3 leading-tight md:text-4xl md:mb-4 text-left whitespace-nowrap">
        Experiencia Profesional
      </h2>

      <div className="space-y-4 md:space-y-6 text-left">
        {/** Mercado Libre */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Software Engineer – Mercado Libre
          </h3>
          <p className="text-gray-800 mb-1 text-xs md:text-base">
            📅 Enero 2020 – Julio 2021 | 📍 Argentina
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 text-xs md:text-base">
            <li>
              Desarrollo en el equipo de KYC y Prevención de Fraude: validación de
              identidad, manejo de datos biométricos y protección de información sensible.
            </li>
            <li>Implementación de middleware en Golang que conectaba frontend y backend para procesos críticos.</li>
            <li>Migración de servicios de Java a Golang.</li>
            <li>Automatización de pipelines DevSecOps, logrando un incremento del 50% en productividad del equipo.</li>
            <li>Monitoreo y detección de loops de fraude mediante métricas personalizadas (Datadog).</li>
          </ul>
        </div>

        {/** Andreani */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Full Stack Developer – Andreani
          </h3>
          <p className="text-gray-800 mb-1 text-xs md:text-base">
            📅 Agosto 2021 - Octubre 2021 | 📍 Argentina
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 text-xs md:text-base">
            <li>Desarrollo de sistemas de trazabilidad y monitoreo logístico para la distribución de vacunas COVID-19.</li>
            <li>Refactor del sitio institucional y la plataforma de envíos.</li>
            <li>Implementación de herramientas de monitoreo que mejoraron la estabilidad y redujeron tiempos de respuesta ante fallas.</li>
          </ul>
        </div>

        {/** Ualá */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Software Engineer – UALA
          </h3>
          <p className="text-gray-800 mb-1 text-xs md:text-base">
            📅 Octubre 2021 - Diciembre 2022 | 📍 Argentina
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 text-xs md:text-base">
            <li>Desarrollo backend para la solución de cobros Ualá Bis: links de pago, QR, acreditación inmediata.</li>
            <li>Automatización del flujo de validación de identidad durante el onboarding, reduciendo el tiempo en un 50%.</li>
            <li>Implementación y optimización de APIs REST para medios de pago.</li>
            <li>Optimización del código no funcional y abordaje de deuda técnica significativa.</li>
            <li>Participación en la expansión regional de la billetera virtual.</li>
          </ul>
        </div>

        {/** Freelance */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Golang & React Developer – Freelancer
          </h3>
          <p className="text-gray-800 mb-1 text-xs md:text-base">
            📅 Enero 2023 – Actualidad | 📍 United States
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-1 text-xs md:text-base">
            <li>Desarrollo de aplicaciones web y APIs REST con arquitectura hexagonal.</li>
            <li>Interfaces accesibles y experiencias optimizadas para ONGs y marcas.</li>
            <li>Automatización de procesos, integración con servicios de terceros, y despliegue en Vercel y AWS.</li>
            <li>Branding, identidad digital y diseño gráfico.</li>
          </ul>
        </div>

        {/** Stack */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">Stack</h3>
          <p className="text-gray-800 text-xs md:text-base">
            Golang, React, TypeScript, Next.js, MySQL, AWS, Docker, Tailwind, Postman
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-8 flex justify-start">
        <a
          href="/CV-HuilenVilches.pdf"
          className="bg-white border border-gray-300 text-gray-800 px-3 py-1 rounded shadow hover:bg-gray-100 transition text-xs md:text-sm"
          download
        >
          Descargar CV ⚛️
        </a>
      </div>
    </div>
  );
}
