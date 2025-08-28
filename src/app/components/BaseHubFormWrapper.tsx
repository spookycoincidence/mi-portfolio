import { Pump } from "basehub/react-pump";
import { BaseHubForm } from "./BaseHubForm";

export function BaseHubFormWrapper() {
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
        
        return (
          <BaseHubForm 
            ingestKey={contactForm.form.ingestKey}
            schema={contactForm.form.schema}
          />
        );
      }}
    </Pump>
  );
}