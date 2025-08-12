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
            <div className="relative md:bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 md:p-12 md:rounded-3xl md:shadow-2xl max-w-4xl w-full mx-auto text-gray-900 text-center overflow-hidden">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">¿Querés que hablemos?</h2>
              <p className="text-base md:text-lg mb-8">
                Estoy disponible para proyectos freelance, propuestas laborales o para charlar sobre tech, música y cine. Escribime!
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
                        className="w-full border border-gray-300 rounded p-2 shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-pink-200"
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
