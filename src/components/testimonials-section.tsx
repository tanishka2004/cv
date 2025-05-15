import { generateTestimonials, type GenerateTestimonialsInput, type GenerateTestimonialsOutput } from '@/ai/flows/generate-testimonials';
import TestimonialCard from './testimonial-card';
import type { Testimonial } from '@/types';
import { skillsData } from '@/data/skills';
import { projectsData } from '@/data/projects';

async function getTestimonials(): Promise<Testimonial[]> {
  const skillsString = skillsData.map(s => s.name).join(', ');
  const projectDescriptions = projectsData.map(p => `${p.title}: ${p.description}`).join('\n');

  const input: GenerateTestimonialsInput = {
    skills: skillsString,
    projectDescriptions: projectDescriptions,
    numberOfTestimonials: 3, // Generate 3 testimonials
  };

  try {
    const aiTestimonials: GenerateTestimonialsOutput = await generateTestimonials(input);
    // Map AI output to Testimonial type, adding placeholder avatar if needed
    return aiTestimonials.map((t, index) => ({
      ...t,
      avatarUrl: `https://placehold.co/100x100.png?text=${t.author.substring(0,1)}`, // Placeholder avatar
      dataAiHint: "professional portrait" // AI hint for placeholder image
    }));
  } catch (error) {
    console.error("Failed to generate testimonials:", error);
    // Fallback testimonials if AI fails
    return [
      { author: 'Jane Doe', role: 'Project Manager @ Tech Solutions', text: 'Tanishka is an exceptional developer with a keen eye for detail and a strong commitment to quality. A true asset to any team!', rating: 5, avatarUrl: 'https://placehold.co/100x100.png?text=JD', dataAiHint: 'business woman' },
      { author: 'John Smith', role: 'Lead Engineer @ Innovate Corp', text: 'Working with Tanishka was a pleasure. Their technical skills and problem-solving abilities are top-notch.', rating: 5, avatarUrl: 'https://placehold.co/100x100.png?text=JS', dataAiHint: 'software engineer' },
      { author: 'Alice Brown', role: 'CEO @ StartupX', text: "Tanishka delivered an outstanding product that exceeded our expectations. Highly recommended for frontend and full-stack development.", rating: 4, avatarUrl: 'https://placehold.co/100x100.png?text=AB', dataAiHint: 'startup ceo' },
    ];
  }
}


export default async function TestimonialsSection() {
  const testimonials = await getTestimonials();

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Words From <span className="gradient-text">Collaborators</span></h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients and colleagues say about my work.
          </p>
        </div>
        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No testimonials available at the moment.</p>
        )}
      </div>
    </section>
  );
}
