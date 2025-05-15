// src/ai/flows/generate-testimonials.ts
'use server';

/**
 * @fileOverview AI-powered testimonial generator flow.
 *
 * - generateTestimonials - A function that generates realistic testimonials based on provided skills and project descriptions.
 * - GenerateTestimonialsInput - The input type for the generateTestimonials function.
 * - GenerateTestimonialsOutput - The return type for the generateTestimonials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTestimonialsInputSchema = z.object({
  skills: z
    .string()
    .describe('A comma-separated list of the developer skills.'),
  projectDescriptions: z
    .string()
    .describe('Detailed descriptions of the projects completed by the developer.'),
  numberOfTestimonials: z.number().describe('The number of testimonials to generate.'),
});

export type GenerateTestimonialsInput = z.infer<typeof GenerateTestimonialsInputSchema>;

const GenerateTestimonialsOutputSchema = z.array(
  z.object({
    author: z.string().describe('The name of the testimonial author.'),
    role: z.string().describe('The role of the testimonial author.'),
    text: z.string().describe('The testimonial text.'),
    rating: z.number().min(1).max(5).describe('The rating given by the author (1-5).'),
  })
);

export type GenerateTestimonialsOutput = z.infer<typeof GenerateTestimonialsOutputSchema>;

export async function generateTestimonials(input: GenerateTestimonialsInput): Promise<GenerateTestimonialsOutput> {
  return generateTestimonialsFlow(input);
}

const generateTestimonialsPrompt = ai.definePrompt({
  name: 'generateTestimonialsPrompt',
  input: {schema: GenerateTestimonialsInputSchema},
  output: {schema: GenerateTestimonialsOutputSchema},
  prompt: `You are an AI-powered testimonial generator for a developer portfolio.

  Generate realistic testimonials based on the developer's skills and project descriptions.
  The testimonials should include an author name, their role, the testimonial text, and a rating between 1 and 5.
  The number of testimonials to generate is: {{{numberOfTestimonials}}}.

  Skills: {{{skills}}}
  Project Descriptions: {{{projectDescriptions}}}

  Format the output as a JSON array of testimonial objects.
  Each object should have the following properties:
  - author (string): The name of the testimonial author.
  - role (string): The role of the testimonial author.
  - text (string): The testimonial text.
  - rating (number): The rating given by the author (1-5).`,
});

const generateTestimonialsFlow = ai.defineFlow(
  {
    name: 'generateTestimonialsFlow',
    inputSchema: GenerateTestimonialsInputSchema,
    outputSchema: GenerateTestimonialsOutputSchema,
  },
  async input => {
    const {output} = await generateTestimonialsPrompt(input);
    return output!;
  }
);
