import HeroSection from '@/components/hero-section';
import SkillsSection from '@/components/skills-section';
import ProjectsGallery from '@/components/projects-gallery';
import TestimonialsSection from '@/components/testimonials-section';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsGallery />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
