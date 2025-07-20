// src/app/components/AboutCard.tsx
export default function AboutCard() {
  return (
    <div className="bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-12 rounded-3xl shadow-2xl max-w-6xl w-full animate-float mt-12 mx-auto text-gray-900">
      <h2 className="text-4xl font-bold mb-6 text-left">Experiencia Profesional</h2>

      <div className="space-y-6 text-left">
        <div>
          <h3 className="text-2xl font-semibold mb-2">Software Engineer – Mercado Libre</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Enero 2020 – Julio 2022</li>
            <li>Desarrollo en el equipo de KYC y Prevención de Fraude: validación de identidad, manejo de datos biométricos y protección de información sensible.</li>
            <li>Implementación de middleware en Golang que conectaba frontend y backend para procesos críticos.</li>
            <li>Migración de servicios de Java a Golang.</li>
            <li>Automatización de pipelines DevSecOps, logrando un incremento del 50% en productividad del equipo.</li>
            <li>Monitoreo y detección de loops de fraude mediante métricas personalizadas (Datadog).</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Full Stack Developer – Andreani</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Agosto 2021 - Octubre 2021</li>
            <li>Desarrollo de sistemas de trazabilidad y monitoreo logístico para la distribución de vacunas COVID-19.</li>
            <li>Refactor del sitio institucional y la plataforma de envíos.</li>
            <li>Implementación de herramientas de monitoreo que mejoraron la estabilidad y redujeron tiempos de respuesta ante fallas.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Software Engineer – UALA</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Octubre 2021 - Diciembre 2022</li>
            <li>Desarrollo backend para la solución de cobros Ualá Bis: links de pago, QR, acreditación inmediata.</li>
            <li>Automatización del flujo de validación de identidad durante el onboarding, reduciendo el tiempo en un 50% y mejorando la experiencia de más de 1 millón de usuarios.</li>
            <li>Implementación y optimización de APIs REST para medios de pago.</li>
            <li>Se abordó una deuda técnica significativa y se optimizó el código no funcional.</li>
            <li>Participación en la expansión regional de la billetera virtual.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Golang & React Developer – Freelancer</h3>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>Enero 2023 – Actualidad</li>
            <li>Desarrollo de aplicaciones web y APIs REST con arquitectura hexagonal y principios SOLID.</li>
            <li>Implementación de lógica de negocio, interfaces accesibles y experiencias de usuario optimizadas.</li>
            <li>Creación de e-commerce, landings y backoffice administrativo para ONGs y marcas.</li>
            <li>Automatización de procesos, integración con servicios de terceros, y despliegue en Vercel y AWS.</li>
            <li>Asesoramiento integral en branding, identidad digital y diseño gráfico.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-2">Stack</h3>
          <p className="text-gray-800">Golang, React, TypeScript, Next.js, MySQL, AWS, Docker, Tailwind, Postman</p>
        </div>
      </div>

      <div className="mt-8 flex justify-start">
        <a
          href="/CV-HuilenVilches.pdf"
          className="bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded shadow hover:bg-gray-100 transition"
          download
        >
          Descargar CV ⚛️
        </a>
      </div>
    </div>
  );
}
