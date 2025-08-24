import { defineFlow } from '@genkit-ai/flow';
import { z } from 'zod';
import { ai } from '../genkit';

export const generateCourseContentFlow = defineFlow(
  {
    name: 'generateCourseContentFlow',
    inputSchema: z.object({ topic: z.string().min(3, { message: "Topic must be at least 3 characters." }) }),
    outputSchema: z.string(),
  },
  async (input) => {
    const { topic } = input;
    
    // This is a very basic prompt. In a real application, this would be much more sophisticated.
    const prompt = `Generate a concise and engaging introductory paragraph (approximately 100-150 words) for an online college course on the topic: "${topic}". The paragraph should highlight key concepts students will learn and the overall value of the course. Format it as a single paragraph.`;
    
    try {
      const llmResponse = await ai.generate({
        prompt,
        model: 'gemini-1.5-flash-latest', // Ensure this model is available and configured
        config: { temperature: 0.7 },
        tools: [], // Explicitly empty if no tools
      });
      
      return llmResponse.text();
    } catch (error) {
      console.error("Error generating course content:", error);
      // Provide a fallback or more specific error message
      if (error instanceof Error) {
        return `An error occurred while generating content for "${topic}": ${error.message}. Please try again later.`;
      }
      return `An unexpected error occurred while generating content for "${topic}". Please try again later.`;
    }
  }
);
