import { Pump } from "basehub/react-pump";
import { parseFormData, sendEvent } from "basehub/events";

export function BaseHubForm() {
  return (
    <Pump
      queries={[
        {
          contactForm: {
            form: {
              ingestKey: true,
              schema: true,
            },
          },
        },
      ]}
    >
      {async ([{ contactForm }]) => {
        "use server";
        const ingestKey = contactForm.form.ingestKey;

        return (
          <>
            {/* Mobile*/}
            <div className="md:hidden text-center px-4 py-10">
              <h2 className="text-xl font-bold mb-2 text-gray-900">
                ¿Querés contactarme?
              </h2>
              <p className="text-sm text-gray-700 mb-4">
                Estoy disponible para proyectos freelance, propuestas laborales o simplemente para charlar sobre tech, música y cine.
              </p>
              <div className="flex flex-col gap-3 items-center">
                <a
                  href="mailto:huilenvilches@gmail.com"
                  className="bg-white border border-gray-300 text-gray-800 text-xs px-3 py-1.5 rounded-md shadow hover:bg-gray-100 transition"
                >
                  Email 💌
                </a>
                <a
                  href="https://www.linkedin.com/in/huilenvilches/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-300 text-gray-800 text-xs px-3 py-1.5 rounded-md shadow hover:bg-gray-100 transition"
                >
                  LinkedIn 💜
                </a>
              </div>
            </div>

            {/* Desktop */}
            <div className="hidden md:block relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-12 rounded-3xl shadow-2xl max-w-4xl w-full mx-auto text-gray-900 text-center overflow-hidden">
              <h2 className="text-4xl font-bold mb-4">¿Querés contactarme?</h2>
              <p className="text-lg mb-8">
                Estoy disponible para proyectos freelance, propuestas laborales o
                simplemente para charlar sobre tech, música y cine. ¡Escribime!
              </p>
              <form
                className="space-y-4 max-w-md mx-auto text-left relative"
                action={async (formData) => {
                  "use server";
                  const parsedSubmission = parseFormData(
                    ingestKey,
                    contactForm.form.schema,
                    formData
                  );
                  if (!parsedSubmission.success) {
                    throw new Error(JSON.stringify(parsedSubmission.errors));
                  }
                  sendEvent(ingestKey, parsedSubmission.data);
                }}
              >
                {contactForm.form.schema.map((field) => {
                  const Input = field.type === "textarea" ? "textarea" : "input";
                  return (
                    <label key={field.id} className="flex gap-x-2">
                      <span className="sr-only">{field.label}</span>
                      <Input
                        {...field}
                        rows={4}
                        className="w-full border border-gray-300 rounded p-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200"
                      />
                    </label>
                  );
                })}
                <button
                  type="submit"
                  className="bg-white border border-gray-300 text-gray-800 py-2 px-4 rounded shadow hover:bg-gray-100 transition w-full"
                >
                  Enviar 💌
                </button>
              </form>
            </div>
          </>
        );
      }}
    </Pump>
  );
}
