"use server";
import { runFlow } from '@genkit-ai/flow';
import { generateCourseContentFlow } from '@/ai/flows/courseContent';
import { z } from 'zod';

const TopicSchema = z.object({
  topic: z.string().min(3, { message: "Topic must be at least 3 characters." })
});

interface ActionResult {
  success: boolean;
  message?: string;
  data?: string;
  errors?: Record<string, string[]>;
}

export async function generateContentAction(prevState: any, formData: FormData): Promise<ActionResult> {
  const rawFormData = {
    topic: formData.get('topic') as string,
  };

  const validatedFields = TopicSchema.safeParse(rawFormData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { topic } = validatedFields.data;

  try {
    const result = await runFlow(generateCourseContentFlow, { topic });
    return { success: true, data: result, message: "Content generated successfully." };
  } catch (e: any) {
    console.error("Error running flow:", e);
    return { success: false, message: e.message || "Failed to generate content. Please try again." };
  }
}
