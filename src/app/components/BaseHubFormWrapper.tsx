// src/app/components/BaseHubFormWrapper.tsx
import { Pump } from "basehub/react-pump";
import { BaseHubForm } from "./BaseHubForm";

interface ContactForm {
  form: {
    ingestKey: BaseHubIngestKey;
    schema: any;
  };
}

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
      {async ([{ contactForm }]: [{ contactForm: ContactForm }]) => {
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