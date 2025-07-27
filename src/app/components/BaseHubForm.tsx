import { Pump } from "basehub/react-pump"
import { parseFormData, sendEvent } from "basehub/events"
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
          <div className="relative bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 md:p-12 md:rounded-3xl md:shadow-2xl max-w-4xl w-full mx-auto text-gray-900 text-center overflow-hidden">
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
                  // The parseFormData return type lets you
                  // handle parsing errors. Since this is a simple
                  // example, we're just throwing an error.
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
        );
      }}
    </Pump>
  );
}