
import HeroSection from '@/components/hero-section';
import AboutMeSection from '@/components/about-me-section';
import SkillsSection from '@/components/skills-section';
import ProjectsGallery from '@/components/projects-gallery';
import ContactSection from '@/components/contact-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ProjectsGallery />
      <ContactSection />
    </>
  );
}
