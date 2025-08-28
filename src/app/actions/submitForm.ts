// src/app/actions/submitForm.ts
'use server';

import { parseFormData, sendEvent } from "basehub/events";

export interface FormSubmissionResult {
  success: boolean;
  error?: string;
}

// Versión directa con tu ID específico
export async function submitForm(
  ingestKey: `bshb_event_317471939:${string}`,
  schema: any,
  formData: FormData
): Promise<FormSubmissionResult> {
  try {
    const parsedSubmission = parseFormData(
      ingestKey,
      schema,
      formData
    );
    
    if (!parsedSubmission.success) {
      return {
        success: false,
        error: JSON.stringify(parsedSubmission.errors)
      };
    }
    
    await sendEvent(ingestKey, parsedSubmission.data);
    
    return {
      success: true
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
}
